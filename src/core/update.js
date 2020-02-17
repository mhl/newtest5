
import state from "./state";

import { layout } from "../init";

export default function() {
	layout.update();

	console.log("example input setting:", state.input);
}
