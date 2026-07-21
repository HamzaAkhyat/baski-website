/* BASKI Automation — renders blueprint.html from ?id=<key> using window.BASKI_BLUEPRINTS */
(function () {
  var root = document.getElementById('bp-root');
  if (!root) return;

  var data = window.BASKI_BLUEPRINTS || {};
  var id = new URLSearchParams(window.location.search).get('id');
  var bp = id ? data[id] : null;

  // Fallback: no valid id -> list all blueprints
  if (!bp) {
    var cards = Object.keys(data).map(function (key) {
      var b = data[key];
      return (
        '<a href="blueprint.html?id=' + key + '" class="group bg-surface-container-low/40 backdrop-blur-sm border border-surface-variant p-6 flex items-center gap-4 hover:border-primary-container transition-colors brutal-shadow-hover">' +
          '<span class="material-symbols-outlined text-3xl text-primary-container">' + b.icon + '</span>' +
          '<div>' +
            '<div class="font-headline-md text-lg uppercase">' + b.title + '</div>' +
            '<div class="font-label-mono text-xs text-on-surface-variant uppercase">' + b.code + '</div>' +
          '</div>' +
        '</a>'
      );
    }).join('');
    root.innerHTML =
      '<div class="py-10">' +
        '<div class="font-label-mono text-label-mono text-primary-container uppercase mb-4">// Blueprint not found</div>' +
        '<h1 class="font-display-xl text-headline-lg-mobile md:text-headline-lg uppercase mb-8">Pick a blueprint</h1>' +
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">' + cards + '</div>' +
      '</div>';
    return;
  }

  document.title = bp.title + ' — BASKI Automation';

  // Workflow diagram — n8n-style node graph built from the steps.
  var diagram = bp.steps.map(function (s, i) {
    var n = (i + 1 < 10 ? '0' : '') + (i + 1);
    var node =
      '<div class="flow-node shrink-0 w-full md:w-44 bg-surface-container/70 backdrop-blur-sm brutalist-border p-4 text-center brutal-shadow">' +
        '<div class="w-12 h-12 mx-auto mb-3 bg-primary-container text-white flex items-center justify-center">' +
          '<span class="material-symbols-outlined text-2xl">' + s.icon + '</span>' +
        '</div>' +
        '<div class="font-label-mono text-[10px] text-primary-container uppercase mb-1">NODE_' + n + '</div>' +
        '<div class="font-headline-md text-sm uppercase leading-tight text-on-surface">' + s.t + '</div>' +
      '</div>';
    var connector = (i < bp.steps.length - 1)
      ? '<div class="flex items-center justify-center text-primary-container shrink-0 py-2 md:py-0 md:px-1">' +
          '<span class="material-symbols-outlined text-3xl hidden md:block">arrow_forward</span>' +
          '<span class="material-symbols-outlined text-3xl md:hidden">arrow_downward</span>' +
        '</div>'
      : '';
    return node + connector;
  }).join('');

  var steps = bp.steps.map(function (s, i) {
    var n = (i + 1 < 10 ? '0' : '') + (i + 1);
    return (
      '<div class="flex gap-5 border-l-2 border-surface-variant pl-6 pb-8 relative">' +
        '<div class="absolute -left-[11px] top-0 w-5 h-5 bg-primary-container flex items-center justify-center font-label-mono text-[10px] text-white font-bold">' + n + '</div>' +
        '<div>' +
          '<h4 class="font-headline-md text-lg uppercase mb-1">' + s.t + '</h4>' +
          '<p class="font-body-md text-on-surface-variant">' + s.d + '</p>' +
        '</div>' +
      '</div>'
    );
  }).join('');

  var stack = bp.stack.map(function (s) {
    return (
      '<div class="flex items-start justify-between gap-4 py-3 border-b border-surface-variant">' +
        '<span class="font-label-mono text-label-mono text-white uppercase">' + s.name + '</span>' +
        '<span class="font-body-md text-sm text-on-surface-variant text-right">' + s.d + '</span>' +
      '</div>'
    );
  }).join('');

  var outcomes = bp.outcomes.map(function (o) {
    return (
      '<div class="p-4 border border-surface-variant bg-surface-container/30 backdrop-blur-sm">' +
        '<div class="text-label-mono text-on-surface-variant uppercase mb-1 text-xs">' + o.label + '</div>' +
        '<div class="text-2xl md:text-3xl font-headline-lg text-primary">' + o.value + '</div>' +
      '</div>'
    );
  }).join('');

  root.innerHTML =
    // Breadcrumb
    '<div class="font-label-mono text-xs text-on-surface-variant uppercase mb-8 flex items-center gap-2 flex-wrap">' +
      '<a class="hover:text-primary" href="index.html">Home</a><span>/</span>' +
      '<a class="hover:text-primary" href="index.html#blueprints">Blueprints</a><span>/</span>' +
      '<span class="text-primary-container">' + bp.code + '</span>' +
    '</div>' +

    // Header
    '<div class="mb-12">' +
      '<div class="flex items-center gap-4 mb-6">' +
        '<div class="w-16 h-16 bg-primary-container text-white flex items-center justify-center brutal-shadow">' +
          '<span class="material-symbols-outlined text-4xl">' + bp.icon + '</span>' +
        '</div>' +
        '<span class="font-label-mono text-label-mono text-on-surface-variant uppercase">' + bp.code + '</span>' +
      '</div>' +
      '<h1 class="font-display-xl text-[36px] md:text-headline-lg uppercase leading-tight mb-4">' + bp.title + '</h1>' +
      '<p class="font-headline-md text-lg md:text-headline-md text-on-surface-variant max-w-3xl uppercase tracking-wide border-l-4 border-primary-container pl-5">' + bp.tagline + '</p>' +
    '</div>' +

    // Outcomes
    '<div class="grid grid-cols-3 gap-4 mb-16 max-w-2xl">' + outcomes + '</div>' +

    // Workflow diagram
    '<div class="mb-20">' +
      '<h2 class="font-label-mono text-label-mono text-primary-container uppercase mb-8">// Workflow</h2>' +
      '<div class="bg-black/30 backdrop-blur-sm border border-surface-variant p-6 md:p-10 overflow-x-auto">' +
        '<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-1 min-w-full">' + diagram + '</div>' +
      '</div>' +
    '</div>' +

    // Body grid
    '<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">' +
      '<div class="lg:col-span-7 space-y-12">' +
        '<div>' +
          '<h2 class="font-label-mono text-label-mono text-primary-container uppercase mb-4">// Overview</h2>' +
          '<p class="font-body-lg text-on-surface-variant leading-relaxed">' + bp.overview + '</p>' +
        '</div>' +
        '<div>' +
          '<h2 class="font-label-mono text-label-mono text-primary-container uppercase mb-8">// How it works</h2>' +
          '<div>' + steps + '</div>' +
        '</div>' +
      '</div>' +
      '<aside class="lg:col-span-5 space-y-10">' +
        '<div class="bg-surface-container/60 backdrop-blur-md brutalist-border p-8 brutalist-shadow">' +
          '<h3 class="font-label-mono text-label-mono text-primary-container uppercase mb-4">Stack</h3>' +
          stack +
        '</div>' +
        '<div class="bg-surface-container/60 backdrop-blur-md brutalist-border p-8 brutalist-shadow">' +
          '<h3 class="font-label-mono text-label-mono text-primary-container uppercase mb-4">Best for</h3>' +
          '<p class="font-body-md text-on-surface-variant">' + bp.bestFor + '</p>' +
        '</div>' +
        '<p class="font-label-mono text-xs text-on-surface-variant opacity-60 uppercase leading-relaxed">// Blueprint based on a proven n8n community pattern. Built and tailored to your tools on request.</p>' +
      '</aside>' +
    '</div>' +

    // CTA
    '<div class="border-t border-surface-container-high pt-16 text-center">' +
      '<h2 class="font-display-xl text-[28px] md:text-headline-lg-mobile uppercase mb-6">Want this running in your business?</h2>' +
      '<div class="flex flex-col md:flex-row justify-center gap-4">' +
        '<a class="bg-primary-container text-white font-label-mono text-label-mono px-10 py-5 uppercase font-bold brutal-shadow active:translate-y-1" href="contact.html">Build this workflow</a>' +
        '<a class="border-2 border-on-surface text-on-surface font-label-mono text-label-mono px-10 py-5 uppercase font-bold hover:bg-on-surface hover:text-background transition-none" href="index.html#blueprints">Back to blueprints</a>' +
      '</div>' +
    '</div>';
})();
