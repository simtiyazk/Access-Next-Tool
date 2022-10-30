window.veevaUtils = (function(veeva) {
    // Checking is the presentation is running in Veeva or in browser
    var isVeeva = navigator.userAgent.match(/iP(hone|ad)/i) != null;
    console.log('veeva presentation:', isVeeva);

    // https://developer.veevacrm.com/api/CLMLibrary/#gotoslide-key-presentation
    // TODO: For now it does not have to be used, we need to test it
    var gotoSlide = function(keymessage, tracking) {
        var keymsg = keymessage.replace(/\.zip/g, '');
        if(isVeeva){
            trackEvent(tracking.id, tracking.type, tracking.description, function(result) {
                if(keymessage!==''){
                    veeva.gotoSlide(keymessage, '');
                } 
            });
        }else{
            window.location.href = '/' + keymsg + '/index.html';
        }
        
    };

    var trackEvent = function(id, type, description, callback) {
        var myObject = {};
        myObject.Track_Element_Id_vod__c = id; // eslint-disable-line
        myObject.Track_Element_Description_vod__c = description; // eslint-disable-line
        myObject.Usage_Duration_vod__c = 0; // eslint-disable-line
        myObject.Answer_vod__c = ''; // eslint-disable-line
        myObject.Usage_Start_Time_vod__c = new Date(); // eslint-disable-line
        myObject.Track_Element_Type_vod__c = type; // eslint-disable-line
        veeva.createRecord('Call_Clickstream_vod__c', myObject, callback);
    };
    return {
        gotoSlide: gotoSlide,
        isVeeva: isVeeva,
        trackEvent: trackEvent
    };
})(com.veeva.clm);

// //utility properties and methods for veeva-library.js
// /*
//    veevaUtils.isVeeva                             : boolean that has determined if currently in Veeva environment
//    veevaUtils.trackEvent(id, type, description, callback)  : create record for tracked event
//    veevaUtils.trackPage()                         : create record of tracked page and updates record with duration
//    veevaUtils.trackVirtualPage(id, description)   : create record of tracked virtual page and update record with duration
//    veevaUtils.launchApprovedEmail(vault_id, template_num, fragment_nums)  : launch vault email with fragments
// */

// window.veevaUtils = (function(){

//    //private
//    var virtualInterval = -1,  // keep track of tracking duration
//        calls = [],            // Queued calls
//        self = {},             // returned object
//        touchclick = ('ontouchend' in document.documentElement) ? 'touchend' : (window.navigator.pointerEnabled) ? 'pointerup' : 'click'; // Handles Tap or click events

   
//    //----- public properties / methods ------//


//    //Boolean: if serving in the Veeva app
//    self.isVeeva = navigator.userAgent.match(/iP(hone|ad)/i) != null; console.log('veevaUtils.isVeeva: '+self.isVeeva);


//    /**
//     * This is an event call, with a zero duration. It's used for tracking
//     * things like clicks.
//     * 
//     * @param  {string} id          Track Element Id
//     * @param  {string} type        Track Element Type
//     * @param  {string} description Track Element Description
//     */
//    self.trackEvent = function(id, type, description, callback){
//        var obj = {
//            'Track_Element_Id_vod__c':          id,
//            'Track_Element_Type_vod__c':        type,
//            'Track_Element_Description_vod__c': description,
//            'Usage_Start_Time_vod__c':          new Date(),
//            'Usage_Duration_vod__c':            1
//        };

//        queue('create', 'Call_Clickstream_vod__c', null, obj, callback);
//    };


//    /**
//     * This is a page tracking call, that should be started at page load
//     * @param  {boolean} hasDuration   If true, duration will be tracked                            
//     */
//    self.trackPage = function(hasDuration) {
//       var obj = {
//         'Track_Element_Type_vod__c':        'Page View',
//         'Usage_Start_Time_vod__c':          new Date()
//       };
//       if (hasDuration === true) { obj.Usage_Duration_vod__c = 1; }

//       queue('create', 'Call_Clickstream_vod__c', null, obj, function(data) {
//          if (hasDuration === true) {
//             var duration = 1;

//             if (!data.Call_Clickstream_vod__c) {
//                data.Call_Clickstream_vod__c = { ID:'key_message_name' };
//             }

