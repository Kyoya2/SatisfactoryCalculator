
// @ts-check

/* This file is auto-generated! */

/** @import {Fraction} from "mathjs" */

/**
 * @typedef {string} GameObjectId
 * @typedef {{item_name: GameObjectId, amount: Fraction}} CountedItem
 * @typedef {{
 *      name: GameObjectId,
 *      ingredients: CountedItem[],
 *      duration: Fraction,
 *      is_alternate: boolean,
 *      produced_in: string[]
 * }} Recipe
 *
 * @typedef {{
 *      name: string,
 *      speed: Fraction
 * }} Transporter
 *
 * @typedef {{
 *      id: string,
 *      name: string,
 *      recipes: Recipe[],
 *      form: "SOLID" | "LIQUID" | "GAS"
 * }} CraftingObject
 */

/**
 * @type {{
 *      crafting_objects: Object.<GameObjectId, CraftingObject>,
 *      crafting_products: GameObjectId[],
 *      crafting_ingredients: GameObjectId[],
 *      transporters: {
 *          conveyor_belts: Transporter[],
 *          pipelines: Transporter[]
 *      },
 *  }}
 */
const game_data = {
    "crafting_ingredients": [
        "Desc_CircuitBoardHighSpeed_C",
        "Desc_SpaceElevatorPart_5_C",
        "Desc_AluminumPlate_C",
        "Desc_AlienProtein_C",
        "Desc_AluminaSolution_C",
        "Desc_AluminumCasing_C",
        "Desc_AluminumIngot_C",
        "Desc_AluminumScrap_C",
        "Desc_SpaceElevatorPart_7_C",
        "Desc_SpaceElevatorPart_3_C",
        "Desc_Shroom_C",
        "Desc_Battery_C",
        "Desc_OreBauxite_C",
        "Desc_Nut_C",
        "Desc_GenericBiomass_C",
        "Desc_Gunpowder_C",
        "Desc_XmasBall2_C",
        "Desc_Crystal_C",
        "Desc_Cable_C",
        "Desc_CandyCane_C",
        "Desc_GoldIngot_C",
        "Desc_OreGold_C",
        "Desc_CircuitBoard_C",
        "Desc_Coal_C",
        "Desc_CompactedCoal_C",
        "Desc_Computer_C",
        "Desc_Cement_C",
        "Desc_CoolingSystem_C",
        "Desc_XmasBall3_C",
        "Desc_CopperIngot_C",
        "Desc_OreCopper_C",
        "Desc_CopperDust_C",
        "Desc_CopperSheet_C",
        "Desc_LiquidOil_C",
        "Desc_CrystalOscillator_C",
        "Desc_DarkMatter_C",
        "Desc_DarkEnergy_C",
        "Desc_Diamond_C",
        "Desc_DissolvedSilica_C",
        "Desc_ElectromagneticControlRod_C",
        "Desc_FluidCanister_C",
        "Desc_GasTank_C",
        "Desc_SteelPlateReinforced_C",
        "Desc_PlutoniumCell_C",
        "Desc_UraniumCell_C",
        "Desc_QuantumEnergy_C",
        "Desc_Snow_C",
        "Desc_XmasBow_C",
        "Desc_Gift_C",
        "Desc_XmasBallCluster_C",
        "Desc_XmasBranch_C",
        "Desc_XmasWreath_C",
        "Desc_Fabric_C",
        "Desc_FicsiteIngot_C",
        "Desc_FicsiteMesh_C",
        "Desc_Ficsonium_C",
        "Desc_LiquidFuel_C",
        "Desc_ModularFrameFused_C",
        "Desc_Filter_C",
        "Desc_HatcherParts_C",
        "Desc_AluminumPlateReinforced_C",
        "Desc_ModularFrameHeavy_C",
        "Desc_HeavyOilResidue_C",
        "Desc_HighSpeedConnector_C",
        "Desc_HogParts_C",
        "Desc_IonizedFuel_C",
        "Desc_XmasBall4_C",
        "Desc_IronIngot_C",
        "Desc_OreIron_C",
        "Desc_IronPlate_C",
        "Desc_SpikedRebar_C",
        "Desc_IronRod_C",
        "Desc_Leaves_C",
        "Desc_Stone_C",
        "Desc_LiquidBiofuel_C",
        "Desc_SpaceElevatorPart_6_C",
        "Desc_WAT2_C",
        "Desc_SpaceElevatorPart_4_C",
        "Desc_ModularFrame_C",
        "Desc_Motor_C",
        "Desc_Mycelia_C",
        "Desc_TemporalProcessor_C",
        "Desc_NitricAcid_C",
        "Desc_NitrogenGas_C",
        "Desc_NobeliskExplosive_C",
        "Desc_SpaceElevatorPart_9_C",
        "BP_EquipmentDescriptorObjectScanner_C",
        "Desc_PackagedAlumina_C",
        "Desc_Fuel_C",
        "Desc_PackagedOilResidue_C",
        "Desc_PackagedIonizedFuel_C",
        "Desc_PackagedBiofuel_C",
        "Desc_PackagedNitricAcid_C",
        "Desc_PackagedNitrogenGas_C",
        "Desc_PackagedOil_C",
        "Desc_PackagedRocketFuel_C",
        "Desc_PackagedSulfuricAcid_C",
        "Desc_TurboFuel_C",
        "Desc_PackagedWater_C",
        "Desc_Berry_C",
        "Desc_PetroleumCoke_C",
        "Desc_Plastic_C",
        "Desc_PlutoniumPellet_C",
        "Desc_PlutoniumWaste_C",
        "Desc_PolymerResin_C",
        "BP_ItemDescriptorPortableMiner_C",
        "Desc_CrystalShard_C",
        "Desc_PressureConversionCube_C",
        "Desc_Crystal_mk3_C",
        "Desc_QuartzCrystal_C",
        "Desc_HighSpeedWire_C",
        "Desc_ModularFrameLightweight_C",
        "Desc_RawQuartz_C",
        "Desc_SAMIngot_C",
        "Desc_XmasBall1_C",
        "Desc_IronPlateReinforced_C",
        "Desc_CartridgeStandard_C",
        "Desc_RocketFuel_C",
        "Desc_Rotor_C",
        "Desc_Rubber_C",
        "Desc_SAM_C",
        "Desc_SAMFluctuator_C",
        "Desc_IronScrew_C",
        "Desc_Silica_C",
        "Desc_SingularityCell_C",
        "Desc_SpaceElevatorPart_1_C",
        "Desc_GunpowderMK2_C",
        "Desc_Biofuel_C",
        "Desc_WAT1_C",
        "Desc_SpitterParts_C",
        "Desc_Stator_C",
        "Desc_SteelPlate_C",
        "Desc_SteelIngot_C",
        "Desc_SteelPipe_C",
        "Desc_StingerParts_C",
        "Desc_Sulfur_C",
        "Desc_SulfuricAcid_C",
        "Desc_ComputerSuper_C",
        "Desc_QuantumOscillator_C",
        "Desc_SpaceElevatorPart_8_C",
        "Desc_TimeCrystal_C",
        "Desc_MotorLightweight_C",
        "Desc_LiquidTurboFuel_C",
        "Desc_OreUranium_C",
        "Desc_NuclearWaste_C",
        "Desc_SpaceElevatorPart_2_C",
        "Desc_Water_C",
        "Desc_Wire_C",
        "Desc_Wood_C",
        "BP_EquipmentDescriptorShockShank_C",
        "Desc_Crystal_mk2_C"
    ],
    "crafting_objects": {
        "BP_EqDescZipLine_C": {
            "form": "SOLID",
            "id": "BP_EqDescZipLine_C",
            "name": "Zipline",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 40
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "BP_EquipmentDescriptorShockShank_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 30
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_IronRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_Cable_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Zipline",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorCandyCane_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorCandyCane_C",
            "name": "Candy Cane Basher",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 80
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "BP_EquipmentDescriptorShockShank_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25
                            },
                            "item_name": "Desc_CandyCane_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 15
                            },
                            "item_name": "Desc_Gift_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Candy Cane Basher",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorGasmask_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorGasmask_C",
            "name": "Gas Mask",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_Fabric_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_CopperSheet_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_SteelPipe_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Gas Mask",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorHazmatSuit_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorHazmatSuit_C",
            "name": "Hazmat Suit",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 120
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_Rubber_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_Plastic_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_AluminumPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_Fabric_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Hazmat Suit",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorHoverPack_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorHoverPack_C",
            "name": "Hoverpack",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 120
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 8
                            },
                            "item_name": "Desc_Motor_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_ModularFrameHeavy_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 8
                            },
                            "item_name": "Desc_Computer_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 40
                            },
                            "item_name": "Desc_AluminumPlate_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Hoverpack",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorJetPack_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorJetPack_C",
            "name": "Jetpack",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_Motor_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_SteelPipe_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25
                            },
                            "item_name": "Desc_IronPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_Wire_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Jetpack",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorJumpingStilts_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorJumpingStilts_C",
            "name": "Blade Runners",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_Silica_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_ModularFrame_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_Rotor_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Blade Runners",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorNobeliskDetonator_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorNobeliskDetonator_C",
            "name": "Nobelisk Detonator",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 80
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "BP_EquipmentDescriptorObjectScanner_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_SteelPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_Cable_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Nobelisk Detonator",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorObjectScanner_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorObjectScanner_C",
            "name": "Object Scanner",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 40
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_Wire_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_IronScrew_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Object Scanner",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorRifle_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorRifle_C",
            "name": "Rifle",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 120
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Motor_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_Rubber_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25
                            },
                            "item_name": "Desc_SteelPipe_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 250
                            },
                            "item_name": "Desc_IronScrew_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Rifle",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorShockShank_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorShockShank_C",
            "name": "Xeno-Zapper",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 40
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_IronRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 15
                            },
                            "item_name": "Desc_Cable_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_Wire_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Xeno-Zapper",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_EquipmentDescriptorStunSpear_C": {
            "form": "SOLID",
            "id": "BP_EquipmentDescriptorStunSpear_C",
            "name": "Xeno-Basher",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 80
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "BP_EquipmentDescriptorShockShank_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_ModularFrame_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25
                            },
                            "item_name": "Desc_IronRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 500
                            },
                            "item_name": "Desc_Wire_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Xeno-Basher",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "BP_ItemDescriptorPortableMiner_C": {
            "form": "SOLID",
            "id": "BP_ItemDescriptorPortableMiner_C",
            "name": "Portable Miner",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 40
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_IronPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_IronRod_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Portable Miner",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_SteelPipe_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_IronPlate_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Automated Miner",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_AlienDNACapsule_C": {
            "form": "SOLID",
            "id": "Desc_AlienDNACapsule_C",
            "name": "Alien DNA Capsule",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_AlienProtein_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Alien DNA Capsule",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                }
            ]
        },
        "Desc_AlienPowerFuel_C": {
            "form": "SOLID",
            "id": "Desc_AlienPowerFuel_C",
            "name": "Alien Power Matrix",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_SAMFluctuator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_CrystalShard_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_QuantumOscillator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 24000
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Alien Power Matrix",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                }
            ]
        },
        "Desc_AlienProtein_C": {
            "form": "SOLID",
            "id": "Desc_AlienProtein_C",
            "name": "Alien Protein",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_HatcherParts_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Hatcher Protein",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_StingerParts_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Stinger Protein",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_SpitterParts_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Spitter Protein",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_HogParts_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Hog Protein",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                }
            ]
        },
        "Desc_AluminaSolution_C": {
            "form": "LIQUID",
            "id": "Desc_AluminaSolution_C",
            "name": "Alumina Solution",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_OreBauxite_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Alumina Solution",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedAlumina_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Alumina Solution",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 4,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 6,
                                "n": 5
                            },
                            "item_name": "Desc_OreBauxite_C"
                        },
                        {
                            "amount": {
                                "d": 6,
                                "n": 5
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Sloppy Alumina",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_AluminumCasing_C": {
            "form": "SOLID",
            "id": "Desc_AluminumCasing_C",
            "name": "Aluminum Casing",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_AluminumIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Aluminum Casing",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 15,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 4
                            },
                            "item_name": "Desc_AluminumIngot_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_CopperIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Alclad Casing",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_AluminumIngot_C": {
            "form": "SOLID",
            "id": "Desc_AluminumIngot_C",
            "name": "Aluminum Ingot",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_AluminumScrap_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 5
                            },
                            "item_name": "Desc_Silica_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Aluminum Ingot",
                    "produced_in": [
                        "Build_FoundryMk1_C",
                        "BP_WorkBenchComponent_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_AluminumScrap_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Pure Aluminum Ingot",
                    "produced_in": [
                        "Build_SmelterMk1_C"
                    ]
                }
            ]
        },
        "Desc_AluminumPlateReinforced_C": {
            "form": "SOLID",
            "id": "Desc_AluminumPlateReinforced_C",
            "name": "Heat Sink",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_AluminumPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_CopperSheet_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Heat Sink",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_AluminumCasing_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_Rubber_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Heat Exchanger",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_AluminumPlate_C": {
            "form": "SOLID",
            "id": "Desc_AluminumPlate_C",
            "name": "Alclad Aluminum Sheet",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_AluminumIngot_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_CopperIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Alclad Aluminum Sheet",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                }
            ]
        },
        "Desc_AluminumScrap_C": {
            "form": "SOLID",
            "id": "Desc_AluminumScrap_C",
            "name": "Aluminum Scrap",
            "recipes": [
                {
                    "duration": {
                        "d": 6,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_AluminaSolution_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_Coal_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Aluminum Scrap",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 3
                            },
                            "item_name": "Desc_AluminaSolution_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 1
                            },
                            "item_name": "Desc_PetroleumCoke_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Electrode Aluminum Scrap",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_OreBauxite_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_Coal_C"
                        },
                        {
                            "amount": {
                                "d": 6,
                                "n": 1
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 1
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Instant Scrap",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                }
            ]
        },
        "Desc_Battery_C": {
            "form": "SOLID",
            "id": "Desc_Battery_C",
            "name": "Battery",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 5
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_AluminaSolution_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_AluminumCasing_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Battery",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_Sulfur_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 7
                            },
                            "item_name": "Desc_AluminumPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Plastic_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_Wire_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Classic Battery",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Berry_C": {
            "form": "SOLID",
            "id": "Desc_Berry_C",
            "name": "Paleberry",
            "recipes": []
        },
        "Desc_Biofuel_C": {
            "form": "SOLID",
            "id": "Desc_Biofuel_C",
            "name": "Solid Biofuel",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_GenericBiomass_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Solid Biofuel",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "Build_AutomatedWorkBench_C"
                    ]
                }
            ]
        },
        "Desc_Cable_C": {
            "form": "SOLID",
            "id": "Desc_Cable_C",
            "name": "Cable",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Wire_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Cable",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 9,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 9,
                                "n": 5
                            },
                            "item_name": "Desc_Wire_C"
                        },
                        {
                            "amount": {
                                "d": 9,
                                "n": 2
                            },
                            "item_name": "Desc_HeavyOilResidue_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Coated Cable",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 11,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 11,
                                "n": 3
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        },
                        {
                            "amount": {
                                "d": 11,
                                "n": 2
                            },
                            "item_name": "Desc_Rubber_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Quickwire Cable",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 20,
                                "n": 9
                            },
                            "item_name": "Desc_Wire_C"
                        },
                        {
                            "amount": {
                                "d": 10,
                                "n": 3
                            },
                            "item_name": "Desc_Rubber_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Insulated Cable",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_CandyCane_C": {
            "form": "SOLID",
            "id": "Desc_CandyCane_C",
            "name": "Candy Cane",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_Gift_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Candy Cane",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_CartridgeChaos_C": {
            "form": "SOLID",
            "id": "Desc_CartridgeChaos_C",
            "name": "Turbo Rifle Ammo",
            "recipes": [
                {
                    "duration": {
                        "d": 25,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_CartridgeStandard_C"
                        },
                        {
                            "amount": {
                                "d": 50,
                                "n": 3
                            },
                            "item_name": "Desc_AluminumCasing_C"
                        },
                        {
                            "amount": {
                                "d": 50,
                                "n": 3
                            },
                            "item_name": "Desc_TurboFuel_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Turbo Rifle Ammo",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                },
                {
                    "duration": {
                        "d": 25,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_CartridgeStandard_C"
                        },
                        {
                            "amount": {
                                "d": 50,
                                "n": 3
                            },
                            "item_name": "Desc_AluminumCasing_C"
                        },
                        {
                            "amount": {
                                "d": 50,
                                "n": 3
                            },
                            "item_name": "Desc_LiquidTurboFuel_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Turbo Rifle Ammo",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                }
            ]
        },
        "Desc_CartridgeSmartProjectile_C": {
            "form": "SOLID",
            "id": "Desc_CartridgeSmartProjectile_C",
            "name": "Homing Rifle Ammo",
            "recipes": [
                {
                    "duration": {
                        "d": 5,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_CartridgeStandard_C"
                        },
                        {
                            "amount": {
                                "d": 10,
                                "n": 1
                            },
                            "item_name": "Desc_HighSpeedConnector_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Homing Rifle Ammo",
                    "produced_in": [
                        "Build_AssemblerMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_CartridgeStandard_C": {
            "form": "SOLID",
            "id": "Desc_CartridgeStandard_C",
            "name": "Rifle Ammo",
            "recipes": [
                {
                    "duration": {
                        "d": 5,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 1
                            },
                            "item_name": "Desc_CopperSheet_C"
                        },
                        {
                            "amount": {
                                "d": 15,
                                "n": 2
                            },
                            "item_name": "Desc_GunpowderMK2_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Rifle Ammo",
                    "produced_in": [
                        "Build_AssemblerMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_Cement_C": {
            "form": "SOLID",
            "id": "Desc_Cement_C",
            "name": "Concrete",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_Stone_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Concrete",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 4,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_Stone_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 5
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Wet Concrete",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 9,
                                "n": 10
                            },
                            "item_name": "Desc_Stone_C"
                        },
                        {
                            "amount": {
                                "d": 9,
                                "n": 2
                            },
                            "item_name": "Desc_Rubber_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Rubber Concrete",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 10,
                                "n": 3
                            },
                            "item_name": "Desc_Silica_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 6
                            },
                            "item_name": "Desc_Stone_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Fine Concrete",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Chainsaw_C": {
            "form": "SOLID",
            "id": "Desc_Chainsaw_C",
            "name": "Chainsaw",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25
                            },
                            "item_name": "Desc_IronRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 160
                            },
                            "item_name": "Desc_IronScrew_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 15
                            },
                            "item_name": "Desc_Cable_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Chainsaw",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_CircuitBoardHighSpeed_C": {
            "form": "SOLID",
            "id": "Desc_CircuitBoardHighSpeed_C",
            "name": "AI Limiter",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_CopperSheet_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "AI Limiter",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 15
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 15
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 7
                            },
                            "item_name": "Desc_Plastic_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Plastic AI Limiter",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_CircuitBoard_C": {
            "form": "SOLID",
            "id": "Desc_CircuitBoard_C",
            "name": "Circuit Board",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_CopperSheet_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_Plastic_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Circuit Board",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_Rubber_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 8
                            },
                            "item_name": "Desc_PetroleumCoke_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Electrode Circuit Board",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 7,
                        "n": 48
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 7,
                                "n": 10
                            },
                            "item_name": "Desc_Plastic_C"
                        },
                        {
                            "amount": {
                                "d": 7,
                                "n": 30
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Caterium Circuit Board",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 11
                            },
                            "item_name": "Desc_CopperSheet_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 11
                            },
                            "item_name": "Desc_Silica_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Silicon Circuit Board",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Coal_C": {
            "form": "SOLID",
            "id": "Desc_Coal_C",
            "name": "Coal",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_OreIron_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Coal (Iron)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_Stone_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Coal (Limestone)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 10,
                                "n": 1
                            },
                            "item_name": "Desc_Wood_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Charcoal",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 6,
                                "n": 5
                            },
                            "item_name": "Desc_GenericBiomass_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Biocoal",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_CompactedCoal_C": {
            "form": "SOLID",
            "id": "Desc_CompactedCoal_C",
            "name": "Compacted Coal",
            "recipes": [
                {
                    "duration": {
                        "d": 5,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Coal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Sulfur_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Compacted Coal",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 8000
                            },
                            "item_name": "Desc_RocketFuel_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalShard_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Ionized Fuel",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_LiquidTurboFuel_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_NitricAcid_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Rocket Fuel",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2251799813685248,
                        "n": 5404319552844595
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_LiquidFuel_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3000
                            },
                            "item_name": "Desc_NitrogenGas_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_Sulfur_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Coal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Nitro Rocket Fuel",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_PackagedRocketFuel_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_DarkMatter_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Alternate: Dark-Ion Fuel",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_ComputerSuper_C": {
            "form": "SOLID",
            "id": "Desc_ComputerSuper_C",
            "name": "Supercomputer",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 32
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_Computer_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_CircuitBoardHighSpeed_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_HighSpeedConnector_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 28
                            },
                            "item_name": "Desc_Plastic_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Supercomputer",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkBenchComponent_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 25
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_Computer_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_ElectromagneticControlRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_Battery_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25
                            },
                            "item_name": "Desc_Wire_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Super-State Computer",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_ModularFrameLightweight_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_CoolingSystem_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "OC Supercomputer",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Computer_C": {
            "form": "SOLID",
            "id": "Desc_Computer_C",
            "name": "Computer",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_CircuitBoard_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 8
                            },
                            "item_name": "Desc_Cable_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 16
                            },
                            "item_name": "Desc_Plastic_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Computer",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkBenchComponent_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 18
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_CircuitBoard_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalOscillator_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Crystal Computer",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 16
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_CircuitBoard_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 14
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_Rubber_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Caterium Computer",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_CoolingSystem_C": {
            "form": "SOLID",
            "id": "Desc_CoolingSystem_C",
            "name": "Cooling System",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 10
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_AluminumPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Rubber_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_Water_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25000
                            },
                            "item_name": "Desc_NitrogenGas_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Cooling System",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_AluminumPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Motor_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 12000
                            },
                            "item_name": "Desc_NitrogenGas_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Cooling Device",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                }
            ]
        },
        "Desc_CopperDust_C": {
            "form": "SOLID",
            "id": "Desc_CopperDust_C",
            "name": "Copper Powder",
            "recipes": [
                {
                    "duration": {
                        "d": 5,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_CopperIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Copper Powder",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                }
            ]
        },
        "Desc_CopperIngot_C": {
            "form": "SOLID",
            "id": "Desc_CopperIngot_C",
            "name": "Copper Ingot",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_OreCopper_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Copper Ingot",
                    "produced_in": [
                        "Build_SmelterMk1_C",
                        "BP_WorkBenchComponent_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 2
                            },
                            "item_name": "Desc_OreCopper_C"
                        },
                        {
                            "amount": {
                                "d": 15,
                                "n": 4
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Pure Copper Ingot",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_OreCopper_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_OreIron_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Copper Alloy Ingot",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 5
                            },
                            "item_name": "Desc_OreCopper_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_PetroleumCoke_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Tempered Copper Ingot",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 11,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 22,
                                "n": 9
                            },
                            "item_name": "Desc_OreCopper_C"
                        },
                        {
                            "amount": {
                                "d": 22,
                                "n": 5
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Leached Copper Ingot",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_CopperSheet_C": {
            "form": "SOLID",
            "id": "Desc_CopperSheet_C",
            "name": "Copper Sheet",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_CopperIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Copper Sheet",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_CopperIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Steamed Copper Sheet",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_CrystalOscillator_C": {
            "form": "SOLID",
            "id": "Desc_CrystalOscillator_C",
            "name": "Crystal Oscillator",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 18
                            },
                            "item_name": "Desc_QuartzCrystal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 14
                            },
                            "item_name": "Desc_Cable_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 5
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Crystal Oscillator",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkBenchComponent_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 32
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_QuartzCrystal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 7
                            },
                            "item_name": "Desc_Rubber_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_CircuitBoardHighSpeed_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Insulated Crystal Oscillator",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_CrystalShard_C": {
            "form": "SOLID",
            "id": "Desc_CrystalShard_C",
            "name": "Power Shard",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Crystal_mk2_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Power Shard (2)",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 1
                            },
                            "item_name": "Desc_Crystal_mk3_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Power Shard (5)",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_TimeCrystal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_DarkMatter_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 12
                            },
                            "item_name": "Desc_QuartzCrystal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 12000
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Synthetic Power Shard",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Crystal_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Power Shard (1)",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                }
            ]
        },
        "Desc_Crystal_C": {
            "form": "SOLID",
            "id": "Desc_Crystal_C",
            "name": "Blue Power Slug",
            "recipes": []
        },
        "Desc_Crystal_mk2_C": {
            "form": "SOLID",
            "id": "Desc_Crystal_mk2_C",
            "name": "Yellow Power Slug",
            "recipes": []
        },
        "Desc_Crystal_mk3_C": {
            "form": "SOLID",
            "id": "Desc_Crystal_mk3_C",
            "name": "Purple Power Slug",
            "recipes": []
        },
        "Desc_DarkEnergy_C": {
            "form": "GAS",
            "id": "Desc_DarkEnergy_C",
            "name": "Dark Matter Residue",
            "recipes": [
                {
                    "duration": {
                        "d": 1000,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 6000,
                                "n": 1
                            },
                            "item_name": "Desc_TimeCrystal_C"
                        },
                        {
                            "amount": {
                                "d": 6000,
                                "n": 1
                            },
                            "item_name": "Desc_DarkMatter_C"
                        },
                        {
                            "amount": {
                                "d": 1000,
                                "n": 1
                            },
                            "item_name": "Desc_QuartzCrystal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Synthetic Power Shard",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1000,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 4800,
                                "n": 1
                            },
                            "item_name": "Desc_SAMFluctuator_C"
                        },
                        {
                            "amount": {
                                "d": 8000,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalShard_C"
                        },
                        {
                            "amount": {
                                "d": 8000,
                                "n": 1
                            },
                            "item_name": "Desc_QuantumOscillator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Alien Power Matrix",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2500,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 10000,
                                "n": 1
                            },
                            "item_name": "Desc_Ficsonium_C"
                        },
                        {
                            "amount": {
                                "d": 10000,
                                "n": 1
                            },
                            "item_name": "Desc_ElectromagneticControlRod_C"
                        },
                        {
                            "amount": {
                                "d": 500,
                                "n": 1
                            },
                            "item_name": "Desc_FicsiteMesh_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Ficsonium Fuel Rod",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5000,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 25000,
                                "n": 1
                            },
                            "item_name": "Desc_SpaceElevatorPart_6_C"
                        },
                        {
                            "amount": {
                                "d": 25000,
                                "n": 1
                            },
                            "item_name": "Desc_TemporalProcessor_C"
                        },
                        {
                            "amount": {
                                "d": 25000,
                                "n": 1
                            },
                            "item_name": "Desc_QuantumOscillator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "AI Expansion Server",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1250,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5000,
                                "n": 1
                            },
                            "item_name": "Desc_TimeCrystal_C"
                        },
                        {
                            "amount": {
                                "d": 25000,
                                "n": 1
                            },
                            "item_name": "Desc_ComputerSuper_C"
                        },
                        {
                            "amount": {
                                "d": 5000,
                                "n": 3
                            },
                            "item_name": "Desc_FicsiteMesh_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Neural-Quantum Processor",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                },
                {
                    "duration": {
                        "d": 6250,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12500,
                                "n": 3
                            },
                            "item_name": "Desc_DarkMatter_C"
                        },
                        {
                            "amount": {
                                "d": 25000,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalOscillator_C"
                        },
                        {
                            "amount": {
                                "d": 25000,
                                "n": 9
                            },
                            "item_name": "Desc_AluminumPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Superposition Oscillator",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5000,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2000,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Dark Matter Residue",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_DarkMatter_C": {
            "form": "SOLID",
            "id": "Desc_DarkMatter_C",
            "name": "Dark Matter Crystal",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Diamond_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5000
                            },
                            "item_name": "Desc_DarkEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Dark Matter Crystal",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_TimeCrystal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2500
                            },
                            "item_name": "Desc_DarkEnergy_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Dark Matter Trap",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 10000
                            },
                            "item_name": "Desc_DarkEnergy_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Dark Matter Crystallization",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                }
            ]
        },
        "Desc_Diamond_C": {
            "form": "SOLID",
            "id": "Desc_Diamond_C",
            "name": "Diamonds",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_Coal_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Diamonds",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_Coal_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_TurboFuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Turbo Diamonds",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 8
                            },
                            "item_name": "Desc_Coal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_QuartzCrystal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Alternate: Pink Diamonds",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 24
                            },
                            "item_name": "Desc_PetroleumCoke_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Petroleum Diamonds",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Oil-Based Diamonds",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 12
                            },
                            "item_name": "Desc_Coal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 24
                            },
                            "item_name": "Desc_Stone_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Cloudy Diamonds",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                }
            ]
        },
        "Desc_DissolvedSilica_C": {
            "form": "LIQUID",
            "id": "Desc_DissolvedSilica_C",
            "name": "Dissolved Silica",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_RawQuartz_C"
                        },
                        {
                            "amount": {
                                "d": 6,
                                "n": 1
                            },
                            "item_name": "Desc_NitricAcid_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Quartz Purification",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_ElectromagneticControlRod_C": {
            "form": "SOLID",
            "id": "Desc_ElectromagneticControlRod_C",
            "name": "Electromagnetic Control Rod",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 15
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_Stator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_CircuitBoardHighSpeed_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Electromagnetic Control Rod",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 15
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Stator_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_HighSpeedConnector_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Electromagnetic Connection Rod",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Fabric_C": {
            "form": "SOLID",
            "id": "Desc_Fabric_C",
            "name": "Fabric",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Mycelia_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_GenericBiomass_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Fabric",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PolymerResin_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Polyester Fabric",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_FicsiteIngot_C": {
            "form": "SOLID",
            "id": "Desc_FicsiteIngot_C",
            "name": "Ficsite Ingot",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 24
                            },
                            "item_name": "Desc_IronIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Ficsite Ingot (Iron)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_AluminumIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Ficsite Ingot (Aluminum)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_GoldIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Ficsite Ingot (Caterium)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_FicsiteMesh_C": {
            "form": "SOLID",
            "id": "Desc_FicsiteMesh_C",
            "name": "Ficsite Trigon",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_FicsiteIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Ficsite Trigon",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_FicsoniumFuelRod_C": {
            "form": "SOLID",
            "id": "Desc_FicsoniumFuelRod_C",
            "name": "Ficsonium Fuel Rod",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Ficsonium_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_ElectromagneticControlRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 40
                            },
                            "item_name": "Desc_FicsiteMesh_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20000
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Ficsonium Fuel Rod",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                }
            ]
        },
        "Desc_Ficsonium_C": {
            "form": "SOLID",
            "id": "Desc_Ficsonium_C",
            "name": "Ficsonium",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PlutoniumWaste_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_SingularityCell_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20000
                            },
                            "item_name": "Desc_DarkEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Ficsonium",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                }
            ]
        },
        "Desc_Filter_C": {
            "form": "SOLID",
            "id": "Desc_Filter_C",
            "name": "Gas Filter",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Fabric_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_Coal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_IronPlate_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Gas Filter",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_Fireworks_Projectile_01_C": {
            "form": "SOLID",
            "id": "Desc_Fireworks_Projectile_01_C",
            "name": "Sweet Fireworks",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_XmasBranch_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_CandyCane_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Sweet Fireworks",
                    "produced_in": [
                        "BP_WorkshopComponent_C",
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Fireworks_Projectile_02_C": {
            "form": "SOLID",
            "id": "Desc_Fireworks_Projectile_02_C",
            "name": "Fancy Fireworks",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_XmasBranch_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_XmasBow_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Fancy Fireworks",
                    "produced_in": [
                        "BP_WorkshopComponent_C",
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Fireworks_Projectile_03_C": {
            "form": "SOLID",
            "id": "Desc_Fireworks_Projectile_03_C",
            "name": "Sparkly Fireworks",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_XmasBranch_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Snow_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Sparkly Fireworks",
                    "produced_in": [
                        "BP_WorkshopComponent_C",
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_FluidCanister_C": {
            "form": "SOLID",
            "id": "Desc_FluidCanister_C",
            "name": "Empty Canister",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Plastic_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Empty Canister",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_TurboFuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Turbofuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_SteelIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Steel Canister",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedBiofuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Liquid Biofuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Fuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Fuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedOil_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Oil",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedOilResidue_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Heavy Oil Residue",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedWater_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Water",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedAlumina_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Alumina Solution",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_IronPlate_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 1
                            },
                            "item_name": "Desc_CopperSheet_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Coated Iron Canister",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedSulfuricAcid_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Sulfuric Acid",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_Fuel_C": {
            "form": "SOLID",
            "id": "Desc_Fuel_C",
            "name": "Packaged Fuel",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_LiquidFuel_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_FluidCanister_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Fuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_HeavyOilResidue_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedWater_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Diluted Packaged Fuel",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_GasTank_C": {
            "form": "SOLID",
            "id": "Desc_GasTank_C",
            "name": "Empty Fluid Tank",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_AluminumIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Empty Fluid Tank",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedRocketFuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Rocket Fuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedIonizedFuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Ionized Fuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedNitricAcid_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Nitric Acid",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedNitrogenGas_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Nitrogen Gas",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_GenericBiomass_C": {
            "form": "SOLID",
            "id": "Desc_GenericBiomass_C",
            "name": "Biomass",
            "recipes": [
                {
                    "duration": {
                        "d": 5,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 1
                            },
                            "item_name": "Desc_Wood_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Biomass (Wood)",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Leaves_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Biomass (Leaves)",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 25,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 100,
                                "n": 1
                            },
                            "item_name": "Desc_AlienProtein_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Biomass (Alien Protein)",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 10,
                                "n": 1
                            },
                            "item_name": "Desc_Mycelia_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Biomass (Mycelia)",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                }
            ]
        },
        "Desc_Gift_C": {
            "form": "SOLID",
            "id": "Desc_Gift_C",
            "name": "FICSMAS Gift",
            "recipes": []
        },
        "Desc_GoldIngot_C": {
            "form": "SOLID",
            "id": "Desc_GoldIngot_C",
            "name": "Caterium Ingot",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_OreGold_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Caterium Ingot",
                    "produced_in": [
                        "Build_SmelterMk1_C",
                        "BP_WorkBenchComponent_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 5
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_OreGold_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Pure Caterium Ingot",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_OreGold_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_PetroleumCoke_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Tempered Caterium Ingot",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 5
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_OreGold_C"
                        },
                        {
                            "amount": {
                                "d": 6,
                                "n": 5
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Leached Caterium Ingot",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_GolfCartGold_C": {
            "form": "SOLID",
            "id": "Desc_GolfCartGold_C",
            "name": "Golden Factory Cart\u2122",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 15
                            },
                            "item_name": "Desc_GoldIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_IronRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Rotor_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Golden Factory Cart\u2122",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_GolfCart_C": {
            "form": "SOLID",
            "id": "Desc_GolfCart_C",
            "name": "Factory Cart\u2122",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_IronRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Rotor_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Factory Cart\u2122",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_GunpowderMK2_C": {
            "form": "SOLID",
            "id": "Desc_GunpowderMK2_C",
            "name": "Smokeless Powder",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Gunpowder_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_HeavyOilResidue_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Smokeless Powder",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_Gunpowder_C": {
            "form": "SOLID",
            "id": "Desc_Gunpowder_C",
            "name": "Black Powder",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Coal_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Sulfur_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Black Powder",
                    "produced_in": [
                        "Build_AssemblerMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 6,
                                "n": 1
                            },
                            "item_name": "Desc_Sulfur_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_CompactedCoal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Fine Black Powder",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_HatcherParts_C": {
            "form": "SOLID",
            "id": "Desc_HatcherParts_C",
            "name": "Hatcher Remains",
            "recipes": []
        },
        "Desc_HazmatFilter_C": {
            "form": "SOLID",
            "id": "Desc_HazmatFilter_C",
            "name": "Iodine-Infused Filter",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 16
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Filter_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 8
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_AluminumCasing_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Iodine-Infused Filter",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_HeavyOilResidue_C": {
            "form": "LIQUID",
            "id": "Desc_HeavyOilResidue_C",
            "name": "Heavy Oil Residue",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 4,
                                "n": 3
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Heavy Oil Residue",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Rubber",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Plastic",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedOilResidue_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Heavy Oil Residue",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Polymer Resin",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_HighSpeedConnector_C": {
            "form": "SOLID",
            "id": "Desc_HighSpeedConnector_C",
            "name": "High-Speed Connector",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 16
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 56
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_Cable_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_CircuitBoard_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "High-Speed Connector",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkBenchComponent_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 30
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 25
                            },
                            "item_name": "Desc_Silica_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_CircuitBoard_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Silicon High-Speed Connector",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_HighSpeedWire_C": {
            "form": "SOLID",
            "id": "Desc_HighSpeedWire_C",
            "name": "Quickwire",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 1
                            },
                            "item_name": "Desc_GoldIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Quickwire",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_GoldIngot_C"
                        },
                        {
                            "amount": {
                                "d": 12,
                                "n": 5
                            },
                            "item_name": "Desc_CopperIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Fused Quickwire",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_HogParts_C": {
            "form": "SOLID",
            "id": "Desc_HogParts_C",
            "name": "Hog Remains",
            "recipes": []
        },
        "Desc_IonizedFuel_C": {
            "form": "GAS",
            "id": "Desc_IonizedFuel_C",
            "name": "Ionized Fuel",
            "recipes": [
                {
                    "duration": {
                        "d": 2000,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_RocketFuel_C"
                        },
                        {
                            "amount": {
                                "d": 16000,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalShard_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Ionized Fuel",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 10000,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2500,
                                "n": 3
                            },
                            "item_name": "Desc_PackagedRocketFuel_C"
                        },
                        {
                            "amount": {
                                "d": 2500,
                                "n": 1
                            },
                            "item_name": "Desc_DarkMatter_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Alternate: Dark-Ion Fuel",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 4000,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2000,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedIonizedFuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Ionized Fuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_IronIngot_C": {
            "form": "SOLID",
            "id": "Desc_IronIngot_C",
            "name": "Iron Ingot",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_OreIron_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Iron Ingot",
                    "produced_in": [
                        "Build_SmelterMk1_C",
                        "BP_WorkBenchComponent_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 13,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 13,
                                "n": 7
                            },
                            "item_name": "Desc_OreIron_C"
                        },
                        {
                            "amount": {
                                "d": 13,
                                "n": 4
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Pure Iron Ingot",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_OreIron_C"
                        },
                        {
                            "amount": {
                                "d": 10,
                                "n": 1
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Leached Iron Ingot",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_OreIron_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 4
                            },
                            "item_name": "Desc_Stone_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Basic Iron Ingot",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 15,
                                "n": 8
                            },
                            "item_name": "Desc_OreIron_C"
                        },
                        {
                            "amount": {
                                "d": 15,
                                "n": 2
                            },
                            "item_name": "Desc_OreCopper_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Iron Alloy Ingot",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                }
            ]
        },
        "Desc_IronPlateReinforced_C": {
            "form": "SOLID",
            "id": "Desc_IronPlateReinforced_C",
            "name": "Reinforced Iron Plate",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_IronPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 12
                            },
                            "item_name": "Desc_IronScrew_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Reinforced Iron Plate",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 16
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_IronPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Rubber_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Adhered Iron Plate",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 32
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 10
                            },
                            "item_name": "Desc_IronPlate_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 20
                            },
                            "item_name": "Desc_Wire_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Stitched Iron Plate",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_IronPlate_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 50
                            },
                            "item_name": "Desc_IronScrew_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Bolted Iron Plate",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_IronPlate_C": {
            "form": "SOLID",
            "id": "Desc_IronPlate_C",
            "name": "Iron Plate",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_IronIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Iron Plate",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_IronIngot_C"
                        },
                        {
                            "amount": {
                                "d": 10,
                                "n": 1
                            },
                            "item_name": "Desc_Plastic_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Coated Iron Plate",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_IronIngot_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_SteelIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Steel Cast Plate",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                }
            ]
        },
        "Desc_IronRod_C": {
            "form": "SOLID",
            "id": "Desc_IronRod_C",
            "name": "Iron Rod",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_IronIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Iron Rod",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 4,
                        "n": 5
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 4,
                                "n": 1
                            },
                            "item_name": "Desc_SteelIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Steel Rod",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 7,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 7,
                                "n": 1
                            },
                            "item_name": "Desc_AluminumIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Aluminum Rod",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_IronScrew_C": {
            "form": "SOLID",
            "id": "Desc_IronScrew_C",
            "name": "Screws",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 4,
                                "n": 1
                            },
                            "item_name": "Desc_IronRod_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Screws",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 13,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 52,
                                "n": 1
                            },
                            "item_name": "Desc_SteelPlate_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Steel Screws",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 4,
                                "n": 1
                            },
                            "item_name": "Desc_IronIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Cast Screws",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_Leaves_C": {
            "form": "SOLID",
            "id": "Desc_Leaves_C",
            "name": "Leaves",
            "recipes": []
        },
        "Desc_LiquidBiofuel_C": {
            "form": "LIQUID",
            "id": "Desc_LiquidBiofuel_C",
            "name": "Liquid Biofuel",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_Biofuel_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 3
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Liquid Biofuel",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedBiofuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Liquid Biofuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_LiquidFuel_C": {
            "form": "LIQUID",
            "id": "Desc_LiquidFuel_C",
            "name": "Fuel",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Fuel",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_HeavyOilResidue_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Residual Fuel",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Fuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Fuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_HeavyOilResidue_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Diluted Fuel",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                }
            ]
        },
        "Desc_LiquidOil_C": {
            "form": "LIQUID",
            "id": "Desc_LiquidOil_C",
            "name": "Crude Oil",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedOil_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Oil",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_LiquidTurboFuel_C": {
            "form": "LIQUID",
            "id": "Desc_LiquidTurboFuel_C",
            "name": "Turbofuel",
            "recipes": [
                {
                    "duration": {
                        "d": 5,
                        "n": 16
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 6
                            },
                            "item_name": "Desc_LiquidFuel_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 4
                            },
                            "item_name": "Desc_CompactedCoal_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Turbofuel",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_TurboFuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Turbofuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 4,
                                "n": 5
                            },
                            "item_name": "Desc_HeavyOilResidue_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_CompactedCoal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Turbo Heavy Fuel",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_LiquidFuel_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_HeavyOilResidue_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Sulfur_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_PetroleumCoke_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Turbo Blend Fuel",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                }
            ]
        },
        "Desc_Medkit_C": {
            "form": "SOLID",
            "id": "Desc_Medkit_C",
            "name": "Medicinal Inhaler",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Shroom_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Berry_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_Nut_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Nutritional Inhaler",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_Mycelia_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_Berry_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Vitamin Inhaler",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 15
                            },
                            "item_name": "Desc_Mycelia_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_AlienProtein_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Shroom_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Therapeutic Inhaler",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_AlienProtein_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_Nut_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Protein Inhaler",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_ModularFrameFused_C": {
            "form": "SOLID",
            "id": "Desc_ModularFrameFused_C",
            "name": "Fused Modular Frame",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 40
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_ModularFrameHeavy_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_AluminumCasing_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25000
                            },
                            "item_name": "Desc_NitrogenGas_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Fused Modular Frame",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_ModularFrameHeavy_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_AluminumIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 8
                            },
                            "item_name": "Desc_NitricAcid_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_LiquidFuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Heat-Fused Frame",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                }
            ]
        },
        "Desc_ModularFrameHeavy_C": {
            "form": "SOLID",
            "id": "Desc_ModularFrameHeavy_C",
            "name": "Heavy Modular Frame",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 30
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_ModularFrame_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_SteelPipe_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_SteelPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 120
                            },
                            "item_name": "Desc_IronScrew_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Heavy Modular Frame",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkBenchComponent_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 16
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_ModularFrame_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_SteelPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_Rubber_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 104
                            },
                            "item_name": "Desc_IronScrew_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Heavy Flexible Frame",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 64
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 8
                            },
                            "item_name": "Desc_ModularFrame_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 10
                            },
                            "item_name": "Desc_SteelPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 12
                            },
                            "item_name": "Desc_SteelPipe_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 22
                            },
                            "item_name": "Desc_Cement_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Heavy Encased Frame",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_ModularFrameLightweight_C": {
            "form": "SOLID",
            "id": "Desc_ModularFrameLightweight_C",
            "name": "Radio Control Unit",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 16
                            },
                            "item_name": "Desc_AluminumCasing_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalOscillator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Computer_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Radio Control Unit",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkBenchComponent_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 40
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalOscillator_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 10
                            },
                            "item_name": "Desc_CircuitBoard_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_AluminumCasing_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_Rubber_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Radio Control System",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 16
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_AluminumPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_HighSpeedConnector_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 12
                            },
                            "item_name": "Desc_QuartzCrystal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Radio Connection Unit",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_ModularFrame_C": {
            "form": "SOLID",
            "id": "Desc_ModularFrame_C",
            "name": "Modular Frame",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 30
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_IronRod_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Modular Frame",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 28
                            },
                            "item_name": "Desc_IronScrew_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Bolted Frame",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 10
                            },
                            "item_name": "Desc_SteelPipe_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Steeled Frame",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_MotorLightweight_C": {
            "form": "SOLID",
            "id": "Desc_MotorLightweight_C",
            "name": "Turbo Motor",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 32
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_CoolingSystem_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_ModularFrameLightweight_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_Motor_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 24
                            },
                            "item_name": "Desc_Rubber_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Turbo Motor",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkBenchComponent_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 16
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Motor_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_PressureConversionCube_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 12
                            },
                            "item_name": "Desc_PackagedNitrogenGas_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_Stator_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Turbo Pressure Motor",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 64
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 7
                            },
                            "item_name": "Desc_Motor_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_ModularFrameLightweight_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 5
                            },
                            "item_name": "Desc_ElectromagneticControlRod_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 7
                            },
                            "item_name": "Desc_Rotor_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Turbo Electric Motor",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Motor_C": {
            "form": "SOLID",
            "id": "Desc_Motor_C",
            "name": "Motor",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Rotor_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Stator_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Motor",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_ElectromagneticControlRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Rotor_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Electric Motor",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Rotor_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Stator_C"
                        },
                        {
                            "amount": {
                                "d": 6,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalOscillator_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Rigor Motor",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Mycelia_C": {
            "form": "SOLID",
            "id": "Desc_Mycelia_C",
            "name": "Mycelia",
            "recipes": []
        },
        "Desc_NitricAcid_C": {
            "form": "LIQUID",
            "id": "Desc_NitricAcid_C",
            "name": "Nitric Acid",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4000
                            },
                            "item_name": "Desc_NitrogenGas_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Water_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_IronPlate_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Nitric Acid",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedNitricAcid_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Nitric Acid",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_NitrogenGas_C": {
            "form": "GAS",
            "id": "Desc_NitrogenGas_C",
            "name": "Nitrogen Gas",
            "recipes": [
                {
                    "duration": {
                        "d": 2000,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12000,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1200,
                                "n": 1
                            },
                            "item_name": "Desc_OreBauxite_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Nitrogen Gas (Bauxite)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2000,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12000,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1000,
                                "n": 1
                            },
                            "item_name": "Desc_OreGold_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Nitrogen Gas (Caterium)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 4000,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 4000,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedNitrogenGas_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Nitrogen Gas",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_NobeliskCluster_C": {
            "form": "SOLID",
            "id": "Desc_NobeliskCluster_C",
            "name": "Cluster Nobelisk",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_NobeliskExplosive_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_GunpowderMK2_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Cluster Nobelisk",
                    "produced_in": [
                        "BP_WorkshopComponent_C",
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_NobeliskExplosive_C": {
            "form": "SOLID",
            "id": "Desc_NobeliskExplosive_C",
            "name": "Nobelisk",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Gunpowder_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_SteelPipe_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Nobelisk",
                    "produced_in": [
                        "BP_WorkshopComponent_C",
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_NobeliskGas_C": {
            "form": "SOLID",
            "id": "Desc_NobeliskGas_C",
            "name": "Gas Nobelisk",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_NobeliskExplosive_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_GenericBiomass_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Gas Nobelisk",
                    "produced_in": [
                        "BP_WorkshopComponent_C",
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_NobeliskNuke_C": {
            "form": "SOLID",
            "id": "Desc_NobeliskNuke_C",
            "name": "Nuke Nobelisk",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 120
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_NobeliskExplosive_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_UraniumCell_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_GunpowderMK2_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_CircuitBoardHighSpeed_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Nuke Nobelisk",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_NobeliskShockwave_C": {
            "form": "SOLID",
            "id": "Desc_NobeliskShockwave_C",
            "name": "Pulse Nobelisk",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_NobeliskExplosive_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalOscillator_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Pulse Nobelisk",
                    "produced_in": [
                        "BP_WorkshopComponent_C",
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_NuclearFuelRod_C": {
            "form": "SOLID",
            "id": "Desc_NuclearFuelRod_C",
            "name": "Uranium Fuel Rod",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 150
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 50
                            },
                            "item_name": "Desc_UraniumCell_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_SteelPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_ElectromagneticControlRod_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Uranium Fuel Rod",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 100
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 100
                            },
                            "item_name": "Desc_UraniumCell_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 10
                            },
                            "item_name": "Desc_ElectromagneticControlRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalOscillator_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 10
                            },
                            "item_name": "Desc_Rotor_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Uranium Fuel Unit",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_NuclearWaste_C": {
            "form": "SOLID",
            "id": "Desc_NuclearWaste_C",
            "name": "Uranium Waste",
            "recipes": []
        },
        "Desc_Nut_C": {
            "form": "SOLID",
            "id": "Desc_Nut_C",
            "name": "Beryl Nut",
            "recipes": []
        },
        "Desc_OreBauxite_C": {
            "form": "SOLID",
            "id": "Desc_OreBauxite_C",
            "name": "Bauxite",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 5
                            },
                            "item_name": "Desc_OreGold_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Bauxite (Caterium)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_OreCopper_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Bauxite (Copper)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_OreCopper_C": {
            "form": "SOLID",
            "id": "Desc_OreCopper_C",
            "name": "Copper Ore",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 6,
                                "n": 5
                            },
                            "item_name": "Desc_RawQuartz_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Copper Ore (Quartz)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Sulfur_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Copper Ore (Sulfur)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_OreGold_C": {
            "form": "SOLID",
            "id": "Desc_OreGold_C",
            "name": "Caterium Ore",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 5
                            },
                            "item_name": "Desc_OreCopper_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Caterium Ore (Copper)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_RawQuartz_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Caterium Ore (Quartz)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_OreIron_C": {
            "form": "SOLID",
            "id": "Desc_OreIron_C",
            "name": "Iron Ore",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Stone_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Iron Ore (Limestone)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_OreUranium_C": {
            "form": "SOLID",
            "id": "Desc_OreUranium_C",
            "name": "Uranium",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_OreBauxite_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Uranium Ore (Bauxite)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_PackagedAlumina_C": {
            "form": "SOLID",
            "id": "Desc_PackagedAlumina_C",
            "name": "Packaged Alumina Solution",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_AluminaSolution_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_FluidCanister_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Alumina Solution",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_PackagedBiofuel_C": {
            "form": "SOLID",
            "id": "Desc_PackagedBiofuel_C",
            "name": "Packaged Liquid Biofuel",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_LiquidBiofuel_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_FluidCanister_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Liquid Biofuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_PackagedIonizedFuel_C": {
            "form": "SOLID",
            "id": "Desc_PackagedIonizedFuel_C",
            "name": "Packaged Ionized Fuel",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2000
                            },
                            "item_name": "Desc_IonizedFuel_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_GasTank_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Ionized Fuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_PackagedNitricAcid_C": {
            "form": "SOLID",
            "id": "Desc_PackagedNitricAcid_C",
            "name": "Packaged Nitric Acid",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_NitricAcid_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_GasTank_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Nitric Acid",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_PackagedNitrogenGas_C": {
            "form": "SOLID",
            "id": "Desc_PackagedNitrogenGas_C",
            "name": "Packaged Nitrogen Gas",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4000
                            },
                            "item_name": "Desc_NitrogenGas_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_GasTank_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Nitrogen Gas",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_PackagedOilResidue_C": {
            "form": "SOLID",
            "id": "Desc_PackagedOilResidue_C",
            "name": "Packaged Heavy Oil Residue",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_HeavyOilResidue_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_FluidCanister_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Heavy Oil Residue",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_PackagedOil_C": {
            "form": "SOLID",
            "id": "Desc_PackagedOil_C",
            "name": "Packaged Oil",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_LiquidOil_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_FluidCanister_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Oil",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_PackagedRocketFuel_C": {
            "form": "SOLID",
            "id": "Desc_PackagedRocketFuel_C",
            "name": "Packaged Rocket Fuel",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2000
                            },
                            "item_name": "Desc_RocketFuel_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_GasTank_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Rocket Fuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_PackagedSulfuricAcid_C": {
            "form": "SOLID",
            "id": "Desc_PackagedSulfuricAcid_C",
            "name": "Packaged Sulfuric Acid",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_FluidCanister_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Sulfuric Acid",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_PackagedWater_C": {
            "form": "SOLID",
            "id": "Desc_PackagedWater_C",
            "name": "Packaged Water",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Water_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_FluidCanister_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Water",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_Parachute_C": {
            "form": "SOLID",
            "id": "Desc_Parachute_C",
            "name": "Parachute",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 40
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_Fabric_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_Cable_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Parachute",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_PetroleumCoke_C": {
            "form": "SOLID",
            "id": "Desc_PetroleumCoke_C",
            "name": "Petroleum Coke",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 1
                            },
                            "item_name": "Desc_HeavyOilResidue_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Petroleum Coke",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_Plastic_C": {
            "form": "SOLID",
            "id": "Desc_Plastic_C",
            "name": "Plastic",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Plastic",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_PolymerResin_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Residual Plastic",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Rubber_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_LiquidFuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Recycled Plastic",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_PlutoniumCell_C": {
            "form": "SOLID",
            "id": "Desc_PlutoniumCell_C",
            "name": "Encased Plutonium Cell",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_PlutoniumPellet_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_Cement_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Encased Plutonium Cell",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_AluminumCasing_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Instant Plutonium Cell",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                }
            ]
        },
        "Desc_PlutoniumFuelRod_C": {
            "form": "SOLID",
            "id": "Desc_PlutoniumFuelRod_C",
            "name": "Plutonium Fuel Rod",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 240
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 30
                            },
                            "item_name": "Desc_PlutoniumCell_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 18
                            },
                            "item_name": "Desc_SteelPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_ElectromagneticControlRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_AluminumPlateReinforced_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Plutonium Fuel Rod",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 120
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_PlutoniumCell_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PressureConversionCube_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Plutonium Fuel Unit",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_PlutoniumPellet_C": {
            "form": "SOLID",
            "id": "Desc_PlutoniumPellet_C",
            "name": "Plutonium Pellet",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 6,
                                "n": 5
                            },
                            "item_name": "Desc_NuclearWaste_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Plutonium Pellet",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                }
            ]
        },
        "Desc_PlutoniumWaste_C": {
            "form": "SOLID",
            "id": "Desc_PlutoniumWaste_C",
            "name": "Plutonium Waste",
            "recipes": []
        },
        "Desc_PolymerResin_C": {
            "form": "SOLID",
            "id": "Desc_PolymerResin_C",
            "name": "Polymer Resin",
            "recipes": [
                {
                    "duration": {
                        "d": 13,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 13,
                                "n": 6
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Polymer Resin",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Fuel",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Heavy Oil Residue",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_PressureConversionCube_C": {
            "form": "SOLID",
            "id": "Desc_PressureConversionCube_C",
            "name": "Pressure Conversion Cube",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_ModularFrameFused_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_ModularFrameLightweight_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Pressure Conversion Cube",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                }
            ]
        },
        "Desc_QuantumEnergy_C": {
            "form": "GAS",
            "id": "Desc_QuantumEnergy_C",
            "name": "Excited Photonic Matter",
            "recipes": [
                {
                    "duration": {
                        "d": 10000,
                        "n": 3
                    },
                    "ingredients": [],
                    "is_alternate": true,
                    "name": "Build converter: Excited Photonic Matter",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_QuantumOscillator_C": {
            "form": "SOLID",
            "id": "Desc_QuantumOscillator_C",
            "name": "Superposition Oscillator",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_DarkMatter_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_CrystalOscillator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 9
                            },
                            "item_name": "Desc_AluminumPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25000
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Superposition Oscillator",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                }
            ]
        },
        "Desc_QuartzCrystal_C": {
            "form": "SOLID",
            "id": "Desc_QuartzCrystal_C",
            "name": "Quartz Crystal",
            "recipes": [
                {
                    "duration": {
                        "d": 3,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 5
                            },
                            "item_name": "Desc_RawQuartz_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Quartz Crystal",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 7,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 7,
                                "n": 9
                            },
                            "item_name": "Desc_RawQuartz_C"
                        },
                        {
                            "amount": {
                                "d": 7,
                                "n": 5
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Pure Quartz Crystal",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 8
                            },
                            "item_name": "Desc_RawQuartz_C"
                        },
                        {
                            "amount": {
                                "d": 15,
                                "n": 2
                            },
                            "item_name": "Desc_NitricAcid_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Quartz Purification",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 9,
                        "n": 10
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 18,
                                "n": 25
                            },
                            "item_name": "Desc_RawQuartz_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_Coal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Fused Quartz Crystal",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                }
            ]
        },
        "Desc_RawQuartz_C": {
            "form": "SOLID",
            "id": "Desc_RawQuartz_C",
            "name": "Raw Quartz",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 6,
                                "n": 5
                            },
                            "item_name": "Desc_OreBauxite_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Raw Quartz (Bauxite)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Coal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Raw Quartz (Coal)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_RebarGunProjectile_C": {
            "form": "SOLID",
            "id": "Desc_RebarGunProjectile_C",
            "name": "Rebar Gun",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 16
                            },
                            "item_name": "Desc_IronRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 100
                            },
                            "item_name": "Desc_IronScrew_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Rebar Gun",
                    "produced_in": [
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_Rebar_Explosive_C": {
            "form": "SOLID",
            "id": "Desc_Rebar_Explosive_C",
            "name": "Explosive Rebar",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_SpikedRebar_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_GunpowderMK2_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_SteelPipe_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Explosive Rebar",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_Rebar_Spreadshot_C": {
            "form": "SOLID",
            "id": "Desc_Rebar_Spreadshot_C",
            "name": "Shatter Rebar",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_SpikedRebar_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_QuartzCrystal_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Shatter Rebar",
                    "produced_in": [
                        "Build_AssemblerMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_Rebar_Stunshot_C": {
            "form": "SOLID",
            "id": "Desc_Rebar_Stunshot_C",
            "name": "Stun Rebar",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_SpikedRebar_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Stun Rebar",
                    "produced_in": [
                        "Build_AssemblerMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_RocketFuel_C": {
            "form": "GAS",
            "id": "Desc_RocketFuel_C",
            "name": "Rocket Fuel",
            "recipes": [
                {
                    "duration": {
                        "d": 5000,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5000,
                                "n": 3
                            },
                            "item_name": "Desc_LiquidTurboFuel_C"
                        },
                        {
                            "amount": {
                                "d": 10000,
                                "n": 1
                            },
                            "item_name": "Desc_NitricAcid_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Rocket Fuel",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2702159776422297600,
                        "n": 1080863910568919
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1500,
                                "n": 1
                            },
                            "item_name": "Desc_LiquidFuel_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_NitrogenGas_C"
                        },
                        {
                            "amount": {
                                "d": 1500,
                                "n": 1
                            },
                            "item_name": "Desc_Sulfur_C"
                        },
                        {
                            "amount": {
                                "d": 3000,
                                "n": 1
                            },
                            "item_name": "Desc_Coal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Nitro Rocket Fuel",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2000,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2000,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedRocketFuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Rocket Fuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_Rotor_C": {
            "form": "SOLID",
            "id": "Desc_Rotor_C",
            "name": "Rotor",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 15
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_IronRod_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25
                            },
                            "item_name": "Desc_IronScrew_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Rotor",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 16
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_CopperSheet_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 52
                            },
                            "item_name": "Desc_IronScrew_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Copper Rotor",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_SteelPipe_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_Wire_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Steel Rotor",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Rubber_C": {
            "form": "SOLID",
            "id": "Desc_Rubber_C",
            "name": "Rubber",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_LiquidOil_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Rubber",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_PolymerResin_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Residual Rubber",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Plastic_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_LiquidFuel_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Recycled Rubber",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                }
            ]
        },
        "Desc_SAMFluctuator_C": {
            "form": "SOLID",
            "id": "Desc_SAMFluctuator_C",
            "name": "SAM Fluctuator",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_Wire_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_SteelPipe_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "SAM Fluctuator",
                    "produced_in": [
                        "Build_ManufacturerMk1_C",
                        "BP_WorkBenchComponent_C"
                    ]
                }
            ]
        },
        "Desc_SAMIngot_C": {
            "form": "SOLID",
            "id": "Desc_SAMIngot_C",
            "name": "Reanimated SAM",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_SAM_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Reanimated SAM",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_SAM_C": {
            "form": "SOLID",
            "id": "Desc_SAM_C",
            "name": "SAM",
            "recipes": []
        },
        "Desc_Shroom_C": {
            "form": "SOLID",
            "id": "Desc_Shroom_C",
            "name": "Bacon Agaric",
            "recipes": []
        },
        "Desc_Silica_C": {
            "form": "SOLID",
            "id": "Desc_Silica_C",
            "name": "Silica",
            "recipes": [
                {
                    "duration": {
                        "d": 5,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 3
                            },
                            "item_name": "Desc_RawQuartz_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Silica",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 5,
                                "n": 12
                            },
                            "item_name": "Desc_OreBauxite_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 18
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Alumina Solution",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 9,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 9,
                                "n": 4
                            },
                            "item_name": "Desc_DissolvedSilica_C"
                        },
                        {
                            "amount": {
                                "d": 27,
                                "n": 5
                            },
                            "item_name": "Desc_Stone_C"
                        },
                        {
                            "amount": {
                                "d": 27,
                                "n": 10
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Distilled Silica",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 7,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 7,
                                "n": 3
                            },
                            "item_name": "Desc_RawQuartz_C"
                        },
                        {
                            "amount": {
                                "d": 7,
                                "n": 5
                            },
                            "item_name": "Desc_Stone_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Cheap Silica",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SingularityCell_C": {
            "form": "SOLID",
            "id": "Desc_SingularityCell_C",
            "name": "Singularity Cell",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 10,
                                "n": 1
                            },
                            "item_name": "Desc_SpaceElevatorPart_9_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_DarkMatter_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_IronPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_Cement_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Singularity Cell",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_Snow_C": {
            "form": "SOLID",
            "id": "Desc_Snow_C",
            "name": "FICSMAS Actual Snow",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 5
                            },
                            "item_name": "Desc_Gift_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "FICSMAS Actual Snow",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_SnowballProjectile_C": {
            "form": "SOLID",
            "id": "Desc_SnowballProjectile_C",
            "name": "Snowball",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_Snow_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Snowball",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_10_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_10_C",
            "name": "Biochemical Sculptor",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 30
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 4,
                                "n": 1
                            },
                            "item_name": "Desc_SpaceElevatorPart_7_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_FicsiteMesh_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Biochemical Sculptor",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_11_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_11_C",
            "name": "Ballistic Warp Drive",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_SpaceElevatorPart_8_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_SingularityCell_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_QuantumOscillator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 40
                            },
                            "item_name": "Desc_DarkMatter_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Ballistic Warp Drive",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_12_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_12_C",
            "name": "AI Expansion Server",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 15
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_SpaceElevatorPart_6_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_TemporalProcessor_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_QuantumOscillator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25000
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "AI Expansion Server",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_1_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_1_C",
            "name": "Smart Plating",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 30
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Rotor_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Smart Plating",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_IronPlateReinforced_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Rotor_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_Plastic_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Plastic Smart Plating",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_2_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_2_C",
            "name": "Versatile Framework",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_ModularFrame_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_SteelPlate_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Versatile Framework",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_ModularFrame_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_SteelPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_Rubber_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Flexible Framework",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_3_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_3_C",
            "name": "Automated Wiring",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 24
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Stator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_Cable_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Automated Wiring",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Stator_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 10
                            },
                            "item_name": "Desc_Wire_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 1
                            },
                            "item_name": "Desc_HighSpeedConnector_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Automated Speed Wiring",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_4_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_4_C",
            "name": "Modular Engine",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Motor_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 15
                            },
                            "item_name": "Desc_Rubber_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_SpaceElevatorPart_1_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Modular Engine",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_5_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_5_C",
            "name": "Adaptive Control Unit",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_SpaceElevatorPart_3_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_CircuitBoard_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_ModularFrameHeavy_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Computer_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Adaptive Control Unit",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_6_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_6_C",
            "name": "Magnetic Field Generator",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 5
                            },
                            "item_name": "Desc_SpaceElevatorPart_2_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_ElectromagneticControlRod_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Magnetic Field Generator",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_7_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_7_C",
            "name": "Assembly Director System",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 80
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_SpaceElevatorPart_5_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_ComputerSuper_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Assembly Director System",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_8_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_8_C",
            "name": "Thermal Propulsion Rocket",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 5
                            },
                            "item_name": "Desc_SpaceElevatorPart_4_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_MotorLightweight_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_CoolingSystem_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_ModularFrameFused_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Thermal Propulsion Rocket",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SpaceElevatorPart_9_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_9_C",
            "name": "Nuclear Pasta",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 120
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 200
                            },
                            "item_name": "Desc_CopperDust_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PressureConversionCube_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Nuclear Pasta",
                    "produced_in": [
                        "Build_HadronCollider_C"
                    ]
                }
            ]
        },
        "Desc_SpikedRebar_C": {
            "form": "SOLID",
            "id": "Desc_SpikedRebar_C",
            "name": "Iron Rebar",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_IronRod_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Iron Rebar",
                    "produced_in": [
                        "Build_ConstructorMk1_C",
                        "BP_WorkshopComponent_C"
                    ]
                }
            ]
        },
        "Desc_SpitterParts_C": {
            "form": "SOLID",
            "id": "Desc_SpitterParts_C",
            "name": "Spitter Remains",
            "recipes": []
        },
        "Desc_Stator_C": {
            "form": "SOLID",
            "id": "Desc_Stator_C",
            "name": "Stator",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_SteelPipe_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 8
                            },
                            "item_name": "Desc_Wire_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Stator",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 15
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_SteelPipe_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 15
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Quickwire Stator",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SteelIngot_C": {
            "form": "SOLID",
            "id": "Desc_SteelIngot_C",
            "name": "Steel Ingot",
            "recipes": [
                {
                    "duration": {
                        "d": 3,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_OreIron_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Coal_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Steel Ingot",
                    "produced_in": [
                        "Build_FoundryMk1_C",
                        "BP_WorkBenchComponent_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 4,
                                "n": 3
                            },
                            "item_name": "Desc_OreIron_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 3
                            },
                            "item_name": "Desc_PetroleumCoke_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Coke Steel Ingot",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_OreIron_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 1
                            },
                            "item_name": "Desc_CompactedCoal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Compacted Steel Ingot",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_IronIngot_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_Coal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Solid Steel Ingot",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                }
            ]
        },
        "Desc_SteelPipe_C": {
            "form": "SOLID",
            "id": "Desc_SteelPipe_C",
            "name": "Steel Pipe",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_SteelIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Steel Pipe",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_SteelIngot_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 3
                            },
                            "item_name": "Desc_Cement_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Molded Steel Pipe",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_IronIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Iron Pipe",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_SteelPlateReinforced_C": {
            "form": "SOLID",
            "id": "Desc_SteelPlateReinforced_C",
            "name": "Encased Industrial Beam",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 10
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_SteelPlate_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_Cement_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Encased Industrial Beam",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_AssemblerMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 15
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 6
                            },
                            "item_name": "Desc_SteelPipe_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_Cement_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Encased Industrial Pipe",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_SteelPlate_C": {
            "form": "SOLID",
            "id": "Desc_SteelPlate_C",
            "name": "Steel Beam",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_SteelIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Steel Beam",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 8
                            },
                            "item_name": "Desc_SteelIngot_C"
                        },
                        {
                            "amount": {
                                "d": 9,
                                "n": 16
                            },
                            "item_name": "Desc_Cement_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Molded Beam",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_AluminumIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Aluminum Beam",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_StingerParts_C": {
            "form": "SOLID",
            "id": "Desc_StingerParts_C",
            "name": "Stinger Remains",
            "recipes": []
        },
        "Desc_Stone_C": {
            "form": "SOLID",
            "id": "Desc_Stone_C",
            "name": "Limestone",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 6,
                                "n": 1
                            },
                            "item_name": "Desc_Sulfur_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Limestone (Sulfur)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_Sulfur_C": {
            "form": "SOLID",
            "id": "Desc_Sulfur_C",
            "name": "Sulfur",
            "recipes": [
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 5
                            },
                            "item_name": "Desc_Coal_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Sulfur (Coal)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 12,
                                "n": 1
                            },
                            "item_name": "Desc_SAMIngot_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 5
                            },
                            "item_name": "Desc_OreIron_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Sulfur (Iron)",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_SulfuricAcid_C": {
            "form": "LIQUID",
            "id": "Desc_SulfuricAcid_C",
            "name": "Sulfuric Acid",
            "recipes": [
                {
                    "duration": {
                        "d": 5,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Sulfur_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Sulfuric Acid",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_OreUranium_C"
                        },
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_Cement_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 4
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Encased Uranium Cell",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedSulfuricAcid_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Sulfuric Acid",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_TemporalProcessor_C": {
            "form": "SOLID",
            "id": "Desc_TemporalProcessor_C",
            "name": "Neural-Quantum Processor",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 20
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_TimeCrystal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_ComputerSuper_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 15
                            },
                            "item_name": "Desc_FicsiteMesh_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 25000
                            },
                            "item_name": "Desc_QuantumEnergy_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Neural-Quantum Processor",
                    "produced_in": [
                        "Build_QuantumEncoder_C"
                    ]
                }
            ]
        },
        "Desc_TimeCrystal_C": {
            "form": "SOLID",
            "id": "Desc_TimeCrystal_C",
            "name": "Time Crystal",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 10
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Diamond_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Build converter: Time Crystal",
                    "produced_in": [
                        "Build_Converter_C"
                    ]
                }
            ]
        },
        "Desc_TurboFuel_C": {
            "form": "SOLID",
            "id": "Desc_TurboFuel_C",
            "name": "Packaged Turbofuel",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_LiquidTurboFuel_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_FluidCanister_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Packaged Turbofuel",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                }
            ]
        },
        "Desc_UraniumCell_C": {
            "form": "SOLID",
            "id": "Desc_UraniumCell_C",
            "name": "Encased Uranium Cell",
            "recipes": [
                {
                    "duration": {
                        "d": 5,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_OreUranium_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 3
                            },
                            "item_name": "Desc_Cement_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 8
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Encased Uranium Cell",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 4,
                                "n": 5
                            },
                            "item_name": "Desc_OreUranium_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 3
                            },
                            "item_name": "Desc_Silica_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 5
                            },
                            "item_name": "Desc_Sulfur_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 15
                            },
                            "item_name": "Desc_HighSpeedWire_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Infused Uranium Cell",
                    "produced_in": [
                        "Build_ManufacturerMk1_C"
                    ]
                }
            ]
        },
        "Desc_WAT1_C": {
            "form": "SOLID",
            "id": "Desc_WAT1_C",
            "name": "Somersloop",
            "recipes": []
        },
        "Desc_WAT2_C": {
            "form": "SOLID",
            "id": "Desc_WAT2_C",
            "name": "Mercer Sphere",
            "recipes": []
        },
        "Desc_Water_C": {
            "form": "LIQUID",
            "id": "Desc_Water_C",
            "name": "Water",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 3,
                                "n": 5
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 4
                            },
                            "item_name": "Desc_AluminaSolution_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 2
                            },
                            "item_name": "Desc_AluminumCasing_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Battery",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 1,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 5
                            },
                            "item_name": "Desc_NuclearWaste_C"
                        },
                        {
                            "amount": {
                                "d": 3,
                                "n": 5
                            },
                            "item_name": "Desc_Silica_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_NitricAcid_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Non-Fissile Uranium",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_AluminaSolution_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Coal_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Aluminum Scrap",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_PackagedWater_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Unpackage Water",
                    "produced_in": [
                        "Build_Packager_C"
                    ]
                },
                {
                    "duration": {
                        "d": 7,
                        "n": 4
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 7,
                                "n": 12
                            },
                            "item_name": "Desc_AluminaSolution_C"
                        },
                        {
                            "amount": {
                                "d": 7,
                                "n": 4
                            },
                            "item_name": "Desc_PetroleumCoke_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Electrode Aluminum Scrap",
                    "produced_in": [
                        "Build_OilRefinery_C"
                    ]
                },
                {
                    "duration": {
                        "d": 5,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_OreBauxite_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Coal_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        },
                        {
                            "amount": {
                                "d": 5,
                                "n": 6
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Instant Scrap",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 8,
                                "n": 5
                            },
                            "item_name": "Desc_OreUranium_C"
                        },
                        {
                            "amount": {
                                "d": 8,
                                "n": 5
                            },
                            "item_name": "Desc_NuclearWaste_C"
                        },
                        {
                            "amount": {
                                "d": 8,
                                "n": 3
                            },
                            "item_name": "Desc_NitricAcid_C"
                        },
                        {
                            "amount": {
                                "d": 8,
                                "n": 5
                            },
                            "item_name": "Desc_SulfuricAcid_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Fertile Uranium",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                },
                {
                    "duration": {
                        "d": 4,
                        "n": 3
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 3
                            },
                            "item_name": "Desc_DissolvedSilica_C"
                        },
                        {
                            "amount": {
                                "d": 8,
                                "n": 5
                            },
                            "item_name": "Desc_Stone_C"
                        },
                        {
                            "amount": {
                                "d": 4,
                                "n": 5
                            },
                            "item_name": "Desc_Water_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Distilled Silica",
                    "produced_in": [
                        "Build_Blender_C"
                    ]
                }
            ]
        },
        "Desc_Wire_C": {
            "form": "SOLID",
            "id": "Desc_Wire_C",
            "name": "Wire",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_CopperIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Wire",
                    "produced_in": [
                        "BP_WorkBenchComponent_C",
                        "Build_ConstructorMk1_C",
                        "FGBuildableAutomatedWorkBench"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 2
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 15,
                                "n": 2
                            },
                            "item_name": "Desc_CopperIngot_C"
                        },
                        {
                            "amount": {
                                "d": 30,
                                "n": 1
                            },
                            "item_name": "Desc_GoldIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Fused Wire",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 2,
                        "n": 1
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 8,
                                "n": 1
                            },
                            "item_name": "Desc_GoldIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Caterium Wire",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                },
                {
                    "duration": {
                        "d": 3,
                        "n": 8
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 9,
                                "n": 5
                            },
                            "item_name": "Desc_IronIngot_C"
                        }
                    ],
                    "is_alternate": true,
                    "name": "Iron Wire",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_Wood_C": {
            "form": "SOLID",
            "id": "Desc_Wood_C",
            "name": "Wood",
            "recipes": []
        },
        "Desc_XmasBall1_C": {
            "form": "SOLID",
            "id": "Desc_XmasBall1_C",
            "name": "Red FICSMAS Ornament",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Gift_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Red FICSMAS Ornament",
                    "produced_in": [
                        "Build_SmelterMk1_C"
                    ]
                }
            ]
        },
        "Desc_XmasBall2_C": {
            "form": "SOLID",
            "id": "Desc_XmasBall2_C",
            "name": "Blue FICSMAS Ornament",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 1
                            },
                            "item_name": "Desc_Gift_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Blue FICSMAS Ornament",
                    "produced_in": [
                        "Build_SmelterMk1_C"
                    ]
                }
            ]
        },
        "Desc_XmasBall3_C": {
            "form": "SOLID",
            "id": "Desc_XmasBall3_C",
            "name": "Copper FICSMAS Ornament",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_XmasBall1_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_CopperIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Copper FICSMAS Ornament",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                }
            ]
        },
        "Desc_XmasBall4_C": {
            "form": "SOLID",
            "id": "Desc_XmasBall4_C",
            "name": "Iron FICSMAS Ornament",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_XmasBall2_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_IronIngot_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "Iron FICSMAS Ornament",
                    "produced_in": [
                        "Build_FoundryMk1_C"
                    ]
                }
            ]
        },
        "Desc_XmasBallCluster_C": {
            "form": "SOLID",
            "id": "Desc_XmasBallCluster_C",
            "name": "FICSMAS Ornament Bundle",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_XmasBall3_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_XmasBall4_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "FICSMAS Ornament Bundle",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_XmasBow_C": {
            "form": "SOLID",
            "id": "Desc_XmasBow_C",
            "name": "FICSMAS Bow",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 12
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 2
                            },
                            "item_name": "Desc_Gift_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "FICSMAS Bow",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_XmasBranch_C": {
            "form": "SOLID",
            "id": "Desc_XmasBranch_C",
            "name": "FICSMAS Tree Branch",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 6
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 1
                            },
                            "item_name": "Desc_Gift_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "FICSMAS Tree Branch",
                    "produced_in": [
                        "Build_ConstructorMk1_C"
                    ]
                }
            ]
        },
        "Desc_XmasStar_C": {
            "form": "SOLID",
            "id": "Desc_XmasStar_C",
            "name": "FICSMAS Wonder Star",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 60
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 1,
                                "n": 5
                            },
                            "item_name": "Desc_XmasWreath_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 20
                            },
                            "item_name": "Desc_CandyCane_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "FICSMAS Wonder Star",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        },
        "Desc_XmasWreath_C": {
            "form": "SOLID",
            "id": "Desc_XmasWreath_C",
            "name": "FICSMAS Wreath",
            "recipes": [
                {
                    "duration": {
                        "d": 1,
                        "n": 30
                    },
                    "ingredients": [
                        {
                            "amount": {
                                "d": 2,
                                "n": 15
                            },
                            "item_name": "Desc_XmasBranch_C"
                        },
                        {
                            "amount": {
                                "d": 1,
                                "n": 3
                            },
                            "item_name": "Desc_XmasBallCluster_C"
                        }
                    ],
                    "is_alternate": false,
                    "name": "FICSMAS Wreath",
                    "produced_in": [
                        "Build_AssemblerMk1_C"
                    ]
                }
            ]
        }
    },
    "crafting_products": [
        "Desc_SpaceElevatorPart_12_C",
        "Desc_CircuitBoardHighSpeed_C",
        "Desc_SpaceElevatorPart_5_C",
        "Desc_AluminumPlate_C",
        "Desc_AlienDNACapsule_C",
        "Desc_AlienPowerFuel_C",
        "Desc_AlienProtein_C",
        "Desc_AluminaSolution_C",
        "Desc_AluminumCasing_C",
        "Desc_AluminumIngot_C",
        "Desc_AluminumScrap_C",
        "Desc_SpaceElevatorPart_7_C",
        "Desc_SpaceElevatorPart_3_C",
        "Desc_SpaceElevatorPart_11_C",
        "Desc_Battery_C",
        "Desc_OreBauxite_C",
        "Desc_SpaceElevatorPart_10_C",
        "Desc_GenericBiomass_C",
        "Desc_Gunpowder_C",
        "BP_EquipmentDescriptorJumpingStilts_C",
        "Desc_XmasBall2_C",
        "Desc_Cable_C",
        "Desc_CandyCane_C",
        "BP_EquipmentDescriptorCandyCane_C",
        "Desc_GoldIngot_C",
        "Desc_OreGold_C",
        "Desc_Chainsaw_C",
        "Desc_CircuitBoard_C",
        "Desc_NobeliskCluster_C",
        "Desc_Coal_C",
        "Desc_CompactedCoal_C",
        "Desc_Computer_C",
        "Desc_Cement_C",
        "Desc_CoolingSystem_C",
        "Desc_XmasBall3_C",
        "Desc_CopperIngot_C",
        "Desc_OreCopper_C",
        "Desc_CopperDust_C",
        "Desc_CopperSheet_C",
        "Desc_LiquidOil_C",
        "Desc_CrystalOscillator_C",
        "Desc_DarkMatter_C",
        "Desc_DarkEnergy_C",
        "Desc_Diamond_C",
        "Desc_DissolvedSilica_C",
        "Desc_ElectromagneticControlRod_C",
        "Desc_FluidCanister_C",
        "Desc_GasTank_C",
        "Desc_SteelPlateReinforced_C",
        "Desc_PlutoniumCell_C",
        "Desc_UraniumCell_C",
        "Desc_QuantumEnergy_C",
        "Desc_Rebar_Explosive_C",
        "Desc_Snow_C",
        "Desc_XmasBow_C",
        "Desc_XmasBallCluster_C",
        "Desc_XmasBranch_C",
        "Desc_XmasStar_C",
        "Desc_XmasWreath_C",
        "Desc_Fabric_C",
        "Desc_GolfCart_C",
        "Desc_Fireworks_Projectile_02_C",
        "Desc_FicsiteIngot_C",
        "Desc_FicsiteMesh_C",
        "Desc_Ficsonium_C",
        "Desc_FicsoniumFuelRod_C",
        "Desc_LiquidFuel_C",
        "Desc_ModularFrameFused_C",
        "Desc_Filter_C",
        "BP_EquipmentDescriptorGasmask_C",
        "Desc_NobeliskGas_C",
        "Desc_GolfCartGold_C",
        "BP_EquipmentDescriptorHazmatSuit_C",
        "Desc_AluminumPlateReinforced_C",
        "Desc_ModularFrameHeavy_C",
        "Desc_HeavyOilResidue_C",
        "Desc_HighSpeedConnector_C",
        "Desc_CartridgeSmartProjectile_C",
        "BP_EquipmentDescriptorHoverPack_C",
        "Desc_HazmatFilter_C",
        "Desc_IonizedFuel_C",
        "Desc_XmasBall4_C",
        "Desc_IronIngot_C",
        "Desc_OreIron_C",
        "Desc_IronPlate_C",
        "Desc_SpikedRebar_C",
        "Desc_IronRod_C",
        "BP_EquipmentDescriptorJetPack_C",
        "Desc_Stone_C",
        "Desc_LiquidBiofuel_C",
        "Desc_SpaceElevatorPart_6_C",
        "Desc_Medkit_C",
        "Desc_SpaceElevatorPart_4_C",
        "Desc_ModularFrame_C",
        "Desc_Motor_C",
        "Desc_TemporalProcessor_C",
        "Desc_NitricAcid_C",
        "Desc_NitrogenGas_C",
        "Desc_NobeliskExplosive_C",
        "BP_EquipmentDescriptorNobeliskDetonator_C",
        "Desc_SpaceElevatorPart_9_C",
        "Desc_NobeliskNuke_C",
        "BP_EquipmentDescriptorObjectScanner_C",
        "Desc_PackagedAlumina_C",
        "Desc_Fuel_C",
        "Desc_PackagedOilResidue_C",
        "Desc_PackagedIonizedFuel_C",
        "Desc_PackagedBiofuel_C",
        "Desc_PackagedNitricAcid_C",
        "Desc_PackagedNitrogenGas_C",
        "Desc_PackagedOil_C",
        "Desc_PackagedRocketFuel_C",
        "Desc_PackagedSulfuricAcid_C",
        "Desc_TurboFuel_C",
        "Desc_PackagedWater_C",
        "Desc_Parachute_C",
        "Desc_PetroleumCoke_C",
        "Desc_Plastic_C",
        "Desc_PlutoniumFuelRod_C",
        "Desc_PlutoniumPellet_C",
        "Desc_PolymerResin_C",
        "BP_ItemDescriptorPortableMiner_C",
        "Desc_CrystalShard_C",
        "Desc_PressureConversionCube_C",
        "Desc_NobeliskShockwave_C",
        "Desc_QuartzCrystal_C",
        "Desc_HighSpeedWire_C",
        "Desc_ModularFrameLightweight_C",
        "Desc_RawQuartz_C",
        "Desc_SAMIngot_C",
        "Desc_RebarGunProjectile_C",
        "Desc_XmasBall1_C",
        "Desc_IronPlateReinforced_C",
        "BP_EquipmentDescriptorRifle_C",
        "Desc_CartridgeStandard_C",
        "Desc_RocketFuel_C",
        "Desc_Rotor_C",
        "Desc_Rubber_C",
        "Desc_SAMFluctuator_C",
        "Desc_IronScrew_C",
        "Desc_Rebar_Spreadshot_C",
        "Desc_Silica_C",
        "Desc_SingularityCell_C",
        "Desc_SpaceElevatorPart_1_C",
        "Desc_GunpowderMK2_C",
        "Desc_SnowballProjectile_C",
        "Desc_Biofuel_C",
        "Desc_Fireworks_Projectile_03_C",
        "Desc_Stator_C",
        "Desc_SteelPlate_C",
        "Desc_SteelIngot_C",
        "Desc_SteelPipe_C",
        "Desc_Rebar_Stunshot_C",
        "Desc_Sulfur_C",
        "Desc_SulfuricAcid_C",
        "Desc_ComputerSuper_C",
        "Desc_QuantumOscillator_C",
        "Desc_Fireworks_Projectile_01_C",
        "Desc_SpaceElevatorPart_8_C",
        "Desc_TimeCrystal_C",
        "Desc_MotorLightweight_C",
        "Desc_CartridgeChaos_C",
        "Desc_LiquidTurboFuel_C",
        "Desc_OreUranium_C",
        "Desc_NuclearFuelRod_C",
        "Desc_SpaceElevatorPart_2_C",
        "Desc_Water_C",
        "Desc_Wire_C",
        "BP_EquipmentDescriptorStunSpear_C",
        "BP_EquipmentDescriptorShockShank_C",
        "BP_EqDescZipLine_C"
    ],
    "transporters": {
        "conveyor_belts": [
            {
                "name": "Conveyor Belt Mk.1",
                "speed": {
                    "d": 1,
                    "n": 1
                }
            },
            {
                "name": "Conveyor Belt Mk.2",
                "speed": {
                    "d": 2,
                    "n": 1
                }
            },
            {
                "name": "Conveyor Belt Mk.3",
                "speed": {
                    "d": 9,
                    "n": 2
                }
            },
            {
                "name": "Conveyor Belt Mk.4",
                "speed": {
                    "d": 8,
                    "n": 1
                }
            },
            {
                "name": "Conveyor Belt Mk.5",
                "speed": {
                    "d": 13,
                    "n": 1
                }
            },
            {
                "name": "Conveyor Belt Mk.6",
                "speed": {
                    "d": 20,
                    "n": 1
                }
            }
        ],
        "pipelines": [
            {
                "name": "Pipeline Mk.1",
                "speed": {
                    "d": 5,
                    "n": 1
                }
            },
            {
                "name": "Pipeline Mk.2",
                "speed": {
                    "d": 10,
                    "n": 1
                }
            }
        ]
    }
};
export default game_data;
