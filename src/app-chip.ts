import { define, html, Hybrids } from 'hybrids';
import {Element} from './main'

const AppChip: Hybrids<Element> = {
	error: false,
	warn: false,
	slot: false,
	rgb: (host) =>
		host.slot ? '150, 150, 239' :
		host.error ? '239, 71, 111' :
		host.warn ? '255, 209, 102' :
		'white',
	render: (host) => html`
		${!host.slot && html`
			${host.warn && html`<span>&#9888;</span>`}
			${host.error && html`<span>&#9888;</span>`}
		`}
		<slot></slot>
	<style>
		:host {
			padding: 1px 6px;
			border: 1px solid rgba(${host.rgb}, 0.4);
			background: rgba(${host.rgb}, 0.1);
		}
		span {
			color: rgba(${host.rgb}, 1);
		}
	</style>`
}

define('app-chip', AppChip)
export default AppChip