//             // Every second, we need to update the Duration field for this record
//             window.setInterval(function(){
//                duration++;
//                obj['Usage_Duration_vod__c'] = duration;

//                queue('update', 'Call_Clickstream_vod__c', data.Call_Clickstream_vod__c.ID, obj, noop);
//             }, 1000);
//          }
//       });
//    };


//    /**
//     * Track a section within a key message, like for tabs
//     * @param  {string} id          Track Virtual Page Id
//     * @param  {string} description Track Virtual Page Description
//     */
//    self.trackVirtualPage = function(id, description, hasDuration) {
//       // First clear the tracking of a previous virtual pageview
//       window.clearInterval( virtualInterval );

//       var obj = {
//          'Track_Element_Id_vod__c':          id,
//          'Track_Element_Description_vod__c': description,
//          'Track_Element_Type_vod__c':        'In-Page View',
//          'Usage_Start_Time_vod__c':          new Date()
//       };
//       if (hasDuration === true) { obj.Usage_Duration_vod__c = 1; }

//       queue('create', 'Call_Clickstream_vod__c', null, obj, function(data) {
//          if (hasDuration === true) {
//             var duration = 1;

//             if (!data.Call_Clickstream_vod__c) {
//                data.Call_Clickstream_vod__c = { ID:'key_message_name' };
//             }

//             // Every second, we need to update the Duration field for this record
//             virtualInterval = window.setInterval(function(){
//                duration++;
//                obj['Usage_Duration_vod__c'] = duration;

//                queue('update', 'Call_Clickstream_vod__c', data.Call_Clickstream_vod__c.ID, obj, noop);
//             }, 1000);
//          }
//       });
//    };


//    /**
//     * Launch email template with fragments
//     * @param  {string} vault_id                 veeva url sandbox (https://my-test-vault.veevavault.com)
//     * @param  {string} template_num             document number of email template
//     * @param  {array of strings} fragment_nums  array of document numbers of email fragments
//     */
//    self.launchApprovedEmail = function(vault_id, template_num, fragment_nums) {
//       var templateId = "",
//          fragmentIds = [],
//          fragmentLength = (fragment_nums && fragment_nums.constructor === Array) ? fragment_nums.length : 0,
//          fragmentCount = 0;

//       com.veeva.clm.getApprovedDocument(vault_id, template_num, templateCallback);

//       function templateCallback(result) {
//          templateId = (result.Approved_Document_vod__c) ? result.Approved_Document_vod__c.ID : template_num;

//          if (fragmentLength > 0) {
//             com.veeva.clm.getApprovedDocument(vault_id, fragment_nums[0], fragmentCallback);
//          } else {
//             com.veeva.clm.launchApprovedEmail(templateId, fragmentIds, noop);
//          }
//       }

//       function fragmentCallback(result) {
//          fragmentIds.push(
//             (result.Approved_Document_vod__c) ? [result.Approved_Document_vod__c.ID] : result.docNum
//          );
//          fragmentCount++;

//          if (fragmentCount < fragmentLength) {
//             com.veeva.clm.getApprovedDocument(vault_id, fragment_nums[fragmentCount], fragmentCallback);
//          } else {
//             com.veeva.clm.launchApprovedEmail(templateId, fragmentIds, noop);
//          }
//       }
//    }


//    //----- private methods ------//


//    /**
//     * Veeva can't take more than one action at a time, so we have to queue up each call
//     * @param  {string}   action   Something like 'Call_Clickstream_vod__c'
//     * @param  {string}   type     'update' or 'create'
//     * @param  {object}   obj      Tracking fields/values to send to Veeva
//     * @param  {Function} callback 
//     */
//    function queue(action, type, id, obj, callback){
//        var call = {
//            action:     action, 
//            type:       type, 
//            id:         id, 
//            obj:        obj, 
//            callback:   callback
//        };
//        calls.push( call );

//        // If this is the first item in the queue, go ahead and call it right away
//        if (calls.length == 1)
//            makeCall( call );
//    };


//    function makeCall(call){
//       switch( call.action ) {
//          case 'update':
//             com.veeva.clm.updateRecord(call.type, call.id, call.obj, queueCallback);
//             break;
//          case 'create':
//             com.veeva.clm.createRecord(call.type, call.obj, queueCallback);
//          break;
//       }
//       // If we're running in debug mode, we wanna make act like the records were successfully created/updated
//       if (self.debug === true)
//          queueCallback( {Call_Clickstream_vod__c: {ID: new Date().getTime()}} );
//    }


