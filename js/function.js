function onLoading()
{
	var i = 0;

	rdeckArr = [];

	for(i = 0; i < cardData.length; i++)
	{
		rdeckArr.push(cardData[i]);
	}

	document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
}

function showrdeck()
{
	var i = 0;
	var max = 0;

	if(rdeckArr.length < (page + 1) * 10)
	{
		max = rdeckArr.length % 10;
	}
	else
	{
		max = 10;
	}

	for(i = 0; i < 10; i++)
	{
		if(i < max)
		{
			$("#rdeck_" + i).attr("src", rdeckArr[page * 10 + i][SRC]);
			$("#rdeck_" + i).attr("alt", rdeckArr[page * 10 + i][ID]);

			if(rdeckArr[page * 10 + i][TYPE] == "ピース")
			{
				$("#rdeck_" + i).attr("height", "90px");
				$("#rdeck_" + i).attr("width", "124px");
				$("#rdeck_" + i).attr("style", "margin-bottom: 41px");
			}
			else
			{
				$("#rdeck_" + i).attr("height", "172px");
				$("#rdeck_" + i).attr("width", "124px");
				$("#rdeck_" + i).attr("style", "margin-bottom: 0px");
			}
		}
		else
		{
			$("#rdeck_" + i).attr("src", "img/empty.jpg");
			$("#rdeck_" + i).attr("alt", "");
		}
	}
}

function onmouseShow(x)
{
	var i = 0;

	$("#infoTable").show();

	if(x.alt)
	{
		for(i = 0; i < cardData.length; i++)
		{
			if(x.alt == cardData[i][ID])
			{
				$("#info_name").html(cardData[i][ID]);

				break;
			}
		}

		$("#big_pic").attr("src", cardData[i][SRC]);

		if(cardData[i][TYPE] == "ピース")
		{
			$("#big_pic").attr("height", "214x");
			$("#big_pic").attr("width", "300px");
			$("#big_pic").attr("style", "margin-bottom: 0px");
		}
		else
		{
			$("#big_pic").attr("height", "420px");
			$("#big_pic").attr("width", "300px");
			$("#big_pic").attr("style", "margin-bottom: 0px");
		}
	}
	else
	{
		$("#infoTable").hide();
	}

	showInfotable(cardData[i]);
}

function showInfotable(data)
{
	var str = "";
	if(data[TYPE] == "ピース")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		使用タイミング";
		str += "	</td>";
		str += "	<td>";
		str += showTiming(data[TIMING]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += data[JP_TEXT];
		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "ルリグ")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カードタイプ";
		str += "	</td>";
		str += "	<td>";
		str += data[CLASS];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		レベル";
		str += "	</td>";
		str += "	<td>";
		str += data[LEVEL];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		リミット";
		str += "	</td>";
		str += "	<td>";
		str += data[LIMIT];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		チーム";
		str += "	</td>";
		str += "	<td>";
		str += showTeam(data[CLASS]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += data[JP_TEXT];
		str += "	</td>";
		str += "</tr>";
	}

	else if(data[TYPE] == "アシストルリグ")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カードタイプ";
		str += "	</td>";
		str += "	<td>";
		str += data[CLASS];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		レベル";
		str += "	</td>";
		str += "	<td>";
		str += data[LEVEL];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		グロウコスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		チーム";
		str += "	</td>";
		str += "	<td>";
		str += showTeam(data[CLASS]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		使用タイミング";
		str += "	</td>";
		str += "	<td>";
		str += data[TIMING];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += data[JP_TEXT];
		str += "	</td>";
		str += "</tr>";
	}

	else if(data[TYPE] == "シグニ")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カードタイプ";
		str += "	</td>";
		str += "	<td>";
		str += data[CLASS];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		レベル";
		str += "	</td>";
		str += "	<td>";
		str += data[LEVEL];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		パワー";
		str += "	</td>";
		str += "	<td>";
		str += data[POWER];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += data[JP_TEXT];
		str += "	</td>";
		str += "</tr>";
	}

	else
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += data[JP_TEXT];
		str += "	</td>";
		str += "</tr>";
	}

	$("#infoTable").html(str);
}

function showTiming(x)
{
	var str = "";

	if(x.indexOf(","))
	{
		//Wait for parsing
		return x;
	}
	else
	{
		str += x;
		str += "<br>";
		str += "123";
	}
	return str;
}

function showTeam(x)
{
	if(x == "アト" || x == "タウィル" || x == "ウムル")
	{
		return "アンシエント・サプライズ";
	}
	else
	{
		return "";
	}
}

