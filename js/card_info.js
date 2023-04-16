/*
	[
		"", //ID
		"", //SRC
		"", //NAME
		"", //RARE
		"", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
*/

const ID = 0;
const SRC = 1;
const NAME = 2;
const RARE = 3;
const TYPE = 4;
const CLASS = 5;
const COLOR = 6;
const LEVEL = 7;
const COST = 8;
const LIMIT = 9;
const POWER = 10;
const COIN = 11;
const TIMING = 12;
const LB = 13;
const TEAM = 14;
const STORY = 15;
const JP_TEXT = 16;
const TW_TEXT = 17;

var cardData = [
	[
		"PR-Di001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di001.jpg", //SRC
		"サーバント #（GLOWING DIVA 10パック購入特典）", //NAME
		"PR", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"PR-Di002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di002.jpg", //SRC
		"アト（WIXOSS LAND 事前登録キャンペーン）", //NAME
		"PR", //RARE
		"ルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di003.jpg", //SRC
		"奏救の鍵主 ウムル＝ノル（WIXOSS LAND フォロー＆RTキャンペーン）", //NAME
		"PR", //RARE
		"ルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di004.jpg", //SRC
		"欠片へ一歩 ヒラナ（コロコロアニキ2020年冬号 付録）", //NAME
		"PR", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di005.jpg", //SRC
		"ENDLESS－PUNCHLINE（カードゲーマーvol.56 付録）", //NAME
		"PR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白赤緑", //COLOR
		"", //LEVEL
		"《白》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜Card Jockey＞＆全員レベル1以上<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【常】：このルリグはダウン状態でもアタックでき、1ターンにこのルリグがアタックできる上限は3になる。【自】（ターン1）：このルリグがアタックしたとき、あなたのデッキをシャッフルし一番上を公開する。そのカードがレベル1のシグニの場合、このターン、このルリグがアタックできる上限を2減らす。そのカードがレベル2のシグニの場合、このターン、このルリグがアタックできる上限を1減らす。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di006.jpg", //SRC
		"Glory Grow（カードゲーマーvol.57 付録）", //NAME
		"PR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤白青", //COLOR
		"", //LEVEL
		"《赤》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜No Limit＞＆全員レベル1以上<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【常】：【ダブルクラッシュ】（アタックによるダメージでライフクロスを2枚クラッシュする）【常】：対戦相手は【ガード】ができない。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di007.jpg", //SRC
		"ウィーアー WIXOSS！（コロコロアニキ2021年夏号 付録）", //NAME
		"PR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"対戦相手はあなたと握手をしてもよい。握手をした場合、各プレイヤーはカードを3枚引く。握手をしなかった場合、あなたはカードを1枚引き【エナチャージ1】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di008.jpg", //SRC
		"リゼ レベル0（「にじさんじ ANNIVERSARY FESTIVAL 2021」購入特典）", //NAME
		"PR", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di009.jpg", //SRC
		"サーバント #（CHANGING DIVA 1BOX購入特典）", //NAME
		"PR", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"PR-Di010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di010.jpg", //SRC
		"サーバント #（ウィクロス ぶくぶタマ劇場 第2巻 付録）", //NAME
		"PR", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"PR-Di011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di011.jpg", //SRC
		"salvage the future（カードゲーマーvol.58 付録）", //NAME
		"PR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒青緑", //COLOR
		"", //LEVEL
		"《黒》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜DIAGRAM＞＆全員レベル1以上<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】：このルリグがアタックしたとき、以下の2つから1つを選ぶ。<br>①対戦相手のデッキの上からカードを15枚トラッシュに置く。<br>②あなたのトラッシュから[ガード]を持たないシグニを3枚まで対象とし、それらを手札に加える。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di012.jpg", //SRC
		"ゼノ・クラスタ（「ディーヴァグランプリ 2021」上位入賞者景品）", //NAME
		"PR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>以下の2つから1つを選ぶ。<br>①カードを1枚引く。このターンに対戦相手の効果によってあなたの手札からカードが1枚以上トラッシュに移動していた場合、代わりにカードを3枚引く。<br>②【エナチャージ1】をする。このターンに対戦相手の効果によってあなたのエナゾーンからカードが1枚以上トラッシュに移動していた場合、代わりに【エナチャージ3】をする。", //JP_TEXT
		"(Piece在我方場上分身有3隻才可使用)<br><br>以下2項中選擇1項。<br>①抽1張牌。本回合因對方效果使我方1張以上的手牌移動到廢棄區的話，作為代替抽3張牌。<br>②【能量填充1】。本回合因對方效果使我方能量區1張以上的卡牌移動到廢棄區的話，作為代替【能量填充3】。"	//TW_TEXT
		],
	[
		"PR-Di013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di013.jpg", //SRC
		"飛躍する蓄積（「WIXOSS DIVA(A)LIVE TRY!!!」 付録）", //NAME
		"PR", //RARE
		"スペル", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード4を支払ってもよい。<br><br>以下の3つから1つを選ぶ。ターン終了時まで、あなたのセンタールリグは選んだ能力を得る。追加でエクシード4を支払っていた場合、代わりに2つ選ぶ。<br>①「【自】（ターン1）：このルリグがアタックしたとき、カードを1枚引く。」<br>②「【自】（ターン1）：このルリグがアタックしたとき、【エナチャージ1】をする。」<br>③「【自】（ターン1）：このルリグがアタックしたとき、対戦相手のシグニ1体を対象とし、それをトラッシュに置く。」", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di014.jpg", //SRC
		"新月の巫女 タマヨリヒメ（カードゲーマーvol.60 付録）", //NAME
		"PR", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di016.jpg", //SRC
		"サーバント #（リルデザイン）", //NAME
		"PR", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"PR-Di017A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di017A.jpg", //SRC
		"白熱する黒白", //NAME
		"PR", //RARE
		"スペル", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"カードを2枚引く。その後、あなたのライフクロスが1枚以下の場合、チェックゾーンにあるこのカードを裏返して《REV：アンコーリング》を場に出す。（場に出せなかった場合はトラッシュに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di017B", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di017B.jpg", //SRC
		"REV:アンコーリング", //NAME
		"PR", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（場以外の領域にあるかぎり、このカードは《白熱する黒白》である。このカードが場を離れると《白熱する黒白》に戻る）<br><br>【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、手札を3枚捨ててもよい。そうした場合、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"PR-Di018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di018.jpg", //SRC
		"サーバント #（夢川ゆいver.）", //NAME
		"PR", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D01-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-001.jpg", //SRC
		"紡ぎし扉 アト＝ノル", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-002.jpg", //SRC
		"紡ぎし扉 アト＝エット", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-003.jpg", //SRC
		"紡ぎし扉 アト＝トヴォ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-004.jpg", //SRC
		"紡ぎし扉 アト＝トレ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム起】（ターン1）[緑(0)]：それぞれ異なるクラスを持つあなたのシグニ3体を対象とし、ターン終了時まで、それらのパワーを＋3000する。<br><br>【出】：【エナチャージ2】をする。この方法でエナゾーンに置かれたカードが共通するクラスを持たない場合、追加で【エナチャージ1】をする。", //JP_TEXT
		"「隊伍」＜アンシエント・サプライズ＞<br>「隊伍起」(回合1)綠0：我方3隻分別持有不同種族的精靈作對象，直到回合結束時為止，將他們的力量+3000。<br><br>「出」：【能量填充2】。此方法放置到能量區的卡牌不持有相同種族的話，追加【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-D01-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-005.jpg", //SRC
		"目醒めし者 タウィル＝ノル", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-006.jpg", //SRC
		"タウィル＝ハウリング", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。カードを1枚引き、手札を1枚捨てる。", //JP_TEXT
		"「出」：將對方1隻力量8000以下的精靈作對象，將其破壞。抽1張牌，捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-D01-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-007.jpg", //SRC
		"タウィル＝カラーズ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：あなたの場に赤のシグニがある場合、対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。青のシグニがある場合、カードを2枚引く。緑のシグニがある場合、【エナチャージ2】をする。（あなたのデッキの上からカードを2枚エナゾーンに置く）", //JP_TEXT
		"「出」：我方場上有紅色精靈的話，對方1隻力量10000以下的精靈作對象，將其破壞。有藍色精靈的話，抽2張牌。有綠色精靈的話，【能量填充2】。(從我方牌組頂將2張卡牌放置到能量區)"	//TW_TEXT
		],
	[
		"WXDi-D01-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-008.jpg", //SRC
		"奏救の鍵主 ウムル＝ノル", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-009.jpg", //SRC
		"ウムル＝ドロー", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：カードを2枚引く。", //JP_TEXT
		"「出」：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-D01-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-010.jpg", //SRC
		"ウムル＝ダウン", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】[青][無]：対戦相手のシグニ1体を対象とし、それをダウンする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其橫置。<br><br>「出」藍1無1：對方1隻精靈作對象，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-D01-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-011.jpg", //SRC
		"ハーモニー・コール", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑赤青", //COLOR
		"", //LEVEL
		"《無》×8", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜アンシエント・サプライズ＞＆全員レベル1以上<br><br>あなたのデッキの上からカードを8枚見る。その中からレベル1とレベル2とレベル3のシグニをそれぞれ1枚まで場に出し、残りをシャッフルしてデッキの一番下に置く。その後、ターン終了時まで、対象のレベル1のシグニ1体は【アサシン】を得、対象のレベル2のシグニ1体は【ダブルクラッシュ】を得、対象のレベル3のシグニ1体は【ランサー】を得る。", //JP_TEXT
		"「使用條件」「隊伍」＜アンシエント･サプライズ＞且全員等級1以上<br><br>查看我方牌組頂8張牌。將其中最多1張等級1和等級2和等級3的精靈出場，剩下的洗切放回牌組下方。之後，直到回合結束時為止，1隻等級1的精靈作對象獲得【暗殺】，1隻等級2的精靈作對象獲得【雙重擊潰】，1隻等級3的精靈作對象獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-D01-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-012.jpg", //SRC
		"羅星 カメロパル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのエナゾーンにあるシグニが持つクラスが合計3種類以上あるかぎり、このシグニのパワーは＋4000される。", //JP_TEXT
		"「常」：我方能量區的精靈持有的種族持有合計3種以上時，此精靈的力量+4000。"	//TW_TEXT
		],
	[
		"WXDi-D01-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-013.jpg", //SRC
		"翠将 センノリキュウ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：【エナチャージ3】（あなたのデッキの上からカードを3枚エナゾーンに置く）", //JP_TEXT
		"「生命爆發」：【能量填充3】（從我方牌組頂將3張卡牌放置到能量區）"	//TW_TEXT
		],
	[
		"WXDi-D01-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-014.jpg", //SRC
		"ツヴァイ＝スローロリス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのエナゾーンにあるシグニが持つクラスが合計3種類以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【起】（ターン1）[緑][緑][無]：あなたの他のパワー15000以上のシグニ1体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「常」：我方能量區的精靈持有的種族持有合計3種以上時，此精靈的力量+5000。<br><br>「起」(回合1)綠2無1：我方其他1隻力量15000以上的精靈作對象，直到回合結束時為止，將獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-D01-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-015.jpg", //SRC
		"大装 トビエル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたの他のシグニ1体を対象とし、ターン終了時まで、それのパワーを＋5000する。<br><br>【出】手札を2枚捨てる：カードを2枚引く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，我方其他1隻精靈作對象，直到回合結束時為止，將其力量+5000。<br><br>「出」捨棄2張手牌：抽2張牌。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D01-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-016.jpg", //SRC
		"羅石 アシレン", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このシグニのパワーが15000以上の場合、対戦相手は手札を1枚捨てる。20000以上の場合、代わりに対戦相手の手札を1枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		"「自」：此精靈攻擊時，此精靈的力量是15000以上的話，對方捨棄1張手牌。20000以上的話，作為代替不查看對方手牌選擇1張並捨棄。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。<br>(凍結狀態的精靈在下一個自己的豎直階段不能豎直)"	//TW_TEXT
		],
	[
		"WXDi-D01-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-017.jpg", //SRC
		"翠天 アタランテ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】エナゾーンからそれぞれ異なるクラスを持つシグニ3枚をトラッシュに置く：対戦相手のパワー8000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」能量區持有不同種族的3張精靈放置到廢棄區：對方1隻力量8000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D01-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-018.jpg", //SRC
		"幻水 スイギュウ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或綠）"	//TW_TEXT
		],
	[
		"WXDi-D01-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-019.jpg", //SRC
		"幻獣 コアララ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或綠）"	//TW_TEXT
		],
	[
		"WXDi-D01-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-020.jpg", //SRC
		"サーバント #", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D01-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-021.jpg", //SRC
		"複成", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのエナゾーンから緑のシグニ1枚を対象とし、それを手札に加える。あなたの場に＜アンシエント・サプライズ＞のルリグが3体いる場合、代わりにあなたのエナゾーンからシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-01LAT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-01LAT.jpg", //SRC
		"リゼ レベル0", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-02L", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-02L.jpg", //SRC
		"【センター】リゼ レベル1", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-03L", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-03L.jpg", //SRC
		"【センター】リゼ レベル2", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-04L", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-04L.jpg", //SRC
		"【センター】リゼ レベル3", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【チーム】＜さんばか＞<br>【チーム起】（ターン1）[白(0)]：あなたの＜バーチャル＞のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋2000する。<br><br>【出】：あなたのデッキの上からカードを3枚見る。その中から＜バーチャル＞のシグニを好きな枚数公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「隊伍」＜さんばか＞<br>「隊伍起」(回合1)白0：我方的1隻＜VTuber＞精靈作對象，直到下一個對方回合結束時為止，將其力量+2000。<br><br>「出」：查看我方牌組頂3張卡牌。將其中任意張＜VTuber＞精靈公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-D02-05LAT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-05LAT.jpg", //SRC
		"アンジュ レベル0", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-06LT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-06LT.jpg", //SRC
		"【アシスト】アンジュ レベル1", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」：對方1隻等級2以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-D02-07LT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-07LT.jpg", //SRC
		"【アシスト】アンジュ レベル2", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以下のシグニ1体を対象とし、それをトラッシュに置く。対戦相手のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」對方1隻等級2以下的精靈作對象，將其放置到廢棄區。對方1隻精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-D02-08LAT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-08LAT.jpg", //SRC
		"とこ レベル0", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-09LA", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-09LA.jpg", //SRC
		"【アシスト】とこ レベル1", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚トラッシュに置く。その後、あなたのトラッシュから＜バーチャル＞のシグニを2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「出」：從我方牌組頂將3張卡牌放置到廢棄區。之後，我方廢棄區最多2張＜VTuber＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D02-10LA", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-10LA.jpg", //SRC
		"【アシスト】とこ レベル2", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニを2体まで対象とし、それらをバニッシュする。", //JP_TEXT
		"「出」：對方最多2隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D02-11A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-11A.jpg", //SRC
		"【センター】アンジュ レベル1", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-12A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-12A.jpg", //SRC
		"【センター】アンジュ レベル2", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-13A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-13A.jpg", //SRC
		"【センター】アンジュ レベル3", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【チーム】＜さんばか＞<br>【チーム起】（ターン1）[白(0)]：あなたの＜バーチャル＞のシグニ1体を対象とし、ターン終了時まで、それのパワーを＋4000する。<br><br>【出】：対戦相手のシグニ1体を対象とし、それを手札に戻す。カードを1枚引く。", //JP_TEXT
		"「隊伍」＜さんばか＞<br>「隊伍起」(回合1)白0：我方1隻＜VTuber＞精靈作對象，直到回合結束時為止，將其力量+4000。<br><br>「出」：對方1隻精靈作對象，將其返回手牌。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D02-14T", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-14T.jpg", //SRC
		"【センター】とこ レベル1", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-15T", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-15T.jpg", //SRC
		"【センター】とこ レベル2", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-16T", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-16T.jpg", //SRC
		"【センター】とこ レベル3", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【チーム】＜さんばか＞<br>【チーム起】（ターン1）＜バーチャル＞のシグニ1体を場からトラッシュに置く：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。<br><br>【出】：あなたのトラッシュから＜バーチャル＞のシグニを2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「隊伍」＜さんばか＞<br>「隊伍起」(回合1)1隻＜VTuber＞精靈從場上放置到廢棄區：對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。<br><br>「出」：我方廢棄區最多2張＜VTuber＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D02-17AT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-17AT.jpg", //SRC
		"【アシスト】リゼ レベル1", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを7枚見る。その中から白の＜バーチャル＞のシグニを2枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組頂7張卡牌。將其中最多2張＜VTuber＞精靈公開並加入手牌，剩下的洗切後放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-D02-18AT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-18AT.jpg", //SRC
		"【アシスト】リゼ レベル2", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×4", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを5枚見る。その中から＜バーチャル＞のシグニを2枚まで場に出し、残りを好きな順番でデッキの一番下に置く。それらのシグニの【出】能力は発動しない。", //JP_TEXT
		"「出」：查看我方牌組頂5張卡牌。將其中最多2張＜VTuber＞精靈出場，剩下的洗切後放回牌組下方。這些精靈的「出」能力不能發動。"	//TW_TEXT
		],
	[
		"WXDi-D02-19LAT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-19LAT.jpg", //SRC
		"サンバ・カーニバル", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白黒", //COLOR
		"", //LEVEL
		"《無》×5", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜さんばか＞＆全員レベル1以上<br><br>対戦相手のシグニ1体を対象とし、それをトラッシュに置く。対戦相手のシグニ1体を対象とし、それを手札に戻す。あなたのトラッシュから＜バーチャル＞のシグニ1体を対象とし、それを手札に加える。", //JP_TEXT
		"「使用條件」「隊伍」＜さんばか＞且全員等級1以上<br><br>對方1隻精靈作對象，將其放置到廢棄區。對方1隻精靈作對象，將其返回手牌。我方廢棄區1隻＜VTuber＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D02-20", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-20.jpg", //SRC
		"コード2434 勇気ちひろ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場に＜バーチャル＞のシグニが3体以上あるかぎり、このシグニのパワーは＋5000される。", //JP_TEXT
		"「常」：我方場上的＜VTuber＞精靈有3隻以上時，此精靈的力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-D02-21", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-21.jpg", //SRC
		"コード2434 宇志海いちご", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。そのカードが＜バーチャル＞のシグニの場合、カードを1枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，公開我方牌組頂1張卡牌。該卡牌是＜VTuber＞的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D02-22", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-22.jpg", //SRC
		"コード2434 森中花咲", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[黒][白]：あなたのトラッシュから《コード2434 御伽原江良》1枚を対象とし、それを場に出す。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「出」黑1白1：我方廢棄區1張《代號2434 御伽原江良》作對象，將其出場。<br>（「出」能力的：的左側是費用。可以選擇支付費用發動）<br><br>「生命爆發」：對方1隻精靈作對象，可以支付黑1無1。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-D02-23", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-23.jpg", //SRC
		"コード2434 御伽原江良", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無][無]：あなたの場に《コード2434 森中花咲》がある場合、あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。<br><br>【出】[白][白][無]：あなたの場に＜バーチャル＞のシグニが3体以上ある場合、対戦相手のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」無2：我方場上有《代號2434 森中花咲》的話，我方廢棄區1張持有「防禦標記」的精靈作對象，將其加入手牌。<br><br>「出」白2無1：我方場上的＜VTuber＞精靈有3隻以上的話，對方1隻精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-D02-24", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-24.jpg", //SRC
		"コード2434 樋口楓", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの中央のシグニゾーンにある＜バーチャル＞のシグニのパワーを＋3000する。<br><br>【自】：このシグニがバニッシュされたとき、ターン終了時まで、あなたのすべての＜バーチャル＞のシグニのパワーを＋3000する。<br><br>【ライフバースト】：あなたのトラッシュから＜バーチャル＞のシグニを2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「常」：我方中央的精靈區的＜VTuber＞精靈的力量+3000。<br><br>「自」：此精靈被破壞時，直到回合結束時為止，我方所有的＜VTuber＞精靈的力量+3000。<br><br>「生命爆發」：我方廢棄區最多2張＜VTuber＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D02-25", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-25.jpg", //SRC
		"コード2434 静凛", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのメインフェイズの間、あなたの他のシグニが場を離れたとき、このシグニをアップする。<br><br>【起】[ダウン]：あなたのデッキの上からカードを5枚トラッシュに置く。（デッキが5枚以下ならそれらをすべてトラッシュに置きリフレッシュする）<br><br>【ライフバースト】：あなたのトラッシュから＜バーチャル＞のシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「自」(回合1)：我方主要階段中，我方其他的精靈離場時，豎直此精靈。<br><br>「起」(橫置)：我方牌組頂5張卡牌放置到廢棄區。（牌組是5張以下時將所有放置到廢棄區然後重構）<br><br>「生命爆發」：我方廢棄區的1張＜VTuber＞精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-D02-26", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-26.jpg", //SRC
		"コード2434 星川サラ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或黑）"	//TW_TEXT
		],
	[
		"WXDi-D02-27", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-27.jpg", //SRC
		"コード2434 魔使マオ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或黑）"	//TW_TEXT
		],
	[
		"WXDi-D02-28", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-28.jpg", //SRC
		"サーバント #", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D02-29", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-29.jpg", //SRC
		"ワンダー・ランド", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。あなたの場に＜さんばか＞のルリグが3体いる場合、代わりにあなたのトラッシュから白か黒のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"我方廢棄區1張黑色精靈作對象，將其加入手牌。我方場上的＜さんばか＞分身有3隻的話，作為代替我方廢棄區1張白色或黑色的精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P00-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-001.jpg", //SRC
		"スーパー・ヘルエスタセイバー", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白黒", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に白と黒のルリグがいる<br><br>あなたのトラッシュから白と黒と無色のシグニをそれぞれ1枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「使用條件」我方場上有白色和黑色分身<br><br>我方廢棄區白色和黑色和無色的精靈最多各1張作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-002.jpg", //SRC
		"カウンター・アルケミー", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に白のルリグがいる<br><br>対戦相手のシグニ1体を対象とし、ターン終了時まで、それは【アサシン】【ランサー】【ダブルクラッシュ】を失い、新たに得られない。", //JP_TEXT
		"「使用條件」我方場上有白色分身<br><br>對方1隻精靈作對象，直到回合結束時為止，使其失去【暗殺】【槍兵】【雙重擊潰】，不能獲得新能力。"	//TW_TEXT
		],
	[
		"WXDi-P00-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-003.jpg", //SRC
		"アンシエント・エコー", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青赤緑", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に赤と青と緑のルリグがいる<br><br>対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。カードを2枚引く。ターン終了時まで、あなたのすべてのシグニのパワーを＋3000する。", //JP_TEXT
		"「使用條件」我方場上有紅色和藍色和綠色分身<br><br>對方1隻力量10000以下的精靈作對象，將其破壞。抽2張牌。直到回合結束時為止，我方所有精靈的力量+3000。"	//TW_TEXT
		],
	[
		"WXDi-P00-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-004.jpg", //SRC
		"フューチャー・コード", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《無》×4", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に緑のルリグがいる<br><br>あなたのパワー15000以上のシグニを2体まで対象とし、ターン終了時まで、それらは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「使用條件」我方場上有綠色分身<br><br>我方最多2隻力量15000以上的精靈作對象，直到回合結束時為止，使其獲得【槍兵】。<br>(持有【槍兵】的精靈因戰鬥破壞精靈時，擊潰對方1張生命護甲)"	//TW_TEXT
		],
	[
		"WXDi-P00-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-005.jpg", //SRC
		"祝福の鍵の音", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>カードを3枚引き、手札を2枚捨てる。", //JP_TEXT
		"(Pieceピース在我方場上分身有3隻才可使用)<br><br>抽3張牌，捨棄2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-006.jpg", //SRC
		"アサルト・ケルベロス", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>対戦相手の手札を見て[ガード]を持たないカードを1枚選び、捨てさせる", //JP_TEXT
		"(Pieceピース在我方場上分身有3隻才可使用)<br><br>查看對方手牌選擇1張不持有「防禦標記」的卡牌，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P00-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-007.jpg", //SRC
		"目醒めし者 タウィル＝エット", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-008.jpg", //SRC
		"目醒めし者 タウィル＝トヴォ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-009.jpg", //SRC
		"目醒めし者 タウィル＝トレ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム起】（ターン1）手札から赤のカードを2枚捨てる：カードを2枚引く。<br><br>【出】：あなたのデッキの上からカードを3枚見る。その中から赤のカードを好きな枚数公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「隊伍」＜アンシエント・サプライズ＞<br>「隊伍起」(回合1)捨棄2張紅色卡的手牌：抽2張牌。<br><br>「出」：查看我方牌組頂3張卡牌。將其中任意張紅色卡牌公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P00-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-010.jpg", //SRC
		"タウィル＝エイボン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚見る。その中から赤と青と緑のシグニをそれぞれ1枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組頂3張卡牌。將其中紅色和藍色和綠色的精靈最多各1張公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P00-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-011.jpg", //SRC
		"タウィル＝シャボネス", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[無][無][無][無][無]：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻力量12000以下的精靈作對象，將其破壞。<br><br>「出」無5：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-012.jpg", //SRC
		"タウィル＝バースト", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×4", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニを、レベルの合計が対戦相手のセンタールリグのレベル以下になるように好きな数対象とし、それらをバニッシュする。", //JP_TEXT
		"「出」：對方精靈等級合計是對方中央分身等級以下的任意隻對作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-013.jpg", //SRC
		"奏救の鍵主 ウムル＝エット", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-014.jpg", //SRC
		"奏救の鍵主 ウムル＝トヴォ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-015.jpg", //SRC
		"奏救の鍵主 ウムル＝トレ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム起】（ターン1）[青(0)]：あなたのシグニ1体を対象とし、それを他のシグニゾーン1つに配置する。<br><br>【出】：ターン終了時まで、対戦相手のシグニゾーン1つを消す。（そこにあるすべてのカードをトラッシュに置く。プレイヤーはそこにシグニを配置できない）", //JP_TEXT
		"「隊伍」＜アンシエント・サプライズ＞<br>「隊伍起」(回合1)藍0：我方1隻精靈作對象，將其配置到其他精靈區。<br><br>「出」：直到回合結束時為止，消去對方1個精靈區。(該處所有卡牌放置到廢棄區。玩家不能於該處配置精靈)"	//TW_TEXT
		],
	[
		"WXDi-P00-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-016.jpg", //SRC
		"ウムル＝フリーズ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニを2体まで対象とし、それらを凍結する。対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「出」：對方最多2隻精靈作對象，將其凍結。對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-017.jpg", //SRC
		"ウムル＝ブレイク", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手の凍結状態のシグニを2体まで対象とし、それらをバニッシュする。", //JP_TEXT
		"「出」：對方最多2隻凍結狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-018.jpg", //SRC
		"ウムル＝クリアー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：あなたは手札をすべて捨て、捨てたカードの枚数に1を加えた枚数のカードを引く。対戦相手は手札をすべて捨て、捨てたカードの枚数から1を引いた枚数のカードを引く。<br><br>【出】[無]：対戦相手のルリグ1体を対象とし、それを凍結する。<br>（凍結されたルリグは次の自分のアップフェイズにアップしない）", //JP_TEXT
		"「出」：我方捨棄所有手牌，抽取捨棄卡牌數加1的數量的卡牌。對方捨棄所有手牌，抽取捨棄卡牌數減1的數量的卡牌。<br><br>「出」無1：對方1隻分身對作對象，將其凍結。<br>(凍結狀態的分身在下一個自己的豎直階段時不能豎直)"	//TW_TEXT
		],
	[
		"WXDi-P00-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-019.jpg", //SRC
		"アト＝チャージ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：【エナチャージ2】（あなたのデッキの上からカードを2枚エナゾーンに置く）", //JP_TEXT
		"「出」：【能量填充2】(從我方牌組頂將2張卡牌放置到能量區)"	//TW_TEXT
		],
	[
		"WXDi-P00-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-020.jpg", //SRC
		"アト＝キラー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-021.jpg", //SRC
		"アト＝リマインド", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：あなたの場にあるいずれかのシグニと共通するクラスを持つ対戦相手のシグニ1体を対象とし、それをエナゾーンに置く。そうした場合、【エナチャージ1】をする。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「出」：對方1隻與我方場上精靈持有相同種族的精靈作對象，將其放置到能量區。若如此做，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P00-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-022.jpg", //SRC
		"アト＝ファインダー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】エナゾーンからそれぞれ異なるクラスを持つシグニ3枚をトラッシュに置く：対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：本回合，下一次我方受到傷害時，作為代替不會受到傷害。<br><br>「出」能量區持有不同種族的3張精靈放置到廢棄區：對方1隻力量10000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-023.jpg", //SRC
		"アト＝リペアー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュから[ガード]を持たない、それぞれ異なるクラスを持つシグニ7枚を対象とし、それらをデッキに加えてシャッフルする。そうした場合、あなたのデッキの一番上のカードをライフクロスに加える。", //JP_TEXT
		"「出」：我方廢棄區不持有「防禦標記」，且持有種族不同的7張精靈作對象，將其加入牌組並洗切。若如此做，從我方牌組頂將1張卡牌加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P00-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-024.jpg", //SRC
		"【アシスト】リゼ レベル1’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを7枚見る。その中から黒の＜バーチャル＞のシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組頂7張卡牌。將其中最多2張黑色的＜VTuber＞精靈公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P00-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-025.jpg", //SRC
		"【アシスト】リゼ レベル2’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それを手札に戻す<br><br>【出】[白][無]：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其返回手牌。<br><br>「出」白1無1：我方廢棄區1張持有「防禦標記」的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-026.jpg", //SRC
		"【アシスト】リゼ レベル2’’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：あなたの＜さんばか＞のルリグ1体を対象とし、ターン終了時まで、それは「【自】（ターン1）：このルリグがアタックしたとき、このルリグをアップする。」を得る。", //JP_TEXT
		"「出」：我方1隻＜さんばか＞分身作對象，直到回合結束時為止，使其獲得「「自」(回合1)：此分身攻擊時，豎直此分身。」。"	//TW_TEXT
		],
	[
		"WXDi-P00-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-027.jpg", //SRC
		"【アシスト】アンジュ レベル1’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のパワー10000以下のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「出」無1：對方1隻力量10000以下的精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P00-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-028.jpg", //SRC
		"【アシスト】アンジュ レベル2’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：あなたの手札から＜バーチャル＞のシグニ1枚を場に出す。それの【出】能力は発動しない。<br><br>【出】[無][無]：あなたの手札から＜バーチャル＞のシグニ1枚を場に出す。それの【出】能力は発動しない。", //JP_TEXT
		"「出」：我方手牌1張＜VTuber＞精靈出場。其「出」能力不能發動。<br><br>「出」無2：我方手牌1張＜VTuber＞精靈出場。其「出」能力不能發動。"	//TW_TEXT
		],
	[
		"WXDi-P00-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-029.jpg", //SRC
		"【アシスト】アンジュ レベル2’’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それを手札に戻す。<br>【出】[黒]：あなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其返回手牌。<br><br>「出」黑1：我方廢棄區1張黑色精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-030.jpg", //SRC
		"【アシスト】とこ レベル1’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。<br>(力量為0以下的精靈會被規則破壞)"	//TW_TEXT
		],
	[
		"WXDi-P00-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-031.jpg", //SRC
		"【アシスト】とこ レベル2’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。<br><br>【出】[白]：あなたのトラッシュから白のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。<br><br>「出」白1：我方廢棄區1張白色精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-032.jpg", //SRC
		"【アシスト】とこ レベル2’’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×4", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュから＜バーチャル＞のシグニ1枚を対象とし、それを場に出す。", //JP_TEXT
		"「出」：我方廢棄區1張＜VTuber＞精靈作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-P00-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-033.jpg", //SRC
		"コード2434 アルス・アルマル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜さんばか＞<br>【チーム自】：このシグニがアタックしたとき、このシグニのパワーが20000以上の場合、対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それを手札に戻す。<br><br>【起】（ターン1）[白]：あなたの手札から＜バーチャル＞のシグニを好きな枚数公開する。ターン終了時まで、このシグニのパワーをこの方法で公開したカード1枚につき＋1000する。", //JP_TEXT
		"「隊伍」＜さんばか＞<br>「隊伍自」：此精靈攻擊時，此精靈的力量是20000以上的話，對方1隻精靈作對象，可以捨棄1張手牌。若如此做，將其返回手牌。<br><br>「起」(回合1)白1：公開我方手牌中任意張＜VTuber＞精靈。直到回合結束時為止，通過此方法公開的卡牌每有1張，此精靈的力量+1000。"	//TW_TEXT
		],
	[
		"WXDi-P00-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-034.jpg", //SRC
		"コード2434 本間ひまわり", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のメインフェイズ開始時、あなたのデッキの一番上を公開する。そのカードが＜バーチャル＞のシグニの場合、ターン終了時まで、このシグニは【シャドウ】を得る。（このシグニは対戦相手によって対象にされない）<br><br>【起】（ターン1）[白]：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加え、1枚をデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「自」：對方主要階段開始時，公開我方牌組頂1張牌。該卡牌是＜VTuber＞精靈的話，直到回合結束時為止，此精靈獲得【暗影】。(此精靈不會成為對方的對象)<br><br>「起」(回合1)白1：查看我方牌組頂3張卡牌。將其中1張精靈公開並加入手牌，1張放回牌組上方，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P00-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-035.jpg", //SRC
		"紅天姫 マルス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニが対戦相手のシグニ1体をバニッシュしたとき、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、それをトラッシュに置く。<br><br>【出】手札から赤のカードを3枚捨てる：ターン終了時まで、このシグニは【アサシン】を得る。（このシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「自」：此精靈破壞對方1隻精靈時，對方能量區1張不持有對方中央分身共同顏色的卡牌作對象，將其放置到廢棄區。<br><br>「出」從手牌捨棄3張紅色卡牌：直到回合結束時為止，此精靈獲得【暗殺】。(此精靈的攻擊不會與正面的精靈戰鬥來給予對方傷害)"	//TW_TEXT
		],
	[
		"WXDi-P00-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-036.jpg", //SRC
		"紅魔姫 シュブニグラ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム自】：このシグニがアタックしたとき、あなたの場にあるすべてのシグニが赤の場合、対戦相手のパワー12000以下のシグニ1体を対象とし、[赤][赤]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【出】[赤][赤][赤]：ターン終了時まで、このシグニは【ダブルクラッシュ】を得る。（アタックによるダメージでライフクロスを2枚クラッシュする）", //JP_TEXT
		"「隊伍」＜アンシエント・サプライズ＞<br>「隊伍自」：此精靈攻擊時，我方場上所有精靈是紅色的話，對方1隻力量12000以下的精靈作對象，可以支付紅2。若如此做，將其破壞。<br><br>「出」紅3：直到回合結束時為止，此精靈獲得【雙重擊潰】。(攻擊造成傷害時會擊潰2張生命護甲)"	//TW_TEXT
		],
	[
		"WXDi-P00-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-037.jpg", //SRC
		"コードラビラント ヨグソトス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム自】（ターン1）：場にあるこのシグニが他のシグニゾーンに移動したとき、[青][青]を支払ってもよい。そうした場合、対戦相手の手札を3枚まで見ないで選び、それらを見て1枚をデッキの一番下に置く。<br><br>【起】（ターン1）[青][青]：対戦相手はデッキの一番下のカードをトラッシュに置く。その後、そのカードと同じカード名の対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「隊伍」＜アンシエント・サプライズ＞<br>「隊伍自」(回合1)：場上的此精靈移動到其他精靈區時，可以支付藍2。若如此做，不查看對方手牌最多選擇3張，再查看將1張放置到牌組下方。<br><br>「起」(回合1)藍2：對方牌組下方1張卡牌放置到廢棄區。之後，對方1隻卡名與該卡名相同的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-038.jpg", //SRC
		"コードアンシエンツ パルテノ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、このシグニが場を離れる場合、代わりにこれを裏向きにしてもよい。そうした場合、次の次のあなたのメインフェイズ開始時、これと同じシグニゾーンにシグニがない場合、これを表向きにし、対戦相手は手札を2枚捨てる。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[青][青]を支払ってもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		"「自」：對方回合中，此精靈離場時，作為代替可以以背面向上。若如此做，下個再下個的我方主要階段開始時，與其相同的精靈區沒有精靈的話，可以將其面向上，對方捨棄2張手牌。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付藍2。若如此做，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P00-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-039.jpg", //SRC
		"羅菌姫 アミノサン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニのパワーが対戦相手の効果によって－（マイナス）される場合、代わりに＋（プラス）される。<br><br>【常】：あなたのターンの間、あなたの他のシグニのパワーを＋5000する。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがシグニからダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「常」：此精靈的力量因對方效果減少時，作為代替改為增加。<br><br>「常」：我方回合中，我方其他的精靈力量+5000。<br><br>「生命爆發」：【能量填充1】。本回合，下一次我方因精靈受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P00-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-040.jpg", //SRC
		"幻怪姫 アザトース", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム自】：あなたのアタックフェイズ開始時、このシグニのパワーが15000以上の場合、対戦相手のパワー10000以上のシグニ1体を対象とし、[緑][緑]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュにあるシグニが持つクラスが合計7種類以上の場合、【エナチャージ1】をする。", //JP_TEXT
		"「隊伍」＜アンシエント・サプライズ＞<br>「隊伍自」：我方攻擊階段開始時，此精靈力量是15000以上的話，對方1隻力量10000以上的精靈作對象，可以支付綠2。若如此做，將其破壞。<br><br>「自」：此精靈攻擊時，我方廢棄區精靈持有的種族合計7種以上的話，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P00-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-041.jpg", //SRC
		"コード2434 鈴原るる", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜さんばか＞<br>【チーム常】：あなたのライフクロスはリフレッシュによってトラッシュに移動しない。<br><br>【起】（ターン1）[黒][無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。あなたのデッキの上からカードを10枚トラッシュに置く。", //JP_TEXT
		"「隊伍」＜さんばか＞<br>「隊伍常」：我方的生命護甲不會因重構移動到廢棄區。<br><br>「起」(回合1)黑1無1：對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。我方牌組頂10張牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P00-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-042.jpg", //SRC
		"コード2434 ニュイ・ソシエール", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたの他の＜バーチャル＞のシグニ1体が場に出たとき、あなたのデッキの一番上を見る。それをトラッシュに置いてもよい。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのトラッシュに＜バーチャル＞のシグニが20枚以上ある場合、対戦相手のシグニ1体を対象とし、[黒][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方其他1隻＜VTuber＞精靈出場時，查看我方牌組頂1張牌。可以將其放置到廢棄區。<br><br>「自」：我方攻擊階段開始時，我方廢棄區的＜VTuber＞精靈有20張以上的話，對方1隻精靈作對象，可以支付黑1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-043.jpg", //SRC
		"コード2434 夢月ロア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを2枚見る。その中から《コード2434 アルス・アルマル》1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組頂2張牌。將其中1張《代號2434 アルス・アルマル》公開並加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：查看我方牌組頂3張牌。將其中最多2張精靈公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P00-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-044.jpg", //SRC
		"コード2434 シスター・クレア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの＜バーチャル＞のシグニ1体を対象とし、それをアップする。<br><br>【出】：あなたの場に《コード2434 緑仙》と《コード2434 ドーラ》がある場合、カードを1枚引く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「出」：我方1隻＜VTuber＞作對象，將其豎直。<br><br>「出」：我方場上有《代號2434 緑仙》和《代號2434 ドーラ》的話，抽1張牌。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將獲得「「常」：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-045.jpg", //SRC
		"コード2434 童田明治", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[白]：あなたのデッキの上からカードを3枚見る。その中から＜バーチャル＞のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」白1：查看我方牌組頂3張牌。將其中1張＜VTuber＞精靈公開並加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：查看我方牌組頂3張牌。將其中1張精靈公開並加入手牌或出場，剩下的按任意順序返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P00-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-046.jpg", //SRC
		"コード2434 緑仙", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に《コード2434 シスター・クレア》と《コード2434 ドーラ》がある場合、対戦相手のシグニ1体を対象とし、[白][白][無]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上有《代號2434 シスター・クレア》和《代號2434 ドーラ》的話，對方1隻精靈作對象，可以支付白2無1。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-047.jpg", //SRC
		"コード2434 竜胆尊", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「生命爆發」：對方1隻豎直狀態的精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P00-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-048.jpg", //SRC
		"フレン・スラッシュ", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×2《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のシグニ1体を対象とし、それを手札に戻す。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"對方1隻精靈作對象，將其返回手牌。<br><br>「生命爆發」：對方1隻精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-049.jpg", //SRC
		"紅天 エリース", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたの赤のシグニ1体を対象とし、ターン終了時まで、それのパワーを＋2000する。<br><br>【ライフバースト】：カードを1枚引き、【エナチャージ1】をする。", //JP_TEXT
		"「自」：此精靈攻擊時，我方1隻紅色精靈作對象，直到回合結束時為止，將其力量+2000。"	//TW_TEXT
		],
	[
		"WXDi-P00-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-050.jpg", //SRC
		"紅将 イマガワ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのターンの間、このシグニのパワーは＋7000される。", //JP_TEXT
		"「常」：我方回合中，此精靈的力量+7000。"	//TW_TEXT
		],
	[
		"WXDi-P00-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-051.jpg", //SRC
		"紅魔 ビュレト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[赤][無]：このシグニよりパワーの低い対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「出」紅1無1：對方1隻力量比此精靈低的精靈作對象，將其破壞。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以支付紅1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-052.jpg", //SRC
		"紅魔 ヘラ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたの場にあるすべてのシグニが赤の場合、対戦相手のパワー5000以下のシグニ1体を対象とし、[赤]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈攻擊時，我方場上所有精靈是紅色的話，對方1隻力量5000以下的精靈作對象，可以支付紅1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-053.jpg", //SRC
		"中装 ホタルマル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのターンの間、このシグニの隣にあるあなたのシグニのパワーを＋3000する。", //JP_TEXT
		"「常」：我方回合中，此精靈相鄰的我方精靈的力量+3000。"	//TW_TEXT
		],
	[
		"WXDi-P00-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-054.jpg", //SRC
		"幻獣 カリュドーン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、カードを1枚引く。<br><br>【出】：あなたは手札を1枚捨てる。<br>（コストのない【出】能力は発動しないことを選べない）<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈被破壞時，抽1張牌。<br><br>「出」：我方捨棄1張牌。<br>(沒有費用的「出」能力不能選擇發動)<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以支付紅1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-055.jpg", //SRC
		"紅将 タダカツ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：對方1隻力量10000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-056.jpg", //SRC
		"羅石 カーネリー", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[無][無]：あなたのデッキの上からカードを3枚見る。その中から赤のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」無2：查看我方牌組頂的3張牌。將其中1張紅色精靈公開並加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-057.jpg", //SRC
		"開闢の打刻", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×2《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のパワー13000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のパワー13000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"對方1隻力量13000以下的精靈作對象，將其破壞。<br><br>「生命爆發」：對方1隻力量13000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-058.jpg", //SRC
		"蒼天 ニョルズ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、カードを1枚引き、手札を1枚捨てる。", //JP_TEXT
		"「自」：此精靈攻擊時，抽1張牌，捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-059.jpg", //SRC
		"コードメイズ ミズドケイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたの効果によって場にあるこのシグニが他のシグニゾーンに移動したとき、対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「自」(回合1)：我方效果使場上的此精靈移動到其他精靈區時，對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-060.jpg", //SRC
		"幻水 ネオンテトラ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それを凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其凍結。<br>(凍結狀態的精靈在下一個自己的豎直階段時不能豎直)<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-061.jpg", //SRC
		"蒼天 ヒュプノス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバトルによって凍結状態のシグニをバニッシュしたとき、対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「自」：此精靈因戰鬥破壞凍結狀態的精靈時，對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-062.jpg", //SRC
		"蒼魔 スライムメイジ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[青][青][無] 他のシグニ2体を場からトラッシュに置く：対戦相手のシグニ1体を対象とし、それをデッキの一番下に置く。<br><br>【ライフバースト】：カードを2枚引く。", //JP_TEXT
		"「出」藍2無1 場上其他2隻精靈放置到廢棄區：對方1隻精靈作對象，將其放置到牌組下方。<br><br>「生命爆發」：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-063.jpg", //SRC
		"コードメイズ ソラサー", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの他のシグニ1体を対象とし、それとこのシグニの場所を入れ替える。<br><br>【自】（ターン1）：あなたの効果によって場にあるこのシグニが他のシグニゾーンに移動したとき、対戦相手はデッキの一番上を公開する。あなたはそれを対戦相手のデッキの一番下に置いてもよい。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「出」：我方其他1隻精靈作對象，將其與此精靈的位置交換。<br><br>「自」(回合1)：我方效果使場上的此精靈移動到其他精靈區時，對方公開牌組頂1張牌，我方可以將其放置到對方牌組下方。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-064.jpg", //SRC
		"蒼将 カンネイ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの手札が4枚以上あるかぎり、このシグニのパワーは＋3000され、このシグニは【シャドウ（スペル）】を得る。（このシグニは対戦相手のスペルによって対象にされない）<br><br>【自】：このシグニが対戦相手のシグニ1体をバニッシュしたとき、カードを1枚引く。", //JP_TEXT
		"「常」：我方手牌有4張以上時，此精靈的力量+3000，此精靈獲得【暗影(魔法)】。(此精靈不會成為對方魔法的對象)<br><br>「自」：此精靈破壞對方1隻精靈時，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-065.jpg", //SRC
		"羅星 ヴェラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「生命爆發」：對方1隻豎直狀態的精靈作對象，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P00-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-066.jpg", //SRC
		"BLUE OPENER", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×3《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のレベル2以下のシグニ1体を対象とし、それをデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のレベル2以下のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"對方1隻等級2以下的精靈作對象，將其放置到牌組下方。<br><br>「生命爆發」：對方1隻等級2以下的精靈作對象，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P00-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-067.jpg", //SRC
		"翠魔 スカンダ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[緑][緑][無] シグニ1体を場からトラッシュに置く：この方法でトラッシュに置いたシグニよりパワーの低い対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：【エナチャージ2】をする。その後、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。", //JP_TEXT
		"「出」綠2無1 場上1隻精靈放置到廢棄區：對方1隻比通過此方法放置到廢棄區的精靈的力量低的精靈作對象，將其破壞。<br><br>「生命爆發」：【能量填充2】。之後，我方能量區最多1隻精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-068.jpg", //SRC
		"コードメイズ カワニイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのシグニ1体を対象とし、それをあなたの他のシグニゾーン1つに配置してもよい。そうした場合、ターン終了時まで、それのパワーを＋3000する。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[緑][緑]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「出」：我方1隻精靈作對象，可以將其配置到我方其他的1個精靈區。若如此做，直到回合結束時為止，將其力量+3000。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付綠2。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-069.jpg", //SRC
		"幻獣 ナマケモノ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたの場にパワー10000以上のシグニがある場合、【エナチャージ1】をする。", //JP_TEXT
		"「自」：此精靈攻擊時，我方場上有力量10000以上的精靈時，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P00-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-070.jpg", //SRC
		"翠魔 ブエル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー5000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：對方1隻力量5000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P00-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-071.jpg", //SRC
		"幻水 ノコギリハギ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：【エナチャージ1】（あなたのデッキの一番上のカードをエナゾーンに置く）", //JP_TEXT
		"「出」：【能量填充1】(我方牌組頂1張卡牌放置到能量區)"	//TW_TEXT
		],
	[
		"WXDi-P00-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-072.jpg", //SRC
		"奏創", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×2《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のシグニ1体を対象とし、それをエナゾーンに置く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをエナゾーンに置く。", //JP_TEXT
		"對方1隻精靈作對象，將其放置到能量區。<br><br>「生命爆發」：對方1隻精靈作對象，將其放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-P00-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-073.jpg", //SRC
		"コード2434 ラトナ・プティ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－1000する。あなたの場に＜バーチャル＞のシグニが3体以上ある場合、代わりにターン終了時まで、それのパワーを－2000する。", //JP_TEXT
		"「起」(橫置)：對方1隻精靈作對象，直到回合結束時為止，將其力量-1000。我方場上的＜VTuber＞精靈有3隻以上的話，作為代替直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P00-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-074.jpg", //SRC
		"コード2434 葉加瀬冬雪", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－1000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-1000。"	//TW_TEXT
		],
	[
		"WXDi-P00-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-075.jpg", //SRC
		"コード2434 メリッサ・キンレンカ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュに＜バーチャル＞のシグニが5枚以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【出】：あなたのデッキの上からカードを3枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「常」：我方廢棄區的＜VTuber＞的精靈有5張以上時，此精靈力的力量+5000。<br><br>「出」：我方牌組頂3張卡牌放置到廢棄區。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付黑1無1。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P00-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-076.jpg", //SRC
		"コード2434 郡道美玲", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[黒]：あなたのデッキの上からカードを3枚トラッシュに置く。その後、あなたのトラッシュからレベル1の＜バーチャル＞のシグニ1枚を対象とし、それを場に出す。", //JP_TEXT
		"「出」黑1：我方牌組頂3張卡牌放置到廢棄區。之後，我方廢棄區1張等級1的＜VTuber＞作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-P00-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-077.jpg", //SRC
		"コード2434 文野環", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P00-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-078.jpg", //SRC
		"コード2434 夜見れな", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、ターン終了時まで、対戦相手のすべてのシグニのパワーをあなたの場にある＜バーチャル＞のシグニ1体につき－1000する。<br><br>【出】：あなたの場に《コード2434 葉加瀬冬雪》がある場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－4000する。<br><br>【ライフバースト】：あなたのトラッシュから＜バーチャル＞のシグニを2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「自」：此精靈攻擊時，直到回合結束時為止，我方場上的＜VTuber＞精靈每有1隻，對方所有精靈的力量-1000。<br><br>「出」：我方場上有《代號2434 葉加瀬冬雪》時，對方1隻精靈作對象，直到回合結束時為止，將其力量-4000。<br><br>「生命爆發」：我方廢棄區最多2張＜VTuber＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-079.jpg", //SRC
		"コード2434 ドーラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		"「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。"	//TW_TEXT
		],
	[
		"WXDi-P00-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-080.jpg", //SRC
		"ダークネス・イーター", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×2《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P00-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-081.jpg", //SRC
		"コード2434 星川サラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或黑）"	//TW_TEXT
		],
	[
		"WXDi-P00-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-082.jpg", //SRC
		"コード2434 魔使マオ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或黑）"	//TW_TEXT
		],
	[
		"WXDi-P00-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-083.jpg", //SRC
		"羅石 ブロンズ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或藍）"	//TW_TEXT
		],
	[
		"WXDi-P00-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-084.jpg", //SRC
		"羅石 シルヴァーナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或藍）"	//TW_TEXT
		],
	[
		"WXDi-P00-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-085.jpg", //SRC
		"幻獣 パンダダ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或綠）"	//TW_TEXT
		],
	[
		"WXDi-P00-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-086.jpg", //SRC
		"幻獣 コアララ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或綠）"	//TW_TEXT
		],
	[
		"WXDi-P00-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-087.jpg", //SRC
		"幻水 スイギュウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或綠）"	//TW_TEXT
		],
	[
		"WXDi-P00-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-088.jpg", //SRC
		"幻水 アマケロン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或綠）"	//TW_TEXT
		],
	[
		"WXDi-P00-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-089.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-090.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P00-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-091.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		]
	,
	[
		"WXDi-D03-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-001.jpg", //SRC
		"欠片へ一歩 ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-002.jpg", //SRC
		"奇跡へ一歩 ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-003.jpg", //SRC
		"真実へ一歩 ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-004.jpg", //SRC
		"頂点へ一歩 ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【チーム】＜No Limit＞<br>【チーム常】：アタックしているあなたのシグニのパワーを＋2000する。<br><br>【出】：カードを1枚引き、【エナチャージ1】をする。<br><br>【起】（ゲーム1）[赤(0)]：ターン終了時まで、このルリグは「【自】：このルリグがアタックしたとき、あなたのアップ状態のレベル2のルリグ2体をダウンしてもよい。そうした場合、対戦相手が[ガード]を持つカードを1枚捨てないかぎり、対戦相手にダメージを与える。」を得る。", //JP_TEXT
		"「隊伍」＜No Limit＞<br>「隊伍常」：我方攻擊中的精靈的力量+2000。<br><br>「出」：抽1張牌，【能量填充1】。<br><br>「起」(遊戲1)紅0：直到回合結束時為止，此分身獲得「自：此分身攻擊時，可以橫置我方2隻等級2且豎直狀態的分身。若如此做，對方不捨棄1張持有防禦標記的卡牌的話，給予對方傷害。」。"	//TW_TEXT
		],
	[
		"WXDi-D03-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-005.jpg", //SRC
		"未来へ前進 アキノ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-006.jpg", //SRC
		"アキノ＊グー", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」：對方1隻等級2以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-D03-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-007.jpg", //SRC
		"アキノ＊パー", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×5", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー12000以下のシグニ1体を対象とし、それを手札に戻す。<br><br>【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		"「出」：對方1隻力量12000以下的精靈作對象，將其返回手牌。 出：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。"	//TW_TEXT
		],
	[
		"WXDi-D03-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-008.jpg", //SRC
		"明日へ飛翔 レイ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-009.jpg", //SRC
		"レイ＊一斬", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：カードを2枚引く。", //JP_TEXT
		"「出」：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-D03-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-010.jpg", //SRC
		"レイ＊無我斬", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：カードを2枚引く。対戦相手の手札を2枚見ないで選び、捨てさせる。", //JP_TEXT
		"「出」：抽2張牌。不查看對方的手牌選擇2張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-D03-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-011.jpg", //SRC
		"Glory Grow", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤白青", //COLOR
		"", //LEVEL
		"《赤》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜No Limit＞＆全員レベル1以上<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【常】：【ダブルクラッシュ】（アタックによるダメージでライフクロスを2枚クラッシュする）<br>【常】：対戦相手は【ガード】ができない。』", //JP_TEXT
		"「使用條件」「隊伍」＜No Limit＞且全員等級1以上<br><br>我方1隻等級3的分身作對象，直到回合結束時為止，獲得以下能力。<br>「常」：【雙重擊潰】<br>「常」：對方不能【防禦】。"	//TW_TEXT
		],
	[
		"WXDi-D03-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-012.jpg", //SRC
		"小装 ローメイル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」無1：對方1隻力量3000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D03-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-013.jpg", //SRC
		"紅将 ランスロット", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」無1：對方1隻力量5000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D03-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-014.jpg", //SRC
		"羅石 ヴォルカニック", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D03-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-015.jpg", //SRC
		"紅天 カグツチ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのターンの間、あなたのシグニのパワーを＋2000する。<br><br>【出】手札を2枚捨てる：あなたのトラッシュからレベル3のシグニ1枚を対象とし、それを場に出す。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「常」：我方回合中，我方的精靈的力量+2000。<br><br>「出」捨棄2張手牌：我方廢棄區1張等級3的精靈作對象，將其出場。<br><br>「生命爆發」：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-D03-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-016.jpg", //SRC
		"大得装 トレット", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[赤][無]：あなたのトラッシュからレベル1の赤のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「出」紅1無1：我方廢棄區1張等級1的紅色精靈作對象，將其加入手牌。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D03-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-017.jpg", //SRC
		"羅石 アダマスフィア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。そのカードがレベル3のシグニの場合、[赤][赤]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「自」：此精靈攻擊時，公開我方牌組頂1張牌。該卡牌是等級3的精靈的話，可以支付紅2。若如此做，直到回合結束時為止，此精靈獲得【暗殺】。"	//TW_TEXT
		],
	[
		"WXDi-D03-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-018.jpg", //SRC
		"羅石 ブロンズ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或藍）"	//TW_TEXT
		],
	[
		"WXDi-D03-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-019.jpg", //SRC
		"羅石 シルヴァーナ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或藍）"	//TW_TEXT
		],
	[
		"WXDi-D03-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-020.jpg", //SRC
		"サーバント #", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D03-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-021.jpg", //SRC
		"轟音の炎球", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。あなたの場に＜No Limit＞のルリグが3体いる場合、代わりに対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"對方1隻力量8000以下的精靈作對象，將其破壞。我方場上＜No Limit＞的分身有3隻的話，作為代替對方1隻力量10000以下的精靈作對象，將其破壞。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D04-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-001.jpg", //SRC
		"MC．LION－standby", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-002.jpg", //SRC
		"MC．LION－1stVerse", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-003.jpg", //SRC
		"MC．LION－2ndVerse", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-004.jpg", //SRC
		"MC．LION－3rdVerse", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【チーム】＜Card Jockey＞<br>【チーム出】：あなたのデッキの上からカードを4枚見る。その中からカードを2枚まで手札に加え、残りをトラッシュに置く。<br><br>【起】（ゲーム1）[白(0)]：ターン終了時まで、このルリグは「【自】：このルリグがアタックしたとき、そのアタック終了時、そのアタックによって対戦相手にダメージが与えられていなかった場合、あなたのアップ状態のレベル2のルリグ1体をダウンしてもよい。そうした場合、このルリグをアップする。」を得る。", //JP_TEXT
		"「隊伍」＜Card Jockey＞<br>「隊伍出」：查看我方牌組頂4張卡牌。將其中最多2張卡牌加入手牌，剩下的放置到廢棄區。<br><br>「起」(遊戲1)白0：直到回合結束時為止，此分身獲得「自：此分身攻擊的話，該攻擊結束時，該攻擊沒有給予對方傷害的話，可以橫置我方1隻等級2且豎直狀態的分身。若如此做，豎直此分身。」。"	//TW_TEXT
		],
	[
		"WXDi-D04-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-005.jpg", //SRC
		"DJ．LOVIT－standby", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-006.jpg", //SRC
		"DJ．LOVIT－SCRATCH", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻力量10000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D04-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-007.jpg", //SRC
		"DJ．LOVIT－MIX", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：ターン終了時まで、対象のあなたのシグニ1体は【アサシン】を得、対象のあなたのシグニ1体は【ランサー】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える。【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「出」：對方1隻力量8000以下的精靈作對象，將其破壞。 出：直到回合結束時為止，我方1隻精靈作對象獲得【暗殺】，我方1隻精靈作對象獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-D04-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-008.jpg", //SRC
		"VJ．WOLF－standby", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-009.jpg", //SRC
		"VJ．WOLF－CUE", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D04-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-010.jpg", //SRC
		"VJ．WOLF－SYNC", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×4", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：あなたのライフクロスの一番上を見る。その後、以下の2つから1つを選ぶ。<br>①あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。<br>②あなたのライフクロスの一番上のカードをデッキに加えてシャッフルする。そうした場合、あなたのデッキの上からカードを2枚ライフクロスに加える。", //JP_TEXT
		"「出」：查看我方生命護甲上的1張卡牌。之後，從下列2項中選擇1項。<br>①洗切我方牌組並將上方1張卡牌加入生命護甲。<br>②我方生命護甲上的1張卡牌加入牌組並洗切。若如此做，從我方牌組頂將2張卡牌加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-D04-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-011.jpg", //SRC
		"ENDLESS－PUNCHLINE", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白赤緑", //COLOR
		"", //LEVEL
		"《白》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜Card Jockey＞＆全員レベル1以上<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【常】：このルリグはダウン状態でもアタックでき、1ターンにこのルリグがアタックできる上限は3になる。<br><br>【自】（ターン1）：このルリグがアタックしたとき、あなたのデッキをシャッフルし一番上を公開する。そのカードがレベル1のシグニの場合、このターン、このルリグがアタックできる上限を2減らす。そのカードがレベル2のシグニの場合、このターン、このルリグがアタックできる上限を1減らす。』", //JP_TEXT
		"「使用條件」「隊伍」＜Card Jockey＞且全員等級1以上<br><br>我方1隻等級3的分身作對象，直到回合結束時為止，獲得以下能力。<br>「常」：此分身橫置狀態也可攻擊，此分身1回合的攻擊上限變為3。<br><br>「自」(回合1)：此分身攻擊時，洗切我方牌組並公開牌組頂1張卡牌。該卡牌是等級1精靈的話，本回合中，此分身的攻擊上限減2。該卡牌是等級2精靈的話，本回合中，此分身的攻擊上限減1。"	//TW_TEXT
		],
	[
		"WXDi-D04-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-012.jpg", //SRC
		"コードアート Kイチュデ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのデッキの上からカードを3枚見る。その中からスペル1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「自」：此精靈攻擊時，查看我方牌組頂3張卡牌。將其中1張魔法公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-D04-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-013.jpg", //SRC
		"聖天 ミカエル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが左か右のシグニゾーンにあるかぎり、あなたの中央のシグニゾーンにあるシグニのパワーを＋3000する。", //JP_TEXT
		"「常」：此精靈在左或右的精靈區時，我方中央精靈區的精靈的力量+3000。"	//TW_TEXT
		],
	[
		"WXDi-D04-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-014.jpg", //SRC
		"翠将 アマゾネス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D04-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-015.jpg", //SRC
		"聖天 アテナ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[白][無][無]：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」白1無2：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D04-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-016.jpg", //SRC
		"コードアート Cヤンデリア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のスペルの使用コストは[無(1)]増える。<br><br>【常】：あなたのトラッシュにスペルがあるかぎり、このシグニのパワーは＋3000され、このシグニによってバニッシュされたシグニはエナゾーンに置かれる代わりにトラッシュに置かれる。<br><br>【ライフバースト】：あなたのトラッシュからシグニとスペルをそれぞれ1枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「常」：對方魔法的使用費用增加無1。<br><br>「常」：我方廢棄區有魔法時，此精靈的力量+3000，此精靈破壞的精靈不放置能量區作為代替放置到廢棄區。<br><br>「生命爆發」：我方廢棄區最多1張精靈和最多1張魔法作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D04-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-017.jpg", //SRC
		"幻獣 ウサウサ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、以下の2つから1つを選ぶ。<br>①あなたのエナゾーンからシグニ1枚を対象とし、それを手札に加える。<br>②【エナチャージ1】（あなたのデッキの一番上のカードをエナゾーンに置く）<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②【エナチャージ1】", //JP_TEXT
		"「自」：此精靈攻擊時，從下列2項中選擇1項。<br>①我方能量區的1張精靈作對象，將其加入手牌。<br>②【能量填充1】 (我方牌組頂1張卡牌放置到能量區)<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②【能量填充1】"	//TW_TEXT
		],
	[
		"WXDi-D04-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-018.jpg", //SRC
		"コードメイズ ガイセンモ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或綠）"	//TW_TEXT
		],
	[
		"WXDi-D04-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-019.jpg", //SRC
		"コードメイズ バベタワ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或綠）"	//TW_TEXT
		],
	[
		"WXDi-D04-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-020.jpg", //SRC
		"サーバント #", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D04-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-021.jpg", //SRC
		"グッド・ディグ", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのデッキの上からカードを7枚見る。その中からシグニを2枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。あなたの場に＜Card Jockey＞のルリグが3体いる場合、代わりにその中からカードを2枚まで手札に加え、残りをシャッフルしてデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"查看我方牌組頂7張卡牌。將其中最多2張精靈公開並加入手牌，剩下的洗切後放回牌組下方。我方場上＜Card Jockey＞的分身有3隻的話，作為代替將最多2張卡牌加入手牌，剩下的洗切後放回牌組下方。<br><br>「生命爆發」：查看我方牌組頂3張卡牌。將其中1張精靈公開並加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-D05-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-001.jpg", //SRC
		"ニューボーン Dr．タマゴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-002.jpg", //SRC
		"レッツゴー Dr．タマゴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-003.jpg", //SRC
		"ファイト Dr．タマゴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-004.jpg", //SRC
		"ガッツ Dr．タマゴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【チーム】＜うちゅうのはじまり＞<br>【チーム出】：カードを1枚引く。対戦相手は手札を1枚捨てる。<br><br>【自】：このルリグがアタックしたとき、このルリグの下にカードが5枚以上ある場合、カードを1枚引く。7枚以上ある場合、追加で対戦相手は手札を1枚捨てる。<br><br>【起】（ゲーム1）[青(0)]：あなたの他のルリグの下にあるすべてのカードをこのルリグの下に置く。", //JP_TEXT
		"「隊伍」＜うちゅうのはじまり＞<br>「隊伍出」：抽1張卡牌。對方捨棄1張手牌。<br><br>「自」：此分身攻擊時，此分身下方的卡牌有5張以上的話，抽1張牌。7張以上的話，追加對方捨棄1張手牌。<br><br>「起」(遊戲1)藍0：我方其他分身下方的所有卡牌放置到此分身下方。"	//TW_TEXT
		],
	[
		"WXDi-D05-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-005.jpg", //SRC
		"ニューボーン ノヴァ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-006.jpg", //SRC
		"ノヴァ＝ダーティ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを7枚見る。その中から白と青のシグニをそれぞれ1枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組頂7張卡牌。將其中白色和藍色的精靈最多各1張公開並加入手牌，剩下的洗切後放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-D05-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-007.jpg", //SRC
		"ノヴァ＝チョッパー", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを5枚見る。その中からシグニ1枚を場に出し、残りを好きな順番でデッキの一番下に置く。そのシグニの【出】能力は発動しない。", //JP_TEXT
		"「出」：查看我方牌組頂5張卡牌。將其中1張精靈出場，剩下的按任意順序放回牌組下方。該精靈的出能力不能發動。"	//TW_TEXT
		],
	[
		"WXDi-D05-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-008.jpg", //SRC
		"ニューボーン バン", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-009.jpg", //SRC
		"バン＝クレッシェンド", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：【エナチャージ2】（あなたのデッキの上からカードを2枚エナゾーンに置く）", //JP_TEXT
		"「出」：【能量填充2】"	//TW_TEXT
		],
	[
		"WXDi-D05-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-010.jpg", //SRC
		"バン＝リピート", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：あなたのエナゾーンからシグニ1枚を対象とし、それを手札に加える。<br><br>【出】：対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：我方能量區的1張精靈作對象，將其加入手牌。<br><br>「出」：對方1隻力量10000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D05-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-011.jpg", //SRC
		"はんぱない★ディストラクション", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青白緑", //COLOR
		"", //LEVEL
		"《青》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜うちゅうのはじまり＞＆全員レベル1以上<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】：このルリグがアタックしたとき、以下の2つから1つを選ぶ。この効果を対戦相手のセンタールリグのレベルと同じ回数行う。（1回ずつ行う。同じ選択肢を選んでもよい）<br>①カードを1枚引く。②対戦相手の手札を1枚見ないで選び、捨てさせる。』", //JP_TEXT
		"「使用條件」「隊伍」＜うちゅうのはじまり＞且全員等級1以上<br><br>我方1隻等級3的分身作對象，直到回合結束時為止，獲得以下能力。<br>「自」：此分身攻擊時，從下列2項中選擇1項。此效果執行與對方中央分身等級相同的次數。（已執行過的。可以再次選擇）<br>①抽1張牌。②不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-D05-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-012.jpg", //SRC
		"蒼魔 シャークスピア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：あなたのデッキの上からカードを3枚トラッシュに置く。その後、あなたのトラッシュにカードが20枚以上ある場合、[無][無]を支払ってもよい。そうした場合、あなたのトラッシュから＜悪魔＞のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「起」(橫置)：我方牌組頂3張卡牌放置到廢棄區。之後，我方廢棄區的卡牌有20張以上的話，可以支付無2。若如此做，我方廢棄區的1張＜惡魔＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D05-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-013.jpg", //SRC
		"聖魔 プルソン", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターンの間、あなたの効果によってカードが1枚以上デッキからトラッシュに置かれたとき、ターン終了時まで、対戦相手のすべてのシグニは能力を失う。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「自」：我方回合中，因我方效果使1張以上的卡牌從牌組放置到廢棄區時，直到回合結束時為止對方所有精靈失去能力。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D05-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-014.jpg", //SRC
		"蒼魔 スクリュー・カーミラ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それを凍結する。あなたのデッキの上からカードを2枚トラッシュに置く。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其凍結。我方牌組頂2張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-D05-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-015.jpg", //SRC
		"蒼魔 キャプテン・フック", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにカードが20枚以上あるかぎり、このシグニは対戦相手の効果によってバニッシュされない。（シグニとのバトルやパワーが0以下になった場合はバニッシュされる）<br><br>【自】：アタックフェイズの間、このシグニが場を離れたとき、あなたのトラッシュから[ガード]を持たないシグニ5枚を対象とし、それらをデッキに加えてシャッフルする。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「常」：我方廢棄區卡牌有20張以上時，此精靈不會被對方的效果破壞。（精靈因戰鬥或力量0以下時會被破壞）<br><br>「自」：攻擊階段中，此精靈離場時，我方廢棄區5張不持有防禦標記的精靈作對象，將其加入牌組並洗切。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D05-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-016.jpg", //SRC
		"蒼将 シンパチ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[青]：カードを1枚引く。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）<br><br>【起】（ターン1）[青][青][青]：対戦相手のシグニ1体を対象とし、あなたの手札が対戦相手より4枚以上多い場合、それをバニッシュする。<br><br>【ライフバースト】：カードを1枚引く。対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「出」藍1：抽1張牌。<br><br>「起」(回合1)藍3：對方1隻精靈作對象，我方手牌比對方多4張以上的話，將其破壞。 生命爆發：抽1張牌。對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-D05-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-017.jpg", //SRC
		"羅星 ジャコビニ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、このシグニの正面のシグニが凍結状態の場合、[青][青][無]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「自」：我方攻擊階段開始時，此精靈正面的精靈是凍結狀態的話，可以支付藍2無1。若如此做，直到回合結束時為止，此精靈獲得【暗殺】。"	//TW_TEXT
		],
	[
		"WXDi-D05-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-018.jpg", //SRC
		"羅星 プロシオス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或藍）"	//TW_TEXT
		],
	[
		"WXDi-D05-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-019.jpg", //SRC
		"羅星 シリオス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或藍）"	//TW_TEXT
		],
	[
		"WXDi-D05-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-020.jpg", //SRC
		"サーバント #", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D05-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-021.jpg", //SRC
		"RANDOM BAD", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"カードを1枚引き、対戦相手は手札を1枚捨てる。あなたの場に＜うちゅうのはじまり＞のルリグが3体いる場合、代わりにカードを1枚引き、対戦相手の手札を1枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。対戦相手は手札を1枚捨てる。", //JP_TEXT
		"抽1張牌，對方捨棄1張手牌。我方場上＜うちゅうのはじまり＞的分身有3隻的話，作為代替抽1張牌，不查看對方手牌選擇1張，將其捨棄。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-D06-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-001.jpg", //SRC
		"ムジカ START", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-002.jpg", //SRC
		"VOGUE1 ムジカ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-003.jpg", //SRC
		"VOGUE2 ムジカ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-004.jpg", //SRC
		"VOGUE3 ムジカ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【チーム】＜DIAGRAM＞<br>【チーム常】：あなたのターンの間、対戦相手の中央のシグニゾーンにあるシグニのパワーを－2000する。<br><br>【出】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。<br><br>【起】（ゲーム1）[黒(0)]：あなたの＜DIAGRAM＞のレベル1のルリグ1体を対象とし、それをルリグデッキに戻す。（下のカードは場に残す）", //JP_TEXT
		"「隊伍」＜DIAGRAM＞<br>「隊伍常」：我方回合中，對方中央精靈區的精靈力量-2000。<br><br>「出」：我方廢棄區1張精靈作對象，將其加入手牌。<br><br>「起」(遊戲1)黑0：我方1隻＜DIAGRAM＞等級1的分身作對象，將其返回分身牌組。（下方的卡牌留在場上）"	//TW_TEXT
		],
	[
		"WXDi-D06-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-005.jpg", //SRC
		"マドカ START", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-006.jpg", //SRC
		"マドカ//フロート", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】手札を1枚捨てる：カードを3枚引く。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」捨棄1張手牌：抽3張牌。"	//TW_TEXT
		],
	[
		"WXDi-D06-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-007.jpg", //SRC
		"マドカ//ダブ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをダウンする。カードを1枚引く。<br><br>【出】[青]：対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其橫置。抽1張牌。<br><br>「出」藍1：不查看對方的手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-D06-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-008.jpg", //SRC
		"サンガ START", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-009.jpg", //SRC
		"サンガ//エアー", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：あなたのレベル2以下のシグニ1体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「出」：我方1隻等級2以下的精靈作對象，直到回合結束時為止，使其獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-D06-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-010.jpg", //SRC
		"サンガ//シェイク", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：ターン終了時まで、このルリグは「【自】（ターン2）：対戦相手のシグニかルリグがアタックしたとき、そのアタックを無効にする。」を得る。", //JP_TEXT
		"「出」：直到回合結束時為止，此分身獲得「自(回合2)：對方的精靈或分身攻擊時，該攻擊無效。」。"	//TW_TEXT
		],
	[
		"WXDi-D06-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-011.jpg", //SRC
		"salvage the future", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒青緑", //COLOR
		"", //LEVEL
		"《黒》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜DIAGRAM＞＆全員レベル1以上<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】：このルリグがアタックしたとき、以下の2つから1つを選ぶ。<br>①対戦相手のデッキの上からカードを15枚トラッシュに置く。<br>②あなたのトラッシュから[ガード]を持たないシグニを3枚まで対象とし、それらを手札に加える。』", //JP_TEXT
		"「使用條件」「隊伍」＜DIAGRAM＞且全員等級1以上<br><br>我方1隻等級3的分身作對象，直到回合結束時為止，獲得以下能力。<br>「自」：此分身攻擊時，從下列2項中選擇1項。<br>①對方牌組頂15張卡牌放置到廢棄區。<br>②我方廢棄區最多3張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D06-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-012.jpg", //SRC
		"コードメイズ クマボク", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のシグニ1体がアタックしたとき、その正面にシグニがない場合、このシグニをアタックしたそのシグニの正面に配置してもよい。<br><br>【自】：場にあるこのシグニが他のシグニゾーンに移動したとき、[無][無]を支払ってもよい。そうした場合、このシグニとあなたのエナゾーンにあるシグニ1枚の場所を入れ替える。（それの【出】能力は発動する）", //JP_TEXT
		"「自」：對方1隻精靈攻擊時，其正面沒有精靈的話，此精靈可以配置到攻擊中的該精靈正面。<br><br>「自」：場上的此精靈移動到其他精靈區時，可以支付無2。若如此做，此精靈和我方能量區的1張精靈交換位置。（該出能力可發動）"	//TW_TEXT
		],
	[
		"WXDi-D06-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-013.jpg", //SRC
		"羅原 Heg", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバトル以外によってバニッシュされたとき、対戦相手のルリグ1体を対象とし、それをダウンする。", //JP_TEXT
		"「自」：此精靈因戰鬥以外被破壞時，對方1隻分身作對象，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-D06-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-014.jpg", //SRC
		"凶天 ガープ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：あなたのトラッシュから白か赤か青か緑のレベル1のシグニ1枚を対象とし、それを場に出す。（[白]か[赤]か[青]か[緑]を持つシグニを場に出せる）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「出」無1：我方廢棄區1張等級1的白色或紅色或藍色或綠色精靈作對象，將其出場。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付黑1無1。若如此做，直到回合結束時為止，使其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-D06-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-015.jpg", //SRC
		"羅原 Ge", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[無][無][無]：このコストでトラッシュに置いたカードが持つ色が合計3種類以上ある場合、対戦相手のパワー12000以上のシグニ1体を対象とし、それをバニッシュする。（無色は色に含まれない）<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②【エナチャージ1】（あなたのデッキの一番上のカードをエナゾーンに置く）", //JP_TEXT
		"「出」無3：此費用放置到廢棄區合計持有3種以上的顏色的話，對方1隻力量12000以上的精靈作對象，將其破壞。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②【能量填充1】"	//TW_TEXT
		],
	[
		"WXDi-D06-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-016.jpg", //SRC
		"ドライ＝リカブト", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、このシグニの正面にあったシグニ1体を対象とし、[無][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－10000する。<br><br>【出】[黒]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをあなたの場にあるシグニが持つ色の種類1つにつき－3000する。（無色は色に含まれない）", //JP_TEXT
		"「自」：此精靈被破壞時，此精靈正面的1隻精靈作對象，可以支付無2。若如此做，直到回合結束時為止，使其力量-10000。<br><br>「出」黑1：對方1隻精靈作對象，直到回合結束時為止，該精靈的力量減以我方場上精靈持有顏色每有1種，-3000。"	//TW_TEXT
		],
	[
		"WXDi-D06-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-017.jpg", //SRC
		"凶魔 アンナ・ミラージュ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたのシグニ1体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「升階」放置到我方1隻精靈上（不滿足此條件無法出場）<br><br>「出」無1：對方1隻精靈作對象，直到回合結束時為止，使其力量-8000。<br><br>「生命爆發」：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-D06-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-018.jpg", //SRC
		"アイン＝グリーンガス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは緑か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個綠或黑）"	//TW_TEXT
		],
	[
		"WXDi-D06-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-019.jpg", //SRC
		"蒼凶魔 チクタク", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或黑）"	//TW_TEXT
		],
	[
		"WXDi-D06-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-020.jpg", //SRC
		"サーバント #", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D06-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-021.jpg", //SRC
		"ダウナー・サウンド", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－6000する。あなたの場に＜DIAGRAM＞のルリグが3体いる場合、代わりにターン終了時まで、それのパワーを－8000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、ターン終了時まで、それのパワーを－15000する。", //JP_TEXT
		"對方1隻精靈作對象，直到回合結束時為止，使其力量-6000。我方場上＜DIAGRAM＞的分身有3隻的話，作為代替直到回合結束時為止，使其力量-8000。（力量0以下的精靈會被規則破壞）<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，直到回合結束時為止，使其力量-15000。"	//TW_TEXT
		],
	[
		"WXDi-P01-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-001.jpg", //SRC
		"GO TO the TOP！", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤白", //COLOR
		"", //LEVEL
		"《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に白と赤のルリグがいる<br><br>あなたのデッキからシグニ1枚を探して公開し手札に加え、デッキをシャッフルする。対戦相手のセンタールリグがレベル3以上の場合、対戦相手は自分のエナゾーンからカード3枚を選びトラッシュに置く。（2枚以下の場合、それらをすべて選ぶ）", //JP_TEXT
		"「使用條件」我方場上有白色和紅色分身<br><br>從我方牌組找1張精靈公開並加入手牌，洗切牌組。對方中央分身是等級3以上的話，對方選擇自己能量區的3張卡牌放置到廢棄區。（2張以下的話，需要選擇全部）"	//TW_TEXT
		],
	[
		"WXDi-P01-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-002.jpg", //SRC
		"SILENT ASSASIN", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤緑", //COLOR
		"", //LEVEL
		"《無》×4", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に赤と緑のルリグがいる<br><br>あなたのシグニを2体まで対象とし、ターン終了時まで、それらは「【常】：このシグニは、正面にパワー12000以上のシグニがあるかぎり、【アサシン】を得る。」を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「使用條件」我方場上有紅色和綠色分身<br><br>我方最多2隻精靈作對象，直到回合結束時為止，使其獲得「常：此精靈正面有力量12000以上的精靈時，獲得【暗殺】。」。"	//TW_TEXT
		],
	[
		"WXDi-P01-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-003.jpg", //SRC
		"だい！ぎゃく！てん！", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青白", //COLOR
		"", //LEVEL
		"《無》×5", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に白と青のルリグがいる<br><br>対戦相手の凍結状態のシグニを2体まで対象とし、それらをトラッシュに置く。", //JP_TEXT
		"「使用條件」我方場上有白色和藍色分身<br><br>對方最多2隻凍結狀態的精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P01-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-004.jpg", //SRC
		"code：L／O", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑青", //COLOR
		"", //LEVEL
		"《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に青と緑のルリグがいる<br><br>あなたのライフクロスが0枚の場合、あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。", //JP_TEXT
		"「使用條件」我方場上有藍色和綠色分身<br><br>我方生命護甲是0張的話，洗切我方牌組並將牌組頂的1張卡牌加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P01-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-005.jpg", //SRC
		"NIGHTMARE■STEP", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒緑", //COLOR
		"", //LEVEL
		"《無》×6", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に緑と黒のルリグがいる<br><br>あなたのトラッシュにカードが25枚以上ある場合、対戦相手のすべてのシグニをエナゾーンに置く。", //JP_TEXT
		"「使用條件」我方場上有綠色和黑色分身<br><br>我方廢棄區的卡牌有25張以上的話，對方所有精靈放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-P01-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-006.jpg", //SRC
		"ネバー・サレンダー", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>あなたの手札が0枚の場合、あなたのトラッシュから[ガード]を持たないシグニを2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"(Piece在我方場上分身有3隻才可使用)<br><br>我方手牌是0張的話，我方廢棄區最多2張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-007.jpg", //SRC
		"●TAP DOWN TAP●", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>あなたのライフクロスが0枚の場合、対戦相手のルリグかシグニ1体を対象とし、それをダウンする。", //JP_TEXT
		"(Piece在我方場上分身有3隻才可使用)<br><br>我方生命護甲是0張的話，對方1隻分身或精靈作對象，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-P01-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-008.jpg", //SRC
		"きゅるり☆きゅるりら", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>カードを1枚引き、【エナチャージ1】をする。", //JP_TEXT
		"(Piece在我方場上分身有3隻才可使用)<br><br>抽1張牌，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P01-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-009.jpg", //SRC
		"アキノ＊グッドL", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを7枚見る。その中から白と赤のシグニをそれぞれ1枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組頂7張卡牌。將其中白色和紅色精靈最多各1張公開並加入手牌，剩下的洗切放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P01-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-010.jpg", //SRC
		"アキノ＊ダブルピース", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル1のシグニ1体を対象とし、それを手札に戻す。<br><br>【出】[無][無] 手札を1枚捨てる：対戦相手のレベル2のシグニ1体を対象とし、それを手札に戻す。<br><br>【出】[無][無] 手札を2枚捨てる：対戦相手のレベル3のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」：對方1隻等級1的精靈作對象，將其返回手牌。<br><br>「出」(無2)捨棄1張手牌：對方1隻等級2的精靈作對象，將其返回手牌。<br><br>「出」(無2)捨棄2張手牌：對方1隻等級3的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-011.jpg", //SRC
		"アキノ＊バイバイ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それを手札に戻す。<br><br>【出】[白][無]：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其返回手牌。<br><br>「出」白1無1：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-012.jpg", //SRC
		"レイ＊月華", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：カードを1枚引く。対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"「出」：抽1張牌。不查看對方的手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P01-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-013.jpg", //SRC
		"レイ＊絶対零度", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをデッキの一番上か一番下に置く。それがレベル2以下のシグニの場合、対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其放置到牌組上方或下方。若是等級2以下的精靈的話，對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-014.jpg", //SRC
		"レイ＊斬破", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×4", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニを2体まで対象とし、それらをダウンする。<br><br>【出】[青][無][無]：対戦相手のシグニ1体を対象とし、それをダウンする。", //JP_TEXT
		"「出」：對方最多2隻精靈作對象，將其橫置。<br><br>「出」藍1無2：對方1隻精靈作對象，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-P01-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-015.jpg", //SRC
		"DJ．LOVIT－W－SCRACH", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】[無] 手札を1枚捨てる：あなたのシグニ1体を対象とし、ターン終了時まで、それは【ダブルクラッシュ】を得る。<br>（【ダブルクラッシュ】を持つシグニがアタックによってダメージを与えた場合ライフクロスを1枚ではなく2枚クラッシュする）", //JP_TEXT
		"「出」(無1)捨棄1張手牌：我方1隻精靈作對象，直到回合結束時為止，使其獲得【雙重擊潰】。"	//TW_TEXT
		],
	[
		"WXDi-P01-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-016.jpg", //SRC
		"DJ．LOVIT－BEATJUG", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[赤][無][無][無][無]：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻力量10000以下的精靈作對象，將其破壞。<br><br>「出」紅1無4：對方1隻力量10000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P01-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-017.jpg", //SRC
		"DJ．LOVIT－CROSSFADE", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[赤][無][無][無]：対戦相手のライフクロス1枚をクラッシュする。（ライフクロスは一番上からクラッシュされる）", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「出」紅1無3：擊潰對方1張生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P01-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-018.jpg", //SRC
		"VJ．WOLF－LASER", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを5枚見る。その中からあなたのセンタールリグと共通する色を持つカードを2枚までエナゾーンに置き、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組頂5張卡牌。將其中最多2張與我方中央分身持有相同顏色的卡牌放置到能量區，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P01-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-019.jpg", //SRC
		"VJ．WOLF－STREAM", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー13000以上のすべてのシグニをバニッシュする。", //JP_TEXT
		"「出」：破壞對方所有力量13000以上的精靈。"	//TW_TEXT
		],
	[
		"WXDi-P01-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-020.jpg", //SRC
		"VJ．WOLF－MIRAGE", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：ターン終了時まで、あなたのすべてのシグニのパワーを＋5000する。<br><br>【出】[緑][無][無]：あなたのいずれかのシグニよりパワーの低い対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[無][無][無][無]：対戦相手のシグニ1体を対象とし、このターン、次にそれがアタックしたとき、そのアタックを無効にする。", //JP_TEXT
		"「出」：直到回合結束時為止，我方所有精靈的力量+5000。<br><br>「出」綠1無2：對方1隻力量比我方任一隻精靈低的精靈作對象，將其破壞。<br><br>「出」無4：對方1隻精靈作對象，本回合中，其下一次時，該攻擊無效。"	//TW_TEXT
		],
	[
		"WXDi-P01-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-021.jpg", //SRC
		"ノヴァ＝ミュート", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】[無] 手札を1枚捨てる：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		"「出」無1捨棄1張手牌：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。"	//TW_TEXT
		],
	[
		"WXDi-P01-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-022.jpg", //SRC
		"ノヴァ＝スラッシュ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをトラッシュに置く。<br><br>【出】[白]：あなたのデッキの上からカードを5枚見る。その中からシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其放置到廢棄區。<br><br>「出」白1：查看我方牌組頂5張卡牌。將其中1張精靈公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P01-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-023.jpg", //SRC
		"ノヴァ＝スーパーノヴァ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×4", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：対戦相手のすべてのシグニを手札に戻す。", //JP_TEXT
		"「出」：對方所有精靈返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-024.jpg", //SRC
		"バン＝ピアニッシモ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル3のシグニ1体を対象とし、それをバニッシュする。あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。", //JP_TEXT
		"「出」：對方1隻等級3的精靈作對象，將其破壞。我方能量區最多1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-025.jpg", //SRC
		"バン＝ダカーポ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】[緑][無]：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「出」：本回合中，下一次我方受到傷害時，作為代替不會受到傷害。<br><br>「出」綠1無1：本回合中，下一次我方受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P01-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-026.jpg", //SRC
		"バン＝ビッグバン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×7", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：各プレイヤーは自分のシグニゾーンとトラッシュにあるすべてのカードをデッキに加えてシャッフルする。その後、各プレイヤーは自分のデッキの上からカードを7枚見て、その中から好きな枚数のシグニを場に出し、残りをトラッシュに置く。それらのシグニの【出】能力は発動しない。", //JP_TEXT
		"「出」：各玩家將自己精靈區和廢棄區的所有卡牌加入牌組並洗切。之後，各玩家查看自己牌組頂7張卡牌，將其中任意張的精靈出場，剩下的放置到廢棄區。這些精靈的「出」能力不能發動。"	//TW_TEXT
		],
	[
		"WXDi-P01-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-027.jpg", //SRC
		"マドカ//スライド", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のレベル2以下のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「出」無1：對方1隻等級2以下的精靈作對象，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P01-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-028.jpg", //SRC
		"マドカ//ブレイク", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とする。対戦相手は手札を2枚捨てないかぎり、それをデッキの一番下に置く。<br><br>【出】[青][無][無]：対戦相手のシグニ1体を対象とする。対戦相手は手札を2枚捨てないかぎり、それをデッキの一番下に置く。", //JP_TEXT
		"「出」：對方1隻精靈作對象。對方不捨棄2張手牌的話，將其放置到牌組下方。<br><br>「出」藍1無2：對方1隻精靈作對象。對方不捨棄2張手牌的話，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P01-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-029.jpg", //SRC
		"マドカ//クラップ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】手札を2枚捨てる：対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】[青][無][無]：対戦相手のシグニ1体を対象とし、それをダウンする。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其橫置。<br><br>「出」捨棄2張手牌：對方1隻精靈作對象，將其橫置。<br><br>「出」藍1無2：對方1隻精靈作對象，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-P01-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-030.jpg", //SRC
		"サンガ//スイング", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュから[ガード]を持たないカードを2枚まで対象とし、それらをエナゾーンに置く。", //JP_TEXT
		"「出」：我方廢棄區最多2張不持有防禦標記的卡牌作對象，將其放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-P01-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-031.jpg", //SRC
		"サンガ//ヒット", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[緑][無][無][無]：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「出」綠1無3：本回合中，下一次我方受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P01-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-032.jpg", //SRC
		"サンガ//パラレル", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：あなたのエナゾーンからシグニ1枚を対象とし、それを場に出す。それの【出】能力は発動しない。<br><br>【出】[緑][無][無]：対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：我方能量區1張精靈作對象，將其出場。其出能力不能發動。<br><br>「出」綠1無2：對方1隻力量10000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P01-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-033.jpg", //SRC
		"聖天姫 アークゲイン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、このシグニは【シャドウ】を得る。（このシグニは対戦相手によって対象にされない）<br><br>【出】[白]：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②カードを1枚引く。", //JP_TEXT
		"「常」：對方回合中，此精靈獲得【暗影】。（此精靈不會成為對方的對象）<br><br>「出」白1：查看我方牌組頂3張卡牌。將其中1張精靈卡公開並加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-034.jpg", //SRC
		"羅星姫 リーブラー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュから[ガード]を持たないレベル1のシグニを4枚まで対象とし、それらをデッキに加えてシャッフルする。<br><br>【起】（ターン1）[白]：あなたのデッキの上からカードを4枚トラッシュに置く。この方法でレベル1のシグニが2枚以上トラッシュに置かれた場合、このターン、対戦相手のシグニがバニッシュされる場合、エナゾーンに置かれる代わりにトラッシュに置かれる。", //JP_TEXT
		"「出」：我方廢棄區最多4張不持有防禦標記且等級1的精靈作對象，將其加入牌組並洗切。<br><br>「起」(回合1)白1：我方牌組上4張卡牌放置到廢棄區。通過此方法放置了2張以上等級1的精靈的話，本回合中，對方的精靈被破壞時，放置能量區時作為代替改為放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P01-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-035.jpg", //SRC
		"コードハート Pロマピ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜Card Jockey＞<br>【チーム常】：対戦相手は追加で[無][無]を支払わないかぎり【ガード】ができない。<br><br>【出】[白]：あなたのデッキの上からカードを3枚見る。その中からスペルと白のシグニをそれぞれ1枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「隊伍」＜Card Jockey＞<br>「隊伍常」：對方不追加支付無2的話不能【防禦】。<br><br>「出」白1：查看我方牌組頂3張卡牌。將其中魔法和白色精靈最多各1張公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P01-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-036.jpg", //SRC
		"紅将姫 ノブナガ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたの赤のシグニ1体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[赤]：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】[赤][赤]：ターン終了時まで、このシグニは【ダブルクラッシュ】を得る。（アタックによるダメージでライフクロスを2枚クラッシュする）", //JP_TEXT
		"「升階」放置到我方1隻紅色精靈上方（不滿足此條件無法出場）<br><br>「出」紅1：對方1隻力量8000以下的精靈作對象，將其破壞。<br><br>「起」紅2：直到回合結束時為止，此精靈獲得【雙重擊潰】。"	//TW_TEXT
		],
	[
		"WXDi-P01-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-037.jpg", //SRC
		"羅輝石 ローズクォーツ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜No Limit＞<br>【チーム出】[赤][赤]：対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【自】：このシグニがアタックしたとき、手札を2枚捨ててもよい。そうした場合、カードを2枚引く。", //JP_TEXT
		"「隊伍」＜No Limit＞<br>「隊伍出」紅2：對方1隻力量12000以下的精靈作對象，將其破壞。<br><br>「自」：此精靈攻擊時，可以捨棄2張手牌。若如此做，抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-038.jpg", //SRC
		"蒼魔姫 フェンリル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜うちゅうのはじまり＞<br>【チーム自】：あなたのアタックフェイズ開始時、対戦相手は手札を1枚捨てる。<br><br>【出】：対戦相手のシグニを2体まで対象とし、それらを凍結する。", //JP_TEXT
		"「隊伍」＜うちゅうのはじまり＞<br>「隊伍自」：我方攻擊階段開始時，對方捨棄1張手牌。<br><br>「出」：對方最多2隻精靈作對象，將其凍結。"	//TW_TEXT
		],
	[
		"WXDi-P01-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-039.jpg", //SRC
		"羅星姫 サタン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのデッキとトラッシュにあるレベル3とレベル2のシグニの基本レベルは1になる。<br><br>【常】：あなたのターンの間、対戦相手の効果によってあなたのレベル1のシグニはバニッシュされない。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のシグニを2体まで対象とし、それらをダウンする。②カードを1枚引く。", //JP_TEXT
		"「常」：我方牌組和廢棄區等級3和等級2的精靈的基本等級變為1。<br><br>「常」：我方回合中，我方等級1的精靈不會被對方的效果破壞。<br><br>「生命爆發」：選擇1項。①對方最多2隻精靈作對象，將其橫置。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-040.jpg", //SRC
		"翠将姫 ロビンフッド", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場に他にシグニがないかぎり、このシグニは「【自】：このシグニがアタックしたとき、[緑][無]を支払ってもよい。そうした場合、対戦相手のすべてのシグニをエナゾーンに置く。」を得る。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのシグニを2体まで対象とし、それらを裏向きにしてもよい。このターン終了時、この方法で裏向きにしたシグニを、同じ場所にシグニがない場合、表向きにする。", //JP_TEXT
		"「常」：我方場上沒有其他精靈時，此精靈獲得「自：此精靈攻擊時，可以支付綠1無1。若如此做，對方所有精靈放置到能量區。」。<br><br>「自」：我方攻擊階段開始時，我方最多2隻精靈作對象，可以將其背面向上。本回合結束時，通過此方法背面向上的精靈，該位置沒有精靈的話，將其正面向上。"	//TW_TEXT
		],
	[
		"WXDi-P01-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-041.jpg", //SRC
		"コードラビリント クイン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：各アタックフェイズ開始時、対戦相手のシグニ2体を対象とし、それらの場所を入れ替える。<br><br>【自】：対戦相手の場にあるシグニが1体以上他のシグニゾーンに移動したとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「自」：各攻擊階段開始時，對方2隻精靈作對象，交換其位置。<br><br>「自」：對方場上有1隻以上精靈移動到其他精靈區時，對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-042.jpg", //SRC
		"幻獣神 オサギツネ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このターンにあなたのデッキからカードが1枚以上エナゾーンに移動していた場合、対戦相手のパワー12000以上のシグニ1体を対象とし、[緑][無]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【出】：他のシグニを2体まで対象とし、ターン終了時まで、それらのパワーを＋5000する。", //JP_TEXT
		"「自」：此精靈攻擊時，本回合我方牌組卡牌有1張以上移動到能量區的話，對方1隻力量12000以上的精靈作對象，可以支付綠1無1。若如此做，將其破壞。<br><br>「出」：其他最多2隻精靈作對象，直到回合結束時為止，將其力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-P01-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-043.jpg", //SRC
		"大装 ダークエナジェ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：対戦相手のシグニのパワーが0以下になったとき、【エナチャージ1】をする。<br><br>【出】[黒]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－5000する。", //JP_TEXT
		"「自」(回合1)：對方的精靈力量0以下時，【能量填充1】。<br><br>「出」黑1：對方1隻精靈作對象，直到回合結束時為止，將其力量-5000。"	//TW_TEXT
		],
	[
		"WXDi-P01-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-044.jpg", //SRC
		"ドライ＝ランリョウオー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜DIAGRAM＞<br>【チーム自】：このシグニがアタックしたとき、あなたか対戦相手のデッキの上からカードを5枚トラッシュに置く。<br><br>【出】[黒]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－5000する。あなたのトラッシュにカードが20枚以上ある場合、代わりにターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		"「隊伍」＜DIAGRAM＞<br>「隊伍自」：此精靈攻擊時，我方或對方牌組頂5張卡牌放置到廢棄區。<br><br>「出」黑1：對方1隻精靈作對象，直到回合結束時為止，將其力量-5000。我方廢棄區卡牌有20張以上的話，作為代替直到回合結束時為止，將其力量-10000。"	//TW_TEXT
		],
	[
		"WXDi-P01-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-045.jpg", //SRC
		"聖天 ハニエル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：あなたのデッキの上からカードを3枚見る。その中からレベル2以下のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」無1：查看我方牌組頂3張卡牌。將其中1張等級2以下的精靈公開並加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：看我方牌組頂3張卡牌。將其中1張精靈公開並加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P01-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-046.jpg", //SRC
		"聖将 チョウウン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、このシグニは【シャドウ（レベル2以下のシグニ）】を得る。（このシグニは対戦相手のレベル2以下のシグニによって対象にされない）", //JP_TEXT
		"「常」：對方回合中，此精靈獲得【暗影(等級2以下的精靈)】。（此精靈不會成為對方等級2以下的精靈的對象）"	//TW_TEXT
		],
	[
		"WXDi-P01-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-047.jpg", //SRC
		"聖魔 アンドラス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】手札を1枚捨てる：あなたのデッキの上からカードを5枚見る。その中から＜悪魔＞のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「出」捨棄1張手牌：查看我方牌組頂5張卡牌。將其中1張＜惡魔＞精靈公開並加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將獲得「「常」：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-048.jpg", //SRC
		"羅星 アルファルド", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。そのカードがレベル1のシグニの場合、カードを1枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，公開我方牌組頂1張卡牌。該卡是等級1的精靈的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-049.jpg", //SRC
		"聖将 バチョウ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのライフクロスが2枚以下であるかぎり、このシグニのパワーは＋3000され、対戦相手のターンの間、このシグニは【シャドウ（シグニ）】を得る。（このシグニは対戦相手のシグニによって対象にされない）<br><br>【出】[白][白][無][無][無]：対戦相手のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「常」：我方生命護甲有2張以下時，此精靈的力量+3000，對方回合中，此精靈獲得【暗影(精靈)】。（此精靈不會成為對方的對象）<br><br>「出」白2無3：對方1隻精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P01-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-050.jpg", //SRC
		"中装 ボウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「生命爆發」：對方1隻力量8000以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-051.jpg", //SRC
		"幻水 シラウオ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの手札が4枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「常」：我方手牌有4張以上時，此精靈的力量+4000。<br><br>「生命爆發」：查看我方牌組頂3張牌。將其中最多2張精靈公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P01-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-052.jpg", //SRC
		"スタンド・アップ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-053.jpg", //SRC
		"紅天 シーター", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P01-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-054.jpg", //SRC
		"紅将 ガクヒ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：対戦相手のパワー2000以下のシグニ1体を対象とし、それをバニッシュする。このシグニのパワーが5000以上の場合、代わりに対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「起」橫置：對方1隻力量2000以下的精靈作對象，將其破壞。此精靈力量是5000以上的話，作為代替對方1隻力量5000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P01-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-055.jpg", //SRC
		"羅石 アメジスタ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、手札を1枚捨ててもよい。そうした場合、カードを1枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，可以捨棄1張手牌。若如此做，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-056.jpg", //SRC
		"羅原 C2H2", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】[無][無][無] このシグニを場からトラッシュに置く：対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「起」(無3)此精靈從場上放置到廢棄區：對方1隻力量12000以下的精靈作對象，將其破壞。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以支付紅1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P01-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-057.jpg", //SRC
		"紅天 ラーマ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：ターン終了時まで、あなたのすべてのシグニのパワーを＋3000する。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「出」：直到回合結束時為止，我方所有精靈的力量+3000。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以支付紅1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P01-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-058.jpg", //SRC
		"中装 ショクダイキリ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：あなたのレベル3のシグニ1体を対象とし、ターン終了時まで、それは「【自】：このシグニがアタックしたとき、対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		"「出」無1：我方1隻等級3的精靈作對象，直到回合結束時為止，使其獲得「自：此精靈攻擊時，對方1隻力量8000以下的精靈作對象，將其破壞。」。"	//TW_TEXT
		],
	[
		"WXDi-P01-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-059.jpg", //SRC
		"羅星 カリーナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。その後、そのカードがレベル1のシグニの場合、対戦相手のパワー8000以下のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈攻擊時，公開我方牌組頂1張卡牌。之後，該卡是等級1精靈的話，對方1隻力量8000以下的精靈作對象，可以支付無1，若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P01-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-060.jpg", //SRC
		"共鳴の壊音", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×6", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のパワー12000以下のすべてのシグニをバニッシュする。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"破壞對方所有力量12000以下的精靈。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P01-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-061.jpg", //SRC
		"蒼天 カロン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：カードを1枚引く。", //JP_TEXT
		"「出」無1：抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-062.jpg", //SRC
		"蒼将 ブラダマンテ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手の凍結状態のシグニ1体を対象とし、ターン終了時まで、それは「【自】：ターン終了時、このシグニをバニッシュする。そうした場合、あなたは手札を1枚捨てる。」を得る。", //JP_TEXT
		"「出」：對方1隻凍結狀態的精靈作對象，直到回合結束時為止，使其獲得「自：回合結束時，破壞此精靈。若如此做，我方捨棄1張手牌。」。"	//TW_TEXT
		],
	[
		"WXDi-P01-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-063.jpg", //SRC
		"羅星 アンチラ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュから[ガード]を持たないレベル1のシグニを1枚まで対象とし、それをデッキの一番上に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：我方廢棄區最多1張不持有防禦標記且等級1的精靈作對象，將其放置到牌組上方。<br><br>「生命爆發」：查看我方牌組頂3張牌。將其中1張精靈公開並加入手牌或出場，剩下的按任意順序返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P01-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-064.jpg", //SRC
		"幻水 リュグツカ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：カードを1枚引き、手札を1枚捨てる。<br><br>【ライフバースト】：カードを2枚引く。", //JP_TEXT
		"「出」：抽1張牌，捨棄1張手牌。<br><br>「生命爆發」：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-065.jpg", //SRC
		"蒼天 コキュートス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それを凍結する。<br>（凍結状態のシグニは次の自分のアップフェイズにアップしない）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其凍結。<br>（凍結狀態的精靈在下一個自己的豎直階段不能豎直）<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-066.jpg", //SRC
		"蒼魔 フォカロル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニを2体まで対象とし、それらをダウンする。カードを1枚引く。", //JP_TEXT
		"「生命爆發」：對方最多2隻精靈作對象，將其橫置。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-067.jpg", //SRC
		"幻水 シィラカン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、カードを1枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-068.jpg", //SRC
		"TROUBLE", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"カードを3枚引く。<br><br>【ライフバースト】：対戦相手のシグニを2体まで対象とし、それらをダウンする。", //JP_TEXT
		"抽3張牌。<br><br>「生命爆發」：對方最多2隻精靈作對象，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-P01-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-069.jpg", //SRC
		"翠天 ガルム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのエナゾーンに＜天使＞のシグニが3枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：【エナチャージ2】をする。その後、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。", //JP_TEXT
		"「常」：我方能量區的＜天使＞精靈有3張以上時，此精靈的力量+4000。<br><br>「生命爆發」：【能量填充2】。之後，我方能量區最多1隻精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-070.jpg", //SRC
		"翠将 メイドマリアン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、あなたのエナゾーンから＜武勇＞のシグニ1枚を対象とし、[無]を支払ってもよい。そうした場合、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[緑][緑]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈被破壞時，我方能量區1張＜武勇＞精靈作對象，可以支付無1。若如此做，將其加入手牌。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付綠2。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P01-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-071.jpg", //SRC
		"翠魔 ヴァサゴ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがコストか効果によって場からトラッシュに置かれたとき、【エナチャージ1】をする。<br><br>【出】：あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋3000する。あなたのデッキの一番上のカードをトラッシュに置く。", //JP_TEXT
		"「自」：此精靈因費用或效果從場上放置到廢棄區時，【能量填充1】。<br><br>「出」：我方1隻精靈作對象，直到回合結束時為止，將其力量+3000。我方牌組頂1張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P01-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-072.jpg", //SRC
		"幻獣 ヒャッココ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このシグニのパワーが5000以上の場合、【エナチャージ1】をする。（あなたのデッキの一番上のカードをエナゾーンに置く）", //JP_TEXT
		"「自」：此精靈攻擊時，此精靈的力量是5000以上的話，【能量填充1】。（我方牌組頂1張卡牌放置到能量區）"	//TW_TEXT
		],
	[
		"WXDi-P01-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-073.jpg", //SRC
		"翠天 スカジ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの他の＜天使＞のシグニ1体を対象とし、ターン終了時まで、それは「【自】：このシグニがアタックしたとき、【エナチャージ1】をする。」を得る。", //JP_TEXT
		"「出」：我方其他1隻＜天使＞精靈作對象，直到回合結束時為止，使其獲得「自：此精靈攻擊時，【能量填充1】。」。"	//TW_TEXT
		],
	[
		"WXDi-P01-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-074.jpg", //SRC
		"羅星 ピーコック", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。その後、そのカードがレベル1のシグニの場合、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。", //JP_TEXT
		"「自」：此精靈攻擊時，公開我方牌組頂1張卡牌。之後，該卡是等級1的精靈的話，我方能量區最多1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-075.jpg", //SRC
		"コードメイズ キヨステイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが中央のシグニゾーンにあるかぎり、このシグニのパワーは＋4000される。<br><br>【出】：対戦相手の場にあるすべてのシグニを好きなように配置し直す。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にシグニがアタックしたとき、そのアタックを無効にする。", //JP_TEXT
		"「常」：此精靈在中央精靈區時，此精靈的力量+4000。<br><br>「出」：任意配置對方場上所有精靈。<br><br>「生命爆發」：【能量填充1】。本回合中，下一次精靈攻擊時，該攻擊無效。"	//TW_TEXT
		],
	[
		"WXDi-P01-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-076.jpg", //SRC
		"幻獣 ムスザク", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、【エナチャージ1】をする。（あなたのデッキの一番上のカードをエナゾーンに置く）", //JP_TEXT
		"「自」：此精靈攻擊時，【能量填充1】。（我方牌組頂1張卡牌放置到能量區）"	//TW_TEXT
		],
	[
		"WXDi-P01-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-077.jpg", //SRC
		"大蛇", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のパワー15000以上のシグニ1体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"對方1隻力量15000以上的精靈作對象，將其破壞。<br><br>「生命爆發」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P01-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-078.jpg", //SRC
		"凶天 アズライール", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[無][無]：あなたのトラッシュから＜天使＞のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：あなたのトラッシュから＜天使＞のシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「出」無2：我方廢棄區1張＜天使＞精靈作對象，將其加入手牌。<br><br>「生命爆發」：我方廢棄區1張＜天使＞精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P01-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-079.jpg", //SRC
		"凶将 スカーアハ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのトラッシュにカードが20枚以上ある場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「自」：此精靈攻擊時，我方廢棄區卡牌有20張以上的話，對方1隻精靈作對象，直到回合結束時，將其力量-3000。"	//TW_TEXT
		],
	[
		"WXDi-P01-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-080.jpg", //SRC
		"凶魔 バアル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「出」：我方牌組頂3張卡牌放置到廢棄區。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付黑1無1。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P01-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-081.jpg", //SRC
		"小装 フラガラッハ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」無1：對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P01-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-082.jpg", //SRC
		"羅星 ホロロジウム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。その後、そのカードがレベル1のシグニの場合、あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。この方法でシグニを手札に加えた場合、手札を1枚捨てる。", //JP_TEXT
		"「自」：此精靈攻擊時，公開我方牌組頂1張卡牌。之後，該卡是等級1精靈的話，我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。此方法有精靈加入手牌的話，捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P01-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-083.jpg", //SRC
		"凶魔 パイモン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、あなたのシグニ1体を場からトラッシュに置いてもよい。そうした場合、ターン終了時まで、それのパワーを－5000する。", //JP_TEXT
		"「自」：此精靈攻擊時，對方1隻精靈作對象，可以將我方1隻精靈從場上放置到廢棄區。若如此做，直到回合結束時為止，將其力量-5000。"	//TW_TEXT
		],
	[
		"WXDi-P01-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-084.jpg", //SRC
		"中装 グラム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」無1：對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。"	//TW_TEXT
		],
	[
		"WXDi-P01-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-085.jpg", //SRC
		"ツヴァイ＝ダガ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。あなたのトラッシュにカードが15枚以上ある場合、代わりにターン終了時まで、それのパワーを－5000する。", //JP_TEXT
		"「起」橫置：對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。我方廢棄區卡牌有15張以上的話，作為代替直到回合結束時為止，將其力量-5000。"	//TW_TEXT
		],
	[
		"WXDi-P01-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-086.jpg", //SRC
		"羅星 コルバス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手は自分のシグニ1体を選びトラッシュに置く。", //JP_TEXT
		"「生命爆發」：對方選擇自己1隻精靈放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P01-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-087.jpg", //SRC
		"コードメイズ ウェカワ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがコストか効果によって場からトラッシュに置かれたとき、あなたのトラッシュからレベル2以下の黒のシグニ1枚を対象とし、[無]を支払ってもよい。そうした場合、それをダウン状態で場に出す。<br><br>【出】[無]：あなたのトラッシュから[ガード]を持たないカード1枚を対象とし、それをエナゾーンに置く。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「自」：此精靈因費用或效果從場上放置到廢棄區時，我方廢棄區1張等級2以下的黑色精靈作對象，可以支付無1。若如此做，將其以橫置狀態出場。<br><br>「出」無1：我方廢棄區1張不持有防禦標記的精靈作對象，將其放置到能量區。<br><br>「生命爆發」：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P01-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-088.jpg", //SRC
		"アンダー・アトラクティブ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"このターン、あなたのシグニの効果によって対戦相手のシグニのパワーが－（マイナス）される場合、代わりに2倍－（マイナス）される。<br>あなたのトラッシュにカードが25枚以上ある場合、あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、ターン終了時まで、それのパワーを－15000する。", //JP_TEXT
		"本回合中，我方精靈的效果減對方精靈的力量的話，作為代替減2倍。<br><br>我方廢棄區卡牌有25張以上的話，我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，直到回合結束時為止，將其力量-15000。"	//TW_TEXT
		],
	[
		"WXDi-P01-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-089.jpg", //SRC
		"聖紅将 パシバル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か赤1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或紅）"	//TW_TEXT
		],
	[
		"WXDi-P01-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-090.jpg", //SRC
		"聖紅将 ガウェイン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か赤1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或紅）"	//TW_TEXT
		],
	[
		"WXDi-P01-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-091.jpg", //SRC
		"羅星 プロシオス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或藍）"	//TW_TEXT
		],
	[
		"WXDi-P01-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-092.jpg", //SRC
		"羅星 シリオス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或藍）"	//TW_TEXT
		],
	[
		"WXDi-P01-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-093.jpg", //SRC
		"コードメイズ ガイセンモ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或綠）"	//TW_TEXT
		],
	[
		"WXDi-P01-094", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-094.jpg", //SRC
		"コードメイズ バベタワ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或綠）"	//TW_TEXT
		],
	[
		"WXDi-P01-095", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-095.jpg", //SRC
		"蒼凶魔 コオニ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或黑）"	//TW_TEXT
		],
	[
		"WXDi-P01-096", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-096.jpg", //SRC
		"蒼凶魔 チクタク", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或黑）"	//TW_TEXT
		],
	[
		"WXDi-P01-097", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-097.jpg", //SRC
		"アイン＝グリーンガス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは緑か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個綠或黑）"	//TW_TEXT
		],
	[
		"WXDi-P01-098", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-098.jpg", //SRC
		"ツヴァイ＝コブラス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは緑か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個綠或黑）"	//TW_TEXT
		],
	[
		"WXDi-P01-099", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-099.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-001.jpg", //SRC
		"幻影と稲光", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白緑", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に白と緑のルリグがいる<br><br>以下の2つから1つを選ぶ。<br>①あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋5000する。<br>②対戦相手のターンの場合、あなたのシグニ1体を対象とし、ターン終了時まで、それは【シャドウ】を得る。（そのシグニは対戦相手によって対象にされない）", //JP_TEXT
		"「使用條件」我方場上有白色和綠色分身<br><br>以下2項中選擇1項。<br>①我方1隻精靈作對象，直到回合結束時為止，將其力量+5000。<br>②對方回合的話，我方1隻精靈作對象，直到回合結束時為止，使其獲得【暗影】。（該精靈不會成為對方的對象）"	//TW_TEXT
		],
	[
		"WXDi-P02-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-002.jpg", //SRC
		"ITTEN－TOPPA", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤青", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に赤と青のルリグがいる<br><br>以下の4つから2つまで選ぶ。<br>①対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。<br>②対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br>③対戦相手の手札を1枚見ないで選び、捨てさせる。<br>④カードを1枚引く。", //JP_TEXT
		"「使用條件」我方場上有紅色和藍色分身<br><br>以下4項中選擇最多2項。<br>①對方1隻力量8000以下的精靈作對象，將其破壞。<br>②對方選擇自己能量區的1張卡牌放置到廢棄區。<br>③不查看對方手牌選擇1張，將其捨棄。<br>④抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-003.jpg", //SRC
		"蒼黒GAIA", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青黒", //COLOR
		"", //LEVEL
		"《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に青と黒のルリグがいる<br><br>対戦相手の手札を2枚見ないで選び、捨てさせる。その後、あなたのトラッシュから[ガード]を持たないシグニを、レベルの合計がこの方法で捨てられたシグニのレベルの合計と等しくなるように2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「使用條件」我方場上有藍色和黑色分身<br><br>不查看對方手牌選擇2張，將其捨棄。之後，我方廢棄區不持有防禦標記的精靈合計等級與通過此方法捨棄的精靈合計等級相同的最多2張卡牌作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-004.jpg", //SRC
		"Heaven’s Door", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたのトラッシュに＜天使＞のシグニが7種類以上ある<br><br>対戦相手のシグニ1体を対象とし、それをトラッシュに置く。カードを2枚引く。", //JP_TEXT
		"「使用條件」我方廢棄區的＜天使＞精靈有7種類以上<br><br>對方1隻精靈作對象，將其放置到廢棄區。抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-005.jpg", //SRC
		"ゼノ・クラスタ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>以下の2つから1つを選ぶ。<br>①カードを1枚引く。このターンに対戦相手の効果によってあなたの手札からカードが1枚以上トラッシュに移動していた場合、代わりにカードを3枚引く。<br>②【エナチャージ1】をする。このターンに対戦相手の効果によってあなたのエナゾーンからカードが1枚以上トラッシュに移動していた場合、代わりに【エナチャージ3】をする。", //JP_TEXT
		"(Piece在我方場上分身有3隻才可使用)<br><br>以下2項中選擇1項。<br>①抽1張牌。本回合因對方效果使我方1張以上的手牌移動到廢棄區的話，作為代替抽3張牌。<br>②【能量填充1】。本回合因對方效果使我方能量區1張以上的卡牌移動到廢棄區的話，作為代替【能量填充3】。"	//TW_TEXT
		],
	[
		"WXDi-P02-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-006.jpg", //SRC
		"END OF THE TURN", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,スペルカットイン", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>以下の2つから1つを選ぶ。<br>①コストの合計が3以下のスペル1つを対象とし、それの効果を打ち消す。<br>（コストの合計とは、カードの左上のエナコストの数字の合計である。例えばコストが[白(1)][無(2)]の場合、コストの合計は3である）<br>②あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"(Piece在我方場上分身有3隻才可使用)<br><br>以下2項中選擇1項。<br>①費用合計為3以下的1個魔法作對象，將其效果取消。（費用合計是指卡牌左上方能量數字的合計。例如費用是白1無2的話，費用的合計便是3）<br>②我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-007.jpg", //SRC
		"想いへ前進 アキノ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-008.jpg", //SRC
		"輝きへ前進 アキノ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-009.jpg", //SRC
		"勇気へ前進 アキノ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【チーム】＜No Limit＞<br>【チーム常】：対戦相手のターンの間、あなたの中央のシグニゾーンにあるシグニのパワーを＋2000する。<br><br>【出】：カードを1枚引き【エナチャージ1】をする。<br><br>【起】（ゲーム1）アップ状態のレベル2のルリグ2体をダウンする：対戦相手のシグニを2体まで対象とし、手札から[ガード]を持つカードを1枚捨ててもよい。そうした場合、それらを手札に戻す。", //JP_TEXT
		"「隊伍」＜No Limit＞<br>「隊伍常」：對方回合中，我方中央精靈的精靈力量+2000。<br><br>「出」：抽1張牌，【能量填充1】。<br><br>「起」(遊戲1)橫置2隻豎直狀態的等級2分身：對方最多2隻精靈作對象，可以從手牌捨棄1張持有防禦標記的卡牌。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-010.jpg", //SRC
		"ヒラナ*ステージ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻等級2以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-011.jpg", //SRC
		"ヒラナ*グローイン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：カードを1枚引くか【エナチャージ1】をする。<br><br>【出】：対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「出」：抽1張牌或【能量填充1】。<br><br>「出」：對方能量區1張不持有對方中央分身相同顏色的卡牌作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P02-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-012.jpg", //SRC
		"ヒラナ*ストレート", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[無][無][無][無][無]：対戦相手のレベル3のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻等級2以下的精靈作對象，將其破壞。<br><br>「出」無5：對方1隻等級3以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-013.jpg", //SRC
		"ヒラナ*パワーオン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：カードを2枚引くか【エナチャージ2】をする。<br><br>【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：抽2張牌或【能量填充2】。<br><br>「出」：對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-014.jpg", //SRC
		"DJ．LOVIT－1stVerse", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-015.jpg", //SRC
		"DJ．LOVIT－2ndVerse", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-016.jpg", //SRC
		"DJ．LOVIT－3rdVerse", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【チーム】＜Card Jockey＞<br>【チーム起】[ダウン]：対戦相手のセンタールリグがレベル3以上の場合、対戦相手のエナゾーンからカード1枚を対象とし、それをトラッシュに置く。<br><br>【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】（ゲーム1）[赤(0)]：ターン終了時まで、このルリグは「【起】アップ状態のレベル2のルリグ1体をダウンする：このルリグをアップする。」を得る。", //JP_TEXT
		"「隊伍」＜Card Jockey＞<br>「隊伍起」橫置：對方中央分身是等級3以上的話，對方能量區1張卡牌作對象，將其放置到廢棄區。<br><br>「出」：對方1隻精靈作對象，將其破壞。<br><br>「起」(遊戲1)紅0：直到回合結束時為止，此分身獲得「(起)橫置1隻豎直狀態的等級2分身：豎直此分身。」。"	//TW_TEXT
		],
	[
		"WXDi-P02-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-017.jpg", //SRC
		"MC．LION－DIG", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを5枚見る。その中からあなたのセンタールリグと共通する色を持つシグニと、センタールリグではないあなたのいずれかのルリグと共通する色を持つシグニを、それぞれ1枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組頂5張卡牌。將其中與我方中央分身持有相同顏色的精靈和我方任一非中央分身持有相同顏色的精靈最多各1隻公開並加入手牌，剩下的按任意順序返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P02-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-018.jpg", //SRC
		"MC．LION－STANDUP", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：あなたのレベル1のシグニ1体を対象とし、ターン終了時まで、それは「【自】（ターン1）：このシグニがバトルによって対戦相手のシグニをバニッシュしたとき、このシグニをアップする。」を得る。", //JP_TEXT
		"「出」：我方1隻等級1的精靈作對象，直到回合結束時為止，使其獲得「自(回合1)：此精靈因戰鬥破壞對方的精靈時，豎直此精靈。」。"	//TW_TEXT
		],
	[
		"WXDi-P02-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-019.jpg", //SRC
		"MC．LION－DISRESPECT", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】手札を2枚捨てる：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】[白][無][無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「出」捨棄2張手牌：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「出」白1無2：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。"	//TW_TEXT
		],
	[
		"WXDi-P02-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-020.jpg", //SRC
		"MC．LION－DOPE", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×5", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを5枚見る。その中からカードを1枚まで手札に加え、シグニを2枚まで場に出し、残りを好きな順番でデッキの一番下に置く。それらのシグニの【出】能力は発動しない。", //JP_TEXT
		"「出」：查看我方牌組頂5張卡牌。將其中最多1張卡牌加入手牌，最多2張精靈出場，剩下的按任意順序放回牌組下方。這些精靈的「出」能力不能發動。"	//TW_TEXT
		],
	[
		"WXDi-P02-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-021.jpg", //SRC
		"ソラニウタウ バン", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-022.jpg", //SRC
		"マエニタツ バン", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-023.jpg", //SRC
		"タタカイススム バン", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【チーム】＜うちゅうのはじまり＞<br>【チーム出】：対戦相手は自分のシグニ1体を選びエナゾーンに置く。<br><br>【自】：あなたのアタックフェイズ開始時、このルリグの下にカードが5枚以上ある場合、【エナチャージ1】をする。7枚以上ある場合、あなたのレベル3の緑のシグニ1体を対象とし、ターン終了時まで、それは【ランサー】を得る。【起】（ゲーム1）[緑(0)]：あなたの他のルリグの下にあるすべてのカードをこのルリグの下に置く。", //JP_TEXT
		"「隊伍」＜宇宙的起源＞<br>「隊伍出」：對方自己選擇1隻精靈放置到能量區。<br><br>「自」：我方攻擊階段開始時，此分身下方卡牌有5張以上的話，【能量填充1】。7張以上的話，我方1隻等級3的綠色精靈作對象，直到回合結束時為止，使其獲得【槍兵】。<br><br>「起」(遊戲1)綠0：我方其他分身下方的所有卡牌放置到此分身下方。"	//TW_TEXT
		],
	[
		"WXDi-P02-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-024.jpg", //SRC
		"タマゴ＝ダブルストローク", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：カードを2枚引く。", //JP_TEXT
		"「出」：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-025.jpg", //SRC
		"タマゴ＝ビーティング", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル1のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「出」：對方1隻等級1的精靈作對象，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P02-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-026.jpg", //SRC
		"タマゴ＝ジェットスティック", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】[無]：カードを2枚引く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其橫置。<br><br>「出」無1：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-027.jpg", //SRC
		"タマゴ＝ドラムロール", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×6", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：対戦相手のすべてのシグニをダウンする。", //JP_TEXT
		"「出」：橫置對方所有精靈。"	//TW_TEXT
		],
	[
		"WXDi-P02-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-028.jpg", //SRC
		"VOGUE1 マドカ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-029.jpg", //SRC
		"VOGUE2 マドカ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-030.jpg", //SRC
		"VOGUE3 マドカ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【チーム】＜DIAGRAM＞<br>【チーム自】（ターン1）：あなたの効果によって対戦相手が手札を1枚捨てたとき、カードを1枚引くか【エナチャージ1】をする。<br><br>【出】：カードを3枚引き、手札を2枚捨てる。<br><br>【起】（ゲーム1）[青(0)]：あなたの＜DIAGRAM＞のレベル1のルリグ1体を対象とし、それをルリグデッキに戻す。（下のカードは場に残す）", //JP_TEXT
		"「隊伍」＜DIAGRAM＞<br>「隊伍自」(回合1)：我方效果使對方捨棄1張手牌時，抽1張牌或【能量填充1】。<br><br>「出」：抽3張牌，捨棄2張手牌。<br><br>「起」(遊戲1)藍0：我方1隻＜DIAGRAM＞等級1的分身作對象，將其返回分身牌組。（下方的卡牌留在場上）"	//TW_TEXT
		],
	[
		"WXDi-P02-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-031.jpg", //SRC
		"ムジカ／／ドルフィン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを2枚トラッシュに置く。その後、あなたのトラッシュからそれぞれ共通する色を持たず無色ではないシグニ2枚を対象とし、それらを手札に加える。", //JP_TEXT
		"「出」：我方牌組頂2張卡牌放置到廢棄區。之後，我方廢棄區2張不持有相同顏色的非無色精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-032.jpg", //SRC
		"ムジカ／／パワームーブ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P02-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-033.jpg", //SRC
		"ムジカ／／スプリット", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。<br><br>【出】[黒][無][無][無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。<br><br>「出」黑1無3：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P02-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-034.jpg", //SRC
		"ムジカ／／グルーヴィ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：ターン終了時まで、対戦相手のすべてのシグニは「【自】：このシグニがバニッシュされたとき、あなたのデッキの上からこのシグニのレベル1につきカードを2枚トラッシュに置く。」を得る。<br><br>【出】[無][無][無]：対戦相手のシグニ1体を対象とし、それをバニッシュする。その後、あなたのトラッシュからそれと同じレベルのシグニ1枚を対象とし、それを場に出す。", //JP_TEXT
		"「出」：直到回合結束時為止，對方所有精靈獲得「自：此精靈被破壞時，此精靈的等級每有1，將我方牌組頂2張卡牌放置到廢棄區。」。<br><br>「出」無3：對方1隻精靈作對象，將其破壞。之後，我方廢棄區1張與該精靈相同等級的精靈作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-P02-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-035.jpg", //SRC
		"大装 ヤエキリ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】赤のルリグ1体（このシグニが場に出たとき、あなたのアップ状態の赤のルリグ1体をダウンしないかぎり、これをダウンする）<br><br>【自】（ターン1）：あなたが【ガード】したとき、カードを1枚引く。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、[白][無]を支払ってもよい。そうした場合、それを手札に加える。", //JP_TEXT
		"〔和音〕1隻紅色分身(此精靈出場時，不橫置我方豎直狀態的紅色分身的話，將其橫置)<br><br>「自」(回合1)：我方【防禦】時，抽1張牌。<br><br>「自」：此精靈攻擊時，我方廢棄區1張持有防禦標記的精靈作對象，可以支付白1無1。若如此做，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-036.jpg", //SRC
		"羅星姫 カシオペヤ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのデッキの上からカードを4枚公開する。その中にレベル1のシグニが3枚以上ある場合、次の対戦相手のターン終了時まで、このシグニのパワーは＋3000され、このシグニは【シャドウ（シグニ）】を得る。この効果で公開したカードを好きな順番でデッキの一番下に置く。<br><br>【自】：あなたのメインフェイズ開始時、対戦相手のシグニ1体を対象とし、[白][無]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		"「自」：此精靈攻擊時，公開我方牌組頂4張卡牌。其中等級1的精靈有3張以上的話，直到下一個對方回合結束時為止，此精靈力量+3000，此精靈獲得【暗影(精靈)】。此效果公開的卡牌按任意順序放回牌組下方。<br><br>「自」：我方主要階段開始時，對方1隻精靈作對象，可以支付白1無1。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-037.jpg", //SRC
		"紅魔姫 ダッキ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのライフクロス1枚がクラッシュされたとき、カードを1枚引く。<br><br>【自】（ターン1）：あなたのシグニ1体がコストかあなたの効果によって場からトラッシュに置かれたとき、【エナチャージ1】をする。<br><br>【出】：あなたのライフクロス1枚をクラッシュしてもよい。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」(回合1)：我方生命護甲被擊潰時，抽1張牌。<br><br>「自」(回合1)：我方1隻精靈因費用或我方效果從場上放置到廢棄區時，【能量填充1】。<br><br>「出」：可以擊潰我方1張生命護甲。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-038.jpg", //SRC
		"羅星姫 ホウオーザ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】白のルリグ1体<br><br>【自】：あなたのアタックフェイズ開始時、このシグニがアップ状態の場合、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、それをトラッシュに置く。<br><br>【自】：あなたのターン終了時、このターンにあなたの効果によって対戦相手のエナゾーンからカードが2枚以上トラッシュに置かれていた場合、カードを1枚引く。", //JP_TEXT
		"〔和音〕1隻白色分身<br><br>「自」：我方攻擊階段開始時，此精靈是豎直狀態的話，對方能量區1張與對方中央分身不持有相同顏色的卡牌作對象，將其放置到廢棄區。<br><br>「自」：我方回合結束時，本回合因我方效果使對方能量區卡牌有2張以上放置到廢棄區的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-039.jpg", //SRC
		"幻獣神 バッファロー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたの他の＜地獣＞のシグニ1体が場に出たとき、ターン終了時まで、そのシグニとこのシグニのパワーをそれぞれ＋4000する。<br><br>【自】：あなたのアタックフェイズ開始時、ターン終了時まで、あなたのパワー20000以上のすべてのシグニは「【自】：このシグニがアタックしたとき、正面のパワー12000以下のシグニ1体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。」を得る。", //JP_TEXT
		"「自」：我方其他1隻＜地獸＞精靈出場時，直到回合結束時為止，該精靈與此精靈的力量各+4000。<br><br>「自」：我方攻擊階段開始時，直到回合結束時為止，我方所有力量20000以上的精靈獲得「自：此精靈攻擊時，正面1隻力量12000以下的精靈作對象，可以支付紅1無1。若如此做，將其破壞。」。"	//TW_TEXT
		],
	[
		"WXDi-P02-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-040.jpg", //SRC
		"蒼天姫 アマビエ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に＜天使＞のシグニが3体以上ある場合、カードを1枚引く。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュに＜天使＞のシグニが15枚以上ある場合、対戦相手のルリグ1体を対象とし、[青][無]を支払ってもよい。そうした場合、それを凍結する。<br><br>【ライフバースト】：あなたのトラッシュから、対象のレベル2の＜天使＞のシグニ1枚を手札に加えて対象のレベル1の＜天使＞のシグニ1枚を場に出す。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上＜天使＞精靈有3隻以上的話，抽1張牌。<br><br>「自」：此精靈攻擊時，我方廢棄區＜天使＞精靈有15張以上的話，對方1隻分身作對象，可以支付藍1無1。若如此做，將其凍結。<br><br>「生命爆發」：我方廢棄區1張等級2的＜天使＞精靈作對象加入手牌和1張等級1的＜天使＞精靈出場。"	//TW_TEXT
		],
	[
		"WXDi-P02-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-041.jpg", //SRC
		"羅輝石 ロイヤルブルー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】（ターン1）[青(0)]：対戦相手の凍結状態のシグニ1体を対象とし、ターン終了時まで、それは「【自】：アタックフェイズ開始時、あなたが[無][無]を支払わないかぎり、このシグニをバニッシュする。」を得る。<br><br>【ライフバースト】：対戦相手のルリグ1体と対戦相手のシグニ1体を対象とし、それらを凍結する。", //JP_TEXT
		"「起」(回合1)藍0：對方1隻凍結狀態的精靈作對象，直到回合結束時為止，使其獲得「自：攻擊階段開始時，我方不支付無2的話，破壞此精靈。」。<br><br>「生命爆發」：對方1隻分身和對方1隻精靈作對象，將其凍結。"	//TW_TEXT
		],
	[
		"WXDi-P02-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-042.jpg", //SRC
		"羅原姫 ZrO2", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】黒のルリグ1体<br><br>【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－3000する。このターンに対戦相手が手札を2枚以上捨てていた場合、代わりにターン終了時まで、それのパワーを－8000する。<br><br>【出】[青]：カードを1枚引くか、対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"〔和音〕1隻黑色分身<br><br>「自」：此精靈攻擊時，對方1隻精靈作對象，可以支付無1。若如此做，直到回合結束時為止，將其力量-3000。本回合對方捨棄手牌2張以上的話，作為代替直到回合結束時為止，將其力量-8000。<br><br>「出」藍1：抽1張牌或不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P02-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-043.jpg", //SRC
		"ドライ＝インフルD型", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】青のルリグ1体（このシグニが場に出たとき、あなたのアップ状態の青のルリグ1体をダウンしないかぎり、これをダウンする）<br><br>【自】：このシグニがアタックしたとき、対戦相手のパワー10000以上のシグニを2体まで対象とし、[緑][緑][緑][無][無][無]を支払ってもよい。そうした場合、それらをバニッシュする。<br><br>【自】（ターン1）：このシグニが対戦相手の、能力か効果の対象になったとき、カードを1枚引き【エナチャージ1】をする。", //JP_TEXT
		"〔和音〕1隻藍色分身(此精靈出場時，不橫置我方豎直狀態的藍色分身的話，將其橫置)<br><br>「自」：此精靈攻擊時，對方最多2隻力量10000以上的精靈作對象，可以支付綠3無3。若如此做，將其破壞。<br><br>「自」(回合1)：此精靈因對方能力或效果成為對象時，抽1張牌並【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P02-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-044.jpg", //SRC
		"羅植姫 ゴーシュ・アグネーゼ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、このシグニをエナゾーンからデッキの一番下に置いてもよい。そうした場合、あなたのデッキの一番上を公開する。そのカードがレベル3のシグニの場合、そのシグニをダウン状態で場に出してもよい。<br><br>【自】：あなたのターン終了時、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈被破壞時，此精靈可以從能量區放置到牌組下方。若如此做，公開我方牌組頂1張卡牌。該卡牌是等級3精靈的話，該精靈可以橫置狀態出場。<br><br>「自」：我方回合結束時，我方能量區最多1張精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-045.jpg", //SRC
		"凶天姫 ヴァルキリー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのトラッシュからレベル1の＜天使＞のシグニ1枚を対象とし、それを手札に加える。<br><br>【自】：このシグニがバニッシュされたとき、手札から＜天使＞のシグニを2枚捨ててもよい。そうした場合、このシグニをエナゾーンからダウン状態で場に出す。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「自」：此精靈攻擊時，我方廢棄區1張等級1的＜天使＞精靈作對象，將其加入手牌。<br><br>「自」：此精靈被破壞時，可以從手牌捨棄2張＜天使＞精靈。若如此做，此精靈從能量區橫置出場。<br><br>「生命爆發」：我方廢棄區1張不持有防禦標記的精靈作對象，加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P02-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-046.jpg", //SRC
		"コードアンシエンツ ファラリス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】ルリグ2体（このシグニが場に出たとき、あなたのアップ状態のルリグ2体をダウンしないかぎり、これをダウンする）<br><br>【自】：このシグニがバトルによって対戦相手のシグニをバニッシュしたとき、対戦相手のデッキの上からカードを10枚トラッシュに置く。", //JP_TEXT
		"〔和音〕2隻分身(此精靈出場時，不橫置我方2隻豎直狀態的分身的話，將其橫置)<br><br>「自」：此精靈因戰鬥破壞對方精靈時，對方牌組頂10張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P02-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-047.jpg", //SRC
		"聖天 ペレ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[無][ダウン]：あなたの他の＜天使＞のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「起」無1(橫置)：我方其他1隻＜天使＞精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-048.jpg", //SRC
		"小装 コギツネマル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場に他のシグニがあるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、[白]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		"「常」：我方場上有其他精靈時，此精靈的力量+4000。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，可以支付白1。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-049.jpg", //SRC
		"コードメイズ トトリサ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：対戦相手のシグニ1体が場からトラッシュに置かれたとき、【エナチャージ1】をする。", //JP_TEXT
		"「自」(回合1)：對方1隻精靈從場上放置到廢棄區時，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P02-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-050.jpg", //SRC
		"聖天 キルケー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。カードを1枚引く。", //JP_TEXT
		"「生命爆發」：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-051.jpg", //SRC
		"羅星 キルキヌス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：あなたのデッキの上からカードを5枚見る。その中からレベル1のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」無1：查看我方牌組頂5張卡牌。其中1張等級1的精靈公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P02-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-052.jpg", //SRC
		"コードメイズ シンフォーズ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のシグニ1体がアタックしたとき、その正面にシグニがない場合、このシグニをアタックしたそのシグニの正面に配置してもよい。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「自」：對方1隻精靈攻擊時，其正面沒有精靈的話，此精靈可以配置到攻擊中的該精靈正面。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-053.jpg", //SRC
		"コードメイズ デカサンバシ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニの正面のシグニがアタックしたとき、このシグニを他のシグニゾーンに配置してもよい。<br><br>【自】：対戦相手のターン終了時、対戦相手のシグニ1体を対象とし、[白][白]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		"「自」：此精靈正面的精靈攻擊時，此精靈可以配置到其他精靈區。<br><br>「自」：對方回合結束時，對方1隻精靈作對象，可以支付白2。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-054.jpg", //SRC
		"幻水 ホワイトベタ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、あなたの手札が4枚以上あるかぎり、このシグニのパワーは＋2000され、このシグニは【シャドウ（シグニ）】を得る。（このシグニは対戦相手のシグニによって対象にされない）", //JP_TEXT
		"「常」：對方回合中，我方手牌有4張以上時，此精靈力量+2000，此精靈獲得【暗影(精靈)】。（此精靈不會成為對方精靈的對象）"	//TW_TEXT
		],
	[
		"WXDi-P02-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-055.jpg", //SRC
		"ブレイブ・シェード", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"あなたのシグニ1体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋5000し、それは能力を失い、【シャドウ】と「【常】：アタックできない。」を得る。", //JP_TEXT
		"我方1隻精靈作對象，直到下一個對方回合結束時為止，將其力量+5000，失去能力，獲得【暗影】和「常：不能攻擊。」。"	//TW_TEXT
		],
	[
		"WXDi-P02-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-056.jpg", //SRC
		"紅天 アペフチ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたの＜天使＞のシグニ1体がバニッシュされたとき、あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋5000する。", //JP_TEXT
		"「自」：我方1隻＜天使＞精靈被破壞時，我方1隻精靈作對象，直到回合結束時為止，將其力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-P02-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-057.jpg", //SRC
		"紅魔 ゼパル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】他の赤のシグニ1体を場からトラッシュに置く：対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」其他1隻紅色精靈從場上放置到廢棄區：對方1隻力量3000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-058.jpg", //SRC
		"羅星 テブルサン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：このシグニをデッキの一番上に置く。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、[赤]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「起」(橫置)：此精靈放置到牌組上方。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，可以支付紅1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-059.jpg", //SRC
		"中装 ヌンチャ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のエナゾーンからカード1枚を対象とし、それをトラッシュに置く。カードを1枚引く。", //JP_TEXT
		"「生命爆發」：對方能量區1張卡牌作對象，將其放置到廢棄區。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-060.jpg", //SRC
		"コードアート Sトーブ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにスペルがあるかぎり、このシグニのパワーは＋3000される。<br><br>【出】[赤][赤][赤]：あなたのトラッシュにスペルが5枚以上ある場合、ターン終了時まで、このシグニは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「常」：我方廢棄區有魔法時，此精靈力量+3000。<br><br>「出」紅3：我方廢棄區魔法有5張以上的話，直到回合結束時為止，此精靈獲得【暗殺】。<br>(持有【暗殺】的精靈攻擊時不會與正面的精靈戰鬥來給予對方傷害)"	//TW_TEXT
		],
	[
		"WXDi-P02-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-061.jpg", //SRC
		"幻獣 ハムスター", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このシグニのパワーが8000以上の場合、対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。このシグニのパワーが12000以上の場合、代わりに対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈攻擊時，此精靈力量是8000以上的話，對方1隻力量3000以下的精靈作對於，將其破壞。此精靈力量是12000以上的話，作為代替對方1隻力量8000以下的精靈作對於，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-062.jpg", //SRC
		"紅将 ブーディカ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが中央のシグニゾーンにあるかぎり、このシグニのパワーは＋5000される。", //JP_TEXT
		"「常」：此精靈在中央精靈區時，此精靈力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-P02-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-063.jpg", //SRC
		"騒音の調和", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"あなたのレベル3の赤のシグニ1体を対象とし、ターン終了時まで、それは【ダブルクラッシュ】を得る。<br>（【ダブルクラッシュ】を持つシグニがアタックによってダメージを与えた場合ライフクロスを1枚ではなく2枚クラッシュする）", //JP_TEXT
		"我方1隻等級3的紅色精靈作對象，直到回合結束時為止，使其獲得【雙重擊潰】。<br>(持有【雙重擊潰】的精靈在攻擊給予傷害時生命護甲會由擊潰1張改為2張)"	//TW_TEXT
		],
	[
		"WXDi-P02-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-064.jpg", //SRC
		"蒼天 ヘケト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚見る。その中から好きな枚数のカードを好きな順番でデッキの一番下に置き、残りを好きな順番でデッキの一番上に戻す。", //JP_TEXT
		"「出」：查看我方牌組頂3張卡牌。其中任意張按任意順序放回牌組下方，剩下的按任意順序放回牌組上方。"	//TW_TEXT
		],
	[
		"WXDi-P02-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-065.jpg", //SRC
		"コードメイズ スノミュ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、対戦相手の場に凍結状態のシグニが2体以上ある場合、対戦相手の凍結状態のシグニ1体を対象とし、それをデッキの一番下に置く。<br><br>【出】：対戦相手の中央のシグニゾーンにあるシグニ1体を対象とし、それを凍結する。", //JP_TEXT
		"「自」：我方回合結束時，對方場上凍結狀態的精靈有2隻以上的話，對方1隻凍結狀態的精靈作對象，將其放置到牌組下方。<br><br>「出」：對方中央精靈區的1隻精靈作對象，將其凍結。"	//TW_TEXT
		],
	[
		"WXDi-P02-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-066.jpg", //SRC
		"幻水 チンアナゴ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの手札が4枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：あなたの手札が4枚以上ある場合、対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「常」：我方手牌有4張以上的話，此精靈的力量+4000。<br><br>「生命爆發」：我方手牌有4張以上的話，對方1隻豎直狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-067.jpg", //SRC
		"蒼天 ガギエル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、カードを1枚引き、手札を1枚捨てる。<br><br>【出】：カードを1枚引き、手札を1枚捨てる。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，抽1張牌，捨棄1張手牌。<br><br>「出」：抽1張牌，捨棄1張手牌。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-068.jpg", //SRC
		"蒼将 ヒジカタ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このターンにあなたが手札を1枚以上捨てていた場合、このシグニのパワーは＋3000される。<br><br>【常】：このターンにあなたが手札を2枚以上捨てていた場合、このシグニは「【自】：このシグニがバトルによって対戦相手のシグニをバニッシュしたとき、対戦相手の手札を1枚見ないで選び、捨てさせる。」を得る。", //JP_TEXT
		"「常」：本回合我方手牌捨棄1張以上的話，此精靈力量+3000。<br><br>「常」：本回合我方手牌捨棄2張以上的話，此精靈獲得「自：此精靈因戰鬥破壞對方精靈時，不查看對方手牌選擇1張，將其捨棄。」。"	//TW_TEXT
		],
	[
		"WXDi-P02-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-069.jpg", //SRC
		"羅星 ドラド", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：カードを2枚引く。対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「生命爆發」：抽2張牌。對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-070.jpg", //SRC
		"大罠 ウソスイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのシグニゾーンに裏向きのカードがある場合、カードを1枚引く。", //JP_TEXT
		"「出」：我方精靈區有背向的卡牌的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-071.jpg", //SRC
		"SPINNING HARMONY", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のシグニ1体を対象とし、それを凍結する。カードを1枚引く。その後、対戦相手の場に凍結状態のシグニが3体以上ある場合、追加で対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"對方1隻精靈作對象，將其凍結。抽1張牌。之後，對方場上凍結狀態的精靈有3隻以上的話，追加不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P02-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-072.jpg", //SRC
		"翠天 カマプアア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのエナゾーンから＜天使＞のシグニ2枚をトラッシュに置いてもよい。そうした場合、【エナチャージ3】をする。", //JP_TEXT
		"「自」：此精靈攻擊時，可以從我方能量區將2張＜天使＞精靈放置到廢棄區。若如此做，【能量填充3】。"	//TW_TEXT
		],
	[
		"WXDi-P02-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-073.jpg", //SRC
		"羅星 オフューカス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの手札からレベル1のシグニを1枚までエナゾーンに置く。<br><br>【ライフバースト】：【エナチャージ2】をする。その後、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。", //JP_TEXT
		"「出」：將我方手牌最多1張等級1的精靈放置到能量區。<br><br>「生命爆發」：【能量填充2】。之後，我方能量區最多1隻精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-074.jpg", //SRC
		"幻水 キュウセン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このターンにあなたのデッキからカードが1枚以上エナゾーンに移動していた場合、対戦相手のパワー8000以下のシグニ1体を対象とし、[緑][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈攻擊時，本回合我方牌組卡牌有1張以上移動到能量區的話，對方1隻力量8000以下的精靈作對象，可以支付綠1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-075.jpg", //SRC
		"翠魔 シトリー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：【エナチャージ1】をする。その後、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「生命爆發」：【能量填充1】。之後，我方能量區最多1張精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P02-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-076.jpg", //SRC
		"ツヴァイ＝ドクゼリ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[緑][黒][無] このシグニを場からトラッシュに置く：対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「起」綠1黑1無1此精靈從場上放置到廢棄區：對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P02-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-077.jpg", //SRC
		"幻水 オオミズゴケ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの手札が6枚以上ある場合、[緑]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方手牌有6張以上的話，可以支付綠1。若如此做，直到回合結束時為止，此精靈獲得【槍兵】。<br>(持有【槍兵】的精靈因戰鬥破壞精靈時，擊潰對方1張生命護甲)"	//TW_TEXT
		],
	[
		"WXDi-P02-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-078.jpg", //SRC
		"コードメイズ フジサパ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[緑][無][無]：対戦相手のパワー10000以上のシグニ1体を対象とし、それとこのシグニをデッキの一番下に置く。", //JP_TEXT
		"「起」綠1無2：對方1隻力量10000以上的精靈作對象，將其與此精靈放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P02-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-079.jpg", //SRC
		"幻獣 フェネック", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：各アタックフェイズ開始時、シグニ1体を対象とし、ターン終了時まで、このシグニの基本パワーはそれのパワーと同じ値になる。<br><br>【自】（ターン1）：あなたのパワー15000以上のシグニ1体がアタックしたとき、【エナチャージ1】をする。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にシグニがアタックしたとき、そのアタックを無効にする。", //JP_TEXT
		"「自」：各攻擊階段開始時，1隻精靈作對象，直到回合結束時為止，此精靈的基組力量的值與該精靈相同。<br><br>「自」(回合1)：我方1隻力量15000以上的精靈攻擊時，【能量填充1】。<br><br>「生命爆發」：【能量填充1】。本回合，下一次精靈攻擊時，該攻擊無效。"	//TW_TEXT
		],
	[
		"WXDi-P02-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-080.jpg", //SRC
		"連奏", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【エナチャージ3】をする。（あなたのデッキの上からカードを3枚エナゾーンに置く）", //JP_TEXT
		"【能量填充3】。(我方牌組頂3張卡牌放置到能量區)"	//TW_TEXT
		],
	[
		"WXDi-P02-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-081.jpg", //SRC
		"凶天 ニュクス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの場に＜天使＞のシグニが3体以上ある場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」：我方場上＜天使＞精靈有3隻以上的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P02-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-082.jpg", //SRC
		"凶魔 ガミジン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このカードがあなたのデッキからトラッシュに置かれたとき、あなたのターンの場合、対戦相手のシグニ1体を対象とし、[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－3000する。", //JP_TEXT
		"「自」：此卡牌從我方牌組放置到廢棄區時，我方回合的話，對方1隻精靈作對象，可以支付黑1。若如此做，直到回合結束時為止，將其力量-3000。"	//TW_TEXT
		],
	[
		"WXDi-P02-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-083.jpg", //SRC
		"羅原 Mo", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のレベル2以下のシグニ1体がこのシグニの正面のシグニゾーンに出たとき、このシグニを場からトラッシュに置いてもよい。そうした場合、正面にあったそのシグニをトラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「自」：對方1隻等級2以下的精靈出場到此精靈正面的精靈區時，此精靈可以從場上放置到廢棄區。若如此做，正面的該精靈放置到廢棄區。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付黑1。若如此做，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P02-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-084.jpg", //SRC
		"凶天 エレボス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：ターン終了時まで、対戦相手のすべてのシグニのパワーを－1000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」：直到回合結束時為止，對方所有精靈力量-1000。"	//TW_TEXT
		],
	[
		"WXDi-P02-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-085.jpg", //SRC
		"凶将 チンキュウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニを2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「生命爆發」：我方廢棄區最多2張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-086.jpg", //SRC
		"凶魔 アガレス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】（ターン1）デッキの上からカードを2枚トラッシュに置く：ターン終了時まで、このシグニのパワーを＋2000する。<br><br>【ライフバースト】：あなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。", //JP_TEXT
		"「起」(回合1)牌組頂2張卡牌放置到廢棄區：直到回合結束時為止，此精靈力量+2000。<br><br>「生命爆發」：我方廢棄區1張黑色精靈作對象，將其加入手牌。對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。"	//TW_TEXT
		],
	[
		"WXDi-P02-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-087.jpg", //SRC
		"羅星 トゥカナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無][無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」無2：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P02-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-088.jpg", //SRC
		"コードアート Eヤーホ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：いずれかのプレイヤーがスペルを使用したとき、【エナチャージ1】をする。<br><br>【出】[黒][黒]：あなたのトラッシュから黒のスペル1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」(回合1)：任何玩家使用魔法時，【能量填充1】。<br><br>「出」黑2：我方廢棄區1張黑色魔法作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-089.jpg", //SRC
		"サーチ・ライト", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"各プレイヤーは自分のデッキの上からカードを3枚トラッシュに置く。その後、あなたのトラッシュにカードが25枚以上ある場合、あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"各玩家將自己牌組頂3張卡牌放置到廢棄區。之後，我方廢棄區的卡牌有25張以上的話，我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P02-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-090.jpg", //SRC
		"羅石 ブロンズ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或藍）"	//TW_TEXT
		],
	[
		"WXDi-P02-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-091.jpg", //SRC
		"羅石 シルヴァーナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或藍）"	//TW_TEXT
		],
	[
		"WXDi-P02-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-092.jpg", //SRC
		"幻獣 パンダダ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或綠）"	//TW_TEXT
		],
	[
		"WXDi-P02-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-093.jpg", //SRC
		"幻獣 コアララ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或綠）"	//TW_TEXT
		],
	[
		"WXDi-P02-094", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-094.jpg", //SRC
		"幻水 スイギュウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或綠）"	//TW_TEXT
		],
	[
		"WXDi-P02-095", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-095.jpg", //SRC
		"幻水 アマケロン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或綠）"	//TW_TEXT
		],
	[
		"WXDi-P02-096", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-096.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-001.jpg", //SRC
		"SONG OF WIXOSS", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に青のルリグがいる<br><br>カードを3枚引く。次のあなたのターン終了時、手札を2枚捨てる。", //JP_TEXT
		"「使用條件」我方場上有藍色分身<br><br>抽3張牌。下一個我方回合結束時，捨棄2張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-002.jpg", //SRC
		"G－G－G", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に緑のルリグがいる<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【自】：あなたのターンの間、あなたのルリグがグロウしたとき、それがそのターンであなたの最初のグロウである場合、【エナチャージ1】をする。』", //JP_TEXT
		"這個遊戲中，我方獲得以下能力。<br><br>「自：我方回合中，我方分身成長時，若這是該回合我方初次成長的話，【能量填充1】。」"	//TW_TEXT
		],
	[
		"WXDi-P03-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-003.jpg", //SRC
		"頂点布武", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたのセンタールリグがレベル2以上<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【常】：あなたの中央のシグニゾーンにある＜武勇＞のシグニのパワーを＋1000し、そのシグニは「【自】：あなたのメインフェイズ以外でこのシグニがバニッシュされたとき、【エナチャージ1】をする。」を得る。』", //JP_TEXT
		"「使用條件」我方中央分身是等級2以上<br><br>這個遊戲中，我方獲得以下能力。<br>「常：我方中央精靈區的＜武勇＞精靈的力量+1000，該精靈獲得「自：此精靈在我方主要階段以外被破壞時，【能量填充1】。」"	//TW_TEXT
		],
	[
		"WXDi-P03-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-004.jpg", //SRC
		"LIFE LOOP RESPECTS", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"あなたのライフクロスの一番上を見て、以下の2つから1つを選ぶ。<br>①カードを1枚引く。<br>②[無][無][無][無][無]を支払い、あなたのライフクロスの一番上のカードを手札に加える。そうした場合、あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。", //JP_TEXT
		"查看我方生命護甲上方1張卡牌，從以下2項中選擇1項。<br>①抽1張牌。<br>②支付無5，我方生命護甲上方1張卡牌加入手牌。若如此做，洗切我方牌組並將牌組上方1張卡牌加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P03-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-005.jpg", //SRC
		"RHAPSODY PARTY", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このピースを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>あなたのデッキの上からカードを5枚見る。その中から[ガード]を持たないシグニを1枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。追加でエクシード4を支払っていた場合、代わりにその中から[ガード]を持たないシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"使用此PIECE時，可以追加超越4作為追加費用。（我方分身下方合計4張卡牌放置到分身廢棄區）<br><br>查看我方牌組頂5張卡牌。其中最多1張不持有防禦標記的精靈公開並加入手牌，剩下的按任意順序放置到牌組下方。追加支付超越4的話，作為代替其中最多2張不持有防禦標記的精靈公開並加入手牌，剩下的按任意順序放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-006.jpg", //SRC
		"burning curiosity", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このピースを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>対戦相手のシグニ1体を対象とし、それをバニッシュする。追加でエクシード4を支払っていた場合、代わりにそれをゲームから除外する。", //JP_TEXT
		"使用此PIECE時，可以追加超越4作為追加費用。（我方分身下方合計4張卡牌放置到分身廢棄區）<br><br>對方1隻精靈作對象，將其破壞。追加支付超越4的話，作為代替將其從遊戲中除外。"	//TW_TEXT
		],
	[
		"WXDi-P03-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-007.jpg", //SRC
		"真理へ飛翔 レイ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-008.jpg", //SRC
		"蒼穹へ飛翔 レイ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-009.jpg", //SRC
		"至高へ飛翔 レイ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【チーム】＜No Limit＞<br>【チーム自】：あなたのアタックフェイズ開始時、このターンにあなたが効果によってカードを2枚以上引いていた場合、レベル2以下のシグニ1体を対象とし、[青][無]を支払ってもよい。そうした場合、それをデッキの一番下に置く。<br><br>【出】：カードを1枚引き【エナチャージ1】をする。<br><br>【起】（ゲーム1）アップ状態のレベル2のルリグ2体をダウンする：手札をすべて捨てる。この方法で捨てた青のカードと同じ枚数、対戦相手は手札を捨てる。", //JP_TEXT
		"「隊伍」＜No Limit＞<br>「隊伍自」：我方攻擊階段開始時，本回合因我方效果抽牌2張以上的話，1隻等級2以下的精靈作對象，可以支付藍1無1。若如此做，將其放置到牌組下方。<br><br>「出」：抽1張牌，【能量填充1】。<br><br>「起」(遊戲1)橫置2隻豎直狀態的等級2分身：捨棄所有手牌。對方捨棄與通過此方法捨棄的藍色卡牌數的相同手牌數。"	//TW_TEXT
		],
	[
		"WXDi-P03-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-010.jpg", //SRC
		"アキノ＊クラップ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】[無][無]：対戦相手のターンの場合、あなたのシグニ1体を対象とし、ターン終了時まで、それは「【常】：バニッシュされない。」を得る。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「出」無2：對方回合中，我方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不會被破壞。」。"	//TW_TEXT
		],
	[
		"WXDi-P03-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-011.jpg", //SRC
		"ヒラナ＊ドッカン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】手札を3枚捨てる：対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[赤][赤][赤][赤][無][無]：対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻力量8000以下的精靈作對象，將其破壞。<br><br>「出」捨棄3張手牌：對方1隻力量5000以下的精靈作對象，將其破壞。<br><br>「出」紅4無2：對方1隻力量12000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-012.jpg", //SRC
		"ヒラナ＊スタンプ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[無][無][無][無][無]：対戦相手のターンの場合、このターン、対戦相手は1以上のエナコストを支払えない。<br>（エナコストは[白][赤][青][緑][黒][無]で表記される）", //JP_TEXT
		"「出」：對方1隻力量12000以下的精靈作對象，將其破壞。<br><br>「出」無5：對方回合的話，本回合中，對方不能支付1以上的能量費用。<br>（能量費用是指以白紅藍綠黑圖示作標記）"	//TW_TEXT
		],
	[
		"WXDi-P03-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-013.jpg", //SRC
		"レイ＊神威", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】[青][無]：対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】手札を3枚捨てる：対戦相手のダウン状態のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其橫置。<br><br>「出」藍1無1：對方1隻精靈作對象，將其橫置。<br><br>「出」捨棄3張手牌：對方1隻橫置狀態的精靈作對象，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-014.jpg", //SRC
		"VJ．WOLF－1stVerse", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-015.jpg", //SRC
		"VJ．WOLF－2ndVerse", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-016.jpg", //SRC
		"VJ．WOLF－3rdVerse", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【チーム】＜Card Jockey＞<br>【チーム起】[ダウン]：【エナチャージ2】<br><br>【出】：ターン終了時まで、このルリグは「【常】：あなたのシグニのパワーを＋5000する。」を得る。<br><br>【起】（ゲーム1）[緑(0)]：ターン終了時まで、このルリグは「【起】アップ状態のレベル2のルリグ1体をダウンする：このルリグをアップする。」を得る。", //JP_TEXT
		"「隊伍」＜Card Jockey＞<br>「隊伍起」橫置：【能填填充2】<br><br>「出」：直到回合結束時為止，此分身獲得「常：我方精靈的力量+5000。」。<br><br>「起」(遊戲1)綠0：直到回合結束時為止，此分身獲得「(起)橫置1隻豎直狀態的等級2分身：豎直此分身。」。"	//TW_TEXT
		],
	[
		"WXDi-P03-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-017.jpg", //SRC
		"MC．LION－BUILD UP", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以下のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】[無][無][無][無][無][無]：対戦相手のレベル3のシグニ1体を対象とし、それをトラッシュに置く。<br><br>【出】[白][白]：あなたのデッキの上からカードを5枚見る。その中からカードを2枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：對方1隻等級2以下的精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「出」無5：對方1隻等級3的精靈作對象，將其放置到廢棄區。<br><br>「出」白2：查看我方牌組頂5張卡牌。其中最多2張卡牌加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-018.jpg", //SRC
		"MC．LION－DROP", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：あなたのシグニ1体を対象とし、次の対戦相手のターン終了時まで、それは「【常】：対戦相手のターンの間、バニッシュされない。」を得る。<br><br>【出】[無][無]：対戦相手のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「出」：我方1隻精靈作對象，直到下一個對方回合結束時為止，使其獲得「常：對方回合中，不會被破壞。」。<br><br>「出」無2：對方1隻精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P03-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-019.jpg", //SRC
		"DJ．LOVIT－RE－EDIT", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×10", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】すべてのシグニを場からトラッシュに置き、手札とエナゾーンにあるすべてのカードをトラッシュに置く：対戦相手のすべてのシグニをバニッシュする。", //JP_TEXT
		"「出」所有精靈從場上放置到廢棄區，手牌和能量區所有卡牌放置到廢棄區：破壞對方所有精靈。"	//TW_TEXT
		],
	[
		"WXDi-P03-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-020.jpg", //SRC
		"VJ．WOLF－REVERB", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】[緑][無][無][無]：対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：本回合中，下一次我方受到傷害的話，作為代替不會受到傷害。<br><br>「出」綠1無3：對方1隻力量10000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-021.jpg", //SRC
		"前奏 ノヴァ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-022.jpg", //SRC
		"闘魂 ノヴァ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-023.jpg", //SRC
		"天翔 ノヴァ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【チーム】＜うちゅうのはじまり＞<br>【チーム出】：対戦相手のシグニ1体を対象とし、それを手札に戻す。<br><br>【自】：このルリグがアタックしたとき、このルリグの下にカードが5枚以上ある場合、あなたのトラッシュから[ガード]を持つシグニを1枚まで対象とし、それをデッキの一番上に置く。7枚以上ある場合、追加でカードを1枚引く。<br><br>【起】（ゲーム1）[白(0)]：あなたの他のルリグの下にあるすべてのカードをこのルリグの下に置く。", //JP_TEXT
		"「隊伍」＜宇宙的起源＞<br>「隊伍出」：對方1隻精靈作對象，將其返回手牌。<br><br>「自」：此分身攻擊時，此分身下方卡牌有5張以上的話，我方廢棄區最多1張持有防禦標記的精靈作對象，將其放置到牌組上方。7張以上的話，追加抽1張牌。<br><br>「起」(遊戲1)白0：我方其他分身下方的所有卡牌放置到此分身下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-024.jpg", //SRC
		"ノヴァ＝アウト", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニを2体まで対象とし、ターン終了時まで、それらは能力を失う。<br><br>【出】[白][無][無]：能力を持たない対戦相手のシグニ1体を対象とし、それを手札に戻す。<br><br>【出】手札を3枚捨てる：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		"「出」：對方最多2隻精靈作對象，直到回合結束時為止，使其失去能力。<br><br>「出」白1無2：對方1隻不持有能力的精靈作對象，將其返回手牌。<br><br>「出」捨棄3張手牌：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。"	//TW_TEXT
		],
	[
		"WXDi-P03-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-025.jpg", //SRC
		"タマゴ＝シンバルロール", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：カードを2枚引く。対戦相手の手札を見る。<br><br>【出】手札を1枚捨てる：対戦相手の手札を見て1枚選び、捨てさせる。", //JP_TEXT
		"「出」：抽2張牌。查看對方手牌。<br><br>「出」捨棄1張手牌：查看對方手牌並選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P03-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-026.jpg", //SRC
		"タマゴ＝アクセント", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】[青][青][青][青][無][無]：対戦相手のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其橫置。<br><br>「出」藍4無2：對方1隻精靈作對象，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-027.jpg", //SRC
		"バン＝ソロ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【出】：あなたのシグニ1体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）<br><br>【出】[無]：次の対戦相手のターン終了時まで、このルリグは「【常】：対戦相手は中央のシグニゾーンにあるシグニでアタックできない。」を得る。", //JP_TEXT
		"「出」：我方1隻精靈作對象，直到回合結束時為止，使其獲得【槍兵】。<br><br>「出」無1：直到下一個對方回合結束時為止，此分身獲得「常：對方中央精靈區的精靈不能攻擊。」。"	//TW_TEXT
		],
	[
		"WXDi-P03-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-028.jpg", //SRC
		"VOGUE1 サンガ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-029.jpg", //SRC
		"VOGUE2 サンガ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-030.jpg", //SRC
		"VOGUE3 サンガ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【チーム】＜DIAGRAM＞<br>【チーム自】：あなたのアタックフェイズ開始時、あなたの場に青と緑と黒のシグニがある場合、【エナチャージ1】をし、その後、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。<br><br>【出】：【エナチャージ2】<br><br>【起】（ゲーム1）[緑(0)]：あなたの＜DIAGRAM＞のレベル1のルリグ1体を対象とし、それをルリグデッキに戻す。（下のカードは場に残す）", //JP_TEXT
		"「隊伍」＜DIAGRAM＞<br>「隊伍自」：我方攻擊階段開始時，我方場上有藍色和綠色和黑色的精靈的話，【能量填充1】，之後，我方能量區最多1隻精靈作對象，將其加入手牌。<br><br>「出」：【能量填充2】。<br><br>「起」(遊戲1)綠0：我方1隻＜DIAGRAM＞等級1的分身作對象，將其返回分身牌組。（下方的卡牌留在場上）"	//TW_TEXT
		],
	[
		"WXDi-P03-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-031.jpg", //SRC
		"マドカ／／アレンジ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：あなたのエナゾーンにあるカードが持つ色が合計3種類以上ある場合、対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】：あなたのトラッシュにカードが15枚以上ある場合、対戦相手のシグニ1体を対象とし、それをダウンする。", //JP_TEXT
		"「出」：我方能量區的卡牌持有顏色有合計3種以上的話，對方1隻精靈作對象，將其橫置。<br><br>「出」：我方廢棄區卡牌有15張以上的話，對方1隻精靈作對象，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-P03-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-032.jpg", //SRC
		"サンガ／／リブート", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：【エナチャージ3】をする。その後、あなたのエナゾーンからカードを2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「出」：對方1隻力量10000以上的精靈作對象，將其破壞。<br><br>「出」：【能量填充3】。之後，我方能量區最多2張卡牌作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-033.jpg", //SRC
		"ムジカ／／ストンピング", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[黒][黒][黒][黒][無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「出」黑4無1：對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P03-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-034.jpg", //SRC
		"ムジカ／／パワーボム", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュからシグニを2枚まで対象とし、それらを能力を持たないシグニとして場に出す。ターン終了時、それらを場からトラッシュに置く。", //JP_TEXT
		"「出」：我方廢棄區最多2張精靈作對象，將其以不持有能力的精靈出場。回合結束時，將其從場上放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P03-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-035.jpg", //SRC
		"聖将姫 コウメイ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】緑のルリグ1体<br><br>【自】：あなたの白のルリグ1体がアタックしたとき、あなたのアップ状態のシグニ2体をダウンし[白][無]を支払ってもよい。そうした場合、そのルリグをアップし、ターン終了時まで、そのルリグは能力を失う。<br><br>【自】：アップ状態のこのシグニがバニッシュされたとき、[白][無][無]を支払ってもよい。そうした場合、このシグニをエナゾーンからダウン状態で場に出す。", //JP_TEXT
		"〔和音〕1隻綠色分身<br><br>「自」：我方1隻白色分身攻擊時，可以橫置我方2隻豎直狀態的精靈並支付白1無1。若如此做，豎直該分身，直到回合結束時為止，該分身失去能力。<br><br>「自」：豎直狀態的此精靈被破壞時，可以支付白1無2。若如此做，此精靈從能量區以橫置狀態出場。"	//TW_TEXT
		],
	[
		"WXDi-P03-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-036.jpg", //SRC
		"コードハート Pンライト", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のアタックフェイズ開始時、対戦相手のルリグ1体を対象とし、ターン終了時まで、それは「【常】：[無][無]を支払わないかぎりアタックできない。」を得る。<br><br>【自】：あなたのターン終了時、このターンにあなたがスペルを使用していた場合、次の対戦相手のターン終了時まで、このシグニは【シャドウ（シグニ）】を得る。<br><br>【ライフバースト】：どちらか1つを選ぶ。①カードを1枚引く。②対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「自」：對方攻擊階段開始時，對方1隻分身作對象，直到回合結束時為止，使其獲得「常：不支付無2的話不能攻擊。」。<br><br>「自」：我方回合結束時，本回合我方有使用魔法的話，直到下一個對方回合結束時為止，此精靈獲得【暗影(精靈)】。<br><br>「生命爆發」：選擇1項。①抽1張牌。②對方1隻豎直狀態的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-037.jpg", //SRC
		"幻水姫 シロナクジ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの手札が対戦相手より多いかぎり、このシグニのパワーはその差1枚につき＋1000される。<br><br>【自】：対戦相手のアタックフェイズ開始時、あなたの手札が6枚の場合、カードを1枚引く。<br><br>【起】（ターン1）[白][白] 手札を2枚捨てる：対戦相手のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「常」：我方手牌比對方多時，此精靈的力量為該差數每有1張，+1000。<br><br>「自」：對方攻擊階段開始時，我方手牌數是6張的話，抽1張牌。<br><br>「起」(回合1)白2捨棄2張手牌：對方1隻精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P03-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-038.jpg", //SRC
		"紅天姫 ゼウシアス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたの＜天使＞のシグニ1体の上に置く<br><br>【自】：このシグニがアタックしたとき、このシグニの下に白の＜天使＞がある場合、次の対戦相手のターン終了時まで、このシグニのパワーは＋3000されこのシグニは【シャドウ（シグニ）】を得る。青の＜天使＞がある場合、カードを2枚引く。緑の＜天使＞がある場合、【エナチャージ2】をする。<br><br>【出】[無]：あなたのトラッシュから＜天使＞のシグニ1枚を対象とし、それをこのシグニの下に置く。", //JP_TEXT
		"「升階」放置到我方1隻＜天使＞精靈上<br><br>「自」：此精靈攻擊時，此精靈下方有白色＜天使＞的話，直到下一個對方回合結束時為止，此精靈力量+3000且此精靈獲得【暗影(精靈)】。藍色＜天使＞的話，抽2張牌。綠色＜天使＞的話，【能量填充2】。<br><br>「出」無1：我方廢棄區1張＜天使＞精靈作對象，將其放置到此精靈下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-039.jpg", //SRC
		"幻獣神 コッコ・ルピコ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：空獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが中央のシグニゾーンにあるかぎり、あなたのルリグにグロウするためのコストは[無(1)]減る。<br><br>【自】（ターン1）：あなたのターンの間、あなたのルリグがグロウしたとき、対戦相手のパワー8000以下のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「常」：此精靈在中央精靈區時，我方分身成長的費用減無1。<br><br>「自」(回合1)：我方回合中，我方分身成長時，對方隻力量8000以下的精靈作對象，可以支付無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-040.jpg", //SRC
		"コードオーダー ワッフルアイス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手の凍結状態のシグニ1体が場を離れたとき、あなたのデッキの一番上のカードをこのシグニの下に置く。（表向きで置く）<br><br>【自】：各アタックフェイズ開始時、このシグニの下からカード1枚を手札に加えるかエナゾーンに置く。<br><br>【出】：対戦相手のシグニを2体まで対象とし、それらを凍結する。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「自」：對方1隻凍結狀態的精靈離場時，我方牌組上方1張卡牌放置到此精靈下方。(正面向上放置)<br><br>「自」：各攻擊階段開始時，此精靈下方的1張卡牌加入手牌或放置到能量區。<br><br>「出」：對方最多2隻精靈作對象，將其凍結。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-041.jpg", //SRC
		"幻水神 ホタルイカ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】白のルリグ1体（このシグニが場に出たとき、あなたのアップ状態の白のルリグ1体をダウンしないかぎり、これをダウンする）<br><br>【自】：あなたのアタックフェイズ開始時、カードを1枚引く。<br><br>【自】（ターン1）：あなたが自分の効果によってカードを1枚以上捨てたとき、対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"〔和音〕1隻白色分身<br><br>「自」：我方攻擊階段開始時，抽1張牌。<br><br>「自」(回合1)：我方因自己效果捨棄1張以上的卡牌時，不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P03-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-042.jpg", //SRC
		"翠天姫 デメテル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】青のルリグ1体<br><br>【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニが持つ色が合計3種類以上ありこのシグニがアップ状態の場合、あなたの他のシグニ1体を対象とし、[緑][無]を支払ってもよい。そうした場合、ターン終了時まで、それは【ランサー】を得る。<br><br>【自】（ターン1）：あなたのターンの間、あなたの他のシグニ1体がバニッシュされたとき、【エナチャージ1】をする。", //JP_TEXT
		"〔和音〕1隻藍色分身<br><br>「自」：我方攻擊階段開始時，我方場上的精靈持有顏色有合計3種以上且此精靈是豎直狀態的話，我方其他1隻精靈作對象，可以支付綠1無1。若如此做，直到回合結束時為止，使其獲得【槍兵】。<br><br>「自」(回合1)：我方回合中，我方其他1隻精靈被破壞時，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P03-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-043.jpg", //SRC
		"コードラビリンス ギロッポン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手がシグニを配置する場合、可能ならばこのシグニの正面に配置しなければならない。<br><br>【常】：あなたのターンの間、このシグニは対戦相手の効果によって場からエナゾーン以外の領域に移動しない。<br><br>【自】：対戦相手のシグニ1体がこのシグニの正面に配置されたとき、ターン終了時まで、それのパワーを－3000してもよい。", //JP_TEXT
		"「常」：對方的精靈配置時，可能的話必須配置到此精靈的正面。<br><br>「常」：我方回合中，此精靈不會被對方的效果從場上移動到能量區以外的區域。<br><br>「自」：對方1隻精靈配置到此精靈的正面時，直到回合結束時為止，可以將其力量-3000。"	//TW_TEXT
		],
	[
		"WXDi-P03-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-044.jpg", //SRC
		"幻獣神 サーベルタイガー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】赤のルリグ1体（このシグニが場に出たとき、あなたのアップ状態の赤のルリグ1体をダウンしないかぎり、これをダウンする）<br><br>【常】：あなたの他のシグニのパワーを＋3000する。<br><br>【自】：このシグニがアタックしたとき、【エナチャージ1】をする。その後、このターンにあなたのデッキからカードが3枚以上エナゾーンに移動していた場合、[緑][赤][無]を支払ってもよい。そうした場合、対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"〔和音〕1隻紅色分身<br><br>「常」：我方其他精靈的力量+3000。<br><br>「自」：此精靈攻擊時，【能量填充1】。之後，本回合我方牌組有3張以上的卡牌移動到能量區的話，可以支付綠1紅1無1。若如此做，對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-045.jpg", //SRC
		"凶魔姫 エレシュキガル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのライフクロス2枚をトラッシュに置く。この方法でカードが2枚トラッシュに置かれた場合、対戦相手のすべてのシグニをトラッシュに置く。（コストのない【出】能力は発動しないことを選べない。ライフクロスが1枚の場合その1枚をトラッシュに置く）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		"「出」：我方2張生命護甲放置到廢棄區。通過此方法放置了2張卡牌到廢棄區的話，對方所有精靈放置到廢棄區。(不用費用的「出」能力不能選擇發動。生命護甲是1張的話則將1張放置到廢棄區）<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。"	//TW_TEXT
		],
	[
		"WXDi-P03-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-046.jpg", //SRC
		"羅原姫 Ac", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターンの間、対戦相手のルリグがグロウしたとき、あなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。<br><br>【起】（ターン1）[黒]：あなたのデッキの上からカードを5枚トラッシュに置く。その後、あなたのトラッシュから黒のシグニ1枚を対象とし、それを場に出す。", //JP_TEXT
		"「自」：我方回合中，對方分身成長時，我方廢棄區1張黑色精靈作對象，將其加入手牌。<br><br>「起」(回合1)黑1：我方牌組上方5張卡牌放置到廢棄區。之後，我方廢棄區1張黑色精靈作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-P03-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-047.jpg", //SRC
		"聖天 アグライア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、手札から＜天使＞のシグニを2枚捨ててもよい。そうした場合、カードを3枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，可以從手牌捨棄2張＜天使＞精靈。若如此做，抽3張牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-048.jpg", //SRC
		"聖魔 アクィエル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：あなたのデッキの上からカードを3枚見る。その中から＜悪魔＞のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」無1：查看我方牌組上3張卡牌。其中1張＜惡魔＞精靈公開並加入手牌，剩下的按任意順序返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-049.jpg", //SRC
		"羅星 タイポ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、あなたのエナゾーンにレベル1のシグニがあるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「常」：對方回合中，我方能量區有等級1的精靈時，此精靈力量+4000。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-050.jpg", //SRC
		"中装 イシキリマル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、このシグニのパワーは＋4000される。<br><br>【自】（ターン1）：あなたの他のシグニ1体が場に出たとき、あなたのデッキの一番上を見て、それをデッキの一番下に置いてもよい。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「常」：對方回合中，此精靈力量+4000。<br><br>「自」(回合1)：我方其他1隻精靈出場時，查看我方牌組上1張卡牌，可以將其放置到牌組下方。<br><br>「生命爆發」：查看我方牌組上3張卡牌。其中1張精靈公開並加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-051.jpg", //SRC
		"コードアート Aムライト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニを2体まで対象とし、ターン終了時まで、それらは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「生命爆發」：對方最多2隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-052.jpg", //SRC
		"コードアンチ エレナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：すべてのプレイヤーは白ではないスペルを使用できない。", //JP_TEXT
		"「常」：所有玩家不能使用非白色的魔法。"	//TW_TEXT
		],
	[
		"WXDi-P03-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-053.jpg", //SRC
		"コードメイズ ヒメジジョ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、対戦相手は、シグニの能力かシグニの効果で対象を選ぶ際、可能ならばこのシグニを対象とする。", //JP_TEXT
		"「常」：對方回合中，對方因精靈能力或精靈效果選擇對象時，可能的話必須選擇此精靈作對象。"	//TW_TEXT
		],
	[
		"WXDi-P03-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-054.jpg", //SRC
		"ミラクル・ドロー", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>あなたのデッキの上からカードを5枚見る。その中からカードを1枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。追加でエクシード4を支払っていた場合、代わりにその中からカードを2枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"使用此魔法時，可以追加超越4作為追加費用。（我方分身下方合計4張卡牌放置到分身廢棄區）<br><br>查看我方牌組上5張卡牌。其中最多1張卡牌加入手牌，剩下的按任意順序返回牌組下方。追加支付超越4的話，作為代替其中最多2張卡牌加入手牌，剩下的按任意順序返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-055.jpg", //SRC
		"紅魔 ビフロンス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのシグニ1体がコストか効果によって場からトラッシュに置かれたとき、カードを1枚引き、手札を1枚捨てる。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、[赤]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」(回合1)：我方1隻精靈因費用或效果從場上放置到廢棄區時，抽1張牌，捨棄1張手牌。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，可以支付紅1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-056.jpg", //SRC
		"羅石 ルベライト", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：このシグニが対戦相手のシグニの、能力か効果の対象になったとき、その対戦相手のシグニをバニッシュする。", //JP_TEXT
		"「自」(回合1)：此精靈因對方的精靈能力或效果成為對象時，破壞該對方的精靈。"	//TW_TEXT
		],
	[
		"WXDi-P03-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-057.jpg", //SRC
		"コードライド トラックミキサ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：このシグニをあなたの他の赤のシグニ1体の下に置く。<br><br>【常】：このカードの上にある赤のシグニのパワーを＋2000する。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「起」(橫置)：此精靈放置到我方其他1隻紅色精靈的下方。<br><br>「常」：此卡牌上的紅色精靈力量+2000。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以支付紅1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-058.jpg", //SRC
		"紅天 イーリス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたの場に＜天使＞のシグニが3種類以上ある場合、対戦相手のパワー8000以下のシグニ1体を対象とし、手札から＜天使＞のシグニを1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈攻擊時，我方場上＜天使＞精靈有3種以上的話，對方1隻力量8000以下的精靈作對象，可以從手牌捨棄1張＜天使＞精靈。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-059.jpg", //SRC
		"羅星 グロバエア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：對方1隻力量12000以下的精靈作對象，可以捨棄1張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-060.jpg", //SRC
		"幻獣 テングザル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニはパワーが12000以上であるかぎり、「【常】：対戦相手の効果によってダウンしない。」を得る。<br><br>【起】[赤][無][無]：このシグニのパワーが15000以上の場合、ターン終了時まで、このシグニは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「常」：此精靈力量是12000以上時，獲得「常：不會被對方效果橫置。」。<br><br>「起」紅1無2：此精靈力量是15000以上的話，直到回合結束時為止，此精靈獲得【暗殺】。"	//TW_TEXT
		],
	[
		"WXDi-P03-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-061.jpg", //SRC
		"コードアート Bランケット", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにスペルがあるかぎり、このシグニのパワーは＋3000される。<br><br>【出】：あなたのデッキの上からカードを5枚見る。その中からスペルを好きな枚数公開し手札に加え、残りを好きな順番でデッキの一番下に置く。この方法で手札に加えたカード1枚につき手札を1枚捨てる。<br><br>【ライフバースト】：あなたのトラッシュからスペルを2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「常」：我方廢棄區有魔法時，此精靈力量+3000。<br><br>「出」：查看我方牌組上5張卡牌。其中任意張魔法公開並加入手牌，剩下的按任意順序返回牌組下方。通過此方法每加入1張手牌則捨棄1張手牌。<br><br>「生命爆發」：我方廢棄區最多2張魔法作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-062.jpg", //SRC
		"幻獣 マンドリル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[赤][無][ダウン]：このシグニのパワーが12000以上の場合、対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「起」紅1無1(橫置)：此精靈力量是12000以上的話，對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-063.jpg", //SRC
		"永劫の影響", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。追加でエクシード4を支払っていた場合、代わりに対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"使用此魔法時，可以追加超越4作為追加費用。（我方分身下方合計4張卡牌放置到分身廢棄區）<br><br>對方1隻力量8000以下的精靈作對象，將其破壞。追加支付超越4的話，作為代替對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-064.jpg", //SRC
		"蒼天 アウドムラ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン2）：ドローフェイズ以外であなたがカードを1枚引いたとき、ターン終了時まで、あなたのすべてのシグニのパワーを＋1000する。<br><br>【自】：あなたのアタックフェイズ開始時、手札から＜天使＞のシグニを1枚捨ててもよい。そうした場合、カードを1枚引く。", //JP_TEXT
		"「自」(回合2)：我方在抽牌階段以外抽1張牌時，直到回合結束時為止，我方所有精靈力量+1000。<br><br>「自」我方攻擊階段開始時，可以從手牌捨棄1張＜天使＞精靈。若如此做，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-065.jpg", //SRC
		"蒼魔 ロノウェ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、このターンにあなたのデッキからカードが3枚以上トラッシュに置かれていた場合、カードを1枚引く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，本回合我方牌組有3張以上的卡牌放置到廢棄區的話，抽1張牌。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-066.jpg", //SRC
		"羅星 ハイドラス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにレベル1のシグニが2枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「常」：我方廢棄區等級1的精靈有2張以上時，此精靈力量+4000。<br><br>「生命爆發」：查看我方牌組上3張卡牌。其中最多1張精靈公開並加入手牌或出場，剩下的按任意順序返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-067.jpg", //SRC
		"羅石 アパタイト", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：このシグニが対戦相手の、能力か効果の対象になったとき、カードを1枚引く。", //JP_TEXT
		"「自」(回合1)：此精靈因對方能力或效果成為對象時，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-068.jpg", //SRC
		"コードメイズ プリモーラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のターン終了時、対戦相手のシグニ1体を対象とし、それを凍結する。<br><br>【自】：このシグニがバニッシュされたとき、対戦相手のシグニ1体を対象とし、それをダウンし凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		"「自」：對方回合結束時，對方1隻精靈作對象，將其凍結。<br><br>「自」：此精靈被破壞時，對方1隻精靈作對象，將其橫置並凍結。"	//TW_TEXT
		],
	[
		"WXDi-P03-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-069.jpg", //SRC
		"幻水 トビエイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手は自分のシグニ1体を選びデッキの一番下に置く。", //JP_TEXT
		"「生命爆發」：對方選擇自己1隻精靈放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P03-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-070.jpg", //SRC
		"蒼将 リクソン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手の手札が5枚以上ある場合、対戦相手は手札を1枚捨てる。<br><br>【起】[青][青][無]：対戦相手の手札が0枚の場合、ターン終了時まで、このシグニは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「出」：對方手牌是5張以上的話，對方捨棄1張手牌。<br><br>「起」藍2無1：對方手牌是0張的話，直到回合結束時為止，此精靈獲得【暗殺】。"	//TW_TEXT
		],
	[
		"WXDi-P03-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-071.jpg", //SRC
		"羅石 ラピスラズリ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のターンの間、このシグニがバニッシュされたとき、手札から赤の＜宝石＞のシグニ1枚を場に出してもよい。そのシグニの【出】能力は発動しない。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のシグニ1体を対象とし、それをダウンする。対戦相手は手札を1枚捨てる。②カードを2枚引く。", //JP_TEXT
		"「自」：對方回合中，此精靈被破壞時，可以從手牌將1張紅色的＜寶石＞精靈出場。該精靈的「出」能力不發動。<br><br>「生命爆發」：選擇1項。①對方1隻精靈作對象，將其橫置1。對方捨棄1張手牌。②抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P03-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-072.jpg", //SRC
		"THRILLING", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>カードを2枚引き、手札を1枚捨てる。追加でエクシード4を支払っていた場合、代わりにカードを3枚引く。（エクシード4を支払っていたら「2枚引き1枚捨てる」の代わりに3枚引く）", //JP_TEXT
		"使用此魔法時，可以追加超越4作為追加費用。（我方分身下方合計4張卡牌放置到分身廢棄區）<br><br>抽2張牌，捨棄1張手牌。追加支付超越4的話，作為代替抽3張牌。（支付超越4是將「抽2棄1」以抽3張牌代替）"	//TW_TEXT
		],
	[
		"WXDi-P03-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-073.jpg", //SRC
		"翠将 ゴツトツコツ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニが場からエナゾーンに置かれたとき、あなたのエナゾーンにあるカードが2枚以下の場合、【エナチャージ1】をする。", //JP_TEXT
		"「自」：此精靈從場上放置到能量區時，我方能量區卡牌是2張以下的話，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P03-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-074.jpg", //SRC
		"翠美 マーライ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは対戦相手のレベル1のシグニの効果によってバニッシュされない。<br><br>【出】：あなたのルリグ1体を対象とし、ターン終了時まで、このシグニはそれが持つ色1つを得る。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「常」：此精靈不會被對方等級1的精靈效果破壞。<br><br>「出」：我方1隻分身作對象，直到回合結束時為止，此精靈獲得其持有的1種顏色。<br><br>「生命爆發」：【能量填充1】。本回合中，我方下一次因精靈受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P03-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-075.jpg", //SRC
		"幻獣 オランウータン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの他のシグニ1体を対象とし、ターン終了時まで、それのパワーを＋5000する。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[緑][緑]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「出」：我方其他1隻精靈作對象，直到回合結束時為止，將其力量+5000。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付綠2。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P03-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-076.jpg", //SRC
		"羅植 チュリン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：このシグニが中央のシグニゾーンに出ていた場合、【エナチャージ1】をする。", //JP_TEXT
		"「出」：此精靈在中央精靈出場的話，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P03-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-077.jpg", //SRC
		"コードメイズ アクフク", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：【エナチャージ1】をする。このターン、あなたは対戦相手のレベル3以下のシグニによってダメージを受けない。", //JP_TEXT
		"「生命爆發」：【能量填充1】。本回合中，我方不會受到對方等級3以下精靈的傷害。"	//TW_TEXT
		],
	[
		"WXDi-P03-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-078.jpg", //SRC
		"幻獣 デグー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、あなたのエナゾーンからこのシグニよりパワーの低い＜地獣＞のシグニ1枚を対象とし、それを場に出す。それの【出】能力は発動しない。", //JP_TEXT
		"「自」：我方回合結束時，我方能量區1張比此精靈力量低的＜地獸＞精靈作對象，將其出場。該「出」能力不能發動。"	//TW_TEXT
		],
	[
		"WXDi-P03-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-079.jpg", //SRC
		"幻水 カミソリウオ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの手札が4枚以上あるかぎり、このシグニのパワーは＋3000される。<br><br>【出】[緑]：カードを1枚引く。<br><br>【ライフバースト】：カードを1枚引き【エナチャージ2】をする。", //JP_TEXT
		"「常」：我方手牌是4張以上時，此精靈力量+3000。<br><br>「出」綠1：抽1張牌。<br><br>「生命爆發」：抽1張牌且【能量填充2】"	//TW_TEXT
		],
	[
		"WXDi-P03-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-080.jpg", //SRC
		"愛情", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋5000し、それは「【自】：このシグニがアタックしたとき、【エナチャージ1】をする。」を得る。追加でエクシード4を支払っていた場合、代わりにターン終了時まで、あなたのすべてのシグニのパワーを＋5000し、それらは「【自】：このシグニがアタックしたとき、【エナチャージ1】をする。」を得る。", //JP_TEXT
		"使用此魔法時，可以追加超越4作為追加費用。（我方分身下方合計4張卡牌放置到分身廢棄區）。<br><br>我方1隻精靈作對象，直到回合結束時為止，使其力量+5000，使其獲得「自：此精靈攻擊時，【能量填充1】。」。追加支付超越4的話，作為代替直到回合結束時為止，我方所有精靈力量+5000，使其獲得「自：此精靈攻擊時，【能量填充1】。」。"	//TW_TEXT
		],
	[
		"WXDi-P03-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-081.jpg", //SRC
		"羅星 レティクルム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このカードがデッキからトラッシュに置かれたとき、手札を1枚捨ててもよい。そうした場合、このカードをトラッシュから手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「自」：此卡牌從牌組放置到廢棄區時，可以捨棄1張手牌。若如此做，此卡牌從廢棄區加入手牌。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付黑1無1。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P03-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-082.jpg", //SRC
		"羅原 Pa", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】手札から＜原子＞のシグニを2枚捨てる：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」從手牌捨棄2張＜原子＞精靈：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P03-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-083.jpg", //SRC
		"コードアート Uスレスボ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを2枚トラッシュに置く。その後、この方法でスペルが1枚以上トラッシュに置かれた場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。", //JP_TEXT
		"「出」：我方牌組上2張卡牌放置到廢棄區。之後，通過此方法將1張以上的魔法放置到廢棄區的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P03-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-084.jpg", //SRC
		"凶天 サブナック", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「生命爆發」：對方1隻精靈作對象，可以捨棄1張手牌。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P03-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-085.jpg", //SRC
		"凶魔 ルカ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたの＜悪魔＞のシグニ1体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[黒][無]：黒ではない対戦相手のパワー3000以下のすべてのシグニをバニッシュする。", //JP_TEXT
		"「升階」放置到我方1隻＜惡魔＞精靈上(不滿足此條件無法出場)<br><br>「出」黑1無1：破壞對方所有力量3000以下的非黑色精靈。"	//TW_TEXT
		],
	[
		"WXDi-P03-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-086.jpg", //SRC
		"中装 ティルヴィング", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたの他の＜アーム＞のシグニ1体が場に出たとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「自」(回合1)：我方其他1隻＜武裝＞精靈出場時，對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P03-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-087.jpg", //SRC
		"凶将 イゾウ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br><br>【起】手札を2枚捨てる：このカードをトラッシュから中央のシグニゾーンに出す。（この能力はこのカードがトラッシュにある場合にしか使用できない）<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。<br><br>「起」捨棄2張手牌：此卡牌從廢棄區出場到中央精靈區。<br><br>「生命爆發」：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P03-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-088.jpg", //SRC
		"羅星 テレスコピウム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のシグニ1体を対象とし、あなたのトラッシュにレベル1のシグニが5枚以上ある場合、ターン終了時まで、それのパワーを－5000する。10枚以上ある場合、代わりにターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		"「出」無1：對方1隻精靈作對象，我方廢棄區等級1的精靈有5張以上的話，直到回合結束時為止，將其力量-5000。10張以上的話，作為代替直到回合結束時為止，將其力量-10000。"	//TW_TEXT
		],
	[
		"WXDi-P03-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-089.jpg", //SRC
		"レティクル・ディガー", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－5000する。追加でエクシード4を支払っていた場合、代わりにターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"使用此魔法時，可以追加超越4作為追加費用。（我方分身下方合計4張卡牌放置到分身廢棄區）<br><br>對方1隻精靈作對象，直到回合結束時為止，將其力量-5000。追加支付超越4的話，作為代替直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P03-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-090.jpg", //SRC
		"羅星 プロシオス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或藍）"	//TW_TEXT
		],
	[
		"WXDi-P03-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-091.jpg", //SRC
		"羅星 シリオス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或藍）"	//TW_TEXT
		],
	[
		"WXDi-P03-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-092.jpg", //SRC
		"コードメイズ ガイセンモ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或綠）"	//TW_TEXT
		],
	[
		"WXDi-P03-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-093.jpg", //SRC
		"コードメイズ バベタワ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或綠）"	//TW_TEXT
		],
	[
		"WXDi-P03-094", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-094.jpg", //SRC
		"アイン＝グリーンガス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは緑か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個綠或黑）"	//TW_TEXT
		],
	[
		"WXDi-P03-095", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-095.jpg", //SRC
		"ツヴァイ＝コブラス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは緑か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個綠或黑）"	//TW_TEXT
		],
	[
		"WXDi-P03-096", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-096.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D07-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-001.jpg", //SRC
		"エクス・ゼロ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-002.jpg", //SRC
		"エクス・ワン", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン1）：このシグニがアタックしたとき、カードを1枚引くか【エナチャージ1】をする。」を得る。<br>（【ソウル】はシグニに1枚まで付き、そのシグニが場から離れるとルリグトラッシュに置かれる）", //JP_TEXT
		"「常」：被此卡牌以【靈魂】附加的精靈獲得「自(回合1)：此精靈攻擊時，抽1張牌或【能量填充1】。」。<br>(精靈最多被1張【靈魂】附加，該精靈從場上離開時返回分身廢棄區。)"	//TW_TEXT
		],
	[
		"WXDi-D07-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-003.jpg", //SRC
		"エクス・ツー", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン1）：このシグニがアタックしたとき、対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。」を得る。<br>（【ソウル】はシグニに1枚まで付き、そのシグニが場から離れるとルリグトラッシュに置かれる）", //JP_TEXT
		"「常」：被此卡牌以【靈魂】附加的精靈獲得「自(回合1)：此精靈攻擊時，對方1隻力量12000以下的精靈作對象，將其破壞。」。<br>(精靈最多被1張【靈魂】附加，該精靈從場上離開時返回分身廢棄區。)"	//TW_TEXT
		],
	[
		"WXDi-D07-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-004.jpg", //SRC
		"エクス・スリー", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【自】：あなたのシグニ1体に【ソウル】が付いたとき、手札を1枚捨ててもよい。そうした場合、カードを1枚引く。<br><br>【起】[赤(0)]：あなたのシグニ1体を対象とし、このルリグの下からカード1枚をそれの【ソウル】にする。<br><br>【起】（ゲーム1）エクシード3：あなたの赤のシグニを2体まで対象とし、あなたのルリグデッキにあるピース1枚をゲームから除外する。そうした場合、ターン終了時まで、それらは【アサシン】を得る。", //JP_TEXT
		"「自」：我方1隻精靈被附加【靈魂】時，可以捨棄1張手牌。若如此做，抽1張牌。<br><br>「起」紅0：我方1隻精靈作對象，此分身下方1張卡牌成為其【靈魂】。<br>「起」(遊戲1)超越3：我方最多2隻紅色精靈作對象，我方分身牌組中1張PIECE從遊戲中除外。若如此做，直到回合結束時為止，使其獲得【暗殺】。"	//TW_TEXT
		],
	[
		"WXDi-D07-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-005.jpg", //SRC
		"デウス・ゼロ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-006.jpg", //SRC
		"デウスドライブ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻等級2以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D07-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-007.jpg", //SRC
		"デウスシールド", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：このターン、次とその次にあなたがダメージを受ける場合、代わりにダメージを受けず、ターン終了時まで、このルリグは「【自】：ターン終了時、あなたのデッキの上からカードを5枚トラッシュに置く。」を得る。（ダメージを2回防いだら【自】能力を2つ得る）<br><br>【出】[黒][無][無]：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けず、ターン終了時まで、このルリグは「【自】：ターン終了時、あなたのデッキの上からカードを5枚トラッシュに置く。」を得る。", //JP_TEXT
		"「出」：本回合中，下一次和再下一次我方受到傷害時，作為代替不會受到傷害，直到回合結束時為止，此分身獲得「自：回合結束時，我方牌組頂5張卡牌放置到廢棄區。」。（防禦2次傷害時獲得2個「自」能力）<br><br>「出」黑1無2：本回合中，下一次我方受到傷害時，作為代替不會受到傷害，直到回合結束時為止，此分身獲得「自：回合結束時，我方牌組頂5張卡牌放置到廢棄區。」。"	//TW_TEXT
		],
	[
		"WXDi-D07-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-008.jpg", //SRC
		"マキナ・ゼロ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-009.jpg", //SRC
		"マキナウィングスラッシュ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル1のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：あなたのトラッシュから[ガード]を持たないレベル1のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：對方1隻等級1以下的精靈作對象，將其破壞。<br><br>「出」：我方廢棄區1張不持有防禦標記的等級1精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D07-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-010.jpg", //SRC
		"マキナスマッシュ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。<br><br>【出】[黒]：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。<br><br>「出」黑1：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D07-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-011.jpg", //SRC
		"TRIGGER OF VICTORY", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤黒", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜デウス・エクス・マキナ＞＆全員レベル1以上<br><br>対戦相手のライフクロス1枚をクラッシュする。その後、あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「使用條件」「隊伍」＜D．X．M＞且全員等級1以上<br><br>擊潰對方1張生命護甲。之後，我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D07-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-012.jpg", //SRC
		"祝福の鍵の音", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>カードを3枚引き、手札を2枚捨てる。", //JP_TEXT
		"(Pieceピース在我方場上分身有3隻才可使用)<br><br>抽3張牌，捨棄2張牌。"	//TW_TEXT
		],
	[
		"WXDi-D07-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-013.jpg", //SRC
		"コードライド カモツ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のエナゾーンからカード1枚を対象とし、それをトラッシュに置いてもよい。そうした場合、対戦相手は【エナチャージ1】をしてもよい。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、[赤]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「出」：對方能量區1張卡牌作對象，可以將其放置到廢棄區。若如此做，對方可以【能量填充1】。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，可以支付紅1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D07-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-014.jpg", //SRC
		"凶魔 バフォメット", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにカードが5枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【出】：あなたのデッキの上からカードを3枚トラッシュに置く。", //JP_TEXT
		"「常」：我方廢棄區的卡牌有5張以上時，此精靈的力量+4000。<br><br>「出」：我方牌組頂3張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-D07-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-015.jpg", //SRC
		"紅将 ランスロット", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」無1：對方1隻力量5000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D07-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-016.jpg", //SRC
		"羅星 マースカ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】手札からレベル1のシグニを2枚捨てる：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「出」從手牌捨棄2張等級1的精靈：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付黑1無1。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-D07-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-017.jpg", //SRC
		"コードアクセル ガルウィング", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜デウス・エクス・マキナ＞<br>【チーム自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンにカードが2枚以上ありこのターンにあなたがカードを1枚以上捨てていた場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【起】[赤][赤][無]：ターン終了時まで、このシグニは【ダブルクラッシュ】を得る。（アタックによるダメージでライフクロスを2枚クラッシュする）", //JP_TEXT
		"「隊伍」<D．X．M><br><br>「隊伍自」：我方攻擊階段開始時，對方能量區的卡牌有2張以上且本回合我方捨棄卡牌1張以上的話，對方選擇自己能量區的1張卡牌放置到廢棄區。<br><br>「起」紅2無1：直到回合結束時為止，此精靈獲得【雙重擊潰】。（攻擊給予傷害時擊潰2張生命護甲）"	//TW_TEXT
		],
	[
		"WXDi-D07-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-018.jpg", //SRC
		"幻水 オニオコゼ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】手札を3枚まで捨てる：この方法で捨てたカードの枚数に等しい枚数のカードを引く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「出」捨棄最多3張手牌：抽取與通過此方法捨棄的卡牌相同數量的卡牌。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D07-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-019.jpg", //SRC
		"コードアンチ オベリスク", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニに【ソウル】が付いたとき、あなたか対戦相手のデッキの上からカードを2枚トラッシュに置く。<br><br>【出】[黒][赤][無][無]：あなたのトラッシュからシグニ1枚を対象とし、それを場に出す。その後、場に出たそれよりパワーの低い対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈被附加【靈魂】時，我方或對方牌組頂2張卡牌放置到廢棄區。<br><br>「出」黑1紅1無2：我方廢棄區1張精靈作對象，將其出場。之後，對方1隻力量比其力量低的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D07-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-020.jpg", //SRC
		"小装 エケザクス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或黑）"	//TW_TEXT
		],
	[
		"WXDi-D07-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-021.jpg", //SRC
		"サーバント #", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D07-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-022.jpg", //SRC
		"荘厳の絶火", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。あなたか対戦相手のデッキの上からカードを2枚トラッシュに置く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②あなたか対戦相手のデッキの上からカードを4枚トラッシュに置く。", //JP_TEXT
		"對方1隻力量12000以下的精靈作對象，將其破壞。我方或對方牌組頂2張卡牌放置到廢棄區。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②我方或對方牌組頂4張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P04-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-001.jpg", //SRC
		"ホワイトヘブン", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×2《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に白のルリグが2体以上いる<br><br>対戦相手のシグニ1体を対象とし、それをトラッシュに置く。対戦相手のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「使用條件」我方場上白色分身有2隻以上<br><br>對方1隻精靈作對象，將其放置到廢棄區。對方1隻精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-002.jpg", //SRC
		"世界逆流", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤青緑", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜アンシエント・サプライズ＞<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【自】（ターン1）：あなたのターンの間、あなたのシグニ1体が場に出たとき、以下の3つから1つを選ぶ。<br>①場に出たそのシグニが赤の場合、対戦相手のパワー8000以下のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。<br>②場に出たそのシグニが青の場合、カードを1枚引く。<br>③場に出たそのシグニが緑の場合、【エナチャージ1】をする。』", //JP_TEXT
		"「使用條件」「隊伍」＜アンシエント･サプライズ＞<br><br>本局遊戲中，我方獲得以下的能力。<br>「自」(回合1)：我方回合中，我方1隻精靈出場時，從下列3項中選擇1項。<br>①出場的該精靈是紅色的話，對方1隻力量8000以下的精靈作對象，可以支付無1。若如此做，將其破壞。<br>②出場的該精靈是藍色的話，抽1張牌。<br>③出場的該精靈是綠色的話，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P04-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-003.jpg", //SRC
		"サマーライブブルーズ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に青のルリグが2体以上いる<br><br>カードを2枚引く。その後、対戦相手のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「使用條件」我方場上藍色分身有2隻以上<br><br>抽2張牌。之後，對方1隻精靈作對象，將其返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P04-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-004.jpg", //SRC
		"DEATH DECK", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×2《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に黒のルリグが2体以上いる<br><br>対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。その後、以下の2つからあなたのトラッシュにあるカード10枚につき1つを選ぶ。<br>①あなたのトラッシュからあなたのセンタールリグと共通する色を持つシグニを2枚まで対象とし、それらを手札に加える。<br>②対戦相手のデッキの上からカードを10枚トラッシュに置く。", //JP_TEXT
		"「使用條件」我方場上黑色分身有2隻以上<br><br>對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。之後，下列2項中在我方廢棄區的卡牌每有10張時選擇1項。<br>①我方廢棄區最多2張持有與我方中央分身相同顏色的精靈作對象，將其加入手牌。<br>②對方牌組上10張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P04-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-005.jpg", //SRC
		"イノセントバトル", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>あなたか対戦相手は自分のトラッシュにあるすべてのカードをデッキに加えてシャッフルする。あなたはカードを1枚引く。", //JP_TEXT
		"(Pieceピース在我方場上分身有3隻才可使用)<br><br>我方或對方將自己廢棄區的所有卡牌加入牌組並洗切。我方抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-006.jpg", //SRC
		"DEVIL'S CARNIVAL", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>あなたの＜悪魔＞のシグニ2体を場からトラッシュに置く。そうした場合、このゲームの間、あなたは以下の能力を得る。<br>『【自】：あなたのターン終了時、あなたのトラッシュから＜悪魔＞のシグニ1枚を対象とし、それを手札に加える。』", //JP_TEXT
		"(Pieceピース在我方場上分身有3隻才可使用)<br><br>我方場上2隻＜惡魔＞精靈放置到廢棄區。若如此做，本局遊戲中，我方獲得以下能力。<br>「自」：我方回合結束時，我方廢棄區1張＜惡魔＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-007.jpg", //SRC
		"明日へ前進 アキノ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【自】：あなたのメインフェイズ開始時、対戦相手のシグニ1体を対象とし、あなたの白のシグニ1体を場からトラッシュに置き[白]を支払ってもよい。そうした場合、それを手札に戻す。<br><br>【出】：カードを1枚引き【エナチャージ1】をする。<br><br>【起】（ゲーム1）[白(0)]：次の対戦相手のターンの、メインフェイズとアタックフェイズの間、あなたのシグニは【シャドウ】を得る。（この能力の使用後に場に出たシグニにも影響を与える）", //JP_TEXT
		"「自」：我方主要階段開始時，對方1隻精靈作對象，可以將我方1隻白色精靈從場上放置到廢棄區並支付白1。若如此做，將其返回手牌。<br><br>「出」：抽1張牌並【能量填充1】。<br><br>「起」(遊戲1)白0：下一個對方的回合的主要階段和攻擊階段中，我方精靈獲得【暗影】（此能力使用後再出場的精靈也會受到影響）"	//TW_TEXT
		],
	[
		"WXDi-P04-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-008.jpg", //SRC
		"MC.LION 3rdVerse-ALT", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【自】（ターン1）：このルリグがアタックしたとき、あなたのデッキをシャッフルし一番上を公開する。それがレベル1のシグニの場合、カードを1枚引く。それが[ガード]を持つシグニの場合、対戦相手のライフクロス1枚をクラッシュする。<br><br>【起】（ゲーム1）[白(0)]：対戦相手のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「自」(回合1)：此分身攻擊時，洗切我方牌組並公開上方1張牌。若是等級1的精靈的話，抽1。若是持有防禦標記的精靈的話，擊潰對方1張生命護甲。<br><br>「起」(遊戲1)白0：對方1隻精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-009.jpg", //SRC
		"ノンストップ Dr．タマゴ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【自】：このルリグがアタックしたとき、このルリグの下からカード1枚をルリグトラッシュに置いてもよい。そうした場合、対戦相手の手札を1枚見ないで選び、捨てさせる。<br><br>【自】：あなたの効果によって対戦相手が手札を1枚捨てたとき、対戦相手のシグニ1体を対象とし、それを凍結する。<br><br>【起】（ゲーム1）[青(0)]：各プレイヤーはカードを2枚引く。あなたは対戦相手の手札を2枚見ないで選び、捨てさせる。", //JP_TEXT
		"「自」：此分身攻擊時，可以將此分身下方的1張卡牌放置到分身廢棄區。若如此做，不查看對方的手牌選擇1張，將其捨棄。<br><br>「自」：因我方效果使對方捨棄1張手牌時，對方1隻精靈作對象，將其凍結。<br><br>「起」(遊戲1)藍0：各玩家抽2張牌。不查看對方的手牌選擇2張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P04-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-010.jpg", //SRC
		"VOGUE3-EX マドカ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、各プレイヤーは、カードを1枚引き手札を1枚捨てる。<br><br>【出】：以下の2つから1つを選ぶ。①対戦相手は手札を2枚捨てる。②対戦相手のルリグ1体を対象とし、それを凍結する。<br><br>【起】（ゲーム1）[青(0)]：あなたの手札が対戦相手より3枚以上多い場合、対戦相手のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，各玩家抽1張牌並捨棄1張手牌。<br><br>「出」：以下2項中選擇1項。①對方捨棄2張手牌。②對方1隻分身作對象，將其凍結。<br><br>「起」(遊戲1)藍0：我方手牌比對方手牌多3張以上的話，對方1隻精靈作對象，將其返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P04-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-011.jpg", //SRC
		"デウス・ワン", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン1）：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。」を得る。<br>（【ソウル】はシグニに1枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）", //JP_TEXT
		"「常」：被此卡牌以【靈魂】附加的精靈獲得「自(回合1)：此精靈攻擊時，對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。」。<br>(精靈最多被1張【靈魂】附加，該精靈從場上離開時返回分身廢棄區。)"	//TW_TEXT
		],
	[
		"WXDi-P04-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-012.jpg", //SRC
		"デウス・ツー", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン1）：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。」を得る。<br>（【ソウル】はシグニに1枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）", //JP_TEXT
		"「常」：被此卡牌以【靈魂】附加的精靈獲得「自(回合1)：此精靈攻擊時，對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。」。<br>(精靈最多被1張【靈魂】附加，該精靈從場上離開時返回分身廢棄區。)"	//TW_TEXT
		],
	[
		"WXDi-P04-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-013.jpg", //SRC
		"デウス・スリー", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【常】：あなたのターンの間、【ソウル】が付いているあなたのシグニの正面のシグニのパワーを－2000する。<br><br>【起】[黒(0)]：あなたのシグニ1体を対象とし、このルリグの下からカード1枚をそれの【ソウル】にする。<br><br>【起】（ゲーム1）エクシード3：あなたのトラッシュから[ガード]を持たないシグニを3枚まで対象とし、あなたのルリグデッキにあるピース1枚をゲームから除外する。そうした場合、それらを手札に加える。", //JP_TEXT
		"「常」：我方回合中，我方附加【靈魂】的精靈的正面的精靈力量-2000。<br><br>「起」黑0：我方1隻精靈作對象，此分身下方1張卡牌成為其【靈魂】。<br><br>「起」(遊戲1)超越3：我方廢棄區最多3張不持有防禦標記的精靈作對象，我方分身牌組1張Piece從遊戲中除外。若如此做，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-014.jpg", //SRC
		"マキナ・ワン", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン1）：このシグニがアタックしたとき、あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。」を得る。<br>（【ソウル】はシグニに1枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）", //JP_TEXT
		"「常」：被此卡牌以【靈魂】附加的精靈獲得「自(回合1)：此精靈攻擊時，我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。」。<br>(精靈最多被1張【靈魂】附加，該精靈從場上離開時返回分身廢棄區。)"	//TW_TEXT
		],
	[
		"WXDi-P04-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-015.jpg", //SRC
		"マキナ・ツー", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン1）：このシグニがアタックしたとき、対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。」を得る。<br>（【ソウル】はシグニに1枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）", //JP_TEXT
		"「常」：被此卡牌以【靈魂】附加的精靈獲得「自(回合1)：此精靈攻擊時，對方1隻等級2以下的精靈作對象，將其破壞。」。<br>(精靈最多被1張【靈魂】附加，該精靈從場上離開時返回分身廢棄區。)"	//TW_TEXT
		],
	[
		"WXDi-P04-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-016.jpg", //SRC
		"マキナ・スリー", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【自】：【ソウル】が付いているあなたのシグニ1体がアタックしたとき、対戦相手のデッキの上からカードを2枚トラッシュに置く。<br><br>【起】[黒(0)]：あなたのシグニ1体を対象とし、このルリグの下からカード1枚をそれの【ソウル】にする。<br><br>【起】（ゲーム1）エクシード3：対戦相手のシグニを2体まで対象とし、あなたのルリグデッキにあるピース1枚をゲームから除外する。そうした場合、ターン終了時まで、それらのパワーをそれぞれ－12000する。", //JP_TEXT
		"「自」：我方1隻附加【靈魂】的精靈攻擊時，對方牌組上2張卡牌放置到廢棄區。<br><br>「起」黑0：我方1隻精靈作對象，此分身下方1張卡牌成為其【靈魂】。<br><br>「起」(遊戲1)超越3：對方最多2隻精靈作對象，我方分身牌組1張Piece從遊戲中除外。若如此做，直到回合結束時為止，使其力量各-12000。"	//TW_TEXT
		],
	[
		"WXDi-P04-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-017.jpg", //SRC
		"エクスゲイザー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻力量10000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-018.jpg", //SRC
		"エクスエコー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】手札から赤のカードを1枚捨てる：カードを3枚引く。<br><br>【自】：このカードがエクシードのコストとしてルリグトラッシュに置かれたとき、手札を1枚捨ててもよい。そうした場合、カードを1枚引く。", //JP_TEXT
		"「出」捨棄1張紅色卡牌：抽3張牌。<br><br>「自」：此卡牌因超越的費用放置到分身廢棄區時，可以捨棄1張手牌。若如此做，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-019.jpg", //SRC
		"エクスクロスビーム", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[赤][無][無][無][無]：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「出」紅1無4：對方1隻力量10000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-020.jpg", //SRC
		"エクスクロスファイア", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それのレベル1につき[無]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【出】：対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカードを2枚まで対象とし、それらをトラッシュに置く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，其等級每有1可以支付無1。若如此做，將其破壞。<br><br>「出」：對方能量區與對方中央分身不持有相同顏色的最多2張卡牌作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P04-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-021.jpg", //SRC
		"エクスステップアウト", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：カードを2枚引くか【エナチャージ2】をする。<br><br>【出】：あなたのシグニ1体を対象とし、ターン終了時まで、それは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「出」：抽2張牌或【能量填充2】。<br><br>「出」：我方1隻精靈作對象，直到回合結束時為止，使其獲得【暗殺】。<br>(持有暗殺的精靈的攻擊不會與正面的精靈戰鬥來給予對方傷害)"	//TW_TEXT
		],
	[
		"WXDi-P04-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-022.jpg", //SRC
		"デウスリカバリ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを2枚トラッシュに置く。その後、あなたのトラッシュから赤と黒のシグニをそれぞれ1枚まで対象とし、それらを手札に加える。<br><br>【自】：このカードがエクシードのコストとしてルリグトラッシュに置かれたとき、あなたのトラッシュから赤か黒のシグニ1枚を対象とし、手札を1枚捨ててもよい。そうした場合、それを手札に加える。", //JP_TEXT
		"「出」：我方牌組上2張卡牌放置到廢棄區。之後，我方廢棄區紅色和黑色的精靈最多各1張作對象，將其加入手牌。<br><br>「自」：此卡牌因超越的費用放置到分身廢棄區時，我方廢棄區1張紅色或黑色精靈作對象，可以捨棄1張手牌。若如此做，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-023.jpg", //SRC
		"デウスリミテッド", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：このターン、対戦相手はシグニで合計一度しかアタックできない。<br><br>【出】[無][無]：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：本回合中，對方的精靈合計只能攻擊一次。<br><br>「出」無2：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-024.jpg", //SRC
		"デウスディガー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュからシグニ1枚を対象とし、それを場に出す。それの【出】能力は発動しない。<br><br>【出】：あなたのシグニ1体を対象とし、あなたのルリグトラッシュからルリグ1枚をそれの【ソウル】にする。<br>（【ソウル】はシグニに1枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）", //JP_TEXT
		"「出」：我方廢棄區1張精靈作對象，將其出場。其「出」能力不能發動。<br><br>「出」：我方1隻精靈作對象，我方分身廢棄區1張分身成為其【靈魂】。<br>(精靈最多被1張【靈魂】附加，該精靈從場上離開時返回分身廢棄區。)"	//TW_TEXT
		],
	[
		"WXDi-P04-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-025.jpg", //SRC
		"マキナシーズ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－7000する。<br><br>【自】：このカードがエクシードのコストとしてルリグトラッシュに置かれたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-7000。<br><br>「自」：此卡牌因超越的費用放置到分身廢棄區時，對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P04-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-026.jpg", //SRC
		"マキナリペア", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュから【ライフバースト】を持たないカード1枚を対象とし、それをライフクロスに加える。", //JP_TEXT
		"「出」：我方廢棄區1張不持有爆發標記的卡牌作對象，將其加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P04-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-027.jpg", //SRC
		"マキナバインド", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニを2体まで対象とし、ターン終了時まで、それらは「【自】：このシグニがアタックしたとき、ターン終了時まで、このシグニのパワーを－20000する。」を得る。<br><br>【出】[黒][無][無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【自】：このシグニがアタックしたとき、ターン終了時まで、このシグニのパワーを－20000する。」を得る。", //JP_TEXT
		"「出」：對方最多2隻精靈作對象，直到回合結束時為止，使其獲得「自：此精靈攻擊時，直到回合結束時為止，此精靈的力量-20000。」。<br><br>「出」黑1無2：對方1隻精靈作對象，直到回合結束時為止，使其獲得「自：此精靈攻擊時，直到回合結束時為止，此精靈的力量-20000。」。"	//TW_TEXT
		],
	[
		"WXDi-P04-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-028.jpg", //SRC
		"開けし扉 アト＝トレ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋5000する。<br><br>【出】：あなたのトラッシュから[ガード]を持たないシグニを2枚まで対象とし、それらをエナゾーンに置く。<br><br>【起】（ゲーム1）エナゾーンからそれぞれ共通するクラスを持たないシグニ7枚をトラッシュに置く：対戦相手のすべてのシグニをエナゾーンに置き、【エナチャージ2】をする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方1隻精靈作對象，直到回合結束時為止，將其力量+5000。<br><br>「出」：我方廢棄區最多2張不持有防禦標記的精靈作對象，將其放置到能量區。<br><br>「起」(遊戲1)能量區7張不持有相同種族的精靈放置到廢棄區：對方所有精靈放置到能量區，【能量填充2】。"	//TW_TEXT
		],
	[
		"WXDi-P04-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-029.jpg", //SRC
		"タウィル＝ハングアウト", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】手札を3枚まで捨てる：この方法で捨てたカードの枚数に等しい枚数のカードを引く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「出」捨棄最多3張手牌：抽取與通過此方法捨棄卡牌數量的相同數量卡牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-030.jpg", //SRC
		"ウムル＝アウトサイダー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×6", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手のすべてのシグニをダウンする。", //JP_TEXT
		"「出」：橫置對方所有精靈。"	//TW_TEXT
		],
	[
		"WXDi-P04-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-031.jpg", //SRC
		"アト＝イジェクト", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、このターン、次にそれがアタックしたとき、そのアタックを無効にする。<br><br>【出】[無][無]：対戦相手のシグニ1体を対象とし、このターン、次にそれがアタックしたとき、そのアタックを無効にする。", //JP_TEXT
		"「出」：對方1隻精靈作對象，本回合中，其下一次攻擊時，該攻擊無效。<br><br>「出」無2：對方1隻精靈作對象，本回合中，其下一次攻擊時，該攻擊無效。"	//TW_TEXT
		],
	[
		"WXDi-P04-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-032.jpg", //SRC
		"聖天姫 エクシア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのシグニが対戦相手の、能力か効果の対象になったとき、対戦相手のシグニゾーン1つを指定する。このターン、対戦相手はそのシグニゾーンにあるシグニでアタックできない。<br><br>【自】：あなたのターン終了時、あなたのすべてのシグニをアップする。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②カードを1枚引く。", //JP_TEXT
		"「自」(回合1)：我方精靈因對方能力或效果成為目標時，指定對方1個精靈區。本回合中，對方該精靈區的精靈不能攻擊。<br><br>「自」：我方回合結束時，豎直我方所有精靈。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-033.jpg", //SRC
		"聖魔姫 ドーマン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのメインフェイズ開始時、あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、このシグニを場からトラッシュに置いてもよい。そうした場合、それを手札に加える。<br><br>【出】手札から[ガード]を持つシグニを1枚捨てる：対戦相手のレベル2以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「自」：我方主要階段開始時，我方廢棄區1張持有防禦標記的精靈作對象，可以將此精靈從場上放置到廢棄區。若如此做，將其加入手牌。<br><br>「出」從手牌捨棄1張持有防禦標記的精靈：對方1隻等級2以下的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-034.jpg", //SRC
		"紅将姫 キントキ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】黒のルリグ1体（このシグニが場に出たとき、あなたのアップ状態の黒のルリグ1体をダウンしないかぎり、これをダウンする）<br><br>【自】：あなたのアタックフェイズ開始時、あなたの場に【ソウル】があり対戦相手のエナゾーンにカードが2枚以上ある場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【出】[赤][黒]：ターン終了時まで、このシグニは【アサシン】を得る。", //JP_TEXT
		"〔和音〕1隻黑色分身<br><br>「自」：我方攻擊階段開始時，我方場上有【靈魂】且對方能量區的卡牌有2張以上的話，對方選擇自己能量區1張卡牌放置到廢棄區。<br><br>「出」紅1黑1：直到回合結束時為止，此精靈獲得【暗殺】。"	//TW_TEXT
		],
	[
		"WXDi-P04-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-035.jpg", //SRC
		"羅輝石 アレキサンドライト", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたの他のシグニ1体が【アサシン】1つか【ランサー】1つか【ダブルクラッシュ】1つを得たとき、[赤][無]を支払ってもよい。そうした場合、ターン終了時まで、このシグニはその能力を得る。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「自」：我方其他1隻精靈獲得【暗殺】或【槍兵】或【雙重擊潰】時，可以支付紅1無1。若如此做，直到回合結束時為止，此精靈獲得該能力。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-036.jpg", //SRC
		"蒼将姫 コロンブス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】ルリグ2体（このシグニが場に出たとき、あなたのアップ状態のルリグ2体をダウンしないかぎり、これをダウンする）<br><br>【常】：あなたのルリグデッキにあるカードが1枚以下であるかぎり、このシグニのパワーは＋3000される。<br><br>【自】：あなたのアタックフェイズ開始時、このシグニがアップ状態の場合、対戦相手のシグニ1体を対象とし、手札を3枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"〔和音〕2隻分身<br><br>「常」：我方分身牌組卡牌是1張以下時，此精靈力量+3000。<br><br>「自」：我方攻擊階段開始時，此精靈是豎直狀態的話，對方1張精靈作對象，可以捨棄3張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-037.jpg", //SRC
		"羅星姫 オリオン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、対戦相手のシグニが場を離れる場合、代わりにトラッシュに置かれる。<br><br>【自】：対戦相手のターン終了時、カードを1枚引く。<br><br>【起】手札からレベル1のシグニを1枚捨てる：対戦相手のすべてのシグニを凍結する。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「常」：對方回合中，對方精靈離場的話，作為代替放置到廢棄區。<br><br>「自」：對方回合結束時，抽1張牌。<br><br>「起」從手牌捨棄1張等級1精靈：凍結對方所有精靈。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-038.jpg", //SRC
		"コードラビリンス ノートルダム", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：メインフェイズとアタックフェイズの間、対戦相手がカードを1枚引いたとき、対戦相手は手札を1枚捨てる。<br><br>【自】：このシグニがバニッシュされたとき、手札を2枚捨ててもよい。そうした場合、このシグニをエナゾーンからダウン状態で場に出す。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を2枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」(回合1)：主要階段和攻擊階段中，對方抽1張卡牌時，對方捨棄1張手牌。<br><br>「自」：此精靈被破壞時，可以捨棄2張手牌。若如此做，此精靈從能量區以橫置狀態出場。<br><br>「生命爆發」：對方1隻精靈作對象，可以捨棄2張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-039.jpg", //SRC
		"翠英姫 ニュートン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にいるルリグのレベルの合計が偶数の場合、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。<br><br>【出】：あなたの場にいるルリグのレベルの合計が奇数の場合、【エナチャージ1】をする。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②【エナチャージ1】", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上分身等級合計是偶數的話，我方能量區最多1張精靈作對象，將其加入手牌。<br><br>「出」：我方場上分身等級合計是奇數的話，【能量填充1】。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②【能量填充1】"	//TW_TEXT
		],
	[
		"WXDi-P04-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-040.jpg", //SRC
		"翠魔姫 イバラキドウジ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：【ランサー】<br><br>【自】：あなたのアタックフェイズ開始時、[無][無][無]を支払わないかぎり、このシグニを場からトラッシュに置く。", //JP_TEXT
		"「常」：【槍兵】<br><br>「自」：我方攻擊階段開始時，不支付無3的話，此精靈從場上放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P04-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-041.jpg", //SRC
		"大装 ムラマサ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのトラッシュからシグニ1枚を対象とし、あなたの他のシグニ1体を場からトラッシュに置き[黒]を支払ってもよい。そうした場合、それを手札に加える。<br><br>【自】：対戦相手のアタックフェイズ開始時、あなたのトラッシュから黒のシグニ1枚を対象とし、[黒]を支払ってもよい。そうした場合、それを手札に加える。<br><br>【ライフバースト】：あなたのトラッシュからシグニを2枚まで対象とし、それらを手札に加える。手札を1枚捨てる。", //JP_TEXT
		"「自」：此精靈攻擊時，我方廢棄區1張精靈作對象，可以將我方1隻其他的精靈從場上放置到廢棄區並支付黑1。若如此做，將其加入手牌。<br><br>「自」：對方攻擊階段開始時，我方廢棄區1張黑色精靈作對象，可以支付黑1。若如此做，將其加入手牌。<br><br>「生命爆發」：我方廢棄區最多2張精靈作對象，將其加入手牌。捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-042.jpg", //SRC
		"コードアンシエンツ スチームパンク", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのターンの間、あなたのルリグ1体の下からカード1枚が移動したとき、対戦相手のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－8000する。<br><br>【起】アップ状態のレベル2のルリグ2体をダウンする：このカードをトラッシュから場に出す。", //JP_TEXT
		"「自」(回合1)：我方回合中，我方1隻分身下方的1張卡牌移動時，對方1隻精靈作對象，可以支付無1。若如此做，直到回合結束時為止，將其力量-8000。<br><br>「起」橫置2隻豎直狀態等級2的分身：此卡牌從廢棄區出場。"	//TW_TEXT
		],
	[
		"WXDi-P04-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-043.jpg", //SRC
		"幻竜姫 ドラゴンメイド", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：いずれかのプレイヤーがリフレッシュしたとき、対戦相手のシグニ1体を対象とし、[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－10000する。<br><br>【自】：このシグニがアタックしたとき、あなたか対戦相手のデッキの上からカードを4枚トラッシュに置く。", //JP_TEXT
		"「自」：任一玩家重構時，對方1隻精靈作對象，可以支付黑1。若如此做，直到回合結束時為止，將其力量-10000。<br><br>「自」：此精靈攻擊時，我方或對方牌組上4張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P04-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-044.jpg", //SRC
		"羅星 レプス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「生命爆發」：對方1隻力量8000以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-045.jpg", //SRC
		"コードアート Rングライト", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、あなたの手札からスペル2枚を公開してもよい。そうした場合、カードを1枚引く。<br><br>【自】：あなたのメインフェイズ開始時、あなたのデッキの一番上を公開する。それがスペルの場合、カードを1枚引く。", //JP_TEXT
		"「自」：此精靈被破壞時，可以從我方手牌公開2張魔法。若如此做，抽1張牌。<br><br>「自」：我方主要階段開始時，公開我方牌組上1張卡牌。若是魔法的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-046.jpg", //SRC
		"幻水 レモンテトラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたが【ガード】したとき、カードを1枚引く。", //JP_TEXT
		"「自」：我方【防禦】時，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-047.jpg", //SRC
		"聖天 イシス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚見る。その中から＜天使＞のシグニを1枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。この方法でカードを手札に加えた場合、手札を1枚捨てる。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「出」：查看我方牌組上3張卡牌。將其中最多1張＜天使＞精靈公開並加入手牌，剩下的按任意順序放回牌組下方。此方法有卡牌加入手牌的話，捨棄1張手牌。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-048.jpg", //SRC
		"聖将 ギエン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、【シャドウ（レベル3のシグニ）】を得る。（このシグニは対戦相手のレベル3のシグニによって対象にされない）", //JP_TEXT
		"「常」：此精靈在中央精靈區時，獲得【暗影(等級3的精靈)】。（此精靈不會成為對方等級3的精靈的對象）"	//TW_TEXT
		],
	[
		"WXDi-P04-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-049.jpg", //SRC
		"コードメイズ アントネスト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：各アタックフェイズ開始時、このシグニの正面のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。<br><br>【ライフバースト】：カードを1枚引く。このターン、あなたの手札にあるシグニは[ガード]を得る。（[ガード]を持つシグニは【ガード】を得る）", //JP_TEXT
		"「自」：各攻擊階段開始時，此精靈正面的1隻精靈作對象，直到回合結束時為止，使其失去能力。<br><br>「生命爆發」：抽1張牌。本回合中，我方手牌的精靈獲得防禦標記。（持有防禦標記的精靈獲得【防禦】）"	//TW_TEXT
		],
	[
		"WXDi-P04-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-050.jpg", //SRC
		"聖将 コウチュウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニがアップ状態であるかぎり、このシグニのパワーは＋5000される。<br><br>【常】：このシグニがアップ状態であるかぎり、このシグニの隣にあるあなたのシグニのパワーを＋3000する。", //JP_TEXT
		"「常」：此精靈是豎直狀態時，此精靈力量+5000。<br><br>「常」：此精靈是豎直狀態時，此精靈相隣的我方精靈力量+3000。"	//TW_TEXT
		],
	[
		"WXDi-P04-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-051.jpg", //SRC
		"大装 ロンゴミニアド", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのルリグ1体がアタックしたとき、あなたのアップ状態の白のシグニ3体をダウンし[白]を支払ってもよい。そうした場合、そのルリグをアップし、ターン終了時まで、そのルリグは能力を失う。", //JP_TEXT
		"「自」：我方1隻分身攻擊時，可以橫置我方3隻豎直狀態的白色精靈並支付白1。若如此做，豎直該分身，直到回合結束時為止，該分身失去能力。"	//TW_TEXT
		],
	[
		"WXDi-P04-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-052.jpg", //SRC
		"リバース・リターン", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1《青》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のレベル2以下のシグニ1体を対象とし、それを手札に戻す。対戦相手の手札を1枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"對方1隻等級2以下的精靈作對象，將其返回手牌。不查看對方手牌選擇1張，將其捨棄。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P04-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-053.jpg", //SRC
		"紅将 ガラシャ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのルリグトラッシュにカードがあるかぎり、このシグニのパワーは＋4000される。", //JP_TEXT
		"「常」：我方分身廢棄區有卡牌時，此精靈力量+4000。"	//TW_TEXT
		],
	[
		"WXDi-P04-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-054.jpg", //SRC
		"小装 イワトオシ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、[無]を支払ってもよい。そうした場合、それをトラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方能量區1張與對方中央分身不持有相同顏色的卡牌作對象，可以支付無1。若如此做，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P04-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-055.jpg", //SRC
		"幻竜 クエレペ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-056.jpg", //SRC
		"幻獣 コーギー", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのターンの間、このシグニのパワーはあなたのセンタールリグのレベル1につき＋2000される。<br><br>【常】：このシグニのパワーが8000以上であるかぎり、このシグニは「【自】：このシグニがアタックしたとき、手札を1枚捨ててもよい。そうした場合、カードを1枚引く。」を得る。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「常」：我方回合中，此精靈力量為我方中央分身等級每有1則+2000。<br><br>「常」：此精靈力量是8000以上時，此精靈獲得「自：此精靈攻擊時，可以捨棄1張手牌。若如此做，抽1張牌。」。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以支付紅1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-057.jpg", //SRC
		"紅将 ベディヴィエール", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、「【自】：このシグニがアタックしたとき、以下の2つから1つを選ぶ。<br>①対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、それをトラッシュに置く。②対戦相手のパワー2000以下のシグニ1体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		"「常」：此精靈在中央精靈區時，獲得「自：此精靈攻擊時，以下2項中選擇1項。<br>①對方能量區1張與對方中央分身不持有相同顏色的卡牌作對象，將其放置到廢棄區。<br>②對方1隻力量2000以下的精靈作對象，將其破壞。」。"	//TW_TEXT
		],
	[
		"WXDi-P04-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-058.jpg", //SRC
		"紅魔 モラクス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このターンにあなたの効果によって対戦相手のエナゾーンからカードが1枚以上トラッシュに置かれていた場合、【エナチャージ1】をする。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、対戦相手が[無][無]を支払わないかぎり、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈攻擊時，本回合因我方效果使對方能量區1張以上的卡牌放置到廢棄區的話，【能量填充1】。<br><br>「生命爆發」：對方1隻精靈作對象，對方不支付無2的話，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-059.jpg", //SRC
		"コードアート Yキトリキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたがスペルを使用したとき、対戦相手のパワー5000以下のシグニ1体を対象とし、アップ状態のこのシグニをダウンしてもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方使用魔法時，對方1隻力量5000以下的精靈作對象，可以橫置豎直狀態的此精靈。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-060.jpg", //SRC
		"紅魔 バティン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】（ターン1）[無] 他の＜悪魔＞のシグニ1体を場からトラッシュに置く：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「起」(回合1)無1 其他1隻＜惡魔＞精靈從場上放置到廢棄區：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-061.jpg", //SRC
		"羅星 キャンサー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】手札からレベル1のシグニを2枚捨てる：対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」從手牌捨棄2張等級1精靈：對方1隻力量12000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-062.jpg", //SRC
		"白日の轟雷", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1《白》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のシグニ1体を対象とし、それをバニッシュする。あなたのデッキの上からカードを3枚見る。その中からカード1枚を手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。②対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		"對方1隻精靈作對象，將其破壞。查看我方牌組頂3張卡牌。將其中1張卡牌加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：選擇1項。①對方1隻力量5000以下的精靈作對象，將其破壞。②對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。"	//TW_TEXT
		],
	[
		"WXDi-P04-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-063.jpg", //SRC
		"羅星 ノーマ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたの効果によって対戦相手が手札を1枚捨てたとき、対戦相手のシグニ1体を対象とし、それを凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		"「自」：我方效果使對方捨棄1張手牌時，對方1隻精靈作對象，將其凍結。"	//TW_TEXT
		],
	[
		"WXDi-P04-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-064.jpg", //SRC
		"羅原 Ga", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：カードを2枚引く。対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「生命爆發」：抽2張牌。對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-065.jpg", //SRC
		"羅菌 プランクトン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：対戦相手のシグニ1体が凍結状態になったとき、ターン終了時まで、そのシグニのパワーを－1000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「自」(回合1)：對方1隻精靈成為凍結狀態時，直到回合結束時為止，該精靈的力量-1000。"	//TW_TEXT
		],
	[
		"WXDi-P04-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-066.jpg", //SRC
		"蒼将 ブルーノ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、「【自】：このシグニがアタックしたとき、カードを1枚引くか対戦相手は手札を1枚捨てる。」を得る。", //JP_TEXT
		"「常」：此精靈在中央精靈區時，獲得「自：此精靈攻擊時，抽1張牌或對方捨棄1張牌。」。"	//TW_TEXT
		],
	[
		"WXDi-P04-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-067.jpg", //SRC
		"蒼美 パレット団", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、各プレイヤーはカードを1枚引く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，各玩家抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P04-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-068.jpg", //SRC
		"蒼魔 ハルファス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、カードを1枚引く。<br><br>【出】：あなたは手札を1枚捨てる。<br>（コストのない【出】能力は発動しないことを選べない）<br><br>【ライフバースト】：対戦相手のルリグかシグニ1体を対象とする。このターン、それがアタックしたとき、対戦相手が手札を3枚捨てないかぎり、そのアタックを無効にする。", //JP_TEXT
		"「自」：此精靈被破壞時，抽1張牌。<br><br>「出」：我方捨棄1張手牌。<br>（沒有費用的「出」能力不能選擇不發動）<br><br>「生命爆發」：對方1隻分身或精靈作對象。本回合中，其攻擊時，對方不捨棄3張手牌的話，該攻擊無效。"	//TW_TEXT
		],
	[
		"WXDi-P04-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-069.jpg", //SRC
		"蒼魔 グラシャラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】このシグニを場からトラッシュに置く：対戦相手のシグニを2体まで対象とし、それらを凍結する。<br><br>【起】[青][無] このシグニを場からトラッシュに置く：対戦相手の手札が0枚の場合、対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「起」此精靈從場上放置到廢棄區：對方最多2隻精靈作對象，將其凍結。<br><br>「起」藍1無1 此精靈從場上放置到廢棄區：對方手牌是0張的話，對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-070.jpg", //SRC
		"EXCHANGE", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手の手札を1枚見ないで選び、捨てさせる。その後、あなたのトラッシュからこの方法で捨てられたシグニと同じレベルの[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：どちらか1つを選ぶ。①カードを2枚引く。②あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"不查看對方手牌選擇1張，將其捨棄。之後，我方廢棄區與此方法捨棄的精靈相同等級且不持有防禦標記的1張精靈作對象，將其加入手牌。<br><br>「生命爆發」：選擇1項。①抽2張牌。②我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P04-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-071.jpg", //SRC
		"翠天 サテュロス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】エナゾーンから＜天使＞のシグニ3枚をトラッシュに置く：この方法でトラッシュに置いたカードが持つ色が合計3種類以上ある場合、あなたの＜天使＞のシグニ1体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「出」能量區3張＜天使＞精靈放置到廢棄區：此方法放置到廢棄區的卡牌持有顏色合計3種以上的話，我方1隻＜天使＞精靈作對象，直到回合結束時為止，使其獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-P04-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-072.jpg", //SRC
		"壱ノ遊 タカオニ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：あなたのエナゾーンからレベル2のシグニ1枚を対象とし、それと場にあるこのシグニの場所を入れ替える。（それの【出】能力は発動する）", //JP_TEXT
		"「出」無1：我方能量區1張等級2的精靈作對象，將其與場上的此精靈交換位置。（其「出」能力會發動）"	//TW_TEXT
		],
	[
		"WXDi-P04-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-073.jpg", //SRC
		"幻獣 タスマニアン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-074.jpg", //SRC
		"翠将 ボクロク", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、「【自】：このシグニがアタックしたとき、以下の2つから1つを選ぶ。①あなたのエナゾーンからシグニ1枚を対象とし、それを手札に加える。②【エナチャージ1】」を得る。", //JP_TEXT
		"「常」：此精靈在中央精靈區時，獲得「自：此精靈攻擊時，以下2項中選擇1項。①我方能量區1張精靈作對象，將其加入手牌。②【能量填充1】。」。"	//TW_TEXT
		],
	[
		"WXDi-P04-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-075.jpg", //SRC
		"翠魔 レラジェ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それの基本パワーを10000にする。<br>（シグニのパワーを計算する場合、先に基本パワーを適用してプラスやマイナスをする）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其基本力量變為10000。<br>（精靈力量計算的話，先套用基本力量再加或減）"	//TW_TEXT
		],
	[
		"WXDi-P04-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-076.jpg", //SRC
		"幻水 ウシガエル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの手札が5枚以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【自】：このシグニがアタックしたとき、[緑]を支払ってもよい。そうした場合、カードを1枚引く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[緑][緑]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「常」：我方手牌是5張以上時，此精靈力量+5000。<br><br>「自」：此精靈攻擊時，可以支付綠1。若如此做，抽1張牌。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付綠2。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P04-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-077.jpg", //SRC
		"翠天 ゼルエル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[白][赤][青][緑][黒]：対戦相手のシグニを2体まで対象とし、それらをエナゾーンに置く。", //JP_TEXT
		"「出」白1紅1藍1綠1黑1：對方最多2隻精靈作對象，將其放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-P04-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-078.jpg", //SRC
		"コードイート シーザー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン2）：対戦相手のシグニ1体が場に出たとき、【エナチャージ1】をする。", //JP_TEXT
		"「自」(回合2)：對方1隻精靈出場時，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P04-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-079.jpg", //SRC
		"豪槍", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1《白》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのシグニ1体を対象とし、ターン終了時まで、それは【ランサー】を得る。ターン終了時まで、対戦相手のすべてのシグニは能力を失い、それらの基本パワーを10000にする。<br><br>【ライフバースト】：どちらか1つを選ぶ。①ターン終了時まで、あなたのすべてのシグニのパワーを＋10000する。②あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"我方1隻精靈作對象，直到回合結束時為止，使其獲得【槍兵】。直到回合結束時為止，對方所有精靈失去能力，其基本力量變為10000。<br><br>「生命爆發」：選擇1項。①直到回合結束時為止，我方所有精靈力量+10000。②查看我方牌組頂3張卡牌。其中1張精靈公開並加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P04-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-080.jpg", //SRC
		"小装 イペタム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P04-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-081.jpg", //SRC
		"幻蟲 カミキリムシ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：凶蟲", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの場に、シグニに付いているカードかシグニの下に置かれているカードがある場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－1000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」：我方場上精靈附有卡牌或精靈下方有放置卡牌的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-1000。"	//TW_TEXT
		],
	[
		"WXDi-P04-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-082.jpg", //SRC
		"凶将 ブルータス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、「【自】：このシグニがアタックしたとき、あなたか対戦相手のデッキの上からカードを4枚トラッシュに置く。」を得る。", //JP_TEXT
		"「常」：此精靈在中央精靈區時，獲得「自：此精靈攻擊時，我方或對方牌組上方4張卡牌放置到廢棄區。」。"	//TW_TEXT
		],
	[
		"WXDi-P04-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-083.jpg", //SRC
		"ツヴァイ＝ヒアリ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのターンの間、このシグニの正面のシグニのパワーをそのシグニのレベル1につき－1000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「常」：我方回合中，此精靈正面的精靈等級每有1則力量-1000。"	//TW_TEXT
		],
	[
		"WXDi-P04-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-084.jpg", //SRC
		"コードアンチ ドグー", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。", //JP_TEXT
		"「自」：此精靈攻擊時，對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P04-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-085.jpg", //SRC
		"コードアート Wインセラー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたがスペルを使用したとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。対戦相手のデッキの上からカードを2枚トラッシュに置く。", //JP_TEXT
		"「自」(回合1)：我方使用魔法時，對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。對方牌組上2張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P04-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-086.jpg", //SRC
		"ブラック・パック", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1《緑》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋10000する。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のレベル1のシグニ1体を対象とし、それをバニッシュする。②【エナチャージ2】", //JP_TEXT
		"對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。我方1隻精靈作對象，直到回合結束時為止，將其力量+10000。<br><br>「生命爆發」：選擇1項。①對方1隻等級1的精靈作對象，將其破壞。②【能量填充2】"	//TW_TEXT
		],
	[
		"WXDi-P04-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-087.jpg", //SRC
		"聖紅魔 ザガン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か赤1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或紅）"	//TW_TEXT
		],
	[
		"WXDi-P04-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-088.jpg", //SRC
		"聖紅魔 オリアス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か赤1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或紅）"	//TW_TEXT
		],
	[
		"WXDi-P04-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-089.jpg", //SRC
		"小装 エケザクス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或黑）"	//TW_TEXT
		],
	[
		"WXDi-P04-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-090.jpg", //SRC
		"中装 サンセツコン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或黑）"	//TW_TEXT
		],
	[
		"WXDi-P04-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-091.jpg", //SRC
		"翠凶天 ラファエ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは緑か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個綠或黑）"	//TW_TEXT
		],
	[
		"WXDi-P04-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-092.jpg", //SRC
		"翠凶天 アイゼン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは緑か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個綠或黑）"	//TW_TEXT
		],
	[
		"WXDi-P04-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-093.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-001.jpg", //SRC
		"RED ZONE", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に赤のルリグが2体以上いる<br><br>あなたの赤のシグニ1体を対象とし、ターン終了時まで、それは【アサシン】を得る。手札を3枚まで捨て、この方法で捨てた枚数に2を加えた枚数のカードを引く。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「使用條件」我方場上紅色分身有2隻以上<br><br>我方1隻紅色精靈作對象，直到回合結束時為止，使其獲得【暗殺】。捨棄最多3張手牌，抽取通過此方法捨棄數量加2的卡牌數量。"	//TW_TEXT
		],
	[
		"WXDi-P05-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-002.jpg", //SRC
		"DANCE IN THE LANCE", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に緑のルリグが2体以上いる<br><br>以下の2つから1つを選ぶ。<br>①【エナチャージ4】をする。その後、あなたのエナゾーンからカードを2枚まで対象とし、それらを手札に加える。<br>②あなたの緑のシグニを2体まで対象とし、ターン終了時まで、それらは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「使用條件」我方場上綠色分身有2隻以上<br><br>從下列2項中選擇1項。<br>①【能量填充4】。之後，我方能量區最多2張卡牌作對象，將其加入手牌。<br>②我方最多2隻綠色精靈作對象，直到回合結束時為止，使其獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-P05-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-003.jpg", //SRC
		"M．G．D．", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>以下の2つから1つを選ぶ。<br>①対戦相手のルリグ1体を対象とし、「あなたのエナゾーンからカード1枚をトラッシュに置く。」か「手札を1枚捨てる。」を合計3回行う。そうした場合、このターン、それがアタックしたとき、そのアタックを無効にする。<br>②カードを1枚引く。", //JP_TEXT
		"(Pieceピース在我方場上分身有3隻才可使用)<br><br>從下列2項中選擇1項。<br>①對方1隻分身作對象，「從我方能量區將1張卡牌放置到廢棄區。」或「捨棄1張手牌。」合計執行3次。若如此做，本回合中，其攻擊時，該攻擊無效。<br>②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-004.jpg", //SRC
		"パラダイスうちゅう", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【常】：あなたの能力か効果1つによって、あなたのデッキとトラッシュにあるレベル3以下の＜宇宙＞のシグニのレベルを参照する場合、レベル1として扱ってもよい。』", //JP_TEXT
		"Pieceピース在我方場上分身有3隻才可使用)<br><br>本局遊戲中，我方獲得以下能力。<br>「常」：我方的能力或1個效果需要參照我方牌組和廢棄區等級3以下的＜宇宙＞精靈的等級的話，可以視作等級1。"	//TW_TEXT
		],
	[
		"WXDi-P05-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-005.jpg", //SRC
		"Don’t STOP！", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【常】：対戦相手は追加で手札を1枚捨てるか[無]を支払わないかぎり【ガード】ができない。』", //JP_TEXT
		"(Pieceピース在我方場上分身有3隻才可使用)<br><br>本局遊戲中，我方獲得以下能力。<br>「常」：對方不追加捨棄1張手牌或支付無1的話，不能【防禦】。"	//TW_TEXT
		],
	[
		"WXDi-P05-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-006.jpg", //SRC
		"永遠♡不滅 きゅるきゅる～ん☆", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青白黒", //COLOR
		"", //LEVEL
		"《青》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【チーム】＜きゅるきゅるーん☆＞<br><br>このピースは、対戦相手が【使用条件】【チーム】を持つピースを使用する際、カットインして使用できる。<br><br>以下の2つから1つを選ぶ。<br>①【使用条件】【チーム】を持つ対戦相手のピース1枚を対象とし、それの効果を打ち消す。この方法で打ち消されたピースはゲームから除外される。<br>②カードを1枚引き【エナチャージ1】をする。", //JP_TEXT
		"「使用條件」「隊伍」＜きゅるきゅるーん☆＞<br><br>此Piece在對方使用「使用條件」持有「隊伍」的Piece時，可以作反擊使用。<br><br>從下列2項中選擇1項。<br>①對方「使用條件」持有「隊伍」的1張Piece作對象，打消其效果。此方法打消的Piece從遊戲中除外。<br>②抽1張牌並【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P05-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-007.jpg", //SRC
		"煌きへ一歩 ヒラナ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【常】：あなたのターンの間、あなたの中央のシグニゾーンにあるシグニのパワーを＋3000する。<br><br>【出】：カードを1枚引き【エナチャージ1】をする。<br><br>【起】（ゲーム1）[赤(0)]：カードを2枚引き【エナチャージ2】をする。このターン終了時、あなたの手札とエナゾーンにあるすべてのカードをトラッシュに置く。", //JP_TEXT
		"「常」：我方回合中，我方中央精靈區的精靈力量+3000。<br><br>「出」：抽1張牌並【能量填充1】。<br><br>「起」(遊戲1)紅0：抽2張牌並【能量填充2】。本回合結束時，我方的手牌和能量區所有卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P05-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-008.jpg", //SRC
		"VJ．WOLF 3rdVerse－ALT", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【出】：あなたの場にいるアシストルリグのレベルの合計1につき【エナチャージ1】をする。<br><br>【起】（ターン1）[緑][緑][無]：対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】（ゲーム1）[緑(0)]：このターン、あなたのエナゾーンにあるカードは【マルチエナ】を得る。", //JP_TEXT
		"「出」：我方場上的輔助分身的合計等級每有1，則【能量填充1】。<br><br>「起」(回合1)綠2無1：對方1隻力量10000以上的精靈作對象，將其破壞。<br><br>「起」(遊戲1)綠0：本回合中，我方能量區的卡牌獲得【萬花色】。"	//TW_TEXT
		],
	[
		"WXDi-P05-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-009.jpg", //SRC
		"運鳴 ノヴァ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【自】：このルリグがアタックしたとき、あなたのトラッシュからカード1枚を対象とし、このルリグの下からカード1枚をルリグトラッシュに置いてもよい。そうした場合、それをデッキの一番上に置く。<br><br>【出】：あなたのデッキの上からカードを3枚見る。その中からカードを1枚までデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。<br><br>【起】（ゲーム1）[白(0)]：あなたのトラッシュから白のシグニ1枚を対象とし、それをデッキの一番上に置く。このターン終了時、カードを2枚引く。", //JP_TEXT
		"「自」：此分身攻擊時，我方廢棄區1張卡牌作對象，可以將此分身下方的1張卡牌放置到分身廢棄區。若如此做，將其放置到牌組上。<br><br>「出」：查看我方牌組頂3張卡牌。其中最多1張放置到牌組上，剩下的按任意順序放回牌組下方。<br><br>「起」(遊戲1)白0：我方廢棄區1張白色精靈作對象，將其放置到牌組上。本回合結束時，抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-010.jpg", //SRC
		"VOGUE3－EX ムジカ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのターンの間、あなたの他のルリグがグロウしたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－5000する。<br><br>【自】（ターン1）：対戦相手のターンの間、あなたの他のルリグがグロウしたとき、あなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。<br><br>【起】（ゲーム1）[無]：【アタックフェイズ】を持たずグロウコストが[無(0)]ではないあなたのアシストルリグ1体を対象とし、それをルリグデッキに戻す。", //JP_TEXT
		"「自」(回合1)：我方回合中，我方其他分身成長時，對方1隻精靈作對象，直到回合結束時為止，將其力量-5000。<br><br>「自」(回合1)：對方回合中，我方其他分身成長時，我方廢棄區1張黑色精靈作對象，將其加入手牌。<br><br>「起」(遊戲1)黑0：我方1隻不持有「攻擊階段」且成長費用不是無0的輔助分身作對象，將其返回分身牌組。"	//TW_TEXT
		],
	[
		"WXDi-P05-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-011.jpg", //SRC
		"みこみこ☆ぜろ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-012.jpg", //SRC
		"みこみこ☆いち", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-013.jpg", //SRC
		"みこみこ☆にっ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-014.jpg", //SRC
		"みこみこ☆さ～ん", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【自】：このルリグがアタックしたとき、対戦相手の手札が3枚以下である場合、カードを1枚引く。4枚以上ある場合、対戦相手は手札を1枚捨てる。<br><br>【出】：対戦相手が手札を1枚捨てないかぎり、あなたはカードを2枚引く。<br><br>【起】（ゲーム1）[青(0)]：対戦相手の手札を見て1枚選び、ゲームから除外する。", //JP_TEXT
		"「自」：此分身攻擊時，，對方手牌3張以下時，抽1張牌。4張以上時，對方捨棄1張手牌。<br><br>「出」：對方不捨棄1張手牌的話，我方抽2張牌。<br><br>「起」(遊戲1)藍0：查看對方手牌並選擇1張，從遊戲中除外。"	//TW_TEXT
		],
	[
		"WXDi-P05-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-015.jpg", //SRC
		"掲げし者 タウィル＝トレ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に赤のシグニが3体以上ある場合、【エナチャージ1】をする。<br><br>【起】（ゲーム1）[赤(0)]：あなたのデッキの上からカードを6枚見て、その中からカード3枚を表向きの束にし、残りを裏向きの束にする。対戦相手はどちらかの束をトラッシュに置き、あなたは残りの束を手札に加える。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上紅色精靈有3隻以上的話，【能量填充1】。<br><br>「起」(遊戲1)紅0：查看我方牌組頂6張卡牌，將其中3張以面向上放一疊，剩下的面向下放一疊。對方將其中一疊放置到廢棄區，我方將剩下的一疊加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-016.jpg", //SRC
		"奏叫の鍵主 ウムル＝トレ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのシグニ2体を対象とし、それらの場所を入れ替えてもよい。<br><br>【出】：対戦相手の手札を見て1枚選び、デッキの一番下に置く。<br><br>【起】（ゲーム1）[青(0)]：対戦相手のシグニゾーン1つに【ハスターリク】1つを置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方2隻精靈作對象，可以交換其位置。<br><br>「出」：查看對方手牌並選擇1張，放置到牌組下方。<br><br>「起」(遊戲1)藍0：放置1個【哈斯陶吕克】在對方1個精靈區。"	//TW_TEXT
		],
	[
		"WXDi-P05-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-017.jpg", //SRC
		"エクストラップ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニを2体まで対象とし、ターン終了時まで、それらは「【自】：このシグニがアタックしたとき、[無][無][無]を支払わないかぎり、このシグニをバニッシュする。」を得る。", //JP_TEXT
		"「出」：對方最多2隻精靈作對象，直到回合結束時為止，使其獲得「自：此精靈攻擊時，不支付無3的話，將其破壞。」。"	//TW_TEXT
		],
	[
		"WXDi-P05-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-018.jpg", //SRC
		"デウスサンダー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のデッキの一番上のカードをトラッシュに置く。その後、あなたのトラッシュからこの方法でトラッシュに置かれたシグニと同じレベルのシグニ1枚を対象とし、それを場に出す。<br><br>【出】[黒][無][無][無][無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		"「出」：對方牌組頂1張卡牌放置到廢棄區。之後，從我方廢棄區將1張與此方法放置到廢棄區的精靈持有相同等級的精靈作對象，將其出場。<br><br>「出」黑1無4：對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。"	//TW_TEXT
		],
	[
		"WXDi-P05-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-019.jpg", //SRC
		"マキナネビュラ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：あなたのシグニ1体を対象とし、あなたのルリグトラッシュからルリグ1枚をそれの【ソウル】にする。<br>（【ソウル】はシグニに1枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）<br><br>【出】[無][無]：対戦相手のシグニ1体を対象とし、あなたのトラッシュからそれぞれ共通する色を持つカード10枚をデッキに加えてシャッフルする。そうした場合、それをバニッシュする。", //JP_TEXT
		"「出」：我方1隻精靈作對象，我方分身廢棄區的1張分身成為其【靈魂】。<br>(精靈最多被1張【靈魂】附加，該精靈從場上離開時返回分身廢棄區。)<br><br>「出」無2：對方1隻精靈作對象，我方廢棄區持有共同顏色的10張卡牌加入牌組並洗切。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-020.jpg", //SRC
		"ゆかゆか☆ぜろ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-021.jpg", //SRC
		"ゆかゆか☆ぽーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚見る。その中から[ガード]を持たないカードを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組3張卡牌。其中最多2張不持有防禦標記的卡牌公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P05-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-022.jpg", //SRC
		"ゆかゆか☆ずばーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：手札を1枚捨てないかぎりアタックできない。」を得る。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不捨棄1張手牌的話不能攻擊。」。"	//TW_TEXT
		],
	[
		"WXDi-P05-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-023.jpg", //SRC
		"ゆかゆか☆ぶっぶー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、対戦相手が手札を3枚捨てないかぎり、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】：対戦相手のシグニ1体を対象とし、対戦相手が[無][無][無]を支払わないかぎり、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】[白][無][無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		"「出」：對方1隻精靈作對象，對方不捨棄3張手牌的話，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「出」：對方1隻精靈作對象，對方不支付無3的話，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「出」白1無2：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。"	//TW_TEXT
		],
	[
		"WXDi-P05-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-024.jpg", //SRC
		"ゆかゆか☆ずばばー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：このターン、対戦相手はシグニを2体までしか場に出すことができない。（すでに場に3体以上ある場合は2体になるようにシグニをトラッシュに置く）<br><br>【出】[白][無]：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：本回合中，對方最多只能有2隻精靈出場。(場上有3隻以上的話需放置到廢棄區直到2隻為止）<br><br>「出」白1無1：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-025.jpg", //SRC
		"ゆかゆか☆ぴーひゃら", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを5枚見る。その中からシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【出】：次のあなたのエナフェイズ終了時まで、あなたのセンタールリグのリミットを＋2する。", //JP_TEXT
		"「出」：查看我方牌組頂5張卡牌。其中最多2張精靈公開並加入手牌，剩下的按任意順序放回牌組下方。<br><br>「自」：直到下一個我方的充能階段為止，我方中央分身的界限+2。"	//TW_TEXT
		],
	[
		"WXDi-P05-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-026.jpg", //SRC
		"まほまほ☆ぜろ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-027.jpg", //SRC
		"まほまほ☆じゃじゃーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P05-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-028.jpg", //SRC
		"まほまほ☆ずががーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、対戦相手が手札を2枚捨てないかぎり、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「出」：對方1隻精靈作對象，對方不捨棄2張手牌的話，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P05-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-029.jpg", //SRC
		"まほまほ☆どがーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】[無][無][無]：あなたのトラッシュから[ガード]を持たないシグニを2枚まで対象とし、それらを手札に加える。<br><br>【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをあなたの手札1枚につき－3000する。", //JP_TEXT
		"「出」無3：我方廢棄區最多2張不持有防禦標記的精靈作對象，將其加入手牌。<br><br>「出」：對方1隻精靈作對象，直到回合結束時為止，我方手牌每有1張，將其力量-3000。"	//TW_TEXT
		],
	[
		"WXDi-P05-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-030.jpg", //SRC
		"まほまほ☆ずどどーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のデッキの上からカードを4枚トラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方牌組頂4張放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P05-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-031.jpg", //SRC
		"まほまほ☆べーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×5", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：このターン、対戦相手はパワーが10000以下のシグニでアタックできない。<br><br>【出】手札を3枚まで捨てる：この方法で捨てたカードの枚数と同じ数の対戦相手のシグニを対象とし、ターン終了時まで、それらのパワーをそれぞれ－5000する。", //JP_TEXT
		"「出」：本回合中，對方力量10000以下的精靈不能攻擊。<br><br>「出」捨棄最多3張手牌：與此方法捨棄卡牌數相同數量的對方精靈作對象，直到回合結束時為止，將其力量各-5000。"	//TW_TEXT
		],
	[
		"WXDi-P05-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-032.jpg", //SRC
		"大装 ゲイヴォルグ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのセンタールリグは「【自】（ターン1）：このルリグがアタックしたとき、対戦相手のシグニ1体を対象とし、それをトラッシュに置く。」を得る。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのアップ状態の白のシグニ1体をダウンしてもよい。そうした場合、カードを1枚引く。", //JP_TEXT
		"「常」：我方中央分身獲得「自(回合1)：此分身攻擊時，對方1隻精靈作對象，將其放置到廢棄區。」。<br><br>「自」：我方攻擊階段開始時，可以橫置我方1隻豎直狀態的白色精靈。若如此做，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-033.jpg", //SRC
		"幻怪姫 タマモゼン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたのシグニ1体の上に置く（この条件を満たさなければ場に出せない）<br><br>【常】：対戦相手のターンの間、このシグニは【シャドウ】を得る。（このシグニは対戦相手によって対象にされない）<br><br>【自】：対戦相手のアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：[無]を支払わないかぎりアタックできない。」を得る。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②カードを1枚引く。", //JP_TEXT
		"「升階」放置到我方1隻精靈上<br><br>「常」：對方回合中，此精靈獲得「暗影」。<br><br>「自」：對方攻擊階段開始時，對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不支付無1的話不能攻擊。」。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-034.jpg", //SRC
		"コードアクセル ヒャッハー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニの下にカードがあるかぎり、このシグニのパワーは＋5000され、このシグニは「【自】：このシグニがアタックしたとき、対戦相手のパワー8000以下のシグニ1体を対象とし、[赤][赤]を支払ってもよい。そうした場合、それをバニッシュする。」を得る。<br><br>【出】：あなたのレベル3のシグニ1体を対象とし、それをこのシグニの下に置いてもよい。（あなたの場にあるシグニを対象とする）", //JP_TEXT
		"「常」：此精靈下方有卡牌時，此精靈力量+5000，此精靈獲得「自：此精靈攻擊時，對方1隻力量8000以下的精靈為對象，可以支付紅2。若如此做，將其破壞。」。<br><br>「出」：我方1隻等級3的精靈作對象，可以將其放置到此精靈下方。"	//TW_TEXT
		],
	[
		"WXDi-P05-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-035.jpg", //SRC
		"羅星姫 ドラコ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのデッキの上からカードを5枚公開し、それらのカードをシャッフルしてデッキの一番下に置く。その後、[無][無][無][無][無][無]からこの方法で公開されたレベル1のシグニ1枚につき[無]を減らしたエナコストを支払ってもよい。そうした場合、対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，公開我方牌組頂5張卡牌，將其洗切後放回牌組下方。之後，此方法公開的等級1精靈每有1張，無6可以減無1來支付。若如此做，對方1隻力量12000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-036.jpg", //SRC
		"羅婚石 ダイヤブライド", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたの赤のシグニ1体が対戦相手の、能力か効果の対象になったとき、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【出】手札を1枚捨てる：あなたのデッキの上からカードを2枚見る。その中からカード1枚を手札に加え、残りをトラッシュに置く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「自」(回合1)：我方1隻紅色精靈因對方的能力或效果成為對象時，對方選擇自己能量區的1張卡牌，將其放置到廢棄區。<br><br>「出」捨棄1張手牌：查看我方牌組頂2張卡牌。其中1張加入手牌，剩下的放置到廢棄區。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-037.jpg", //SRC
		"大罠 ハーメルン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手は手札を2枚捨ててもよい。そうした場合、このアタックを無効にする。<br><br>【自】：あなたのアタックフェイズ開始時、このシグニの正面のシグニ1体を対象とし、[青][青]を支払ってもよい。そうした場合、それを裏向きにする。このターン終了時、この方法で裏向きにしたシグニを、同じ場所にシグニがない場合、表向きにする。同じ場所にシグニがある場合、トラッシュに置く。", //JP_TEXT
		"「自」：此精靈攻擊時，對方可以捨棄2張手牌。若如此做，此攻擊無效。<br><br>「自」：我方攻擊階段開始時，此精靈正面的1隻精靈作對象，可以支付藍2。若如此做，將其翻轉。本回合結束時，此方法翻轉的精靈相同的位置沒有精靈的話，將其正面向上。相同的位置有精靈的話，放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P05-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-038.jpg", //SRC
		"羅原姫 H2O", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたの＜原子＞のシグニ1体の上に置く<br><br>【常】：対戦相手のターンの間、下にカードが1枚以上あるこのシグニが対戦相手の効果によって場を離れる場合、代わりにこのシグニの下からすべてのカードをトラッシュに置いてもよい。<br><br>【自】：このシグニがアタックしたとき、カードを1枚引くか、対戦相手は手札を1枚捨てる。<br><br>【ライフバースト】：カードを2枚引く。あなたの手札から＜原子＞のシグニを1枚まで場に出す。", //JP_TEXT
		"「升階」放置到我方1隻＜原子＞精靈上方。<br><br>「常」：對方回合中，下方卡牌有1張以上的此精靈因對方效果離場的話，作為代替可以將此精靈下方的所有卡牌放置到廢棄區。<br><br>「自」：此精靈攻擊時，抽1張牌或對方捨棄1張手牌。<br><br>「生命爆發」：抽2張牌。我方手牌最多1張原子精靈出場。"	//TW_TEXT
		],
	[
		"WXDi-P05-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-039.jpg", //SRC
		"コードオーダー ハニートアイス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜きゅるきゅるーん☆＞<br>【チーム自】：対戦相手のターン開始時、対戦相手の手札が2枚以上ある場合、そのターンのドローフェイズの間に対戦相手はカードを合計1枚までしか引けない。<br><br>【自】：あなたのアタックフェイズ開始時、各プレイヤーはカードを1枚引く。あなたは対戦相手の手札を見て[ガード]を持たないカード1枚を選び、デッキの一番下に置く。", //JP_TEXT
		"「隊伍自」：對方回合開始時，對方手牌有2張以上的話，該回合的抽牌階段間，對方合計最多只能抽1張牌。<br><br>「自」：我方攻擊階段開始時，各玩家抽1張牌。我方查看對方手牌選擇1張不持有防禦標記的卡牌，放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P05-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-040.jpg", //SRC
		"翠天姫 ガイア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に＜天使＞のシグニが3体以上ある場合、【エナチャージ1】をする。<br><br>【自】：あなたのターン終了時、あなたのエナゾーンから＜天使＞のシグニを1枚まで対象とし、それを手札に加える。<br><br>【自】：あなたのターン終了時、あなたのトラッシュから＜天使＞のシグニ1枚を対象とし、[無][無]を支払ってもよい。そうした場合、それを場に出す。それの【出】能力は発動しない。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上有3隻＜天使＞精靈的話，【能量填充1】。<br><br>「自」：我方回合結束時，我方能量區最多1張＜天使＞精靈作對象，將其加入手牌。<br><br>「自」：我方回合結束時，我方廢棄區1張＜天使＞精靈作對象，可以支付無2。若如此做，將其出場。該「出」能力不能發動。"	//TW_TEXT
		],
	[
		"WXDi-P05-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-041.jpg", //SRC
		"轟砲 ティーガー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋1000され、このシグニは【ランサー】と【シャドウ（パワー10000以下のシグニ）】を得る。<br><br>【自】：このシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，此精靈力量+1000，此精靈獲得【槍兵】和【暗影(力量10000以下的精靈】<br><br>「自」：此精靈因戰鬥破壞對方1隻精靈時，此精靈會覺醒。（精靈覺醒在場上時為覺醒狀態）"	//TW_TEXT
		],
	[
		"WXDi-P05-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-042.jpg", //SRC
		"羅星姫 イクリプス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚トラッシュに置く。その後、この方法でトラッシュに置かれたすべてのカードがレベル1のシグニの場合、対戦相手のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－10000する。<br><br>【自】：このカードがデッキからトラッシュに置かれたとき、あなたのトラッシュから[ガード]を持たないレベル1のシグニ1枚を対象とし、[無]を支払ってもよい。そうした場合、それを手札に加える。", //JP_TEXT
		"「出」：我方牌組頂3張卡牌放置到廢棄區。之後，此方法放置到廢棄區的所有卡牌是等級1的精靈的話，對方1隻精靈作對象，可以支付無1。若如此做，直到回合結束時為止，將其力量-10000。<br><br>「自」：此卡牌從牌組放置到廢棄區時，我方廢棄區1張不持有防禦標記的等級1的精靈作對象，可以支付無1。若如此做，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-043.jpg", //SRC
		"コードハート Mデム", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、あなたのトラッシュにあるスペルを2枚までゲームから除外する。ターン終了時まで、それのパワーをこの方法でゲームから除外したスペル1枚につき－3000する。<br><br>【自】（ターン1）：あなたがスペルを使用したとき、あなたか対戦相手のデッキの上からカードを2枚トラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻精靈作對象，我方廢棄區最多2張魔法從遊戲中除外。直到回合結束時為止，此方法從遊戲中除外的魔法每有1張，將其力量-3000。<br><br>「自」(回合1)：我方使用魔法時，我方或對方牌組頂2張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P05-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-044.jpg", //SRC
		"聖将 トキユキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、あなたのセンタールリグが白であるかぎり、このシグニのパワーは＋5000される。", //JP_TEXT
		"「常」：對方回合中，我方中央分身是白色的話，此精靈的力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-P05-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-045.jpg", //SRC
		"小装 ヤエコリ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場に《大装 ヤエキリ》があるかぎり、このシグニのパワーは＋5000され、このシグニは「【自】：各アタックフェイズ開始時、対戦相手のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。」を得る。<br><br>【出】：あなたの白のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋2000する。", //JP_TEXT
		"「常」：我方場上有《大裝 ヤエキリ》時，此精靈的力量+5000，此精靈獲得「自：各攻擊階段開始時，對方1隻精靈作對象，直到回合結束時為止，其能力失去。」。<br><br>「出」：我方1隻白色精靈作對象，直到下一個對方回合結束時為止，將其力量+2000。"	//TW_TEXT
		],
	[
		"WXDi-P05-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-046.jpg", //SRC
		"コードアート Hヤケマ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[白][無] 手札からスペルを1枚捨てる：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「出」白1無1從手牌捨棄1張魔法：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-047.jpg", //SRC
		"聖天 クレイオス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュに＜天使＞のシグニが5枚以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【常】：あなたのトラッシュに＜天使＞のシグニが10枚以上あるかぎり、このシグニは「【自】：このシグニがアタックしたとき、カードを1枚引く。」を得る。", //JP_TEXT
		"「常」：我方廢棄區＜天使＞精靈有5張以上時，此精靈力量+5000。<br><br>「常」：我方廢棄區＜天使＞精靈有10張以上時，此精靈獲得「自：此精靈攻擊時，抽1張牌。」。"	//TW_TEXT
		],
	[
		"WXDi-P05-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-048.jpg", //SRC
		"羅星 リンクス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		"「生命爆發」：對方1隻精靈作對象，可以支付無1。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-049.jpg", //SRC
		"コードメイズ ルヴダビ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニのパワーはあなたの場にいる白のルリグ1体につき＋2000される。<br><br>【ライフバースト】：あなたの場に白のルリグが2体以上いる場合、対戦相手のパワー10000以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「常」：此精靈的力量為我方場上白色分身每有1隻則+2000。<br><br>「生命爆發」：我方場上白色分身有2隻以上的話，對方1隻力量10000以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-050.jpg", //SRC
		"コードアンチ ビッグフット", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[白]：あなたのデッキの上からカードを3枚を見る。その中から白のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【常】：このカードの上にあるシグニのパワーを＋1000する。", //JP_TEXT
		"「出」白1：查看我方牌組頂3張卡牌。其中1張白色精靈公開並加入手牌，剩下的按任意順序放回牌組下方。<br><br>「常」：此卡牌上方的精靈力量+1000。"	//TW_TEXT
		],
	[
		"WXDi-P05-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-051.jpg", //SRC
		"聖英 サンドリル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニのレベルの合計が偶数の場合、対戦相手のシグニ1体を対象とし、[白][白][無]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上精靈等級合計是偶數的話，對方1隻精靈作對象，可以支付白2無1。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-052.jpg", //SRC
		"ゲット・ヴォルグ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"以下の2つを行う。<br>①あなたのデッキの上からカードを5枚見る。その中から白のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br>②ターン終了時まで、あなたのセンタールリグは「【自】：このルリグがアタックしたとき、あなたの場に《大装 ゲイヴォルグ》がある場合、対戦相手のシグニ1体を対象とし、それをトラッシュに置く。」を得る。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"執行下列2項。<br>①查看我方牌組頂5張卡牌。其中1張白色精靈公開並加入手牌，剩下的按任意順序返回牌組下方。<br>②直到回合結束時為止，我方中央分身獲得「自：此分身攻擊時，我方場上有《大裝 ゲイヴォルグ》的話，對方1隻精靈作對象，將其放置到廢棄區。」。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-053.jpg", //SRC
		"紅天 ヘーメラー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[赤]：あなたの場に＜天使＞のシグニが2体ある場合、対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。あなたの場に＜天使＞のシグニが3体以上ある場合、代わりに対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」紅1：我方場上＜天使＞精靈有2隻的話，對方1隻力量3000以下的精靈作對象，將其破壞。我方場上＜天使＞精靈有3隻的話，作為代替對方1隻力量5000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-054.jpg", //SRC
		"紅将 ヘイハチロウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋5000される。<br><br>【自】：このシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，此精靈力量+5000。<br><br>「自」：此精靈因戰鬥破壞對方1隻精靈時，此精靈會覺醒。（精靈覺醒在場上時為覺醒狀態）<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-055.jpg", //SRC
		"幻獣 バーファ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場に《幻獣神 バッファロー》があるかぎり、このシグニのパワーは＋7000される。<br><br>【出】：ターン終了時まで、このシグニのパワーをあなたの場にいるルリグのレベルの合計1につき＋1000する。", //JP_TEXT
		"「常」：我方場上有《幻獣神 バッファロー》時，此精靈力量+7000。<br><br>「出」：直到回合結束時為止，此精靈力量為我方場上分身等級合計每有1，+1000。"	//TW_TEXT
		],
	[
		"WXDi-P05-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-056.jpg", //SRC
		"紅将 ナベノツナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に赤のシグニが3種類以上あり対戦相手のエナゾーンにカードが2枚以上ある場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上紅色精靈有3種類以上時且對方能量區卡牌有2張以上的話，對方選擇自己能量區的1張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P05-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-057.jpg", //SRC
		"紅魔 デカラビア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：對方1隻精靈作對象，可以支付無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-058.jpg", //SRC
		"羅石 ジャスパー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のターンの間、このシグニがバニッシュされたとき、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：對方回合中，此精靈被破壞時，對方選擇自己能量區的1張卡牌放置到廢棄區。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以捨棄1張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-059.jpg", //SRC
		"コードアート Rンニング", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンにカードが2枚以上ある場合、手札から赤のスペルを1枚捨ててもよい。そうした場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュから赤のスペル1枚を対象とし、[赤]を支払ってもよい。そうした場合、それを手札に加える。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方能量區卡牌有2張以上的話，可以從手牌捨棄1張紅色魔法。若如此做，對方選擇自己能量區的1張卡牌放置到廢棄區。<br><br>「自」：此精靈攻擊時，我方廢棄區1張紅色魔法作對象，可以支付紅1。若如此做，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-060.jpg", //SRC
		"世紀末の爆走", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたの赤のシグニ1体を対象とし、それの下にカードが無い場合、このカードをそれの下に置く。<br><br>【常】：このカードの上にある赤のシグニは「【自】：あなたのアタックフェイズ開始時、【エナチャージ1】をする。」を得る。<br><br>【常】：このカードの上にある《コードアクセル ヒャッハー》のパワーを＋2000する。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"我方1隻紅色精靈作對象，其下方沒有卡牌的話，此卡牌放置到其下方。<br><br>「常」：此卡牌上方的紅色精靈獲得「自：我方攻擊階段開始時，【能量填充1】。」。<br><br>「常」：此卡牌上方的《コードアクセル ヒャッハー》的力量+2000。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-061.jpg", //SRC
		"蒼魔 マノミン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、手札を1枚捨ててもよい。そうした場合、対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「自」：我方攻擊階段開始時，可以捨棄1張手牌。若如此做，對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-062.jpg", //SRC
		"羅石 ベニトアイト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：ドローフェイズ以外であなたがカードを1枚引いたとき、手札を1枚捨ててもよい。そうした場合、カードを1枚引く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		"「自」(回合1)：抽牌階段以外我方抽1張牌時，可以捨棄1張手牌。若如此做，抽1張牌。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-063.jpg", //SRC
		"羅原 CZ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手はカードを1枚引き、あなたは対戦相手の手札を1枚見ないで選び、捨てさせる。<br><br>【出】[青]：あなたの場に《羅原姫 ZrO2》がある場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－4000する。", //JP_TEXT
		"「自」：此精靈攻擊時，對方抽1張牌，我方不查看對方手牌並選擇1張，將其捨棄。<br><br>「出」藍1：我方場上有《羅原姫 ZrO2》的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-4000。"	//TW_TEXT
		],
	[
		"WXDi-P05-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-064.jpg", //SRC
		"羅石 アウイナイト", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に青のシグニが3種類以上ある場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上藍色精靈有3種類以上的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-065.jpg", //SRC
		"羅植 ムスカリ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を2枚捨ててもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		"「生命爆發」：對方1隻精靈作對象，可以捨棄2張手牌。若如此做，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P05-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-066.jpg", //SRC
		"幻水 アナハゼ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの手札が7枚以上ある場合、対戦相手のレベル2以下のシグニ1体を対象とし、手札から青のカードを2枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方手牌有7張以上的話，對方1隻等級2以下的精靈作對象，可以捨棄2張藍色卡牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-067.jpg", //SRC
		"羅原 H2", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがライズされたとき、対戦相手の手札を1枚見ないで選び、捨てさせる。<br><br>【出】[青]：カードを1枚引く。", //JP_TEXT
		"「自」：此精靈被升階時，不查看對方手牌選擇1張，將其捨棄。<br><br>「出」藍1：抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-068.jpg", //SRC
		"HAMELN STEP", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"カードを2枚引き、あなたの手札から《大罠 ハーメルン》を1枚まで場に出す。その後、あなたの《大罠 ハーメルン》1体を対象とし、ターン終了時まで、それは「【常】：このシグニのアタックはこのシグニの効果によって無効にされない。」を得る。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		"抽2張牌，從我方手牌將最多1張《大罠 ハーメルン》出場。之後，我方1隻《大罠 ハーメルン》作對象，直到回合結束時為止，使其獲得「常：此精靈的攻擊不會因此精靈的效果無效。」。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，可以捨棄1張手牌。若如此做，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P05-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-069.jpg", //SRC
		"翠将 リトルジョン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場かエナゾーンに《翠将姫 ロビンフッド》があるかぎり、このシグニのパワーは＋5000される。<br><br>【常】：あなたの《翠将姫 ロビンフッド》は「【常】：このシグニがアタックする場合、代わりにあなたのシグニを2体まで裏向きにしてアタックし、このターン終了時、これによって裏向きにしたシグニを、同じ場所にシグニがない場合、表向きにする。」を得る。", //JP_TEXT
		"「常」：我方場上有《翠将姫 ロビンフッド》時，此精靈力量+5000。<br><br>「常」：我方的《翠将姫 ロビンフッド》獲得「常：此精靈攻擊的話，作為代替將我方最多2隻精靈翻轉並攻擊，本回合結束時，此方法翻轉的精靈相同的位置沒有精靈的話，將其正面向上。」。"	//TW_TEXT
		],
	[
		"WXDi-P05-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-070.jpg", //SRC
		"翠将 ウィリアムテル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、【エナチャージ1】をする。", //JP_TEXT
		"「自」：此精靈因戰鬥破壞對方1隻精靈時，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P05-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-071.jpg", //SRC
		"コードメイズ トチョー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のシグニが1体以上他のシグニゾーンに移動したとき、あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋2000する。<br><br>【出】：対戦相手のシグニ2体を対象とし、それらの場所を入れ替える。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「自」：對方精靈有1隻以上移動到其他精靈區時，我方1隻精靈作對象，直到回合結束時為止，將其力量+2000。<br><br>「出」：對方2隻精靈作對象，交換其位置。<br><br>「生命爆發」：【能量填充1】。本回合中，下一次我方因精靈受到傷害的話，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P05-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-072.jpg", //SRC
		"翠魔 オルトロス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、【エナチャージ1】をする。<br><br>【出】：対戦相手は【エナチャージ1】をしてもよい。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[無][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈被破壞時，【能量填充1】。<br><br>「出」：對方可以【能量填充1】。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付無2。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-073.jpg", //SRC
		"ツヴァイ＝イラクサ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー5000以上のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それをエナゾーンに置く。", //JP_TEXT
		"「生命爆發」：對方1隻力量5000以上的精靈作對象，可以支付無1，若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-074.jpg", //SRC
		"羅植 トケイソウ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのエナゾーンからあなたのセンタールリグと共通する色を持つシグニを1枚まで対象とし、それを手札に加える。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方能量區最多1張與我方中央分身持有共同顏色的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-075.jpg", //SRC
		"幻水 ポリプテルス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】エクシード3（あなたのルリグの下からカードを合計3枚ルリグトラッシュに置く）：あなたのエナゾーンからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」超越3：我方能量區1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-076.jpg", //SRC
		"幻獣 カメレオン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場にそれぞれ共通する色を持つルリグが2体いるかぎり、このシグニのパワーは＋2000される。3体いるかぎり、代わりにこのシグニのパワーは＋3000される。<br><br>【自】：このシグニがアタックしたとき、あなたの場にパワー15000以上のシグニがある場合、【エナチャージ1】をする。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②【エナチャージ1】をする。", //JP_TEXT
		"「常」：我方場上持有共同顏色的分身有2隻時，此精靈力量+2000。有3隻時，作為代替此精靈力量+3000。<br><br>「自」：此精靈攻擊時，我方場上有力量15000以上的精靈的話，【能量填充1】。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②【能量填充1】"	//TW_TEXT
		],
	[
		"WXDi-P05-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-077.jpg", //SRC
		"照地", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"以下の2つから1つを選ぶ。<br>①対戦相手のパワー8000以上のシグニ1体を対象とし、あなたのエナゾーンから＜天使＞のシグニ1枚をトラッシュに置き手札から＜天使＞のシグニを1枚捨てる。そうした場合、それをバニッシュする。<br>②あなたのエナゾーンから《翠天姫 ガイア》1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のレベル2以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"以下2項中選擇1項。<br>①對方1隻力量8000以上的精靈作對象，我方能量區1張＜天使＞精靈放置到廢棄區且從手牌捨棄1張＜天使＞精靈。若如此做，將其破壞。<br>②我方能量區1張《翠天姫 ガイア》作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻等級2以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-078.jpg", //SRC
		"凶天 ワルキューレ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたの《凶天姫 ヴァルキリー》1体がアタックしたとき、対戦相手のシグニ1体を対象とし、手札から＜天使＞のシグニを好きな枚数捨てる。ターン終了時まで、それのパワーをこの方法で捨てたカード1枚につき－4000する。<br><br>【起】[黒][ダウン]：あなたのトラッシュから黒の＜天使＞のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」(回合1)：我方場上的《凶天姫 ヴァルキリー》攻擊時，對方1隻精靈作對象，從手牌捨棄任意張＜天使＞精靈。直到回合結束時為止，以此方法捨棄的卡牌數每有1張，其力量-4000。<br><br>「起」黑1(橫置)：我方廢棄區1張黑色＜天使＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P05-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-079.jpg", //SRC
		"凶魔 マルファス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、手札から＜悪魔＞のシグニを2枚捨ててもよい。そうした場合、このシグニをエナゾーンからダウン状態で場に出す。", //JP_TEXT
		"「自」：此精靈被破壞時，可以從手牌捨棄2張＜惡魔＞精靈。若如此做，此精靈從能量區以橫置狀態出場。"	//TW_TEXT
		],
	[
		"WXDi-P05-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-080.jpg", //SRC
		"羅爆星 タイマーボム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[無][無]：あなたのトラッシュから＜宇宙＞のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「出」無2：我方廢棄區1張＜宇宙＞精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P05-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-081.jpg", //SRC
		"凶将 カエサル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[黒]：あなたのトラッシュにカードが7枚以上ある場合、ターン終了時まで、このシグニは「【常】：このシグニは正面のシグニのパワーが5000以下であるかぎり、【アサシン】を得る。」を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「出」黑1：我方廢棄區卡牌有7張以上的話，直到回合結束時為止，此精靈獲得「常：此精靈正面的精靈力量是5000以下時，獲得【暗殺】。」。"	//TW_TEXT
		],
	[
		"WXDi-P05-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-082.jpg", //SRC
		"凶魔 テューポーン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋7000される。<br><br>【出】エクシード3（あなたのルリグの下からカードを合計3枚ルリグトラッシュに置く）：このシグニは覚醒する。<br>（シグニは覚醒すると場にあるかぎり覚醒状態になる）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，此精靈的力量+7000。<br><br>「出」超越3：此精靈覺醒。<br><br>「生命爆發」：對方1隻精靈作對象，可以捨棄1張手牌。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P05-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-083.jpg", //SRC
		"中装 バックラー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－15000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「生命爆發」：對方1隻精靈作對象，可以支付無1。若如此做，直到回合結束時為止，將其力量-15000。"	//TW_TEXT
		],
	[
		"WXDi-P05-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-084.jpg", //SRC
		"羅原 BP", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】エナゾーンから＜原子＞のシグニ1枚をトラッシュに置き、手札から＜原子＞のシグニを1枚捨てる：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」能量區1張＜原子＞精靈放置到廢棄區，從手牌捨棄1張＜原子＞精靈：對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。"	//TW_TEXT
		],
	[
		"WXDi-P05-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-085.jpg", //SRC
		"凶天 タルタロス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、あなたのトラッシュから[ガード]を持たないシグニ3枚を対象とし、それらをデッキに加えてシャッフルする。<br><br>【起】[ダウン]：あなたのデッキの上からカードを5枚トラッシュに置く。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「自」：我方回合結束時，我方廢棄區3張不持有防禦標記的精靈作對象，將其加入牌組並洗切。<br><br>「起」(橫置)：我方牌組頂5張卡牌放置到廢棄區。<br><br>「生命爆發」：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P05-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-086.jpg", //SRC
		"ムーン・バイツ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのトラッシュから＜宇宙＞のシグニ1枚を対象とし、それを手札に加える。その後、それが《羅星姫 イクリプス》の場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br><br>【常】：このカードがデッキかトラッシュにあるかぎり、あなたの効果1つによってこのカードを参照する場合、レベル1のシグニとして扱ってもよい。<br><br>【ライフバースト】：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"我方廢棄區1張＜宇宙＞精靈作對象，將其加入手牌。之後，若是《羅星姫 イクリプス》的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。<br><br>「常」：此卡牌在牌組或廢棄區時，因我方1個效果要參照此卡牌的話，可以視作等級1的精靈。<br><br>「生命爆發」：對方1隻等級2以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P05-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-087.jpg", //SRC
		"聖凶天 マスティマ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或黑）"	//TW_TEXT
		],
	[
		"WXDi-P05-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-088.jpg", //SRC
		"聖凶天 ウリエ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或黑）"	//TW_TEXT
		],
	[
		"WXDi-P05-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-089.jpg", //SRC
		"聖蒼将 ヨリシゲ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或藍）"	//TW_TEXT
		],
	[
		"WXDi-P05-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-090.jpg", //SRC
		"聖蒼将 トウタ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或藍）"	//TW_TEXT
		],
	[
		"WXDi-P05-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-091.jpg", //SRC
		"羅原 Se", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或黑）"	//TW_TEXT
		],
	[
		"WXDi-P05-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-092.jpg", //SRC
		"羅原 I", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或黑）"	//TW_TEXT
		],
	[
		"WXDi-P05-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-093.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D08-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-001.jpg", //SRC
		"新月の巫女 タマヨリヒメ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-002.jpg", //SRC
		"三日月の巫女 タマヨリヒメ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-003.jpg", //SRC
		"半月の巫女 タマヨリヒメ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-004.jpg", //SRC
		"奏月の巫女 タマヨリヒメ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：このルリグがアタックしたとき、あなたのアップ状態のシグニ2体をダウンし[白][無]を支払ってもよい。そうした場合、このルリグをアップし、ターン終了時まで、このルリグは能力を失う。<br><br>【出】：あなたのデッキの上からカードを4枚見る。その中からカードを2枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【起】（ゲーム1）[白(0)]：ターン終了時まで、このルリグは「【自】（ターン1）：このルリグがアタックしたとき、あなたのすべてのシグニをアップする。」を得る。", //JP_TEXT
		"「自」(回合1)：此分身攻擊時，可以橫置我方2隻豎直狀態的精靈並支付白1無1。若如此做，豎直此分身，直到回合結束時為止，此分身失去能力。<br><br>「出」：查看我方牌組頂4張卡牌。將其中最多2張卡牌加入手牌，剩下的按任意順序放回牌組下方。<br><br>「起」(遊戲1)白0：直到回合結束時為止，此分身獲得「自(回合1)：此分身攻擊時，豎直我方所有精靈。」。"	//TW_TEXT
		],
	[
		"WXDi-D08-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-005.jpg", //SRC
		"花代・零", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-006.jpg", //SRC
		"花代・椿", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。カードを1枚引き、手札を1枚捨てる。", //JP_TEXT
		"「出」：對方1隻力量8000以下的精靈作對象，將其破壞。抽1張牌，捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-D08-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-007.jpg", //SRC
		"花代・蘭", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[無]：対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「出」無1：對方能量區1張與對方中央分身不持有共同顏色的卡牌作對方，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-D08-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-008.jpg", //SRC
		"闘娘 緑姫", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-009.jpg", //SRC
		"緑姫・芽生", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：【エナチャージ2】（あなたのデッキの上からカードを2枚エナゾーンに置く）", //JP_TEXT
		"「出」：【能量填充2】(從我方牌組頂將2張卡牌放置到能量區)"	//TW_TEXT
		],
	[
		"WXDi-D08-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-010.jpg", //SRC
		"緑姫・増強", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】[無][無]：ターン終了時まで、あなたのすべてのシグニのパワーを＋5000する。", //JP_TEXT
		"「出」：本回合中，下一次我方受到傷害的話，作為代替不會受到傷害。<br><br>「出」無2：直到回合結束時為止，我方所有精靈力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-D08-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-011.jpg", //SRC
		"GO TO the TOP!", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤白", //COLOR
		"", //LEVEL
		"《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に白と赤のルリグがいる<br><br>あなたのデッキからシグニ1枚を探して公開し手札に加え、デッキをシャッフルする。対戦相手のセンタールリグがレベル3以上の場合、対戦相手は自分のエナゾーンからカード3枚を選びトラッシュに置く。（2枚以下の場合、それらをすべて選ぶ）", //JP_TEXT
		"「使用條件」我方場上有白色和紅色分身<br><br>從我方牌組找1張精靈公開並加入手牌，洗切牌組。對方中央分身是等級3以上的話，對方選擇自己能量區的3張卡牌放置到廢棄區。（2張以下的話，需要選擇全部）"	//TW_TEXT
		],
	[
		"WXDi-D08-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-012.jpg", //SRC
		"burning curiosity", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このピースを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>対戦相手のシグニ1体を対象とし、それをバニッシュする。追加でエクシード4を支払っていた場合、代わりにそれをゲームから除外する。", //JP_TEXT
		"使用此PIECE時，可以追加超越4作為追加費用。（我方分身下方合計4張卡牌放置到分身廢棄區）<br><br>對方1隻精靈作對象，將其破壞。追加支付超越4的話，作為代替將其從遊戲中除外。"	//TW_TEXT
		],
	[
		"WXDi-D08-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-013.jpg", //SRC
		"聖天 アグライア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、手札から＜天使＞のシグニを2枚捨ててもよい。そうした場合、カードを3枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，可以從手牌捨棄2張＜天使＞精靈。若如此做，抽3張牌。"	//TW_TEXT
		],
	[
		"WXDi-D08-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-014.jpg", //SRC
		"聖天 ハニエル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：あなたのデッキの上からカードを3枚見る。その中からレベル2以下のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」無1：查看我方牌組頂3張卡牌。將其中1張等級2以下的精靈公開並加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：看我方牌組頂3張卡牌。將其中1張精靈公開並加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-D08-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-015.jpg", //SRC
		"小装 ローメイル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」無1：對方1隻力量3000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D08-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-016.jpg", //SRC
		"聖天 ミカエル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが左か右のシグニゾーンにあるかぎり、あなたの中央のシグニゾーンにあるシグニのパワーを＋3000する。", //JP_TEXT
		"「常」：此精靈在左或右的精靈區時，我方中央精靈區的精靈的力量+3000。"	//TW_TEXT
		],
	[
		"WXDi-D08-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-017.jpg", //SRC
		"中装 ボウ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「生命爆發」：對方1隻力量8000以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-D08-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-018.jpg", //SRC
		"聖天 アテナ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[白][無][無]：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」白1無2：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D08-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-019.jpg", //SRC
		"聖天 アークアテナ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に＜アーム＞のシグニがある場合、このシグニをアップする。<br><br>【起】[白][ダウン]：対戦相手のパワー8000以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上有＜武裝＞精靈的話，豎直此精靈。<br><br>「起」白1(橫置)：對方1隻力量8000以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-D08-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-020.jpg", //SRC
		"大得装 トレット", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[赤][無]：あなたのトラッシュからレベル1の赤のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「出」紅1無1：我方廢棄區1張等級1的紅色精靈作對象，將其加入手牌。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D08-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-021.jpg", //SRC
		"サーバント #", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D08-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-022.jpg", //SRC
		"ゲット・ビッグバイブル", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのデッキの上からカードを7枚見る。その中からシグニを2枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"查看我方牌組7張卡牌。公開其中最多2張精靈並加入手牌，剩下的洗切放回牌組下方。<br><br>「生命爆發」： 對方1隻豎直狀態的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-D08-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-023.jpg", //SRC
		"聖天姫 アークゲイン", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、このシグニは【シャドウ】を得る。（このシグニは対戦相手によって対象にされない）<br><br>【出】[白]：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②カードを1枚引く。", //JP_TEXT
		"「常」：對方回合中，此精靈獲得【暗影】。（此精靈不會成為對方的對象）<br><br>「出」白1：查看我方牌組頂3張卡牌。將其中1張精靈卡公開並加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-001.jpg", //SRC
		"一覇一絡", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】（ターン1）：このルリグがアタックしたとき、対戦相手のライフクロス1枚をクラッシュする。対戦相手がそのカードのライフバーストを使用することを選んだ場合、[無][無]を支払ってもよい。そうした場合、そのカードのライフバーストは発動しない。』", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方1隻等級3的分身作對象，直到回合結束時為止，使其獲得以下能力。<br>「自」(回合1)：此分身攻擊時，擊潰對方1張生命護甲。對方選擇使用該卡牌的生命爆發時，可以支付無2。若如此做，該卡牌的生命爆發不會發動。"	//TW_TEXT
		],
	[
		"WXDi-P06-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-002.jpg", //SRC
		"ピーピング・フューチャー", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】（ターン1）：このルリグがアタックしたとき、対戦相手の手札を見て1枚選び、捨てさせる。次の対戦相手のアップフェイズに、対戦相手が[無][無][無]を支払わないかぎり、対戦相手のセンタールリグはアップしない。』", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方1隻等級3的分身作對象，直到回合結束時為止，使其獲得以下能力。<br>「自」(回合1)：此分身攻擊時，查看對方手牌並選擇1張，將其捨棄。下一個對方的豎直階段，對方不支付無3的話，對方的中央分身不能豎直。"	//TW_TEXT
		],
	[
		"WXDi-P06-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-003.jpg", //SRC
		"マイアズマ・ラビリンス", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>以下の4つからあなたのセンタールリグのレベル1につき1つまで選ぶ。<br>①対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。<br>②あなたのトラッシュからシグニ1枚を対象とし、それを場に出す。<br>③あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。<br>④各プレイヤーは自分のデッキの上からカードを7枚トラッシュに置く。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方中央分身等級每有1則從以下4項中最多選擇1項。<br>①對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。<br>②我方廢棄區1張精靈作對象，將其出場。<br>③我方 廢棄區1張精靈作對象，將其加入手牌。<br>④各玩家將自己牌組上方7張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P06-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-004.jpg", //SRC
		"イノセント・ワンピース", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このゲームの間、あなたのセンタールリグは以下の能力を得る。（グロウしても新しいセンタールリグは能力を得たままである）<br>『【起】【メインフェイズ】【アタックフェイズ】エクシード4（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。』", //JP_TEXT
		"本局遊戲中，我方中央分身獲得以下能力。(成長為新的中央分身也會獲得能力)<br>「起」(主要階段)(攻擊階段)超越4： 對方1隻精靈作對象，直到回合結束時為止，使其失去能力。"	//TW_TEXT
		],
	[
		"WXDi-P06-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-005.jpg", //SRC
		"グリーン・ビッグス", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このゲームの間、あなたのセンタールリグは以下の能力を得る。（グロウしても新しいセンタールリグは能力を得たままである）<br>『【起】【メインフェイズ】【アタックフェイズ】エクシード4（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）：あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋10000する。』", //JP_TEXT
		"本局遊戲中，我方中央分身獲得以下能力。(成長為新的中央分身也會獲得能力)<br>「起」(主要階段)(攻擊階段)超越4：我方1隻精靈作對象，直到回合結束時為止，將其力量+10000。"	//TW_TEXT
		],
	[
		"WXDi-P06-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-006.jpg", //SRC
		"Garden of Singularity", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"カードを1枚引く。このゲームの間、あなたは以下の能力を得る。<br>『【常】：あなたが【ガード】する際、[ガード]を持つカードを1枚捨てる代わりに手札を3枚捨ててもよい。』", //JP_TEXT
		"抽1張牌，本局遊戲中，我方獲得以下能力。<br>「常」：我方在「防禦」時，捨棄1張持有防禦標記的卡牌作為代替可以捨棄3張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-007.jpg", //SRC
		"閃光へ飛翔 レイ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、このターンにあなたが効果によってカードを2枚以上引いていた場合、青のシグニ1体を対象とし、手札を3枚捨ててもよい。そうした場合、ターン終了時まで、それは【アサシン】を得る。<br><br>【出】：カードを1枚引き【エナチャージ1】をする。<br><br>【起】（ゲーム1）[青(0)]：ターン終了時まで、このルリグは「【自】（ターン2）：対戦相手のライフクロス1枚がクラッシュされたとき、カードを1枚引くか、対戦相手は手札を1枚捨てる。」を得る。", //JP_TEXT
		"「自」：我方攻擊階段開始時，本回合因我方效果抽牌2張以上的話，1隻藍色精靈作對象，可以捨棄3張手牌。若如此做，直到回合結束時為止，使其獲得【暗殺】。<br><br>「出」：抽1張牌並【能量填充1】。<br><br>「起」(遊戲1)藍0：直到回合結束時為止，此分身獲得「自(回合2)：對方1張生命護甲被擊潰時，抽1張牌或對方捨棄1張手牌。」"	//TW_TEXT
		],
	[
		"WXDi-P06-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-008.jpg", //SRC
		"DJ.LOVIT 3rdVerse-ALT", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、対戦相手のエナゾーンにカードが3枚以上ある場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【出】：対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【起】（ゲーム1）[赤(0)]：あなたの赤のシグニ1体を対象とし、ターン終了時まで、それは【ダブルクラッシュ】を得る。", //JP_TEXT
		"「自」：我方回合結束時，對方能量區卡牌有3張以上的話，對方在自己的能量區選擇1張卡牌放置到廢棄區。<br><br>「出」：對方在自己的能量區選擇1張卡牌放置到廢棄區。<br><br>「起」(遊戲1)紅0：我方1隻紅色精靈作對象，直到回合結束時為止，使其獲得【雙重擊潰】。"	//TW_TEXT
		],
	[
		"WXDi-P06-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-009.jpg", //SRC
		"キセキオコス バン", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、このルリグの下からカード1枚をルリグトラッシュに置いてもよい。そうした場合、【エナチャージ1】をする。<br><br>【出】：このターン、あなたの中央のシグニゾーンにあるシグニは【ランサー】を得る。<br><br>【起】（ゲーム1）[緑][緑]：あなたの緑のシグニ1体を対象とし、ターン終了時まで、それは【Sランサー】を得る。（【Sランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスがある場合はそれを1枚クラッシュする。無い場合は対戦相手にダメージを与える）", //JP_TEXT
		"「自」：我方攻擊階段開始時，可以將此分身下方的1張卡牌放置到分身廢棄區。若如此做，【能量填充1】。<br><br>「出」：本回合中，我方中央精靈區的精靈獲得【槍兵】。<br><br>「起」(遊戲1)綠2：我方1隻綠色精靈作對象，直到回合結束時為止，使其獲得【S槍兵】。(持有S槍兵的精靈因戰鬥破壞精靈時，對方有生命護甲的話則擊潰1張生命護甲，沒有的話則給予對方傷害)"	//TW_TEXT
		],
	[
		"WXDi-P06-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-010.jpg", //SRC
		"VOGUE3-EX サンガ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニが持つ色が合計3種類以上ある場合、以下の2つから1つを選ぶ。①あなたのエナゾーンからカード1枚を対象とし、それを手札に加える。②【エナチャージ1】<br><br>【出】：【エナチャージ2】<br><br>【起】（ゲーム1）[緑(0)]：対戦相手のパワー12000以上のシグニ1体を対象とし、それをバニッシュする。あなたのエナゾーンからカード1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上精靈持有顏色合計3種類以上的話，以下2項中選擇1項。①我方能量區1張卡牌作對象，將其加入手牌。②【能量填充1】<br><br>「出」：【能量填充2】<br><br>「起」(遊戲1)綠0：對方1隻力量12000以上的精靈作對象，將其破壞。我方能量區1張卡牌作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-011.jpg", //SRC
		"炎唱火 遊月・参", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンからカード1枚を対象とし、それをトラッシュに置いてもよい。そうした場合、対戦相手は【エナチャージ1】をしてもよい。<br><br>【出】：対戦相手は自分のシグニ1体を選びバニッシュする。<br><br>【起】（ゲーム1）[赤(0)]：【エナチャージ2】をする。その後、対戦相手のエナゾーンにカードが4枚以上ある場合、対戦相手のエナゾーンからカードを2枚まで対象とし、それらをトラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方能量區1張卡牌作對象，可以將其放置到廢棄區。若如此做，對方可以【能量填充1】。<br><br>「出」：對方選擇自己1隻精靈破壞。<br><br>「起」(遊戲1)紅0：【能量填充2】。之後，對方能量區卡牌是4張以上的話，對方能量區最多2張卡牌作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P06-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-012.jpg", //SRC
		"コード・ピルルク・xi", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの手札が対戦相手より3枚以上多い場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。6枚以上多い場合、代わりにターン終了時まで、それのパワーを－6000する。<br><br>【出】：カードを2枚引く。<br><br>【起】（ゲーム1）[青(0)]：対戦相手のセンタールリグのレベル以下の数字1つを宣言する。対戦相手の手札を見て、[ガード]を持たず宣言した数字と同じレベルを持つすべてのシグニを捨てさせる。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方手牌比對方多3張以上的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。多6張以上的話，作為代替直到回合結束時為止，將其力量-6000。<br><br>「出」：抽2張牌。<br><br>「起」(遊戲1)藍0：宣言1個在對方中央分身等級以下的數字。查看對方手牌，捨棄不持有防禦標記且與宣言數字持有相同等級的精靈。"	//TW_TEXT
		],
	[
		"WXDi-P06-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-013.jpg", //SRC
		"狂騒の閻魔 ウリス", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュから黒のシグニを2枚まで対象とし、それらを手札に加える。<br><br>【起】（ターン1）[黒(0)]：1～3の数字1つを宣言する。あなたのデッキの上からカードを宣言した数字に等しい枚数トラッシュに置く。<br><br>【起】（ゲーム1）手札を2枚捨てる：ターン終了時まで、このルリグは「【自】（ターン1）：このルリグがアタックしたとき、あなたのトラッシュから【ライフバースト】を持たないカード1枚を対象とし、それをライフクロスに加える。」を得る。", //JP_TEXT
		"「出」：我方廢棄區最多2張黑色精靈作對象，將其加入手牌。<br><br>「起」(回合1)黑0：宣言數字1～3的1個。從我方牌組上方將與宣言數相同的卡牌數放置到廢棄區。<br><br>「起」(遊戲1)捨棄2張手牌：直到回合結束時為止，此分身獲得「自(回合1)：此分身攻擊時，我方廢棄區1張不持有生命爆發標記的卡牌作對象，將其加入生命護甲。」。"	//TW_TEXT
		],
	[
		"WXDi-P06-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-014.jpg", //SRC
		"遊月・零", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-015.jpg", //SRC
		"炎唱 遊月・壱", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-016.jpg", //SRC
		"炎唱 遊月・弐", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-017.jpg", //SRC
		"コード・ピルルク", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-018.jpg", //SRC
		"コード・ピルルク・K", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-019.jpg", //SRC
		"コード・ピルルク・M", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-020.jpg", //SRC
		"閻魔 ウリス", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-021.jpg", //SRC
		"灼熱の閻魔 ウリス", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-022.jpg", //SRC
		"衆合の閻魔 ウリス", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-023.jpg", //SRC
		"ゆかゆか☆どじゃーん", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】：このターン終了時、対戦相手が[無]を支払うか手札を1枚捨てないかぎり、このカードをルリグデッキに戻す。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「出」：本回合結束時，對方不支付無1或捨棄1張手牌的話，此卡牌返回分身牌組。"	//TW_TEXT
		],
	[
		"WXDi-P06-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-024.jpg", //SRC
		"まほまほ☆ずーん", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[黒][無][無][無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【自】：このシグニがアタックしたとき、ターン終了時まで、このシグニのパワーを－20000する。」を得る。", //JP_TEXT
		"「出」： 對方1隻精靈作對象，將其破壞。<br><br>「出」黑1無3：對方1隻精靈作對象，直到回合結束時為止，使其獲得「自：此精靈攻擊時，直到回合結束時為止，此精靈力量-20000。」。"	//TW_TEXT
		],
	[
		"WXDi-P06-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-025.jpg", //SRC
		"花代・桜", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：【エナチャージ1】", //JP_TEXT
		"「出」：對方1隻力量5000以下的精靈作對象，將其破壞。<br><br>「出」：【能量填充1】"	//TW_TEXT
		],
	[
		"WXDi-P06-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-026.jpg", //SRC
		"花代・柘榴", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】手札を4枚捨てる：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻力量12000以下的精靈作對象，將其破壞。<br><br>「出」捨棄4張手牌：對方 1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-027.jpg", //SRC
		"花代・竜胆", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：カードを2枚引くか【エナチャージ2】をする。<br><br>【出】：あなたのレベル3のシグニ1体を対象とし、ターン終了時まで、それは【ダブルクラッシュ】を得る。<br>（【ダブルクラッシュ】を持つシグニがアタックによってダメージを与えた場合ライフクロスを1枚ではなく2枚クラッシュする）", //JP_TEXT
		"「出」：抽2張牌或【能量填充2】。<br><br>「出」：我方1隻等級3以下的精靈作對象，直到回合結束時為止，使其獲得【雙重擊潰】。"	//TW_TEXT
		],
	[
		"WXDi-P06-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-028.jpg", //SRC
		"緑姫・雨槍", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのレベル2以下のシグニ1体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「出」：我方1隻等級2以下的精靈作對象，直到回合結束時為止，使其獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-P06-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-029.jpg", //SRC
		"緑姫・半月", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[無]：あなたのエナゾーンからシグニ1枚を対象とし、それを手札に加える。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「出」無1：我方能量區1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-030.jpg", //SRC
		"緑姫・修復", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。<br><br>【出】[緑][無][無][無]：あなたのトラッシュから【ライフバースト】を持たないカード1枚を対象とし、それをライフクロスに加える。", //JP_TEXT
		"「出」：洗切我方牌組後將最上方的卡牌加入生命護甲。<br><br>「出」綠1無3：我方廢棄區1張不持有生命爆發標記的卡牌作對象，將其加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P06-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-031.jpg", //SRC
		"コードハート リメンバ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、対戦相手の、センタールリグとシグニの【起】能力の使用コストは[無]増える。<br><br>【常】：このシグニがダウン状態であるかぎり、このシグニのパワーは＋3000され、対戦相手は追加で[無]を支払わないかぎり【ガード】ができない。<br><br>【起】[ダウン]：あなたのライフクロスの一番上を見る。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②カードを1枚引く。", //JP_TEXT
		"「常」：對方回合中，對方的中央分身和精靈的「起」能力使用費用增加無1。<br><br>「常」：此精靈是橫置狀態時，此精靈力量+3000，對方不追加支付無1的話不能【防禦】。<br><br>「起」橫置：查看我方生命護甲最上方的卡牌。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-032.jpg", //SRC
		"コードアンシエンツ オシリス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、レベルがあなたの場にいる白のルリグの数以下の対戦相手のシグニ1体を対象とし、[白][白]を支払ってもよい。そうした場合、それを手札に戻す。<br><br>【起】[白]：次の対戦相手のターン終了時まで、このシグニは「【常】：対戦相手のターンの間、【シャドウ】を得る。」を得る。<br><br>【起】[白][白][無][無][無] トラッシュにあるこのカードをゲームから除外する：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻等級是我方場上白色分身數以下的精靈作對象，可以支付白2。若如此做，將其返回手牌。<br><br>「起」白1：直到下一個對方回合結束時為止，此精靈獲得「常：對方回合中，獲得【暗影】。」。<br><br>「起」白2無3廢棄區的此卡牌從遊戲中除外：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-033.jpg", //SRC
		"幻水姫 シィラ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時。あなたと対戦相手のライフクロスの枚数が同じ場合、カードを1枚引く。<br><br>【自】（ターン1）：対戦相手のターンの間、対戦相手のシグニ1体がアタックしたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。<br><br>【出】[白]：あなたのデッキの上からカードを3枚見る。その中からカードを1枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方和對方生命護甲數目相同的話，抽1張牌。<br><br>「自」(回合1)：對方回合中，1隻精靈攻擊時，對方1隻精靈作對象，直到回合結束時為止，使其失去能力。<br><br>「出」白1：查看我方牌組上3張卡牌。其中最多1張卡牌加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P06-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-034.jpg", //SRC
		"紅将姫 クーフーリン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたのトラッシュにある＜武勇＞のシグニ2枚を下に重ねて場に出す（空いているシグニゾーンに出す）<br><br>【常】：このシグニがバニッシュされる場合、代わりに「アップ状態のこのシグニをダウンし、このシグニの下からカード1枚とあなたのエナゾーンからカード1枚をトラッシュに置く。」をしてもよい。<br><br>【常】：あなたの中央のシグニゾーンにあるシグニのパワーを＋3000する。<br><br>【ライフバースト】：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「升階」我方廢棄區2張＜武勇＞精靈重疊下方出場(出場到空的精靈區)<br><br>「常」：此精靈被破壞的話，作為代替可以將「豎直狀態的此精靈橫置，此精靈下方1張卡牌和我方能量區1張卡牌放置到廢棄區。」。<br><br>「常」：我方中央精靈區的精靈力量+3000。<br><br>「生命爆發」：對方1隻力量10000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-035.jpg", //SRC
		"紅魔姫 シヴァ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのメインフェイズ以外でこのシグニが場を離れたとき、カードを1枚引く。<br><br>【出】：手札をすべて捨てる。その後、この方法でカードを2枚捨てた場合、対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。3枚以上捨てた場合、代わりに対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方主要階段以外此精靈離場時，抽1張牌。<br><br>「出」：捨棄所有手牌。之後，通過此方法捨棄2張卡牌的話，對方1隻力量10000以下的精靈作對象，將其破壞。3張以上的話，作為代替對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-036.jpg", //SRC
		"羅輝石 ブルーアダマス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのデッキの一番上を公開し、カードを1枚引く。その後、この効果で公開したカードが＜宝石＞のシグニの場合、[青][赤][無]を支払ってもよい。そうした場合、対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，公開我方牌組上的卡牌，抽1張牌。之後，通過此效果公開的卡牌是＜寶石＞精靈的話，可以支付藍1紅1無1。若如此做，對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-037.jpg", //SRC
		"幻水姫 エルドラ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニのパワーはあなたの手札2枚につき＋1000される。<br><br>【自】：このシグニがアタックしたとき、あなたのデッキの上からカードを3枚見る。その中から【ライフバースト】を持つカードを好きな枚数公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「常」：此精靈力量為我方手牌每有2張則+1000。<br><br>「自」：此精靈攻擊時，查看我方牌組上方3張卡牌。其中持有生命爆發標記的任意張卡牌公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P06-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-038.jpg", //SRC
		"翠美姫 アン//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのエナゾーンから効果によってカード1枚が他の領域に移動したとき、【エナチャージ1】をする。<br><br>【出】[白]：次の対戦相手のターン終了時まで、このシグニのパワーを＋2000し、このシグニは【シャドウ（レベル3以上のシグニ）】を得る。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「自」(回合1)：我方能量區因效果有1張卡牌移動到其他區域時，【能量填充1】。<br><br>「出」白1：直到下一個對方回合結束時為止，此精靈力量+2000，此精靈獲得【暗影(等級3以上精靈)】。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-039.jpg", //SRC
		"羅植姫 ラベンダー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのメインフェイズ以外でこのシグニが場を離れたとき、あなたのトラッシュからこのシグニの下にあったシグニ1枚を対象とし、[無][無]を支払ってもよい。[無][無]を支払った場合、それをダウン状態で場に出す。それの【出】能力は発動しない。[無][無]を支払わなかった場合、それを手札に加える。<br><br>【出】：あなたのエナゾーンから[ガード]を持たないシグニ1枚を対象とし、それをこのシグニの下に置く。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方主要階段以外此精靈離場時，從我方廢棄區將此精靈下方的1張精靈作對象，可以支付無2。支付無2的話，將其以橫置狀態出場。其「出」能力不發動。不支付無2的話，將其加入手牌。<br><br>「出」：我方能量區1張不持有防禦標記的精靈作對象，將其放置到此精靈下方。<br><br>「生命爆發」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-040.jpg", //SRC
		"凶天姫 タマ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにカードが10枚以上あるかぎり、このシグニのパワーは＋3000され、このシグニは【シャドウ（レベル2以下のシグニ）】を得る。<br><br>【常】：あなたの、場とエナゾーンにあるシグニは追加で黒を得る。<br><br>【自】（ターン1）：あなたのメインフェイズ以外であなたの黒のシグニ1体が場を離れたとき、対戦相手のデッキの上からカードを2枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「常」：我方廢棄區卡牌有10張以上時，此精靈力量+3000，此精靈獲得【暗影(等級2以下精靈)】。<br><br>「常」：我方場上和能量區的精靈追加獲得黑色。<br><br>「自」(回合1)：我方主要階段以外我方1隻黑色精靈離場時，對方牌組上方2張卡牌放置到廢棄區。<br><br>「生命爆發」：對方1隻等級2以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-041.jpg", //SRC
		"凶魔姫 ルシファル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをあなたの場にいる黒のルリグ1体につき－2000する。この効果によってそれのパワーが0以下になった場合、対戦相手のデッキの上からカードを2枚トラッシュに置く。<br><br>【起】（ターン1）手札を2枚捨てる：あなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻精靈作對象，直到回合結束時為止，其力量為我方場上每有1隻黑色分身則-2000。通過此效果使其力量為0以下的話，對方牌組上方2張卡牌放置到廢棄區。<br><br>「起」(回合1)捨棄2張手牌：我方廢棄區1張黑色精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-042.jpg", //SRC
		"コードアンシエンツ イオナ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニの正面のシグニは可能ならばアタックしなければならない。（他のシグニよりも先にアタックしなければならない）<br><br>【自】：このシグニがアタックしたとき、表記されているパワーと異なるパワーの対戦相手のシグニ1体を対象とし、[黒][黒]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【出】：このシグニがトラッシュから場に出た場合、対戦相手のシグニ1枚を対象とし、ターン終了時まで、それのパワーを－1000する。", //JP_TEXT
		"「常」：此精靈正面的精靈可以攻擊的話必須攻擊(必須比其他精靈先攻擊)<br><br>「自」：此精靈攻擊時，對方1張與表記力量不同力量的精靈作對象，可以支付黑2。若如此做，將其破壞。<br><br>「出」：此精靈從廢棄區出場的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-1000。"	//TW_TEXT
		],
	[
		"WXDi-P06-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-043.jpg", //SRC
		"聖天 マルティエル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のトラッシュからカード1枚を対象とし、それをデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：對方廢棄區1張卡牌作對象，將其放置到牌組下方。<br><br>「生命爆發」：查看我方牌組頂3張卡牌。將其中1張精靈公開加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P06-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-044.jpg", //SRC
		"羅星 サシェ//メモリア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】手札から＜宇宙＞のシグニを1枚捨てる：あなたのデッキの上からカードを5枚見る。その中から＜宇宙＞のシグニ1枚を公開して手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」從手牌捨棄1張＜宇宙＞精靈：查看我方牌組頂5張卡牌。將其中1張＜宇宙＞精靈公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P06-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-045.jpg", //SRC
		"コードメイズ ユキ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：以下の2つから1つを選ぶ。<br>①対戦相手のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。<br>②対戦相手のシグニ1体を対象とし、それを他のシグニゾーン1つに配置する。（すでにシグニのあるシグニゾーンには配置できない）", //JP_TEXT
		"「出」：以下2項中選擇1項。<br>①對方1隻精靈作對象，直到回合結束時為止，使其失去能力。<br>②對方1隻精靈作對象，將其配置到1個其他的精靈區。(不能配置到已經有精靈的精靈區)"	//TW_TEXT
		],
	[
		"WXDi-P06-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-046.jpg", //SRC
		"聖将 ラウンド", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのライフクロスが2枚以下であるかぎり、このシグニのパワーは＋4000される。<br><br>【常】：あなたのライフクロスが0枚であるかぎり、このシグニは「【常】：対戦相手のターンの間、対戦相手の効果によってバニッシュされない。」を得る。（シグニとのバトルやパワーが0以下になった場合はバニッシュされる）", //JP_TEXT
		"「常」：我方生命護甲是2張以下時，此精靈力量+4000。<br><br>「常」：我方生命護甲是0張時，此精靈獲得「常：對方回合中，不會被對方的效果破壞。」。"	//TW_TEXT
		],
	[
		"WXDi-P06-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-047.jpg", //SRC
		"聖魔 サキュ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、このシグニを場からトラッシュに置いてもよい。そうした場合、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「自」：對方攻擊階段開始時，對方1隻精靈作對象，此精靈可以從場上放置到廢棄區。若如此做，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「生命爆發」： 對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-048.jpg", //SRC
		"聖魔 オセ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：あなたのデッキの上からカードを5枚見る。その中からカードを3枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「生命爆發」： 查看我方牌組頂5張卡牌。將其中最多3張卡牌加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P06-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-049.jpg", //SRC
		"中装 ミカガミ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのルリグ1体がアタックしたとき、アップ状態のこのシグニをダウンしてもよい。そうした場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方1隻分身攻擊時，可以將豎直狀態的此精靈橫置。若如此做，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-050.jpg", //SRC
		"ゲット・リメンバ―", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"以下の2つを行う。<br>①あなたのデッキの上からカードを3枚見る。その中から好きな枚数のカードを好きな順番でデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。<br>②カードを1枚引く。ターン終了時まで、あなたの場に《コードハート リメンバ//メモリア》がある場合、代わりにカードを2枚引く。", //JP_TEXT
		"執行以下2項。<br>①查看我方牌組頂3張卡牌。將其中任意張卡牌按任意順序放回牌組上方，剩下的按任意順序放回牌組下方。<br>②抽1張牌。我方場上有《コードハート リメンバ//メモリア》的話，作為代替抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-051.jpg", //SRC
		"紅将 イモコ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニのパワーは他のシグニ1体につき＋1000される。（対戦相手の場にあるシグニも参照する）", //JP_TEXT
		"「常」：此精靈的力量為每有1隻其他精靈則+1000。(對方場上的精靈也會參照)"	//TW_TEXT
		],
	[
		"WXDi-P06-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-052.jpg", //SRC
		"紅魔 アリトン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがコストか効果によって場からトラッシュに置かれたとき、対戦相手のパワー5000以下のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈因費用或效果從場上放置到廢棄區時，對方1隻力量5000以下的精靈作對象，可以支付無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-053.jpg", //SRC
		"小装 ボーニャ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[無][無][無]：あなたのデッキの上からカードを5枚見る。その中から赤のシグニを1枚までと、白か青か緑か黒のシグニを1枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」無3：查看我方牌組頂5張卡牌。將其中最多1張紅色精靈，最多1張白色或藍色或綠色或黑色精靈公開並加入手牌，剩下的按任意順序放置到牌組下方。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-054.jpg", //SRC
		"コードアート Dンドウバ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニが《コードアート ララ・ルー//メモリア》にライズされたとき、対戦相手のパワー5000以下のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【常】：このカードの上にある赤のシグニは「【自】：このシグニがバニッシュされたとき、このシグニをエナゾーンから手札に加えてもよい。」を得る。", //JP_TEXT
		"「自」：此精靈被《コードアート ララ・ルー//メモリア》升階時，對方1隻力量5000以下的精靈作對象，可以支付無1。若如此做，將其破壞。<br><br>「常」：此卡牌上的紅色精靈獲得「自：此精靈被破壞時，此精靈可以從能量區加入手牌。」。"	//TW_TEXT
		],
	[
		"WXDi-P06-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-055.jpg", //SRC
		"紅天 アフロディテ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のパワー12000以下のシグニ1体を対象とし、あなたの手札から＜天使＞のシグニを6枚公開し[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻力量12000以下的精靈作對象，可以從我方手牌公開6張＜天使＞精靈並支付紅1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-056.jpg", //SRC
		"紅将 トリスタン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：あなたのデッキの上からカードを5枚見る。その中からカードを3枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「生命爆發」： 查看我方牌組頂5張卡牌。將其中最多3張卡牌加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P06-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-057.jpg", //SRC
		"コードアート ララ・ルー//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたのレベル1のシグニ1体の上に置く（この条件を満たさなければ場に出せない）<br><br>【常】：このシグニは対戦相手の効果によって新たに能力を得られない。<br><br>【自】：このシグニがアタックしたとき、手札を1枚捨ててもよい。そうした場合、カードを1枚引く。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「升階」放置到我方1隻等級1的精靈上方<br><br>「常」：此精靈不會因對方效果獲得新能力。<br><br>「自」：此精靈攻擊時，可以捨棄1張手牌。若如此做，抽1張牌。<br><br>「生命爆發」：對方1隻力量12000以下的1精靈作對象，可以捨棄1張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-058.jpg", //SRC
		"幻焼獣 ベイア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、このシグニのパワーが8000以上の場合、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，此精靈的力量是8000以上的話，對方能量區1張與對方中央分身不持有共同顏色的卡牌作對方，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P06-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-059.jpg", //SRC
		"電動馬の発掘", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"以下の2つから1つを選ぶ。<br>①[ライズ]を持つあなたのシグニの下にある赤のシグニ1枚を対象とし、それを手札に加える。<br>②[ライズ]を持つあなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋3000し、それは「【自】：このシグニがアタックしたとき、自身のパワー以下の対戦相手のシグニ1体を対象とし、[無][無]を支払ってもよい。そうした場合、それをバニッシュする。」を得る。", //JP_TEXT
		"下列2項中選擇1項。<br>①我方持有「升階」的精靈下方的1張紅色精靈作對象，將其加入手牌。<br>②我方持有「升階」的1隻精靈作對象，直到回合結束時為止，將其力量+3000，使其獲得「自：此精靈攻擊時，自已力量以下的對方1隻精靈作對象，可以支付無2。若如此做，將其破壞。」。"	//TW_TEXT
		],
	[
		"WXDi-P06-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-060.jpg", //SRC
		"蒼天 サニエル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、あなたのトラッシュに＜天使＞のシグニが10枚以上ある場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，我方廢棄區的＜天使＞精靈有10張以上的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-061.jpg", //SRC
		"蒼将 ソウイ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】手札を2枚まで捨てる：この方法で捨てたカード1枚につきカードを1枚引く。", //JP_TEXT
		"「出」捨棄最多2張手牌：通過此方法捨棄的卡牌每有1張則抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-062.jpg", //SRC
		"蒼美 ふたせ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、あなたの手札の枚数が対戦相手の手札の枚数以上であるかぎり、このシグニは【シャドウ（レベル2以下のシグニ）】を得る。（このシグニは対戦相手のレベル2以下のシグニによって対象にされない）<br><br>【ライフバースト】：対戦相手のルリグかシグニ1体を対象とする。このターン、それがアタックしたとき、対戦相手が手札を3枚捨てないかぎり、そのアタックを無効にする。", //JP_TEXT
		"「常」：對方回合中，我方手牌數是對方手牌數以上時，此精靈獲得【暗影(等級2以下的精靈)】。<br><br>「生命爆發」：對方1隻分身或精靈作對象。本回合中，其攻擊時，對方不捨棄3張手牌的話，該攻擊無效。"	//TW_TEXT
		],
	[
		"WXDi-P06-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-063.jpg", //SRC
		"蒼魔 ジャックフロストC", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】エクシード3（あなたのルリグの下からカードを合計3枚ルリグトラッシュに置く）：対戦相手のすべてのシグニを凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「出」超越3：凍結對方所有精靈。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-064.jpg", //SRC
		"羅星 デルフィヌス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのデッキの一番上を公開する。そのカードがレベル1のシグニの場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，公開我方牌組頂1張卡牌。該卡牌是等級1精靈的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-065.jpg", //SRC
		"羅石 アイオライト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：あなたのデッキの上からカードを5枚見る。その中からカードを3枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「生命爆發」： 查看我方牌組頂5張卡牌。將其中最多3張卡牌加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P06-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-066.jpg", //SRC
		"羅原 ミルルン//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：このターン、あなたが次にスペルを使用する場合、その使用コストに含まれるエナコスト1つを選んで代わりに[無]として支払ってもよい。（例えば[青][青][赤]の場合、[青][青][無]か[青][赤][無]として支払える）<br><br>【起】（ターン1）[無]：対戦相手のトラッシュからスペル1枚を対象とし、それを使用する。このターン、それがチェックゾーンから別の領域に移動される場合、代わりにゲームから除外される。", //JP_TEXT
		"「出」：本回合中，我方下一次使用魔法的話，該使用費用含有的最多1個能量費用作為代替可以用無1來支付。(例如藍藍紅的話，可以支付藍藍無或藍紅無)<br><br>「起」(回合1)無1：對方廢棄區1張魔法作對象，將其使用。本回合中，其從檢查區移動到其他區域的話，作為代替從遊戲中除外。"	//TW_TEXT
		],
	[
		"WXDi-P06-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-067.jpg", //SRC
		"羅植 オカトトキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのエナゾーンにカードが6枚以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのエナゾーンにあるカードが5枚以下の場合、各プレイヤーは【エナチャージ1】をする。", //JP_TEXT
		"「常」：我方能量區卡牌有6張以上時，此精靈力量+5000。<br><br>「自」：我方攻擊階段開始時，我方能量區卡牌是5張以下的話，各玩家【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P06-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-068.jpg", //SRC
		"DISCOVERY", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのデッキの上からカードを5枚見る。その中から《幻水姫 エルドラ//メモリア》を1枚まで公開し手札に加え、カード1枚をデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のシグニを2体まで対象とし、それらをダウンする。", //JP_TEXT
		"查看我方牌組頂5張卡牌，將其中最多1張《幻水姫 エルドラ//メモリア》公開並加入手牌，1張卡牌放置到牌組上方，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：對方最多2隻精靈作對象，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-P06-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-069.jpg", //SRC
		"翠魔 オロバス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋3000する。<br><br>【出】：あなたのエナゾーンからカード1枚を選びトラッシュに置く。<br>（コストのない【出】能力は発動しないことを選べない）", //JP_TEXT
		"「自」：此精靈被破壞時，我方1隻精靈作對象，直到回合結束時為止，將其力量+3000。<br><br>「出」：從我方能量區選擇1張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P06-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-070.jpg", //SRC
		"壱ノ公遊 ウンテイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このターンにこのシグニがエナゾーンから場に出ていた場合、【エナチャージ1】をする。", //JP_TEXT
		"「自」：此精靈攻擊時，本回合此精靈是從能量區出場的話，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P06-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-071.jpg", //SRC
		"羅星 カプリコーン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの一番上を公開し、そのカードをデッキの一番下に置いてもよい。この効果で公開されたカードがレベル1のシグニの場合、次の対戦相手のターン終了時まで、このシグニのパワーを＋4000する。", //JP_TEXT
		"「出」：公開我方牌組頂1張卡牌，可以將該卡牌放置到牌組下方。通過此效果公開的卡牌是等級1的精靈的話，直到下一個對方回合結束時為止，此精靈力量+4000。"	//TW_TEXT
		],
	[
		"WXDi-P06-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-072.jpg", //SRC
		"幻獣 ポニー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのパワー8000以上のシグニが対戦相手のシグニ1体をバニッシュしたとき、[無]を支払ってもよい。そうした場合、カードを1枚引く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[無][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」(回合1)：我方力量8000以上的精靈被對方精靈破壞時，可以支付無1。若如此做，抽1張牌。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付無2。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P06-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-073.jpg", //SRC
		"翠天 スクナビコナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、以下の2つから1つを選ぶ。<br>①あなたのトラッシュから＜天使＞のシグニ1枚を対象とし、それをエナゾーンに置く。<br>②あなたのエナゾーンから＜天使＞のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」：此精靈攻擊時，從下列2項中選擇1項。<br>①我方廢棄區1張＜天使＞精靈作對象，將其放置到能量區。<br>②我方能量區1張＜天使＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P06-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-074.jpg", //SRC
		"翠天 ハヌマーン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：あなたのデッキの上からカードを5枚見る。その中からカードを3枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「生命爆發」： 查看我方牌組頂5張卡牌。將其中最多3張卡牌加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P06-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-075.jpg", //SRC
		"弍ノ遊 アイヤイ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：あなたのエナゾーンからシグニ1枚を対象とし、それを場に出す。", //JP_TEXT
		"「起」(橫置)：我方能量區1張精靈作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-P06-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-076.jpg", //SRC
		"幻水 カミツキガメ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、あなたの手札からカード1枚をエナゾーンに置いてもよい。<br><br>【出】[無][無][無]：カードを2枚引く。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「自」：我方回合結束時，可以從我方手牌將1張卡牌放置到能量區。<br><br>「出」無3：抽2張牌。<br><br>「生命爆發」：【能量填充1】。本回合中，下一次我方因精靈受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P06-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-077.jpg", //SRC
		"遭遇", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"あなたの緑のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それは「【自】：あなたのメインフェイズ以外でこのシグニがバニッシュされたとき、【エナチャージ2】をする。」を得る。<br><br>【起】[緑(0)]：あなたのエナゾーンからこのカードを手札に加える。この能力はあなたの場に＜美巧＞のシグニがある場合にしか使用できない。（この能力はこのスペルがエナゾーンにある場合にしか使用できない）", //JP_TEXT
		"我方1隻綠色精靈作對象，直到下一個對方的回合結束時為止，使其獲得「自：我方主要階段以外此精靈被破壞時，【能量填充2】。」。<br><br>「起」綠0：我方能量區的此卡牌加入手牌。此能力只有我方場上有＜美巧＞精靈時才可使用。"	//TW_TEXT
		],
	[
		"WXDi-P06-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-078.jpg", //SRC
		"凶将 カラサワ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのターンの間、あなたがエクシードのコストを支払ったとき、対戦相手のシグニ1体を対象とし、[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－5000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「自」(回合1)：我方回合中，我方因超越的費用支付時，對方1隻精靈作對象，可以支付黑1。若如此做，直到回合結束時為止，將其力量-5000。"	//TW_TEXT
		],
	[
		"WXDi-P06-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-079.jpg", //SRC
		"アイン＝ハナレ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－1000する。あなたのトラッシュにカードが15枚以上ある場合、代わりにターン終了時まで、それのパワーを－3000する。", //JP_TEXT
		"「起」(橫置)：對方1隻精靈作對象，直到回合結束時為止，將其力量-1000。我方廢棄區卡牌有15張以上的話，作為代替 直到回合結束時為止，將其力量-3000。"	//TW_TEXT
		],
	[
		"WXDi-P06-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-080.jpg", //SRC
		"コードアート Jヨシツキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにスペルがあるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないレベル2以下のシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「常」：我方廢棄區有魔法時，此精靈力量+4000。<br><br>「生命爆發」： 我方廢棄區1張不持有防禦標記的等級2以下精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P06-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-081.jpg", //SRC
		"ツヴァイ＝ヴァイアル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：あなたのデッキの上からカードを5枚見る。その中からカードを3枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「生命爆發」： 查看我方牌組頂5張卡牌。將其中最多3張卡牌加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P06-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-082.jpg", //SRC
		"羅星 マイクロスコピウム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの一番上のカードをトラッシュに置く。その後、この方法でレベル1のシグニがトラッシュに置かれた場合、[無]を支払ってもよい。そうした場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－5000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」：我方牌組頂1張卡牌放置到廢棄區。之後，通過此方法放置到了等級1的精靈到廢棄區的話，可以支付無1。若如此做，直到回合結束時為止，對方1隻精靈作對象，將其力量-5000。"	//TW_TEXT
		],
	[
		"WXDi-P06-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-083.jpg", //SRC
		"幻黒竜 ティラノ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、このシグニの下からカード3枚をトラッシュに置き[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－8000する。<br><br>【出】：あなたのトラッシュからレベル1、レベル2、レベル3のシグニをそれぞれ1枚まで対象とし、それらをこのシグニの下に置く。", //JP_TEXT
		"「自」：此精靈攻擊時，對方1隻精靈作對象，可以將此精靈下方的3張卡牌放置到廢棄區並支付黑1無1。若如此做，直到回合結束時為止，將其力量-8000。<br><br>「出」：我方廢棄區等級1，等級2，等級3的精靈最多各1張作對象，將其放置到此精靈下方。"	//TW_TEXT
		],
	[
		"WXDi-P06-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-084.jpg", //SRC
		"幻蟲 ミュウ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：凶蟲", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】[黒][ダウン]：あなたのトラッシュからレベル2以下の黒のシグニ1枚を対象とし、それを手札に加える。場にシグニに付いているカードかシグニの下に置かれているカードがある場合、代わりにあなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。（対戦相手の場にあるカードも参照する）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「起」黑1(橫置)：我方廢棄區1張等級2以下的黑色精靈作對象，將其加入手牌。場上精靈附有卡牌或精靈下方放置了卡牌的話，作為代替我方廢棄區1張黑色精靈作對象，將其加入手牌。(對方場上的卡牌也會參照)<br><br>「生命爆發」： 對方1隻精靈作對象，可以捨棄1張手牌。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P06-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-085.jpg", //SRC
		"ワンス・サルベージ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのトラッシュからシグニ1枚を対象とし、それを場に出す。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"我方廢棄區1張精靈作對象，將其出場。<br><br>「生命爆發」：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P06-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-086.jpg", //SRC
		"幻水 シースター", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"赤青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或藍）"	//TW_TEXT
		],
	[
		"WXDi-P06-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-087.jpg", //SRC
		"幻水 ピグミーシーホース", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"赤青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か青1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或藍）"	//TW_TEXT
		],
	[
		"WXDi-P06-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-088.jpg", //SRC
		"羅星 カネスヴィナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或綠）"	//TW_TEXT
		],
	[
		"WXDi-P06-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-089.jpg", //SRC
		"羅星 セルペンス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或綠）"	//TW_TEXT
		],
	[
		"WXDi-P06-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-090.jpg", //SRC
		"羅原 Tc", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或綠）"	//TW_TEXT
		],
	[
		"WXDi-P06-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-091.jpg", //SRC
		"羅原 Te", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは青か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個藍或綠）"	//TW_TEXT
		],
	[
		"WXDi-P06-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-092.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-001.jpg", //SRC
		"キラキラ☆メモリーズ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】（ターン1）：このルリグがアタックしたとき、対戦相手のライフクロス1枚を手札に加えさせる。その後、あなたの手札からシグニを1枚まで場に出す。そのシグニの【出】能力は発動しない。』", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方1隻等級3的分身作對象，直到回合結束時為止，使其獲得以下能力。<br>「自」(回合1)：此分身攻擊時，對方1張生命護甲加入手牌。之後，從我方手牌將最多1張精靈出場。該精靈的「出」能力不會發動。"	//TW_TEXT
		],
	[
		"WXDi-P07-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-002.jpg", //SRC
		"ENERGY DOOR", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>以下の4つからあなたのセンタールリグのレベル1につき1つまで選ぶ。<br>①あなたのトラッシュから[ガード]を持たないカードを2枚まで対象とし、それらをエナゾーンに置く。<br>②カードを2枚引く。<br>③対戦相手のレベル3以上のシグニ1体を対象とし、それをバニッシュする。<br>④次の対戦相手のターンの間、あなたが対戦相手のルリグによって最初にダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方中央分身等級每有1則從以下4項中最多選擇1項。<br>①我方廢棄區最多2張不持有防禦標記的卡牌作對象，將其放置到能量區。<br>②抽2張牌。<br>③對方1隻等級3以上的精靈作對象，將其破壞。<br>④下一個對方回合中，我方因對方分身受到最初的傷害的話，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P07-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-003.jpg", //SRC
		"まっすぐオーネスト", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このゲームの間、あなたのセンタールリグは以下の能力を得る。（グロウしても新しいセンタールリグは能力を得たままである）<br>『【起】【メインフェイズ】【アタックフェイズ】エクシード4（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）：対戦相手のレベル1のシグニ1体を対象とし、それをバニッシュする。』", //JP_TEXT
		"本局遊戲中，我方中央分身獲得以下能力。(成長為新的中央分身也會獲得能力)<br>「起」(主要階段)(攻擊階段)超越4：對方1隻等級1的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-004.jpg", //SRC
		"Can't stop Pretty!", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このゲームの間、あなたのセンタールリグは以下の能力を得る。（グロウしても新しいセンタールリグは能力を得たままである）<br>『【起】【メインフェイズ】【アタックフェイズ】エクシード4（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）：対戦相手のシグニ1体を対象とし、対戦相手が手札を3枚捨てないかぎり、それをダウンする。』", //JP_TEXT
		"本局遊戲中，我方中央分身獲得以下能力。(成長為新的中央分身也會獲得能力)<br>「起」(主要階段)(攻擊階段)超越4： 對方1隻精靈作對象，對方不捨棄3張手牌的話，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-P07-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-005.jpg", //SRC
		"瞬間explosion", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このゲームの間、あなたのセンタールリグは以下の能力を得る。（グロウしても新しいセンタールリグは能力を得たままである）<br>『【起】【メインフェイズ】【アタックフェイズ】エクシード4（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）：あなたのトラッシュからシグニ1枚を対象とし、それを能力を持たないシグニとして場に出す。ターン終了時、それを場からトラッシュに置く。』", //JP_TEXT
		"本局遊戲中，我方中央分身獲得以下能力。(成長為新的中央分身也會獲得能力)<br>「起」(主要階段)(攻擊階段)超越4：我方廢棄區1隻精靈作對象，將其以不持有能力的精靈出場。回合結束時，將其從場上放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P07-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-006.jpg", //SRC
		"発進！WIXOSSロボ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このゲームの間にあなたが◎を得ていない場合、◎◎◎◎◎を得る。このゲームの間、あなたは◎を得られない。", //JP_TEXT
		"本局遊戲中我方沒有獲得Coin的話，獲得Coin*5。本局遊戲中，我方不會再獲得Coin。"	//TW_TEXT
		],
	[
		"WXDi-P07-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-007.jpg", //SRC
		"まほまほ☆さ～ん", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手は以下の2つから1つを選び、あなたはそれを行う。<br>①対戦相手のデッキの上からカードを4枚トラッシュに置く。<br>②あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。<br><br>【出】：あなたのトラッシュからシグニ1枚を対象とし、それを場に出す。<br><br>【起】（ゲーム1）[黒(0)]：以下を3回行う。「対戦相手は手札を1枚捨てるか[無]を支払わないかぎり、自分のデッキの上からカードを4枚トラッシュに置く。」", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方從下列2項中選擇1項，我方將其執行。<br>①對方牌組上的4張卡牌放置到廢棄區。<br>②我方廢棄區的1張精靈作對象，將其加入手牌。<br><br>「出」：我方廢棄區1張精靈作對象，將其出場。<br><br>「起」(遊戲1)黑0：執行以下3次。「對方不捨棄1張手牌或支付無1的話，自己牌組上4張卡牌放置到廢棄區。」"	//TW_TEXT
		],
	[
		"WXDi-P07-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-008.jpg", //SRC
		"武踊の記憶 リル", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"4", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：[ライズ]を持つあなたのシグニ1体が場に出たとき、手札を1枚捨ててもよい。そうした場合、カードを1枚引く。<br><br>【起】（ターン1）[赤(0)]：あなたの場にいるアシストルリグのレベルの合計が1以上の場合、◎を得る。4以上の場合、追加で◎を得る。<br><br>【起】（ゲーム1）[赤(0)]：対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」(回合1)：我方1隻持有「升階」的精靈出場時，可以捨棄1張手牌。若如此做，抽1張牌。<br><br>「起」 (回合1) 紅0：我方場上助攻分身的等級合計是1以上的話，獲得Coin*1。4以上的話，追加獲得Coin*1。<br><br>「起」(遊戲1)紅0：對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-009.jpg", //SRC
		"ドーナ SUN", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"2", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのレベル3の白のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それは「【常】：対戦相手のターンの間、このシグニは【シャドウ（シグニ）】を得る。」を得る。<br><br>【起】（ゲーム1）[白(0)]：あなたのトラッシュからそれぞれ共通する色を持つシグニ2枚を対象とし、それらを手札に加える。（無色は色に含まれない）", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方1隻等級3的白色精靈作對象，直到下一個對方回合結束時為止，使其獲得「常：對方回合中，此精靈獲得【暗影(精靈)】。」。<br><br>「起」(遊戲1)白0：我方廢棄區持有共同顏色的2張精靈作對象，將其加入手牌。(無色不含有顏色)"	//TW_TEXT
		],
	[
		"WXDi-P07-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-010.jpg", //SRC
		"でじたるあーや！Ⅲ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"1", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：このルリグがアタックしたとき、対戦相手のデッキの一番上を公開する。それがレベル1のシグニの場合、①を行う。レベル2のシグニの場合、②を行う。レベル3のシグニの場合、①か②を行う。スペルの場合、①と②を行う。<br>①カードを1枚引く。<br>②対戦相手は手札を1枚捨てる。<br><br>【起】（ゲーム1）[青(0)]：対戦相手のシグニ1体を対象とし、それを裏向きにする。各アタックフェイズ開始時、裏向きのそれと同じ場所にシグニがない場合、対戦相手は[無][無]を支払うか手札を2枚捨ててもよい。そうした場合、それを表向きにする。", //JP_TEXT
		"「自」：此分身攻擊時，公開對方牌組上1張卡牌。若是等級1的精靈的話，執行①。等級2的精靈的話。執行②。等級3的精靈的話，執行①或②。魔法的話，執行①和②。<br>①抽1張牌。<br>②對方捨棄1張手牌。<br><br>「起」(遊戲1)藍0：對方1隻精靈作對象，將其背面朝上。各攻階段開始時，與背面朝上的該牌相同位置沒有精靈的話，對方可以支付無2或捨棄2張手牌。若如此做，將其正面朝上。"	//TW_TEXT
		],
	[
		"WXDi-P07-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-011.jpg", //SRC
		"まほまほ☆いち", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-012.jpg", //SRC
		"まほまほ☆にっ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-013.jpg", //SRC
		"純真の記憶 リル", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"1", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-014.jpg", //SRC
		"求新の記憶 リル", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-015.jpg", //SRC
		"明滅の記憶 リル", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-016.jpg", //SRC
		"ドーナ START", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-017.jpg", //SRC
		"ドーナ FIRST＋＋", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-018.jpg", //SRC
		"ドーナ SECOND", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-019.jpg", //SRC
		"あーや！0", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"4", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-020.jpg", //SRC
		"ぴこぴこあーや！Ⅰ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-021.jpg", //SRC
		"ぐれーとあーや！Ⅱ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-022.jpg", //SRC
		"みこみこ☆がっちゃん", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル1のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「出」：對方1隻等級1的精靈作對象，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P07-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-023.jpg", //SRC
		"みこみこ☆きらっきら", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：カードを3枚引き、手札を2枚捨てる。このターンに対戦相手の効果によってあなたの手札からカードが1枚以上トラッシュに移動していた場合、代わりにカードを5枚引き、手札を2枚捨てる。", //JP_TEXT
		"「出」：抽3張牌，捨棄2張手牌。本回合因對方效果使我方手牌有1張以上移動到廢棄區的話，作為代替抽5張牌，捨棄2張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-024.jpg", //SRC
		"みこみこ☆ばしーん", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×4", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニを2体まで対象とし、それらをダウンする。<br><br>【出】[青][無]：対戦相手のシグニ1体を対象とし、対戦相手が手札を3枚捨てないかぎり、それをダウンする。", //JP_TEXT
		"「出」： 對方最多2隻精靈作對象，將其橫置。<br><br>「出」藍1無1：對方1隻精靈作對象，對方不捨棄3張手牌的話，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-P07-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-025.jpg", //SRC
		"みこみこ☆ずばしゃーん", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをデッキの一番下に置く。<br><br>【出】手札を3枚捨てる：対戦相手の手札を見て1枚選び、捨てさせる。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其放置到牌組下方。<br><br>「出」捨棄3張手牌：查看對方手牌並選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P07-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-026.jpg", //SRC
		"みこみこ☆ぽいぽい", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-027.jpg", //SRC
		"メル＝レディ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-028.jpg", //SRC
		"メル・バースト", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-029.jpg", //SRC
		"メル・リバイズ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュから[ガード]を持たないカードを2枚まで対象とし、それらをエナゾーンに置く。", //JP_TEXT
		"「出」：我方廢棄區最多2張不持有防禦標記的卡牌作對象，將其放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-P07-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-030.jpg", //SRC
		"メル・インビジブル", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】手札を2枚捨てる：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】[緑][無][無]：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「出」：本回合中，我方下一次受到傷害的話，作為代替不會受到傷害。<br><br>「出」捨棄2張手牌： 本回合中，我方下一次受到傷害的話，作為代替不會受到傷害。<br><br>「出」綠1無2： 本回合中，我方下一次受到傷害的話，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P07-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-031.jpg", //SRC
		"メル・オーバーラン", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[緑][無][無][無][無]：あなたのいずれかのシグニよりパワーの低い対戦相手のシグニ1体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻力量10000以上的精靈作對象，將其破壞。<br><br>「出」綠1無4：對方1隻比我方任1精靈力量低的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-032.jpg", //SRC
		"メル・プレゼント", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのエナゾーンからシグニ1枚を対象とし、それを場に出す。それの【出】能力は発動しない。<br><br>【起】（ゲーム1）[緑][無]：あなたのシグニ1体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「出」：我方能量區1張精靈作對象，將其出場。該「出」能力不會發動。<br><br>「起」(遊戲1)綠1無1：我方1隻精靈作對象，直到回合結束時為止，使其獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-P07-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-033.jpg", //SRC
		"ナナシ 其ノ無", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"2", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-034.jpg", //SRC
		"ナナシ・散布", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。<br><br>【出】[無]：対戦相手のすべてのシグニゾーンに【ウィルス】を1つずつ置く。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，使其力量-8000。<br><br>「出」無1：對方所有精靈區放置1個【病毒】。"	//TW_TEXT
		],
	[
		"WXDi-P07-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-035.jpg", //SRC
		"ナナシ・探索", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを2枚トラッシュに置く。その後、あなたのトラッシュから[ガード]を持たないそれぞれレベルの異なるシグニ2枚を対象とし、それらを手札に加える。<br><br>【出】[無]：対戦相手のすべてのシグニゾーンに【ウィルス】を1つずつ置く。", //JP_TEXT
		"「出」：我方牌組上方2張卡牌放置到廢棄區。之後，我方廢棄區2張不持有防禦標記且等級不同的2張精靈作對象，將其加入手牌。<br><br>「出」無1：對方所有精靈區放置1個【病毒】。"	//TW_TEXT
		],
	[
		"WXDi-P07-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-036.jpg", //SRC
		"ナナシ・浄化", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。それが感染状態の場合、代わりにそれをトラッシュに置く。<br>（【ウィルス】と同じシグニゾーンにあるシグニは感染状態である）<br><br>【出】[無][無]：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。若是感染狀態的話，作為代替放置到廢棄區。<br>（與【病毒】在相同精靈區的精靈為感染狀態）<br><br>「出」無2：我方廢棄區1張不持有防禦標記的作精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-037.jpg", //SRC
		"ナナシ・施錠", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。<br><br>【出】手札を2枚捨てる：対戦相手の感染状態のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】[黒][無][無]：対戦相手の感染状態のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br>（【ウィルス】と同じシグニゾーンにあるシグニは感染状態である）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。<br><br>「出」捨棄2張手牌：對方1隻感染狀態的精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「出」黑1無2：對方1隻精靈作對象， 直到回合結束時為止，使其獲得「常：不能攻擊。」。<br>（與【病毒】在相同精靈區的精靈為感染狀態）"	//TW_TEXT
		],
	[
		"WXDi-P07-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-038.jpg", //SRC
		"ナナシ・ご選択", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【起】（ターン1）対戦相手の場にある【ウィルス】1つを取り除く：以下の3つから1つを選ぶ。<br>①あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。<br>②対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。<br>③【エナチャージ2】", //JP_TEXT
		"「起」(回合1)移除對方場上1個【病毒】：以下3項中選擇1項。<br>①我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。<br>②對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。<br>③【能量填充2】"	//TW_TEXT
		],
	[
		"WXDi-P07-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-039.jpg", //SRC
		"聖将姫 ゆきめ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：アタックフェイズの間、このシグニの正面のシグニがバニッシュされる場合、エナゾーンに置かれる代わりにトラッシュに置かれる。<br><br>【自】：あなたのアタックフェイズ開始時、数字1つを宣言する。対戦相手のデッキの一番上を公開し、そのカードが宣言された数字と同じレベルのシグニの場合、カードを1枚引く。<br><br>【起】◎：対戦相手はデッキの一番上と手札を公開する。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「常」：攻擊階段中，此精靈正面的精靈被破壞的話，由放置到能量區改為放置到廢棄區。<br><br>「自」：我方攻擊階段開始時，宣言1個數字。公開對方牌組上1張卡牌，該卡牌與宣言數字是相同等級的精靈的話，抽1張牌。<br><br>「起」Coin*1：公開對方牌組上方張卡牌和手牌。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P07-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-040.jpg", //SRC
		"羅星姫 ペガサス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にレベル1のシグニがある場合、カードを1枚引く。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュにレベル1のシグニが10枚以上ある場合、【エナチャージ1】をする。<br><br>【起】エナゾーンからレベル1のシグニ4枚をトラッシュに置く：対戦相手のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上有等級1的精靈的話，抽1張牌。<br><br>「自」：此精靈攻擊時，我方廢棄區等級1的精靈有10張以上的話，【能量填充1】。<br><br>「起」能量區4張等級1的精靈放置到廢棄區：對方1隻精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P07-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-041.jpg", //SRC
		"羅星姫 カーニバル//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[赤]◎◎◎：対戦相手のシグニ1体を対象とし、ターン終了時まで、それを《サーバント ZERO》にする。<br>（《サーバント ZERO》はレベル1、＜精元＞、パワー1000、無色で能力を持たないシグニである）<br><br>【起】（ターン1）[赤(0)]：【  】アイコンを持たないシグニ1体を対象とする。このシグニに付いているすべてのカードと、下に置かれているすべてのカードをトラッシュに置く。ターン終了時まで、このシグニはそれと同じカードになる。（【ライズ】と【ハーモニー】は【  】に含まれる）", //JP_TEXT
		"「出」紅1Coin*3：對方1隻精靈作對象，直到回合結束時為止，將其變為《侍從 ZERO》。（ 《侍從 ZERO》 是等級1，＜精元＞，力量1000，無色且不持有能力的精靈）<br><br>「起」(回合1)紅0：不持有黑框標記的1隻精靈作對象。此精靈附有的所有卡牌和下方所有卡牌放置到廢棄區。直到回合結束時為止，此精靈變為與該卡牌相同。<br>（「升階」和「和音」都包含在黑框標記）"	//TW_TEXT
		],
	[
		"WXDi-P07-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-042.jpg", //SRC
		"幻獣神 サラブレッド", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、ターン終了時まで、あなたのすべてのシグニのパワーを＋3000する。<br><br>【自】：あなたのターン終了時、あなたの場にあるシグニのパワーの合計が30000以上の場合、カードを1枚引く。<br><br>【出】[赤][無]：あなたのトラッシュからレベル2以下の＜地獣＞のシグニ1枚を対象とし、それを場に出す。ターン終了時まで、それのパワーを＋4000する。<br><br>【ライフバースト】：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，直到回合結束時為止，我方所有精靈的力量+3000。<br><br>「自」：我方回合結束時，我方場上精靈的力量合計有30000以上的話，抽1張牌。<br><br>「出」紅1無1：我方廢棄區1張等級2以下的＜地獸＞精靈作對象，將其出場。直到回合結束時為止，將其力量+4000。<br><br>「生命爆發」：對方1隻力量10000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-043.jpg", //SRC
		"蒼天姫 ブリュンヒルデ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン2）：あなたの＜天使＞のシグニ1体が場に出たとき、カードを1枚引いてもよい。そうした場合、手札を1枚捨てる。<br><br>【自】（ターン1）：あなたの＜天使＞のシグニ1体がアタックしたとき、対戦相手の手札を1枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のシグニ1体を対象とし、手札を2枚捨ててもよい。そうした場合、それをバニッシュする。②対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"「自」(回合2)：我方1隻＜天使＞精靈出場時，可以抽1張牌。若如此做，捨棄1張手牌。<br><br>「自」(回合1)： 我方1隻＜天使＞精靈攻擊， 不查看對方手牌選擇1張，將其捨棄。<br><br>「生命爆發」：選擇1項。①對方1隻精靈作對象，可以捨棄2張手牌。若如此做，將其破壞。②不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P07-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-044.jpg", //SRC
		"大幻蟲 アロス・ピルルク//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：凶蟲", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのメインフェイズの間、あなたがシグニを1枚捨てたとき、そのカードをトラッシュから場に出す。<br><br>【自】（ターン1）：あなたのターンの間、あなたのシグニ1体が手札以外の領域から場に出たとき、対戦相手のシグニ1体を対象とし、それを凍結し、ターン終了時まで、それのパワーを－2000する。<br><br>【起】（ターン1）◎◎：対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「自」(回合1)：我方主要階段中，我方捨棄1張精靈時，該卡牌從廢棄區出場。<br><br>「自」(回合1)：我方回合中，我方1隻精靈從手牌以外的區域出場時，對方1隻精靈作對象，將其凍結，直到回合結束時為止，將其力量-2000。<br><br>「起」(回合1)Coin*2：對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-045.jpg", //SRC
		"翠英姫 ママ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニのパワーの合計が30000の場合、【エナチャージ2】をする。<br><br>【自】：このシグニがアタックしたとき、このシグニのパワーが13000の場合、次の対戦相手のターン終了時まで、このシグニは【シャドウ（パワー10000以下のシグニ）】を得る。<br><br>【起】◎：次の対戦相手のターン終了時まで、このシグニのパワーを＋3000する。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上精靈的力量合計有30000以上的話，【能量填充2】。<br><br>「自」：此精靈攻擊時，此精靈力量是13000的話，直到下一個對方回合結束時為止，此精靈獲得【暗影(力量10000以下的精靈)】。<br><br>「起」Coin*1： 直到下一個對方回合結束時為止，此精靈的力量+3000。"	//TW_TEXT
		],
	[
		"WXDi-P07-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-046.jpg", //SRC
		"ドライ＝パトラ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[緑]：あなたのエナゾーンからシグニ1枚を対象とし、それを手札に加える。<br><br>【出】[黒]：あなたのトラッシュから緑のシグニ1枚を対象とし、それを場に出す。<br><br>【起】（ターン1）[無]ターン終了時まで、このシグニのパワーを－10000する：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。この能力はこのシグニのパワーが20000以上の場合にしか使用できない。", //JP_TEXT
		"「出」綠1：我方能量區1張精靈作對象，將其加入手牌。<br><br>「出」黑1：我方廢棄區1張綠色精靈作對象，將其出場。<br><br>「起」(回合1)無1直到回合結束時為止，此精靈力量-10000：對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。此能力在此精靈力量是20000以上時才可使用。"	//TW_TEXT
		],
	[
		"WXDi-P07-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-047.jpg", //SRC
		"惨之遊姫 グズ子//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：対戦相手がダメージを受けたとき、[黒][黒][黒][無][無]を支払ってもよい。そうした場合、対戦相手のライフクロス1枚をクラッシュする。<br><br>【自】（ターン1）：あなたのターンの間、あなたのトラッシュからあなたのシグニ1体が場に出たとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。<br><br>【起】（ターン1）◎◎◎：あなたのトラッシュからシグニ1枚を対象とし、それを場に出す。", //JP_TEXT
		"「自」(回合1)：對方受到傷害時，可以支付黑3無2。若如此做，擊潰對方1張生命護甲。<br><br>「自」(回合1)：我方回合中，我方1隻精靈從我方廢棄區出場時，對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。<br><br>「起」(回合1)Coin*3：我方廢棄區1張精靈作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-P07-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-048.jpg", //SRC
		"コードハート Aトマッサージャー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このターンにあなたがスペルを1枚以上使用していた場合、対戦相手のデッキの上からカードを2枚トラッシュに置く。その後、このターンにあなたがスペルを2枚以上使用していた場合、あなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。<br><br>【出】[黒]：あなたのトラッシュから黒のスペル1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」：此精靈攻擊時，本回合我方使用魔法1張以上的話，對方牌組上方2張卡牌放置到廢棄區。之後，本回合我方使用魔法2張以上的話，我方廢棄區1張黑色精靈作對象，將其加入手牌。<br><br>「出」黑1：我方廢棄區1張黑色魔法作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-049.jpg", //SRC
		"透天姫 リワト//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"無", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、以下の3つから1つを選ぶ。<br>①カードを1枚引くか【エナチャージ1】をする。<br>②対戦相手のレベル1のシグニ1体を対象とし、それをバニッシュする。<br>③対戦相手のシグニ1体を対象とし、[無][無][無]を支払ってもよい。そうした場合、それを手札に戻す。<br><br>【出】：あなたの公開領域に＜天使＞ではない、色を持つ表向きのシグニであるカードがある場合、このシグニを場からトラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，以下3項中選擇1項。<br>①抽1張牌或【能量填充1】。<br>②對方1隻等級1的精靈作對象，將其破壞。<br>③對方1隻精靈作對象，可以支付無3。若如此做，將其返回手牌。<br><br>「出」：我方公開區域有不是＜天使＞且持有顏色正面朝上的精靈卡牌的話，此精靈從場上放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P07-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-050.jpg", //SRC
		"夢限//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"3", //LEVEL
		"", //COST
		"7", //LIMIT
		"∞", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：【マルチエナ】<br><br>【常】：このシグニは対戦相手の効果によって場から他の領域に移動しない。<br><br>【起】エクシード4：他のすべてのシグニをトラッシュに置く。このターン、あなたは他のシグニを場に出せない。", //JP_TEXT
		"「常」：【萬花色】<br><br>「常」：此精靈不會因對方效果從場上移動到其他區域。<br><br>「起」超越4：所有其他的精靈放置到廢棄區。本回合中，我方不能讓其他精靈出場。"	//TW_TEXT
		],
	[
		"WXDi-P07-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-051.jpg", //SRC
		"聖将 ヤギュウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、このシグニがアップ状態の場合、あなたのデッキの一番上を公開する。そのカードが白の場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，此精靈是豎直狀態的話，公開我方牌組上方1張卡牌。該卡牌是白色的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-052.jpg", //SRC
		"聖魔 ハイティ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのライフクロス1枚がクラッシュされるかトラッシュに置かれたとき、カードを1枚引く。", //JP_TEXT
		"「自」(回合1)：我方1張生命護甲被擊潰或放置到廢棄區時，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-053.jpg", //SRC
		"コードアート Dスペンサー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの手札からスペルを1枚公開してもよい。そうした場合、次の対戦相手のターン終了時まで、このシグニのパワーを＋5000する。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「出」：可以公開我方手牌1張魔法。若如此做，直到下一個對方回合結束時為止，此精靈力量+5000。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-054.jpg", //SRC
		"聖天 タウィル//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュに＜天使＞のシグニが7枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【常】：対戦相手のターンの間、あなたのトラッシュに白のシグニが7枚以上あるかぎり、このシグニは【シャドウ（赤）】を得る。（このシグニは対戦相手の赤の能力と効果によって対象にされない）<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「常」：我方廢棄區＜天使＞精靈有7張以上時，此精靈力量+4000。<br><br>「常」：對方回合中，我方廢棄區白色精靈有7張以上時，此精靈獲得【暗影(紅)】。(此精靈不會成為對方紅色能力和效果的對象)<br><br>「生命爆發」：查看我方牌組上3張卡牌。將其中1張精靈公開並加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P07-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-055.jpg", //SRC
		"聖将 モヘイヘ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：どちらか1つを選ぶ。①対戦相手のパワー5000以下のシグニ1体を対象とし、それを手札に戻す。②対戦相手のパワー12000以下のシグニ1体を対象とし、◎を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		"「生命爆發」：選擇1項。①對方1隻力量5000以下的精靈作對象，將其返回手牌。②對方1隻力量12000以下的精靈作對象，可以支付Coin*1。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-056.jpg", //SRC
		"聖美 ガクブチ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、このシグニがアップ状態であるかぎり、このシグニのパワーは＋4000される。<br><br>【自】（ターン1）：あなたのルリグ1体がアタックしたとき、あなたのシグニ1体を対象とし、それをアップする。", //JP_TEXT
		"「常」：對方回合中，此精靈是豎直狀態時，此精靈力量+4000。<br><br>「自」(回合1)：我方1隻分身攻擊時，我方1隻精靈作對象，將其豎直。"	//TW_TEXT
		],
	[
		"WXDi-P07-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-057.jpg", //SRC
		"幻白水 ウナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のアタックフェイズの間、あなたの手札が4枚以上あるかぎり、このシグニは【シャドウ】を得る。<br>（このシグニは対戦相手によって対象にされない）<br><br>【出】◎◎：カードを1枚引く。<br><br>【ライフバースト】：ターン終了時まで、対戦相手のすべてのシグニは能力を失う。カードを1枚引く。", //JP_TEXT
		"「常」：對方攻擊階段中，我方手牌是4張以上時，此精靈獲得【暗影】。<br><br>「出」Coin*2：抽1張牌。<br><br>「生命爆發」：直到回合結束時為止，對方所有精靈失去能力。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-058.jpg", //SRC
		"幻怪 カラテン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：【出】能力を持つあなたのシグニ1体が場に出たとき、【エナチャージ1】をする。（その【出】能力より先にこの能力を発動できる）<br><br>【起】（ターン1）[白][無]◎◎：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」(回合1)：我方1隻持有「出」能力的精靈出場時，【能量填充1】。（此能力可優先該「出」能力發動）<br><br>「起」(回合1)白1無1Coin*2：我方廢棄區1隻持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-059.jpg", //SRC
		"サーブ・カラー", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"ベット―◎<br><br>カードを1枚引く。その後、色1つを宣言する。あなたのシグニ1体を対象とし、次の対戦相手のターン終了時まで、それは①を得る。あなたがベットしていた場合、代わりに②を得る。<br>①「【常】：対戦相手のターンの間、これは【シャドウ（宣言された色のシグニ）】を得る。」<br>②「【常】：対戦相手のターンの間、これは【シャドウ（宣言された色）】を得る。」<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"下注-Coin*1<br><br>抽1張牌。之後，宣言1個顏色。我方1隻精靈作對象，直到下一個對方回合結束時為止，使其獲得①。我方下注的話，作為代替獲得②。<br>①「常：對方回合中，此精靈獲得【暗影(宣言顏色的精靈)】。<br>②「常：對方回合中，此精靈獲得【暗影(宣言顏色)】。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-060.jpg", //SRC
		"紅天 ヒュペリオン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋2000され、このシグニは「【自】：このシグニがアタックしたとき、対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。」を得る。<br><br>【自】：あなたのターン終了時、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，此精靈力量+2000，此精靈獲得「自：此精靈攻擊時，對方1隻力量3000以下的精靈作對象，將其破壞。」。<br><br>「自」：我方回合結束時，此精靈會覺醒。（精靈覺醒在場上時為覺醒狀態）"	//TW_TEXT
		],
	[
		"WXDi-P07-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-061.jpg", //SRC
		"羅星 フォルナックス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、手札からレベル1のシグニを1枚捨ててもよい。そうした場合、それをトラッシュに置く。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方能量區1張與對方中央分身不持有共同顏色的卡牌作對象，可以從手牌捨棄1張等級1的精靈。若如此做，將其放置到廢棄區。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以捨棄1張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-062.jpg", //SRC
		"羅寂石 ルリル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの場に他の＜宝石＞のシグニがない場合、あなたは手札を1枚捨てる。<br>（コストのない【出】能力は発動しないことを選べない）<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：我方場上沒有其他＜寶石＞精靈的話，我方捨棄1張手牌。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-063.jpg", //SRC
		"中装 バルディッシュ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にレベル3のシグニが2体以上ある場合、[赤][赤]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは「【自】：このシグニがアタックしたとき、対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上等級3的精靈有2隻以上的話，可以支付紅2。若如此做，直到回合結束時為止，此精靈獲得「自：此精靈攻擊時，對方1隻力量12000以下的精靈，將其破壞。」。"	//TW_TEXT
		],
	[
		"WXDi-P07-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-064.jpg", //SRC
		"羅星 ジオールタ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚公開し、それらのカードを好きな順番でデッキの一番下に置く。その後、この方法で公開されたすべてのカードがレベル1のシグニの場合、対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：公開我方牌組上方3張卡牌，將那些卡牌以任意順序放回牌組下方。之後，通過此方法公開的所有卡牌是等級1的精靈的話，對方1隻力量3000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-065.jpg", //SRC
		"コードライド レイラ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、ターン終了時まで、このシグニのパワーを自身の下にあるすべてのシグニのパワーの合計と同じだけ＋（プラス）する。その後、このシグニのパワーが15000以上の場合、[赤][赤][無]を支払ってもよい。そうした場合、対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：あなたのデッキの一番上のカードをこのシグニの下に置く。<br><br>【起】◎：あなたのデッキの一番上のカードをこのシグニの下に置く。<br>（シグニの下に置かれるカードは表向きである）", //JP_TEXT
		"「自」：此精靈攻擊時，直到回合結束時為止，此精靈力量會加上自身下方所有精靈力量的合計。之後，此精靈力量是15000以上的話，可以支付紅2無1。若如此做，對方1隻精靈作對象，將其破壞。<br><br>「出」：我方牌組上方1張卡牌放置到此精靈下方。<br><br>「起」Coin*1：我方牌組上方1張卡牌放置到此精靈下方。"	//TW_TEXT
		],
	[
		"WXDi-P07-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-066.jpg", //SRC
		"コードライド バギーカー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：どちらか1つを選ぶ。①対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。②対戦相手のパワー12000以下のシグニ1体を対象とし、◎を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：選擇1項。① 對方1隻力量5000以下的精靈作對象，將其破壞。②對方1隻力量12000以下的精靈作對象，可以支付Coin*1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-067.jpg", //SRC
		"紅将 ギルガメジ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたの赤のシグニ1体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[赤][赤][赤]：ターン終了時まで、このシグニは【ダブルクラッシュ】を得る。（アタックによるダメージでライフクロスを2枚クラッシュする）<br><br>【起】◎◎◎◎◎：ターン終了時まで、このシグニは【アサシン】を得る。（このシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「升階」放置到我方1隻紅色精靈上方<br><br>「出」紅3：直到回合結束時為止，此精靈獲得【雙重擊潰】。<br><br>「起」Coin*5： 直到回合結束時為止，此精靈獲得【暗殺】。"	//TW_TEXT
		],
	[
		"WXDi-P07-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-068.jpg", //SRC
		"仮面の伝説", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"ベット―◎◎（このスペルを使用する際、使用コストとして追加で◎◎を支払ってもよい）<br><br>対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。あなたがベットしていた場合、代わりに対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"下注-Coin*2<br><br>對方1隻力量8000以下的精靈作對象，將其破壞。我方下注的話，作為代替對方1隻精靈作對象，將其破壞。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-069.jpg", //SRC
		"蒼魔 スキュラ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手は手札を1枚捨てる。<br><br>【出】：あなたは手札を1枚捨てる。<br>（コストのない【出】能力は発動しないことを選べない）", //JP_TEXT
		"「自」：此精靈攻擊時，對方捨棄1張手牌。<br><br>「出」：我方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-070.jpg", //SRC
		"羅石 カイヤナイト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、このシグニがアップ状態の場合、あなたのデッキの一番上を公開する。そのカードが青の場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，此精靈是豎直狀態的話，公開我方牌組上1張卡牌。該卡牌是藍色的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-071.jpg", //SRC
		"羅植 ヒヤシンス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】手札を1枚捨てる：このターン終了時、【エナチャージ1】をする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）<br><br>【ライフバースト】：カードを2枚引き【エナチャージ1】をする。", //JP_TEXT
		"「出」捨棄1張手牌：本回合結束時，【能量填充1】。<br><br>「生命爆發」：抽2張牌且【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P07-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-072.jpg", //SRC
		"蒼天 カイニス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：どちらか1つを選ぶ。①対戦相手のパワー3000以下のシグニ1体を対象とし、それをデッキの一番下に置く。②対戦相手のパワー8000以下のシグニ1体を対象とし、◎を支払ってもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		"「生命爆發」：對方1隻力量3000以下的精靈作對象，將其放置到牌組下方。對方1隻力量8000以下的精靈作對象，可以支付Coin*1。若如此做， 將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P07-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-073.jpg", //SRC
		"羅原 In", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のアタックフェイズ開始時、ターン終了時まで、あなたのセンタールリグは「【自】：対戦相手のターン終了時、あなたのすべてのシグニをバニッシュする。」を得る。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「自」：對方攻擊階段開始時，直到回合結束時為止，我方中央分身獲得「自：對方回合結束時，破壞我方所有精靈。」。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-074.jpg", //SRC
		"羅植 フジノハナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】◎：【エナチャージ1】（あなたのデッキの一番上のカードをエナゾーンに置く）", //JP_TEXT
		"「出」Coin*1：【能量填充1】"	//TW_TEXT
		],
	[
		"WXDi-P07-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-075.jpg", //SRC
		"コードパレス リュウジョウ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、このターンにこのシグニが手札以外の領域から場に出ていた場合、カードを1枚引くか、対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「自」：我方攻擊階段開始時，本回合此精靈從手牌以外的區域出場的話，抽1張牌或對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-076.jpg", //SRC
		"大罠 ハニトラ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手は手札を1枚捨てる。<br><br>【起】（ターン1）◎◎：カードを1枚引く。<br><br>【自】：このカードが対戦相手の効果によってデッキか手札からトラッシュに置かれたとき、対戦相手のトラッシュからカード1枚を対象とし、それをデッキの一番上に置いてもよい。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方捨棄1張手牌。<br><br>「起」(回合1)Coin*2：抽1張牌。<br><br>「自」：此卡牌因對方效果從牌組或手牌放置到廢棄區時，對方廢棄區1張卡牌作對象，可以將其放置到牌組上方。"	//TW_TEXT
		],
	[
		"WXDi-P07-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-077.jpg", //SRC
		"RECOVERY", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"ベット―◎（このスペルを使用する際、使用コストとして追加で◎を支払ってもよい）<br><br>カードを2枚引き、手札を2枚捨てる。あなたがベットしていた場合、代わりにカードを3枚引き、手札を2枚捨てる。<br><br>このターン、あなたはスペルを使用できない。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		"下注-Coin*1<br><br>抽2張牌，捨棄2張手牌。我方下注的話，作為代替抽3張牌，捨棄2張手牌。<br>本回合中，我方不能使用魔法。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，可以捨棄1張手牌。若如此做，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P07-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-078.jpg", //SRC
		"翠将 ジェロニモ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋2000され、このシグニは「【自】：このシグニがアタックしたとき、【エナチャージ1】をする。」を得る。<br><br>【自】：あなたのターン終了時、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，此精靈力量+2000，此精靈獲得「自：此精靈攻擊時，【能量填充1】。」。<br><br>「自」：我方回合結束時，此精靈會覺醒。"	//TW_TEXT
		],
	[
		"WXDi-P07-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-079.jpg", //SRC
		"アイン＝グリーンルクボル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】このシグニを場からトラッシュに置く：あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋5000する。それが＜毒牙＞のシグニの場合、代わりにターン終了時まで、それのパワーを＋10000する。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「起」此精靈從場上放置到廢棄區：我方1隻精靈作對象，直到回合結束時為止，將其力量+5000。若是＜毒牙＞精靈的話，作為代替直到回合結束時為止，將其力量+10000。<br><br>「生命爆發」：【能量填充1】。本回合中，下一次我方因精靈受到傷害的話，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P07-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-080.jpg", //SRC
		"コードフード ツナマヨ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのシグニの下にあるカード1枚を対象とし、それをエナゾーンに置く。", //JP_TEXT
		"「出」：我方精靈下方的1張卡牌作對象，將其放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-P07-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-081.jpg", //SRC
		"爆砲 センチュリオン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】◎◎【エナチャージ1】（あなたのデッキの一番上のカードをエナゾーンに置く）<br><br>【起】[緑][緑] このシグニを場からトラッシュに置く：対戦相手のレベル3以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」Coin*2：【能量填充1】。<br><br>「起」綠2此精靈從場上放置到廢棄區：對方1隻等級3以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-082.jpg", //SRC
		"羅星 コルト", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのトラッシュから[ガード]を持たないレベル1のシグニ1枚を対象とし、それをエナゾーンに置く。", //JP_TEXT
		"「自」：此精靈攻擊時，我方廢棄區1張不持有防禦標記的等級1精靈作對象，將其放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-P07-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-083.jpg", //SRC
		"羅星 ラセルタ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：どちらか1つを選ぶ。①対戦相手のパワー12000以上のシグニ1体を対象とし、それをバニッシュする。②対戦相手のパワー5000以上のシグニ1体を対象とし、◎を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：選擇1項。①對方1隻力量12000以上的精靈作對象，將其破壞。②對方1隻力量5000以上的精靈作對象，可以支付Coin*1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-084.jpg", //SRC
		"コードメイズ レースコース", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[緑]：あなたのデッキの一番下のカードを公開する。そのカードを場に出すかトラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[無][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「出」綠1：公開我方牌組下方1張卡牌。該卡牌出場或放置到廢棄區。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付無2。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-085.jpg", //SRC
		"翠英 ナイチール", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[緑][緑]：以下の3つから1つを選ぶ。<br>①ターン終了時まで、このシグニは基本パワーが5000になり、【ランサー】を得る。<br>②ターン終了時まで、このシグニは基本パワーが10000になり、「【常】：対戦相手の効果によってこのシグニのパワーは－（マイナス）されない。」を得る。<br>③ターン終了時まで、このシグニは基本パワーが12000になり、「【常】：対戦相手の効果によってダウンしない。」を得る。", //JP_TEXT
		"「起」綠2：以下3項中選擇1項。<br>①直到回合結束時為止，此精靈的基本力量變為5000，獲得【槍兵】。<br>②直到回合結束時為止，此精靈的基本力量變為10000，獲得「常：不會被對方效果使此精靈的力量減少。」。<br>③直到回合結束時為止，此精靈的基本力量變為12000，獲得「常：不會被對方效果橫置。」。"	//TW_TEXT
		],
	[
		"WXDi-P07-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-086.jpg", //SRC
		"演算", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"シグニ1体を対象とする。2～20の数字1つを宣言し、ターン終了時まで、それの基本パワーを「この方法で宣言した数字×1000」にする。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"1隻精靈作對象，宣言2~20的1個數字，直到回合結束時為止，其基本力量變為「此方法宣言的數字 x 1000」。<br><br>「生命爆發」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-087.jpg", //SRC
		"羅星 ベレニケ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにカードが10枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【自】：このシグニがバニッシュされたとき、あなたか対戦相手のデッキの上からカードを2枚トラッシュに置く。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないレベル2以下のシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「常」：我方廢棄區卡牌有10張以上時，此精靈力量+4000。<br><br>「自」：此精靈被破壞時，我方或對方牌組上方2張卡牌放置到廢棄區。<br><br>「生命爆發」：我方廢棄區1張不持有防禦標記的等級2以下精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P07-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-088.jpg", //SRC
		"羅油菌 ショウコカビ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋2000され、このシグニは「【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。」を得る。<br>（パワーが0以下のシグニはルールによってバニッシュされる）<br><br>【自】：あなたのターン終了時、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，此精靈力量+2000，此精靈獲得「自：此精靈攻擊時，對方1隻精靈作對象，直到回合結束時為止，該精靈力量-2000。」。<br><br>「自」：我方回合結束時，此精靈會覺醒。"	//TW_TEXT
		],
	[
		"WXDi-P07-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-089.jpg", //SRC
		"コードアンチ ウムル//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このターンにこのシグニがトラッシュから場に出ていた場合、カードを1枚引く。<br><br>【起】手札を2枚捨てる：このカードをトラッシュから場に出す。（この能力はこのカードがトラッシュにある場合にしか使用できない）", //JP_TEXT
		"「自」：此精靈攻擊時，本回合此精靈是從廢棄區出場的話，抽1張牌。<br><br>「起」捨棄2張手牌：此卡牌從廢棄區出場。（此能力在此卡牌在廢棄區時才可使用）"	//TW_TEXT
		],
	[
		"WXDi-P07-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-090.jpg", //SRC
		"凶天 タナトス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[黒]：対戦相手のシグニ1体を対象とし、あなたのトラッシュからそれぞれレベルの異なる＜天使＞のシグニ3枚をデッキに加えてシャッフルする。そうした場合、ターン終了時まで、それのパワーを－5000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」黑1：對方1隻精靈作對象，我方廢棄區3張不同等級的＜天使＞精靈加入牌組並洗切。若如此做，直到回合結束時為止，將其力量-5000。"	//TW_TEXT
		],
	[
		"WXDi-P07-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-091.jpg", //SRC
		"凶将 アグラヴェイン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたの＜武勇＞のシグニ1体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[黒]：以下の2つから1つを選ぶ。<br>①対戦相手のレベル1のシグニ1体を対象とし、それをバニッシュする。<br>②あなたのトラッシュから＜武勇＞のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「升階」放置到我方1隻＜武勇＞精靈上<br><br>「出」黑1：以下2項中選擇1項。<br><br>①對方1隻等級1的精靈作對象，將其破壞。<br>②我方廢棄區1張＜武勇＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P07-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-092.jpg", //SRC
		"凶魔 アルフォウ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、各プレイヤーは自分のデッキの上からカードを2枚トラッシュに置く。<br><br>【自】：あなたがリフレッシュしたとき、対戦相手のシグニ1体を対象とし、[黒][黒][黒]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈攻擊時，各玩家將自己牌組上方2張卡牌放置到廢棄區。<br><br>「自」：我方重構時，對方1隻精靈作對象，可以支付黑3。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P07-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-093.jpg", //SRC
		"凶魔 サユラギ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのデッキからカード1枚がトラッシュに置かれたとき、ターン終了時まで、このシグニのパワーを＋5000する。<br><br>【自】（ターン1）：あなたがリフレッシュしたとき、【エナチャージ1】をする。<br><br>【起】（ターン1）[黒(0)]：あなたのデッキの上からカードを3枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「自」(回合1)：我方牌組1張卡牌放置到廢棄區時，直到回合結束時為止，此精靈力量+5000。<br><br>「自」(回合1)：我方重構時，【能量填充1】。<br><br>「起」(回合1)黑0：我方牌組上方3張卡牌放置到廢棄區。<br><br>「生命爆發」：對方1隻精靈作對象，可以捨棄1張手牌。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P07-094", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-094.jpg", //SRC
		"凶魔 リリス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：どちらか1つを選ぶ。①対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－5000する。②対戦相手のシグニ1体を対象とし、◎を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「生命爆發」：選擇1項。①對方1隻精靈作對象，直到回合結束時為止，將其力量-5000。②對方1隻精靈作對象，可以支付Coin*1。若如此做直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P07-095", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-095.jpg", //SRC
		"ブラック・メモリー", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"以下の2つから1つを選ぶ。<br>①あなたのトラッシュからレベル2以下のシグニを2枚まで対象とし、それらを場に出す。<br>②あなたのトラッシュから《惨之遊姫 グズ子//メモリア》とレベル2以下のシグニをそれぞれ1枚まで対象とし、それらを場に出す。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"以下2項中選擇1項。<br>①我方廢棄區最多2張等級2以下的精靈作對象，將其出場。<br>②我方廢棄區《慘之遊娜 遲頓子//記憶》和等級2以下的精靈最多各1張作對象，將其出場。<br><br>「生命爆發」：我方廢棄區1張不持有生命爆發的精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P07-096", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-096.jpg", //SRC
		"聖翠美 オリガミ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"白緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或綠）"	//TW_TEXT
		],
	[
		"WXDi-P07-097", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-097.jpg", //SRC
		"聖翠美 シュレリス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"白緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か緑1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或綠）"	//TW_TEXT
		],
	[
		"WXDi-P07-098", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-098.jpg", //SRC
		"コードアート Cレプヤキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或黑）"	//TW_TEXT
		],
	[
		"WXDi-P07-099", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-099.jpg", //SRC
		"コードアート Tコヤキキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或黑）"	//TW_TEXT
		],
	[
		"WXDi-P07-100", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-100.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-001.jpg", //SRC
		"アグレッシブな夜", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたの場に青のルリグがいる場合、対戦相手の手札を見て1枚選び、捨てさせる。<br>その後、あなたの場に緑のルリグがいる場合、【エナチャージ3】をする。<br>その後、あなたの場に黒のルリグがいる場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－15000する。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方場上有藍色分身的話，查看對方手牌選擇1張，將其捨棄。<br>之後，我方場上有綠色分身的話，【能量填充3】。<br>之後，我方場上有黑色分身的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-15000。"	//TW_TEXT
		],
	[
		"WXDi-P08-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-002.jpg", //SRC
		"Colorful Wish", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたの場に白のルリグがいる場合、あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。<br>その後、あなたの場に緑のルリグがいる場合、対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。<br>その後、あなたの場に黒のルリグがいる場合、あなたのトラッシュからレベル2のシグニとレベル3のシグニをそれぞれ1枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方場上有白色分身的話，我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。<br>之後，我方場上有綠色分身的話，對方1隻力量10000以上的精靈作對象，將其破壞。<br>之後，我方場上有黑色分身的話，我方廢棄區等級2的精靈和等級3的精靈最多各1張作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-003.jpg", //SRC
		"ウルトラスーパーヒーローズ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたの場に白のルリグがいる場合、あなたのデッキの上からカードを5枚見る。その中からカードを2枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。<br>その後、あなたの場に赤のルリグがいる場合、対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。<br>その後、あなたの場に黒のルリグがいる場合、対戦相手のデッキの上からカードを10枚トラッシュに置く。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方場上有白色分身的話，查看我方牌組上5張卡牌。將其中最多2張卡牌加入手牌，剩下的按任意順序放回牌組下方。<br>之後，我方場上有紅色分身的話，對方1隻力量12000以下的精靈作對象，將其破壞。<br>之後，我方場上有黑色分身的話，對方牌組上10張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P08-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-004.jpg", //SRC
		"舞イ踊リ色紬", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたの場に白のルリグがいる場合、対戦相手のシグニ1体を対象とし、それを手札に戻す。<br>その後、あなたの場に赤のルリグがいる場合、あなたのレベル3以上のシグニ1体を対象とし、ターン終了時まで、それは【アサシン】を得る。<br>その後、あなたの場に青のルリグがいる場合、対戦相手のルリグ1体を対象とし、それを凍結する。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方場上有白色分身的話，對方1隻精靈作對象，將其返回手牌。<br>之後，我方場上有紅色分身的話，我方1隻等級3以上的精靈作對象，直到回合結束時為止，使其獲得【暗殺】。<br>之後，我方場上有藍色分身的話，對方1隻分身作對象，將其凍結。"	//TW_TEXT
		],
	[
		"WXDi-P08-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-005.jpg", //SRC
		"デス・ビーム・ディーヴァ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたの場に赤のルリグがいて対戦相手のセンタールリグがレベル3以上の場合、対戦相手は自分のエナゾーンからカード3枚を選びトラッシュに置く。（2枚以下の場合、それらをすべて選ぶ）<br>その後、あなたの場に青のルリグがいる場合、カードを3枚引く。<br>その後、あなたの場に緑のルリグがいる場合、あなたのシグニ1体を対象とし、ターン終了時まで、それは【ランサー】を得る。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方場上有紅色分身且對方中央分身是等級3以上的話，對方選擇自己能量區3張卡牌放置到廢棄區。<br>（2張以下的話，將選擇全部）<br>之後，我方場上有藍色分身的話，抽3張牌。<br>之後，我方場上有綠色分身的話，我方1隻精靈作對象，直到回合結束時為止，使其獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-P08-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-006.jpg", //SRC
		"リセット・メモリア", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"カードを1枚引く。ターン終了時まで、対戦相手のすべてのシグニは能力を失う。（このピースの後に場に出たシグニはこの効果の影響を受けない）", //JP_TEXT
		"抽1張牌。直到回合結束時為止，對方所有精靈失去能力。（此Piece後出場的精靈不會受此效果影響）"	//TW_TEXT
		],
	[
		"WXDi-P08-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-007.jpg", //SRC
		"ゆかゆか☆さ～ん", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"【自】：対戦相手のシグニ1体がアタックしたとき、対戦相手が[無]を支払わないかぎり、ターン終了時まで、そのシグニは能力を失う。<br><br>【出】：対戦相手のシグニ1体を対象とし、それを手札に戻す。<br><br>【起】（ゲーム1）[白(0)]：以下を3回行う。「対戦相手が手札を1枚捨てるか[無]を支払わないかぎり、あなたは自分のデッキの上からカードを3枚見る。その中からカードを1枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。」", //JP_TEXT
		"「自」：對方1隻精靈攻擊時，對方不支付無1的話，直到回合結束時為止，該精靈失去能力。<br><br>「出」：對方1隻精靈作對象，將其返回手牌。<br><br>「起」(遊戲1)白0：執行以下3次。「對方不捨棄1張手牌或支付無1的話，我方查看自己牌組上3張卡牌。將其中最多1張卡牌加入手牌，剩下的按任意順序放回牌組下方。」"	//TW_TEXT
		],
	[
		"WXDi-P08-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-008.jpg", //SRC
		"エルドラ×マークν", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのライフクロスとチェックゾーンにある【ライフバースト】を持たないカードは【ライフバースト】「どちらか1つを選ぶ。①カードを1枚引く。②【エナチャージ1】」を得る。<br><br>【出】：対戦相手のライフクロスの一番上を公開する。あなたはそのカードと対戦相手のデッキの一番上のカードを入れ替えてもよい。<br><br>【起】（ゲーム1）[青(0)]：あなたのライフクロス1枚をクラッシュする。そうした場合、あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。", //JP_TEXT
		"「常」：我方生命護甲和檢查區不持有生命爆發標記的卡牌獲得生命爆發「選擇1項。①抽1張牌。②【能量填充1】」。<br><br>「出」：公開對方生命護甲上方的1張卡牌。我方可以將該卡牌與對方牌組上的卡牌交換。<br><br>「起」(遊戲1)藍0：擊潰我方1張生命護甲。若如此做，洗切我方牌組並將上方1張卡牌加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P08-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-009.jpg", //SRC
		"結団の決断 アン＝サード", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのエナゾーンからシグニを2枚まで対象とし、それらを手札に加える。<br><br>【起】（ターン1）[緑(0)]：あなたのエナゾーンにあるカード1枚を対象とし、ターン終了時まで、それは【マルチエナ】を得る。<br><br>【起】（ゲーム1）[緑(0)]：対戦相手のシグニのうち、最も高いパワーを持つすべてのシグニを手札に戻す。", //JP_TEXT
		"「出」：我方能量區將多2張精靈作對象，將其加入手牌。<br><br>「起」(回合1)綠0：我方能量區1張卡牌作對象，直到回合結束時為止，使其獲得【萬花色】。<br><br>「起」(遊戲1)綠0：對方精靈中所有持有最高力量的精靈返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-010.jpg", //SRC
		"トライアングル/メイデン イオナ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュからシグニ1枚を対象とし、それを場に出す。<br><br>【起】（ターン1）デッキの上からカードを2枚トラッシュに置く：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br><br>【起】（ゲーム1）[黒][無]：次の対瀬相手のターンの間、対戦相手のシグニは可能ならばアタックしなければならない。そのターン終了時、そのターンにアタックしていたすべてのシグニをバニッシュする。", //JP_TEXT
		"「出」：我方廢棄區1張精靈作對象，將其出場。<br><br>「起」(回合1)牌組上方2張卡牌放置到廢棄區：對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。<br><br>「起」(遊戲1)黑1無1：下一個對方回合中，對方的精靈可以攻擊的話必須攻擊。該回合結束時，破壞該回合中有攻擊過的所有精靈。"	//TW_TEXT
		],
	[
		"WXDi-P08-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-011.jpg", //SRC
		"ゆかゆか☆いち", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-012.jpg", //SRC
		"ゆかゆか☆にっ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-013.jpg", //SRC
		"エルドラ×マーク0", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-014.jpg", //SRC
		"エルドラ×マークⅠ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-015.jpg", //SRC
		"エルドラ×マークⅡ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-016.jpg", //SRC
		"奇跡の軌跡 アン", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-017.jpg", //SRC
		"想像の創造 アン＝ファースト", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-018.jpg", //SRC
		"過知の価値 アン＝セカンド", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-019.jpg", //SRC
		"ゼロ/メイデン イオナ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-020.jpg", //SRC
		"ネプト/メイデン イオナ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-021.jpg", //SRC
		"ウラヌス/メイデン イオナ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-022.jpg", //SRC
		"タマ・おおごえ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」：對方1隻力量10000以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-023.jpg", //SRC
		"タマ・ばいぶる", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを7枚見る。その中からシグニを1枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組上7張卡牌。公開其中最多1張精靈並加入手牌，剩下的洗切放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P08-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-024.jpg", //SRC
		"タマ・しーるど", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】手札を2枚捨てる：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。<br><br>【出】[白][無][無]：対戦相手のレベル1のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」：對方1隻精靈作對象， 直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「出」捨棄2張手牌：對方1隻精靈作對象，直到回合結束時為止，使其失去能力。<br><br>「出」白1無2：對方1隻等級1的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-025.jpg", //SRC
		"タマ・ばうんだり", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：数字1つを宣言する。その後、あなたのデッキの上からカードを3枚公開する。その中に宣言した数字と同じレベルのシグニがある場合、対戦相手のシグニ1体を対象とし、それを手札に戻す。この効果で公開したカードを好きな順番でデッキの一番上に戻す。", //JP_TEXT
		"「出」：宣言1個數字。之後，公開我方牌組上3張卡牌。其中有與宣言數字相同等級的精靈的話，對方1隻精靈作對象，將其返回手牌。此效果公開的卡牌以任意順序放回牌組上方。"	//TW_TEXT
		],
	[
		"WXDi-P08-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-026.jpg", //SRC
		"タマ・おーら", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのルリグ1体を対象とし、ターン終了時まで、それは「【自】（ターン1）：このルリグがアタックしたとき、このルリグをアップし、ターン終了時まで、このルリグは能力を失う。」を得る。", //JP_TEXT
		"「出」：我方1隻分身作對象，直到回合結束時為止，使其獲得「自(回合1)：此分身攻擊時，豎直此分身，直到回合結束時為止，此分身失去能力。」。"	//TW_TEXT
		],
	[
		"WXDi-P08-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-027.jpg", //SRC
		"リル・一閃", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻等級2以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-028.jpg", //SRC
		"リル・炎舞", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：◎◎を得る。<br>（プレイヤーが保持できる◎の上限は5枚である）", //JP_TEXT
		"「出」：對方1隻力量5000以下的精靈作對象，將其破壞。<br><br>「出」：獲得Coin*2。"	//TW_TEXT
		],
	[
		"WXDi-P08-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-029.jpg", //SRC
		"リル・抜刀", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】（ゲーム1）[赤][無][無]：対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「起」(回合1)紅1無2：對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-030.jpg", //SRC
		"リル・祈祷", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手は自分のシグニを好きな数選ぶ。このターン、対戦相手は選んだシグニで可能ならばアタックしなければならず、それら以外のシグニでアタックできない。<br><br>【出】[無][無][無]：このターン、対戦相手のシグニ1体がアタックしたとき、そのアタックがこのターンで二度目以降の対戦相手によるアタックの場合、そのアタックしたシグニをバニッシュする。", //JP_TEXT
		"「出」：對方選擇自己任意隻精靈。本回合中，對方選擇的精靈可以攻擊的話必須攻擊，其以外的精靈不能攻擊。<br><br>「出」無*3： 本回合中，對方1隻精靈攻擊時，該攻擊是本回合的第二次或以後的攻擊的話，破壞該精靈。"	//TW_TEXT
		],
	[
		"WXDi-P08-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-031.jpg", //SRC
		"リル・鼓舞", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：カードを3枚引き、あなたの手札からシグニを1枚まで場に出す。その後、そのシグニよりパワーの低い対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：抽3張卡牌並從我方手牌將最多1張精靈出場。之後，比該精靈力量低的對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-032.jpg", //SRC
		"ピルルク/DRAW", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：カードを2枚引く。", //JP_TEXT
		"「出」：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-033.jpg", //SRC
		"ピルルク/SNIPE", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手の手札を見て[ガード]を持たないカード1枚を選び、捨てさせる。", //JP_TEXT
		"「出」：查看對方手牌選擇1張不持有防禦標記的卡牌，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P08-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-034.jpg", //SRC
		"ピルルク/D-E", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】[青][無][無][無][無]：レベルの合計が4以下になるように対戦相手のシグニを2体まで対象とし、それらをダウンする。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其橫置。<br><br>「出」藍1無4：對方等級合計4以下的最多2隻精靈作對象，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-P08-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-035.jpg", //SRC
		"ピルルク/D-M", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ2体まで対象とし、それらをダウンする。<br><br>【出】[無][無]：カードを2枚引く。", //JP_TEXT
		"「出」：對方最多2隻精靈作對象，將其橫置。<br><br>「出」無2：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-036.jpg", //SRC
		"ピルルク/P-A", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手の手札を見て1枚選び、捨てさせる。<br><br>【出】：対戦相手のルリグ1体を対象とし、それを凍結する。", //JP_TEXT
		"「出」：查看對方手牌選擇1張，將其捨棄。<br><br>「出」：對方1隻分身作對象，將其凍結。"	//TW_TEXT
		],
	[
		"WXDi-P08-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-037.jpg", //SRC
		"大装 タマ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋2000され、【シャドウ（レベル3以上のシグニ）】を得る。<br><br>【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。そのカードがシグニの場合、そのシグニとあなたのアップ状態のシグニ1体の場所を入れ替えてもよい。そのシグニの【出】能力は発動しない。<br><br>【自】：このシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、このシグニは覚醒する。", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，此精靈力量+2000，此精靈獲得【暗影(等級3以上精靈)】。<br><br>「自」：此精靈攻擊時，公開我方牌組上1張卡牌。該卡牌是精靈的話，該精靈可以與我方場上1隻豎直狀態的精靈交換。該精靈的「出」能力不會發動。<br><br>「自」：此精靈因戰鬥破壞對方1隻精靈時，此精靈覺醒。"	//TW_TEXT
		],
	[
		"WXDi-P08-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-038.jpg", //SRC
		"大盗罠 ルパンヌ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、あなたのライフクロス1枚をトラッシュに置いてもよい。そうした場合、このシグニをエナゾーンからライフクロスに加える。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②あなたのデッキの上からカードを4枚見る。その中からカードを2枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「自」：此精靈被破壞時，可以將我方1張生命護甲放置到廢棄區。若如此做，此精靈從能量區加入生命護甲。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②查看我方牌組上4張卡牌。將其中最多2張卡牌加入手牌，剩下的按任意順序返回牌組下。"	//TW_TEXT
		],
	[
		"WXDi-P08-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-039.jpg", //SRC
		"羅輝石 花代//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのエナゾーンにカードがない場合、ターン終了時まで、このシグニの基本レベルは3になり、基本パワーは12000になる。<br><br>【自】：あなたのアタックフェイズ開始時、このシグニのレベル以下の対戦相手のシグニ1体を対象とし、手札から赤のカードか＜宝石＞のシグニを合計2枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方能量區沒有卡牌的話，直到下一個對方回合結束時為止，此精靈的基本等級變為3，基本力量變為12000。<br><br>「自」：我方攻擊階段開始時，此精靈等級以下的對方1隻精靈作對象，可以從手牌捨棄合計2張紅色卡牌或＜寶石＞精靈。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-040.jpg", //SRC
		"紅天姫 ヒラナ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、[無][無]を支払ってもよい。そうした場合、あなたの手札から白か青のシグニ1枚をダウン状態で場に出す。そのシグニの【出】能力は発動しない。<br><br>【起】エクシード4：あなたのエナゾーンとライフクロスにあるすべてのカードをトラッシュに置き、手札をすべて捨てる。カードを2枚引き【エナチャージ2】をする。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「自」：此精靈被破壞時，可以支付無2。若如此做，我方手牌1張白色或藍色的精靈以橫置狀態出場。該精靈的「出」能力不會發動。<br><br>「起」超越4：我方能量區和生命護甲所有卡牌放置到廢棄區，捨棄所有手牌。抽2並【能量填充2】。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-041.jpg", //SRC
		"大装 ハルバード", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのアップ状態のシグニ1体が対戦相手の、アシストルリグかライフバーストの能力か効果の対象になったとき、[赤][赤][赤][無]を支払ってもよい。そうした場合、対戦相手のライフクロス1枚をクラッシュする。<br><br>【出】[赤] 手札を1枚捨てる：カードを2枚引く。", //JP_TEXT
		"「自」(回合1)：我方豎直狀態的1隻精靈因對方的支援分身或生命爆發的能力或效果成為對象時，可以支付紅3無1。若如此做，擊潰對方1張生命護甲。<br><br>「出」紅1捨棄1張手牌：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-042.jpg", //SRC
		"羅星姫 タマゴ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、カードを1枚引く。<br><br>【自】：対戦相手のターン終了時、対戦相手の手札を見ないで1枚選び、捨てさせる。<br><br>【出】[ダウン]：次の対戦相手のターン終了時まで、このシグニのパワーを＋8000する。", //JP_TEXT
		"「自」：我方回合結束時，抽1張牌。<br><br>「自」：對方回合結束時，不查看對方手牌選擇1張，將其捨棄。<br><br>「出」(橫置)：直到下一個對方回合結束時為止，此精靈的力量+8000。"	//TW_TEXT
		],
	[
		"WXDi-P08-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-043.jpg", //SRC
		"幻水歌姫 ダイホウイカ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、手札を3枚まで捨てる。ターン終了時まで、それのパワーをこの方法で捨てたカード1枚につき－3000する。<br><br>【出】：あなたの場に青のシグニが3体以上ある場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻精靈作對象，可以捨棄最多3張手牌。直到回合結束時為止，其力量減以此方法捨棄的手牌數每有1張，則-3000。<br><br>「出」：我方場上的藍色精靈有3隻以上的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-044.jpg", //SRC
		"翠将姫 ヒデヨシ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のシグニの【自】【出】【起】能力が発動する場合、このシグニの下からカード2枚をトラッシュに置いてもよい。そうした場合、代わりに発動したその能力は何もしない。<br><br>【常】：このシグニが対戦相手の効果によって場を離れる場合、代わりにこのシグニの下からカード2枚をトラッシュに置いてもよい。そうした場合、このシグニをダウンする。<br><br>【出】：あなたのエナゾーンからカードを4枚までこのシグニの下に置く。", //JP_TEXT
		"「常」：對方精靈的「自」「出」「起」能力發動的話，可以將此精靈下方的2張卡牌放置到廢棄區。若如此做，作為代替發動的能力甚麼也不執行。<br><br>「常」：此精靈因對方效果離場的話，作為代替可以將此精靈下方的2張卡牌放置到廢棄區。若如此做，橫置此精靈。<br><br>「出」：我方能量區最多4張卡牌放置到此精靈下方。"	//TW_TEXT
		],
	[
		"WXDi-P08-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-045.jpg", //SRC
		"翠英姫 アインシュタイン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニのレベルの合計が偶数の場合、【エナチャージ1】をする。<br><br>【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、あなたのエナゾーンからレベルの合計が8になるようにシグニを好きな枚数トラッシュに置いてもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上精靈的等級合計是偶數的話，【能量填充1】。<br><br>「自」：此精靈攻擊時，對方1隻精靈作對象，可以從我方能量區將等級合計8的任意張精靈放置到廢棄區。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-046.jpg", //SRC
		"コードラビリンス アト//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが場を離れる場合、代わりにこれをデッキの一番下に置いてもよい。<br><br>【自】：このシグニが場を離れたとき、あなたのデッキをシャッフルしてもよい。そうした場合、あなたのデッキの上から、カードを2枚トラッシュに置きカードを4枚を見る。その見たカードの中から《コードラビリンス アト//メモリア》を1枚までダウン状態で場に出し、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの一番上と一番下を見る。その中からシグニを1枚まで場に出し、残りを手札に加える。", //JP_TEXT
		"「常」：此精靈離場的話，作為代替可以放置到牌組下方。<br><br>「自」：此精靈離場時，可以洗切我方牌組。若如此做，我方牌組上方2張卡牌放置到廢棄區且查看4張卡牌。將查看的卡牌中最多1張《迷宮代號 亞托//記憶》以橫置狀態出場，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：查看我方牌組上和下1張卡牌。將其中最多1張精靈出場，剩下的加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-047.jpg", //SRC
		"凶魔姫 ウリス//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、手札から＜悪魔＞のシグニを2枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。<br><br>【出】[無]：あなたのトラッシュから《凶魔姫 ウリス//メモリア》以外の＜悪魔＞のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻精靈作對象，可以從手牌捨棄2張＜惡魔＞精靈。若如此做，直到回合結束時為止，將其力量-12000。<br><br>「出」無1：我方廢棄區1張《凶魔姬 烏莉絲//記憶》以外的＜惡魔＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-048.jpg", //SRC
		"幻竜姫 ダークゲツァル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは下にレベル1、レベル2、レベル3のシグニがそれぞれ1枚以上あるかぎり、「【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。」を得る。それぞれ2枚以上あるかぎり、追加で【アサシン】を得る。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのデッキをシャッフルし上からカード4枚をこのシグニの下に置く。（表向きで置く）", //JP_TEXT
		"「常」：此精靈下方等級1，等級2，等級3的精靈各有1張以上時，獲得「自：此精靈攻擊時，對方1隻精靈作對象，直到回合結束時為止，其力量-12000。」。各有2張以上時，追加獲得【暗殺】。<br><br>「自」：我方攻擊階段開始時，洗切我方牌組並將上方4張卡牌放置此精靈下方。（正面向上）"	//TW_TEXT
		],
	[
		"WXDi-P08-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-049.jpg", //SRC
		"聖美 チョウコクトー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、このシグニは【シャドウ（レベル2のシグニ）】を得る。（対戦相手のレベル2のシグニによって対象にされない）<br><br>【自】：対戦相手のアタックフェイズ開始時、対戦相手のレベル1のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。<br><br>【ライフバースト】：ターン終了時まで、対戦相手のすべてのシグニは能力を失う。カードを1枚引く。", //JP_TEXT
		"「常」：對方回合中，此精靈獲得【暗影(等級2精靈)】。（此精靈不會成為對方等級2的精靈的對象）<br><br>「自」：對方攻擊階段開始時，對方1隻等級1的精靈作對象，直到回合結束時為止，使其失去能力。<br><br>「生命爆發」：直到回合結束時為止，對方所有精靈失去能力。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-050.jpg", //SRC
		"小装 プロトエナジェ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚見る。その中から《大装 タマ//メモリア》を1枚まで公開し手札に加え、カード1枚をデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組上3張卡牌。將其中最多1張《大裝 小玉//記憶》公開並加入手牌，1張卡牌放回牌組上，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P08-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-051.jpg", //SRC
		"幻水 アキノ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは覚醒状態であるかぎり、「【自】：このシグニがアタックしたとき、あなたのデッキの上からカードを2枚見る。その中からカードを1枚まで手札に加え、残りを好きな順番デッキの一番下に置く。」を得る。<br><br>【出】：対戦相手の手札が6枚以上ある場合、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，獲得「自：此精靈攻擊時，查看我方牌組上2張卡牌。將其中最多1張卡牌加入手牌，剩下的按任意順序放回牌組下方。」。<br><br>「出」：對方手牌是6張以上的話，此精靈覺醒。"	//TW_TEXT
		],
	[
		"WXDi-P08-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-052.jpg", //SRC
		"聖英 タンゴカード", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に白のシグニが3体以上ある場合、対戦相手のパワー3000以下のシグニ1体を対象とし、[白]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上白色精靈有3隻以上的話，對方1隻力量3000以下的精靈作對象，可以支付白1。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-053.jpg", //SRC
		"羅星 ノヴァ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のアタックフェイズ開始時、対戦相手のレベル2以下のシグニを1体まで対象とし、このシグニを場から手札に戻してよい。そうした場合、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「自」：對方攻擊階段開始時，對方最多1隻等級2以下的精靈作對象，此精靈可以從場上返回手牌。若如此做，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-054.jpg", //SRC
		"聖天 ヘスチア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたが対戦相手のシグニかルリグのアタックによってダメージを受ける場合、代わりにこのシグニを場からトラッシュに置いてもよい。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②カードを1枚引く。", //JP_TEXT
		"「常」：我方因對方精靈或分身的攻擊受到傷害時，作為代替可以將此精靈放置到廢棄區。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-055.jpg", //SRC
		"オーバー・パシュート", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のレベル1のシグニ1体を対象とし、それを手札に戻す。あなたの場に白のシグニが3体以上ある場合、【エナチャージ1】をする。", //JP_TEXT
		"對方1隻等級1的精靈作對象，將其返回手牌。我方場上白色精靈有3隻以上的話，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P08-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-056.jpg", //SRC
		"コードアート Pテトフライヤー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにスペルがあるかぎり、このシグニのパワーは＋4000される。<br><br>【出】スペルを1枚捨てる：対戦相手のパワー2000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「常」：我方廢棄區有魔法時，此精靈力量+4000。<br><br>「出」捨棄1張魔法：對方1隻力量2000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-057.jpg", //SRC
		"幻竜 遊月//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンにカードがシグニ4枚以上ある場合、[赤][無][無]を支払ってもよい。そうした場合、対戦相手は自分のエナゾーンからカードを2枚選びトラッシュに置く。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方能量區的卡牌有4張以上的話，可以支付紅1無2。若如此做，對方選擇自己能量區2張卡牌放置到廢棄區。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-058.jpg", //SRC
		"紅魔 タウィル//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【自】：このシグニがアタックしたとき、[無]を支払わないかぎり、このシグニをバニッシュする。」を得る。<br><br>【自】：対戦相手のターン終了時、このシグニを場からデッキの一番下に置いてもよい。そうした場合、カードを1枚引く。", //JP_TEXT
		"「自」：對方攻擊階段開始時，對方1隻精靈作對象，使其獲得「自：此精靈攻擊時，不支付無1的話，破壞此精靈。」。<br><br>「自」：對方回合結束時，此精靈可以從場上放置到牌組下方。若如此做，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-059.jpg", //SRC
		"羅踊石 ガーネット", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニがダウン状態であるかぎり、このシグニのパワーは＋4000される。<br><br>【起】[ダウン]：対戦相手のエナゾーンからカード1枚を対象とし、それをトラッシュに置く。そうした場合、対戦相手は【エナチャージ1】をしてもよい。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「常」：此精靈是橫置狀態時，此精靈力量+4000。<br><br>「起」(橫置)：對方能量區1張卡牌作對象，將其放置到廢棄區。若如此做，對方可以【能量填充1】。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以捨棄1張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-060.jpg", //SRC
		"轟砲 ランチャン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[赤][赤] このシグニを場からトラッシュに置く：あなたの赤のシグニ1体を対象とし、ターン終了時まで、それは「【自】（ターン1）：このシグニがアタックしたとき、このシグニの正面のシグニ1体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		"「起」紅2此精靈從場上放置到廢棄區：我方1隻紅色精靈作對象，直到回合結束時為止，使其獲得「自(回合1)：此精靈攻擊時，此精靈正面的1隻精靈作對象，將其破壞。」。"	//TW_TEXT
		],
	[
		"WXDi-P08-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-061.jpg", //SRC
		"楽天の共鳴", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"あなたの《紅天姫 ヒラナ//メモリア》か《幻水 アキノ//メモリア》か《羅石 レイ//メモリア》か赤のシグニ1体を対象とし、ターン終了時まで、それは「【自】（ターン1）：このシグニがアタックしたとき、対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		"我方1隻《紅天姫 ヒラナ//メモリア》或《幻水 アキノ//メモリア》或《羅石 レイ//メモリア》或紅色精靈作對象，直到回合結束時為止，使其獲得「自(回合1)：此精靈攻擊時，對方1隻力量5000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-062.jpg", //SRC
		"コードメイズ ウムル//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの一番上を見る。そのカードをデッキの一番下に置いてもよい。<br><br>【起】このシグニを場からデッキの一番下に置く：あなたのデッキの一番上を公開する。そのカードが《コードメイズ ウムル//メモリア》以外のシグニの場合、そのシグニを場に出してもよい。<br><br>【ライフバースト】：あなたのデッキの一番上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組上方1張卡牌，可以將該卡牌放置到牌組下方。<br><br>「起」此卡牌從場上放置到牌組下方：公開我方牌組上方1張卡牌。該卡牌是《迷宮代號 烏姆爾//記憶》以外的精靈的話，該精靈可以出場。<br><br>「生命爆發」：查看我方牌組上方3張卡牌。公開其中1張精靈並加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P08-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-063.jpg", //SRC
		"コードアート ピルルク//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】手札からスペルを1枚捨てる：あなたのデッキの上からカードを3枚見る。その中から好きな枚数のカードを好きな順番でデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。カードを1枚引く。", //JP_TEXT
		"「出」從手牌捨棄1張魔法：查看我方牌組上3張卡牌。將其中任意張按任意順序放回牌組上方，剩下的按任意順序放回牌組下方。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-064.jpg", //SRC
		"蒼天 カナロア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの場にいる青のルリグ1体につき対戦相手のシグニを1体まで対象とし、それらを凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		"「出」：我方場上的藍色分身每有1隻則對方最多1隻精靈作對象，將其凍結。"	//TW_TEXT
		],
	[
		"WXDi-P08-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-065.jpg", //SRC
		"羅石 レイ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの他の、赤のシグニと＜宝石＞のシグニのパワーを＋2000する。<br><br>【自】（ターン1）：あなたの他の＜宝石＞のシグニ1体が対戦相手のシグニの、【出】能力か【出】能力の効果の対象になったとき、対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「常」：我方其他的紅色精靈和＜寶石＞精靈的力量+2000。<br><br>「自」(回合1)：我方1隻＜寶石＞精靈成為對方精靈的「出」能力或「出」能力效果的對象時，對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-066.jpg", //SRC
		"羅原 VO", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、対戦相手のシグニ1体を対象とし、それらバニッシュする。<br><br>【ライフバースト】：あなたの手札が4枚以上ある場合、対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方回合結束時，對方1隻精靈作對象，將其破壞。<br><br>「生命爆發」：我方手牌有4張以上的話，對方1隻豎直狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-067.jpg", //SRC
		"羅淡菌 ミズカビ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、以下の2つから1つを選ぶ。<br>①対戦相手のシグニ1体を対象とし、それをダウンし凍結する。<br>②対戦相手の手札を1枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"「自」：此精靈被破壞時，以下2項中選擇1項。<br>①對方1隻精靈作對象，將其橫置並凍結。<br>②不查看對方手牌選擇1張，將其捨棄。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P08-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-068.jpg", //SRC
		"FAILURE", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"このスペルはあなたの場に《羅星姫 タマゴ//メモリア》か《羅星 ノヴァ//メモリア》か《翠魔 バン//メモリア》があるか、対戦相手の手札が1枚以下の場合にしか使用できない。<br><br>対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。対戦相手は手札を1枚捨てる。", //JP_TEXT
		"此魔法在我方場上有《羅星姫 タマゴ//メモリア》或《羅星 ノヴァ//メモリア》或《翠魔 バン//メモリア》或對方手牌是1張以下時才可使用。<br>對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-069.jpg", //SRC
		"翠魔 バン//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】手札を2枚まで捨てる：この方法で捨てたカード1枚につき【エナチャージ1】をする。", //JP_TEXT
		"「出」捨棄最多2張手牌：此方法捨棄卡牌每有1張則【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P08-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-070.jpg", //SRC
		"コードイート ケバブ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】手札からこのカードを捨てる：あなたの緑のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋5000する。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、[無][無]を払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「起」從手牌捨棄此卡牌：我方場上1隻綠色精靈作對象，直到下一個對方回合結束時，該精靈的力量+5000。<br><br>「生命爆發」：對方1隻精靈作對象，可以支付無2。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P08-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-071.jpg", //SRC
		"羅踊植 ハイビス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニのパワーはあなたのエナゾーンにあるカードが持つ色の種類1つにつき＋1000される。（無色は色に含まれない）<br><br>【常】：対戦相手のターンの間、あなたのエナゾーンにあるカードが持つ色が合計3種類以上あるかぎり、このシグニは【シャドウ（レベル2以下のシグニ）】を得る。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「常」：我方能量區的卡牌持有的顏色每有1種，此精靈的力量+1000。<br><br>「常」：對方回合中，我方能量區的卡牌持有的顏色有3種以上時，此精靈獲得【暗影(等級2以下精靈)】。<br><br>「生命爆發」：【能量填充1】。本回合中，下一次我方因精靈受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P08-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-072.jpg", //SRC
		"幻獣 緑子//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、表記されているパワーよりパワーの高いあなたのシグニ1体を対象とし、[緑][緑][無]を支払ってもよい。そうした場合、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）<br><br>【出】エクシード3（あなたのルリグの下からカードを合計3枚ルリグトラッシュに置く）：次の対戦相手のターン終了時まで、このシグニのパワーを＋5000する。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方1隻力量比表記力量高的精靈作對象，可以支付綠2無1。若如此做，使其獲得【槍兵】。<br><br>「出」超越3：直到回合結束時為止，此精靈力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-P08-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-073.jpg", //SRC
		"幻獣 マンモ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、ターン終了時まで、あなたのすべてのシグニのパワーを＋3000する。<br><br>【自】（ターン2）：あなたのパワー10000以上の＜地獣＞のシグニ1体がアタックしたとき、【エナチャージ1】をする。", //JP_TEXT
		"「自」：對方攻擊階段開始時，直到回合結束時為止，我方所有精靈的力量+3000。<br><br>「自」(回合2)：我方1隻力量10000以上的＜地獸＞精靈攻擊時，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P08-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-074.jpg", //SRC
		"量産", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"以下の2つから1つを選ぶ。<br>①あなたのエナゾーンから緑のシグニ1枚を対象とし、それを場に出す。<br>②あなたのエナゾーンから《コードラビリンス アト//メモリア》か《コードメイズ ウムル//メモリア》か《紅魔 タウィル//メモリア》1枚を対象とし、それを場に出す。次の対戦相手のターン終了時まで、それのパワーを＋3000する。<br><br>【ライフバースト】：【エナチャージ1】をする。その後、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。", //JP_TEXT
		"以下2項中選擇1項。<br>①我方能量區1張綠色精靈作對象，將其出場。<br>②我方能量區1張《コードラビリンス アト//メモリア》或《コードメイズ ウムル//メモリア》或《紅魔 タウィル//メモリア》作對象，將其出場。直到下一個對方回合結束時為止，將其力量+3000。<br><br>「生命爆發」：【能量填充1】。之後，我方能量區最多1張精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P08-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-075.jpg", //SRC
		"凶魔 ワイト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたの効果によってこのカードが捨てられたとき、[無]を支払ってもよい。そうした場合、このカードをトラッシュから手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「自」：因我方效果捨棄此卡牌時，可以支付無1。若如此做，此卡牌從廢棄區加入手牌。<br><br>「生命爆發」：對方1隻精靈作對象，可以捨棄1張手牌。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P08-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-076.jpg", //SRC
		"小装 テツアレイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの覚醒状態のシグニのパワーを＋3000する。<br><br>【自】：あなたのターン終了時、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「常」：我方覺醒狀態的精靈力量+3000。<br><br>「自」：我方回合結束時，此精靈覺醒。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P08-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-077.jpg", //SRC
		"コードアート Sカイキャット", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】手札からスペルを1枚捨てる：あなたのデッキの上からカードを3枚見る。その中からカードを1枚まで手札に加え、残りをトラッシュに置く。", //JP_TEXT
		"「出」從手牌捨棄1張魔法：查看我方牌組上方3張卡牌。將其中最多1張卡牌加入手牌，剩下的放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P08-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-078.jpg", //SRC
		"凶魔 センベロ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがコストか効果によって場からトラッシュに置かれたとき、【エナチャージ1】をする。", //JP_TEXT
		"「自」：此精靈因費用或效果從場上放置到廢棄區時，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P08-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-079.jpg", //SRC
		"ツヴァイ＝マムシ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたの間、コストが効果1つによってあなたのデッキからカードが合計2枚以上トラッシュに置かれたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「自」(回合1)：我方回合中，因1個費用或效果使我方牌組卡牌合計有2張以上放置到廢棄區時，對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P08-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-080.jpg", //SRC
		"羅星 ハルッブ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のアタックフェイズ開始時、ターン終了時まで、対戦相手のすべてのレベル1のシグニは「【自】：このシグニがアタックしたとき、ターン終了時まで、このシグニのパワーを－8000する。」を得る。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。②あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」：對方攻擊階段開始時，直到回合結束時為止，對方所有等級1的精靈獲得「自：此精靈攻擊時，直到回合結束時為止，此精靈力量-8000。」。<br><br>「生命爆發」：選擇1項。①對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。②我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-081.jpg", //SRC
		"インサイド・デビルズ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"以下の2つから1つを選ぶ。<br>①対戦相手のシグニ1体を対象とし、あなたの＜悪魔＞のシグニ1体を場からトラッシュに置く。そうした場合、ターン終了時まで、それのパワーを－10000する。<br>②あなたのトラッシュから＜悪魔＞のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"以下2項中選擇1項。<br>①對方1隻精靈作對象，我方1隻＜惡魔＞精靈從場上放置到廢棄區。若如此做，直到回合結束時為上，將其力量-10000。<br>②我方廢棄區1張＜惡魔＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P08-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-082.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-001.jpg", //SRC
		"ブレイブリー・ヒロインズ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>このターン、あなたが次にルリグをグロウする場合、グロウするためのコストは[無(4)]減る。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>本回合中，我方下一次分身成長時，成長所需的費用減無4。"	//TW_TEXT
		],
	[
		"WXDi-P09-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-002.jpg", //SRC
		"宇宙級母性", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《無》×6", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>対戦相手のすべてのシグニをデッキの一番上に置く。（置く順番は対戦相手が決める）", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>對方所有精靈放回牌組上方。（放置的順序由對方決定）"	//TW_TEXT
		],
	[
		"WXDi-P09-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-003.jpg", //SRC
		"禍キ目ノ疼キ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×5", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>次の対戦相手のターン終了時まで、対戦相手のシグニゾーン1つを消す。（そこにあるすべてをトラッシュに置く。プレイヤーはそこにシグニを配置できない）", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>直到下一個對方回合結束時為止，消去對方的1個精靈區。（該區所有的東西都放置到廢棄區。玩家不能在該區配置精靈）"	//TW_TEXT
		],
	[
		"WXDi-P09-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-004.jpg", //SRC
		"カウントダウン・ヒールズ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"クラス1つを宣言する。その後、あなたのトラッシュから宣言したクラスを持ち[ガード]を持たない、レベル1、レベル2、レベル3のシグニをそれぞれ1枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"宣言1個種族。之後，我方廢棄區持有宣言種族且不持有防禦標記的等級1、等級2、等級3精靈最多各1張作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-005.jpg", //SRC
		"カーニバル ―TI―", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"カーニバル", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"2", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【起】（ターン1）手札を1枚捨てる：ターン終了時まで、このルリグは「【自】（ターン1）：このルリグがアタックしたとき、以下の3つから1つを選ぶ。①カードを1枚引く。②【エナチャージ1】③対戦相手のシグニ1体を対象とし、それをトラッシュに置く。」を得る。<br><br>【起】（ゲーム1）[赤(0)]：対戦相手のシグニを2体まで対象とし、ターン終了時まで、それらを《サーバント ZERO》にする。<br>（《サーバント ZERO》はレベル1、＜精元＞、パワー1000、無色で能力を持たないシグニである）", //JP_TEXT
		"「起」(回合1)捨棄1張手牌：直到回合結束時為止，此分身獲得「自(回合1) ：此分身攻擊時，以下3項中選擇1項。①抽1張牌。②【能量填充1】③對方1隻精靈作對象，將其放置到廢棄區。」。<br><br>「起」(遊戲1)紅0：對方最多2隻精靈作對象，直到回合結束時為止，將其變為《侍從 ZERO》。<br>(《侍從 ZERO》 是等級1，<精元>，力量1000，無色不持有能力的精靈)"	//TW_TEXT
		],
	[
		"WXDi-P09-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-006.jpg", //SRC
		"レイラ＝オーバーテイク", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"レイラ", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"2", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：あなたの赤のシグニ1体を対象とし、ターン終了時まで、それは「【自】（ターン1）：このシグニがアタックしたとき、対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。」を得る。<br><br>【起】（ゲーム1）手札をすべて捨てる：このターン、次にこのルリグがアタックしたとき、そのアタックの間、対戦相手は【ガード】ができない。", //JP_TEXT
		"「起」(橫置)：我方1隻紅色精靈作對象，直到回合結束時為止，使其獲得「自(回合1)：此精靈攻擊時，對方1隻力量8000以下的精靈作對象，將其破壞。」。<br><br>「起」(遊戲1)捨棄所有手牌：本回合中，下一次此分身攻擊時，該攻擊中，對方不能【防禦】。"	//TW_TEXT
		],
	[
		"WXDi-P09-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-007.jpg", //SRC
		"メル＝チアーズ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"2", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのルリグデッキに《コードイート ケチャチャ》1枚と《コードイート セアブラマシマシ》1枚と《コードイート オンタマ》1枚を加える。<br><br>【起】[無]：あなたのシグニ1体を対象とし、あなたのルリグデッキからクラフトであるシグニ1枚をそれの【アクセ】にする。<br><br>【起】（ゲーム1）[緑(0)]：次の対戦相手のターンの間、対戦相手はスペルと【起】能力を使用できない。", //JP_TEXT
		"「出」：加入1張《コードイート ケチャチャ》和1張《コードイート セアブラマシマシ》和1張 《コードイート オンタマ》到我方分身牌組。<br><br>「起」無1：我方1隻精靈作對象，從我方分身牌組中將1張額外精靈成為其【附屬】。<br><br>「起」(遊戲1)綠0：下一個對方回中，對方不能使用魔法和「起」能力。"	//TW_TEXT
		],
	[
		"WXDi-P09-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-008.jpg", //SRC
		"ママ 3 MODE慈愛", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ママ", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"1", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【起】（ターン1）エナゾーンからそれぞれレベルの異なるシグニ3枚をトラッシュに置く：対戦相手のレベル3以上のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】（ゲーム1）[緑(0)]：次の対戦相手のターンの間、あなたが最初にダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「起」(回合1)能量區等級不同的3張精靈放置到廢棄區：對方1隻等級3以上的精靈作對象，將其破壞。<br><br>「起」(遊戲1)綠0：下一個對方回合中，我方最初受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P09-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-009.jpg", //SRC
		"ナナシ 其ノ参ノ踊LR", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのアタックフェイズの間、対戦相手の感染状態のシグニのパワーを－3000する。<br><br>【出】：対戦相手のシグニゾーン1つに【ウィルス】1つを置く。<br><br>【起】（ゲーム1）[黒(0)]：このターン終了時、あなたのすべてのシグニを裏向きにする。次の対戦相手のアタックフェイズ開始時、この方法で裏向きにしたシグニを、同じ場所にシグニがない場合、表向きにする。", //JP_TEXT
		"「常」：我方攻擊階段中，對方感染狀態的精靈力量-3000。<br><br>「出」：放置1個【病毒】到對方1個精靈區。<br><br>「起」(遊戲1)黑0：本回合中結束時，我方所有精靈反轉。下一個對方攻擊階段開始時，通過此方法反轉的精靈所在的位置沒有精靈的話，將其正面向上。"	//TW_TEXT
		],
	[
		"WXDi-P09-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-010.jpg", //SRC
		"絶歌の駄姫 グズ子", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"グズ子", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"2", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを5枚見る。その中からカード1枚をトラッシュに置き、残りを好きな順番でデッキの一番下に置く。<br><br>【起】（ターン1）[黒][無]：あなたのトラッシュからシグニ1枚を対象とし、それを場に出す。<br><br>【起】（ゲーム1）[黒(0)]：このターン、あなたのシグニ1体が効果によって場に出たとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「出」：查看我方牌組上方5張卡牌。將其中1張放置到廢棄區，剩下的按任意順序放回牌組下方。<br><br>「起」(回合1)黑1無1：我方廢棄區1張精靈作對象，將其出場。<br><br>「起」(遊戲1)黑0：本回合中，我方1隻精靈因效果出場時，對方1隻精靈作對象，直到回合結束時為止，其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P09-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-011.jpg", //SRC
		"カーニバル ―0―", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"カーニバル", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-012.jpg", //SRC
		"ーニバル ―PN―", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"カーニバル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-013.jpg", //SRC
		"カーニバル ―S―", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"カーニバル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-014.jpg", //SRC
		"レイラ＝ニュートラル", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"レイラ", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-015.jpg", //SRC
		"レイラ＝ターボ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"レイラ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-016.jpg", //SRC
		"レイラ＝ドラッグ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"レイラ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-017.jpg", //SRC
		"メル＝バラライカ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-018.jpg", //SRC
		"メル＝カンパリ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-019.jpg", //SRC
		"ママ♥0", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ママ", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"4", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-020.jpg", //SRC
		"ママ♥1 MODE3", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ママ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-021.jpg", //SRC
		"ママ♥2", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ママ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-022.jpg", //SRC
		"ナナシ 其ノ壱ノ別", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-023.jpg", //SRC
		"ナナシ 其ノ爾", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-024.jpg", //SRC
		"駄姫 グズ子", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"グズ子", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-025.jpg", //SRC
		"未明の駄姫 グズ子", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"グズ子", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-026.jpg", //SRC
		"逢魔の駄姫 グズ子", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"グズ子", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P09-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-027.jpg", //SRC
		"ドーナ『がんばれ！』", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを4枚見る。その中からセンタールリグと共通のする色を持つシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組上方4張卡牌。將其中最多2張持有我方中央分身共同顏色的精靈公開加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P09-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-028.jpg", //SRC
		"ドーナ『応援してね！』", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル1のシグニ1体を対象とし、それを手札に戻す。<br><br>【出】：◎◎を得る。<br>（プレイヤーが保持できる◎の上限は5枚である）", //JP_TEXT
		"「出」：對方1隻等級1的精靈作對象，將其返回手牌。<br><br>「出」：獲得Coin*2。"	//TW_TEXT
		],
	[
		"WXDi-P09-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-029.jpg", //SRC
		"ドーナ『いけいけ！』", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー8000以下のシグニ1体を対象とし、それを手札に戻す。<br><br>【出】：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」： 對方1隻力量8000以下的精靈作對象，將其返回手牌。<br><br>「出」：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-030.jpg", //SRC
		"ドーナ『輝いてる！』", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの手札からシグニ1枚を場に出す。そのシグニの【出】能力は発動しない。<br><br>【出】[白][無]：あなたの手札からシグニ1枚を場に出す。そのシグニの【出】能力は発動しない。<br><br>【出】[無][無][無]：あなたのデッキの上からカード5枚を見る。その中からシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br>（【出】能力は発動する順番を選べる）", //JP_TEXT
		"「出」：從我方手牌將1張精靈出場。該精靈的「出」能力不發動。<br><br>「出」白1無1： 從我方手牌將1張精靈出場。該精靈的「出」能力不發動。<br><br>「出」無3：查看我方牌組上方5張卡牌。將其中最多2張精靈公開加入手牌，剩下的按任意順序放回牌組下方。<br>(「出」能力的發動順序可選擇)"	//TW_TEXT
		],
	[
		"WXDi-P09-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-031.jpg", //SRC
		"ドーナ『エスケープ！』", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×5", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】手札を2枚捨てる：このターン、シグニアタックステップをスキップする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」捨棄2張手牌：本回合中，跳過精靈的攻擊階段。"	//TW_TEXT
		],
	[
		"WXDi-P09-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-032.jpg", //SRC
		"あーやの出番！", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー5000以下のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「出」：對方1隻力量5000以下的精靈作對象，將其放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P09-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-033.jpg", //SRC
		"あーやの踊りについてきてね！", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：カードを1枚引く。<br><br>【出】：◎◎を得る。<br>（プレイヤーが保持できる◎の上限は5枚である）", //JP_TEXT
		"「出」：抽1張牌。<br><br>「出」：獲得Coin*2。"	//TW_TEXT
		],
	[
		"WXDi-P09-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-034.jpg", //SRC
		"あーやの畳返し！", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それを裏向きにする。このターン終了時、この方法で裏向きにしたシグニを、同じ場所にシグニがない場合、表向きにする。同じ場所にシグニがある場合、トラッシュに置く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其反轉。本回合結束時，通過此方法反轉的精靈，所在的位置沒有精靈的話，將其正面向上。所在的位置有精靈的話，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P09-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-035.jpg", //SRC
		"あーやの魅力にメロメロ！", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニを2体まで対象とし、それらをダウンする。<br><br>【出】[無][無][無][無]：対戦相手のダウン状態のシグニ1体を対象とし、それをデッキの一番下に置く。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方最多2隻精靈作對象，將其橫置。<br><br>「出」無4：對方1隻橫置狀態的精靈作對象，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P09-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-036.jpg", //SRC
		"あーやのホログラフ！", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：ターン終了時まで、このルリグは「【自】：対戦相手のシグニかルリグ1体がアタックしたとき、あなたと対戦相手は自分のデッキの一番上を公開し、そのカードをデッキの一番下に置く。この方法で公開されたカードがどちらも【ライフバースト】を持っているか、どちらも【ライフバースト】を持っていない場合、そのアタックを無効にする。」を得る。", //JP_TEXT
		"「出」：直到回合結束時為止，此分身獲得「自：對方1隻精靈或分身攻擊時，公開我方和對方牌組上方1張卡，將該卡牌放置到牌組下方。通過此方法公開的卡牌都持有生命爆發標記或都不持有生命爆發標記的話，該攻擊無效。」。"	//TW_TEXT
		],
	[
		"WXDi-P09-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-037.jpg", //SRC
		"聖魔姫 オロチマル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のパワー12000以下のシグニ1体を対象とし、以下の2つから1つを選ぶ。<br>①手札を3枚捨ててもよい。そうした場合、それを手札に戻す。<br>②手札からカード2枚と[ガード]を持つシグニ1枚を捨ててもよい。そうした場合、それをゲームから除外する。<br><br>【出】[白][無]：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻力量12000以下的精靈作對象，下列2項中選擇1項。<br>①可以捨棄3張手牌。若如此做，將其返回手牌。<br>②可以從手牌捨棄2張卡牌和1張持有防禦標記的精靈。若如此做，將其從遊戲中除外。<br><br>「出」白1無1：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-038.jpg", //SRC
		"コードハート LION//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、このシグニが覚醒状態の場合、[白][白]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは「【自】（ターン1）：このシグニがアタックしたとき、このシグニをアップし、ターン終了時まで、このシグニは能力を失う。」を得る。<br><br>【自】：あなたがスペルを使用したとき、それがこのターンにあなたが使用した3枚目のスペルだった場合、このシグニは覚醒する。", //JP_TEXT
		"「自」：我方攻擊階段開始時，此精靈是覺醒狀態的話，可以支付白2。若如此做，直到回合結束時為止，此精靈獲得「自(回合1)：此精靈攻擊時，豎直此精靈，直到回合結束時為止，此精靈失去能力。」。<br><br>「自」：我方使用魔法時，其為本回合我方第3次使用魔法的話，此精靈會覺醒。"	//TW_TEXT
		],
	[
		"WXDi-P09-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-039.jpg", //SRC
		"紅将姫 リル//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、このターンにあなたが◎を合計1枚以上支払っていた場合、対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[赤][無]：あなたのトラッシュから[ライズ]を持つシグニ1枚を対象とし、それを場に出す。<br><br>【起】◎：対戦相手は自分のルリグデッキからカードを1枚公開する。", //JP_TEXT
		"「自」：我方攻擊階段開始時，本回合我方有支付1Coin以上以的話，對方1隻力量8000以下的精靈作對象，將其破壞。<br><br>「出」紅1無1：我方廢棄區1張持有升階標記的精靈作對象，將其出場。<br><br>「起」Coin*1：對方公開自己分身牌組的1張卡牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-040.jpg", //SRC
		"轟炎 フレイスロ団長", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、手札をすべて捨ててもよい。この方法でカードを6枚以上捨てた場合、対戦相手のライフクロス1枚をクラッシュする。<br><br>【自】：このシグニがアタックしたとき、あなたの手札が0枚の場合、[赤][赤]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは【アサシン】を得る。", //JP_TEXT
		"「自」：我方攻擊階段開始時，可以捨棄所有卡牌。通過此方法捨棄的卡牌有6張以上的話，擊潰對方1張生命護甲。<br><br>「自」：此精靈攻擊時，我方手牌是0張的話，可以支付紅2。若如此做，此精靈獲得【暗殺】。"	//TW_TEXT
		],
	[
		"WXDi-P09-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-041.jpg", //SRC
		"羅輝石 インディゴライト", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュに＜宝石＞のシグニが5枚以上あるかぎり、このシグニのパワーは＋3000される。<br><br>【自】（ターン1）：あなたの＜宝石＞のシグニ1体がバニッシュされたとき、対戦相手は手札を1捨てる。<br><br>【起】（ターン1）手札を1捨てる：あなたのデッキの上からカードを2枚見る。その中からカード1枚を手札に加え、残りをトラッシュに置く。<br><br>【ライフバースト】：カードを2枚引く。あなたの手札から＜宝石＞のシグニを1枚まで場に出す。", //JP_TEXT
		"「常」：我方廢棄區＜寶石＞精靈有5張以上時，此精靈力量+3000。<br><br>「自」(回合1)：我方1隻＜寶石＞精靈被破壞時，對方捨棄1張手牌。<br><br>「起」(回合1)捨棄1張手牌：查看我方牌組上2張卡牌。其中1張卡牌加入手牌，剩下的放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P09-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-042.jpg", //SRC
		"羅菌姫 みこみこ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋3000され、このシグニは「【自】：このシグニがバニッシュされたとき、対戦相手が手札を1枚捨てないかぎり、このシグニをエナゾーンからダウン状態で場に出す。」を得る。<br><br>【自】：あなたのアタックフェイズ開始時、対戦相手は手札を1枚捨てる。その後、対戦相手の手札が0枚の場合、このシグニは覚醒する。", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，此精靈力量+3000，此精靈獲得「自：此精靈被破壞時，對方不捨棄1張手牌的話，此精靈從能量區以橫置狀態出場。」。<br><br>「自」：我方攻擊階段開始時，對方捨棄1張手牌。之後，對方手牌數是0張的話，此精靈會覺醒。"	//TW_TEXT
		],
	[
		"WXDi-P09-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-043.jpg", //SRC
		"翠美姫 コンテンポラ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、あなたのシグニは【シャドウ（レベル1）】と【シャドウ（レベル2）】を得る。<br><br>【自】：このカードが対戦相手の効果によっていずれかの領域からトラッシュに置かれたとき、[無]を支払ってもよい。そうした場合、このシグニをトラッシュから手札に加える。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②【エナチャージ1】", //JP_TEXT
		"「常」：對方回合中，我方精靈獲得【暗影(等級1)】和【暗影(等級2)】。<br><br>「自」：此卡牌因對方效果從任意區域移動到廢棄區時，可以支付無1。若如此做，此精靈從廢棄區加入手牌。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②【能量填充1】"	//TW_TEXT
		],
	[
		"WXDi-P09-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-044.jpg", //SRC
		"コードオーダー メル//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを2枚このシグニの下に置く。（表向きで置く）<br><br>【起】[緑]：あなたのデッキの上からカードを2枚見る。その中から1枚をこのシグニの下に置き、残りを好きな順番でデッキの一番下に置く。<br><br>【起】このシグニの下から同名のカード2枚をトラッシュに置く：ターン終了時まで、このシグニは【ランサー】を得る。<br><br>【起】◎：ターン終了時まで、このシグニのパワーを＋5000する。", //JP_TEXT
		"「出」：我方牌組上2張卡牌放置到此精靈下。(正面向上)<br><br>「起」綠1：查看我方牌組上2張卡牌。其中1張放置到此精靈下，剩下的按任意順序放回牌組下。<br><br>「起」此精靈下2張同名的卡牌放置到廢棄區：直到回合結束時為止，此精靈獲得【槍兵】。<br><br>「起」Coin*1：直到回合結束時為止，此精靈力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-P09-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-045.jpg", //SRC
		"惨之遊姫 ジンロウ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このターンにあなたのシグニが1体以上トラッシュから場に出ていた場合、対戦相手のシグニ1体を対象とし、[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－10000する。<br><br>【起】手札を3枚捨てる：あなたのトラッシュからこのカードを場に出す。（この能力はこのカードがトラッシュにある場合にしか使用できない）", //JP_TEXT
		"「自」：此精靈攻擊時，本回合我方精靈有1隻以上從廢棄區出場的話，對方1隻精靈作對象，可以支付黑1。若如此做，直到回合結束時為止，將其力量-10000。<br><br>「起」捨棄3張手牌：我方廢棄區的此卡牌出場。(此能力只有此卡牌在廢棄區的時倏才能使用。)"	//TW_TEXT
		],
	[
		"WXDi-P09-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-046.jpg", //SRC
		"羅菌姫 ナナシ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのデッキの一番上のカードをこのシグニの下に置く。（表向きで置く）<br><br>【自】：このシグニがアタックしたとき、対戦相手のシグニを2体まで対象とし、ターン終了時まで、それらのパワーをそれぞれこのシグニの下にあるカード1枚につき－3000する。<br><br>【起】（ターン1）◎◎：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－5000する。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方牌組上1張卡牌放置到此精靈下。(正面向上)<br><br>「自」：此精靈攻擊時，對方最多2隻精靈作對象，直到回合結束時為止，此精靈下方每有1張卡牌，其力量-3000。<br><br>「起」(回合1)Coin*2：對方1隻精靈作對象，直到回合結束時為止，其力量-5000。"	//TW_TEXT
		],
	[
		"WXDi-P09-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-047.jpg", //SRC
		"幻竜姫 真・遊月//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"赤緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのライフクロスが1枚以下で対戦相手相手のエナゾーンにカードが2枚以上ある場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【自】：このシグニがアタックしたとき、このターンにあなたの効果によって対戦相手のエナゾーンからカードが1枚以上トラッシュに置かれていた場合、[赤][緑][無]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは【アサシン】を得る。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方生命護甲是1張以下且對方能量區卡牌有2張以上的話，對方選擇自己能量區的1張卡牌放置到廢棄區。<br><br>「自」：此精靈攻擊時，本回合因我方效果使對方能量區的卡牌有1張以上放置到廢棄區的話，可以支付紅1綠1無1。若如此做，直到回合結束時為止，此精靈獲得【暗殺】。"	//TW_TEXT
		],
	[
		"WXDi-P09-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-048.jpg", //SRC
		"コードハート ピルルクAPEX//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"青黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：【シャドウ（スペル）】<br><br>【自】（ターン1）：あなたがスペルを使用したとき、対戦相手のシグニ1体を対象とし、[青]か[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－8000する。<br><br>【出】：あなたのデッキの上からカードを3枚見る。その中からスペル1枚を公開し手札に加え、残りをトラッシュに置く。", //JP_TEXT
		"「常」：【暗影(魔法)】<br><br>「自」(回合1)：我方使用魔法時，對方1隻精靈作對象，可以支付藍1或黑1。若如此做，直到回合結束時為止，將其力量-8000。<br><br>「出」：查看我方牌組上3張卡牌。其中1張魔法公開並加入手牌，剩下的放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P09-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-049.jpg", //SRC
		"コードメイズ キョウシュウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、このシグニは【シャドウ（レベル1）】を得る。（このシグニは対戦相手のレベル1のルリグとレベル1のシグニによって対象にされない）", //JP_TEXT
		"「常」：對方回合中，此精靈獲得【暗影(等級1)】。(此精靈不會成為對方等級1的分身和等級1的精靈的對象)"	//TW_TEXT
		],
	[
		"WXDi-P09-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-050.jpg", //SRC
		"コードアート Gラボ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを2枚見る。その中からカード1枚をデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。<br><br>【自】：あなたのターン終了時、このシグニがアップ状態の場合、あなたのデッキの一番上を公開してもよい。そのカードがスペルの場合、カードを1枚引く。", //JP_TEXT
		"「出」：查看我方牌組上2張卡牌。其中1張卡牌放回牌組上，剩下的按任意順序放回牌組下。<br><br>「自」：我方回合結束時，此精靈是豎直狀態的話，可以公開我方牌組上1張卡牌。該卡牌是魔法的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-051.jpg", //SRC
		"幻怪 ドーナ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[白]：シグニ1体を対象とし、次の対戦相手のターン終了時まで、このシグニの基本パワーはそれと同じ値になる。<br><br>【起】（ターン1）◎◎◎：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」白1：1隻精靈作對象，直到下一個對方回合結束時為止，此精靈的基本力量與該精靈的力量相同。<br><br>「起」(回合1)Coin*3：查看我方牌組上3張卡牌。其中1張精靈公開並加入手牌，剩下的按任意順序放回牌組下。<br><br>「生命爆發」：查看我方牌組上3張卡牌。其中1張精靈公開並加入手牌或出場，剩下的按任意順序放回牌組下。"	//TW_TEXT
		],
	[
		"WXDi-P09-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-052.jpg", //SRC
		"中罠 ゆかゆか//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手が[無]を支払わないかぎり、ターン終了時まで、対戦相手のすベてのシグニは能力を失う。<br><br>【ライフバースト】：ターン終了時まで、対戦相手のすべてのシグニは能力を失う。カードを1枚引く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方不支付無1的話，直到回合結束時為止，對方所有精靈失去能力。<br><br>「生命爆發」： 直到回合結束時為止，對方所有精靈失去能力。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-053.jpg", //SRC
		"羅星 タテーザ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのレベル1のシグニを2体まで対象とし、次の対戦相手のターン終了時まで、それらは「【常】：対戦相手のターンの間、【シャドウ（レベル2以下のシグニ）】を得る。」を得る。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「出」：我方最多2隻等級1的精靈作對象，直到下一個對方回合結束時為止，使其獲得「常：對方回合中，獲得【暗影(等級2以下的精靈)】。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-054.jpg", //SRC
		"聖将 フィン・マックール", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、アップ状態のこのシグニをダウンしてもよい。そうした場合、以下の2つから1つを選ぶ。<br>①対戦相手のシグニ1体を対象とし、それをトラッシュに置く。<br>②カードを1枚引く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，可以橫置豎直狀態的此精靈。若如此做，以下2項中選擇1項。<br>①對方1隻精靈作對象，將其放置到廢棄區。<br>②抽1張牌。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-055.jpg", //SRC
		"ハウリング・シャウト", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのシグニ1体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋5000する。それが《コードハート LION》か《幻獣 LOVIT//メモリア》か《爆砲 WOLF//メモリア》の場合、それは覚醒する。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"我方1隻精靈作對象，直到下一個對方回合結束時為止，將其力量+5000。若是《コードハート LION//メモリア》或《幻獣 LOVIT//メモリア》或《爆砲 WOLF//メモリア》的話，其會覺醒。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-056.jpg", //SRC
		"紅将 マタ・ハリ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】◎◎：対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」Coin*2：對方1隻力量3000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P09-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-057.jpg", //SRC
		"小装 サミダレ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[赤] 手札を1枚捨てる：あなたのトラッシュから＜ウェポン＞のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「出」紅1捨棄1張手牌：我方廢棄區1張＜武器＞精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以捨棄1張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P09-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-058.jpg", //SRC
		"幻獣 LOVIT//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは覚醒状態であるかぎり、「【自】：あなたのターン終了時、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、それをトラッシュに置く。」を得る。<br><br>【自】：このシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，獲得「自：我方回合結束時，對方能量1張與對方中央分身不持有共通顏色的卡牌作對象，將其放置到廢棄區。」。<br><br>「自」：此精靈因戰鬥破壞對方1隻精靈時，此精靈會覺醒。"	//TW_TEXT
		],
	[
		"WXDi-P09-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-059.jpg", //SRC
		"羅星 キクノジョー", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】（ターン1）手札からレベル1のシグニを1枚捨てる：対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「起」(回合1)捨棄1張等級1的精靈：對方1隻力量5000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P09-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-060.jpg", //SRC
		"幻獣 ミーアキャット", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのパワー10000以上の＜地獣＞のシグニ1体がバニッシュされたとき、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのシグニ1体を対象とし、ターン終了後まで、それのパワーをあなたの場にある＜地獣＞のシグニ1体につき＋2000する。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」(回合1)：我方1隻力量10000以上的＜地獸＞精靈被破壞時，對方選擇自己能量區1張卡牌放置到廢棄區。<br><br>「自」：我方攻擊階段開始時，我方1隻精靈作對象，直到回合結束時為止，我方場上每有1隻＜地獸＞精靈則其力量+2000。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P09-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-061.jpg", //SRC
		"紅魔 ディアボロス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手のパワー10000以下のシグニ1体を対象とし、[赤]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【出】：あなたは手札をすべて捨てる。<br>（コストのない【出】能力は発動しないことを選べない）", //JP_TEXT
		"「自」：此精靈攻擊時，對方1隻力量10000以下的精靈作對象，可以支付紅1。若如此做，將其破壞。<br><br>「出」：我方捨棄所有手牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-062.jpg", //SRC
		"神流の炎舞", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"以下の2つから1つを選ぶ。<br>①あなたのトラッシュから＜武勇＞のシグニ1枚を対象とし、[赤]を支払ってもよい。そうした場合、それを手札に加える。<br>②対戦相手のパワー10000以下のシグニ1体を対象とし、手札から＜武勇＞のシグニ1枚を捨てる。そうした場合、それをバニッシュする。", //JP_TEXT
		"以下2項中選擇1項。<br>①我方廢棄區1張＜武勇＞精靈作對象，可以支紅1。若如此做，將其加入手牌。<br>②對方1隻力量10000以下的精靈作對象，從手牌捨棄1張＜武勇＞精靈。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P09-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-063.jpg", //SRC
		"蒼魔 キマリス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、このシグニがアップ状態の場合、あなたのデッキの一番上を公開する。そのカードが＜悪魔＞のシグニの場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，此精靈是豎直狀態的話，公開我方牌組上1張卡牌。該卡牌是＜惡魔＞精靈的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-064.jpg", //SRC
		"羅星 ヴォランス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手は手札を2枚まで捨ててよい。対戦相手はこの方法で捨てたカード1枚につきカードを1枚引く。", //JP_TEXT
		"「出」：對方可以捨棄最多2張卡牌。對方通過此方法每捨棄1張則抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-065.jpg", //SRC
		"コードイート クリームソーダ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手の場に凍結状態のシグニがある場合、対戦相手の手札を見る。あなたはその中から[ガード]を持たないカード1枚を選びデッキの一番下に置いてよい。そうした場合、対戦相手はカードを1枚引く。<br><br>【ライフバースト】：対戦相手のルリグかシグニ1体を対象とする。このターン、それがアタックしたとき、対戦相手が手札を3枚捨てないかぎり、そのアタックを無効にする。", //JP_TEXT
		"「出」：對方場上有凍結狀態精靈的話，查看對方手牌。我方可以選擇其中1張不持有防禦標記的卡牌放置到牌組下。若如此做，對方抽1張牌。<br><br>「生命爆發」：對方1隻分身作對象。本回合中，其攻擊時，對方不捨棄3張手牌的話，該攻擊無效。"	//TW_TEXT
		],
	[
		"WXDi-P09-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-066.jpg", //SRC
		"中罠 あや//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】（ターン1）[青(0)]：あなたの手札を1枚ルリグゾーンに裏向きで置く。次の対戦相手のターン終了時まで、あなたは「【起】【メインフェイズ】【アタックフェイズ】[青(0)]：この方法で置いたカードをルリグゾーンから手札に加える。」を得る。次の対戦相手のターン終了時、そのカードを手札に加える。<br><br>【起】（ターン1）◎◎：カードを1枚引く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「起」(回合1)藍0：我方1張手牌背向放置到分身區。直到下一個對方回合結束時為止，我方獲得「起(主要階段)(攻擊階段)藍0：通過此方法放置的卡牌從分身區加入手牌。」。下一個對方回合結束時，該卡牌加入手牌。<br><br>「起」(回合1)Coin*2：抽1張牌。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-067.jpg", //SRC
		"コードライド サザナミ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがライズされたとき、対戦相手の手札を見る。<br><br>【起】[ダウン]： カードを2枚引き、手札を2枚捨てる。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「自」：此精靈被升階時，查看對方手牌。<br><br>「起」(橫置)：抽2張牌，捨棄2張手牌。<br><br>「生命爆發」：查看我方牌組上3張卡牌。其中1張精靈公開加入手牌或出場，剩下的按任意順序放回牌組下。"	//TW_TEXT
		],
	[
		"WXDi-P09-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-068.jpg", //SRC
		"羅星 富士葵", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの一番上を公開する。それがレベル1のシグニの場合、カードを1枚引く。そうでない場合、そのカードをデッキの一番下に置く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のシグニを2体まで対象とし、それらをダウンする。②カードを1枚引く。", //JP_TEXT
		"「出」：公開我方牌組上1張卡牌。該卡牌是等級1精靈的話，抽1張牌。若不是的話，該卡牌放置到牌組下。<br><br>「生命爆發」：選擇1項。①對方最多2隻精靈作對象，將其橫置。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-069.jpg", //SRC
		"LIVELY LIVE", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたの《羅菌姫 みこみこ//メモリア》か《中罠 ゆかゆか//メモリア》か《羅原 まほまほ//メモリア》か青のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それは「【自】（ターン1）：このシグニが対戦相手の、能力か効果の対象になったとき、対戦相手の手札を1枚見ないで選び、捨てさせる」を得る。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。対戦相手は手札を1枚捨てる。", //JP_TEXT
		"我方的1隻《羅菌姫 みこみこ//メモリア》或《中罠 ゆかゆか//メモリア》或《羅原 まほまほ//メモリア》或藍色精靈作對象，直到下一個對方回合結束時為止，使其獲得「自(回合1)：此精靈因對方的能力或效果成為對象時，不查看對方手牌選擇1張，將其捨棄。」。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-070.jpg", //SRC
		"翠天 カスガノカミ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのエナゾーンにあるカードが持つ色が2種類以上あるかぎり、このシグニのパワーは＋4000される。", //JP_TEXT
		"「常」：我方能量區的卡牌持有顏色合計有2種以上常，此精靈力量+4000。"	//TW_TEXT
		],
	[
		"WXDi-P09-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-071.jpg", //SRC
		"翠美 マーブリング", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのメインフェイズ以外でこのシグニがバニッシュされたとき、あなたのシグニ1体を対象とし、ターン終了時まで、「【常】：バニッシュされない。」を得る。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方主要階段以外此精靈被破壞時，我方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不會被破壞。」。<br><br>「生命爆發」：對方1隻力量7000以上的精靈作對象，可以支付無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P09-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-072.jpg", //SRC
		"翠英 フレミング", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのライフクロスが5枚の場合、【エナチャージ1】をする。4枚の場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方生命護甲是5張的話，【能量填充1】。4張的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-073.jpg", //SRC
		"爆砲 WOLF//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは覚醒状態であるかぎり、「【自】：あなたのターン終了時、【エナチャージ1】をする。」を得る。<br><br>【自】：このシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，獲得「自：我方回合結束時，【能量填充1】。」。<br><br>「自」： 此精靈因戰鬥破壞對方1隻精靈時，此精靈會覺醒。"	//TW_TEXT
		],
	[
		"WXDi-P09-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-074.jpg", //SRC
		"幻水 ウツボ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋3000する。あなたの手札が5枚以上ある場合、代わりにターン終了時まで、それのパワーを＋5000する。<br><br>【出】◎◎：あなたのエナゾーンからシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがシグニよってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「出」：我方1隻精靈作對象，直到回合結束時為止，其力量+3000。我方手牌有5張以上的話，作為代替直到回合結束時為止，其力量+5000。<br><br>「出」Coin*2：我方能量區1張精靈作對象，將其加入手牌。<br><br>「生命爆發」：【能量填充1】。本回合中，下一次我方因精靈受到傷害的話，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P09-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-075.jpg", //SRC
		"ドライ＝スカンク", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：各ターン終了時、対戦相手のパワー10000以上のシグニ1体を対象とし、[緑]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【自】：アタックフェイズの間、このシグニがバニッシュされたとき、対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：各回合結束時，對方1隻力量10000以上的精靈作對象，可以支付綠1。若如此做，將其破壞。<br><br>「自」：攻擊階段中，此精靈被破壞時，對方1隻力量10000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P09-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-076.jpg", //SRC
		"激食", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"ベット―◎◎（このスペルを使用する際、使用コストとして追加で◎◎を支払ってもよい）<br><br>【エナチャージ2】をする。あなたがベットしていた場合、代わりに【エナチャージ3】をする。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"下注－Coin*2(此魔法使用時，可以支付使用費用和追加的Coin*2)<br><br>【能量填充2】。我方下注的話，作為代替【能量填充3】。<br><br>「生命爆發」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P09-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-077.jpg", //SRC
		"凶天 ゲフィオン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：あなたのデッキの上からカードを3枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「起」(橫置)：我方牌組上3張卡牌放置到廢棄區。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P09-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-078.jpg", //SRC
		"羅菌 オイゴナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたの《羅菌姫 ナナシ//メモリア》1体が場に出たとき、[無]を支払ってもよい。そうした場合、場にあるこのシグニをそのシグニの下に置く。<br><br>【出】手札から黒のカード1枚を捨てる：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。", //JP_TEXT
		"「自」：我方1隻《羅菌姫 ナナシ//メモリア》出場時，可以支付無1。若如此做，場上的此精靈放置到該精靈下。<br><br>「出」從手牌捨棄1張黑色卡牌：對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。"	//TW_TEXT
		],
	[
		"WXDi-P09-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-079.jpg", //SRC
		"コードオールド ヴォイニ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのメインフェイズの間、あなたのデッキからレベル1のシグニ1枚がトラッシュに置かれたとき、そのシグニを場に出す。ターン終了時、そのシグニを場からトラッシュに置く。<br><br>【出】◎：あなたのデッキの上からカードを3枚トラッシュに置く。", //JP_TEXT
		"「自」(回合1)：我方主要階段中，我方牌組1張等級1的精靈放置到廢棄區時，該精靈出場。回合結束時，該精靈從場上放置到廢棄區。<br><br>「出」Coin*1：我方牌組上3張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P09-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-080.jpg", //SRC
		"凶将 ジャック・ド・モレー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのシグニ1体がトラッシュから場に出たとき、次の対戦相手のターン終了時まで、このシグニのパワーを＋4000する。<br><br>【起】（ターン1）◎◎◎：あなたのトラッシュから黒のシグニ1枚を対象とし、それを場に出す。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないレベル2以下のシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「自」(回合1)：我方1隻精靈從廢棄區出場時，直到下一個對方回合結束時為止，此精靈力量+4000。<br><br>「起」(回合1)Coin*3：我方廢棄區1張黑色精靈作對象，將其出場。<br><br>「生命爆發」： 我方廢棄區1張不持有防禦標記的等級2以下精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P09-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-081.jpg", //SRC
		"羅原 まほまほ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手が手札を1枚捨てないかぎり、対戦相手のデッキの上からカードを4枚トラッシュに置く。", //JP_TEXT
		"「自」：此精靈攻擊時，對方不捨棄1張手牌的話，對方牌組上4張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P09-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-082.jpg", //SRC
		"羅原 Fe", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無][無]：あなたのトラッシュに＜原子＞のシグニが7枚以上ある場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。<br>（パワー0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」無2：我方廢棄區＜原子＞精靈有7張以上的話，對方1隻精靈作對象，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P09-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-083.jpg", //SRC
		"プリズン・プリーズ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"ベット―◎◎（このスペルを使用する際、使用コストとして追加で◎◎を支払ってもよい）<br><br>対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－7000する。あなたがベットしていた場合、代わりにターン終了時まで、それのパワーを－12000する。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、ターン終了時まで、それのパワーを－15000する。", //JP_TEXT
		"下注－Coin*2(此魔法使用時，可以支付使用費用和追加的Coin*2)<br><br>對方1隻精靈作對象，直到回合結束時為止，將其力量-7000。我方下注的話，作為代替直到回合結束時為止，將其力量-12000。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，直到回合結束時為止，將其力量-15000。"	//TW_TEXT
		],
	[
		"WXDi-P09-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-084.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P09-TK01A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-TK01A.jpg", //SRC
		"コードイート ケチャチャ", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（このクラフトは効果以外によっては場に出せない）<br><br>（【アクセ】はシグニ1体に1枚までしか付けられない。このクラフトが付いているシグニが場を離れるとこのクラフトは除外される）<br><br>【常】：これにアクセされているシグニのパワーを＋10000する。", //JP_TEXT
		"(此額外卡牌不能因效果以外出場)<br><br>(1隻精靈最多只能有1張【附屬】。被此額外卡牌附屬的精靈離場時，此額外卡牌會從遊戲中除外)<br><br>「常」：被此附屬的精靈力量+10000。"	//TW_TEXT
		],
	[
		"WXDi-P09-TK02A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-TK02A.jpg", //SRC
		"コードイート セアブラマシマシ", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（このクラフトは効果以外によっては場に出せない）<br><br>（【アクセ】はシグニ1体に1枚までしか付けられない。このクラフトが付いているシグニが場を離れるとこのクラフトは除外される）<br><br>【常】：これにアクセされているシグニは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"(此額外卡牌不能因效果以外出場)<br><br>(1隻精靈最多只能有1張【附屬】。被此額外卡牌附屬的精靈離場時，此額外卡牌會從遊戲中除外)<br><br>「常」：被此附屬的精靈獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-P09-TK03A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-TK03A.jpg", //SRC
		"コードイート オンタマ", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（このクラフトは効果以外によっては場に出せない）<br><br>（【アクセ】はシグニ1体に1枚までしか付けられない。このクラフトが付いているシグニが場を離れるとこのクラフトは除外される）<br><br>【常】：これにアクセされているシグニが場を離れる場合、代わりにこれをゲームから除外してもよい。そうした場合、そのシグニをダウンする。", //JP_TEXT
		"(此額外卡牌不能因效果以外出場)<br><br>(1隻精靈最多只能有1張【附屬】。被此額外卡牌附屬的精靈離場時，此額外卡牌會從遊戲中除外)<br><br>「常」：被此附屬的精靈離場的話，作為代替可以將此牌從遊戲中除外。若如此做，該精靈橫置。"	//TW_TEXT
		],
	[
		"WXDi-P10-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-001.jpg", //SRC
		"玩具行進曲", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《無》×6", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたのセンタールリグがレベル3以上の場合、ターン終了時まで、あなたのすべてのシグニは「【自】：このシグニがアタックしたとき、このシグニをアップし、ターン終了時まで、このシグニは能力を失う。」を得る。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方中央分身是等級3以上的話，直到回合結束時為止，我方所有精靈獲得「自：此精靈攻擊時，豎直此精靈，直到回合結束時為止，此精靈失去能力。」。"	//TW_TEXT
		],
	[
		"WXDi-P10-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-002.jpg", //SRC
		"アフタヌーンティーショー", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【自】：あなたのアタックフェイズ開始時、以下の2つから1つを選ぶ。<br>①あなたのエナゾーンからあなたのセンタールリグと共通する色を持つシグニ1枚を対象とし、それを手札に加える。<br>②【エナチャージ1】』", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>「自」：我方攻擊階段開始時，以下2項中選擇1項。<br>①我方能量區1張與我方中央分身持有共同顏色的精靈作對象，將其加入手牌。<br>②【能量填充1】"	//TW_TEXT
		],
	[
		"WXDi-P10-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-003.jpg", //SRC
		"ライク・ア・フレンズ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>対戦相手は手札を1枚捨て、自分のシグニ1体を選びトラッシュに置き、自分のエナゾーンからカード1枚を選びトラッシュに置き、自分のデッキの上からカードを2枚トラッシュに置く。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>對方捨棄1張手牌，選擇自己1隻精靈放置到廢棄區，選擇自己能量區1張卡牌放置到廢棄區，自己牌組上2張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P10-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-004.jpg", //SRC
		"み～んなではじめるアイドルライフ！", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>以下の3つから2つまで選ぶ。<br>①あなたのデッキの上からカードを5枚見る。その中から＜プリパラ＞のシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。その後、手札から＜プリパラ＞のシグニを好きな枚数場に出す。<br>②対戦相手のシグニ1体を対象とし、あなたの場に＜プリパラ＞のシグニが3体ある場合、それをバニッシュする。<br>③あなたの場にある＜プリパラ＞のシグニ1体につき【エナチャージ1】をする。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>以下3項中選擇最多2項。<br>①查看我方牌組上5張卡牌。將其中最多2張＜星光樂園＞的精靈公開並加入手牌，剩下的按任意順序放回牌組下方。之後，從手牌將任意張＜星光樂園＞精靈出場。<br>②對方1隻精靈作對象，我方場上＜星光樂園＞精靈有3隻的話，將其破壞。<br>③我方場上每有1隻＜星光樂園＞精靈則【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P10-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-005.jpg", //SRC
		"共宴の巫女 リメンバ・ディナー", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"リメンバ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：このルリグがアタックしたとき、対戦相手のシグニ1体を対象とし、それをダウンし凍結する。<br><br>【起】（ターン1）[白(0)]：あなたのデッキの上からカードを3枚見る。その中からカード1枚を手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【起】（ゲーム1）[白(0)]：次の対戦相手のターン終了時まで、対戦相手のセンタールリグとすべてのシグニは能力を失う。（この能力の使用後に場に出たルリグやシグニはこの効果の影響を受けない）", //JP_TEXT
		"「自」：此分身攻擊時，對方1隻精靈作對象，將其橫置並凍結。<br><br>「起」(回合1)白0：查看我方牌組上3張卡牌。將其中1張卡牌加入手牌，剩下的按任意順序放回牌組下方。<br><br>「起」(遊戲1)白0：直到下一個對方回合結束時為止，對方中央分身和所有精靈失去能力。（此能力使用後再出場的分身和精靈不受此效果影響）"	//TW_TEXT
		],
	[
		"WXDi-P10-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-006.jpg", //SRC
		"火露炎 花代・参", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】（ターン1）ライフクロス1枚をクラッシュする：カードを2枚引く。<br><br>【起】（ゲーム1）[赤(0)]：あなたのデッキをシャッフルし一番上のカードを公開し手札に加える。その後、あなたのシグニ1体を対象とし、この方法で公開されたカードが【ライフバースト】を持つ場合、ターン終了時まで、それは【アサシン】を得る。公開されたカードが【ライフバースト】を持たない場合、ターン終了時まで、それは【ダブルクラッシュ】を得る。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「起」(回合1)擊潰1張生命護甲：抽2張牌。<br><br>「起」(遊戲1)紅0：洗切我方牌組並將牌組上方1張卡牌公開且加入手牌。之後我方1隻精靈作對象，通過此方法公開的卡牌持有生命爆發標記的話，直到回合結束時為止，使其獲得【暗殺】。公開的卡牌不持有生命爆發標記的話，直到回合結束時為止，使其獲得【雙重擊潰】。"	//TW_TEXT
		],
	[
		"WXDi-P10-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-007.jpg", //SRC
		"ミルルン・セツナ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ミルルン", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のスペルの使用コストは[無(1)]増える。<br><br>【起】（ターン1）[青] シグニ1枚とスペル1枚を捨てる：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】（ゲーム1）[青(0)]：あなたのデッキの上からカードを10枚見る。その中からコストの合計が4以下になるようにスペルを2枚までチェックゾーンに置き、残りをデッキに加えてシャッフルする。この方法でチェックゾーンに置いたスペルを好きな順番でコストを支払わずに使用する。", //JP_TEXT
		"「常」：對方魔法的使用費用增加無1。<br><br>「起」(回合1)藍1捨棄1張精靈和1張魔法：對方1隻精靈作對象，將其破壞。<br><br>「起」(遊戲1)藍0：查看我方牌組上10張卡牌。將其中費用合計4以下的最多2張魔法放置到檢查區，剩下放回牌組洗切。通過此方法放置到檢查區的魔法按任意順序且不支付費用使用。"	//TW_TEXT
		],
	[
		"WXDi-P10-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-008.jpg", //SRC
		"参上 緑姫", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの手札からカードを3枚までエナゾーンに置く。<br><br>【起】（ターン1）[緑(0)]：シグニ1体を対象とし、ターン終了時まで、それのパワーを＋5000する。<br><br>【起】（ゲーム1）[緑][緑][緑][無]：あなたのエナゾーンからすべてのカードをトラッシュに置く。この効果であなたのトラッシュに置いたカード1枚につき対戦相手は自分のエナゾーンからカードを1枚選びトラッシュに置く。対戦相手のすべてのシグニをトラッシュに置く。", //JP_TEXT
		"「出」：我方手牌最多3張卡牌放置到能量區。<br><br>「起」(回合1)綠0：1隻精靈作對象，直到回合結束時為止，將其力量+5000。<br><br>「起」(遊戲1)綠3無1：我方能量區所有卡牌放置到廢棄區。通過此效果放置到我方廢棄區的卡牌每有1張則對方選擇自己能量區的1張卡牌放置到廢棄區。對方所有精靈放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P10-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-009.jpg", //SRC
		"掌握の冥者 ハナレ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ハナレ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、このターン、あなたの効果によってそれのパワーが－（マイナス）される場合、代わりに2倍－（マイナス）される。<br><br>【起】（ターン1）デッキの一番上のカードをトラッシュに置く：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをこの方法でトラッシュに置かれたシグニのレベル1につき－2000する。<br><br>【起】（ゲーム1）[黒(0)]：このターン、パワーが0以下の対戦相手のシグニがバニッシュされる場合、エナゾーンに置かれる代わりにトラッシュに置かれる。", //JP_TEXT
		"「出」：對方1隻精靈作對象，本回合中，因我方效果將其力量減少的話，作為代替減2倍。<br><br>「起」(回合1)牌組上方1張卡牌放置到廢棄區：對方1隻精靈作對象，直到回合結束時為止，通過此方法放置到廢棄區的精靈等級每有1，其力量-2000。<br><br>「起」(遊戲1)黑0：本回合中，對方力量為0以下的精靈被破壞的話，作為代替不放置到能量區而放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P10-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-010.jpg", //SRC
		"共宴の巫女 リメンバ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"リメンバ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-011.jpg", //SRC
		"共宴の巫女 リメンバ・ブレック", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"リメンバ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-012.jpg", //SRC
		"共宴の巫女 リメンバ・ランチ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"リメンバ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-013.jpg", //SRC
		"花代・壱", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-014.jpg", //SRC
		"花代・爾", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-015.jpg", //SRC
		"ミルルン・ノット", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ミルルン", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-016.jpg", //SRC
		"ミルルン・ナノ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ミルルン", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-017.jpg", //SRC
		"ミルルン・ピコ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ミルルン", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-018.jpg", //SRC
		"一ノ娘 緑姫", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-019.jpg", //SRC
		"二ノ娘 緑姫", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-020.jpg", //SRC
		"冥者 ハナレ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ハナレ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-021.jpg", //SRC
		"残悔の冥者 ハナレ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ハナレ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-022.jpg", //SRC
		"来夢の冥者 ハナレ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ハナレ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P10-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-023.jpg", //SRC
		"遊月・ガーネット", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「出」：對方1隻力量5000以下的精靈作對象，將其破壞。<br><br>「出」：對方能量區1張與對方中央分身不持有共同顏色的卡牌作對象，將其放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-P10-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-024.jpg", //SRC
		"遊月・ルビー", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻力量10000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-025.jpg", //SRC
		"遊月・レッドベリル", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【起】（ゲーム1）[無]：あなたのシグニを2体まで対象とし、ターン終了時まで、それらは「【常】：このシグニは正面のシグニのパワーが10000以上であるかぎり、【アサシン】を得る。」を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		"「起」(遊戲1)無1：我方最多2隻精靈作對象，直到回合結束時為止，使其獲得「常：此精靈正面的精靈力量是10000以上時，獲得【暗殺】。」。"	//TW_TEXT
		],
	[
		"WXDi-P10-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-026.jpg", //SRC
		"遊月・アンデシン", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[無][無]：対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカードを2枚まで対象とし、それらをトラッシュに置く。", //JP_TEXT
		"「出」：對方1隻力量12000以下的精靈作對象，將其破壞。<br><br>「出」無2： 對方能量區最多2張與對方中央分身不持有共同顏色的卡牌作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P10-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-027.jpg", //SRC
		"遊月・ルベライト", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】ライフクロス2枚をクラッシュする：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「出」擊潰2張生命護甲：對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-028.jpg", //SRC
		"ウリス・スケアー", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル1のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：対戦相手のデッキの上からカードを4枚トラッシュに置く。", //JP_TEXT
		"「出」：對方1隻等級1的精靈作對象，將其破壞。<br><br>「出」：對方牌組上4張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P10-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-029.jpg", //SRC
		"ウリス・マッド", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを2枚トラッシュに置く。その後、あなたのトラッシュから[ガード]を持たない、共通するクラスを持つシグニ2枚を対象とし、それらを手札に加える。", //JP_TEXT
		"「出」： 我方牌組上2張卡牌放置到廢棄區。之後，我方廢棄區不持有防禦標記且持有相同種族的2張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P10-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-030.jpg", //SRC
		"ウリス・オーラ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのルリグ1体を対象とし、ターン終了時まで、それは「【自】（ターン1）：このルリグがアタックしたとき、あなたのシグニを2体まで場からトラッシュに置く。その後、あなたのトラッシュからこの方法でトラッシュに置いたシグニ1体につき【ライフバースト】を持たないカード1枚を対象とし、それらをライフクロスに加える。」を得る。", //JP_TEXT
		"「出」：我方1隻分身作對象，直到回合結束時為止，使其獲得「自(回合1)：此分身攻擊時，我方最多2隻精靈放置到廢棄區。之後，通過此方法放置到廢棄區的精靈每有1隻則將廢棄區1張不持有生命爆發標記的卡牌作對象，將其加入生命護甲。」。"	//TW_TEXT
		],
	[
		"WXDi-P10-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-031.jpg", //SRC
		"ウリス・ブラッディ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュからシグニ1枚を対象とし、それを場に出す。それの【出】能力は発動しない。<br><br>【出】[黒][無][無][無] シグニ1体を場からトラッシュに置く：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：我方廢棄區1張精靈作對象，將其出場。該精靈的「出」能力不發動。<br><br>「出」黑1無3場上1隻精靈放置到廢棄區：對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-032.jpg", //SRC
		"ウリス・アフリクト", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをあなたのトラッシュにあるカード1枚につき－1000する。<br><br>【出】：各プレイヤーは自分のデッキの上からカードを4枚トラッシュに置く。<br>（複数の【出】能力は好きな順番で発動できる）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，我方廢棄區卡牌每有1張則其力量-1000。<br><br>「出」無1：各玩家將自己牌組上方4張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P10-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-033.jpg", //SRC
		"プリパラアイドル 真中らぁら", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、《プリパラアイドル 真中らぁら》以外のあなたの＜プリパラ＞のシグニのパワーを＋2000する。<br><br>【出】[無][無]：あなたのデッキの上からカードを5枚公開し、それらのカードをシャッフルしてデッキの一番下に置く。その後、対戦相手のシグニ1体を対象とし、以下から1つを選ぶ。①その中に＜プリパラ＞のシグニが1枚以上ある場合、それを手札に戻す。②その中に《プリパラアイドル 南みれぃ》と《プリパラアイドル 北条そふぃ》がある場合、それをトラッシュに置く。", //JP_TEXT
		"「常」：對方回合中，《プリパラアイドル 真中らぁら》以外的我方＜星光樂園＞精靈力量+2000。<br><br>「出」無2：公開我方牌組上5張卡牌，將這些卡牌洗切返回牌組下方。之後，對方1隻精靈作對象，以下選擇1項。①若當中有1張＜星光樂園＞精靈以上的話，將其返回手牌。②若當中有《プリパラアイドル 南みれぃ》和《プリパラアイドル 北条そふぃ》的話，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P10-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-034.jpg", //SRC
		"羅植姫 ユキ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのデッキの上からカードを4枚見る。その中から1枚を裏向きでシグニゾーンに置き、残りを好きな順番でデッキの一番下に置く。次のあなたのメインフェイズ開始時、そのカードを表向きにしてもよい。そうした場合、そのシグニが場にあるかぎり、そのシグニのパワーを＋5000する。そうしなかった場合、そのカードを手札に加える。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，查看我方牌組上4張卡牌。將其中1張以背面朝上放置到精靈區，剩下的按任意順序放到牌組下方。下一個我方主要階段開始時，可以將其正面朝上。若如此做，該精靈在場時，該精靈力量+5000。若不如此做，該卡牌加入手牌。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P10-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-035.jpg", //SRC
		"幻水姫 セイレーン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋1000され、このシグニは「【自】：このシグニが場を離れたとき、対戦相手のシグニ1体を対象とし、[白]を支払ってもよい。そうした場合、それを手札に戻す。」を得る。<br><br>【自】：あなたのアタックフェイズ開始時、あなたの手札が4枚以上ある場合、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，此精靈力量+1000，此精靈獲得「自：此精靈離場時，對方1隻精靈作對象，可以支付白1。若如此做，將其返回手牌。」。<br><br>「自」：我方攻擊階段開始時，我方手牌是4張以上的話，此精靈會覺醒。"	//TW_TEXT
		],
	[
		"WXDi-P10-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-036.jpg", //SRC
		"羅星姫 アンドロメダ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、以下の2つからあなたの場にあるレベル1のシグニ1体につき1つ選ぶ。<br>①対戦相手のエナゾーンにカードが2枚以上ある場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br>②あなたのレベル1のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋10000する。<br><br>【ライフバースト】：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上每有1隻等級1精靈則從以下2項中選擇1項。<br>①對方能量區卡牌有2張以上的話，對方在自己能量區選擇1張卡牌放置到廢棄區。<br>②我方1隻等級1的精靈作對象，直到下一個對方回合結束時為止，將其力量+10000。<br><br>「生命爆發」：對方1隻力量10000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-037.jpg", //SRC
		"幻竜歌姫 オロチ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンにカードが4枚以上ある場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【自】：このシグニがアタックしたとき、対戦相手のエナゾーンにカードが2枚以上ある場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方能量區卡牌有4張以上的話，對方選擇自己能量區1張卡牌放置到廢棄區。<br><br>「自」：此精靈攻擊時， 對方能量區卡牌有2張以上的話，對方選擇自己能量區1張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P10-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-038.jpg", //SRC
		"プリパラアイドル 紫京院ひびき", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、カードを2枚引き、＜プリパラ＞のシグニを1枚捨てるか手札を2枚捨てる。<br><br>【自】：このシグニがバニッシュされたとき、対戦相手は手札を1枚捨てる。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のシグニを2体まで対象とし、それらをダウンする。②カードを1枚引く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，抽2張牌且捨棄1張＜星光樂園＞精靈或2張手牌。<br><br>「自」：此精靈被破壞時，對方捨棄1張手牌。<br><br>「生命爆發」：選擇1項。①對方最多2隻精靈作對象，將其橫置。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P10-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-039.jpg", //SRC
		"蒼魔姫 リッチレーサー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のアタックフェイズ開始時、カードを1枚引く。<br><br>【自】：このカードが捨てられたとき、手札を1枚捨ててもよい。そうした場合、そのターン終了時、[青][無]を支払ってもよい。そうした場合、このカードをトラッシュから場に出す。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「自」：對方攻擊階段開始時，抽1張牌。<br><br>「自」：此卡牌被捨棄時，可以捨棄1張手牌。若如此做，該回合結束時，可以支付藍1無1。若如此做，此卡牌從廢棄區出場。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P10-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-040.jpg", //SRC
		"コードオーダー エルドラ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：【シャドウ（このシグニの下にあるシグニと同じレベルのシグニ）】<br><br>【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、このシグニの下からスペルを好きな枚数トラッシュに置く。ターン終了時まで、それのパワーをこの方法でトラッシュに置いたカード1枚につき－5000する。<br><br>【起】（ターン1）[青(0)]：あなたのデッキの上からカードを3枚見る。その中からスペルと青のシグニをそれぞれ1枚までこのシグニの下に置き、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「常」：【暗影(與此精靈下方精靈相同等級的精靈)】<br><br>「自」：此精靈攻擊時，對方1隻精靈作對象，此精靈下方任意張魔法放置到廢棄區。直到回合結束時為止，通過此方法放置到廢棄區的卡牌每有1張則其力量-5000。<br><br>「起」(回合1)藍0：查看我方牌組上3張卡牌。其中魔法和藍色精靈最多各1張放置到此精靈下，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P10-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-041.jpg", //SRC
		"羅植姫 タナバタ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのアタックフェイズの間、あなたがエナコストを支払う際、このシグニの下にあるカードをエナゾーンにあるかのようにトラッシュに置いて支払える。この方法でエナコストは1ターンに3つまでしか支払えない。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのデッキの上からカードを2枚このシグニの下に置く。（表向きで置く）<br><br>【自】：このシグニが場を離れたとき、このシグニの下にあったカード1枚を対象とし、それをトラッシュからエナゾーンに置く。", //JP_TEXT
		"「常」：我方攻擊階段中，我方支付能量費用時，可以將此精靈下方的卡牌視為從能量區支放置到廢棄區來支付。此方法支付的能量費用1回合最多3次。<br><br>「自」：我方攻擊階段開始時，我方牌組上2張卡牌放置到此精靈下。(正面向上)<br><br>「自」：此精靈離場時，此精靈下1張卡牌作對象，將其從廢棄區放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-P10-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-042.jpg", //SRC
		"コードハート ピルルクW//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのデッキの一番上を公開する。そのカードがスペルの場合、カードを1枚引く。そうでない場合、【エナチャージ1】をする。<br><br>【起】（ターン1）[無] 手札からスペルを1枚捨てる：あなたのシグニ1体を対象とし、ターン終了時まで、それは「【起】（ターン1）[ダウン]：このシグニよりパワーの低い対戦相手のシグニ1体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		"「自」：我方攻擊階段開始時，公開我方牌組上1張卡牌。該卡是魔法的話，抽1張牌。若不是的話，【能量填充1】。<br><br>「起」(回合1)無1從手牌捨棄1張魔法：我方1隻精靈作對象，直到回合結束時為止，使其獲得「起(回合1)橫置：對方1隻力量比此精靈低的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-043.jpg", //SRC
		"羅星姫 ミュウ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、レベルがこのシグニの下にあるカードの枚数以下の対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[無]：あなたのトラッシュから[ガード]を持たないレベル1のシグニ1枚を対象とし、それを手札に加える。<br><br>【起】（ターン1）[黒(0)]：あなたの手札からレベル1のシグニを5枚までこのシグニの下に置く。（表向きで置く）", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻等級在此精靈下方卡牌數以下的精靈作對象，將其破壞。<br><br>「出」無1：我方廢棄區1張不持有防禦標記的等級1精靈作對象，將其加入手牌。<br><br>「起」(回合1)黑0：我方手牌最多5張等級1精靈放置到此精靈下方。（正面朝上）"	//TW_TEXT
		],
	[
		"WXDi-P10-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-044.jpg", //SRC
		"コードラビリンス ムジカ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：アタックフェイズの間、このシグニの正面のシグニのパワーを－2000する。<br><br>【常】：アタックフェイズの間、このシグニの正面のシグニがバニッシュされる場合、エナゾーンに置かれる代わりにトラッシュに置かれる。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュから[ガード]を持たないシグニを2枚まで対象とし、それらをデッキに加えてもよい。そうした場合、デッキをシャッフルする。", //JP_TEXT
		"「常」：攻擊階段中，此精靈正面的精靈力量-2000。<br><br>「常」：攻擊階段中，此精靈正面的精靈被破壞的話，作為代替不放置到能量區而放置到廢棄區。<br><br>「自」：此精靈攻擊時，我方廢棄區最多2張不持有防禦標記的精靈作對象，可以將其加入牌組。若如此做，洗切牌組。"	//TW_TEXT
		],
	[
		"WXDi-P10-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-045.jpg", //SRC
		"プリパラアイドル 北条そふぃ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、あなたの手札から＜プリパラ＞のシグニを1枚公開してもよい。そうした場合、次の対戦相手のターン終了時まで、このシグニのパワーを＋4000する。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，可以公開我方手牌1張＜星光樂園＞精靈。若如此做，直到下一個回合結束時為止，此精靈力量+4000。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P10-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-046.jpg", //SRC
		"聖天 アルテミス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、このシグニは対戦相手のレベル2以下の、ルリグとシグニの効果によってバニッシュされない。（シグニとのバトルやパワーが0以下になった場合はバニッシュされる）", //JP_TEXT
		"「常」：對方回合中，此精靈不會被對方等級2以下的分身和精靈效果破壞。(因精靈戰鬥或力量0以下的話會破壞)"	//TW_TEXT
		],
	[
		"WXDi-P10-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-047.jpg", //SRC
		"偉智の遊 タマ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがバニッシュされたとき、あなたのデッキの一番上を見る。そのカードとエナゾーンにあるこのシグニを入れ替えてもよい。<br><br>【出】：あなたのデッキの上からカードを2枚見る。その中からカード1枚をデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「自」：此精靈被破壞時，查看我方牌組上1張卡牌。該卡牌可以與能量區的此精靈交換。<br><br>「出」：查看我方牌組上2張卡牌。其中1張卡牌放回牌組上，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P10-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-048.jpg", //SRC
		"プリパラアイドル 南みれぃ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：あなたのデッキの上からカードを5枚見る。その中から＜プリパラ＞のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」無1：查看我方牌組上5張卡牌，其中1張＜星光樂園＞精靈公開加入手牌，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：查看我方牌組上3張卡牌。其中1張精靈公開加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P10-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-049.jpg", //SRC
		"幻怪 コックリサン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】このシグニを場からトラッシュに置く：あなたの白のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それは「【自】：このシグニがバニッシュされたとき、このシグニをエナゾーンからダウン状態で場に出す。」を得る。<br><br>【ライフバースト】：カードを1枚引く。このターン、あなたの手札にあるシグニは[ガード]を得る。（[ガード]を持つシグニは【ガード】を得る）", //JP_TEXT
		"「起」此精靈從場上放置到廢棄區：我方1隻白色精靈作對象，直到下一個對方回合結束時為止，使其獲得「自：此精靈被破壞時，此精靈從能量區以橫置狀態出場。」。<br><br>「生命爆發」：抽1張牌。本回合中，我方手牌的精靈獲得防禦標記。(持有防禦標記的精靈獲得【防禦】)"	//TW_TEXT
		],
	[
		"WXDi-P10-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-050.jpg", //SRC
		"コール・アウト", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード7を支払ってもよい。（あなたのルリグの下からカードを合計7枚ルリグトラッシュに置く）<br><br>対戦相手のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。追加でエクシード7を支払っていた場合、代わりにカードを1枚引き、ターン終了時まで、対戦相手のすべてのシグニは能力を失う。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"此魔法使用時，使用費用可以追加超越7。(我方分身下方卡牌合計7張放置到分身廢棄區)<br><br>對方1隻精靈作對象，直到回合結束時為止，使其失去能力。追加支付超越7的話，作為代替抽1張牌，直到回合結束時為止，對方所有精靈失去能力。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P10-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-051.jpg", //SRC
		"プリパラアイドル ガァルル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：対戦相手のパワー2000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】[ダウン]：対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。この能力はあなたの場に他の＜プリパラ＞のシグニがある場合にしか使用できない。", //JP_TEXT
		"「起」(橫置)：對方1隻力量2000以下的精靈作對象，將其破壞。<br><br>「起 」(橫置)：對方1隻力量3000以下的精靈作對象，將其破壞。此能力只有在我方場上有其他＜星光樂園＞精靈時才可使用。"	//TW_TEXT
		],
	[
		"WXDi-P10-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-052.jpg", //SRC
		"小装 リル//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの他のシグニ1体を選ぶ。<br><br>【常】：対戦相手のターンの間、このシグニの【出】能力で選んだシグニがバニッシュされる場合、代わりにこのシグニをバニッシュしてもよい。<br><br>【起】（ターン1）◎◎◎：対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：選擇我方其他1隻精靈。<br><br>「常」：對方回合中，此精靈的「出」能力選擇的精靈被破壞時，作為代替可以破壞此精靈。<br><br>「起」(回合1)Coin*3：對方1隻力量5000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-053.jpg", //SRC
		"コードアート Hットカーペット", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】スペルを1枚捨てる：次の対戦相手のターン終了時まで、このシグニのパワーを＋10000する。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」捨棄1張魔法：直到下一個對方回合結束時為止，此精靈力量+10000。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-054.jpg", //SRC
		"プリパラアイドル 白玉みかん", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン2）：あなたのシグニ1体がアタックしたとき、ターン終了時まで、そのシグニのパワーを＋2000する。そのシグニが＜プリパラ＞の場合、代わりにターン終了時まで、そのシグニのパワーを＋4000する。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」(回合2)：我方1隻精靈攻擊時，直到回合結束時為此，該精靈力量+2000。該精靈是＜星光樂園＞精靈的話，作為代替直到回合結束時為止，該精靈力量+4000。<br><br>「生命爆發」： 對方1隻力量12000以下的精靈作對象，可以捨棄1張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-055.jpg", //SRC
		"紅天 プロメウス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にある＜天使＞のシグニのパワーの合計が20000以上の場合、対戦相手のパワー10000以下のシグニ1体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上＜天使＞精靈的力量合計有20000以上的話，對方1隻力量10000以下的精靈作對象，可以支付紅1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-056.jpg", //SRC
		"プリパラアイドル 黒須あろま", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のパワー10000以下のシグニ1体を対象とし、あなたのエナゾーンから＜プリパラ＞のシグニ1枚をトラッシュに置いてもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻力量10000以下的精靈作對象，可以從我方能量區將1張＜星光樂園＞精靈放置到廢棄區。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-057.jpg", //SRC
		"炎神の大鎌", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード7を支払ってもよい。（あなたのルリグの下からカードを合計7枚ルリグトラッシュに置く）<br><br>対戦相手のパワー2000以下のシグニ1体を対象とし、それをバニッシュする。追加でエクシード7を支払っていた場合、代わりに対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"此魔法使用時，使用費用可以追加超越7。(我方分身下方卡牌合計7張放置到分身廢棄區)<br><br>對方1隻力量2000以下的精靈作對象，將其破壞。追加支付超越7的話，作為代替對方1隻力量12000以下的精靈作對象，將其破壞。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-058.jpg", //SRC
		"プリパラアイドル 緑風ふわり", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたが＜プリパラ＞のシグニを1枚捨てたとき、あなたの＜プリパラ＞のシグニ1体を対象とし、ターン終了時まで、それのパワーを＋2000する。<br><br>【出】：カードを1枚引き、手札を1枚捨てる。", //JP_TEXT
		"「自」(回合1)：我方捨棄1張＜星光樂園＞精靈時，我方1隻＜星光樂園＞精靈作對象，直到回合結束時為止，將其力量+2000。<br><br>「出」：抽1張牌，捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P10-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-059.jpg", //SRC
		"蒼将 サイトウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手の場に凍結状態のシグニがあるかぎり、このシグニのパワーは＋4000される。<br><br>【自】：このシグニがバトルによって凍結状態のシグニ1体をバニッシュしたとき、カードを1枚引く。", //JP_TEXT
		"「常」：對方場上有凍結狀態精靈時，此精靈力量+4000。<br><br>「自」：此精靈因戰鬥破壞1隻凍結狀態精靈時，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P10-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-060.jpg", //SRC
		"コードアンチ マドカ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン2）：あなたの効果によって対戦相手が手札を1枚捨てたとき、手札を1枚捨ててもよい。そうした場合、カードを1枚引くか【エナチャージ1】をする。<br><br>【ライフバースト】：対戦相手のルリグかシグニ1体を対象とする。このターン、それがアタックしたとき、対戦相手が手札を3枚捨てないかぎり、そのアタックを無効にする。", //JP_TEXT
		"「自」(回合2)：因我方效果使對方捨棄1張手牌時，可以捨棄1張手牌。若如此做，抽1張牌或【能量填充1】。<br><br>「生命爆發」：對方1隻精靈作對象。本回合中，其攻擊時，對方不捨棄3張手牌的話，該攻擊無效。"	//TW_TEXT
		],
	[
		"WXDi-P10-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-061.jpg", //SRC
		"プリパラアイドル ファルル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、手札を1枚捨ててもよい。そうした場合、対戦相手は手札を1枚捨てる。<br><br>【自】（ターン1）：あなたが＜プリパラ＞のシグニを1枚捨てたとき、対戦相手のシグニ1体を対象とし、それを凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		"「自」：我方攻擊階段開始時，可以捨棄1張手牌。若如此做，對方捨棄1張手牌。<br><br>「自」(回合1)：我方捨棄1張＜星光樂園＞精靈時，對方1隻精靈作對象，將其凍結。"	//TW_TEXT
		],
	[
		"WXDi-P10-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-062.jpg", //SRC
		"蒼魔 アロス・ピルルク//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、あなたの手札が0枚の場合、カードを1枚引いてもよい。<br><br>【出】手札を3枚捨てる：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】（ターン1）◎◎◎：対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"「自」：我方回合結束時，我方手牌是0張的話，可以抽1張牌。<br><br>「出」捨棄3張手牌：對方1隻等級2以下的精靈作對象，將其破壞。<br><br>「起」(回合1)Coin*3：不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P10-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-063.jpg", //SRC
		"INVESTIGATE", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのデッキの上からカードを3枚見る。その中から1枚を手札に加え、残りを好きな順番でデッキの一番上に戻す。このスペルをチェックゾーンからあなたの《コードオーダー エルドラ//メモリア》1体の下に置いてもよい。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"查看我方牌組上3張卡牌。其中1張加入手牌，剩下的按任意順序放回牌組下方。此魔法可以從檢查區放置到我方1隻《コードオーダー エルドラ//メモリア》下方。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P10-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-064.jpg", //SRC
		"プリパラアイドル 太陽ペッパー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのエナゾーンに＜プリパラ＞のシグニがあるかぎり、このシグニのパワーは＋5000される。", //JP_TEXT
		"「常」：我方能量區有＜星光樂園＞精靈時，此精靈力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-P10-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-065.jpg", //SRC
		"翠魔 マンドラゴラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】（ターン1）[無] ＜悪魔＞のシグニ1体を場からトラッシュに置く：カードを1枚引く。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「起」(回合1)無1場上1隻＜惡魔＞精靈放置到廢棄區：抽1張牌。<br><br>「生命爆發」：【能量填充1】。本回合中，下一次我方因精靈受到傷害的話，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P10-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-066.jpg", //SRC
		"羅菌 メル//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋3000する。<br><br>【起】エナゾーンからこのカードをトラッシュに置く：あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋3000する。", //JP_TEXT
		"「出」：我方1隻精靈作對象，直到回合結束時為止，將其力量+3000。<br><br>「起」能量區的此卡牌放置到廢棄區：我方1隻精靈作對象，直到回合結束時為止，將其力量+3000。"	//TW_TEXT
		],
	[
		"WXDi-P10-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-067.jpg", //SRC
		"プリパラアイドル 月川ちり", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場に他の＜プリパラ＞のシグニがあるかぎり、このシグニのパワーは＋2000される。<br><br>【起】エナゾーンから＜プリパラ＞のシグニ3枚をトラッシュに置く：ターン終了時まで、このシグニは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「自」：我方場上有其他＜星光樂園＞精靈時，此精靈力量+2000。<br><br>「起」能量區3張＜星光精靈＞放置到廢棄區：直到回合結束時為止，此精靈獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-P10-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-068.jpg", //SRC
		"ツヴァイ＝サンガ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニが持つ色が合計3種類以上ある場合、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがルリグによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上精靈持有顏色合計3種以上的話，我方能量區最多1張精靈作對象，將其加入手牌。<br><br>「生命爆發」： 【能量填充1】。本回合中，下一次我方因分身受到傷害的話，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P10-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-069.jpg", //SRC
		"プリパラアイドル 真中のん", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、【エナチャージ1】をする。あなたの場に＜プリパラ＞のシグニが3体ある場合、代わりに【エナチャージ2】をする。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②【エナチャージ1】", //JP_TEXT
		"「自」：我方回合結束時，【能量填充1】。我方場上＜星光樂園＞精靈有3隻的話，作為代替【能量填充2】。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②【能量填充1】"	//TW_TEXT
		],
	[
		"WXDi-P10-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-070.jpg", //SRC
		"枝折", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのトラッシュからそれぞれ共通する色を持たず無色ではないシグニ2枚を対象とし、それらをエナゾーンに置く。<br><br>【自】：あなたのターンの間、このカードが捨てられたとき、シグニ1体を対象とし、ターン終了時まで、それのパワーを＋2000する。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"我方廢棄區不持有共同顏色且非無色的2張精靈作對象，將其放置到能量區。<br><br>「自」：我方回合中，此卡牌被捨棄時，1隻精靈作對象，直到回合結束時為止，將其力量+2000。<br><br>「生命爆發」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P10-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-071.jpg", //SRC
		"プリパラアイドル レオナ・ウェスト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの一番上のカードをトラッシュに置く。その後、この方法で＜プリパラ＞のシグニがトラッシュに置かれた場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」：我方牌組上1張卡牌放置到廢棄區。之後，通過此方法使＜星光樂園＞精靈放置到廢棄區的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P10-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-072.jpg", //SRC
		"凶美 アルフォウ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のシグニは「【自】：あなたのアタックフェイズ開始時、あなたのデッキの一番上のカードをトラッシュに置く。」を得る。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「常」：對方精靈獲得「自：我方攻擊階段開始時，我方牌組上1張卡牌放置到廢棄區。」。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P10-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-073.jpg", //SRC
		"小罠 グズ子//メモリア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。その後、そのカードがレベルが偶数のシグニの場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「自」：此精靈攻擊時，公開我方牌組上1張卡牌。之後，該卡牌是偶數等級精靈的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P10-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-074.jpg", //SRC
		"プリパラアイドル ドロシー・ウェスト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュに＜プリパラ＞のシグニが5枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【出】：あなたのデッキの上からカードを3枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「常」：我方廢棄區＜星光樂園＞精靈有5張以上時，此精靈力量+4000。<br><br>「出」：我方牌組上3張卡牌放置到廢棄區。<br><br>「生命爆發」： 對方1隻精靈作對象，可以捨棄1張手牌。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P10-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-075.jpg", //SRC
		"幻竜 ウリス//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：対戦相手のシグニ1体がバニッシュされたとき、あなたのデッキの一番上を見る。そのカードをトラッシュに置いてもよい。<br><br>【出】エクシード3：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。", //JP_TEXT
		"「自」(回合1)：對方1隻精靈被破壞時，查看我方牌組上1張卡牌，可以將其放置到廢棄區。<br><br>「出」超越3：對方1隻精靈作對象，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-P10-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-076.jpg", //SRC
		"プリパラアイドル 東堂シオン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：プリパラ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[無][ダウン]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをあなたのトラッシュにある＜プリパラ＞のシグニ1枚につき－1000する。この効果は15枚までしか適用されない。", //JP_TEXT
		"「起」無1(橫置)：對方1隻精靈作對象，直到回合結束時為止，我方廢棄區＜星光樂園＞精靈每有1張則將其力量-1000。此效果最多適用15張。"	//TW_TEXT
		],
	[
		"WXDi-P10-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-077.jpg", //SRC
		"ウェルカム・バック", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"あなたのデッキの上からカードを2枚トラッシュに置く。その後、あなたのトラッシュから《コードラビリンス ムジカ//メモリア》か《コードアンチ マドカ//メモリア》か《ツヴァイ＝サンガ//メモリア》か黒のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"我方牌組上方2張卡牌放置到廢棄區。之後，我方廢棄區1張《コードラビリンス ムジカ//メモリア》或《コードアンチ マドカ//メモリア》或《ツヴァイ＝サンガ//メモリア》或黑色精靈作對象，將其加入手牌。<br><br>「生命爆發」：我方廢棄區1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P10-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P10-078.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-001.jpg", //SRC
		"FLY ME TO THE FUTURE", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>以下の2つから1つを選ぶ。<br>①直前のターンにあなたのライフクロスが2枚以上クラッシュされていた場合、対戦相手のシグニ1体を対象とし、それをバニッシュし、カードを2枚引く。<br>②直前のターンにあなたのライフクロスが4枚以上クラッシュされていた場合、あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>以下2項中選擇1項。<br>①上一回合我方生命護甲有2張以上被擊潰的話，對方1隻精靈作對象，將其破壞，抽2張牌。<br>②上一回合我方生命護甲有4張以上被擊潰的話，洗切我方牌組將上方1張卡加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P11-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-002.jpg", //SRC
		"ミステリアス・チョイス", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>このゲームの間、対戦相手は以下の能力を得る。<br>『【自】：あなたのターン終了時、以下の3つからまだ選んでいないもの1つを選ぶ。<br>①あなたは手札を2枚捨てる。<br>②あなたのエナゾーンからカード2枚を選びトラッシュに置く。<br>③あなたは自分のシグニ1体を選びトラッシュに置く。』", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>本局遊戲中，對方獲得以下能力。<br>「自」：我方回合結束時，以下3項中選擇1項未被選擇過的。<br>①我方捨棄2張手牌。<br>②選擇我方能量區2張卡牌放置到廢棄區。<br>③選擇我方1隻精靈放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P11-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-003.jpg", //SRC
		"トリックスター・スターダム！", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【自】：あなたのメインフェイズ開始時、以下の3つからまだ選んでいないもの1つを選ぶ。<br>①カードを2枚引く。<br>②【エナチャージ2】<br>③あなたのトラッシュからシグニ1枚を対象とし、それをデッキの一番上に置く。』", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>本局遊戲中，我方獲得以下能力。<br>「自」：我方主要階段開始時，以下3項中選擇1項未被選擇過的。<br>①抽2張牌。<br>②【能量填充2】<br>③我方廢棄區1隻精靈作對象，將其放置到牌組上方。"	//TW_TEXT
		],
	[
		"WXDi-P11-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-004.jpg", //SRC
		"WISH IN…", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このゲームの間、あなたは以下の能力を得る。<br>『【自】：あなたのメインフェイズ開始時、あなたの手札が5枚以下の場合、カードを1枚引く。』", //JP_TEXT
		"本局遊戲中，我方獲得以下能力。<br>「自」：我方主要階段開始時，我方手牌是5張以下的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-005.jpg", //SRC
		"白夜の使者 サシェ・モティエ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"サシェ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのターンの間、あなたの白のシグニ1体が場に出たとき、対戦相手のシグニ1体を対象とし、[白][白][無]を支払ってもよい。そうした場合、それを手札に戻す。<br><br>【起】（ターン1）[白(0)]：あなたの白のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋2000する。<br><br>【起】（ゲーム1）[白(0)]：次の対戦相手のターンの間、対戦相手は「【常】：あなたは[無][無]を支払わないかぎりシグニでアタックできない。」を得る。", //JP_TEXT
		"「自」(回合1)：我方回合中，我方1隻白色精靈出場時，對方1隻精靈作對象，可以支付白2無1。若如此做，將其返回手牌。<br><br>「起」(回合1)白0：我方1隻白色精靈作對象，直到下一個對方回合結束時為止，將其力量+2000。<br><br>「起」(遊戲1)白0：下一個對方回合中，對方獲得「常：我方不支付無2則精靈不能攻擊。」。"	//TW_TEXT
		],
	[
		"WXDi-P11-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-006.jpg", //SRC
		"アロス・ピルルク MIRA", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたがシグニを1枚捨てたとき、あなたのチェックゾーンにあるカードが4枚以下の場合、そのシグニをトラッシュからチェックゾーンに置いてもよい。<br>（チェックゾーンにあるカードはターン終了時にトラッシュに置かれる）<br><br>【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをあなたのチェックゾーンにあるカード1枚につき－1000する。その後、あなたのチェックゾーンから[ガード]を持たないカードを1枚まで対象とし、それを手札に加える。<br><br>【起】（ゲーム1）[青(0)]：カードを3枚引き、手札を2枚捨てる。", //JP_TEXT
		"「自」：我方捨棄1張精靈時，我方檢查區卡牌是4張以下的話，可以將該精靈從廢棄區放置到檢查區。<br><br>「自」：我方攻擊階段開始時，對方1隻精靈作對象，直到回合結束時為止，其力量為我方檢查區的卡牌每有1張則-1000。之後我方查檢區最多1張不持有防禦標記的卡牌作對象，將其加入手牌。<br><br>「起」(遊戲1)藍0：抽3張牌，捨棄2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-007.jpg", //SRC
		"アイヤイ★ショーダウン", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"アイヤイ", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのターンの間、あなたのエナゾーンからシグニ1枚が手札に加わるか場に出たとき、【エナチャージ1】をする。<br><br>【出】：あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。<br><br>【起】（ゲーム1）[緑(0)]：あなたのシグニ1体を対象とし、ターン終了時まで、それは「【自】：このシグニがバトルによってシグニ1体をバニッシュしたとき、あなたのエナゾーンからレベル2以下のシグニを1枚まで対象とし、それとこのシグニの場所を入れ替える。それの【出】能力は発動しない。」を得る。", //JP_TEXT
		"「自」(回合1)：我方回合中，我方能量區1張精靈加入手牌或出場時，【能量填充1】。<br><br>「出」：我方能量區最多1張精靈作對象，將其加入手牌。<br><br>「起」(遊戲1)綠0：我方1隻精靈作對象，直到回合結束時為止，使其獲得「自：此精靈因戰鬥破壞對方1隻精靈時，我方能量區最多1張等級2以下的精靈作對象，將其與此精靈的區域交換。其「出」能力不能發動。」。"	//TW_TEXT
		],
	[
		"WXDi-P11-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-008.jpg", //SRC
		"喝采の歌姫 アルフォウ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"アルフォウ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：対戦相手がリフレッシュしたとき、カードを1枚引くか【エナチャージ1】をする。<br><br>【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】（ゲーム1）[黒(0)]：対戦相手のデッキの上からカードを8枚トラッシュに置く。その後、対戦相手のトラッシュから[ガード]を持たないカードを3枚まで対象とし、それらをゲームから除外する。", //JP_TEXT
		"「自」(回合1)：對方重構時，抽1張牌或【能量填充1】。<br><br>「出」：對方1隻精靈作對象，將其破壞。<br><br>「起」(遊戲1)黑0：對方牌組上8張卡牌放置到廢棄區。之後，對方廢棄區最多3張不持有防禦標記的卡牌作對象，將其從遊戲中除外。"	//TW_TEXT
		],
	[
		"WXDi-P11-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-009.jpg", //SRC
		"ミュウ＝ブロッサム", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ミュウ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【常】：【チャーム】が付いている対戦相手のシグニのパワーを－3000する。<br><br>【起】（ターン1）[黒(0)]：対戦相手のシグニ1体を対象とし、対戦相手のトラッシュからカード1枚をそれの【チャーム】にする。<br>（【チャーム】は裏向きでシグニに付き、1体に1枚までしか付けられない）<br><br>【起】（ゲーム1）[黒(0)]：シグニのない対戦相手のシグニゾーン1つを指定する。このターンと次のターンの間、対戦相手は[無][無][無][無][無]を支払わないかぎり指定されたシグニゾーンにシグニを新たに配置できない。", //JP_TEXT
		"「常」：附有【魅飾】的對方精靈的力量-3000。<br><br>「起」(回合1)黑0：對方1隻精靈作對象，對方廢棄區1張卡牌成為其【魅飾】。<br><br>「起」(遊戲1)黑0：指定對方1個沒有精靈的精靈區。本回合和下一個回合中，對方不支付無5的話不能在指定的精靈區新配置精靈。"	//TW_TEXT
		],
	[
		"WXDi-P11-010A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-010A.jpg", //SRC
		"夢限 -Q-", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"夢限", //CLASS
		"無", //COLOR
		"3", //LEVEL
		"《無》×2", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのグロウフェイズ開始時、このゲームの間、あなたの場にいる《夢限 -Q-》のリミットを＋1する。その後、このルリグのリミットが9以上の場合、あなたの手札とエナゾーンとトラッシュにあるすべてのカードをデッキに加えてシャッフルし、このルリグ以外の、あなたのルリグデッキと場にあるすべてのカードをゲームから除外し、このルリグを裏向きにする。<br><br>【出】：あなたのトラッシュから無色のシグニ1枚と無色ではないシグニ1枚を対象とし、それらを手札に加える。", //JP_TEXT
		"「自」：我方成長階段開始時，本局遊戲中，我方場上的《夢限 －Q－》的界限+1。之後，此分身的界限是9以上的話，我方手牌和能量區和廢棄區所有卡牌加入牌組洗切，此分身以外的我方分身牌組和場上所有卡牌從遊戲中除外，翻轉此分身。<br><br>「出」：我方廢棄區1張無色精靈和1張非無色精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-010B", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-010B.jpg", //SRC
		"夢限 -A-", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"夢限", //CLASS
		"無", //COLOR
		"3", //LEVEL
		"", //COST
		"9", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：このルリグが《夢限 -Q-》から《夢限 -A－》になったとき、カードを5枚引き【エナチャージ5】をする。<br><br>【起】（ターン1）[無]：対戦相手のシグニ1体を対象とし、それをゲームから除外する。", //JP_TEXT
		"「自」：此分身由《夢限 －Q－》成為《夢限 －A－》時，抽5張牌並【能量填充5】。<br><br>「起」(回合1)無1：對方1隻精靈作對象，將其從遊戲中除外。"	//TW_TEXT
		],
	[
		"WXDi-P11-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-011.jpg", //SRC
		"悠久の使者 サシェ・ヌーベル", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"サシェ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-012.jpg", //SRC
		"悠久の使者 サシェ・クロワス", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"サシェ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-013.jpg", //SRC
		"悠久の使者 サシェ・クラフト", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"サシェ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：《白羅星姫 サタン》1枚と《白羅星姫 フルムーン》1枚を公開する。それらのどちらか1枚を対戦相手に見せずに裏向きでルリグデッキに加える。（ゲーム終了時にそのレゾナがルリグデッキにあれば公開する）", //JP_TEXT
		"「出」：公開1張《白羅星姬 サタン》和1張《白羅星姫 フルムーン》。不給予對方查看下將其中1張以背向加入分身牌組。（遊戲結束時如該精靈在分身牌需將其公開）"	//TW_TEXT
		],
	[
		"WXDi-P11-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-014.jpg", //SRC
		"アロス・ピルルク", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-015.jpg", //SRC
		"アロス・ピルルク K", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-016.jpg", //SRC
		"アロス・ピルルク M", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-017.jpg", //SRC
		"アイヤイ★ベット", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アイヤイ", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-018.jpg", //SRC
		"アイヤイ★クラブ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アイヤイ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-019.jpg", //SRC
		"アイヤイ★クラフト", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アイヤイ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：《緑参ノ遊姫 メリゴラン》1枚と《緑参ノ遊姫 アスレ【HARD】》1枚を公開する。それらのどちらか1枚を対戦相手に見せずに裏向きでルリグデッキに加える。（ゲーム終了時にそのレゾナがルリグデッキにあれば公開する）", //JP_TEXT
		"「出」：公開1張《緑参ノ遊姫 メリゴラン》和1張《緑参ノ遊姫 アスレ【HARD】》。不給予對方查看下將其中1張以背向加入分身牌組。（遊戲結束時如該精靈在分身牌需將其公開）"	//TW_TEXT
		],
	[
		"WXDi-P11-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-020.jpg", //SRC
		"黒衣の歌姫 アルフォウ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アルフォウ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-021.jpg", //SRC
		"水鏡の歌姫 アルフォウ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アルフォウ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-022.jpg", //SRC
		"究明の歌姫 アルフォウ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アルフォウ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-023.jpg", //SRC
		"ミュウ＝ハッチ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ミュウ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-024.jpg", //SRC
		"ミュウ＝ラーバ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ミュウ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-025.jpg", //SRC
		"ミュウ＝クラフト", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ミュウ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：《黒大幻蟲 アラクネ・パイダ》1枚と《黒大幻蟲 オウグソク【FA】》1枚を公開する。それらのどちらか1枚を対戦相手に見せずに裏向きでルリグデッキに加える。（ゲーム終了時にそのレゾナがルリグデッキにあれば公開する）", //JP_TEXT
		"「出」：公開1張《黒大幻蟲 アラクネ・パイダ》和1張《黒大幻蟲 オウグソク【FA】》。不給予對方查看下將其中1張以背向加入分身牌組。（遊戲結束時如該精靈在分身牌需將其公開）"	//TW_TEXT
		],
	[
		"WXDi-P11-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-026.jpg", //SRC
		"夢限", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"夢限", //CLASS
		"無", //COLOR
		"0", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-027.jpg", //SRC
		"夢限 -J-", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"夢限", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-028.jpg", //SRC
		"夢限 -H-", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"夢限", //CLASS
		"無", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P11-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-029.jpg", //SRC
		"カーニバル -撃-", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"カーニバル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻等級2以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P11-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-030.jpg", //SRC
		"カーニバル -怨-", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"カーニバル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを4枚見る。その中からシグニを2枚まで場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組上4張卡牌。其中最多2隻精靈出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P11-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-031.jpg", //SRC
		"カーニバル -終-", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"カーニバル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それを《サーバント ZERO》にする。<br><br>【出】手札を2枚捨てる：対戦相手のシグニ1体を対象とし、ターン終了時まで、それを《サーバント ZERO》にする。<br><br>【出】[赤][無][無]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それを《サーバント ZERO》にする。<br>（《サーバント ZERO》はレベル1、＜精元＞、パワー1000、無色で能力を持たないシグニである）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，使其成為《侍從 ZERO》。<br><br>「出」捨棄2張手牌：對方1隻精靈作對象，直到回合結束時為止，使其成為《侍從 ZERO》。<br><br>「出」紅1無2：對方1隻精靈作對象，直到回合結束時為止，使其成為《侍從 ZERO》。"	//TW_TEXT
		],
	[
		"WXDi-P11-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-032.jpg", //SRC
		"カーニバル -罪-", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"カーニバル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：シグニ1体を対象とし、ターン終了時まで、それは【アサシン】か【ランサー】か「【常】：アタックできない。」を得る。<br><br>【出】[無][無]：シグニ1体を対象とし、ターン終了時まで、それは【アサシン】か【ランサー】か「【常】：アタックできない。」を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える。【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「出」：1隻精靈作對象，直到回合結束時為止，使其獲得【暗殺】或【槍兵】或「常：不能攻擊」。<br><br>「出」無2：1隻精靈作對象，直到回合結束時為止，使其獲得【暗殺】或【槍兵】或「常：不能攻擊」。"	//TW_TEXT
		],
	[
		"WXDi-P11-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-033.jpg", //SRC
		"カーニバル -奪-", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"カーニバル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。その後、この方法で公開したシグニと同じレベルの対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：查看我方牌組上3張卡牌。其中1張精靈公開並加入手牌，剩下的按任意順序放回牌組下方。之後，以此方法公開的精靈相同等級的1隻對方精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P11-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-034.jpg", //SRC
		"アン - 舞イ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー7000以上のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」：對方1隻力量7000以上的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-035.jpg", //SRC
		"アン - 魅セ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを5枚見る。その中からあなたのセンタールリグと共通する色を持つカードを2枚までエナゾーンに置き、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組上5張卡牌。其中最多2張與我方中央分身持有共通顏色的卡牌放置到能量區，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P11-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-036.jpg", //SRC
		"アン - 座シ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：【エナチャージ1】<br><br>【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「出」：【能量填充1】<br><br>「出」：本回合中，下一次我方受到傷害的話，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P11-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-037.jpg", //SRC
		"アン - 散リ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】[緑][無][無][無][無]：対戦相手のパワー10000以上のシグニ1体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻力量10000以上的精靈作對象，將其返回手牌。<br><br>「出」綠1無4：對方1隻力量10000以上的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-038.jpg", //SRC
		"アン - 彩リ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのターンの場合、次の対戦相手のターン終了時まで、このルリグは「【常】：あなたのシグニのパワーを＋10000する。」を得る。<br><br>【出】：対戦相手のターンの場合、ターン終了時まで、このルリグは「【常】：あなたのシグニは【シャドウ】を得る。」を得る。<br>（【シャドウ】を持つシグニは対戦相手によって対象にされない）", //JP_TEXT
		"「出」：我方回合的話，直到下一個對方回合結束時為止，此分身獲得「常：我方精靈的力量+10000。」。<br><br>「出」：對方回合的話，直到回合結束時為止，此分身獲得「常：我方精靈獲得【暗影】。」。"	//TW_TEXT
		],
	[
		"WXDi-P11-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-039.jpg", //SRC
		"聖英姫 ソクラテス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの手札を公開してもよい。その後、この方法で公開したシグニのレベルの合計が10の場合、対戦相手のシグニ1体を対象とし、手札から白のシグニを1枚捨てる。そうした場合、それを手札に戻す。<br><br>【起】（ターン1）[無][無]：あなたのデッキの上からカードを3枚見る。その中からカードを1枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，可以公開我方手牌。之後，以此方法公開精靈的等級合計是10的話，對方1隻精靈作對象，從手牌捨棄1張白色精靈。若如此做，將其返回手牌。<br><br>「起」(回合1)無2：查看我方牌組上3張卡牌。其中最多1張卡牌加入手牌，剩下的按任意順序返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P11-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-040.jpg", //SRC
		"大罠 パントマイム", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、対戦相手は、能力か効果で対象を選ぶ際、可能性ならばこのシグニを対象とする。<br><br>【自】（ターン1）：対戦相手のターンの間、このシグニが対戦相手の、能力か効果の対象になったとき、あなたの他のシグニ1体を対象とし、ターン終了時まで、それは【シャドウ】を得る。<br><br>【ライフバースト】：カードを1枚引く。その後、あなたのライフクロス1枚を手札に加えてもよい。そうした場合、あなたの手札を1枚ライフクロスに加える。", //JP_TEXT
		"「常」：對方回合中，對方的能力或效果選擇對象時，可以的話必須以此精靈作對象。<br><br>「自」(回合1)：對方回合中，此精靈成為對方的能力或效果的對象時，我方其他1隻精靈作對象，直到回合結束時為止，使其獲得【暗影】。<br><br>「生命爆發」：抽1張牌。之後可以將我方1張生命護甲加入手牌。若如此做，我方1張手牌加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P11-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-041.jpg", //SRC
		"大盾 アイアース", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの手札が1枚以下であるかぎり、あなたの＜アーム＞と＜ウェポン＞のシグニのパワーを＋3000する。<br><br>【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、手札から＜アーム＞と＜ウェポン＞のシグニを合計2枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「常」：我方手牌是1張以下時，我方的＜武裝＞和＜武器＞精靈力量+3000。<br><br>「自」：我方攻擊階段開始時，對方1隻精靈作對象，可以從手牌捨棄合計2張＜武裝＞和＜武器＞精靈。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P11-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-042.jpg", //SRC
		"幻怪姫 エクス//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のパワー10000以下のシグニ1体を対象とし、このシグニの下から赤のシグニ1枚をトラッシュに置いてもよい。そうした場合、それをバニッシュする。<br><br>【自】：あなたのメインフェイズ以外でこのシグニがバニッシュされたとき、このシグニの下にあったカード1枚につき対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【出】：あなたのエナゾーンからシグニを3枚までこのシグニの下に置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻力量10000以下的精靈作對象，可以將此精靈下方1張紅色精靈放置到廢棄區。若如此做，將其破壞。<br><br>「自」：此精靈在我方主要階段以外被破壞時，此精靈下方每有1張卡牌則對方選擇自己能量區1張卡牌放置到廢棄區。<br><br>「出」：從我方能量區將最多3張精靈放置到此精靈下方。"	//TW_TEXT
		],
	[
		"WXDi-P11-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-043.jpg", //SRC
		"蒼英姫 リメンバ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、数字1つを宣言する。あなたのデッキの一番上のカードを公開し、そのカードが宣言した数字と同じレベルのシグニの場合、そのカードを手札に加える。<br><br>【出】[青]：対戦相手のレベル2以下の凍結状態のシグニ1体を対象とし、それを手札に戻す。<br><br>【出】◎：対戦相手のシグニ1体を対象とし、それを凍結する。<br>（複数の【出】能力は好きな順番で発動できる）", //JP_TEXT
		"「自」：我方攻擊階段開始時，宣言1個數字，公開我方牌組上1張卡牌，該卡牌和宣言數字是相同等級的精靈的話，將其加入手牌。<br><br>「出」藍1：對方1隻等級2以下的凍結狀態精靈作對象，將其返回手牌。<br><br>「出」Coin*1：對方1隻精靈作對象，將其凍結。（複數的「出」能力可以順任意順序發動）"	//TW_TEXT
		],
	[
		"WXDi-P11-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-044.jpg", //SRC
		"幻水姫 オトヒメ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、カードを2枚引く。<br><br>【出】：あなたの手札が5枚以下の場合、[無]を支払わないかぎりこのシグニを場からトラッシュに置く。<br><br>【起】（ターン1）手札を4枚捨てる：対戦相手のパワー10000以下のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「自」：此精靈攻擊時，抽2張牌。<br><br>「出」：我方手牌是5張以下的話，不支付無1則此精靈從場上放置到廢棄區。<br><br>「起」(回合1)捨棄4張手牌：對方1隻力量10000以下的精靈作對象，將其返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P11-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-045.jpg", //SRC
		"翠天姫 オーベロン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのエナゾーンに＜天使＞のシグニが3枚以上あるかぎり、このシグニのパワーは＋3000される。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのトラッシュから＜天使＞のシグニ1枚を対象とし、それをエナゾーンに置く。<br><br>【自】：対戦相手のターンの間、このシグニが場を離れたとき、あなたのエナゾーンから＜天使＞のシグニを1枚まで対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「常」：我方能量區的＜天使＞精靈有3張以上時，此精靈力量+3000。<br><br>「自」：我方攻擊階段開始時，我方廢棄區1張＜天使＞精靈作對象，將其放置到能量區。<br><br>「自」：對方回合中，此精靈離場時，我方能量區最多1張＜天使＞精靈作對象，將其返回手牌。<br><br>「生命爆發」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P11-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-046.jpg", //SRC
		"幻怪姫 翠子//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが中央のシグニゾーンにあるかぎり、このシグニのパワーは＋3000差れ、このシグニは「【常】：あなたのエナゾーンに緑のカードが3枚以上あるかぎり、このシグニは対戦相手の効果によってダウンしない。」を得る。<br><br>【自】：このシグニがアタックしたとき、このターンにあなたがピースを使用していた場合、対戦相手シグニゾーン1つを指定する。次の対戦相手のターンの間、こ対戦相手はそのシグニゾーンにあるシグニでアタックできない。", //JP_TEXT
		"「常」：此精靈在中央精靈區時，此精靈力量+3000，此精靈獲得「常：我方能量區綠色卡牌有3張以上時，此精靈不會被對方效果橫置。」。<br><br>「自」：此精靈攻擊時，本回合我方有使用Piece的話，指定對方1個精靈區。下一個對方回合中，對方該精靈區的精靈不能攻擊。"	//TW_TEXT
		],
	[
		"WXDi-P11-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-047.jpg", //SRC
		"幻獣神 キメラ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚見る。その中から＜地獣＞のシグニを2枚までこのシグニの下に置き、残りを好きな順番でデッキの一番下に置く。<br><br>【起】このシグニの下からカード1枚をトラッシュに置く：あなたのシグニ1体を対象とし、ターン終了時まで、それのパワーを＋3000する。<br><br>【起】[緑] このシグニの下からカード1枚をトラッシュに置く：ターン終了時まで、このシグニは【ランサー】を得る。", //JP_TEXT
		"「出」：查看我方牌組上方3張卡牌。其中最多2張＜地獸＞放置到此精靈下方，剩下的按任意順序放回牌組下方。<br><br>「起」此精靈下方1張卡牌放置到廢棄區：我方1隻精靈作對象，直到回合結束時為止，其力量+3000。<br><br>「起」綠1此精靈下方1張卡牌放置到廢棄區：直到回合結束時為止，此精靈獲得【槍兵】。"	//TW_TEXT
		],
	[
		"WXDi-P11-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-048.jpg", //SRC
		"凶将姫 カーニバル//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：このシグニがアタックしたとき、あなたのトラッシュに黒のカードが10枚以上あり対戦相手のエナゾーンにカードが2枚以上ある場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【自】（ターン1）：このシグニがアタックしたとき、あなたのトラッシュに黒のカードが20枚以上ある場合、対戦相手は手札を1枚捨てる。<br><br>【出】[黒][無][無]：対戦相手のシグニ1体を対象とし、それをバニッシュする。あなたのデッキの上からそれのレベルと同じ枚数のカードをトラッシュに置く。", //JP_TEXT
		"「自」(回合1)：此精靈攻擊時，我方廢棄區黑色卡牌有10張以上時，對方能量區卡牌有2張以上時，對方選擇自己能量區1張卡牌放置到廢棄區。<br><br>「自」(回合1)：此精靈攻擊時，我方廢棄區黑色卡牌有20張以上時，對方捨棄1張手牌。<br><br>「出」黑1無2：對方1隻精靈作對象，將其破壞。我方牌組上將與該精靈相同等級數量的卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P11-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-049.jpg", //SRC
		"ドライ＝厄姫パンドラ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、あなたのトラッシュにある＜毒牙＞のシグニ3枚をゲームから除外し[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－10000する。<br><br>【出】手札から＜毒牙＞のシグニを1枚捨てる：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－5000する。", //JP_TEXT
		"「自」：此精靈攻擊時，對方1隻精靈作對象，可以將我方廢棄區3張＜毒牙＞精靈從遊戲中除外並支付黑1。若如此做，直到回合結束時為止，將其力量-10000。<br><br>「出」從手牌捨棄1張＜毒牙＞精靈：對方1隻精靈作對象，直到回合結束時為止，將其力量-5000。"	//TW_TEXT
		],
	[
		"WXDi-P11-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-050.jpg", //SRC
		"融合せし極門 ウトゥルス//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使/奏械：古代兵器", //CLASS
		"白黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"15000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは《融合の儀 タウィル//メモリア》か《融合の儀 ウムル//メモリア》の効果によってしか新たに場に出せない。<br><br>【出】：あなたのトラッシュから《融合の儀 タウィル//メモリア》か《融合の儀 ウムル//メモリア》1枚を対象とし、それをこのシグニの下に置く。<br><br>【出】：あなたのトラッシュから白か黒のシグニ1枚を対象とし、それを場に出す。<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「常」：此精靈只能通過《融合の儀 タウィル//メモリア》或《融合の儀 ウムル//メモリア》的效果新出場。<br><br>「出」：我方廢棄區1張《融合の儀 タウィル//メモリア》或《融合の儀 ウムル//メモリア》作對象，將其放置到此精靈下方。<br><br>「出」：我方廢棄區1張白色或黑色精靈作對象，將其出場。<br><br>「生命爆發」：我方廢棄區1張精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P11-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-051.jpg", //SRC
		"融合の儀 タウィル//メモリア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場に《融合の儀 ウムル//メモリア》があるかぎり、このシグニとあなたの《融合の儀 ウムル//メモリア》のパワーを＋4000する。<br><br>【起】このシグニと《融合の儀 ウムル//メモリア》1体を場からトラッシュに置く：あなたの手札から白か黒のシグニ1枚を場に出す。<br><br>【常】：このカードの上にある《融合せし極門 ウトゥルス//メモリア》は「【自】：このシグニがアタックしたとき、あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。」を得る。", //JP_TEXT
		"「常」：我方場上有《融合の儀 ウムル//メモリア》時，此精靈和我方的《融合の儀 ウムル//メモリア》的力量+4000。<br><br>「起」此精靈和1隻《融合の儀 ウムル//メモリア》從場上放置到廢棄區：從我方手牌將1張白色或黑色精靈出場。<br><br>「常」：此卡牌上的《融合せし極門 ウトゥルス//メモリア》獲得「自：此精靈攻擊時，我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。」。"	//TW_TEXT
		],
	[
		"WXDi-P11-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-052.jpg", //SRC
		"小装 ミカムネ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、このシグニがアップ状態の場合、あなたのデッキの一番上を公開する。そのカードが＜アーム＞か＜ウェポン＞のシグニの場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，此精靈是豎直狀態的話，公開我方牌組上方1張卡牌。該卡牌是＜武裝＞或＜武器＞精靈的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-053.jpg", //SRC
		"コードアンチ メジェド", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【起】[白][白][無] トラッシュにある《コードアンチ メジェド》4枚をゲームから除外する：対戦相手のシグニ1体を対象とし、それを手札に戻す。この能力はこのカードがトラッシュにありあなたのトラッシュに《コードアンチ メジェド》が4枚ある場合にしか使用できない。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「起」白2無1廢棄區的4張《コードアンチ メジェド》從遊戲中除外：對方1隻精靈作對象，將其返回手牌。此能力只能在此卡牌在廢棄區且我方廢棄區有4張《コードアンチ メジェド》時使用。<br><br>「生命爆發」：查看我方牌組上3張卡牌。其中1張精靈公開加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P11-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-054.jpg", //SRC
		"聖将 アストルフォ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場にあるすべてのシグニが白であるかぎり、このシグニのパワーは＋4000される。<br><br>【常】：あなたのトラッシュに白のカードが15枚以上あるかぎり、このシグニは「【常】：対戦相手のターンの間、【シャドウ（このシグニのパワー以下のシグニ）】を得る。」を得る。（このシグニは自身のパワー以下の対戦相手のシグニよって対象にされない）", //JP_TEXT
		"「常」：我方場上所有精靈是白色時，此精靈力量+4000。<br><br>「常」：我方廢棄區白色卡牌有15張以上時，此精靈獲得「常：對方回合中，獲得【暗影(此精靈力量以下的精靈)】。」。"	//TW_TEXT
		],
	[
		"WXDi-P11-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-055.jpg", //SRC
		"聖魔 イポス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、正面にシグニがない場合、そのアタックを無効にしてもよい。そうした場合、シグニゾーン1つを指定する。次の対戦相手のターンの間、対戦相手はそのシグニゾーンにあるシグニでアタックできない。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，正面沒有精靈的話，可以將該攻擊無效。若如此做，指定1個精靈區。下一個對方回合中，對方該精靈區的精靈不能攻擊。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-056.jpg", //SRC
		"ウトゥルス・テリトリー", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"以下の2つから1つを選ぶ。<br>①あなたのトラッシュからレベル2以下の＜天使＞のシグニとレベル2以下の＜古代兵器＞のシグニをそれぞれ1枚まで対象とし、それらを手札に加える。<br>②あなたの場に《融合せし極門 ウトゥルス//メモリア》がある場合、対戦相手のシグニ1体を対象とし、それを手札に戻す。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニの1体を対象とし、それを手札に戻す。", //JP_TEXT
		"以下2項中選擇1項。<br>①我方廢棄區等級2以下的＜天使＞精靈和等級2以下的＜古代兵器＞精靈最多各1張作對象，將其加入手牌。<br>②我方場上有《融合せし極門 ウトゥルス//メモリア》的話，對方1隻精靈作對象，將其返回手牌。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-057.jpg", //SRC
		"小銃 キライザ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたの場に＜アーム＞のシグニがある場合、対戦相手のパワー2000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈攻擊時，我方場上有＜武裝＞精靈的話，對方1隻力量2000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P11-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-058.jpg", //SRC
		"羅石 ヘソナイト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：対戦相手のターンの間、このシグニが対戦相手の、能力か効果の対象になったとき、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。", //JP_TEXT
		"「自」(回合1)：對方回合中，此精靈成為對方的能力或效果的對象時，對方選擇自己能量區1張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P11-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-059.jpg", //SRC
		"羅原 華代//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、手札から＜原子＞のシグニを1枚捨ててもよい。そうした場合、カードを1枚引く。その後、対戦相手のシグニを1体まで対象とし、それをバニッシュする。<br><br>【起】（ターン1）[赤]◎◎：あなたのトラッシュから＜原子＞のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方回合結束時，可以從手牌捨棄1張＜原子＞精靈。若如此做，抽1張牌。之後，對方最多1隻精靈作對象，將其破壞。<br><br>「自」(回合1)紅1Coin*2：我方廢棄區1張＜原子＞精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P11-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-060.jpg", //SRC
		"爆砲 タマ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このシグニの左か右にダウン状態の＜ウェポン＞のシグニがある場合、対戦相手のパワー5000以下のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【自】：このシグニがアタックしたとき、このシグニの左か右にダウン状態の＜アーム＞のシグニがある場合、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、[無]を支払ってもよい。そうした場合、それをトラッシュに置く。", //JP_TEXT
		"「自」：此精靈攻擊時，此精靈左或右有橫置狀態的＜武器＞精靈時，對方1隻力量5000以下的精靈作對象，可以支付無1。若如此做，將其破壞。<br><br>「自」：此精靈攻擊時，此精靈左或右有橫置狀態的＜武裝＞精靈時，對方能量區1張與對方中央分身不持有共通顏色的卡牌作對象，可以支付無1。若如此做，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P11-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-061.jpg", //SRC
		"羅原 C2H6", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたの＜原子＞のシグニ1体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】：対戦相手のパワー2000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「升階」放置到我方1隻＜原子＞上方（不滿足此條件不能出場）<br><br>「出」：對方1隻力量2000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P11-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-062.jpg", //SRC
		"コードアート Jユークボックス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにスペルが2枚以上あるかぎり、このシグニのパワーは＋3000され、対戦相手の効果によって－（マイナス）されない。<br><br>【自】（ターン1）：あなたがスペルを使用したとき、手札を1枚捨ててもよい。そうした場合、カードを1枚引く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「常」：我方廢棄區的魔法有2張以上時，此精靈力量+3000，且不會被對方效果減少。<br><br>「自」(回合1)：我方使用魔法時，可以捨棄1張卡牌。若如此做，抽1張牌。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-063.jpg", //SRC
		"無心の豪圧", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。このスペルをチェックゾーンからあなたの《幻怪姫 エクス//メモリア》か《中装 デウス//メモリア》か《コードライド マキナ//メモリア》1体の下に置いてもよい。<br><br>【自】：このカードがシグニの下に置かれた場合、ターン終了時まで、このカードの上にあるシグニのパワーを＋2000する。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニの1体を対象とし、それをバニッシュする。", //JP_TEXT
		"對方1隻力量12000以下的精靈作對象，將其破壞。此魔法可以從檢查區放置到我方《幻怪姫 エクス//メモリア》或《中装 デウス//メモリア》或《コードライド マキナ//メモリア》的下方。<br><br>「自」：此魔法放置到精靈下方時，直到回合結束時為止，此卡牌上的精靈力量+2000。<br><br>「生命爆發」：對方1隻豎直精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P11-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-064.jpg", //SRC
		"蒼天 タマ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのターンの間、あなたの他の＜天使＞のシグニ1体が場に出るか、あなたの効果によって対戦相手が手札を1枚捨てたとき、次の対戦相手のターン終了時まで、このシグニのパワーを＋4000する。", //JP_TEXT
		"「常」(回合1)：我方回合中，我方其他1隻＜天使＞精靈出場或因我方效果使對方捨棄1張手牌時，直到下一個對方回合結束時為止，此精靈力量+4000。"	//TW_TEXT
		],
	[
		"WXDi-P11-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-065.jpg", //SRC
		"羅原 ThO2", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】手札を1枚捨てる：あなたのデッキの上からカードを3枚見る。その中から＜原子＞のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」捨棄1張手牌：查看我方牌組上3張卡牌。其中1張＜原子＞精靈公開並加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P11-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-066.jpg", //SRC
		"羅菌 アメーバ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手の効果によってこのカードが捨てられたとき、あなたの手札が2枚以下の場合、カードを1枚引く。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「自」：因對方效果使此卡牌被捨棄時，我方手牌是2張以下的話，抽1張牌。<br><br>「生命爆發」：查看我方牌組上3張卡牌。其中1張精靈公開並加入手牌或出場，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P11-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-067.jpg", //SRC
		"幻水 ダツ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[青]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。このターンにあなたが手札を2枚以上捨てていた場合、代わりにターン終了時まで、それのパワーを－3000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」藍1：對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。本回合我方手牌有捨棄2張以上的話，作為代替直到回合結束時為止，將其力量-3000。"	//TW_TEXT
		],
	[
		"WXDi-P11-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-068.jpg", //SRC
		"幻蟲 スノセク", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：凶蟲", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、このターンにあなたがカードを2以上捨てていた場合、次の対戦相手のターン終了時まで、このシグニのパワーを＋4000する。<br><br>【出】：カードを1枚引き、手札を1枚捨てる。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，本回合我方手牌有捨棄2張以上的話，直到下一個對方回合結束時為止，此精靈力量+4000。<br><br>「出」：抽1張牌，捨棄1張牌。<br><br>「生命爆發」：對方1張精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-069.jpg", //SRC
		"羅植 ルリマツリ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの手札が4枚以上あるかぎり、このシグニのパワーは＋3000される。<br><br>【自】：対戦相手のターン終了時、カードを1枚引く。<br><br>【自】：あなたがこのカードを捨てたとき、手札を1枚捨ててもよい。そうした場合、【エナチャージ1】をする。<br><br>【ライフバースト】：カードを3枚引く。", //JP_TEXT
		"「常」：我方手牌是4張以上時，此精靈力量+3000。<br><br>「自」：對方回合結束時，抽1張牌。<br><br>「自」：我方捨棄此卡牌時，可以捨棄1張手牌。若如此做，【能量填充1】。<br><br>「生命爆發」：抽3張牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-070.jpg", //SRC
		"FEVER", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード7を支払ってもよい。（あなたのルリグの下からカードを合計7枚ルリグトラッシュに置く）<br><br>あなたのデッキの上からカードを3枚見る。その中から好きな枚数のカードを好きな順番でデッキの一番下に置き、残りを好きな順番でデッキの一番上に戻す。追加でエクシード7を支払っていた場合、カードを2枚引く。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		"此魔法使用時，使用費用可以追加超越7。(我方分身下方卡牌合計7張放置到分身廢棄區)<br><br>查看我方牌組上3張卡牌。其中任意張卡牌按任意順序放回牌組下方，剩下的按任意順序放回牌組上方。追加支付超越7的話，抽2張牌。<br><br>「生命爆發」：對方1隻精靈作對象，可以捨棄1張手牌。若如此做，將其返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P11-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-071.jpg", //SRC
		"翠将 バーバリアン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは各ターンに1度しかアタックできない。<br><br>【出】[緑]：ターン終了時まで、このシグニは「【常】：このシグニは正面のシグニのパワーが3000以下であるかぎり、【ランサー】を得る。」を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「常」：此精靈每回合只能攻擊一次。<br><br>「出」綠1：直到回合結束時為止，此精靈獲得「常：此精靈正面精靈是3000以下時，獲得【槍兵】。」。"	//TW_TEXT
		],
	[
		"WXDi-P11-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-072.jpg", //SRC
		"壱ノ遊 メンコ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがシグニがバトルによってシグニ1体をバニッシュしたとき、このシグニを場から手札に戻してもよい。そうした場合、【エナチャージ2】をする。", //JP_TEXT
		"「自」：此精靈因戰鬥破壞1隻精靈時，此精靈可以從場上返回手牌。若如此做，【能量填充2】。"	//TW_TEXT
		],
	[
		"WXDi-P11-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-073.jpg", //SRC
		"コードイート マリトッツォ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン2）：あなたのエナゾーンにカードが1枚が置かれたとき、ターン終了時まで、このシグニのパワーを＋2000する。<br><br>【出】[無]：あなたのデッキの上からカードを3枚見る。その中からカード1枚をエナゾーンに置き、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「自」(回合2)：我方能量區放置1張卡牌時，直到回合結束時為止，此精靈力量+2000。<br><br>「出」無1：查看我方牌組上3張卡牌。其中1張放置到能量區，剩下的按任意順序放回牌組下方。<br><br>「生命爆發」：【能量填充1】。本回合中，下一次我方因精靈受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P11-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-074.jpg", //SRC
		"翠美 スクラッチアート", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のトラッシュからカード1枚を対象とし、それをデッキの一番下に置く。<br><br>【自】：このシグニがバニッシュされたとき、あなたのトラッシュから[ガード]を持たないシグニを3枚まで対象とし、それらを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがルリグによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方廢棄區1張卡牌作對象，將其返回牌組下方。<br><br>「自」：此精靈被破壞時，我方廢棄區最多3張不持有防禦標記的精靈作對象，將其按任意順序牌組下方。<br><br>「生命爆發」：【能量填充1】。本回合中，下一次我方因分身受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P11-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-075.jpg", //SRC
		"幻水 遊月//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、以下の2つから1つまで選ぶ。<br>①あなたの手札からレベル1、レベル2、レベル3のシグニを1枚ずつ公開する。そうした場合、【エナチャージ1】をする。<br>②あなたの手札から＜水獣＞のシグニを3枚公開する。そうした場合、カードを1枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，以下2項中選擇1項。<br>①公開我方手牌1張等級1，等級2，等級3的精靈。若如此做，【能量填充1】。<br>②公開我方手牌3張＜水獸＞精靈。若如此做，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-076.jpg", //SRC
		"七光", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード7を支払ってもよい。<br><br>あなたのトラッシュからあなたのセンタールリグと共通する色を持つシグニ1枚を対象とし、それをエナゾーンに置く。その後、追加でエクシード7を支払っていた場合、あなたのエナゾーンから[ガード]を持たないシグニを2枚まで対象とし、それらを手札に加える。<br><br>【ライフバースト】：【エナチャージ1】をする。その後、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"此魔法使用時，使用費用可以追加超越7。(我方分身下方卡牌合計7張放置到分身廢棄區)<br><br>我方廢棄區1張與我方中央分身持有共通顏色的精靈作對象，將其放置到能量區。之後，追加支付超越7的話，我方能量區最多2張不持有防禦標記的精靈作對象，將其加入手牌。<br><br>「生命爆發」：【能量填充1】。之後，我方能量區最多1張精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P11-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-077.jpg", //SRC
		"コードライド マキナ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、このシグニの下からカードを好きな枚数をトラッシュに置く。その後、この方法でトラッシュに置いたカード1枚につき対戦相手のデッキの上からカードを1枚トラッシュに置く。<br><br>【出】：あなたのデッキの一番上のカードをこのシグニの下に置く。<br>（シグニの下に置かれるカードは表向きである）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「自」：我方攻擊階段開始時，此精靈下方任意張卡牌放置到廢棄區。此方法放置到廢棄區的卡牌每有1張則對方牌組上方1張卡牌放置到廢棄區。<br><br>「出」：我方牌組上1張卡牌放置到此精靈下方。<br><br>「生命爆發」：對手1張精靈作為對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-P11-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-078.jpg", //SRC
		"融合の儀 ウムル//メモリア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの一番上のカードをトラッシュに置く。そのカードが《融合の儀 タウィル//メモリア》の場合、そのカードをトラッシュから場に出してもよい。<br><br>【起】[黒][白] このシグニと《融合の儀 タウィル//メモリア》1体を場からトラッシュに置く：あなたのトラッシュから白か黒のシグニ1枚を対象とし、それを場に出す。<br><br>【常】：このカードの上にある《融合せし極門 ウトゥルス//メモリア》は「【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。」を得る。", //JP_TEXT
		"「出」：我方牌組上方1張卡牌放置到廢棄區。該卡牌是《融合の儀 タウィル//メモリア》的話，該卡牌可以從廢棄區出場。<br><br>「起」黑1白1此精靈和1隻《融合の儀 タウィル//メモリア》從場上放置到廢棄區：我方廢棄區1張白色或黑色精靈作對象，將其出場。<br><br>「常」：此卡牌上的《融合せし極門 ウトゥルス//メモリア》獲得「自：此精靈攻擊時，對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。」。"	//TW_TEXT
		],
	[
		"WXDi-P11-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-079.jpg", //SRC
		"幻光蟲 ヘイケ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：凶蟲", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[黒][黒] このシグニを場からトラッシュに置く：カードが付いているか下にカードがある対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－15000する。<br>（【チャーム】や【アクセ】、【ソウル】はシグニに付く）<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「起」黑2此精靈從場上放置到廢棄區：附有卡牌或下方有卡牌的對方1隻精靈作對象，直到回合結束時為止，將其力量-15000。<br>（【魅飾】，【附屬】，【靈魂】是附在精靈）"	//TW_TEXT
		],
	[
		"WXDi-P11-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-080.jpg", //SRC
		"中装 デウス//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、このシグニの下からカードを好きな枚数をトラッシュに置く。ターン終了時まで、それのパワーをこの方法でトラッシュに置いたカード1枚につき－3000する。<br><br>【出】：あなたの手札を2枚までこのシグニの下に置く。<br>（シグニの下に置かれるカードは表向きである）", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻精靈作對象，此精靈下方任意張卡牌放置到廢棄區。直到回合結束時為止，其力量為此方法放置到廢棄區的卡牌每有1張則-3000。<br><br>「出」：我方最多2張手牌放置到此精靈下方。<br>（精靈下放置的卡牌為正面向上）"	//TW_TEXT
		],
	[
		"WXDi-P11-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-081.jpg", //SRC
		"爆書 ナナシ//メモリア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、このシグニの下にカードがある場合、あなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。<br><br>【出】：あなたの手札からレベル3以上のシグニ1枚をこのシグニの下に置く。<br>（シグニの下に置かれるカードは表向きである）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「自」：此精靈攻擊時，此精靈下方有卡牌的話，我方廢棄區1張黑色精靈作對象，將其加入手牌。<br><br>「出」：可以從我方手牌將1張等級3以上的精靈放置到此精靈下方。<br><br>「生命爆發」：對方1隻精靈作對象，可以捨棄1張手牌。若如此做，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P11-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-082.jpg", //SRC
		"凶魔 フルフル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのトラッシュにカードが15枚以上あるかぎり、このシグニのパワーは＋3000される。<br><br>【自】：あなたのターン終了時、あなたのデッキの上からカードを6枚トラッシュに置く。この方法でカードを6枚トラッシュに置いた場合、対戦相手のデッキの上からカードを6枚トラッシュに置く。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「常」：我方廢棄區的卡牌有15張以上時，此精靈力量+3000。<br><br>「自」：我方回合結束時，我方牌組上6張卡牌放置到廢棄區。此方法將6張卡牌放置到廢棄區的話，對方牌組上6張卡牌放置到廢棄區。<br><br>「生命爆發」：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P11-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-083.jpg", //SRC
		"ダークネス・セブン", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード7を支払ってもよい。（あなたのルリグの下からカードを合計7枚ルリグトラッシュに置く）<br><br>対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。その後、追加でエクシード7を支払っていた場合、追加で対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、ターン終了時まで、それのパワーを－15000する。", //JP_TEXT
		"此魔法使用時，使用費用可以追加超越7。(我方分身下方卡牌合計7張放置到分身廢棄區)<br><br>對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。追加支付超越7的話，追加對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，直到回合結束時為止，將其力量-15000。"	//TW_TEXT
		],
	[
		"WXDi-P11-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-084.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P11-TK01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-TK01.jpg", //SRC
		"白羅星姫 サタン", //NAME
		"TK", //RARE
		"シグニ レゾナ/クラフト", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】【メインフェイズ】手札とエナゾーンからシグニを合計2枚トラッシュに置く<br><br>【常】：あなたのターンの間、対戦相手はシグニを2体までしか場に出すことができない。（すでに場に3体以上ある場合は2体になるようにシグニをトラッシュに置く）<br><br>（レゾナでありクラフトであるシグニはリムーブできず場を離れると除外される）", //JP_TEXT
		"「出場條件」（主要階段）手牌和能量區合計2張精靈放置到廢棄區。<br><br>「常」：我方回合中，對方最多只能有2隻精靈出場。（場上有3隻以上精靈的話需要將精靈放置到廢棄區直到2隻為止）<br><br>（共嗚衍生物精靈不被廢棄且離場時從遊戲中除外）"	//TW_TEXT
		],
	[
		"WXDi-P11-TK02", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-TK02.jpg", //SRC
		"白羅星姫 フルムーン", //NAME
		"TK", //RARE
		"シグニ レゾナ/クラフト", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】【メインフェイズ】手札とエナゾーンからシグニを合計3枚トラッシュに置く<br><br>【常】：対戦相手のターンの間、あなたの他のシグニは【シャドウ（シグニ）】を得る。（それらのシグニは対戦相手のシグニによって対象にされない）<br><br>【出】：次の対戦相手のターンの間、対戦相手はシグニアタックステップにシグニで合計一度しかアタックできない）", //JP_TEXT
		"「出場條件」（主要階段）手牌和能量區合計3張精靈放置到廢棄區。<br><br>「常」：對方回合中，我方其他精靈獲得【暗影(精靈)】。<br><br>「出」：下一個對方回合中，對方的精靈攻擊步驟合計只能攻擊一次。"	//TW_TEXT
		],
	[
		"WXDi-P11-TK03", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-TK03.jpg", //SRC
		"緑参ノ遊姫 メリゴラン", //NAME
		"TK", //RARE
		"シグニ レゾナ/クラフト", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】【メインフェイズ】手札とエナゾーンからシグニを合計2枚トラッシュに置く<br><br>【自】：このシグニがアタックしたとき、あなたのエナゾーンからカードを1枚まで対象とし、それを手札に加える。<br><br>【自】：このシグニが場を離れたとき、あなたのエナゾーンからカードを1枚まで対象とし、それを手札に加える。<br><br>【出】：【エナチャージ2】", //JP_TEXT
		"「出場條件」（主要階段）手牌和能量區合計2張精靈放置到廢棄區。<br><br>「自」：此精靈攻擊時，我方能量區最多1張卡牌作對象，將其加入手牌。<br><br>「自」：此精靈離場時，我方能量區最多1張卡牌作對象，將其加入手牌。<br><br>「出」：【能量填充2】"	//TW_TEXT
		],
	[
		"WXDi-P11-TK04", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-TK04.jpg", //SRC
		"緑参ノ遊姫 アスレ【HARD】", //NAME
		"TK", //RARE
		"シグニ レゾナ/クラフト", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】【メインフェイズ】手札とエナゾーンからシグニを合計3枚トラッシュに置く<br><br>【自】（ターン1）：あなたのシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、【エナチャージ1】をする。<br><br>【自】：このシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、このシグニをアップする。<br><br>（レゾナでありクラフトであるシグニはリムーブできず場を離れると除外される）", //JP_TEXT
		"「出場條件」（主要階段）手牌和能量區合計3張精靈放置到廢棄區。<br><br>「自」(回合1)：我方精靈因戰鬥破壞對方1隻精靈時，【能量填充1】。<br><br>「自」：此精靈因戰鬥破壞對方1隻精靈時，豎直此精靈。<br><br>（共嗚衍生物精靈不被廢棄且離場時從遊戲中除外）"	//TW_TEXT
		],
	[
		"WXDi-P11-TK05", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-TK05.jpg", //SRC
		"黒大幻蟲 アラクネ・パイダ", //NAME
		"TK", //RARE
		"シグニ レゾナ/クラフト", //TYPE
		"奏生：凶蟲", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】【メインフェイズ】手札とエナゾーンからシグニを合計2枚トラッシュに置く<br><br>【自】：各アタックフェイズ開始時、ターン終了時まで、【チャーム】が付いている対戦相手のすべてのシグニは能力を失う。<br><br>【自】：【チャーム】が付いている対戦相手のシグニ1体がバニッシュされたとき、カードを1枚引く。<br><br>【起】（ターン1）[黒(0)]：対戦相手のシグニ1体を対象とし、対戦相手のトラッシュからカード1枚をそれの【チャーム】にする。", //JP_TEXT
		"「出場條件」（主要階段）手牌和能量區合計2張精靈放置到廢棄區。<br><br>「自」：各攻擊階段開始時，直到回合結束時為止，對方所有附有【魅飾】的精靈失去能力。<br><br>「自」：對方附有【魅飾】的1隻精靈被破壞時，抽1張牌。<br><br>「起」(回合1)黑0：對方1隻精靈作對象，對方廢棄區1張卡牌成為其【魅飾】。"	//TW_TEXT
		],
	[
		"WXDi-P11-TK06", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-TK06.jpg", //SRC
		"黒大幻蟲 オウグソク【FA】", //NAME
		"TK", //RARE
		"シグニ レゾナ/クラフト", //TYPE
		"奏生：凶蟲", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】【メインフェイズ】手札とエナゾーンからシグニを合計3枚トラッシュに置く<br><br>【自】：このシグニが場を離れたとき、あなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。<br><br>【出】：ターン終了時まで、【チャーム】が付いている対戦相手のすべてのシグニのパワーを－10000する。<br><br>（レゾナでありクラフトであるシグニはリムーブできず場を離れると除外される）", //JP_TEXT
		"「出場條件」（主要階段）手牌和能量區合計3張精靈放置到廢棄區。<br><br>「自」：此精靈離場時，我方廢棄區1張黑色精靈作對象，將其加入手牌。<br><br>「出」：直到回合結束時為止，對方所有附有【魅飾】的精靈力量-10000。<br><br>（共嗚衍生物精靈不被廢棄且離場時從遊戲中除外）"	//TW_TEXT
		],
	[
		"WXDi-D09-H01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H01.jpg", //SRC
		"欠片へ一歩 ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D09-H02", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H02.jpg", //SRC
		"奇跡へ一歩 ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D09-H03", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H03.jpg", //SRC
		"真実へ一歩 ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D09-H04", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H04.jpg", //SRC
		"頂点へ一歩 ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //STORY
		"【チーム】＜No Limit＞<br>【チーム常】：アタックしているあなたのシグニのパワーを＋2000する。<br><br>【出】：カードを1枚引き、【エナチャージ1】をする。<br><br>【起】（ゲーム1）[赤(0)]：ターン終了時まで、このルリグは「【自】：このルリグがアタックしたとき、あなたのアップ状態のレベル2のルリグ2体をダウンしてもよい。そうした場合、対戦相手が[ガード]を持つカードを1枚捨てないかぎり、対戦相手にダメージを与える。」を得る。", //JP_TEXT
		"「隊伍常」：我方攻擊中的精靈的力量+2000。<br><br>「出」：抽1張牌，【能量填充1】。<br><br>「起」(遊戲1)紅0：直到回合結束時為止，此分身獲得「自：此分身攻擊時，可以橫置我方2隻等級2且豎直狀態的分身。若如此做，對方不捨棄1張持有防禦標記的卡牌的話，給予對方傷害。」。"	//TW_TEXT
		],
	[
		"WXDi-D09-H05", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H05.jpg", //SRC
		"新月の巫女 タマヨリヒメ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D09-H06", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H06.jpg", //SRC
		"タマ・おおごえ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」：對方1隻力量10000以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-H07", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H07.jpg", //SRC
		"タマ・おーら", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのルリグ1体を対象とし、ターン終了時まで、それは「【自】（ターン1）：このルリグがアタックしたとき、このルリグをアップし、ターン終了時まで、このルリグは能力を失う。」を得る。", //JP_TEXT
		"「出」：我方1隻分身作對象，直到回合結束時為止，使其獲得「自(回合1)：此分身攻擊時，豎直此分身，直到回合結束時為止，此分身失去能力。」。"	//TW_TEXT
		],
	[
		"WXDi-D09-H08", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H08.jpg", //SRC
		"マキナ・ゼロ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D09-H09", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H09.jpg", //SRC
		"マキナウィングスラッシュ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル1のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：あなたのトラッシュから[ガード]を持たないレベル1のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：對方1隻等級1以下的精靈作對象，將其破壞。<br><br>「出」：我方廢棄區1張不持有防禦標記的等級1精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-H10", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H10.jpg", //SRC
		"マキナスマッシュ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。<br><br>【出】[黒]：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。<br><br>「出」黑1：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-H11", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H11.jpg", //SRC
		"一覇一絡", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたのレベル3のルリグ1体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】（ターン1）：このルリグがアタックしたとき、対戦相手のライフクロス1枚をクラッシュする。対戦相手がそのカードのライフバーストを使用することを選んだ場合、[無][無]を支払ってもよい。そうした場合、そのカードのライフバーストは発動しない。』", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方1隻等級3的分身作對象，直到回合結束時為止，使其獲得以下能力。<br><br>「自」(回合1)：此分身攻擊時，擊潰對方1張生命護甲。對方選擇使用該卡牌的生命爆發時，可以支付無2。若如此做，該卡牌的生命爆發不會發動。"	//TW_TEXT
		],
	[
		"WXDi-D09-H12", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H12.jpg", //SRC
		"GO TO the TOP!", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤白", //COLOR
		"", //LEVEL
		"《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に白と赤のルリグがいる<br><br>あなたのデッキからシグニ1枚を探して公開し手札に加え、デッキをシャッフルする。対戦相手のセンタールリグがレベル3以上の場合、対戦相手は自分のエナゾーンからカード3枚を選びトラッシュに置く。（2枚以下の場合、それらをすべて選ぶ）", //JP_TEXT
		"「使用條件」我方場上有白色和紅色分身<br><br>從我方牌組找1張精靈公開並加入手牌，洗切牌組。對方中央分身是等級3以上的話，對方選擇自己能量區的3張卡牌放置到廢棄區。（2張以下的話，需要選擇全部）"	//TW_TEXT
		],
	[
		"WXDi-D09-H13", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H13.jpg", //SRC
		"紅将姫 ノブナガ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ライズ】あなたの赤のシグニ1体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[赤]：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【起】[赤][赤]：ターン終了時まで、このシグニは【ダブルクラッシュ】を得る。（アタックによるダメージでライフクロスを2枚クラッシュする）", //JP_TEXT
		"「升階」放置到我方1隻紅色精靈上方（不滿足此條件無法出場）<br><br>「出」紅1：對方1隻力量8000以下的精靈作對象，將其破壞。<br><br>「起」紅2：直到回合結束時為止，此精靈獲得【雙重擊潰】。"	//TW_TEXT
		],
	[
		"WXDi-D09-H14", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H14.jpg", //SRC
		"羅婚石 ダイヤブライド", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたの赤のシグニ1体が対戦相手の、能力か効果の対象になったとき、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【出】手札を1枚捨てる：あなたのデッキの上からカードを2枚見る。その中からカード1枚を手札に加え、残りをトラッシュに置く。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。②カードを1枚引く。", //JP_TEXT
		"「自」(回合1)：我方1隻紅色精靈因對方的能力或效果成為對象時，對方選擇自己能量區的1張卡牌，將其放置到廢棄區。<br><br>「出」捨棄1張手牌：查看我方牌組頂2張卡牌。其中1張加入手牌，剩下的放置到廢棄區。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其破壞。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-H15", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H15.jpg", //SRC
		"羅輝石 花代//メモリア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたのエナゾーンにカードがない場合、ターン終了時まで、このシグニの基本レベルは3になり、基本パワーは12000になる。<br><br>【自】：あなたのアタックフェイズ開始時、このシグニのレベル以下の対戦相手のシグニ1体を対象とし、手札から赤のカードか＜宝石＞のシグニを合計2枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方能量區沒有卡牌的話，直到下一個對方回合結束時為止，此精靈的基本等級變為3，基本力量變為12000。<br><br>「自」：我方攻擊階段開始時，此精靈等級以下的對方1隻精靈作對象，可以從手牌捨棄合計2張紅色卡牌或＜寶石＞精靈。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D09-H16", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H16.jpg", //SRC
		"大装 ハルバード", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのアップ状態のシグニ1体が対戦相手の、アシストルリグかライフバーストの能力か効果の対象になったとき、[赤][赤][赤][無]を支払ってもよい。そうした場合、対戦相手のライフクロス1枚をクラッシュする。<br><br>【出】[赤] 手札を1枚捨てる：カードを2枚引く。", //JP_TEXT
		"「自」(回合1)：我方豎直狀態的1隻精靈因對方的支援分身或生命爆發的能力或效果成為對象時，可以支付紅3無1。若如此做，擊潰對方1張生命護甲。<br><br>「出」紅1捨棄1張手牌：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-H17", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H17.jpg", //SRC
		"轟炎 フレイスロ団長", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、手札をすべて捨ててもよい。この方法でカードを6枚以上捨てた場合、対戦相手のライフクロス1枚をクラッシュする。<br><br>【自】：このシグニがアタックしたとき、あなたの手札が0枚の場合、[赤][赤]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは【アサシン】を得る。", //JP_TEXT
		"「自」：我方攻擊階段開始時，可以捨棄所有卡牌。通過此方法捨棄的卡牌有6張以上的話，擊潰對方1張生命護甲。<br><br>「自」：此精靈攻擊時，我方手牌是0張的話，可以支付紅2。若如此做，此精靈獲得【暗殺】。"	//TW_TEXT
		],
	[
		"WXDi-D09-H18", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H18.jpg", //SRC
		"凶魔姫 エレシュキガル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのライフクロス2枚をトラッシュに置く。この方法でカードが2枚トラッシュに置かれた場合、対戦相手のすべてのシグニをトラッシュに置く。（コストのない【出】能力は発動しないことを選べない。ライフクロスが1枚の場合その1枚をトラッシュに置く）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		"「出」：我方2張生命護甲放置到廢棄區。通過此方法放置了2張卡牌到廢棄區的話，對方所有精靈放置到廢棄區。(不用費用的「出」能力不能選擇發動。生命護甲是1張的話則將1張放置到廢棄區）<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-10000。"	//TW_TEXT
		],
	[
		"WXDi-D09-H19", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H19.jpg", //SRC
		"紅魔 ヘラ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたの場にあるすべてのシグニが赤の場合、対戦相手のパワー5000以下のシグニ1体を対象とし、[赤]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈攻擊時，我方場上所有精靈是紅色的話，對方1隻力量5000以下的精靈作對象，可以支付紅1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D09-H20", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H20.jpg", //SRC
		"羅星 フォルナックス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、手札からレベル1のシグニを1枚捨ててもよい。そうした場合、それをトラッシュに置く。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方能量區1張與對方中央分身不持有共同顏色的卡牌作對象，可以從手牌捨棄1張等級1的精靈。若如此做，將其放置到廢棄區。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以捨棄1張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D09-H21", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H21.jpg", //SRC
		"幻竜 遊月//メモリア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンにカードがシグニ4枚以上ある場合、[赤][無][無]を支払ってもよい。そうした場合、対戦相手は自分のエナゾーンからカードを2枚選びトラッシュに置く。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方能量區的卡牌有4張以上的話，可以支付紅1無2。若如此做，對方選擇自己能量區2張卡牌放置到廢棄區。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D09-H22", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H22.jpg", //SRC
		"紅魔 デカラビア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニ1体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「生命爆發」：對方1隻精靈作對象，可以支付無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D09-H23", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H23.jpg", //SRC
		"紅将 トリスタン", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：あなたのデッキの上からカードを5枚見る。その中からカードを3枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「生命爆發」： 查看我方牌組頂5張卡牌。將其中最多3張卡牌加入手牌，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-D09-H24", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H24.jpg", //SRC
		"小装 サミダレ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】[赤] 手札を1枚捨てる：あなたのトラッシュから＜ウェポン＞のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「出」紅1捨棄1張手牌：我方廢棄區1張＜武器＞精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以捨棄1張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D09-H25", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H25.jpg", //SRC
		"小装 エケザクス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは赤か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個紅或黑）"	//TW_TEXT
		],
	[
		"WXDi-D09-H26", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H26.jpg", //SRC
		"小装 ローメイル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」無1：對方1隻力量3000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D09-H27", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H27.jpg", //SRC
		"紅将 ランスロット", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[無]：対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」無1：對方1隻力量5000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D09-H28", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H28.jpg", //SRC
		"サーバント #", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-H29", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-H29.jpg", //SRC
		"炎神の大鎌", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード7を支払ってもよい。（あなたのルリグの下からカードを合計7枚ルリグトラッシュに置く）<br><br>対戦相手のパワー2000以下のシグニ1体を対象とし、それをバニッシュする。追加でエクシード7を支払っていた場合、代わりに対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"此魔法使用時，使用費用可以追加超越7。(我方分身下方卡牌合計7張放置到分身廢棄區)<br><br>對方1隻力量2000以下的精靈作對象，將其破壞。追加支付超越7的話，作為代替對方1隻力量12000以下的精靈作對象，將其破壞。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-D09-P01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P01.jpg", //SRC
		"コード・ピルルク", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D09-P02", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P02.jpg", //SRC
		"コード・ピルルク・K", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D09-P03", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P03.jpg", //SRC
		"コード・ピルルク・M", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D09-P04", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P04.jpg", //SRC
		"コード・ピルルク・xi", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの手札が対戦相手より3枚以上多い場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。6枚以上多い場合、代わりにターン終了時まで、それのパワーを－6000する。<br><br>【出】：カードを2枚引く。<br><br>【起】（ゲーム1）[青(0)]：対戦相手のセンタールリグのレベル以下の数字1つを宣言する。対戦相手の手札を見て、[ガード]を持たず宣言した数字と同じレベルを持つすべてのシグニを捨てさせる。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方手牌比對方多3張以上的話，對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。多6張以上的話，作為代替直到回合結束時為止，將其力量-6000。<br><br>「出」：抽2張牌。<br><br>「起」(遊戲1)藍0：宣言1個在對方中央分身等級以下的數字。查看對方手牌，捨棄不持有防禦標記且與宣言數字持有相同等級的精靈。"	//TW_TEXT
		],
	[
		"WXDi-D09-P05", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P05.jpg", //SRC
		"ドーナ START", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ゲームを開始する際に、センタールリグでないルリグを表向きにしても◎を得られない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D09-P06", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P06.jpg", //SRC
		"ドーナ『応援してね！』", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル1のシグニ1体を対象とし、それを手札に戻す。<br><br>【出】：◎◎を得る。<br>（プレイヤーが保持できる◎の上限は5枚である）", //JP_TEXT
		"「出」：對方1隻等級1的精靈作對象，將其返回手牌。<br><br>「出」：獲得Coin*2。"	//TW_TEXT
		],
	[
		"WXDi-D09-P07", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P07.jpg", //SRC
		"ドーナ『いけいけ！』", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー8000以下のシグニ1体を対象とし、それを手札に戻す。<br><br>【出】：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」： 對方1隻力量8000以下的精靈作對象，將其返回手牌。<br><br>「出」：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-P08", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P08.jpg", //SRC
		"マドカ START", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D09-P09", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P09.jpg", //SRC
		"マドカ//フロート", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】手札を1枚捨てる：カードを3枚引く。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」捨棄1張手牌：抽3張牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-P10", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P10.jpg", //SRC
		"マドカ//クラップ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】手札を2枚捨てる：対戦相手のシグニ1体を対象とし、それをダウンする。<br><br>【出】[青][無][無]：対戦相手のシグニ1体を対象とし、それをダウンする。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其橫置。<br><br>「出」捨棄2張手牌：對方1隻精靈作對象，將其橫置。<br><br>「出」藍1無2：對方1隻精靈作對象，將其橫置。"	//TW_TEXT
		],
	[
		"WXDi-D09-P11", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P11.jpg", //SRC
		"サマーライブブルーズ", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に青のルリグが2体以上いる<br><br>カードを2枚引く。その後、対戦相手のシグニ1体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		"「使用條件」我方場上藍色分身有2隻以上<br><br>抽2張牌。之後，對方1隻精靈作對象，將其返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-D09-P12", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P12.jpg", //SRC
		"burning curiosity", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このピースを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>対戦相手のシグニ1体を対象とし、それをバニッシュする。追加でエクシード4を支払っていた場合、代わりにそれをゲームから除外する。", //JP_TEXT
		"使用此PIECE時，可以追加超越4作為追加費用。（我方分身下方合計4張卡牌放置到分身廢棄區）<br><br>對方1隻精靈作對象，將其破壞。追加支付超越4的話，作為代替將其從遊戲中除外。"	//TW_TEXT
		],
	[
		"WXDi-D09-P13", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P13.jpg", //SRC
		"聖天姫 エクシア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのシグニが対戦相手の、能力か効果の対象になったとき、対戦相手のシグニゾーン1つを指定する。このターン、対戦相手はそのシグニゾーンにあるシグニでアタックできない。<br><br>【自】：あなたのターン終了時、あなたのすべてのシグニをアップする。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②カードを1枚引く。", //JP_TEXT
		"「自」(回合1)：我方精靈因對方能力或效果成為目標時，指定對方1個精靈區。本回合中，對方該精靈區的精靈不能攻擊。<br><br>「自」：我方回合結束時，豎直我方所有精靈。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-P14", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P14.jpg", //SRC
		"聖将姫 ゆきめ//メモリア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：アタックフェイズの間、このシグニの正面のシグニがバニッシュされる場合、エナゾーンに置かれる代わりにトラッシュに置かれる。<br><br>【自】：あなたのアタックフェイズ開始時、数字1つを宣言する。対戦相手のデッキの一番上を公開し、そのカードが宣言された数字と同じレベルのシグニの場合、カードを1枚引く。<br><br>【起】◎：対戦相手はデッキの一番上と手札を公開する。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「常」：攻擊階段中，此精靈正面的精靈被破壞的話，由放置到能量區改為放置到廢棄區。<br><br>「自」：我方攻擊階段開始時，宣言1個數字。公開對方牌組上1張卡牌，該卡牌與宣言數字是相同等級的精靈的話，抽1張牌。<br><br>「起」Coin*1：公開對方牌組上方張卡牌和手牌。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-D09-P15", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P15.jpg", //SRC
		"聖魔姫 オロチマル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のパワー12000以下のシグニ1体を対象とし、以下の2つから1つを選ぶ。<br>①手札を3枚捨ててもよい。そうした場合、それを手札に戻す。<br>②手札からカード2枚と[ガード]を持つシグニ1枚を捨ててもよい。そうした場合、それをゲームから除外する。<br><br>【出】[白][無]：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻力量12000以下的精靈作對象，下列2項中選擇1項。<br>①可以捨棄3張手牌。若如此做，將其返回手牌。<br>②可以從手牌捨棄2張卡牌和1張持有防禦標記的精靈。若如此做，將其從遊戲中除外。<br><br>「出」白1無1：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-P16", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P16.jpg", //SRC
		"幻水神 ホタルイカ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【ハーモニー】白のルリグ1体（このシグニが場に出たとき、あなたのアップ状態の白のルリグ1体をダウンしないかぎり、これをダウンする）<br><br>【自】：あなたのアタックフェイズ開始時、カードを1枚引く。<br><br>【自】（ターン1）：あなたが自分の効果によってカードを1枚以上捨てたとき、対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"〔和音〕1隻白色分身<br><br>「自」：我方攻擊階段開始時，抽1張牌。<br><br>「自」(回合1)：我方因自己效果捨棄1張以上的卡牌時，不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-D09-P17", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P17.jpg", //SRC
		"蒼天姫 ブリュンヒルデ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン2）：あなたの＜天使＞のシグニ1体が場に出たとき、カードを1枚引いてもよい。そうした場合、手札を1枚捨てる。<br><br>【自】（ターン1）：あなたの＜天使＞のシグニ1体がアタックしたとき、対戦相手の手札を1枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のシグニ1体を対象とし、手札を2枚捨ててもよい。そうした場合、それをバニッシュする。②対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"「自」(回合2)：我方1隻＜天使＞精靈出場時，可以抽1張牌。若如此做，捨棄1張手牌。<br><br>「自」(回合1)： 我方1隻＜天使＞精靈攻擊， 不查看對方手牌選擇1張，將其捨棄。<br><br>「生命爆發」：選擇1項。①對方1隻精靈作對象，可以捨棄2張手牌。若如此做，將其破壞。②不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-D09-P18", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P18.jpg", //SRC
		"羅菌姫 みこみこ//メモリア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋3000され、このシグニは「【自】：このシグニがバニッシュされたとき、対戦相手が手札を1枚捨てないかぎり、このシグニをエナゾーンからダウン状態で場に出す。」を得る。<br><br>【自】：あなたのアタックフェイズ開始時、対戦相手は手札を1枚捨てる。その後、対戦相手の手札が0枚の場合、このシグニは覚醒する。", //JP_TEXT
		"「常」：此精靈是覺醒狀態時，此精靈力量+3000，此精靈獲得「自：此精靈被破壞時，對方不捨棄1張手牌的話，此精靈從能量區以橫置狀態出場。」。<br><br>「自」：我方攻擊階段開始時，對方捨棄1張手牌。之後，對方手牌數是0張的話，此精靈會覺醒。"	//TW_TEXT
		],
	[
		"WXDi-D09-P19", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P19.jpg", //SRC
		"蒼天 アウドムラ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン2）：ドローフェイズ以外であなたがカードを1枚引いたとき、ターン終了時まで、あなたのすべてのシグニのパワーを＋1000する。<br><br>【自】：あなたのアタックフェイズ開始時、手札から＜天使＞のシグニを1枚捨ててもよい。そうした場合、カードを1枚引く。", //JP_TEXT
		"「自」(回合2)：我方在抽牌階段以外抽1張牌時，直到回合結束時為止，我方所有精靈力量+1000。<br><br>「自」我方攻擊階段開始時，可以從手牌捨棄1張＜天使＞精靈。若如此做，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-P20", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P20.jpg", //SRC
		"蒼将 ブルーノ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、「【自】：このシグニがアタックしたとき、カードを1枚引くか対戦相手は手札を1枚捨てる。」を得る。", //JP_TEXT
		"「常」：此精靈在中央精靈區時，獲得「自：此精靈攻擊時，抽1張牌或對方捨棄1張牌。」。"	//TW_TEXT
		],
	[
		"WXDi-D09-P21", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P21.jpg", //SRC
		"蒼天 ヘケト", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚見る。その中から好きな枚数のカードを好きな順番でデッキの一番下に置き、残りを好きな順番でデッキの一番上に戻す。", //JP_TEXT
		"「出」：查看我方牌組頂3張卡牌。其中任意張按任意順序放回牌組下方，剩下的按任意順序放回牌組上方。"	//TW_TEXT
		],
	[
		"WXDi-D09-P22", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P22.jpg", //SRC
		"蒼魔 フォカロル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ライフバースト】：対戦相手のシグニを2体まで対象とし、それらをダウンする。カードを1枚引く。", //JP_TEXT
		"「生命爆發」：對方最多2隻精靈作對象，將其橫置。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-P23", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P23.jpg", //SRC
		"蒼魔 マノミン", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、手札を1枚捨ててもよい。そうした場合、対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「自」：我方攻擊階段開始時，可以捨棄1張手牌。若如此做，對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-P24", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P24.jpg", //SRC
		"サーバント #", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-P25", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P25.jpg", //SRC
		"コール・アウト", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"このスペルを使用する際、使用コストとして追加でエクシード7を支払ってもよい。（あなたのルリグの下からカードを合計7枚ルリグトラッシュに置く）<br><br>対戦相手のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。追加でエクシード7を支払っていた場合、代わりにカードを1枚引き、ターン終了時まで、対戦相手のすべてのシグニは能力を失う。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"此魔法使用時，使用費用可以追加超越7。(我方分身下方卡牌合計7張放置到分身廢棄區)<br><br>對方1隻精靈作對象，直到回合結束時為止，使其失去能力。追加支付超越7的話，作為代替抽1張牌，直到回合結束時為止，對方所有精靈失去能力。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-D09-P26", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P26.jpg", //SRC
		"RECOVERY", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"ベット―◎（このスペルを使用する際、使用コストとして追加で◎を支払ってもよい）<br><br>カードを2枚引き、手札を2枚捨てる。あなたがベットしていた場合、代わりにカードを3枚引き、手札を2枚捨てる。<br><br>このターン、あなたはスペルを使用できない。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		"下注-Coin*1<br><br>抽2張牌，捨棄2張手牌。我方下注的話，作為代替抽3張牌，捨棄2張手牌。<br>本回合中，我方不能使用魔法。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，可以捨棄1張手牌。若如此做，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-D09-P27", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D09-P27.jpg", //SRC
		"RANDOM BAD", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"カードを1枚引き、対戦相手は手札を1枚捨てる。あなたの場に＜うちゅうのはじまり＞のルリグが3体いる場合、代わりにカードを1枚引き、対戦相手の手札を1枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。対戦相手は手札を1枚捨てる。", //JP_TEXT
		"抽1張牌，對方捨棄1張手牌。我方場上＜うちゅうのはじまり＞的分身有3隻的話，作為代替抽1張牌，不查看對方手牌選擇1張，將其捨棄。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-001.jpg", //SRC
		"世怜音女学院 After School", //NAME
		"LR", //RARE
		"ピース リレー", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このピースを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>あなたのデッキの上からカードを5枚見る。その中から＜バーチャル＞のシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。追加でエクシード4を支払っていた場合、【エナチャージ1】をする。", //JP_TEXT
		"使用此Piece時，使用費用可以追加支付超越4。（我方分身下方卡牌合計4張放置到分身廢棄區）<br><br>查看我方牌組上5張卡牌。將其中最多2張＜VTuber＞精靈公開並加入手牌，剩下的按任意順序放置到牌組下方。追加支付超越4的話，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-CP01-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-002.jpg", //SRC
		"世怜音女学院 Moon Light Night", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】黒のルリグを1体以上含む<br><br>【使用条件】このゲームの間にあなたがリレーピースを使用している<br>（両方の【使用条件】を満たさなければならない）<br><br>あなたのセンタールリグがレベル3以上の場合、対戦相手のデッキの上からカードを2434枚トラッシュに置く。", //JP_TEXT
		"「使用條件」「夢幻隊伍」含有黑色分身1隻以上<br><br>「使用條件」本局遊戲中我方有使用過中繼Piece<br>（必須同時滿足兩個「使用條件」）<br><br>我方中央分身是等級3以上的話，對方牌組上2434張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-CP01-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-003.jpg", //SRC
		"OBSYDIA SALVAGE", //NAME
		"LR", //RARE
		"ピース リレー", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このピースを使用する際、使用コストとして追加でエクシード4を支払ってもよい。（あなたのルリグの下からカードを合計4枚ルリグトラッシュに置く）<br><br>あなたのデッキの上からカードを2枚トラッシュに置く。その後、あなたのトラッシュから＜バーチャル＞のシグニを2枚まで対象とし、それらを手札に加える。追加でエクシード4を支払っていた場合、追加であなたのトラッシュから＜バーチャル＞のシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"使用此Piece時，使用費用可以追加支付超越4。（我方分身下方卡牌合計4張放置到分身廢棄區）<br><br>我方牌組上方2張卡牌放置到廢棄區。之後，我方廢棄區最多2張＜VTuber＞精靈作對象，將其加入手牌。追加支付超越4的話，追加從我方廢棄區1張＜VTuber＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-004.jpg", //SRC
		"LazuLight FLASH", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】【ドリームチーム】白のルリグを1体以上含む<br><br>【使用条件】このゲームの間にあなたがリレーピースを使用している<br><br>以下の3つから2つまで選ぶ。<br>①コラボライバー2人を呼ぶ。 ②対戦相手のシグニ1体を対象とし、それを手札に戻す。<br>③あなたのデッキの上からカードを3枚見る。その中からカードを好きな枚数手札に加え、残りをエナゾーンに置く。", //JP_TEXT
		"「使用條件」「夢幻隊伍」含有白色分身1隻以上<br><br>「使用條件」本局遊戲中我方有使用過中繼Piece<br><br>以下3項中選擇最多2項。<br>①呼喚2名合作者。<br>②對方1隻精靈作對象，將其返回手牌。<br>③查看我方牌組上方3張卡牌。將其中任意張卡牌加入手牌，剩下的放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-CP01-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-005.jpg", //SRC
		"【センター】リゼ レベル3'", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【常】：あなたが【ガード】する際、[ガード]を持つカードを1枚捨てる代わりに【無】を支払いコラボライバー1人とコラボしてもよい。<br><br>【出】：コラボライバー2人を呼ぶ。<br><br>【起】（ゲーム1）#ヘルエスタ国営放送[白(0)]：あなたのデッキの上からカードを5枚見る。その中からシグニを1枚まで場に出し、残りを好きな順番でデッキの一番下に置く。次の対戦相手のターンの間、あなたのシグニは【シャドウ（シグニ）】を得る。（この能力の使用後に場に出たシグニにも影響を与える）", //JP_TEXT
		"「常」：我方要【防禦】時，作為代替可以由捨棄1張持有防禦標記的卡牌改為支付無1並與1名合作者合作。<br><br>「出」：呼喚2名合作者。<br><br>「起」(遊戲1)#赫露艾斯塔國營放送白0：查看我方牌組上方5張卡牌。其中最多1張精靈出場，剩下的按任意順序放置到牌組下方。下一個對方回合中，我方的精靈獲得【暗影(精靈)】。（此能力使用後出場的精靈所會受到影響）"	//TW_TEXT
		],
	[
		"WXDi-CP01-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-006.jpg", //SRC
		"【センター】アンジュ レベル3'", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：コラボライバー2人を呼ぶ。<br><br>【起】【無】コラボライバー1人とコラボする：対戦相手のパワー12000以下のシグニ1体を対象とし、それを手札に戻す。<br><br>【起】（ゲーム1）#賢者の時間[白(0)]：ターン終了時まで、このルリグは「【自】（ターン1）：このルリグがアタックしたとき、対戦相手が【無】【無】【無】【無】を支払うか[ガード]を持つカードを1枚捨てないかぎり、対戦相手にダメージを与える。」を得る。", //JP_TEXT
		"「出」：呼喚2名合作者。<br><br>「起」無1與1名合作者合作：對方1隻力量12000以下的精靈作對象，將其返回手牌。<br><br>「起」(遊戲1)#賢者的時間白0：直到回合結束時為止，此分身獲得「自(回合1)：此分身攻擊時，對方不支付無4或捨棄1張持有防禦標記的卡牌的話，給予對方傷害。」。"	//TW_TEXT
		],
	[
		"WXDi-CP01-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-007.jpg", //SRC
		"【センター】とこ レベル3'", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：コラボライバー2人を呼ぶ。<br><br>【起】コラボライバー1人とコラボする：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。<br><br>【起】（ゲーム1）#いぬいどんどんすきになる[黒(0)]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－5000する。その後、対戦相手のレベル1のシグニ1体と対戦相手のパワー8000以下のシグニ1体を対象とし、それらをバニッシュする。", //JP_TEXT
		"「出」：呼喚2名合作者。<br><br>「起」與1名合作者合作：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。<br><br>「起」(遊戲1)#我越來越愛狗了黑0：對方1隻精靈作對象，直到回合結束時為止，將其力量-5000。之後，對方1隻等級1的精靈和對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-CP01-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-008.jpg", //SRC
		"【センター】月ノ美兎 レベル3", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：コラボライバー2人を呼ぶ。<br><br>【起】コラボライバー1人とコラボする：あなたのトラッシュから黒のシグニ1枚を対象とし、それを場に出す。<br><br>【起】（ゲーム1）#みとの生放送[黒(0)]：各プレイヤーは自分のデッキの上からカードを10枚トラッシュに置く。その後、あなたは自分のトラッシュからそれぞれ名前の異なるカード3枚を対象とし、それらをデッキに加えてシャッフルする。", //JP_TEXT
		"「出」：呼喚2名合作者。<br><br>「起」與1名合作者合作：我方廢棄區1張黑色精靈作對象，將其出場。<br><br>「起」(遊戲1)#美兔的生放送黑0：各玩家將自己牌組上方10張卡牌放置到廢棄區。之後，我方從自己廢棄區將3張卡名不同的卡牌作對象，將其加入牌組並洗切。"	//TW_TEXT
		],
	[
		"WXDi-CP01-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-009.jpg", //SRC
		"【センター】月ノ美兎 レベル0", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-010.jpg", //SRC
		"【センター】月ノ美兎 レベル1", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-011.jpg", //SRC
		"【センター】月ノ美兎 レベル2", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-012.jpg", //SRC
		"【アシスト】リゼ レベル1【剣】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」：對方1隻力量10000以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-013.jpg", //SRC
		"【アシスト】リゼ レベル2【氷壁】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニを2体まで対象とし、ターン終了時まで、それらは「【常】：アタックできない。」を得る。<br><br>【出】【無】【無】【無】：あなたのデッキの上からカードを5枚見る。その中からシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方最多2隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。<br><br>「出」無3：查看我方牌組上方5張卡牌。其中最多2張精靈公開並加入手牌，剩下的按任意順序牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-CP01-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-014.jpg", //SRC
		"【アシスト】アンジュ レベル1【愛】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを7枚見る。その中から白と黒のシグニをそれぞれ1枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組上方7張卡牌。其中白色和黑色精靈最多各1張公開並加入手牌，剩下的按任意順序放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-CP01-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-015.jpg", //SRC
		"【アシスト】アンジュ レベル2【錬金】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以上のシグニ1体を対象とし、それをトラッシュに置く。対戦相手は自分のデッキの上からそれよりレベルの低いシグニがめくれるまで公開し、そのシグニを場に出す。そのシグニの【出】能力は発動しない。この方法で公開されたカードをシャッフルしてデッキの一番下に置く。<br><br>【出】【白】【無】：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：對方1隻等級2以上的精靈作對象，將其放置到廢棄區。對方從自己牌組上方公開直到比該精靈等級低的精靈為止，將該精靈出場。該精靈的「出」能力不能發動。通過此方法公開的卡牌洗切後放置到牌組下方。<br><br>「出」白1無1：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-016.jpg", //SRC
		"【アシスト】とこ レベル1【棍】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。<br><br>【出】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。<br><br>「出」：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-017.jpg", //SRC
		"【アシスト】とこ レベル2【乱舞】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－5000する。<br><br>【出】【無】【無】【無】【無】【無】：このターン、対戦相手はパワーが10000以下のシグニでアタックできない。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-5000。<br><br>「出」無5：本回合中，對方力量為10000以下的精靈不能攻擊。"	//TW_TEXT
		],
	[
		"WXDi-CP01-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-018.jpg", //SRC
		"【アシスト】月ノ美兎 レベル1【斧】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻等級2以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-CP01-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-019.jpg", //SRC
		"【アシスト】月ノ美兎 レベル1【杵】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル1のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】：あなたのトラッシュから＜バーチャル＞のシグニ1枚を対象とし、それを場に出す。", //JP_TEXT
		"「出」：對方1隻等級1的精靈作對象，將其破壞。<br><br>「出」：我方廢棄區1張＜VTuber＞精靈作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-CP01-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-020.jpg", //SRC
		"【アシスト】月ノ美兎 レベル1【罪】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを2枚トラッシュに置く。その後、あなたのトラッシュから[ガード]を持たない、共通するクラスを持つシグニ2枚を対象とし、それらを手札に加える。", //JP_TEXT
		"「出」：我方牌組上方2張卡牌放置到廢棄區。之後，我方廢棄區2張不持有防禦標記且持有共通種族的精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-021.jpg", //SRC
		"【アシスト】月ノ美兎 レベル2【永遠】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュからすべてのカードをデッキに加えてシャッフルし、あなたのデッキの上からカードを16枚トラッシュに置く。<br><br>【出】：あなたのトラッシュからシグニを2枚まで対象とし、それらを場に出す。<br>（複数の【出】能力は好きな順番で発動できる）", //JP_TEXT
		"「出」：我方廢棄區所有卡牌加入牌組並洗切，我方牌組上方16張卡牌放置到廢棄區。<br><br>「出」：我方廢棄區最多2張精靈作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-CP01-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-022.jpg", //SRC
		"【アシスト】月ノ美兎 レベル2【殴打】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のレベル1のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】【黒】【無】【無】【無】【無】【無】：対戦相手のレベル3のシグニ1体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：對方1隻等級1的精靈作對象，將其破壞。<br><br>「出」黑1無5：對方1隻等級3的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-CP01-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-023.jpg", //SRC
		"【アシスト】月ノ美兎 レベル2【隠蔽】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：ターン終了時まで、このルリグは「【常】：あなたのライフクロス1枚が対戦相手のシグニのアタックによってクラッシュされる場合、代わりにあなたのデッキの上からカードを5枚トラッシュに置いてもよい。」を得る。（デッキが4枚以下の場合は置き換えられない）", //JP_TEXT
		"「出」：直到回合結束時為止，此分身獲得「常：我方1張生命護甲因對方精靈的攻擊被擊潰時，作為代替可以將我方牌組上方5張卡牌放置到廢棄區。」（牌為是4張以下的話不能進行代替）"	//TW_TEXT
		],
	[
		"WXDi-CP01-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-024.jpg", //SRC
		"【アシスト】月ノ美兎 レベル2【診断】", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"美兎", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：以下を3回行う。「あなたのトラッシュから対戦相手の場にあるシグニ1体と同じパワーの＜バーチャル＞のシグニを1枚まで対象とし、それをその対戦相手のシグニの正面のシグニゾーンに出す。それの【出】能力は発動しない。」", //JP_TEXT
		"「出」：以下執行3次。「我方廢棄區將最多1張與對方場上1隻精靈有相同力量的＜VTuber＞精靈作對象，將其出場到該對方精靈正面的精靈區。其「出」能力不能發動。」"	//TW_TEXT
		],
	[
		"WXDi-CP01-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-025.jpg", //SRC
		"コード2434 椎名唯華", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニがダウン状態であるかぎり、あなたの＜バーチャル＞のシグニのパワーを＋3000する。<br><br>【出】：あなたのデッキの一番上を見る。そのカードをデッキの一番下に置いてもよい。<br><br>【起】[ダウン]：あなたのデッキの一番上を公開する。そのカードが＜バーチャル＞のシグニの場合、カードを1枚引く。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「常」：此精靈是橫置狀態時，我方＜VTuber＞精靈的力量+3000。<br><br>「出」：查看我方牌組上方1張卡牌。可以將該卡牌放置到牌組下方。<br><br>「起」(橫置)：公開我方牌組上方1張卡牌。該卡牌是＜VTuber＞精靈的話，抽1張牌。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-CP01-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-026.jpg", //SRC
		"コード2434 天宮こころ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、あなたのシグニのうち最もパワーの低いシグニ1体を対象とし、次の対戦相手のターン終了時まで、それは【シャドウ（レベル2以下のシグニ）】を得る。あなたのライフクロスの枚数が対戦相手のライフクロスの枚数以下の場合、代わりにそれは【シャドウ】を得る。<br><br>【出】エナゾーンから＜バーチャル＞のシグニ2枚をトラッシュに置く：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のパワー10000以下のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「自」：我方回合結束時，我方1隻力量最低的精靈作對象，直到下一個對方回合結束時為止，使其獲得【暗影(等級2以下的精靈)】。我方生命護甲的張數是對方生命護甲的張數以下的話，作為代替獲得【暗影】。<br><br>「出」能量區2張＜VTuber＞精靈放置到廢棄區：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻力量10000以下的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-027.jpg", //SRC
		"コード2434 フレン・E・ルスタリオ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの《フレン・スラッシュ》の使用コストは《無×3》減る。<br><br>【自】（ターン1）：あなたの場に＜バーチャル＞のシグニが3体ある間、対戦相手のシグニ1体があなたの効果によって手札に戻ったとき、カードを1枚引くか【エナチャージ1】をする。<br><br>【自】：あなたのアタックフェイズ開始時、対戦相手のパワー10000以下のシグニ1体を対象とし、手札から[ガード]を持つシグニを1枚捨ててもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		"「常」：我方《フレン・スラッシュ》的使用費用減少無3。<br><br>「自」(回合1)：我方場上＜VTuber＞精靈有3隻，對方1隻精靈因我方效果返回手牌時，抽1張牌或【能量填充】。<br><br>「自」：我方攻擊階段開始時，對方1隻力量10000以下的精靈作對象，可以從手牌捨棄1張持有防禦標記的精靈。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-028.jpg", //SRC
		"コード2434 西園チグサ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル/世怜音女学院", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのルリグ1体がアタックしたとき、あなたの場に＜バーチャル＞のシグニが3体ある場合、【白】【白】を支払ってもよい。そうした場合、そのルリグをアップし、ターン終了時まで、そのルリグは能力を失う。<br><br>【出】【白】：あなたのデッキの上からカードを3枚見る。その中から＜バーチャル＞のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「自」(回合1)：我方1隻分身攻擊時，我方場上＜VTuber＞精靈有3隻的話，可以支付白2。若如此做，豎直該分身，直到回合結束時為止，該分身失去能力。<br><br>「出」白1：查看我方牌組上方3張卡牌。其中1張＜VTuber＞精靈公開並加入手牌，剩下的按任意順序放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-CP01-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-029.jpg", //SRC
		"コード2434 笹木咲", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたのターンの間、このシグニのパワーはあなたのトラッシュにある＜バーチャル＞のシグニ5枚につき＋1000される。<br><br>【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、【黒】を支払ってもよい。そうした場合、ターン終了時まで、それとこのシグニのパワーをそれぞれ－12000する。<br><br>【出】：あなたのデッキの一番上のカードをトラッシュに置く。そのカードが＜バーチャル＞のシグニでない場合、このシグニをダウンする。", //JP_TEXT
		"「常」：我方回合中，此精靈的力量為我方廢棄區＜VTuber＞精靈每有5張則+1000。<br><br>「自」：此精靈攻擊時，對方1隻精靈作對象，可以支付黑1。若如此做，直到回合結束時為止，使其與此精靈的力量-12000。<br><br>「出」：我方牌組上方1張卡牌放置到廢棄區。該卡牌不是＜VTuber＞精靈的話，橫置此精靈。"	//TW_TEXT
		],
	[
		"WXDi-CP01-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-030.jpg", //SRC
		"コード2434 鷹宮リオン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをあなたの場にある他の＜バーチャル＞のシグニ1体につき－3000する。<br><br>【出】【黒】：あなたのトラッシュからレベル1の＜バーチャル＞のシグニ1枚を対象とし、それを場に出す。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻精靈作對象，直到回合結束時為止，其力量為我方場上其他的＜VTuber＞精靈每有1隻則-3000。<br><br>「出」黑1：我方廢棄區1張等級1的＜VTuber＞精靈作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-CP01-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-031.jpg", //SRC
		"コード2434 周央サンゴ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル/世怜音女学院", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場とエナゾーンに＜世怜音女学院＞のシグニが合計5種類ある場合、次の対戦相手のターン終了時まで、このシグニの基本パワーは35000になる。<br><br>【出】【黒】：あなたのデッキの上からカードを3枚トラッシュに置く。その後、あなたのトラッシュから＜バーチャル＞のシグニ1枚を対象とし、それを場に出す。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上和能量區＜世怜音女学院＞精靈合計有5種類的話，直到下一個對方回合結束時為止，此精靈的基本力量為35000。<br><br>「出」黑1：我方牌組上方3張卡牌放置到廢棄區。之後我方廢棄區＜VTuber＞精靈1張作對象，將其出場。<br><br>「生命爆發」：我方廢棄區1張不持有防禦標記的精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-CP01-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-032.jpg", //SRC
		"コード2434 レイン・パターソン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、あなたの他のシグニ1体がバニッシュされる場合、代わりにこのシグニをバニッシュしてもよい。<br><br>【自】：あなたのアタックフェイズ開始時、あなたの場にあるすべてのシグニが＜バーチャル＞の場合、対戦相手のデッキの上からカードを3枚トラッシュに置く。この方法でトラッシュに置かれたシグニのレベルの合計が7の場合、対戦相手のデッキの上からカードを7枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「常」：對方回合中，我方其他1隻精靈被破壞的話，作為代替可以破壞此精靈。<br><br>「自」：我方攻擊階段開始時，我方場上所有精靈是＜VTuber＞的話，對方牌組上方3張卡牌放置到廢棄區。通過此方法放置到廢棄區的精靈等級合計是7的話，對方牌組上方7張卡牌放置到廢棄區。<br><br>「生命爆發」：對方1隻等級2以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-CP01-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-033.jpg", //SRC
		"コード2434 町田ちま", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの一番下のカードをトラッシュに置く。そのカードが＜バーチャル＞のシグニの場合、次の対戦相手のターン終了時まで、このシグニのパワーを＋5000する。そのカードが《コード2434 町田ちま》の場合、この効果を繰り返す。<br><br>【ライフバースト】：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：我方牌組下方1張卡牌放置到廢棄區。該卡牌是＜Vtuber＞的話，直到下一個對方回合結束時為止，此精靈的力量+5000。該卡牌是《コード2434 町田ちま》的話，重複此效果。<br><br>「生命爆發」：查看我方牌組上方3張卡牌。其中1張精靈公開並加入手牌或出場，剩下的按任意順序返回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-CP01-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-034.jpg", //SRC
		"コード2434 空星きらめ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、あなたの場に他の＜バーチャル＞のシグニがあるかぎり、このシグニのパワーは＋2000され、このシグニは【シャドウ（レベル1）】を得る。（このシグニは対戦相手のレベル1のルリグとレベル1のシグニによって対象にされない）", //JP_TEXT
		"「常」：對方回合中，我方場上有其他＜Vtuber＞精靈時，此精靈力量+2000，此精靈獲得【暗影(等級1)】。"	//TW_TEXT
		],
	[
		"WXDi-CP01-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-035.jpg", //SRC
		"コード2434 朝日南アカネ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル/世怜音女学院", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のターンの間、あなたの場に他の＜バーチャル＞のシグニがあるかぎり、あなたの＜バーチャル＞のシグニのパワーを＋2000する。<br><br>【常】：あなたの場に他の＜世怜音女学院＞のシグニがあるかぎり、このシグニのパワーは＋2000される。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「常」：對方回合中，我方場上有其他＜VTuber＞精靈時，我方＜VTuber＞精靈的力量+2000。<br><br>「常」：我方場上有其他＜世怜音女学院＞精靈時，此精靈力量+2000。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-036.jpg", //SRC
		"コード2434 エリーラ ペンドラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：以下の2つから1つを選ぶ。<br>①あなたの場に他の＜バーチャル＞のシグニがある場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。<br>②あなたのデッキの上からカードを2枚見る。その中からカード1枚をデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：以下2項中選擇1項。<br>①我方場上有其他＜VTuber＞精靈的話，對方1隻精靈作對象，直到回合結束時為止，使其失去能力。<br>②查看我方牌組上方2張卡牌。其中1張卡牌放回牌組上方，剩下的按任意順序放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-CP01-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-037.jpg", //SRC
		"コード2434 鈴鹿詩子", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場にレベル1の＜バーチャル＞のシグニがあるかぎり、このシグニのパワーは＋5000される。<br><br>【出】【無】：あなたのデッキの上からカードを5枚見る。その中からレベル1の＜バーチャル＞のシグニ1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：ターン終了時まで、対戦相手のすべてのシグニは能力を失う。カードを1枚引く。", //JP_TEXT
		"「常」：我方場上有等級1的＜VTuber＞精靈時，此精靈力量+5000。<br><br>「出」無1：查看我方牌組上方5張卡牌。其中1張等級1的＜VTuber＞精靈公開並加入手牌，剩下的按任意順序放置到牌組下方。<br><br>「生命爆發」：直到回合結束時為止，對方所有精靈失去能力，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-038.jpg", //SRC
		"コード2434 健屋花那", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたの他の＜バーチャル＞のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それは「【常】：対戦相手のターンの間、このシグニは対戦相手のレベル2以下の、ルリグとシグニの効果によってバニッシュされない。」を得る。（シグニとのバトルやパワーが0以下になった場合はバニッシュされる）<br><br>【ライフバースト】：カードを1枚引く。このターン、あなたの手札にあるシグニは[ガード]を得る。（[ガード]を持つシグニは【ガード】を得る）", //JP_TEXT
		"「出」：我方其他1隻＜VTuber＞精靈作對象，直到下一個對方回合結束時為止，使其獲得「常：對方回合中，此精靈不會被對方等級2以下的分身和精靈的效果破壞。」。<br><br>「生命爆發」：抽1張牌。本回合中，我方手牌的精靈獲得防禦標記。"	//TW_TEXT
		],
	[
		"WXDi-CP01-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-039.jpg", //SRC
		"コード2434 東堂コハク", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル/世怜音女学院", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】【白】：あなたの場に他の＜バーチャル＞のシグニがある場合、対戦相手のレベル1のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「出」白1：我方場上有其他＜VTuber＞精靈的話，對方1隻等級1的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-040.jpg", //SRC
		"コード2434 ぽむ れいんぱふ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのルリグ1体がアタックしたとき、アップ状態のこのシグニをダウンしてもよい。そうした場合、あなたのデッキの一番上を公開する。そのカードが＜バーチャル＞のシグニの場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方1隻分身攻擊時，可以將豎直狀態的此精靈橫置。若如此做，公開我方牌組上1張牌。該卡牌是＜VTuber＞精靈的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-041.jpg", //SRC
		"コード2434 フィナーナ 竜宮", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの場に他の＜バーチャル＞のシグニがあるかぎり、対戦相手は追加で【無】を支払わないかぎり【ガード】ができない。<br><br>【ライフバースト】：どちらか1つを選ぶ。①対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。②カードを1枚引く。", //JP_TEXT
		"「常」：我方場上有其他的＜VTuber＞精靈時，對方不追加支付無1的話不能【防禦】。<br><br>「生命爆發」：選擇1項。①對方1隻豎直狀態的精靈作對象，將其返回手牌。②抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-042.jpg", //SRC
		"コード2434 花畑チャイカ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの一番上のカードをトラッシュに置く。その後、あなたのトラッシュに＜バーチャル＞のシグニが10枚以上ある場合、【無】【無】を支払ってもよい。そうした場合、あなたのトラッシュから＜バーチャル＞のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"「出」：我方牌組上1張卡牌放置到廢棄區。之後，我方廢棄區的＜VTuber＞精靈有10張以上的話，可以支付無2。若如此做，我方廢棄區1張＜VTuber＞精靈作對象，將其加入手牌。<br><br>「生命爆發」：我方廢棄區1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-043.jpg", //SRC
		"コード2434 でびでび・でびる", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】【黒】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－2000する。あなたの場に《コード2434 鷹宮リオン》がある場合、代わりにターン終了時まで、それのパワーを－5000する。", //JP_TEXT
		"「出」黑1：對方1隻精靈作對象，直到回合結束時為止，將其力量-2000。我方場上有《コード2434 鷹宮リオン》的話，作為代替直到回合結束時為止，將其力量-5000。"	//TW_TEXT
		],
	[
		"WXDi-CP01-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-044.jpg", //SRC
		"コード2434 北小路ヒスイ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル/世怜音女学院", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、あなたの場に他の＜バーチャル＞のシグニがある場合、対戦相手のデッキの上からカードを2枚トラッシュに置く。<br><br>【出】【無】：あなたのトラッシュから＜世怜音女学院＞のシグニ1枚を対象とし、それをエナゾーンに置く。", //JP_TEXT
		"「自」：此精靈攻擊時，我方場上有其他＜VTuber＞精靈的話，對方牌組上2張卡牌放置到廢棄區。<br><br>「出」無1：我方廢棄區1張＜世怜音女学院＞精靈作對象，將其放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-CP01-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-045.jpg", //SRC
		"コード2434 天ヶ瀬むゆ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、このシグニがアップ状態の場合、あなたのデッキの上からカードを2枚トラッシュに置く。この方法で＜バーチャル＞のシグニ2枚がトラッシュに置かれた場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，此精靈是豎直狀態的話，我方牌組上2張卡牌放置到廢棄區。通過此方法放置了2張＜VTuber＞精靈到廢棄區的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-046.jpg", //SRC
		"コード2434 海妹四葉", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのトラッシュから＜バーチャル＞のシグニ1枚を対象とし、それをデッキの一番下に置く。そうした場合、次の対戦相手のターン終了時まで、このシグニのパワーを＋4000する。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		"「出」：我方廢棄區1張＜VTuber＞精靈作對象，將其放置到牌組下方。若如此做，直到下一個對方回合結束時為止，此精靈力量+4000。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。"	//TW_TEXT
		],
	[
		"WXDi-CP01-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-047.jpg", //SRC
		"コード2434 先斗寧", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】【無】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。あなたのトラッシュに＜バーチャル＞のシグニが10枚以上ある場合、代わりにターン終了時まで、それのパワーを－5000する。", //JP_TEXT
		"「出」無1：對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。我方廢棄區的＜VTuber＞精靈有10張以上的話，作為代替直到回合結束時為止，將其力量-5000。"	//TW_TEXT
		],
	[
		"WXDi-CP01-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-048.jpg", //SRC
		"コード2434 Ruco", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【常】：あなたの《ダークネス・イーター》の使用コストは《無×2》減る。<br><br>【自】（ターン1）：対戦相手のシグニ1体のパワーが0以下になったとき、あなたの場にある他の＜バーチャル＞のシグニ1体につき対戦相手のデッキの上からカードを1枚トラッシュに置く。", //JP_TEXT
		"「常」：我方使用《ダークネス・イーター》的費用減無2。<br><br>「自」(回合1)：對方1隻精靈力量成為0以下時，我方場上每有1隻其他的＜VTuber＞精靈則對方牌組上1張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-CP01-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-049.jpg", //SRC
		"コード2434 ペトラ グリン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを3枚トラッシュに置く。この方法で＜バーチャル＞のシグニが3枚トラッシュに置かれた場合、次の対戦相手のターン終了時まで、このシグニのパワーを＋4000する。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「出」：我方牌組上3張卡牌放置到廢棄區。通過此方法放置了3張＜VTuber＞精靈的話，直到下一個對方回合結束時為止，此精靈力量+4000。<br><br>「生命爆發」：對方1隻精靈作對象，可以捨棄1張手牌。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-CP01-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-050.jpg", //SRC
		"コード2434 ロゼミ ラブロック", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】（ターン1）：あなたのシグニ1体がトラッシュから場に出たとき、カードを1枚引き、手札を1枚捨てる。<br><br>【起】手札から＜バーチャル＞のシグニを2枚捨てる：このカードをトラッシュから場に出す。（この能力はこのカードがトラッシュにある場合にしか使用できない）<br><br>【ライフバースト】：あなたのトラッシュから＜バーチャル＞のシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「自」(回合1)：我方1隻精靈從廢棄區出場時，抽1張牌，捨棄1張手牌。<br><br>「起」從手牌捨棄2張＜VTuber＞精靈：此卡從廢棄區出場。（此能力只有此卡牌在廢棄區時才可使用）<br><br>「生命爆發」：我方廢棄區1張＜VTuber＞作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-CP01-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-051.jpg", //SRC
		"コード2434 セレン 龍月", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】【黒】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－8000する。あなたのトラッシュに＜バーチャル＞のシグニが10枚以上ある場合、代わりにターン終了時まで、それのパワーを－10000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」黑1：對方1隻精靈作對象，直到回合結束時為止，將其力量-8000。我方廢棄區＜VTuber＞ 的精靈有10張以上的話，作為代替直到回合結束為止，將其力量-10000。"	//TW_TEXT
		],
	[
		"WXDi-CP01-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-052.jpg", //SRC
		"スーパー・ヘルエスタセイバー", //NAME
		"Re", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白黒", //COLOR
		"", //LEVEL
		"《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に白と黒のルリグがいる<br><br>あなたのトラッシュから白と黒と無色のシグニをそれぞれ1枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「使用條件」我方場上有白色和黑色分身<br><br>我方廢棄區白色和黑色和無色的精靈最多各1張作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-053.jpg", //SRC
		"ホワイトヘブン", //NAME
		"Re", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×2《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に白のルリグが2体以上いる<br><br>対戦相手のシグニ1体を対象とし、それをトラッシュに置く。対戦相手のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"「使用條件」我方場上白色分身有2隻以上<br><br>對方1隻精靈作對象，將其放置到廢棄區。對方1隻精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-054.jpg", //SRC
		"DEATH DECK", //NAME
		"Re", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×2《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【使用条件】あなたの場に黒のルリグが2体以上いる<br><br>対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。その後、以下の2つからあなたのトラッシュにあるカード10枚につき1つを選ぶ。<br>①あなたのトラッシュからあなたのセンタールリグと共通する色を持つシグニを2枚まで対象とし、それらを手札に加える。<br>②対戦相手のデッキの上からカードを10枚トラッシュに置く。", //JP_TEXT
		"「使用條件」我方場上黑色分身有2隻以上<br><br>對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。之後，下列2項中在我方廢棄區的卡牌每有10張時選擇1項。<br>①我方廢棄區最多2張持有與我方中央分身相同顏色的精靈作對象，將其加入手牌。<br>②對方牌組上10張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-CP01-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-055.jpg", //SRC
		"ゼノ・クラスタ", //NAME
		"Re", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"（ピースはあなたの場にルリグが3体いると使用できる）<br><br>以下の2つから1つを選ぶ。<br>①カードを1枚引く。このターンに対戦相手の効果によってあなたの手札からカードが1枚以上トラッシュに移動していた場合、代わりにカードを3枚引く。<br>②【エナチャージ1】をする。このターンに対戦相手の効果によってあなたのエナゾーンからカードが1枚以上トラッシュに移動していた場合、代わりに【エナチャージ3】をする。", //JP_TEXT
		"(Piece在我方場上分身有3隻才可使用)<br><br>以下2項中選擇1項。<br>①抽1張牌。本回合因對方效果使我方1張以上的手牌移動到廢棄區的話，作為代替抽3張牌。<br>②【能量填充1】。本回合因對方效果使我方能量區1張以上的卡牌移動到廢棄區的話，作為代替【能量填充3】。"	//TW_TEXT
		],
	[
		"WXDi-CP01-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-056.jpg", //SRC
		"リゼ レベル0", //NAME
		"Re", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-057.jpg", //SRC
		"【センター】リゼ レベル1", //NAME
		"Re", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-058.jpg", //SRC
		"【センター】リゼ レベル2", //NAME
		"Re", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-059.jpg", //SRC
		"アンジュ レベル0", //NAME
		"Re", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-060.jpg", //SRC
		"【センター】アンジュ レベル1", //NAME
		"Re", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-061.jpg", //SRC
		"【センター】アンジュ レベル2", //NAME
		"Re", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-062.jpg", //SRC
		"とこ レベル0", //NAME
		"Re", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-063.jpg", //SRC
		"【センター】とこ レベル1", //NAME
		"Re", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-064.jpg", //SRC
		"【センター】とこ レベル2", //NAME
		"Re", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-CP01-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-065.jpg", //SRC
		"コード2434 アルス・アルマル", //NAME
		"Re", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【チーム】＜さんばか＞<br>【チーム自】：このシグニがアタックしたとき、このシグニのパワーが20000以上の場合、対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それを手札に戻す。<br><br>【起】（ターン1）[白]：あなたの手札から＜バーチャル＞のシグニを好きな枚数公開する。ターン終了時まで、このシグニのパワーをこの方法で公開したカード1枚につき＋1000する。", //JP_TEXT
		"「隊伍」＜さんばか＞<br>「隊伍自」：此精靈攻擊時，此精靈的力量是20000以上的話，對方1隻精靈作對象，可以捨棄1張手牌。若如此做，將其返回手牌。<br><br>「起」(回合1)白1：公開我方手牌中任意張＜VTuber＞精靈。直到回合結束時為止，通過此方法公開的卡牌每有1張，此精靈的力量+1000。"	//TW_TEXT
		],
	[
		"WXDi-CP01-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-066.jpg", //SRC
		"コード2434 本間ひまわり", //NAME
		"Re", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のメインフェイズ開始時、あなたのデッキの一番上を公開する。そのカードが＜バーチャル＞のシグニの場合、ターン終了時まで、このシグニは【シャドウ】を得る。（このシグニは対戦相手によって対象にされない）<br><br>【起】（ターン1）[白]：あなたのデッキの上からカードを3枚見る。その中からシグニ1枚を公開し手札に加え、1枚をデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「自」：對方主要階段開始時，公開我方牌組頂1張牌。該卡牌是＜VTuber＞精靈的話，直到回合結束時為止，此精靈獲得【暗影】。(此精靈不會成為對方的對象)<br><br>「起」(回合1)白1：查看我方牌組頂3張卡牌。將其中1張精靈公開並加入手牌，1張放回牌組上方，剩下的按任意順序放回牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-CP01-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-067.jpg", //SRC
		"コード2434 ニュイ・ソシエール", //NAME
		"Re", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたの他の＜バーチャル＞のシグニ1体が場に出たとき、あなたのデッキの一番上を見る。それをトラッシュに置いてもよい。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのトラッシュに＜バーチャル＞のシグニが20枚以上ある場合、対戦相手のシグニ1体を対象とし、[黒][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方其他1隻＜VTuber＞精靈出場時，查看我方牌組頂1張牌。可以將其放置到廢棄區。<br><br>「自」：我方攻擊階段開始時，我方廢棄區的＜VTuber＞精靈有20張以上的話，對方1隻精靈作對象，可以支付黑1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-CP01-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-068.jpg", //SRC
		"フレン・スラッシュ", //NAME
		"Re", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×2《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のシグニ1体を対象とし、それを手札に戻す。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"對方1隻精靈作對象，將其返回手牌。<br><br>「生命爆發」：對方1隻精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-069.jpg", //SRC
		"コード2434 ラトナ・プティ", //NAME
		"Re", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【起】[ダウン]：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－1000する。あなたの場に＜バーチャル＞のシグニが3体以上ある場合、代わりにターン終了時まで、それのパワーを－2000する。", //JP_TEXT
		"「起」(橫置)：對方1隻精靈作對象，直到回合結束時為止，將其力量-1000。我方場上的＜VTuber＞精靈有3隻以上的話，作為代替直到回合結束時為止，將其力量-2000。"	//TW_TEXT
		],
	[
		"WXDi-CP01-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-070.jpg", //SRC
		"コード2434 葉加瀬冬雪", //NAME
		"Re", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－1000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，將其力量-1000。"	//TW_TEXT
		],
	[
		"WXDi-CP01-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-071.jpg", //SRC
		"コード2434 郡道美玲", //NAME
		"Re", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"【出】[黒]：あなたのデッキの上からカードを3枚トラッシュに置く。その後、あなたのトラッシュからレベル1の＜バーチャル＞のシグニ1枚を対象とし、それを場に出す。", //JP_TEXT
		"「出」黑1：我方牌組頂3張卡牌放置到廢棄區。之後，我方廢棄區1張等級1的＜VTuber＞作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-CP01-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-072.jpg", //SRC
		"コード2434 夜見れな", //NAME
		"Re", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、ターン終了時まで、対戦相手のすべてのシグニのパワーをあなたの場にある＜バーチャル＞のシグニ1体につき－1000する。<br><br>【出】：あなたの場に《コード2434 葉加瀬冬雪》がある場合、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－4000する。<br><br>【ライフバースト】：あなたのトラッシュから＜バーチャル＞のシグニを2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"「自」：此精靈攻擊時，直到回合結束時為止，我方場上的＜VTuber＞精靈每有1隻，對方所有精靈的力量-1000。<br><br>「出」：我方場上有《代號2434 葉加瀬冬雪》時，對方1隻精靈作對象，直到回合結束時為止，將其力量-4000。<br><br>「生命爆發」：我方廢棄區最多2張＜VTuber＞精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-CP01-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-073.jpg", //SRC
		"ダークネス・イーター", //NAME
		"Re", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×2《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-CP01-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-074.jpg", //SRC
		"コード2434 星川サラ", //NAME
		"Re", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或黑）"	//TW_TEXT
		],
	[
		"WXDi-CP01-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-075.jpg", //SRC
		"コード2434 魔使マオ", //NAME
		"Re", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"（エナコストを支払う際、このカードは白か黒1つとして支払える）", //JP_TEXT
		"（支付能量費用時，此卡牌可以支付1個白或黑）"	//TW_TEXT
		],
	[
		"WXDi-CP01-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-076.jpg", //SRC
		"サーバント #", //NAME
		"Re", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-001.jpg", //SRC
		"黒点の記憶", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたのデッキの上からカードを3枚見る。その中から《ディソナアイコン》のカード1枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br>【シグニバリア】1つと【ルリグバリア】1つを得る。<br>（あなたが次にシグニからダメージを受ける場合、代わりに【シグニバリア】1つを消費し、そのダメージを受けない。あなたが次にルリグからダメージを受ける場合、代わりに【ルリグバリア】1つを消費し、そのダメージを受けない）", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>查看我方牌組上3張卡牌。其中1張Dissona的卡牌公開並加入手牌，剩下的按任意順序放回牌組下方。<br>獲得1個【精靈屏障】和1個【分身屏障】。<br>（我方下一次因精靈受到傷害的話，作為代替消耗1個【精靈屏障】，不會受到該傷害。我方下一次因分身受到傷害的話，作為代替消耗1個【分身屏障】，不會受到該傷害。）"	//TW_TEXT
		],
	[
		"WXDi-P12-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-002.jpg", //SRC
		"アンバランス・ダンス", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたの場に《ディソナアイコン》のシグニが3体ある場合、対戦相手のすべてのシグニをバニッシュし、その後、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカードを2枚まで対象とし、それらをトラッシュに置く。", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方場上有3隻Dissona精靈的話，破壞對方所有精靈，之後，對方能量區最多2張與對方中央分身不持有共通顏色的卡牌作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P12-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-003.jpg", //SRC
		"LANCER IN THE DARK", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【使用条件】【ドリームチーム】合計3種類以上の色を持つ（あなたの場にいるルリグ3体がこの条件を満たす）<br><br>あなたのトラッシュにあるすべてのカードをデッキに加えてシャッフルし、【エナチャージ2】をする。その後、あなたのエナゾーンから《ディソナアイコン》のシグニを2枚まで対象とし、それらを場に出す。<br>その後、あなたの《ディソナアイコン》のシグニ1体を対象とし、ターン終了時まで、それは【Sランサー】を得る。<br>（【Sランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスがある場合はそれを1枚クラッシュする。無い場合は対戦相手にダメージを与える）", //JP_TEXT
		"「使用條件」「夢幻隊伍」合計持有3種類以上的顏色(我方場上3隻分身滿足此條件)<br><br>我方廢棄區所有卡牌加入牌組並洗切，【能量填充2】。<br>之後，我方能量區最多2張Dissona精靈作對象，將其出場。<br>之後，我方1隻Dissona精靈作對象，直到回合結束時為止，使其獲得【S槍兵】。<br>（持有【S槍兵】的精靈因戰鬥破壞精靈時，對方有生命護甲時會擊潰1張。無的話則給予對方傷害）"	//TW_TEXT
		],
	[
		"WXDi-P12-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-004.jpg", //SRC
		"ディソナンス", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"あなたのトラッシュから《ディソナアイコン》のシグニを2枚まで対象とし、それらを手札に加える。", //JP_TEXT
		"我方廢棄區最多2張Dissona精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-005.jpg", //SRC
		"UNKNOWN MEMORY", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"以下の3つから1つを選ぶ。あなたの場にそれぞれ共通する色を持つルリグが2体以上いる場合、代わりに2つまで選ぶ。<br>①対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。<br>②カードを2枚引く。<br>③【エナチャージ2】", //JP_TEXT
		"以下3項中選擇1項。我方場上持有共通顏色的分身有2隻以上的話，作為代替選擇最多2項。<br>①對方1隻等級2以下的精靈作對象，將其破壞。<br>②抽2張牌。<br>③【能量填充2】"	//TW_TEXT
		],
	[
		"WXDi-P12-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-006.jpg", //SRC
		"未開の巫女 ユキ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に《ディソナアイコン》のシグニが2体以上ある場合、以下の2つから1つを選ぶ。①対戦相手のレベル1のシグニ1体を対象とし、それを手札に戻す。②対戦相手のシグニ1体を対象とし、このターン終了時、それをデッキの一番下に置く。<br><br>【出】：あなたのデッキの上からカードを5枚見る。その中からカードを1枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【起】エクシード4：【シグニバリア】1つを得る。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上Dissona的精靈有2隻以上的話，以下2項中選擇1項。①對方1隻等級1的精靈作對象，將其返回手牌。②對方1隻精靈作對象，本回合結束時，將其放置到牌組下方。<br><br>「出」：查看我方牌組上5張卡牌。其中最多1張卡牌加入手牌，剩下的按任意順序放回牌組下方。<br><br>「起」超越4：獲得1個【精靈屏障】。"	//TW_TEXT
		],
	[
		"WXDi-P12-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-007.jpg", //SRC
		"炎妖舞 花代・惨", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるすべてのシグニが《ディソナアイコン》の場合、あなたのシグニ1体を対象とし、《赤》《無》を支払ってもよい。そうした場合、ターン終了時まで、それは【アサシン】か【ダブルクラッシュ】を得る。<br><br>【起】（ターン1）手札を1枚捨てる：カードを1枚引くか【エナチャージ1】をする。<br><br>【起】エクシード4：対戦相手のライフクロス1枚をクラッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上所有精靈都是Dissona的話，我方1隻精靈作對象，可以支付紅1無1。若如此做，直到回合結束時為止，使其獲得【暗殺】或【雙重擊潰】。<br><br>「起」(回合1)捨棄1張手牌：抽1張牌或【能量填充1】。<br><br>「起」超越4：擊潰對方1張生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P12-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-008.jpg", //SRC
		"みこみこ☆さんさんまぜまぜ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に《ディソナアイコン》のシグニが2体以上ある場合、以下の2つから1つを選ぶ。①対戦相手は手札を1枚捨てる。②対戦相手は《無》を支払ってもよい。そうしなかった場合、対戦相手は次の自分のドローフェイズの間にカードを合計1枚までしか引けない。<br><br>【出】：対戦相手が手札を2枚捨てないかぎり、カードを2枚引く。<br><br>【起】エクシード4：対戦相手のシグニ1体を対象とし、対戦相手が《無》《無》《無》《無》を支払わないかぎり、それをデッキの一番下に置く。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上Dissona的精靈有2隻以上的話，以下2項中選擇1項。①對方捨棄1張手牌。②對方可以支付無1。若不如此做的話，對方下一個自己的抽牌階段中合計最多只能抽1張牌。<br><br>「出」：對方不捨棄2張手牌的話，抽2張牌。<br><br>「起」超越4：對方1隻精靈作對象，對方不支付無4的話，將其放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P12-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-009.jpg", //SRC
		"メル＝椿姫", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×2", //COST
		"6", //LIMIT
		"", //POWER
		"2", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるすべてのシグニが《ディソナアイコン》の場合、シグニ1体を対象とし、ターン終了時まで、それのパワーを＋5000する。《緑》《無》を支払ってもよい。そうした場合、ターン終了時まで、それは【Sランサー】を得る。<br><br>【起】《緑》《無》《無》エクシード4：あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上所有精靈都是Dissona的話，1隻精靈作對象，直到回合結束時為止，使其力量+5000。可以支付綠1無1。若如此做，直到回合結束時為止，使其獲得【S槍兵】。<br><br>「起」綠1無2超越4：洗切我方牌組並將上方1張卡牌加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P12-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-010.jpg", //SRC
		"残黒の巫女 タマヨリヒメ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×2", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：あなたの、場とエナゾーンにある《ディソナアイコン》のシグニは追加で黒を得る。<br><br>【起】（ターン1）《黒》《黒》：あなたの場に《ディソナアイコン》のシグニが2体以上ある場合、対戦相手のシグニ1体を対象とし、それをトラッシュに置く。<br><br>【起】エクシード4：あなたのトラッシュから《ディソナアイコン》のシグニを3枚まで対象とし、それらを場に出す。", //JP_TEXT
		"「常」：我方場上和能量區的Dissona精靈追加獲得黑色。<br><br>「起」(回合1)黑2：我方場上Dissona的精靈有2隻以上的話，對方1隻精靈作對象，將其放置到廢棄區。<br><br>「起」超越4：我方廢棄區最多3張Dissona的精靈作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-P12-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-011.jpg", //SRC
		"百禍の巫女 ユキ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-012.jpg", //SRC
		"清濁の巫女 ユキ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-013.jpg", //SRC
		"真贋の巫女 ユキ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-014.jpg", //SRC
		"花代・黎", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-015.jpg", //SRC
		"妖 花代・異地", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-016.jpg", //SRC
		"妖禍 花代・似", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-017.jpg", //SRC
		"みこみこ☆ぜろぜろ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-018.jpg", //SRC
		"みこみこ☆いちまぜ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-019.jpg", //SRC
		"みこみこ☆にまぜまぜ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-020.jpg", //SRC
		"メル＝桜花", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-021.jpg", //SRC
		"メル＝照葉", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-022.jpg", //SRC
		"メル＝雪国", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-023.jpg", //SRC
		"不和の巫女 タマヨリヒメ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-024.jpg", //SRC
		"不等の巫女 タマヨリヒメ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×0", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-025.jpg", //SRC
		"不興の巫女 タマヨリヒメ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×1", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"ディソナ", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-026.jpg", //SRC
		"レイラ＝ニュートラル", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"レイラ", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×0", //COST
		"0", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-027.jpg", //SRC
		"レイラ・ザ・バニッシュ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"レイラ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻力量10000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-028.jpg", //SRC
		"レイラ・ザ・ファング", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"レイラ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】手札を3枚捨てる：対戦相手のライフクロス1枚をクラッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」捨棄3張手牌：擊潰對方1張生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P12-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-029.jpg", //SRC
		"レイラ・ザ・轟健", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"レイラ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのシグニ1体を対象とし、ターン終了時まで、それは【アサシン】と【ダブルクラッシュ】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える。【ダブルクラッシュ】を持つシグニがアタックによってダメージを与えた場合ライフクロスを1枚ではなく2枚クラッシュする）", //JP_TEXT
		"「出」：我方1隻精靈作對象，直到回合結束時為止，使其獲得【暗殺】和【雙重擊潰】。"	//TW_TEXT
		],
	[
		"WXDi-P12-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-030.jpg", //SRC
		"レイラ・ザ・クラック", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"レイラ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：ターン終了時まで、このルリグは「【自】（ターン1）：対戦相手のシグニによってあなたのライフクロス1枚がクラッシュされたとき、対戦相手のライフクロス1枚をクラッシュする。」を得る。<br><br>【出】《赤》《無》：ターン終了時まで、このルリグは「【自】（ターン1）：対戦相手のルリグによってあなたのライフクロス1枚がクラッシュされたとき、対戦相手のライフクロス1枚をクラッシュする。」を得る。", //JP_TEXT
		"「出」：直到回合結束時為止，此分身獲得「自(回合1)：對方精靈擊潰我方1張生命護甲時，擊潰對方1張生命護甲。」。<br><br>「出」紅1無1：直到回合結束時為止，此分身獲得「自(回合1)：對方分身擊潰我方1張生命護甲時，擊潰對方1張生命護甲。」。"	//TW_TEXT
		],
	[
		"WXDi-P12-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-031.jpg", //SRC
		"レイラ・ザ・乱舞", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"レイラ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×2", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをバニッシュする。<br><br>【出】手札とエナゾーンにあるすべてのカードをトラッシュに置く：この方法でカードが6枚以上トラッシュに置かれた場合、対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其破壞。<br><br>「出」手牌和能量區所有卡牌放置到廢棄區：通過此方法放置到廢棄區的卡牌有6張以上的話，對方1隻精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-032.jpg", //SRC
		"エルドラ×マーク0", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-033.jpg", //SRC
		"エルドラ！エクスクラメーション！", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：カードを2枚引く。", //JP_TEXT
		"「出」：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-034.jpg", //SRC
		"エルドラ！サーチャー！", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：カードを1枚引く。<br><br>【出】：あなたのライフクロスの一番上を見る。そのカードをデッキに加えてシャッフルしてもよい。そうした場合、あなたのデッキの一番上のカードをライフクロスに加える。", //JP_TEXT
		"「出」：抽1張牌。<br><br>「出」：查看我方生命護甲上方1張卡牌。可以將該卡牌加入牌組並洗切。若如此做，我方牌組上方1張卡牌加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P12-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-035.jpg", //SRC
		"エルドラ！バースト・ラッシュ！", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：このターン、次にあなたのライフバーストが発動する場合、代わりにそのライフバーストは二度発動する。<br><br>【出】ライフクロス1枚をクラッシュする：あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：本回合中，下一次我方生命爆發發動的話，作為代替該生命爆發發動2次。<br><br>「出」擊潰1張生命護甲：洗切我方牌組並將上方1張卡牌加入生命護甲。"	//TW_TEXT
		],
	[
		"WXDi-P12-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-036.jpg", //SRC
		"エルドラ！オンステージ！", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：このターン、1枚目と2枚目にあなたのチェックゾーンに置かれたライフクロスは【ライフバースト】「どちらか1つを選ぶ。①対戦相手のシグニ1体を対象とし、それをダウンする。②カードを2枚引く。」を得る。", //JP_TEXT
		"「出」：本回合中，我方第1張和第2張放置到檢查區的生命護甲獲得生命爆發標記「選擇1項。①對方1隻精靈作對象，將其橫置。②抽2張牌。」。"	//TW_TEXT
		],
	[
		"WXDi-P12-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-037.jpg", //SRC
		"エルドラ！ストーン！", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×3", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、それをデッキの一番下に置く。<br><br>【出】《青》《無》：カードを2枚引く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，將其放置到牌組下方。<br><br>「出」藍1無1：抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-038.jpg", //SRC
		"アイヤイ★ベット", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アイヤイ", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P12-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-039.jpg", //SRC
		"アイヤイ ミラクルローリング", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アイヤイ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのデッキの上からカードを5枚見る。その中からカード1枚と、そのカードと共通する色を持たないカードを1枚までエナゾーンに置き、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		"「出」：查看我方牌組上方5張卡牌。其中1張卡牌和最多1張與該卡牌不持有共通顏色的卡牌放置到能量區，剩下的按任意順序放置到牌組下方。"	//TW_TEXT
		],
	[
		"WXDi-P12-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-040.jpg", //SRC
		"アイヤイ キネティックトランプ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アイヤイ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×0", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：【エナチャージ1】<br><br>【出】：あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加える。", //JP_TEXT
		"「出」：【能量填充1】<br><br>「出」：我方能量區最多1張精靈作對象，將其加入手牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-041.jpg", //SRC
		"アイヤイ ニンニン", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アイヤイ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：ターン終了時まで、このルリグは「【自】（ターン1）：あなたのシグニ1体がバトルによってシグニ1体をバニッシュしたとき、あなたのエナゾーンからシグニを1枚まで対象とし、それとそのあなたのシグニの場所を入れ替える。それの【出】能力は発動しない。」を得る。", //JP_TEXT
		"「出」：直到回合結束時為止，此分身獲得「自(回合1)：我方1隻精靈因戰鬥破壞1隻精靈時，我方能量區最多1張精靈作對象，將其與該我方精靈的位置交換。其出能力不能發動。」。"	//TW_TEXT
		],
	[
		"WXDi-P12-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-042.jpg", //SRC
		"アイヤイ ハイドアンドアタック", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アイヤイ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×0", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：あなたのエナゾーンからシグニ1枚を対象とし、それを場に出す。それの【出】能力は発動しない。<br><br>【出】手札を2枚捨てる：あなたのエナゾーンからシグニ1枚を対象とし、それを場に出す。それの【出】能力は発動しない。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		"「出」：我方能量區1張精靈作對象，將其出場。其出能力不能發動。<br><br>「出」捨棄2張手牌：我方能量區1張精靈作對象，將其出場。其出能力不能發動。"	//TW_TEXT
		],
	[
		"WXDi-P12-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-043.jpg", //SRC
		"アイヤイ ブレイキング", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"アイヤイ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×1", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】《緑》《無》《無》：対戦相手のシグニ1体と対戦相手のエナゾーンからシグニ1枚を対象とし、それらの場所を入れ替える。この方法で場に出たシグニの【出】能力は発動しない。", //JP_TEXT
		"「出」：本回合中，下一次我方受到傷害時，作為代替不會受到傷害。<br><br>「出」綠1無2：對方1隻精靈與對方能量區1張精靈作對象，將其的位置交換。通過此方法出場的精靈的出能力不發動。"	//TW_TEXT
		],
	[
		"WXDi-P12-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-044.jpg", //SRC
		"幻怪姫 ドーナ//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：対戦相手のターンの間、あなたの他の《ディソナアイコン》のシグニのパワーを＋3000する。<br><br>【自】：あなたのルリグ1体がアタックしたとき、あなたのアップ状態の《ディソナアイコン》のシグニ2体をダウンし《白》《無》を支払ってもよい。そうした場合、そのルリグをアップし、ターン終了時まで、そのルリグは能力を失う。", //JP_TEXT
		"「常」：對方回合中，我方其他的Dissona精靈力量+3000。<br><br>「自」：我方1隻分身攻擊時，可以將我方2隻豎直狀態的Dissona精靈橫置且支付白1無1。若如此做，豎直該分身，直到回合結束時為止，該分身失去能力。"	//TW_TEXT
		],
	[
		"WXDi-P12-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-045.jpg", //SRC
		"コードラビリンス コネクト//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：各アタックフェイズ開始時、対戦相手のシグニ1体を対象とし、対戦相手が《無》を支払わないかぎり、ターン終了時まで、それは能力を失う。<br><br>【自】：あなたのターン終了時、あなたの場に《未開の巫女 ユキ》がいる場合、対戦相手のシグニ1体を対象とし、それをデッキの一番下に置く。<br><br>【出】：あなたの他の《ディソナアイコン》のシグニ1体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋3000する。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをトラッシュに置く。", //JP_TEXT
		"「自」：各攻擊階段開始時，對方1隻精靈作對象，對方不支付無1的話，直到回合結束時為止，使其失去能力。<br><br>「自」：我方回合結束時，我方場上有《未開の巫女　ユキ》的話，對方1隻精靈作對象，將其放置到牌組下方。<br><br>「出」：我方其他1隻Dissona精靈作對象，直到下一個對方回結束時為止，將其力量+3000。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P12-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-046.jpg", //SRC
		"幻竜姫 遊月//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】（ターン1）：このシグニが対戦相手のライフクロス1枚をクラッシュしたとき、対戦相手のパワー12000以下のシグニ1体を対象とし、あなたのエナゾーンから《ディソナアイコン》のカード1枚をトラッシュに置いてもよい。そうした場合、それをバニッシュする。<br><br>【自】：あなたのメインフェイズ以外でこのシグニがバニッシュされたとき、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。", //JP_TEXT
		"「自」(回合1)：此精靈擊潰對方1張生命護甲時，對方1隻力量12000以下的精靈作對象，可以將我方能量區1張Dissona卡牌放置到廢棄區。若如此做，將其破壞。<br><br>「自」：此精靈在我方主要階段以外被破壞時，對方選擇自己能量區1張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P12-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-047.jpg", //SRC
		"羅輝石 シークラ//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるすべてのシグニが《ディソナアイコン》で対戦相手のエナゾーンにカードが2枚以上ある場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br><br>【自】：このシグニが対戦相手のライフクロス1枚をクラッシュしたとき、あなたの場に《炎妖舞 花代・惨》がいる場合、対戦相手が《無》を支払わないかぎり、そのカードのライフバーストは発動しない。<br><br>【ライフバースト】：カードを2枚引き【エナチャージ1】をする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上所有精靈都是Dissona且對方能量區的卡牌有2張以上的話，對方選擇自己能量區1張卡牌放置到廢棄區。<br><br>「自」：此精靈擊潰對方1張生命護甲時，我方場上有《炎妖舞　花代・惨》的話，對方不支付無1時，該卡牌的生命爆發不發動。<br><br>「生命爆發」：抽2張牌且【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P12-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-048.jpg", //SRC
		"大幻蟲 アロス・ピルルク//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：凶蟲", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】（ターン1）：あなたのターンの間、あなたが《ディソナアイコン》のカードを1枚捨てたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。<br><br>【自】：このシグニがアタックしたとき、あなたのエナゾーンから《ディソナアイコン》のカード1枚をトラッシュに置いてもよい。そうした場合、対戦相手の手札を1枚見ないで選び、捨てさせる。", //JP_TEXT
		"「自」(回合1)：我方回合中，我方捨棄1張Dissona卡牌時，對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。<br><br>「自」：此精靈攻擊時，可以將我方能量區1張Dissona卡牌放置到廢棄區。若如此做，不查看對方手牌選擇1張，將其捨棄。"	//TW_TEXT
		],
	[
		"WXDi-P12-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-049.jpg", //SRC
		"羅星姫 タマゴ//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：このシグニがアタックしたとき、手札を1枚捨ててもよい。そうした場合、カードを2枚引く。<br><br>【起】アップ状態のルリグ2体をダウンする：カードを1枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，可以捨棄1張手牌。若如此做，抽2張牌。<br><br>「起」橫置2隻豎直狀態的分身：抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-050.jpg", //SRC
		"羅菌姫 ミコオシ//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場に《みこみこ☆さんさんまぜまぜ》がいる場合、対戦相手は【みこみこ親衛隊】1つを得る。<br><br>【自】：このシグニがアタックしたとき、以下の2つから1つを選ぶ。<br>①対戦相手は手札を1枚捨てる。<br>②あなたの手札が対戦相手より3枚以上多い場合、次の対戦相手のターン終了時まで、このシグニは【シャドウ（シグニ）】を得る。<br><br>【ライフバースト】：対戦相手のルリグ1体を対象とし、それを凍結する。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上有《みこみこ☆さんさんまぜまぜ》的話，對方獲得1個【みこみこ親衛隊】。<br><br>「自」：此精靈攻擊時，以下2項中選擇1項。<br>①對方捨棄1張手牌。<br>②我方手牌比對方多3張以上的話，直到下一個對方回合結束時為止，此精靈獲得【暗影(精靈)】。<br><br>「生命爆發」：對方1隻分身作對象，將其凍結。"	//TW_TEXT
		],
	[
		"WXDi-P12-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-051.jpg", //SRC
		"翠魔姫 バン//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：あなたのエナゾーンに《ディソナアイコン》のカードが3枚以上あるかぎり、このシグニのパワーは＋3000され、このシグニは【シャドウ（レベル3以上のシグニ）】を得る。<br><br>【起】（ターン1）《緑》《無》：対戦相手は自分のパワー10000以上のシグニ1体を選びエナゾーンに置く。", //JP_TEXT
		"「常」：我方能量區的Dissona卡牌有3張以上時，此精靈力量+3000，此精靈獲得【暗影(等級3以上的精靈)】。<br><br>「起」(回合1)綠1無1：對方選擇自己1隻力量10000以上的精靈放置到能量區。"	//TW_TEXT
		],
	[
		"WXDi-P12-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-052.jpg", //SRC
		"コードオーダー ズットモ//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：あなたの場に《メル＝椿姫》がいるかぎり、このシグニのパワーはこのシグニの下にあるカード1枚につき＋5000される。<br><br>【自】：あなたのアタックフェイズ開始時、このシグニの下から《ディソナアイコン》のカードを1枚までエナゾーンに置く。<br><br>【出】：あなたのデッキの上からカードを2枚このシグニの下に置く。（表向きで置く）<br><br>【起】《コインアイコン》《コインアイコン》《コインアイコン》《コインアイコン》《コインアイコン》：ターン終了時まで、このシグニは【ランサー】を得る。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「常」：我方場上有《メル＝椿姫》的話，此精靈的力量為此精靈下方卡牌每有1張+5000。<br><br>「自」：我方攻擊階段開始時，此精靈下方最多1張Dissona精靈放置到能量區。<br><br>「出」：我方牌組上方2張卡牌放置到此精靈下方。(正面朝上)<br><br>「起」Coin*5：直到回合結束時為止，此精靈獲得【槍兵】。<br><br>「生命爆發」：對方1隻力量7000以上的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-053.jpg", //SRC
		"コードアンシエンツ ウムル//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：このシグニがアタックしたとき、あなたのトラッシュに《ディソナアイコン》のカードが10枚以上ある場合、対戦相手のシグニ1体を対象とし、《黒》を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－10000する。<br><br>【起】手札から《ディソナアイコン》のカードを2枚捨てる：このカードをトラッシュから場に出す。（この能力はこのカードがトラッシュにある場合にしか使用できない）", //JP_TEXT
		"「自」：此精靈攻擊時，我方廢棄區Dissona卡牌有10張以上的話，對方1隻精靈作對象，可以支付黑1。若如此做，直到回合結束時為止，將其力量-10000。<br><br>「起」捨棄手牌2張Dissona卡牌：此卡牌從廢棄區出場。（此能力只能在此卡牌在廢棄區時使用）"	//TW_TEXT
		],
	[
		"WXDi-P12-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-054.jpg", //SRC
		"大装 デストロ//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをあなたの場にある黒のシグニ1体につき－1000する。<br><br>【出】：あなたの場に《残黒の巫女 タマヨリヒメ》がいる場合、対戦相手のシグニ1体を対象とし、このターン、それがバニッシュされる場合、エナゾーンに置かれる代わりにトラッシュに置かれる。<br><br>【ライフバースト】：対戦相手のレベル2以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻精靈作對象，直到回合結束時為止，其力量為我方場上黑色精靈每有1隻-1000。<br><br>「出」：我方場上有《残黒の巫女　タマヨリヒメ》的話，對方1隻精靈作對象，本回合中，其被破壞的話，不放置到能量區而改為放置到廢棄區。<br><br>「生命爆發」：對方1隻等級2以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-055.jpg", //SRC
		"透魔姫 ウリス//ディソナ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"無", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【ハーモニー】ルリグ2体（このシグニが場に出たとき、あなたのアップ状態のルリグ2体をダウンしないかぎり、これをダウンする）<br><br>【自】：あなたのアタックフェイズ開始時、このシグニがアップ状態の場合、対戦相手のシグニ1体を対象とし、あなたの手札を1枚選んでもよい。そうした場合、対戦相手は《白2》《赤2》《青2》《緑2》《黒2》《無2》から1つを宣言する。あなたはその選んだカードを捨て、そのカードが宣言されたアイコンを持たない場合、それをバニッシュする。", //JP_TEXT
		"〔和音〕2隻分身（此精靈出場時，不橫置我方2隻豎直狀態的分身的話，將其橫置）<br><br>「自」：我方攻擊階段開始時，此精靈是豎直狀態的話，對方1隻精靈作對象，我方可以選擇1張手牌。若如此做，對方從白紅藍綠黑無的標記中宣言1個。我方將選擇的卡牌捨棄，該卡牌不持有宣言的標記的話，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-056.jpg", //SRC
		"聖天 タウィル//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：このシグニがアタックしたとき、あなたのエナゾーンとトラッシュに《ディソナアイコン》のカードが合計7枚以上ある場合、カードを1枚引く。", //JP_TEXT
		"「自」：此精靈攻擊時，我方能量區和廢棄區Dissona卡牌合計有7張以上的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-057.jpg", //SRC
		"羅星 ノヴァ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのターン終了時、あなたのデッキの一番上を公開する。そのカードが《ディソナアイコン》の場合、次の対戦相手のターン終了時まで、このシグニのパワーを＋5000する。", //JP_TEXT
		"「自」：我方回合結束時，公開我方牌上方1張卡牌。該卡牌是Dissona的話，直到下一個對方回合結束時為止，此精靈力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-P12-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-058.jpg", //SRC
		"コードメイズ ペイラビ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【出】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは能力を失う。<br><br>【ライフバースト】：どちらか1つを選ぶ。①ターン終了時まで、対戦相手のすべてのシグニは能力を失う。②カードを2枚引く。", //JP_TEXT
		"「出」：對方1隻精靈作對象，直到回合結束時為止，使其失去能力。<br><br>「生命爆發」：選擇1項。①直到回合結束時為止，對方所有精靈失去能力。②抽2張牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-059.jpg", //SRC
		"中罠 ゆかゆか//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【起】《白》《白》[ダウン]：あなたのトラッシュから[ガード]を持つシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを1枚引く。", //JP_TEXT
		"「起」白2(橫置)：我方廢棄區1張持有防禦標記的精靈作對象，將其加入手牌。<br><br>「生命爆發」：對方1隻精靈作對象，直到回合結束時為止，使其獲得「常：不能攻擊。」。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-060.jpg", //SRC
		"中装 ギロチン//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：対戦相手のターンの間、あなたの他の《ディソナアイコン》のシグニのパワーを＋2000する。<br><br>【出】《無》：次の対戦相手のターン終了時まで、このシグニのパワーを＋5000する。", //JP_TEXT
		"「常」：對方回合中，我方其他的Dissona精靈力量+2000。<br><br>「出」無1：直到下一個對方回合結束時為止，此精靈力量+5000。"	//TW_TEXT
		],
	[
		"WXDi-P12-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-061.jpg", //SRC
		"聖将 ゆきめ//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのメインフェイズ開始時、このシグニを場からトラッシュに置いてもよい。そうした場合、カードを2枚引く。<br><br>【自】：あなたのアタックフェイズ開始時、このシグニが中央のシグニゾーンにある場合、対戦相手のシグニ1体を対象とし、《白》《白》《無》を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		"「自」：我方主要階段開始時，可以將此精靈放置到廢棄區。若如此做，抽2張牌。<br><br>「自」：我方攻擊階段開始時，此精靈在中央精靈區的話，對方1隻精靈作對象，可以支付白2無1。若如此做，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-062.jpg", //SRC
		"ニュー・プロブレム", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"あなたのデッキの上からカードを5枚見る。その中から《ディソナアイコン》のシグニを2枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それを手札に戻す。", //JP_TEXT
		"查看我方牌組上方5張卡牌。其中最多2張Dissona精靈公開並加入手牌，剩下的按任意順序放置到牌組下方。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其返回手牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-063.jpg", //SRC
		"紅将 リル//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：このシグニがアタックしたとき、あなたの場に他の《ディソナアイコン》のシグニがある場合、対戦相手のパワー8000以下のシグニ1体を対象とし、《赤》《無》を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈攻擊時，我方場上有其他的Dissona精靈的話，對方1隻力量8000以下的精靈作對象，可以支付紅1無1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-064.jpg", //SRC
		"紅天 アノウズ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】（ターン1）：あなたの《ディソナアイコン》のシグニ1体がアタックしたとき、ターン終了時まで、そのシグニのパワーを＋5000する。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」(回合1)：我方1隻Dissona精靈攻擊時，直到回合結束時為止，該精靈的力量+5000。<br><br>「生命爆發」：對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-065.jpg", //SRC
		"小砲 バクチク//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【出】手札から《ディソナアイコン》のカードを1枚捨てる：対戦相手のパワー5000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「出」捨棄手牌1張Dissona卡牌：對方1隻力量5000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-066.jpg", //SRC
		"コードアート ララ・ルー//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのアタックフェイズ開始時、このターンにあなたがスペルを使用していた場合、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード1枚を対象とし、それをトラッシュに置く。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，本回合我方有使用魔法的話，對方能量區1張與對方中央分身不持有共通顏色的卡牌作對象，將其放置到廢棄區。<br><br>「生命爆發」：對方1隻力量12000以下的精靈作對象，可以捨棄1張手牌。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-067.jpg", //SRC
		"幻獣 コマイヌ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：このシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、対戦相手のパワー3000以下のシグニ1体を対象とし、それをバニッシュする。このシグニのパワーが10000以上の場合、代わりに対戦相手のパワー8000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"「自」：此精靈因戰鬥破壞對方1隻精靈時，對方1隻力量3000以下的精靈作對象，將其破壞。此精靈的力量是10000以上的話，作為代替對方1隻力量8000以下的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-068.jpg", //SRC
		"コードライド ジンリキ//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【ライズ】あなたの《ディソナアイコン》のシグニ1体の上に置く（この条件を満たさなければ場に出せない）<br><br>【自】：あなたのアタックフェイズ開始時、このシグニの下にあるシグニ1枚と同じレベルの対戦相手のシグニ1体を対象とし、《赤》を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		"「升階」放置到我方1隻Dissona精靈上方（不滿足此條件無法出場）<br><br>「自」：我方攻擊階段開始時，與此精靈下方1張精靈相同等級的對方1隻精靈作對象，可以支付紅1。若如此做，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-069.jpg", //SRC
		"開園の合図", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"あなたの《ディソナアイコン》のシグニ1体を対象とし、ターン終了時まで、それは「【自】（ターン1）：このシグニがアタックしたとき、対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。」を得る。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"我方1隻Dissona精靈作對象，直到回合結束時為止，使其獲得「自(回合1)：此精靈攻擊時，對方1隻力量10000以下的精靈作對象，將其破壞。」。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，將其破壞。"	//TW_TEXT
		],
	[
		"WXDi-P12-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-070.jpg", //SRC
		"コードアンチ マドカ//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのターン終了時、このシグニがアップ状態の場合、あなたのデッキの一番上を公開する。そのカードが《ディソナアイコン》の場合、カードを1枚引く。", //JP_TEXT
		"「自」：我方回合結束時，此精靈是豎直狀態的話，公開我方牌組上方1張卡牌。該卡牌是Dissona的話，抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-071.jpg", //SRC
		"コードイート マチャフラ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】（ターン1）：あなたが《ディソナアイコン》のカードを1枚捨てたとき、対戦相手のシグニ1体を対象とし、それを凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）<br><br>【出】手札から《ディソナアイコン》のカードを1枚捨てる：カードを1枚引く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。カードを1枚引く。", //JP_TEXT
		"「自」(回合1)：我方捨棄1張Dissona卡牌時，對方1隻精靈作對象，將其凍結。<br><br>「出」捨棄手牌1張Dissona卡牌：抽1張牌。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。抽1張牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-072.jpg", //SRC
		"幻水 イシガメ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：あなたの手札が対戦相手より2枚以上多いかぎり、このシグニのパワーは＋2000される。<br><br>【自】：あなたのアタックフェイズ開始時、手札から《ディソナアイコン》のカードを1枚捨ててもよい。そうした場合、対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「常」：我方手牌比對方多2張以上時，此精靈的力量+2000。<br><br>「自」：我方攻擊階段開始時，可以捨棄手牌1張Dissona卡牌。若如此做，對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-073.jpg", //SRC
		"蒼将 ソウイ//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：対戦相手の凍結状態のシグニがこのシグニとのバトルによってバニッシュされる場合、エナゾーンに置かれる代わりにトラッシュに置かれる。<br><br>【出】：対戦相手の手札が1枚以下の場合、対戦相手のシグニ1体を対象とし、それを凍結し、ターン終了時まで、このシグニのパワーを＋4000する。", //JP_TEXT
		"「常」：對方凍結狀態精靈被此精靈因戰鬥破壞的話，不放置到能量區而改為放置到廢棄區。<br><br>「出」：對方手牌是1張以下的話，對方1隻精靈作對象，將其凍結，直到回合結束時為止，此精靈力量+4000。"	//TW_TEXT
		],
	[
		"WXDi-P12-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-074.jpg", //SRC
		"羅石 ホープダイヤ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】（ターン1）：対戦相手のターンの間、このシグニが対戦相手の、能力か効果の対象になったとき、対戦相手は手札を1枚捨てる。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、それをダウンし凍結する。対戦相手は手札を1枚捨てる。", //JP_TEXT
		"「自」(回合1)：對方回合中，此精靈因對方的能力或效果成為對象時，對方捨棄1張手牌。<br><br>「生命爆發」：對方1隻精靈作對象，將其橫置並凍結。對方捨棄1張手牌。"	//TW_TEXT
		],
	[
		"WXDi-P12-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-075.jpg", //SRC
		"EXTRA", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"このターンにあなたが《ディソナアイコン》ではないスペルを使用していた場合、このスペルは使用できない。<br><br>カードを1枚引く。対戦相手は手札を1枚捨てる。このターン、あなたは《ディソナアイコン》ではないスペルを使用できない。<br><br>【ライフバースト】：対戦相手のルリグかシグニ1体を対象とする。このターン、それがアタックしたとき、対戦相手が手札を3枚捨てないかぎり、そのアタックを無効にする。", //JP_TEXT
		"本回合我方使用過不是Dissona的魔法的話，不能使用此魔法。<br><br>抽1張牌。對方捨棄1張手牌。本回合中，我方不能使用不是Dissona的魔法。<br><br>「生命爆發」：對方1隻分身或精靈作對象。本回合中，其攻擊時，對方不捨棄3張手牌時，該攻擊無效。"	//TW_TEXT
		],
	[
		"WXDi-P12-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-076.jpg", //SRC
		"アイン＝サンガ//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：あなたの場にあるシグニが持つ色が合計3種類以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【起】[ダウン]：あなたのエナゾーンから《ディソナアイコン》のシグニ1枚を対象とし、それを場に出す。", //JP_TEXT
		"「常」：我方場上精靈持有的顏色合計有3種類以上時，此精靈力量+4000。<br><br>「起」(橫置)：我方能量區1張Dissona精靈作對象，將其出場。"	//TW_TEXT
		],
	[
		"WXDi-P12-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-077.jpg", //SRC
		"翠美 ウゴクエ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：【シャドウ（パワー3000以下のシグニ）】（このシグニは対戦相手のパワー3000以下のシグニによって対象にされない）<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「常」：【暗影(力量3000以下的精靈)】<br><br>「生命爆發」：【能量填充1】。本回合中，下一次我方因精靈受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P12-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-078.jpg", //SRC
		"幻獣 ワウルフ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：このシグニは各ターンに一度しかアタックできない。<br><br>【出】エナゾーンから《ディソナアイコン》のカード1枚をトラッシュに置く：ターン終了時まで、このシグニは「【常】：このシグニは正面のシグニがレベル1であるかぎり、【ランサー】を得る。」を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする）", //JP_TEXT
		"「常」：此精靈各回合只能攻擊一次。<br><br>「出」能量區1張Dissona卡牌放置到廢棄區：直到回合結束時為止，此精靈獲得「常：此精靈正面的精靈是等級1時，獲得【槍兵】。」。"	//TW_TEXT
		],
	[
		"WXDi-P12-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-079.jpg", //SRC
		"コードメイズ アト//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：このシグニが中央のシグニゾーンにあるかぎり、このシグニのパワーは＋4000される。<br><br>【自】：このカードがデッキからエナゾーンに置かれたとき、このカードをエナゾーンから手札に加えてもよい。<br><br>【ライフバースト】：【エナチャージ1】をする。このターン、次にあなたがルリグによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		"「常」：此精靈在中央精靈區時，此精靈力量+4000。<br><br>「自」：此卡牌從牌組放置到能量區時，此卡牌可以從能量區加入手牌。<br><br>「生命爆發」：【能量填充1】。本回合中，下一次我方因分身受到傷害時，作為代替不會受到傷害。"	//TW_TEXT
		],
	[
		"WXDi-P12-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-080.jpg", //SRC
		"羅植 アイビー//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるすべてのシグニが《ディソナアイコン》の場合、【エナチャージ1】をする。", //JP_TEXT
		"「自」：我方攻擊階段開始時，我方場上所有精靈都是Dissona的話，【能量填充1】。"	//TW_TEXT
		],
	[
		"WXDi-P12-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-081.jpg", //SRC
		"翠英 マッドグ//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：このシグ二がアタックしたとき、【エナチャージ1】をする。このシグニのパワーが15000の場合、代わりに【エナチャージ2】をする。", //JP_TEXT
		"「自」：此精靈攻擊時，【能量填充1】。此精靈力量是15000的話，作為代替【能量填充2】。"	//TW_TEXT
		],
	[
		"WXDi-P12-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-082.jpg", //SRC
		"羽化", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"以下の2つから1つを選ぶ。<br>①あなたの場に《ディソナアイコン》のシグニがある場合、【エナチャージ1】をする。<br>②あなたのエナゾーンから《ディソナアイコン》のシグニ1枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：【エナチャージ1】をする。その後、あなたのエナゾーンからシグニを1枚まで対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"以下2項中選擇1項。<br>①我方場上有Dissona精靈的話，【能量填充1】。<br>②我方能量區1張Dissona精靈作對象，將其加入手牌。<br><br>「生命爆發」：【能量填充1】。之後，我方能量區最多1張精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P12-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-083.jpg", //SRC
		"コードメイズ ムジカ//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【出】エナゾーンから《ディソナアイコン》のカード1枚をトラッシュに置く：対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを－3000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		"「出」能量區1張Dissona卡牌放置到廢棄區：對方1隻精靈作對象，直到回合結束時為止，將其力量-3000。"	//TW_TEXT
		],
	[
		"WXDi-P12-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-084.jpg", //SRC
		"羅原 まほまほ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手のデッキの上からカードを2枚トラッシュに置く。", //JP_TEXT
		"「自」：此精靈攻擊時，對方牌組上方2張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P12-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-085.jpg", //SRC
		"コードアンチ サルノテ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【常】：あなたのトラッシュに《ディソナアイコン》のカードが3枚以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【出】：あなたのデッキの上からカードを3枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ1体を対象とし、手札を1枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		"「常」：我方廢棄區Dissona卡牌有3張以上時，此精靈力量+5000。<br><br>「出」：我方牌組上方3張卡牌放置到廢棄區。<br><br>「生命爆發」：對方1隻精靈作對象，可以捨棄1張手牌。若如此做，直到回合結束時為止，將其力量-12000。"	//TW_TEXT
		],
	[
		"WXDi-P12-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-086.jpg", //SRC
		"ツヴァイ＝ハナレ//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをあなたの場にある他の《ディソナアイコン》のシグニ1体につき－1000する。", //JP_TEXT
		"「自」：我方攻擊階段開始時，對方1隻精靈作對象，直到回合結束時為止，其力量為我方場上其他的Dissona精靈每有1隻-1000。"	//TW_TEXT
		],
	[
		"WXDi-P12-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-087.jpg", //SRC
		"似之遊 カゴメカ//ディソナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【起】[ダウン]：あなたのデッキの上からカードを3枚トラッシュに置く。<br><br>【起】《黒》このシグニを場からトラッシュに置く：あなたのトラッシュからレベル3の《ディソナアイコン》のシグニ1枚を対象とし、それを場に出す。<br><br>【ライフバースト】：あなたのトラッシュから《ディソナアイコン》のシグニ1枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		"「起」(橫置)：我方牌組上方3張卡牌放置到廢棄區。<br><br>「起」黑1此精靈從場上放置到廢棄區：我方廢棄區1張等級3的Dissona精靈作對象，將其出場。<br><br>「生命爆發」：我方廢棄區1張Dissona精靈作對象，將其加入手牌或出場。"	//TW_TEXT
		],
	[
		"WXDi-P12-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-088.jpg", //SRC
		"羅菌 オリゼル//ディソナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"ディソナ", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手のデッキの上からカードを6枚トラッシュに置く。", //JP_TEXT
		"「自」：此精靈攻擊時，對方牌組上方6張卡牌放置到廢棄區。"	//TW_TEXT
		],
	[
		"WXDi-P12-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-089.jpg", //SRC
		"ブラック・オーラ", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ディソナ", //STORY
		"対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーをあなたの場にある《ディソナアイコン》のシグニ1体につき－1000する。<br>（パワーが0以下のシグニはルールによってバニッシュされる）<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ1体を対象とし、ターン終了時まで、それのパワーを－15000する。", //JP_TEXT
		"對方1隻精靈作對象，直到回合結束時為止，其力量為我方場上Dissona精靈每有1隻-1000。<br><br>「生命爆發」：對方1隻豎直狀態的精靈作對象，直到回合結束時為止，將其力量-15000。"	//TW_TEXT
		],
	[
		"WXDi-P12-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P12-090.jpg", //SRC
		"サーバント #", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"", //STORY
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色1つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"【防禦】（可以從手牌捨棄此卡牌，防禦分身的攻擊傷害一次）<br><br>「常」：【萬花色】（支付能量費用時，此卡牌可以支付1個任意顏色）<br><br>「生命爆發」：我方廢棄區的1張精靈作對象，將其加入手牌。"	//TW_TEXT
		]
	];