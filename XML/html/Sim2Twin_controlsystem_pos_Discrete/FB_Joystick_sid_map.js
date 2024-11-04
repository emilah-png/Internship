function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:88"] = "Sim2Twin_controlsystem_pos_Discrete:87";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:89"] = "Sim2Twin_controlsystem_pos_Discrete:87";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:90"] = "Sim2Twin_controlsystem_pos_Discrete:87";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:91"] = "Sim2Twin_controlsystem_pos_Discrete:87";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:92"] = "Sim2Twin_controlsystem_pos_Discrete:87";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:93"] = "Sim2Twin_controlsystem_pos_Discrete:87";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
