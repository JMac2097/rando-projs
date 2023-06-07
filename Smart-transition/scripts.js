function spaNavigate(data) {
	// Fallback for browsers that don't support this API:
	if (!document.startViewTransition) {
		updateTheDOMSomehow(data);
		return;
	}
    console.log(data);

    // With a transition:
    document.startViewTransition(() => updateTheDOMSomehow(data));
}

