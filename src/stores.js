import {writable} from 'svelte/store'

export const FeedbackStore = writable([
		{
			id: 1, 
			rating: 10, 
			text: 'test test test test test test test test'
		},
		{
			id: 2, 
			rating: 9,
			text: 'this is some more test data to get this going'
		},
		{
			id: 3,
			rating: 8,
			text: 'more feedback coming in from a different user'
		}
])