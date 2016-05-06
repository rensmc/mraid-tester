function closeAdIfOpen() {
	mraidview.closeView();
}

var specs = {
    adWidth:     {name: 'adWidth',       value: '320' },
    adHeight:    {name: 'adHeight',      value: '480' },
    adLeft:      {name: 'adLeft',        value: '0'   },
    adTop:       {name: 'adTop',         value: '0'   },
    adMaxWidth:  {name: 'adMaxWidth',    value: '320' },
    adMaxHeight: {name: 'adMaxHeight',   value: '480' },
    adMaxLeft:   {name: 'adMaxLeft',     value: '0'   },
    adMaxTop:    {name: 'adMaxTop',      value: '0'   },
    screenWidth: {name: 'screenWidth',   value: '320' },
    screenHeight:{name: 'screenHeight',  value: '480' },
    version:     {name: 'version',       value: '2.0' },
    placement:   {name: 'placement',     value: 'intersitial' },
    offscreen:   {name: 'offscreen',     value: 'no'  }
 };
  
var features = {
    sms:          {name: 'sms',         value: 'true' }, 
    tel:          {name: 'tel',         value: 'true' }, 
    calendar:     {name: 'calendar',    value: 'true' }, 
    storePicture: {name: 'storePicture',value: 'true' }, 
    inlineVideo:  {name: 'inlineVideo', value: 'true' }, 
    vpaid:        {name: 'vpaid',       value: 'true' } 
  };

function renderHtmlAd() {
  var form = document.forms.setup;

  prepareMraidView();
  mraidview.setUseHtml(true, unescape(form.adFragment.value));
  mraidview.render();
}

function prepareMraidView() {

// SET SCREEN SIZE
mraidview.setScreenSize(parseInt(specs.screenWidth.value, 10), 
                        parseInt(specs.screenHeight.value, 10));

// SET DEFAULT POSITION
mraidview.setDefaultPosition(parseInt(specs.adLeft.value, 10), 
                             parseInt(specs.adTop.value, 10), 
                             parseInt(specs.adWidth.value, 10), 
                             parseInt(specs.adHeight.value, 10));

// SET MAX POSITION  
mraidview.setMaxAdPosition(parseInt(specs.adMaxLeft.value, 10), 
                           parseInt(specs.adMaxTop.value, 10), 
                           parseInt(specs.adMaxWidth.value, 10), 
                           parseInt(specs.adMaxHeight.value, 10));

// SET VERSION, PLACEMENT, OFFSCREEN
mraidview.setVersion(specs.version.value);
mraidview.setPlacement(specs.placement.value);
mraidview.setOffScreen(specs.offscreen.checked);

// SET SUPORTS (FEATURES)
mraidview.resetSupports();
mraidview.setSupports(features.sms.name.checked);
mraidview.setSupports(features.tel.name.checked);
mraidview.setSupports(features.calendar.name.checked);
mraidview.setSupports(features.storePicture.name.checked);
mraidview.setSupports(features.inlineVideo.name.checked);
mraidview.setSupports(features.vpaid.name.checked);
  
}

function rotate(){
  var form = document.forms.setup;
  
  var temp = specs.screenWidth.value;
  var temp2 = specs.adWidth.value;
  
  specs.screenWidth.value = specs.screenHeight.value;
  specs.screenHeight.value = temp;
  
  //SWAPPED WIDTH AND HEIGHT VALUES TO KEEP IT SIMPLE
  specs.adWidth.value = specs.adHeight.value;
  specs.adMaxWidth = specs.adHeight.value;
  specs.adHeight.value = temp2;
  specs.adMaxHeight.value = temp2;
  
  prepareMraidView();
  mraidview.render();

  mraidview.setOrientation();
  mraidview.render();

}

