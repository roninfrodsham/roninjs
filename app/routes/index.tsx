import { RoninMask } from "~/components/RoninMask";
import stylesUrl from "~/styles/index.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};


export default function Index() {
  return (
    <div className="content">
      <div className="center-content">
        <RoninMask />
      </div>
    </div>
  );
}
