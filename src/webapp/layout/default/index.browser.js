// Compiled using marko@4.14.25 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/coasters$0.0.1/src/webapp/layout/default/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag")),
    marko_attrs0 = {
        lang: "en"
      },
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("b5b556"),
    marko_node0 = marko_createElement("HEAD", null, "1", null, 2, 0, {
        i: marko_const_nextId()
      })
      .e("META", {
          charset: "UTF-8"
        }, null, null, 0)
      .e("TITLE", null, null, null, 1)
        .t("Coasters");

function render(input, out, __component, component, state) {
  var data = input;

  out.be("HTML", marko_attrs0, "0", component);

  out.n(marko_node0, component);

  out.be("BODY", null, "4", component);

  component_globals_tag({}, out);

  out.t("Body ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "5");

  out.ee();

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
