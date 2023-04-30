const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;
document.getElementById("p1"),innerHTML = dateTime

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

var n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();

hrs = addZero(n.getHours());
mins = addZero(n.getMinutes());
sec = addZero(n.getSeconds());
 

DateTime = document.getElementById("date").innerHTML = d + "/" + m + "/" + y + " " +  hrs + ":" + mins + ":" + sec ;

let saveFile = () => {

        // Get the data from each element on the form.
        const CDSID = document.getElementById('inputCDSID');
        const Calls_Chat = document.getElementById('inputCalls_Chat');
        const Issue = document.getElementById('inputIssue'); 
        const Troubleshooting_Steps = document.getElementById('inputTroubleshooting'); 
        const KBA = document.getElementById('inputKBA'); 
        const KA = document.getElementById('inputKA'); 
        const Resolved = document.getElementById('inputResolved'); 
        const Escalaltion_Required  = document.getElementById('inputEscalaltion_Required'); 
        const Escalaltedto = document.getElementById('inputEscalaltedto'); 
		
        
        // This variable stores all the data.
        let data = 
            "\r User's CDSID:" + CDSID.value + ' \r\n ' +   
            'Mode of Contact: ' + Calls_Chat.value + ' \r\n ' + 
            'Issue: ' + Issue.value + ' \r\n ' + 
            'Description:'  + Description.value + ' \r\n ' + 
            'KBA:' + KBA.value + ' \r\n ' + 
			'KA Section Refered:' + KA.value + ' \r\n ' + 
            'Issue Resolved:' + Resolved.value + ' \r\n ' + 
            'Escalalted:'  + Escalaltion_Required.value + ' \r\n ' + 
            'Escalaltedto:'  + Escalaltedto.value + ' \r\n ' ;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName =  DateTime+" "+CDSID.value +'.txt';	   // The file to save the data.
  
        let newLink = document.createElement("a");
        newLink.download = sFileName;
  
        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }
  
        newLink.click(); 
    }
	
	function copyData() {
	 // Get the data from each element on the form.
        const CDSID = document.getElementById('inputCDSID');
        const Calls_Chat = document.getElementById('inputCalls_Chat');
        const Issue = document.getElementById('inputIssue'); 
        const Troubleshooting_Steps = document.getElementById('inputTroubleshooting'); 
        const KBA = document.getElementById('inputKBA'); 
        const KA = document.getElementById('inputKA'); 
        const Resolved = document.getElementById('inputResolved'); 
        const Escalaltion_Required  = document.getElementById('inputEscalaltion_Required'); 
        const Escalaltedto = document.getElementById('inputEscalaltedto'); 
		
        
        // This variable stores all the data.
        let data = 
            "\r User's CDSID:" + CDSID.value + ' \r\n ' +   
            'Mode of Contact: ' + Calls_Chat.value + ' \r\n ' + 
            'Issue: ' + Issue.value + ' \r\n ' + 
            'Description:'  + Description.value + ' \r\n ' + 
            'KBA:' + KBA.value + ' \r\n ' + 
			'KA Section Refered:' + KA.value + ' \r\n ' + 
            'Issue Resolved:' + Resolved.value + ' \r\n ' + 
            'Escalalted:'  + Escalaltion_Required.value + ' \r\n ' + 
            'Escalaltedto:'  + Escalaltedto.value + ' \r\n ' ;
        
        
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(data);
  }
 