//    function queueCallback(data, _action){
//       // Call the original callback function
//       calls[0].callback( data );
//       // Remove the current item in the queue
//       calls.shift();

//       // If there's anything left in the queue, let's call it.
//       if (calls.length > 0)
//          makeCall( calls[0] );
//    }


//    /**
//     * A callback "ground".
//     */
//    function noop(data){
//        // Do nothing   
//    };


//    /**
//     * Enabling Veeva methods to react while serving outside of veeva app. More can be added as needed
//     * veeva methods being overridden: 
//     * com.veeva.clm.gotoSlide(keyMessage, presentation) //navigate to another keymessage slide
//     * com.veeva.clm.createRecord(apiName, jsonRecordObject, clmCallback)       : create new record
//     * com.veeva.clm.updateRecord(apiName, jsonRecordObject, clmCallback)       : update existing record
//     * com.veeva.clm.getApprovedDocument(vault_id, doc_num, clmCallback)        : get approved document
//     * com.veeva.clm.launchApprovedEmail(templateId, fragmentIds, clmCallback)  : launch veeva email
//    */

//    function overrideLinks() {
//       $('a[href^="veeva:gotoSlide("]').on(touchclick, function(e) {
//          e.preventDefault();
//          var target = $(e.currentTarget),
//               delay = (target.data('delay') !== undefined && $.isNumeric(target.data('delay'))) ? target.data('delay') : 0,
//               keyMessage = target.attr('href').slice(16,-1).split(',')[0].replace('.zip','');

//           if (self.isVeeva === true) {
//             setTimeout(function(){window.open(target.attr('href'))}, delay);  
//           }else {
//             setTimeout(function(){location.href = `../${keyMessage}/index.html`} , delay);  
//           }
//       });
//    }

//    function overrideVeevaLibrary() {

//       // com.veeva.clm.gotoSlide

//     //   com.veeva.clm.gotoSlide = function(keyMessage, presentation) { 
//     //      keyMessage = keyMessage.replace('.zip','');
//     //      document.location = `../${keyMessage}/${keyMessage}.html`;
//     //   };

      
//       // com.veeva.clm.createRecord

//       com.veeva.clm.createRecord = function(apiName, jsonRecordObject, clmCallback) { 
//          //console.log('createRecord: ', jsonRecordObject);

//          if (clmCallback) { clmCallback( jsonRecordObject ); }
//       };


//       // com.veeva.clm.updateRecord

//       com.veeva.clm.updateRecord = function(apiName, recordId, jsonRecordObject, clmCallback) { 
//          console.log('updateRecord: ', jsonRecordObject);

//          if (clmCallback) { clmCallback( jsonRecordObject ); }
//       };


//       // com.veeva.clm.getApprovedDocument

//       com.veeva.clm.getApprovedDocument = function(vault_id, doc_num, clmCallback) {
//          var obj = { vaultId:vault_id, docNum:doc_num };
//          console.log('getApprovedDocument: ', obj);

//          if (clmCallback) { clmCallback(obj); }
//       }


//       // com.veeva.clm.launchApprovedEmail

//       com.veeva.clm.launchApprovedEmail = function(templateId, fragmentIds, clmCallback) {
//          var obj = { templateId:templateId, fragmentIds:fragmentIds };
//          console.log('launcApprovedEmail:', obj);

//          if (clmCallback) { clmCallback(obj); }
//       }
//    }

//    // function findVeeva() {
//    //    try {
//    //       com.veeva.clm.getDataForCurrentObject('KeyMessage','Id', function(e){ 
//    //        console.log(e);
//    //        console.log('veevaUtils.isVeeva: '+self.isVeeva) 
//    //      });
//    //    } catch(err) {
//    //       self.isVeeva = false; 
//    //       console.log(err);
//    //       console.log('veevaUtils.isVeeva: '+self.isVeeva)
//    //       overrideVeevaLibrary();
//    //    }
//    // }

//    //----- init ------//

//    //findVeeva();
//    if (self.isVeeva === false) {
//      overrideVeevaLibrary();
//    }

//    overrideLinks();

//    return self;
// })();
