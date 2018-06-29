BI_alert = new Audio('sound/soundnew/BI_alert.mp3');
SSRML_alert = new Audio('sound/soundnew/SSRML_alert.mp3');
IB_alert = new Audio('sound/soundnew/IB_alert.mp3');
DBA_alert = new Audio('sound/soundnew/DBA_alert.mp3');
WEBLOGIC_alert = new Audio('sound/soundnew/WEBLOGIC_alert.mp3');
CARGO_alert = new Audio('sound/soundnew/CARGO_alert.mp3');

function newGroupSoundAlert(BI_Count, SSRML_Count, IB_Count, DBA_Count, WEBLOGIC_Count, CARGO_Count) {
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    if (BI_Count > 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                IB_alert.play();
                IB_alert.addEventListener('ended', function() {
                    DBA_alert.play();
                    DBA_alert.addEventListener('ended', function() {
                        WEBLOGIC_alert.play();
                        WEBLOGIC_alert.addEventListener('ended', function() {
                            CARGO_alert.play();
                        });
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                IB_alert.play();
                IB_alert.addEventListener('ended', function() {
                    DBA_alert.play();
                    DBA_alert.addEventListener('ended', function() {
                        WEBLOGIC_alert.play();
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                IB_alert.play();
                IB_alert.addEventListener('ended', function() {
                    DBA_alert.play();
                    DBA_alert.addEventListener('ended', function() {
                        CARGO_alert.play();
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                IB_alert.play();
                IB_alert.addEventListener('ended', function() {
                    DBA_alert.play();
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                IB_alert.play();
                IB_alert.addEventListener('ended', function() {
                    WEBLOGIC_alert.play();
                    WEBLOGIC_alert.addEventListener('ended', function() {
                        CARGO_alert.play();
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                IB_alert.play();
                IB_alert.addEventListener('ended', function() {
                    WEBLOGIC_alert.play();
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                IB_alert.play();
                IB_alert.addEventListener('ended', function() {
                    CARGO_alert.play();
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                IB_alert.play();
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                DBA_alert.play();
                DBA_alert.addEventListener('ended', function() {
                    WEBLOGIC_alert.play();
                    WEBLOGIC_alert.addEventListener('ended', function() {
                        CARGO_alert.play();
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                DBA_alert.play();
                DBA_alert.addEventListener('ended', function() {
                    WEBLOGIC_alert.play();
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                DBA_alert.play();
                DBA_alert.addEventListener('ended', function() {
                    CARGO_alert.play();
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                DBA_alert.play();
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
                WEBLOGIC_alert.addEventListener('ended', function() {
                    CARGO_alert.play();
                });
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
            SSRML_alert.addEventListener('ended', function() {
                CARGO_alert.play();
            });
        });
    }
    //==================BI=N, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            SSRML_alert.play();
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                DBA_alert.play();
                DBA_alert.addEventListener('ended', function() {
                    WEBLOGIC_alert.play();
                    WEBLOGIC_alert.addEventListener('ended', function() {
                        CARGO_alert.play();
                    });
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                DBA_alert.play();
                DBA_alert.addEventListener('ended', function() {
                    WEBLOGIC_alert.play();
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                DBA_alert.play();
                DBA_alert.addEventListener('ended', function() {
                    CARGO_alert.play();
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                DBA_alert.play();
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
                WEBLOGIC_alert.addEventListener('ended', function() {
                    CARGO_alert.play();
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                CARGO_alert.play();
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            IB_alert.play();
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            DBA_alert.play();
            DBA_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
                WEBLOGIC_alert.addEventListener('ended', function() {
                    CARGO_alert.play();
                });
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            DBA_alert.play();
            DBA_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            DBA_alert.play();
            DBA_alert.addEventListener('ended', function() {
                CARGO_alert.play();
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            DBA_alert.play();
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            WEBLOGIC_alert.play();
            WEBLOGIC_alert.addEventListener('ended', function() {
                CARGO_alert.play();
            });
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            WEBLOGIC_alert.play();
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        BI_alert.play();
        BI_alert.addEventListener('ended', function() {
            CARGO_alert.play();
        });
    }
    //==================BI=N, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================			 
    else if (BI_Count > 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        BI_alert.play();
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                DBA_alert.play();
                DBA_alert.addEventListener('ended', function() {
                    WEBLOGIC_alert.play();
                    WEBLOGIC_alert.addEventListener('ended', function() {
                        CARGO_alert.play();
                    });
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                DBA_alert.play();
                DBA_alert.addEventListener('ended', function() {
                    WEBLOGIC_alert.play();
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                DBA_alert.play();
                DBA_alert.addEventListener('ended', function() {
                    CARGO_alert.play();
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                DBA_alert.play();
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
                WEBLOGIC_alert.addEventListener('ended', function() {
                    CARGO_alert.play();
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            IB_alert.play();
            IB_alert.addEventListener('ended', function() {
                CARGO_alert.play();
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            IB_alert.play();
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            DBA_alert.play();
            DBA_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
                WEBLOGIC_alert.addEventListener('ended', function() {
                    CARGO_alert.play();
                });
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            DBA_alert.play();
            DBA_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            DBA_alert.play();
            DBA_alert.addEventListener('ended', function() {
                CARGO_alert.play();
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            DBA_alert.play();
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            WEBLOGIC_alert.play();
            WEBLOGIC_alert.addEventListener('ended', function() {
                CARGO_alert.play();
            });
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            WEBLOGIC_alert.play();
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        SSRML_alert.play();
        SSRML_alert.addEventListener('ended', function() {
            CARGO_alert.play();
        });
    }
    //==================BI=0, SSRML=N, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count > 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        SSRML_alert.play();
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        IB_alert.play();
        IB_alert.addEventListener('ended', function() {
            DBA_alert.play();
            DBA_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
                WEBLOGIC_alert.addEventListener('ended', function() {
                    CARGO_alert.play();
                });
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        IB_alert.play();
        IB_alert.addEventListener('ended', function() {
            DBA_alert.play();
            DBA_alert.addEventListener('ended', function() {
                WEBLOGIC_alert.play();
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        IB_alert.play();
        IB_alert.addEventListener('ended', function() {
            DBA_alert.play();
            DBA_alert.addEventListener('ended', function() {
                CARGO_alert.play();
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        IB_alert.play();
        IB_alert.addEventListener('ended', function() {
            DBA_alert.play();
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        IB_alert.play();
        IB_alert.addEventListener('ended', function() {
            WEBLOGIC_alert.play();
            WEBLOGIC_alert.addEventListener('ended', function() {
                CARGO_alert.play();
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        IB_alert.play();
        IB_alert.addEventListener('ended', function() {
            WEBLOGIC_alert.play();
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        IB_alert.play();
        IB_alert.addEventListener('ended', function() {
            CARGO_alert.play();
        });
    }
    //==================BI=0, SSRML=0, IB.COM=N, DBA=0, WEBLOGIC=0, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count > 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        IB_alert.play();
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        DBA_alert.play();
        DBA_alert.addEventListener('ended', function() {
            WEBLOGIC_alert.play();
            WEBLOGIC_alert.addEventListener('ended', function() {
                CARGO_alert.play();
            });
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=N, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        DBA_alert.play();
        DBA_alert.addEventListener('ended', function() {
            WEBLOGIC_alert.play();
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        DBA_alert.play();
        DBA_alert.addEventListener('ended', function() {
            CARGO_alert.play();
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=N, WEBLOGIC=0, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count > 0 && WEBLOGIC_Count == 0 && CARGO_Count == 0) {
        DBA_alert.play();
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count > 0) {
        WEBLOGIC_alert.play();
        WEBLOGIC_alert.addEventListener('ended', function() {
            CARGO_alert.play();
        });
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=N, CARGO=0===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count > 0 && CARGO_Count == 0) {
        WEBLOGIC_alert.play();
    }
    //==================BI=0, SSRML=0, IB.COM=0, DBA=0, WEBLOGIC=0, CARGO=N===========================================		 
    else if (BI_Count == 0 && SSRML_Count == 0 && IB_Count == 0 && DBA_Count == 0 && WEBLOGIC_Count == 0 && CARGO_Count > 0) {
        CARGO_alert.play();
    }

}