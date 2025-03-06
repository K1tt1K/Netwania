gdjs.EndingCode = {};
gdjs.EndingCode.localVariables = [];
gdjs.EndingCode.GDAndyOObjects1= [];
gdjs.EndingCode.GDAndyOObjects2= [];
gdjs.EndingCode.GDAndyOObjects3= [];
gdjs.EndingCode.GDAndyOObjects4= [];
gdjs.EndingCode.GDAndyOObjects5= [];
gdjs.EndingCode.GDAndyOObjects6= [];
gdjs.EndingCode.GDFadeObjects1= [];
gdjs.EndingCode.GDFadeObjects2= [];
gdjs.EndingCode.GDFadeObjects3= [];
gdjs.EndingCode.GDFadeObjects4= [];
gdjs.EndingCode.GDFadeObjects5= [];
gdjs.EndingCode.GDFadeObjects6= [];
gdjs.EndingCode.GD_95951_9595inObjects1= [];
gdjs.EndingCode.GD_95951_9595inObjects2= [];
gdjs.EndingCode.GD_95951_9595inObjects3= [];
gdjs.EndingCode.GD_95951_9595inObjects4= [];
gdjs.EndingCode.GD_95951_9595inObjects5= [];
gdjs.EndingCode.GD_95951_9595inObjects6= [];
gdjs.EndingCode.GD_95951_9595outObjects1= [];
gdjs.EndingCode.GD_95951_9595outObjects2= [];
gdjs.EndingCode.GD_95951_9595outObjects3= [];
gdjs.EndingCode.GD_95951_9595outObjects4= [];
gdjs.EndingCode.GD_95951_9595outObjects5= [];
gdjs.EndingCode.GD_95951_9595outObjects6= [];
gdjs.EndingCode.GD_95952Objects1= [];
gdjs.EndingCode.GD_95952Objects2= [];
gdjs.EndingCode.GD_95952Objects3= [];
gdjs.EndingCode.GD_95952Objects4= [];
gdjs.EndingCode.GD_95952Objects5= [];
gdjs.EndingCode.GD_95952Objects6= [];
gdjs.EndingCode.GDShowVariableObjects1= [];
gdjs.EndingCode.GDShowVariableObjects2= [];
gdjs.EndingCode.GDShowVariableObjects3= [];
gdjs.EndingCode.GDShowVariableObjects4= [];
gdjs.EndingCode.GDShowVariableObjects5= [];
gdjs.EndingCode.GDShowVariableObjects6= [];


gdjs.EndingCode.mapOfGDgdjs_9546EndingCode_9546GDFadeObjects5Objects = Hashtable.newFrom({"Fade": gdjs.EndingCode.GDFadeObjects5});
gdjs.EndingCode.asyncCallback98954428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}gdjs.EndingCode.localVariables.length = 0;
}
gdjs.EndingCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.EndingCode.asyncCallback98954428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndingCode.asyncCallback98953988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndingCode.localVariables);
gdjs.EndingCode.GDFadeObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.EndingCode.mapOfGDgdjs_9546EndingCode_9546GDFadeObjects5Objects, 0, 0, "");
}
{ //Subevents
gdjs.EndingCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EndingCode.localVariables.length = 0;
}
gdjs.EndingCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.EndingCode.asyncCallback98953988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndingCode.asyncCallback98953468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndingCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_1_out"), gdjs.EndingCode.GD_95951_9595outObjects4);

gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs.EndingCode.GD_95952Objects4);
{for(var i = 0, len = gdjs.EndingCode.GD_95952Objects4.length ;i < len;++i) {
    gdjs.EndingCode.GD_95952Objects4[i].hide(false);
}
}{for(var i = 0, len = gdjs.EndingCode.GD_95951_9595outObjects4.length ;i < len;++i) {
    gdjs.EndingCode.GD_95951_9595outObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.EndingCode.GD_95952Objects4.length ;i < len;++i) {
    gdjs.EndingCode.GD_95952Objects4[i].play();
}
}
{ //Subevents
gdjs.EndingCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EndingCode.localVariables.length = 0;
}
gdjs.EndingCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndingCode.localVariables);
for (const obj of gdjs.EndingCode.GD_95951_9595outObjects3) asyncObjectsList.addObject("_1_out", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.EndingCode.asyncCallback98953468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndingCode.asyncCallback98952892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndingCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_1_in"), gdjs.EndingCode.GD_95951_9595inObjects3);

gdjs.copyArray(runtimeScene.getObjects("_1_out"), gdjs.EndingCode.GD_95951_9595outObjects3);
{for(var i = 0, len = gdjs.EndingCode.GD_95951_9595inObjects3.length ;i < len;++i) {
    gdjs.EndingCode.GD_95951_9595inObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.EndingCode.GD_95951_9595outObjects3.length ;i < len;++i) {
    gdjs.EndingCode.GD_95951_9595outObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.EndingCode.GD_95951_9595outObjects3.length ;i < len;++i) {
    gdjs.EndingCode.GD_95951_9595outObjects3[i].play();
}
}
{ //Subevents
gdjs.EndingCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EndingCode.localVariables.length = 0;
}
gdjs.EndingCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndingCode.localVariables);
for (const obj of gdjs.EndingCode.GD_95951_9595inObjects2) asyncObjectsList.addObject("_1_in", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.EndingCode.asyncCallback98952892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndingCode.asyncCallback98952252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndingCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("AndyO"), gdjs.EndingCode.GDAndyOObjects2);
gdjs.copyArray(runtimeScene.getObjects("_1_in"), gdjs.EndingCode.GD_95951_9595inObjects2);
{for(var i = 0, len = gdjs.EndingCode.GD_95951_9595inObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GD_95951_9595inObjects2[i].play();
}
}{for(var i = 0, len = gdjs.EndingCode.GDAndyOObjects2.length ;i < len;++i) {
    gdjs.EndingCode.GDAndyOObjects2[i].getBehavior("Animation").setAnimationName("Speak");
}
}
{ //Subevents
gdjs.EndingCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EndingCode.localVariables.length = 0;
}
gdjs.EndingCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.EndingCode.asyncCallback98952252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndingCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(98916596);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndingCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_1_out"), gdjs.EndingCode.GD_95951_9595outObjects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs.EndingCode.GD_95952Objects1);
{for(var i = 0, len = gdjs.EndingCode.GD_95951_9595outObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GD_95951_9595outObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EndingCode.GD_95952Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GD_95952Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1_in"), gdjs.EndingCode.GD_95951_9595inObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndingCode.GD_95951_9595inObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GD_95951_9595inObjects1[i].isPlayed() ) {
        isConditionTrue_0 = true;
        gdjs.EndingCode.GD_95951_9595inObjects1[k] = gdjs.EndingCode.GD_95951_9595inObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GD_95951_9595inObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(98955732);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "My file\\assets\\VDO\\minimal-pop-click-ui-9-198309.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs.EndingCode.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndingCode.GD_95952Objects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GD_95952Objects1[i].isPlayed() ) {
        isConditionTrue_0 = true;
        gdjs.EndingCode.GD_95952Objects1[k] = gdjs.EndingCode.GD_95952Objects1[i];
        ++k;
    }
}
gdjs.EndingCode.GD_95952Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(98955652);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "My file\\assets\\VDO\\minimal-pop-click-ui-9-198309.mp3", false, 20, 1);
}}

}


};

