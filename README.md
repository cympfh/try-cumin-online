# Try Cumin Online 🌿

This `cumin` works as wasm on you browser.

Check [cympfh.cc/try-cumin-online](https://cympfh.cc/try-cumin-online/).

### memo for @cympfh

#### ビルド・アップデート方法

`$GIT_ROOT/cumin` に cympfh/cumin があり,
`$GIT_ROOT/try-cumin-online` にこれがあるとする.
後者をカレントディレクトリにして,

```bash
$ make build          # ../cumin をターゲットにした wasm ビルドを含む
$ vim src/version.ts  # バージョンを合わせる
```

を実行. `make serve` で動作確認.
