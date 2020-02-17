
import state from "./state";

import { layout } from "../init";

export default function() {
	layout.update();
	document.querySelector("h1").innerHTML = state.input;
}
