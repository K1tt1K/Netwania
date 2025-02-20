gdjs.OPCode = {};
gdjs.OPCode.localVariables = [];
gdjs.OPCode.GDAndyOObjects1= [];
gdjs.OPCode.GDAndyOObjects2= [];
gdjs.OPCode.GDAndyOObjects3= [];
gdjs.OPCode.GDAndyOObjects4= [];
gdjs.OPCode.GDdialogueObjects1= [];
gdjs.OPCode.GDdialogueObjects2= [];
gdjs.OPCode.GDdialogueObjects3= [];
gdjs.OPCode.GDdialogueObjects4= [];
gdjs.OPCode.GDFadeObjects1= [];
gdjs.OPCode.GDFadeObjects2= [];
gdjs.OPCode.GDFadeObjects3= [];
gdjs.OPCode.GDFadeObjects4= [];
gdjs.OPCode.GDShowVariableObjects1= [];
gdjs.OPCode.GDShowVariableObjects2= [];
gdjs.OPCode.GDShowVariableObjects3= [];
gdjs.OPCode.GDShowVariableObjects4= [];


gdjs.OPCode.mapOfGDgdjs_9546OPCode_9546GDFadeObjects3Objects = Hashtable.newFrom({"Fade": gdjs.OPCode.GDFadeObjects3});
gdjs.OPCode.asyncCallback98919052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OPCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Selection", false);
}gdjs.OPCode.localVariables.length = 0;
}
gdjs.OPCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.OPCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.OPCode.asyncCallback98919052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OPCode.asyncCallback98918540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OPCode.localVariables);
gdjs.OPCode.GDFadeObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OPCode.mapOfGDgdjs_9546OPCode_9546GDFadeObjects3Objects, 0, 0, "");
}
{ //Subevents
gdjs.OPCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.OPCode.localVariables.length = 0;
}
gdjs.OPCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.OPCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.OPCode.asyncCallback98918540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OPCode.asyncCallback98917756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OPCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("AndyO"), gdjs.OPCode.GDAndyOObjects2);
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.OPCode.GDdialogueObjects2);
{for(var i = 0, len = gdjs.OPCode.GDdialogueObjects2.length ;i < len;++i) {
    gdjs.OPCode.GDdialogueObjects2[i].play();
}
}{for(var i = 0, len = gdjs.OPCode.GDAndyOObjects2.length ;i < len;++i) {
    gdjs.OPCode.GDAndyOObjects2[i].getBehavior("Animation").setAnimationName("Speak");
}
}
{ //Subevents
gdjs.OPCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.OPCode.localVariables.length = 0;
}
gdjs.OPCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OPCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.OPCode.asyncCallback98917756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OPCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(98917836);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.OPCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.OPCode.GDdialogueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OPCode.GDdialogueObjects1.length;i<l;++i) {
    if ( gdjs.OPCode.GDdialogueObjects1[i].isPlayed() ) {
        isConditionTrue_0 = true;
        gdjs.OPCode.GDdialogueObjects1[k] = gdjs.OPCode.GDdialogueObjects1[i];
        ++k;
    }
}
gdjs.OPCode.GDdialogueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(98919780);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "My file\\assets\\VDO\\minimal-pop-click-ui-9-198309.mp3", false, 20, 1);
}}

}


};

gdjs.OPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OPCode.GDAndyOObjects1.length = 0;
gdjs.OPCode.GDAndyOObjects2.length = 0;
gdjs.OPCode.GDAndyOObjects3.length = 0;
gdjs.OPCode.GDAndyOObjects4.length = 0;
gdjs.OPCode.GDdialogueObjects1.length = 0;
gdjs.OPCode.GDdialogueObjects2.length = 0;
gdjs.OPCode.GDdialogueObjects3.length = 0;
gdjs.OPCode.GDdialogueObjects4.length = 0;
gdjs.OPCode.GDFadeObjects1.length = 0;
gdjs.OPCode.GDFadeObjects2.length = 0;
gdjs.OPCode.GDFadeObjects3.length = 0;
gdjs.OPCode.GDFadeObjects4.length = 0;
gdjs.OPCode.GDShowVariableObjects1.length = 0;
gdjs.OPCode.GDShowVariableObjects2.length = 0;
gdjs.OPCode.GDShowVariableObjects3.length = 0;
gdjs.OPCode.GDShowVariableObjects4.length = 0;

gdjs.OPCode.eventsList3(runtimeScene);
gdjs.OPCode.GDAndyOObjects1.length = 0;
gdjs.OPCode.GDAndyOObjects2.length = 0;
gdjs.OPCode.GDAndyOObjects3.length = 0;
gdjs.OPCode.GDAndyOObjects4.length = 0;
gdjs.OPCode.GDdialogueObjects1.length = 0;
gdjs.OPCode.GDdialogueObjects2.length = 0;
gdjs.OPCode.GDdialogueObjects3.length = 0;
gdjs.OPCode.GDdialogueObjects4.length = 0;
gdjs.OPCode.GDFadeObjects1.length = 0;
gdjs.OPCode.GDFadeObjects2.length = 0;
gdjs.OPCode.GDFadeObjects3.length = 0;
gdjs.OPCode.GDFadeObjects4.length = 0;
gdjs.OPCode.GDShowVariableObjects1.length = 0;
gdjs.OPCode.GDShowVariableObjects2.length = 0;
gdjs.OPCode.GDShowVariableObjects3.length = 0;
gdjs.OPCode.GDShowVariableObjects4.length = 0;


return;

}

gdjs['OPCode'] = gdjs.OPCode;