gdjs.EndingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndingCode.GDAndyOObjects1.length = 0;
gdjs.EndingCode.GDAndyOObjects2.length = 0;
gdjs.EndingCode.GDAndyOObjects3.length = 0;
gdjs.EndingCode.GDAndyOObjects4.length = 0;
gdjs.EndingCode.GDAndyOObjects5.length = 0;
gdjs.EndingCode.GDAndyOObjects6.length = 0;
gdjs.EndingCode.GDFadeObjects1.length = 0;
gdjs.EndingCode.GDFadeObjects2.length = 0;
gdjs.EndingCode.GDFadeObjects3.length = 0;
gdjs.EndingCode.GDFadeObjects4.length = 0;
gdjs.EndingCode.GDFadeObjects5.length = 0;
gdjs.EndingCode.GDFadeObjects6.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects1.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects2.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects3.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects4.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects5.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects6.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects1.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects2.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects3.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects4.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects5.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects6.length = 0;
gdjs.EndingCode.GD_95952Objects1.length = 0;
gdjs.EndingCode.GD_95952Objects2.length = 0;
gdjs.EndingCode.GD_95952Objects3.length = 0;
gdjs.EndingCode.GD_95952Objects4.length = 0;
gdjs.EndingCode.GD_95952Objects5.length = 0;
gdjs.EndingCode.GD_95952Objects6.length = 0;
gdjs.EndingCode.GDShowVariableObjects1.length = 0;
gdjs.EndingCode.GDShowVariableObjects2.length = 0;
gdjs.EndingCode.GDShowVariableObjects3.length = 0;
gdjs.EndingCode.GDShowVariableObjects4.length = 0;
gdjs.EndingCode.GDShowVariableObjects5.length = 0;
gdjs.EndingCode.GDShowVariableObjects6.length = 0;

gdjs.EndingCode.eventsList5(runtimeScene);
gdjs.EndingCode.GDAndyOObjects1.length = 0;
gdjs.EndingCode.GDAndyOObjects2.length = 0;
gdjs.EndingCode.GDAndyOObjects3.length = 0;
gdjs.EndingCode.GDAndyOObjects4.length = 0;
gdjs.EndingCode.GDAndyOObjects5.length = 0;
gdjs.EndingCode.GDAndyOObjects6.length = 0;
gdjs.EndingCode.GDFadeObjects1.length = 0;
gdjs.EndingCode.GDFadeObjects2.length = 0;
gdjs.EndingCode.GDFadeObjects3.length = 0;
gdjs.EndingCode.GDFadeObjects4.length = 0;
gdjs.EndingCode.GDFadeObjects5.length = 0;
gdjs.EndingCode.GDFadeObjects6.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects1.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects2.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects3.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects4.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects5.length = 0;
gdjs.EndingCode.GD_95951_9595inObjects6.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects1.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects2.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects3.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects4.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects5.length = 0;
gdjs.EndingCode.GD_95951_9595outObjects6.length = 0;
gdjs.EndingCode.GD_95952Objects1.length = 0;
gdjs.EndingCode.GD_95952Objects2.length = 0;
gdjs.EndingCode.GD_95952Objects3.length = 0;
gdjs.EndingCode.GD_95952Objects4.length = 0;
gdjs.EndingCode.GD_95952Objects5.length = 0;
gdjs.EndingCode.GD_95952Objects6.length = 0;
gdjs.EndingCode.GDShowVariableObjects1.length = 0;
gdjs.EndingCode.GDShowVariableObjects2.length = 0;
gdjs.EndingCode.GDShowVariableObjects3.length = 0;
gdjs.EndingCode.GDShowVariableObjects4.length = 0;
gdjs.EndingCode.GDShowVariableObjects5.length = 0;
gdjs.EndingCode.GDShowVariableObjects6.length = 0;


return;

}

gdjs['EndingCode'] = gdjs.EndingCode;
