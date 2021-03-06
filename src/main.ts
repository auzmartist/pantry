import AppMain from './app-main'
import AppRecipe from './app-recipe'
import AppIngredient from './app-ingredient'
import AppPantry from './pantry/app-pantry'
import AppQty from './app-qty'
import AppStock from './app-stock'
import AppFilterable from './app-filterable'
import AppChip from './app-chip'

import * as CamElements from '@auzmartist/cam-el'

const components = {
	AppMain,
	AppRecipe,
	AppIngredient,
	AppPantry,
	AppQty,
	AppStock,
	AppFilterable,
	AppChip,

	...CamElements,
}

export interface Element extends HTMLElement {
	[key: string]: any
}
