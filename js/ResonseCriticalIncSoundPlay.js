critical_BI_alert = new Audio('sound/red_ins_res_sound/cr_bi_u.mp3');
critical_SSRML_alert = new Audio('sound/red_ins_res_sound/cr_ssrml_u.mp3');
critical_IB_alert = new Audio('sound/red_ins_res_sound/cr_ib_u.mp3');
critical_DBA_alert = new Audio('sound/red_ins_res_sound/cr_dba_u.mp3');
critical_WEBLOGIC_alert = new Audio('sound/red_ins_res_sound/cr_weblogic_u.mp3');
critical_CARGO_alert = new Audio('sound/red_ins_res_sound/cr_cargo_u.mp3');

function redCriticalGroupSoundAlert(notifierArray){
	var redCriticalArray = notifierArray[0];
	redCritical_BI_Count = redCriticalArray[0];
	redCritical_SSRML_Count = redCriticalArray[1];
	redCritical_IB_Count = redCriticalArray[2];
	redCritical_DBA_Count = redCriticalArray[3];
	redCritical_WEBLOGIC_Count = redCriticalArray[4];
	redCritical_CARGO_Count = redCriticalArray[5];
		
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_IB_alert.play();
                critical_IB_alert.addEventListener('ended', function() {
                    critical_DBA_alert.play();
                    critical_DBA_alert.addEventListener('ended', function() {
                        critical_WEBLOGIC_alert.play();
                        critical_WEBLOGIC_alert.addEventListener('ended', function() {
                            critical_CARGO_alert.play();
                            critical_CARGO_alert.addEventListener('ended', function() {
                                redHighGroupSoundAlert(notifierArray);
                            });
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_IB_alert.play();
                critical_IB_alert.addEventListener('ended', function() {
                    critical_DBA_alert.play();
                    critical_DBA_alert.addEventListener('ended', function() {
                        critical_WEBLOGIC_alert.play();
                        critical_WEBLOGIC_alert.addEventListener('ended', function() {
                            redHighGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_IB_alert.play();
                critical_IB_alert.addEventListener('ended', function() {
                    critical_DBA_alert.play();
                    critical_DBA_alert.addEventListener('ended', function() {
                        critical_CARGO_alert.play();
                        critical_CARGO_alert.addEventListener('ended', function() {
                            redHighGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_IB_alert.play();
                critical_IB_alert.addEventListener('ended', function() {
                    critical_DBA_alert.play();
                    critical_DBA_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_IB_alert.play();
                critical_IB_alert.addEventListener('ended', function() {
                    critical_WEBLOGIC_alert.play();
                    critical_WEBLOGIC_alert.addEventListener('ended', function() {
                        critical_CARGO_alert.play();
                        critical_CARGO_alert.addEventListener('ended', function() {
                            redHighGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_IB_alert.play();
                critical_IB_alert.addEventListener('ended', function() {
                    critical_WEBLOGIC_alert.play();
                    critical_WEBLOGIC_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_IB_alert.play();
                critical_IB_alert.addEventListener('ended', function() {
                    critical_CARGO_alert.play();
                    critical_CARGO_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_IB_alert.play();
                critical_IB_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    critical_WEBLOGIC_alert.play();
                    critical_WEBLOGIC_alert.addEventListener('ended', function() {
                        critical_CARGO_alert.play();
                        critical_CARGO_alert.addEventListener('ended', function() {
                            redHighGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    critical_WEBLOGIC_alert.play();
                    critical_WEBLOGIC_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    critical_CARGO_alert.play();
                    critical_CARGO_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    critical_CARGO_alert.play();
                    critical_CARGO_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                critical_CARGO_alert.play();
                critical_CARGO_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_SSRML_alert.play();
            critical_SSRML_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    critical_WEBLOGIC_alert.play();
                    critical_WEBLOGIC_alert.addEventListener('ended', function() {
                        critical_CARGO_alert.play();
                        critical_CARGO_alert.addEventListener('ended', function() {
                            redHighGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    critical_WEBLOGIC_alert.play();
                    critical_WEBLOGIC_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    critical_CARGO_alert.play();
                    critical_CARGO_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    critical_CARGO_alert.play();
                    critical_CARGO_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_CARGO_alert.play();
                critical_CARGO_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    critical_CARGO_alert.play();
                    critical_CARGO_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                critical_CARGO_alert.play();
                critical_CARGO_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_WEBLOGIC_alert.play();
            critical_WEBLOGIC_alert.addEventListener('ended', function() {
                critical_CARGO_alert.play();
                critical_CARGO_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_WEBLOGIC_alert.play();
            critical_WEBLOGIC_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            critical_CARGO_alert.play();
            critical_CARGO_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redCritical_BI_Count > 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_BI_alert.play();
        critical_BI_alert.addEventListener('ended', function() {
            redHighGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    critical_WEBLOGIC_alert.play();
                    critical_WEBLOGIC_alert.addEventListener('ended', function() {
                        critical_CARGO_alert.play();
                        critical_CARGO_alert.addEventListener('ended', function() {
                            redHighGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    critical_WEBLOGIC_alert.play();
                    critical_WEBLOGIC_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    critical_CARGO_alert.play();
                    critical_CARGO_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_DBA_alert.play();
                critical_DBA_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    critical_CARGO_alert.play();
                    critical_CARGO_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                critical_CARGO_alert.play();
                critical_CARGO_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_IB_alert.play();
            critical_IB_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    critical_CARGO_alert.play();
                    critical_CARGO_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                critical_CARGO_alert.play();
                critical_CARGO_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_WEBLOGIC_alert.play();
            critical_WEBLOGIC_alert.addEventListener('ended', function() {
                critical_CARGO_alert.play();
                critical_CARGO_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_WEBLOGIC_alert.play();
            critical_WEBLOGIC_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            critical_CARGO_alert.play();
            critical_CARGO_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count > 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_SSRML_alert.play();
        critical_SSRML_alert.addEventListener('ended', function() {
            redHighGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_IB_alert.play();
        critical_IB_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    critical_CARGO_alert.play();
                    critical_CARGO_alert.addEventListener('ended', function() {
                        redHighGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_IB_alert.play();
        critical_IB_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                critical_WEBLOGIC_alert.play();
                critical_WEBLOGIC_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_IB_alert.play();
        critical_IB_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                critical_CARGO_alert.play();
                critical_CARGO_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_IB_alert.play();
        critical_IB_alert.addEventListener('ended', function() {
            critical_DBA_alert.play();
            critical_DBA_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_IB_alert.play();
        critical_IB_alert.addEventListener('ended', function() {
            critical_WEBLOGIC_alert.play();
            critical_WEBLOGIC_alert.addEventListener('ended', function() {
                critical_CARGO_alert.play();
                critical_CARGO_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_IB_alert.play();
        critical_IB_alert.addEventListener('ended', function() {
            critical_WEBLOGIC_alert.play();
            critical_WEBLOGIC_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_IB_alert.play();
        critical_IB_alert.addEventListener('ended', function() {
            critical_CARGO_alert.play();
            critical_CARGO_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count > 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_IB_alert.play();
        critical_IB_alert.addEventListener('ended', function() {
            redHighGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_DBA_alert.play();
        critical_DBA_alert.addEventListener('ended', function() {
            critical_WEBLOGIC_alert.play();
            critical_WEBLOGIC_alert.addEventListener('ended', function() {
                critical_CARGO_alert.play();
                critical_CARGO_alert.addEventListener('ended', function() {
                    redHighGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_DBA_alert.play();
        critical_DBA_alert.addEventListener('ended', function() {
            critical_WEBLOGIC_alert.play();
            critical_WEBLOGIC_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_DBA_alert.play();
        critical_DBA_alert.addEventListener('ended', function() {
            critical_CARGO_alert.play();
            critical_CARGO_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count > 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        critical_DBA_alert.play();
        critical_DBA_alert.addEventListener('ended', function() {
            redHighGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count > 0) {
        critical_WEBLOGIC_alert.play();
        critical_WEBLOGIC_alert.addEventListener('ended', function() {
            critical_CARGO_alert.play();
            critical_CARGO_alert.addEventListener('ended', function() {
                redHighGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count > 0 && redCritical_CARGO_Count == 0) {
        critical_WEBLOGIC_alert.play();
        critical_WEBLOGIC_alert.addEventListener('ended', function() {
            redHighGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count > 0) {
        critical_CARGO_alert.play();
        critical_CARGO_alert.addEventListener('ended', function() {
            redHighGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redCritical_BI_Count == 0 && redCritical_SSRML_Count == 0 && redCritical_IB_Count == 0 && redCritical_DBA_Count == 0 && redCritical_WEBLOGIC_Count == 0 && redCritical_CARGO_Count == 0) {
        redHighGroupSoundAlert(notifierArray);
    }

}