medium_BI_alert = new Audio('sound/red_ins_res_sound/m-bi.mp3');
medium_SSRML_alert = new Audio('sound/red_ins_res_sound/m-ssrml.mp3');
medium_IB_alert = new Audio('sound/red_ins_res_sound/m-ib.mp3');
medium_DBA_alert = new Audio('sound/red_ins_res_sound/m-dba.mp3');
medium_WEBLOGIC_alert = new Audio('sound/red_ins_res_sound/m-weblogic.mp3');
medium_CARGO_alert = new Audio('sound/red_ins_res_sound/m-cargo.mp3');

function redMediumGroupSoundAlert(notifierArray){
	var redMediumArray = notifierArray[2];
	 redMedium_BI_Count = redMediumArray[0];
	redMedium_SSRML_Count = redMediumArray[1];	 
	redMedium_IB_Count = redMediumArray[2];
	redMedium_DBA_Count = redMediumArray[3];
	redMedium_WEBLOGIC_Count = redMediumArray[4];
	redMedium_CARGO_Count = redMediumArray[5];

    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_IB_alert.play();
                medium_IB_alert.addEventListener('ended', function() {
                    medium_DBA_alert.play();
                    medium_DBA_alert.addEventListener('ended', function() {
                        medium_WEBLOGIC_alert.play();
                        medium_WEBLOGIC_alert.addEventListener('ended', function() {
                            medium_CARGO_alert.play();
                            medium_CARGO_alert.addEventListener('ended', function() {
                                redLowGroupSoundAlert(notifierArray);
                            });
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_IB_alert.play();
                medium_IB_alert.addEventListener('ended', function() {
                    medium_DBA_alert.play();
                    medium_DBA_alert.addEventListener('ended', function() {
                        medium_WEBLOGIC_alert.play();
                        medium_WEBLOGIC_alert.addEventListener('ended', function() {
                            redLowGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_IB_alert.play();
                medium_IB_alert.addEventListener('ended', function() {
                    medium_DBA_alert.play();
                    medium_DBA_alert.addEventListener('ended', function() {
                        medium_CARGO_alert.play();
                        medium_CARGO_alert.addEventListener('ended', function() {
                            redLowGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_IB_alert.play();
                medium_IB_alert.addEventListener('ended', function() {
                    medium_DBA_alert.play();
                    medium_DBA_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_IB_alert.play();
                medium_IB_alert.addEventListener('ended', function() {
                    medium_WEBLOGIC_alert.play();
                    medium_WEBLOGIC_alert.addEventListener('ended', function() {
                        medium_CARGO_alert.play();
                        medium_CARGO_alert.addEventListener('ended', function() {
                            redLowGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_IB_alert.play();
                medium_IB_alert.addEventListener('ended', function() {
                    medium_WEBLOGIC_alert.play();
                    medium_WEBLOGIC_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_IB_alert.play();
                medium_IB_alert.addEventListener('ended', function() {
                    medium_CARGO_alert.play();
                    medium_CARGO_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_IB_alert.play();
                medium_IB_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    medium_WEBLOGIC_alert.play();
                    medium_WEBLOGIC_alert.addEventListener('ended', function() {
                        medium_CARGO_alert.play();
                        medium_CARGO_alert.addEventListener('ended', function() {
                            redLowGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    medium_WEBLOGIC_alert.play();
                    medium_WEBLOGIC_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    medium_CARGO_alert.play();
                    medium_CARGO_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    medium_CARGO_alert.play();
                    medium_CARGO_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                medium_CARGO_alert.play();
                medium_CARGO_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_SSRML_alert.play();
            medium_SSRML_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    medium_WEBLOGIC_alert.play();
                    medium_WEBLOGIC_alert.addEventListener('ended', function() {
                        medium_CARGO_alert.play();
                        medium_CARGO_alert.addEventListener('ended', function() {
                            redLowGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    medium_WEBLOGIC_alert.play();
                    medium_WEBLOGIC_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    medium_CARGO_alert.play();
                    medium_CARGO_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    medium_CARGO_alert.play();
                    medium_CARGO_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_CARGO_alert.play();
                medium_CARGO_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    medium_CARGO_alert.play();
                    medium_CARGO_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                medium_CARGO_alert.play();
                medium_CARGO_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_WEBLOGIC_alert.play();
            medium_WEBLOGIC_alert.addEventListener('ended', function() {
                medium_CARGO_alert.play();
                medium_CARGO_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_WEBLOGIC_alert.play();
            medium_WEBLOGIC_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            medium_CARGO_alert.play();
            medium_CARGO_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redMedium_BI_Count > 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_BI_alert.play();
        medium_BI_alert.addEventListener('ended', function() {
            redLowGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    medium_WEBLOGIC_alert.play();
                    medium_WEBLOGIC_alert.addEventListener('ended', function() {
                        medium_CARGO_alert.play();
                        medium_CARGO_alert.addEventListener('ended', function() {
                            redLowGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    medium_WEBLOGIC_alert.play();
                    medium_WEBLOGIC_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    medium_CARGO_alert.play();
                    medium_CARGO_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_DBA_alert.play();
                medium_DBA_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    medium_CARGO_alert.play();
                    medium_CARGO_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                medium_CARGO_alert.play();
                medium_CARGO_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_IB_alert.play();
            medium_IB_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    medium_CARGO_alert.play();
                    medium_CARGO_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                medium_CARGO_alert.play();
                medium_CARGO_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_WEBLOGIC_alert.play();
            medium_WEBLOGIC_alert.addEventListener('ended', function() {
                medium_CARGO_alert.play();
                medium_CARGO_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_WEBLOGIC_alert.play();
            medium_WEBLOGIC_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            medium_CARGO_alert.play();
            medium_CARGO_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count > 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_SSRML_alert.play();
        medium_SSRML_alert.addEventListener('ended', function() {
            redLowGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_IB_alert.play();
        medium_IB_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    medium_CARGO_alert.play();
                    medium_CARGO_alert.addEventListener('ended', function() {
                        redLowGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_IB_alert.play();
        medium_IB_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                medium_WEBLOGIC_alert.play();
                medium_WEBLOGIC_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_IB_alert.play();
        medium_IB_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                medium_CARGO_alert.play();
                medium_CARGO_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_IB_alert.play();
        medium_IB_alert.addEventListener('ended', function() {
            medium_DBA_alert.play();
            medium_DBA_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_IB_alert.play();
        medium_IB_alert.addEventListener('ended', function() {
            medium_WEBLOGIC_alert.play();
            medium_WEBLOGIC_alert.addEventListener('ended', function() {
                medium_CARGO_alert.play();
                medium_CARGO_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_IB_alert.play();
        medium_IB_alert.addEventListener('ended', function() {
            medium_WEBLOGIC_alert.play();
            medium_WEBLOGIC_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_IB_alert.play();
        medium_IB_alert.addEventListener('ended', function() {
            medium_CARGO_alert.play();
            medium_CARGO_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count > 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_IB_alert.play();
        medium_IB_alert.addEventListener('ended', function() {
            redLowGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_DBA_alert.play();
        medium_DBA_alert.addEventListener('ended', function() {
            medium_WEBLOGIC_alert.play();
            medium_WEBLOGIC_alert.addEventListener('ended', function() {
                medium_CARGO_alert.play();
                medium_CARGO_alert.addEventListener('ended', function() {
                    redLowGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_DBA_alert.play();
        medium_DBA_alert.addEventListener('ended', function() {
            medium_WEBLOGIC_alert.play();
            medium_WEBLOGIC_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_DBA_alert.play();
        medium_DBA_alert.addEventListener('ended', function() {
            medium_CARGO_alert.play();
            medium_CARGO_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count > 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        medium_DBA_alert.play();
        medium_DBA_alert.addEventListener('ended', function() {
            redLowGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count > 0) {
        medium_WEBLOGIC_alert.play();
        medium_WEBLOGIC_alert.addEventListener('ended', function() {
            medium_CARGO_alert.play();
            medium_CARGO_alert.addEventListener('ended', function() {
                redLowGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count > 0 && redMedium_CARGO_Count == 0) {
        medium_WEBLOGIC_alert.play();
        medium_WEBLOGIC_alert.addEventListener('ended', function() {
            redLowGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count > 0) {
        medium_CARGO_alert.play();
        medium_CARGO_alert.addEventListener('ended', function() {
            redLowGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redMedium_BI_Count == 0 && redMedium_SSRML_Count == 0 && redMedium_IB_Count == 0 && redMedium_DBA_Count == 0 && redMedium_WEBLOGIC_Count == 0 && redMedium_CARGO_Count == 0) {
        redLowGroupSoundAlert(notifierArray);
    }

}