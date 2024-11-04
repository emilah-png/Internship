function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Discrete-Time
Integrator */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:90"] = "Sim2Twin_controlsystem_pos_Discrete.st:39,46,56,58,66";
	/* <S1>/Gain */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:91"] = "Sim2Twin_controlsystem_pos_Discrete.st:44";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Sim2Twin_controlsystem_pos_Discrete"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/Joystick"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:88"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:88"] = {rtwname: "<S1>/Joystick"};
	this.rtwnameHashMap["<S1>/XInital"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:89"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:89"] = {rtwname: "<S1>/XInital"};
	this.rtwnameHashMap["<S1>/Discrete-Time Integrator"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:90"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:90"] = {rtwname: "<S1>/Discrete-Time Integrator"};
	this.rtwnameHashMap["<S1>/Gain"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:91"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:91"] = {rtwname: "<S1>/Gain"};
	this.rtwnameHashMap["<S1>/fPositionReferance_m"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:92"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:92"] = {rtwname: "<S1>/fPositionReferance_m"};
	this.rtwnameHashMap["<S1>/fVelocityReferance_ms"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:93"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:93"] = {rtwname: "<S1>/fVelocityReferance_ms"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
