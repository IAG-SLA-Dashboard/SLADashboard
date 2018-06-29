high_BI_alert = new Audio('sound/red_ins_res_sound/hi_bi_u.mp3');
high_SSRML_alert = new Audio('sound/red_ins_res_sound/hi_ssrml_u.mp3');
high_IB_alert = new Audio('sound/red_ins_res_sound/hi_ib_u.mp3');
high_DBA_alert = new Audio('sound/red_ins_res_sound/hi_dba_u.mp3');
high_WEBLOGIC_alert = new Audio('sound/red_ins_res_sound/hi_weblogic_u.mp3');
high_CARGO_alert = new Audio('sound/red_ins_res_sound/hi_cargo_u.mp3');

function redHighGroupSoundAlert(notifierArray){  
var redHighArray = notifierArray[1];
redHigh_BI_Count = redHighArray[0];
redHigh_SSRML_Count = redHighArray[1];
redHigh_IB_Count = redHighArray[2];
redHigh_DBA_Count = redHighArray[3];
redHigh_WEBLOGIC_Count = redHighArray[4];
redHigh_CARGO_Count = redHighArray[5];

  //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_IB_alert.play();
                high_IB_alert.addEventListener('ended', function() {
                    high_DBA_alert.play();
                    high_DBA_alert.addEventListener('ended', function() {
                        high_WEBLOGIC_alert.play();
                        high_WEBLOGIC_alert.addEventListener('ended', function() {
                            high_CARGO_alert.play();
                            high_CARGO_alert.addEventListener('ended', function() {
                                redMediumGroupSoundAlert(notifierArray);
                            });
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_IB_alert.play();
                high_IB_alert.addEventListener('ended', function() {
                    high_DBA_alert.play();
                    high_DBA_alert.addEventListener('ended', function() {
                        high_WEBLOGIC_alert.play();
                        high_WEBLOGIC_alert.addEventListener('ended', function() {
                            redMediumGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_IB_alert.play();
                high_IB_alert.addEventListener('ended', function() {
                    high_DBA_alert.play();
                    high_DBA_alert.addEventListener('ended', function() {
                        high_CARGO_alert.play();
                        high_CARGO_alert.addEventListener('ended', function() {
                            redMediumGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_IB_alert.play();
                high_IB_alert.addEventListener('ended', function() {
                    high_DBA_alert.play();
                    high_DBA_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_IB_alert.play();
                high_IB_alert.addEventListener('ended', function() {
                    high_WEBLOGIC_alert.play();
                    high_WEBLOGIC_alert.addEventListener('ended', function() {
                        high_CARGO_alert.play();
                        high_CARGO_alert.addEventListener('ended', function() {
                            redMediumGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_IB_alert.play();
                high_IB_alert.addEventListener('ended', function() {
                    high_WEBLOGIC_alert.play();
                    high_WEBLOGIC_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_IB_alert.play();
                high_IB_alert.addEventListener('ended', function() {
                    high_CARGO_alert.play();
                    high_CARGO_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_IB_alert.play();
                high_IB_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    high_WEBLOGIC_alert.play();
                    high_WEBLOGIC_alert.addEventListener('ended', function() {
                        high_CARGO_alert.play();
                        high_CARGO_alert.addEventListener('ended', function() {
                            redMediumGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    high_WEBLOGIC_alert.play();
                    high_WEBLOGIC_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    high_CARGO_alert.play();
                    high_CARGO_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    high_CARGO_alert.play();
                    high_CARGO_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                high_CARGO_alert.play();
                high_CARGO_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_SSRML_alert.play();
            high_SSRML_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    high_WEBLOGIC_alert.play();
                    high_WEBLOGIC_alert.addEventListener('ended', function() {
                        high_CARGO_alert.play();
                        high_CARGO_alert.addEventListener('ended', function() {
                            redMediumGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    high_WEBLOGIC_alert.play();
                    high_WEBLOGIC_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    high_CARGO_alert.play();
                    high_CARGO_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    high_CARGO_alert.play();
                    high_CARGO_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_CARGO_alert.play();
                high_CARGO_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    high_CARGO_alert.play();
                    high_CARGO_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                high_CARGO_alert.play();
                high_CARGO_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_WEBLOGIC_alert.play();
            high_WEBLOGIC_alert.addEventListener('ended', function() {
                high_CARGO_alert.play();
                high_CARGO_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_WEBLOGIC_alert.play();
            high_WEBLOGIC_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            high_CARGO_alert.play();
            high_CARGO_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (redHigh_BI_Count > 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_BI_alert.play();
        high_BI_alert.addEventListener('ended', function() {
            redMediumGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    high_WEBLOGIC_alert.play();
                    high_WEBLOGIC_alert.addEventListener('ended', function() {
                        high_CARGO_alert.play();
                        high_CARGO_alert.addEventListener('ended', function() {
                            redMediumGroupSoundAlert(notifierArray);
                        });
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    high_WEBLOGIC_alert.play();
                    high_WEBLOGIC_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    high_CARGO_alert.play();
                    high_CARGO_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_DBA_alert.play();
                high_DBA_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    high_CARGO_alert.play();
                    high_CARGO_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                high_CARGO_alert.play();
                high_CARGO_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_IB_alert.play();
            high_IB_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    high_CARGO_alert.play();
                    high_CARGO_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                high_CARGO_alert.play();
                high_CARGO_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_WEBLOGIC_alert.play();
            high_WEBLOGIC_alert.addEventListener('ended', function() {
                high_CARGO_alert.play();
                high_CARGO_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_WEBLOGIC_alert.play();
            high_WEBLOGIC_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            high_CARGO_alert.play();
            high_CARGO_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count > 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_SSRML_alert.play();
        high_SSRML_alert.addEventListener('ended', function() {
            redMediumGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_IB_alert.play();
        high_IB_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    high_CARGO_alert.play();
                    high_CARGO_alert.addEventListener('ended', function() {
                        redMediumGroupSoundAlert(notifierArray);
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_IB_alert.play();
        high_IB_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                high_WEBLOGIC_alert.play();
                high_WEBLOGIC_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_IB_alert.play();
        high_IB_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                high_CARGO_alert.play();
                high_CARGO_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_IB_alert.play();
        high_IB_alert.addEventListener('ended', function() {
            high_DBA_alert.play();
            high_DBA_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_IB_alert.play();
        high_IB_alert.addEventListener('ended', function() {
            high_WEBLOGIC_alert.play();
            high_WEBLOGIC_alert.addEventListener('ended', function() {
                high_CARGO_alert.play();
                high_CARGO_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_IB_alert.play();
        high_IB_alert.addEventListener('ended', function() {
            high_WEBLOGIC_alert.play();
            high_WEBLOGIC_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_IB_alert.play();
        high_IB_alert.addEventListener('ended', function() {
            high_CARGO_alert.play();
            high_CARGO_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count > 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_IB_alert.play();
        high_IB_alert.addEventListener('ended', function() {
            redMediumGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_DBA_alert.play();
        high_DBA_alert.addEventListener('ended', function() {
            high_WEBLOGIC_alert.play();
            high_WEBLOGIC_alert.addEventListener('ended', function() {
                high_CARGO_alert.play();
                high_CARGO_alert.addEventListener('ended', function() {
                    redMediumGroupSoundAlert(notifierArray);
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_DBA_alert.play();
        high_DBA_alert.addEventListener('ended', function() {
            high_WEBLOGIC_alert.play();
            high_WEBLOGIC_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_DBA_alert.play();
        high_DBA_alert.addEventListener('ended', function() {
            high_CARGO_alert.play();
            high_CARGO_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count > 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        high_DBA_alert.play();
        high_DBA_alert.addEventListener('ended', function() {
            redMediumGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count > 0) {
        high_WEBLOGIC_alert.play();
        high_WEBLOGIC_alert.addEventListener('ended', function() {
            high_CARGO_alert.play();
            high_CARGO_alert.addEventListener('ended', function() {
                redMediumGroupSoundAlert(notifierArray);
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count > 0 && redHigh_CARGO_Count == 0) {
        high_WEBLOGIC_alert.play();
        high_WEBLOGIC_alert.addEventListener('ended', function() {
            redMediumGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count > 0) {
        high_CARGO_alert.play();
        high_CARGO_alert.addEventListener('ended', function() {
            redMediumGroupSoundAlert(notifierArray);
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (redHigh_BI_Count == 0 && redHigh_SSRML_Count == 0 && redHigh_IB_Count == 0 && redHigh_DBA_Count == 0 && redHigh_WEBLOGIC_Count == 0 && redHigh_CARGO_Count == 0) {
        redMediumGroupSoundAlert(notifierArray);
    }

}