function showLdeck()
{
	for(i = 0; i < 10; i++)
	{
		if(i < ldeckArr.length)
		{
			$("#ldeck_" + i).attr("src", ldeckArr[i][SRC]);
			$("#ldeck_" + i).attr("alt", ldeckArr[i][ID]);
		}
		else
		{
			$("#ldeck_" + i).attr("src", "img/empty.jpg");
			$("#ldeck_" + i).attr("alt", "");
		}
	}
}

function showPdeck()
{
	for(i = 0; i < 2; i++)
	{
		if(i < pdeckArr.length)
		{
			$("#pdeck_" + i).attr("src", pdeckArr[i][SRC]);
			$("#pdeck_" + i).attr("alt", pdeckArr[i][ID]);
		}
		else
		{
			$("#pdeck_" + i).attr("src", "img/empty.jpg");
			$("#pdeck_" + i).attr("alt", "");
		}
	}
}

function showSdeck()
{
	for(i = 0; i < 40; i++)
	{
		if(i < sdeckArr.length)
		{
			$("#sdeck_" + i).attr("src", sdeckArr[i][SRC]);
			$("#sdeck_" + i).attr("alt", sdeckArr[i][ID]);
		}
		else
		{
			$("#sdeck_" + i).attr("src", "img/empty.jpg");
			$("#sdeck_" + i).attr("alt", "");
		}
	}
}

function sortPdeck(x)
{
	var length = pdeckArr.length;

	for(i = 0; i < length; i++)
	{
		if(x[ID] == pdeckArr[i][ID])
		{
			return;
		}
	}
	pdeckArr.push(x);

	showPdeck();
}

function sortLdeck(x)
{
	var i = 0;
	var updated = 0, same = 0;
	var length = ldeckArr.length;

	for(i = 0; i < length; i++)
	{
		if(x[ID] == ldeckArr[i][ID])
		{
			return;
		}
	}
	
	if(ldeckArr.length != 0)
	{
		for(i = 0; i < length; i++)
		{
			if(x[CLASS] == ldeckArr[i][CLASS])
			{
				same = 1;
				if(x[LEVEL] <= ldeckArr[i][LEVEL])
				{
					ldeckArr.splice(i, 0, x);
					updated = 1;
					break;
				}
			}

			if(same == 1 && x[CLASS] != ldeckArr[i][CLASS])
			{
				ldeckArr.splice(i, 0, x);
				updated = 1;
				break;
			}
		}
	}

	if(!updated)
	{
		ldeckArr.push(x);
	}

	showLdeck();
}

function showAlldeck()
{
	showLdeck();
	showPdeck();
	showSdeck();
}

function sortSdeck(x)
{
	var same_card = 0;
	var same_level = 0;
	var same_color = 0;
	var same_lb = 0;

	var updated = 0;
	var length = sdeckArr.length;

	if(sdeckArr.length != 0)
	{
		for(i = 0; i < length; i++)
		{
			if(x[ID] == sdeckArr[i][ID])
			{
				same_card++;

				if(same_card == 4)
				{
					return;
				}
			}
		}

		for(i = 0; i < length; i++)
		{
			if(x[ID] == sdeckArr[i][ID])
			{
				updated = 1;
				sdeckArr.splice(i, 0, x);
				break;
			}
		}

		for(i = 0; i < length && !updated; i++)
		{
			if(x[LEVEL] == "")
			{
				if(sdeckArr[i][LEVEL] == "")
				{
					updated = 1;
					sdeckArr.splice(i, 0, x);
					break;
				}
			}
			else
			{
				if(sdeckArr[i][LEVEL] == "")
				{
					updated = 1;
					sdeckArr.splice(i, 0, x);
					break;
				}

				if(x[LEVEL] <= sdeckArr[i][LEVEL])
				{
					same_level = 1;
					if(x[COLOR] == sdeckArr[i][COLOR])
					{
						updated = 1;
						sdeckArr.splice(i, 0, x);
						break;
					}
				}

				if(same_level == 1 && x[COLOR] != sdeckArr[i][COLOR])
				{
					sdeckArr.splice(i, 0, x);
					updated = 1;
					break;
				}
			}
		}
	}

	if(!updated)
	{
		sdeckArr.push(x);
	}

	addcounter(x);
	showSdeck();
}

function delDeck(x, idx, array)
{
	var i = 0;
	var tmpArr = "";
	for(i = 0; i < cardData.length; i++)
	{
		if(x.alt == cardData[i][ID] && (cardData[i][TYPE] == "シグニ" || cardData[i][TYPE] == "スペル"))
		{
			delcounter(cardData[i]);
			break;
		}
	}
	array.splice(idx, 1);
	
	showAlldeck();
}

