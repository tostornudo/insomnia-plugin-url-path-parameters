module.exports.requestHooks = [
  context => {
    const url = new URL(context.request.getUrl());

    // Sort by param name length so `foo` doesn't clobber `foobar`
    for (const { name, value } of context.request.getParameters().sort((a, b) => b.name.length - a.name.length)) {
      if (!name) continue;
      
      const toReplace = `${name}`;
      let href = url.href;

      if (!href.includes(toReplace)) {
        // Not found in URL, treat as regular parameter
        continue;
      }

      while (href.includes(toReplace)) {
        href = href.replace(toReplace, value);
      }
      url.href = href;
      context.request.removeParameter(name);
    }

    context.request.setUrl(url.toString());
  },
];
