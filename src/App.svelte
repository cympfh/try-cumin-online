<script>
  import Icon from "svelte-awesome";
  import { book, leaf } from "svelte-awesome/icons";
  import SourceCode from "./components/SourceCode.svelte";
  import JsonCode from "./components/JsonCode.svelte";
  import Share from "./components/Share.svelte";
  import { source, compiled } from "./util/cumincode.ts";
  import { Version } from "./version.ts";
</script>

<svelte:head>
  <title>Try Cumin Online</title>
</svelte:head>

<div class="section">
  <div class="container">
    <h1 class="title">Try Cumin Online <Icon data={leaf} scale="2.1" /></h1>
    <h2 class="subtitle is-6">{Version}</h2>
    <div class="columns">
      <div class="column">
        <div class="control">
          <SourceCode />
        </div>
        <div class="control">
          <Share />
          <a
            class="button is-dark is-small"
            href="http://cympfh.cc/cumin/"
            target="_blank"
          >
            <Icon data={book} />&nbsp; Learn Cumin</a
          >
        </div>
      </div>
      <div class="column">
        <div class="control">
          <JsonCode />
        </div>
      </div>
    </div>
  </div>
</div>

<style global lang="scss">
  @import "main.scss";

  h1 > svg {
    position: relative;
    top: 0.3rem;
  }

  .textarea {
    height: 400px;
    line-height: normal;
    font-size: 1rem;
    font-family: "Noto Sans Mono CJK JP", "Source Han Code JP", "Ricty",
      "Ricty Diminished", "Ricty Diminished Discord", "Myrica M", "MyricaM M",
      "Rounded M+ 1m regular", "Rounded M+ 2m regular",
      "Rounded Mgen+ 1m regular", "Rounded Mgen+ 2m regular", "Migu 1M",
      "Migu 2M", "VL ゴシック", "M+ 1m", "M+ 2m", "Yutapon coding Regular",
      SFMono-Regular, Consolas, "Roboto Mono", "Courier New", Courier, Meiryo,
      "Andale Mono WT", "Andale Mono", "Lucida Console",
      "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
      "Liberation Mono", "Nimbus Mono L", Monaco, monospace;
  }
</style>
