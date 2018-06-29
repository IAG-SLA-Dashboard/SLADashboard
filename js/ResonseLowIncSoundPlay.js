low_BI_alert = new Audio('sound/red_ins_res_sound/low-bi.mp3');
low_SSRML_alert = new Audio('sound/red_ins_res_sound/low-ssrml.mp3');
low_IB_alert = new Audio('sound/red_ins_res_sound/low-ib.mp3');
low_DBA_alert = new Audio('sound/red_ins_res_sound/low-dba.mp3');
low_WEBLOGIC_alert = new Audio('sound/red_ins_res_sound/low-weblogic.mp3');
low_CARGO_alert = new Audio('sound/red_ins_res_sound/low-cargo.mp3');

  function redLowGroupSoundAlert(notifierArray){
	  var redLowArray = notifierArray[3];
	  redLow_BI_Count = redLowArray[0];
	  redLow_SSRML_Count = redLowArray[1];
	  redLow_IB_Count = redLowArray[2];
	  redLow_DBA_Count = redLowArray[3];
	  redLow_WEBLOGIC_Count = redLowArray[4];
	  redLow_CARGO_Count = redLowArray[5];

   //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_IB_alert.play();
                low_IB_alert.addEventListener('ended', function() {
                    low_DBA_alert.play();
                    low_DBA_alert.addEventListener('ended', function() {
                        low_WEBLOGIC_alert.play();
                        low_WEBLOGIC_alert.addEventListener('ended', function() {
                            low_CARGO_alert.play();
                            low_CARGO_alert.addEventListener('ended', function() {
                                newGroupSoundAlert(notifierArray);
                            });
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_IB_alert.play();
                low_IB_alert.addEventListener('ended', function() {
                    low_DBA_alert.play();
                    low_DBA_alert.addEventListener('ended', function() {
                        low_WEBLOGIC_alert.play();
                        low_WEBLOGIC_alert.addEventListener('ended', function() {
                            newGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_IB_alert.play();
                low_IB_alert.addEventListener('ended', function() {
                    low_DBA_alert.play();
                    low_DBA_alert.addEventListener('ended', function() {
                        low_CARGO_alert.play();
                        low_CARGO_alert.addEventListener('ended', function() {
                            newGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_IB_alert.play();
                low_IB_alert.addEventListener('ended', function() {
                    low_DBA_alert.play();
                    low_DBA_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_IB_alert.play();
                low_IB_alert.addEventListener('ended', function() {
                    low_WEBLOGIC_alert.play();
                    low_WEBLOGIC_alert.addEventListener('ended', function() {
                        low_CARGO_alert.play();
                        low_CARGO_alert.addEventListener('ended', function() {
                            newGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_IB_alert.play();
                low_IB_alert.addEventListener('ended', function() {
                    low_WEBLOGIC_alert.play();
                    low_WEBLOGIC_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_IB_alert.play();
                low_IB_alert.addEventListener('ended', function() {
                    low_CARGO_alert.play();
                    low_CARGO_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_IB_alert.play();
                low_IB_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    low_WEBLOGIC_alert.play();
                    low_WEBLOGIC_alert.addEventListener('ended', function() {
                        low_CARGO_alert.play();
                        low_CARGO_alert.addEventListener('ended', function() {
                            newGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    low_WEBLOGIC_alert.play();
                    low_WEBLOGIC_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    low_CARGO_alert.play();
                    low_CARGO_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    low_CARGO_alert.play();
                    low_CARGO_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                low_CARGO_alert.play();
                low_CARGO_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_SSRML_alert.play();
            low_SSRML_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    low_WEBLOGIC_alert.play();
                    low_WEBLOGIC_alert.addEventListener('ended', function() {
                        low_CARGO_alert.play();
                        low_CARGO_alert.addEventListener('ended', function() {
                            newGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    low_WEBLOGIC_alert.play();
                    low_WEBLOGIC_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    low_CARGO_alert.play();
                    low_CARGO_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    low_CARGO_alert.play();
                    low_CARGO_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_CARGO_alert.play();
                low_CARGO_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    low_CARGO_alert.play();
                    low_CARGO_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                low_CARGO_alert.play();
                low_CARGO_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_WEBLOGIC_alert.play();
            low_WEBLOGIC_alert.addEventListener('ended', function() {
                low_CARGO_alert.play();
                low_CARGO_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_WEBLOGIC_alert.play();
            low_WEBLOGIC_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            low_CARGO_alert.play();
            low_CARGO_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redLow_BI_Count > 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_BI_alert.play();
        low_BI_alert.addEventListener('ended', function() {
            newGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    low_WEBLOGIC_alert.play();
                    low_WEBLOGIC_alert.addEventListener('ended', function() {
                        low_CARGO_alert.play();
                        low_CARGO_alert.addEventListener('ended', function() {
                            newGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    low_WEBLOGIC_alert.play();
                    low_WEBLOGIC_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    low_CARGO_alert.play();
                    low_CARGO_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_DBA_alert.play();
                low_DBA_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    low_CARGO_alert.play();
                    low_CARGO_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                low_CARGO_alert.play();
                low_CARGO_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_IB_alert.play();
            low_IB_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    low_CARGO_alert.play();
                    low_CARGO_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                low_CARGO_alert.play();
                low_CARGO_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_WEBLOGIC_alert.play();
            low_WEBLOGIC_alert.addEventListener('ended', function() {
                low_CARGO_alert.play();
                low_CARGO_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_WEBLOGIC_alert.play();
            low_WEBLOGIC_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            low_CARGO_alert.play();
            low_CARGO_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count > 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_SSRML_alert.play();
        low_SSRML_alert.addEventListener('ended', function() {
            newGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_IB_alert.play();
        low_IB_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    low_CARGO_alert.play();
                    low_CARGO_alert.addEventListener('ended', function() {
                        newGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_IB_alert.play();
        low_IB_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                low_WEBLOGIC_alert.play();
                low_WEBLOGIC_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_IB_alert.play();
        low_IB_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                low_CARGO_alert.play();
                low_CARGO_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_IB_alert.play();
        low_IB_alert.addEventListener('ended', function() {
            low_DBA_alert.play();
            low_DBA_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_IB_alert.play();
        low_IB_alert.addEventListener('ended', function() {
            low_WEBLOGIC_alert.play();
            low_WEBLOGIC_alert.addEventListener('ended', function() {
                low_CARGO_alert.play();
                low_CARGO_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_IB_alert.play();
        low_IB_alert.addEventListener('ended', function() {
            low_WEBLOGIC_alert.play();
            low_WEBLOGIC_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_IB_alert.play();
        low_IB_alert.addEventListener('ended', function() {
            low_CARGO_alert.play();
            low_CARGO_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count > 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_IB_alert.play();
        low_IB_alert.addEventListener('ended', function() {
            newGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_DBA_alert.play();
        low_DBA_alert.addEventListener('ended', function() {
            low_WEBLOGIC_alert.play();
            low_WEBLOGIC_alert.addEventListener('ended', function() {
                low_CARGO_alert.play();
                low_CARGO_alert.addEventListener('ended', function() {
                    newGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_DBA_alert.play();
        low_DBA_alert.addEventListener('ended', function() {
            low_WEBLOGIC_alert.play();
            low_WEBLOGIC_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_DBA_alert.play();
        low_DBA_alert.addEventListener('ended', function() {
            low_CARGO_alert.play();
            low_CARGO_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count > 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        low_DBA_alert.play();
        low_DBA_alert.addEventListener('ended', function() {
            newGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count > 0) {
        low_WEBLOGIC_alert.play();
        low_WEBLOGIC_alert.addEventListener('ended', function() {
            low_CARGO_alert.play();
            low_CARGO_alert.addEventListener('ended', function() {
                newGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count > 0 && redLow_CARGO_Count == 0) {
        low_WEBLOGIC_alert.play();
        low_WEBLOGIC_alert.addEventListener('ended', function() {
            newGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count > 0) {
        low_CARGO_alert.play();
        low_CARGO_alert.addEventListener('ended', function() {
            newGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redLow_BI_Count == 0 && redLow_SSRML_Count == 0 && redLow_IB_Count == 0 && redLow_DBA_Count == 0 && redLow_WEBLOGIC_Count == 0 && redLow_CARGO_Count == 0) {
        newGroupSoundAlert(notifierArray);
    }

}