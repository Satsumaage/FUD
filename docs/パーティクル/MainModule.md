---
sidebar_position: 1
---

## Main Module

Main Moduleってなんやねん</br>

![module](./img/MainModule.png)</br>
↑こいつのこと

# Duration

デフォルト 5(秒)</br>
設定できる範囲 0.05~100,000</br>
</br>
**パーティクルが何秒間出続けるか設定するところ**</br>
デフォルトで後述のLoopingにチェックが入ってるからチェック外したら違いがわかりやすい</br>
〇〇 over Lifetimeとかの指定がない状態の横軸は基本ここ

# Looping

デフォルト ON</br>
</br>
名前の通り</br>
Durationで設定した時間が終わったらもう一回最初から再生してくれる</br>
**永遠にパーティクル出してくれる**ってｺﾄ

# Prewarm

デフォルト OFF</br>
</br>
LoopingをONにしていないと使えない</br>
ONにすると**再生したときにループ2回目の状態から再生してくれるやつ**</br>
再生するとわかるけどOFFのときは原点からパーティクルでるのに対してONは元々再生してましたけど？って感じで原点からパーティクルが既に出てる状態でパーティクルが出せる

# Start Delay

デフォルト 0(秒)</br>
設定できる範囲 0~3.402823e+38</br>
</br>
PrewarmがOFFにしていないと使えない</br>
名前の通り**スタートに遅延がかけれるやつ**</br>
オブジェクト本体がアクティブになってから(厳密には違うらしいけどわからん)何秒後からパーティクルを出すか決めれる</br>
複数のParticle Systemを組み合わせてエフェクト作る時によく使うらしい

# Start Lifetime

デフォルト 5(秒)</br>
設定できる範囲 0.0001~3.402823e+38</br>

**パーティクル1つ1つの寿命が設定できるやつ**</br>
じゃあべつにLifetimeって名前でよくね？って思うけどこれCollisionの項目で衝突する毎にどれくらい寿命が減るかっていうのが弄れるらしい、他にもsub emitterにも関係があるとか</br>
だから寿命の初期設定をする項目って意味でStart Lifetimeって名前なんだろうね、多分

# Start Speed

デフォルト 5(m/秒)</br>
設定できる範囲 -100,000~100,000</br>
</br>
**パーティクルが出てきた時のスピードが設定できるやつ**</br>
シンプルだね

# 3D Start Size

デフォルト OFF</br>
</br>
触るとわかるけど**パーティクル1つ1つのスケールをXYZ個別で設定できるやつ**

# Start Size

デフォルト 1(倍)</br>
設定できる範囲 0~100,000</br>
</br>
3D Start SizeがOFFの時しか設定が出来ない</br>
こっちは3D Start Sizeとは違って**スケールのXYZを共通の値でサイズ設定ができる**</br>
形変える気ないならこっちの方が楽だしいいかも？

# 3D Start Rotation

デフォルト OFF</br>
</br>
触るとわかるけど**パーティクル1つ1つの角度を何度傾けるかXYZ個別で設定できるやつ**

# Start Rotation

デフォルト 0(度)</br>
設定できる範囲 -100,000~100,000</br>
</br>
3D Rotation SizeがOFFの時しか設定が出来ない</br>
こっちは3D Rotation Sizeとは違って**角度のXYZを共通の値でどのくらい傾けるかの設定ができる**</br>
時計回りで傾く

# Flip Rotation

デフォルト 0(%)</br>
設定できる範囲 0~1</br>
</br>
100%を1として**どのくらいの割合のパーティクルが左右反転してでてくるか設定できるやつ**</br>
左右非対称なパーティクルに使うといい感じになるらしいよ

# Start Color

デフォルト RGBA(255,255,255,1)</br>
</br>
**パーティクルが出てきたときの色**</br>
頂点カラーを使用しているらしい

# Gravity Source

デフォルト 3D Physics</br>
選択できるもの 3D Physics, 2D Physics</br>
</br>
**そもそもVRCって3Dだし弄る必要ないんじゃね？**</br>
一応Unity Documentationには2D または 3D 物理システムからの重力強度を使用するかどうかを指定する所って書いてあるけどまあ気にしなくてよし、3DゲームのVRCだし。

# Gravity Modifier

デフォルト 0(倍)</br>
設定できる範囲 -100,000~100,000</br>
</br>
**重力の影響をどのくらい受けるか設定できるやつ**</br>
ワールドの重力設定によって変化しちゃうから基本的にForce over Lifetimeでいじるらしい

# Simulation Space

デフォルト Local</br>
選択できるもの Local, World, Custom</br>
</br>
**パーティクルを親オブジェクトのローカル座標で動かすかワールド座標で動かすか設定できるやつ**</br>
LocalにするとParticle Systemの座標が変化したときに放出されたパーティクルも一緒に追従する</br>
Worldにすると発生したパーティクルはParticle Systemが動いても影響されず放出された位置が原点になる</br>
**オブジェクトに動きがあるものはWorld、ないものはLocal**でよさそう</br>
Customにすると追従先が選択できる、追従先の座標が動いたときにパーティクルも一緒に少し動くっぽい？
細かいことはわからん

