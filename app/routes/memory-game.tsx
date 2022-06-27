import { useState, useEffect } from 'react'
import type { LinksFunction } from "@remix-run/cloudflare";
import { GameButton } from '~/components/simon/gameButton'
import { StartButton } from '~/components/simon/startButton'
import { getRandomInt, timeout } from "~/utils/misc"
import logo from '~/images/logo.svg'
import stylesUrl from "~/styles/simon.css";
import greenMp3 from "~/sounds/green.mp3"
import redMp3 from "~/sounds/red.mp3"
import yellowMp3 from "~/sounds/yellow.mp3"
import blueMp3 from "~/sounds/blue.mp3"
import errorMp3 from "~/sounds/error.mp3"

type GameStateProps = {
  simonMode: boolean,
  colours: Array<string>,
  score: number,
  speed: number,
  audioPlayback: number,
  userPlay: boolean,
  userColours: Array<string>
}

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function MemoryGame() {
  const colours: Array<string> = ["green", "red", "yellow", "blue"]
  const initialGameState: GameStateProps = {
    simonMode: false,
    colours: [],
    score: 0,
    speed: 800,
    audioPlayback: 2,
    userPlay: false,
    userColours: [],
  }
  const [greenSound, setGreenSound] = useState<HTMLAudioElement>()
  const [redSound, setRedSound] = useState<HTMLAudioElement>()
  const [yellowSound, setYellowSound] = useState<HTMLAudioElement>()
  const [blueSound, setBlueSound] = useState<HTMLAudioElement>()
  const [errorSound, setErrorSound] = useState<HTMLAudioElement>()
  const [activeGame, setActiveGame] = useState<boolean>(false)
  const [gameState, setGameState] = useState<GameStateProps>(initialGameState)
  const [currentColour, setCurrentColour] = useState<string | null>(null)

  function startGame() {
    setActiveGame(true)
  }

  useEffect(() => {
    window.addEventListener("contextmenu", function (e) {
      e.preventDefault()
    })
    setGreenSound(new Audio(greenMp3))
    setRedSound(new Audio(redMp3))
    setYellowSound(new Audio(yellowMp3))
    setBlueSound(new Audio(blueMp3))
    setErrorSound(new Audio(errorMp3))
  }, [])

  useEffect(() => {
    if (activeGame) {
      setGameState({ ...initialGameState, simonMode: true })
    } else {
      setGameState(initialGameState)
    }
  }, [activeGame])

  useEffect(() => {
    if (activeGame && gameState.simonMode) {
      let randomColour = colours[getRandomInt(4)]
      const coloursCopy = [...gameState.colours]
      coloursCopy.push(randomColour)
      setGameState({ ...gameState, colours: coloursCopy })
    }
  }, [activeGame, gameState.simonMode])

  useEffect(() => {
    if (activeGame && gameState.simonMode && gameState.colours.length) {
      lightUpColours()
    }
  }, [activeGame, gameState.simonMode, gameState.colours.length])

  async function lightUpColours() {
    await timeout(1000)
    for (let index = 0; index < gameState.colours.length; index++) {
      setCurrentColour(gameState.colours[index])
      playSound(gameState.colours[index])
      await timeout(gameState.speed)
      setCurrentColour("")
      await timeout(gameState.speed)
    }
    const newGameSpeed = gameState.speed - 100 < 200 ? 200 : gameState.speed - 100
    setGameState({
      ...gameState,
      simonMode: false,
      userPlay: true,
      userColours: [...gameState.colours],
      speed: newGameSpeed,
    })
  }

  async function gameButtonClickHandle(selectedColour: string) {
    if (!gameState.simonMode && gameState.userPlay) {
      const userColoursCopy = [...gameState.userColours]
      const colour = userColoursCopy.shift()
      setCurrentColour(selectedColour)
      playSound(selectedColour)

      if (selectedColour === colour) {
        if (userColoursCopy.length) {
          console.log("SHOW NEXT COLOUR")
          setGameState({ ...gameState, userColours: userColoursCopy })
        } else {
          await timeout(200)
          setCurrentColour("")
          setGameState({
            ...gameState,
            simonMode: true,
            userPlay: false,
            score: gameState.colours.length,
            userColours: [],
          })
          console.log("ALL CORRECT SWITCH TO SIMON")
        }
      } else {
        errorSound.play()
        await timeout(500)
        setGameState({
          ...initialGameState,
          simonMode: false,
          userPlay: false,
          userColours: [],
        })
        setActiveGame(false)
      }
      await timeout(200)
      setCurrentColour("")
    }
  }

  function playSound(selectedColour: string) {
    switch (selectedColour) {
      case "green":
        greenSound.playbackRate = gameState.audioPlayback
        greenSound.play()
        break
      case "red":
        redSound.playbackRate = gameState.audioPlayback
        redSound.play()
        break
      case "yellow":
        yellowSound.playbackRate = gameState.audioPlayback
        yellowSound.play()
        break
      case "blue":
        blueSound.playbackRate = gameState.audioPlayback
        blueSound.play()
        break
    }
  }

  return (
    <div className="content">
      <div className="center-content">
        <div className="simon circle oh bGray">
          <div className="buttonsContainer pa circle oh">
            {colours &&
              colours.map((colour) => (
                <GameButton
                  colour={colour}
                  lightUp={currentColour === colour}
                  onClick={gameButtonClickHandle}
                  key={colour}
                  active={gameState.userPlay}
                />
            ))}
            <div className="divider pa hoz bGray shadow10"></div>
            <div className="divider pa vert bGray shadow10"></div>
            <div className="divider pa hoz bGray z10"></div>
            <div className="divider pa vert bGray z10"></div>
          </div>
          <div className="centreContainer cc pa circle bGray shadow10">
            <div className="centreSpacer circle oh">
              <div className="speakerContainer pa circle oh">
                <div className="speakerClip">
                  <div className="speaker"></div>
                </div>
              </div>
              <div className="controlsContainer pa circle oh">
                <div className="controlsInner cc">
                  <img src={logo} className="logo bGray" alt="Simon Logo" />
                  <div className="controls cc">
                    <div className="screenShadow cc">
                      <div className="screen cc">
                        <input type="text" value={gameState.score} disabled />
                      </div>
                    </div>
                    <StartButton onClick={startGame} activeGame={activeGame} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}