function addcounter(x)
{
	if(x[LEVEL] == 1)
	{
		sdeck_l1++;
	}
	else if(x[LEVEL] == 2)
	{
		sdeck_l2++;
	}
	else if(x[LEVEL] == 3)
	{
		sdeck_l3++;
	}
	else
	{
		sdeck_spell++;
	}

	if(x[COLOR].indexOf("赤") != -1)
	{
		sdeck_red++;
	}

	if(x[COLOR].indexOf("青") != -1)
	{
		sdeck_blue++;
	}

	if(x[COLOR].indexOf("緑") != -1)
	{
		sdeck_green++;
	}

	if(x[COLOR].indexOf("黒") != -1)
	{
		sdeck_black++;
	}

	if(x[COLOR].indexOf("白") != -1)
	{
		sdeck_white++;
	}

	if(x[COLOR].indexOf("無") != -1)
	{
		sdeck_nocolor++;
	}

	if(x[LB] == 1)
	{
		sdeck_burst++;
	}
	else
	{
		sdeck_no_burst++;
	}

	showcounter();
}

function delcounter(x)
{
	if(x[LEVEL] == 1)
	{
		sdeck_l1--;
	}
	if(x[LEVEL] == 2)
	{
		sdeck_l2--;
	}
	if(x[LEVEL] == 3)
	{
		sdeck_l3--;
	}
	if(x[LEVEL] == "")
	{
		sdeck_spell--;
	}

	if(x[COLOR].indexOf("赤") != -1)
	{
		sdeck_red--;
	}

	if(x[COLOR].indexOf("青") != -1)
	{
		sdeck_blue--;
	}

	if(x[COLOR].indexOf("緑") != -1)
	{
		sdeck_green--;
	}

	if(x[COLOR].indexOf("黒") != -1)
	{
		sdeck_black--;
	}

	if(x[COLOR].indexOf("白") != -1)
	{
		sdeck_white--;
	}

	if(x[COLOR].indexOf("無") != -1)
	{
		sdeck_nocolor--;
	}

	if(x[LB] == 1)
	{
		sdeck_burst--;
	}
	else
	{
		sdeck_no_burst--;
	}

	showcounter();
}

function showcounter()
{
	var str = "";
	if(sdeck_l1)
	{
		str+= "&emsp;&emsp;Level 1 シグニ: " + sdeck_l1;
	}
	if(sdeck_l2)
	{
		str+= "&emsp;&emsp;Level 2 シグニ: " + sdeck_l2;
	}
	if(sdeck_l3)
	{
		str+= "&emsp;&emsp;Level 3 シグニ: " + sdeck_l3;
	}
	if(sdeck_spell)
	{
		str+= "&emsp;&emsp;スペル: " + sdeck_spell;
	}

	str+= "<br><br>"

	if(sdeck_red)
	{
		str+= "&emsp;&emsp;赤: " + sdeck_red;
	}
	if(sdeck_blue)
	{
		str+= "&emsp;&emsp;青: " + sdeck_blue;
	}
	if(sdeck_green)
	{
		str+= "&emsp;&emsp;緑: " + sdeck_green;
	}
	if(sdeck_black)
	{
		str+= "&emsp;&emsp;黒: " + sdeck_black;
	}
	if(sdeck_white)
	{
		str+= "&emsp;&emsp;白: " + sdeck_white;
	}
	if(sdeck_nocolor)
	{
		str+= "&emsp;&emsp;無: " + sdeck_nocolor;
	}

	if(sdeck_white)
	{
		str+= "&emsp;&emsp;白: " + sdeck_white;
	}

	str+= "<br><br>"

	if(sdeck_burst)
	{
		str+= "&emsp;&emsp;LB有り: " + sdeck_burst;
	}

	if(sdeck_no_burst)
	{
		str+= "&emsp;&emsp;LB無し: " + sdeck_no_burst;
	}

	$("#counter").html(str);
}

function addDeck(x)
{
	var i = 0;

	if(x.alt != "")
	{
		for(i = 0; i < cardData.length; i++)
		{
			if(x.alt == cardData[i][ID])
			{
				if(cardData[i][TYPE] == "ルリグ" || cardData[i][TYPE] == "アシストルリグ")
				{
					if(ldeckArr.length < 10)
					{
						sortLdeck(cardData[i]);
					}
				}
				else if(cardData[i][TYPE] == "ピース")
				{
					if(pdeckArr.length < 2)
					{
						sortPdeck(cardData[i]);
					}
				}
				else if(cardData[i][TYPE] == "シグニ" || cardData[i][TYPE] == "スペル")
				{
					if(sdeckArr.length < 40)
					{
						sortSdeck(cardData[i]);
					}
				}
				
				break;
			}
		}
	}
}