# Simulation Speed

デフォルト 1(倍)</br>
設定できる範囲 0~100</br>
</br>
**パーティクルの動きやら放出速度やら全ての動きに対して倍率の設定ができるやつ**</br>
数値が小さくなると負荷が大きくなって数値を大きくすると軽くなるんだって</br>
パーティクル出てる状態でアニメーションとかで数値0にすると今出てるパーティクルがその場で停止できるから上手く使えばいい感じに表現できるんじゃない？しらんけど

# Delta Time

デフォルト Scaled</br>
</br>
**VRCではまず使わないらしい**</br>
Time Scaledの値を使用するかどうか決めるやつらしい、使わないらしいし気にする必要なし

# Scaling Mode

デフォルト Local</br>
選択できるもの Local, Hierarchy, Shape</br>
</br>
**Particle System全体のスケールとパーティクル1つ1つのサイズがどこのTransformに依存するか決めれるところ**</br>
Localだとこのオブジェクトのみ、Hierarchyにすると親のオブジェクトも、ShapeにするとShapeにのみTransformが影響しパーティクルのサイズ自体は変わらない

# Play On Awake

デフォルト ON</br>
</br>
**オブジェクトがアクティブになったときにパーティクルを再生させるか決めるやつ**</br>
アバターやらパーティクルライブで使う分には全く使わないんだって

# Emitter Velocity

デフォルト Rigidbody</br>
選択できるもの Transform, Rigidbody, Custom</br>
</br>
**粒子の速度の計算方法の指定ができるらしい**</br>
Rigidbodyを選択するとそれを元に速度計算、Transformで発生源の位置の変化で計算するらしい</br>
Rate over DistanceとInherit Velocityに使う計算方法をここで指定してるんだってさ</br>
おまけだけどRigidbodyって剛体って意味らしいよ、物理演算云々のやつらしい

# Max Particles

デフォルト 1000(個)</br>
選択できる範囲 0~2,147,483,647</br>
</br>
**同時にでるパーティクルの上限を決めるやつ**</br>
パーティクルの数が上限に達したら古いものから消えていく

# Random Seed

デフォルト ON</br>
</br>
**基本ONのままでいい**</br>
OFFにするとRandomSeedの項目が出てきてパーティクルの出方をseed値で固定出来る、右のReseedを押すとランダムでseed値を出してくれる

# Stop Action

デフォルト None</br>
選択できるもの None, Disable, Destroy, Callback</br>
</br>
**パーティクルの再生が終わった時にどういう動作をするか選ぶやつ**</br>
**LoopingついてたらNoneでいいし、ついてなくても基本Noneでよさそう**</br>
実際は知らないけどパーティクルライブとかで使う時はDisable使ってそうな気がする</br>
名前の通りNoneはなにもしない、DisableはParticle Systemのオブジェクトを非アクティブ化する</br>
DestroyでParticle Systemのオブジェクトを破壊(!?)する、破壊ってなに?</br>
CallbackはParticleSystemのオブジェクトにアタッチされたMonoBehaviourのOnParticleSystemStoppedコールバックを呼ぶ、これ使うと細かい終了判定ができるけどコード書けないと使えないよ～～ん

# Culling Mode

デフォルト Automatic</br>
選択できるもの Automatic, Pause and catch-up, Pause, Always Simulate</br>
</br>
**パーティクル全体のが画面外にある時パーティクルの再生をどうするかきめるやつ**</br>
基本はAutomaticでいいけどたまに変えることがあるらしい、どういうときに変えるのかイマイチわからん

# Ring Buffer Mode

デフォルト Disabled</br>
選択できるもの Disabled, Pause Until Replaced, Loop Until Replaced</br>
</br>
**Max Particlesに設定した値までパーティクルが出続けるか決めるやつ**</br>
Lifetimeが終わっても上限までパーティクルが残り続ける(多分)</br>
Max Particlesに到達すると古いものを除去し新しく出るパーティクルに使いまわしされる</br>
DisabledでLifetimeが終わったらパーティクル除去</br>
Pause Until ReplacedはLifetimeを超えたパーティクルの〇〇 over Lifetime等の最後の状態を維持</br>
Loop Until Replacedはパーティクルが存在してる間は指定した範囲のアニメーションを再生し続け、
上限に達して消えるパーティクルは最後までアニメーションが再生される(つまり上限を超えたパーティクルが存在することになる)


# 参考
[VRChatプレイヤーによるParticle System解説 ～Main Module編～](https://qiita.com/abcde_kind/items/82cddca8be2917c0bded)</br>
[UnityDocumantation](https://docs.unity3d.com/ja/2022.1/ScriptReference/ParticleSystem.MainModule-gravitySource.html)</br>
[【Unity】Particle System の「Simulation Space」](https://torisan-net.com/blog/2677)</br>
[パーティクルメインモジュールの全項目を映像付きで徹底解説します!［Unity］](https://walkable-2020.com/unity/particlesystem-main-module/#toc27)</br>
[ParticleSystemの再生の終了判定（StopAction）【Unity】](https://mackysoft.net/particlesystem-stopaction/)