function downloadBlob(filename, contentType) {
    var larray = [];
    var parray = [];
    var sarray = [];
    var array = [];
    var i = 0;

    for(i = 0; i < ldeckArr.length; i++)
    {
    	larray.push(ldeckArr[i][ID]);
    }

    for(i = 0; i < pdeckArr.length; i++)
    {
    	parray.push(pdeckArr[i][ID]);
    }

    for(i = 0; i < sdeckArr.length; i++)
    {
    	sarray.push(sdeckArr[i][ID]);
    }
    larray.unshift("ldeck");
    parray.unshift("pdeck");
    sarray.unshift("sdeck");

    array.push(larray);
    array.push(parray);
    array.push(sarray);

    var csv = array.map((item) => {
        var row = item;
          
        return row.join(",");
      })
      .join("\n");

    content = csv;
  var blob = new Blob([content], { type: contentType });
  var url = URL.createObjectURL(blob);

  var pom = document.createElement('a');
  pom.href = url;
  pom.setAttribute('download', filename);
  pom.click();
}

function readSingleFile(evt) {

    var f = evt.target.files[0]; 
    var larray = [];
    var parray = [];
    var sarray = [];
    var array = [];
    var i = 0, j = 0;
    const textArea = document.querySelector("#csvResult");

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
          var contents = e.target.result;
          array = contents.split("\n");

          ldeckArr = [];

          larray = array[0].split(",");
          for(i = 1; i < larray.length; i++)
          {
          	for(j = 0; j < cardData.length; j++)
          	{
          		if(larray[i] == cardData[j][ID])
          		{
          			ldeckArr.push(cardData[j]);
          		}
          	}
          }

          pdeckArr = [];
          
          parray = array[1].split(",");
          for(i = 1; i < parray.length; i++)
          {
          	for(j = 0; j < cardData.length; j++)
          	{
          		if(parray[i] == cardData[j][ID])
          		{
          			pdeckArr.push(cardData[j]);
          		}
          	}
          }

          sdeckArr = [];
          
          sarray = array[2].split(",");
          for(i = 1; i < sarray.length; i++)
          {
          	for(j = 0; j < cardData.length; j++)
          	{
          		if(sarray[i] == cardData[j][ID])
          		{
          			sdeckArr.push(cardData[j]);
          		}
          	}
          }

          showAlldeck();
          loadcounter();
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
}

function loadcounter()
{
	var i = 0;

	sdeck_l1 = 0;
	sdeck_l2 = 0;
	sdeck_l3 = 0;
	sdeck_spell = 0;

	sdeck_red = 0;
	sdeck_blue = 0;
	sdeck_green = 0;
	sdeck_black = 0;
	sdeck_white = 0;
	sdeck_nocolor = 0;

	sdeck_burst = 0;
	sdeck_no_burst = 0;

	for(i = 0; i < sdeckArr.length; i++)
	{
		addcounter(sdeckArr[i])
	}
}

function search()
{
	var i = 0;

	rdeckArr = [];

	for(i = 0; i < cardData.length; i++)
	{
		if($('#lrig').is(":checked"))
		{
			if(cardData[i][TYPE] == "ルリグ")
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#assistlrig').is(":checked"))
		{
			if(cardData[i][TYPE] == "アシストルリグ")
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#signi').is(":checked"))
		{
			if(cardData[i][TYPE] == "シグニ")
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#spell').is(":checked"))
		{
			if(cardData[i][TYPE] == "スペル")
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#level1').is(":checked"))
		{
			if(cardData[i][LEVEL] == "1")
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#level2').is(":checked"))
		{
			if(cardData[i][LEVEL] == "2")
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#level3').is(":checked"))
		{
			if(cardData[i][LEVEL] == "3")
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#red').is(":checked"))
		{
			if(cardData[i][COLOR].indexOf("赤") != -1)
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#blue').is(":checked"))
		{
			if(cardData[i][COLOR].indexOf("青") != -1)
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#green').is(":checked"))
		{
			if(cardData[i][COLOR].indexOf("緑") != -1)
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#black').is(":checked"))
		{
			if(cardData[i][COLOR].indexOf("黒") != -1)
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#white').is(":checked"))
		{
			if(cardData[i][COLOR].indexOf("白") != -1)
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#nocolor').is(":checked"))
		{
			if(cardData[i][COLOR].indexOf("無") != -1)
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#islb').is(":checked"))
		{
			if(cardData[i][LB] == "1")
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		if($('#notlb').is(":checked"))
		{
			if(cardData[i][LB] == "0")
			{
				rdeckArr.push(cardData[i]);
				continue;
			}
		}

		page = 0;
		showrdeck();
	}
}