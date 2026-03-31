/* This file is auto-generated! */

/** @import {Fraction} from "mathjs" */

/**
 * @typedef {string} GameObjectId
 * @typedef {Object.<string, Fraction>} CountedItems
 * @typedef {{
 *      name: GameObjectId,
 *      products: CountedItems,
 *      ingredients: CountedItems,
 *      duration: Fraction,
 *      is_alternate: boolean,
 *      produced_in: string[]
 * }} Recipe
 *
 * @typedef {{
 *      id: string,
 *      name: string,
 *      recipes: GameObjectId[],
 *      form: "SOLID" | "LIQUID" | "GAS"
 * }} CraftingObject
 */

/**
 * @type {{
 *      crafting_objects: Object.<string, CraftingObject>,
 *      crafting_products: GameObjectId[],
 *      crafting_ingredients: GameObjectId[],
 *      recipes: Object.<string, Recipe>
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
        "Desc_Crystal_mk2_C"
    ],
    "crafting_objects": {
        "BP_ItemDescriptorPortableMiner_C": {
            "form": "SOLID",
            "id": "BP_ItemDescriptorPortableMiner_C",
            "name": "Portable Miner",
            "recipes": [
                "Recipe_PortableMiner_C",
                "Recipe_Alternate_AutomatedMiner_C"
            ]
        },
        "Desc_AlienDNACapsule_C": {
            "form": "SOLID",
            "id": "Desc_AlienDNACapsule_C",
            "name": "Alien DNA Capsule",
            "recipes": [
                "Recipe_AlienDNACapsule_C"
            ]
        },
        "Desc_AlienPowerFuel_C": {
            "form": "SOLID",
            "id": "Desc_AlienPowerFuel_C",
            "name": "Alien Power Matrix",
            "recipes": [
                "Recipe_AlienPowerFuel_C"
            ]
        },
        "Desc_AlienProtein_C": {
            "form": "SOLID",
            "id": "Desc_AlienProtein_C",
            "name": "Alien Protein",
            "recipes": [
                "Recipe_Protein_Crab_C",
                "Recipe_Protein_Stinger_C",
                "Recipe_Protein_Spitter_C",
                "Recipe_Protein_Hog_C"
            ]
        },
        "Desc_AluminaSolution_C": {
            "form": "LIQUID",
            "id": "Desc_AluminaSolution_C",
            "name": "Alumina Solution",
            "recipes": [
                "Recipe_AluminaSolution_C",
                "Recipe_UnpackageAlumina_C",
                "Recipe_Alternate_SloppyAlumina_C"
            ]
        },
        "Desc_AluminumCasing_C": {
            "form": "SOLID",
            "id": "Desc_AluminumCasing_C",
            "name": "Aluminum Casing",
            "recipes": [
                "Recipe_AluminumCasing_C",
                "Recipe_Alternate_AlcladCasing_C"
            ]
        },
        "Desc_AluminumIngot_C": {
            "form": "SOLID",
            "id": "Desc_AluminumIngot_C",
            "name": "Aluminum Ingot",
            "recipes": [
                "Recipe_IngotAluminum_C",
                "Recipe_PureAluminumIngot_C"
            ]
        },
        "Desc_AluminumPlateReinforced_C": {
            "form": "SOLID",
            "id": "Desc_AluminumPlateReinforced_C",
            "name": "Heat Sink",
            "recipes": [
                "Recipe_HeatSink_C",
                "Recipe_Alternate_HeatSink_1_C"
            ]
        },
        "Desc_AluminumPlate_C": {
            "form": "SOLID",
            "id": "Desc_AluminumPlate_C",
            "name": "Alclad Aluminum Sheet",
            "recipes": [
                "Recipe_AluminumSheet_C"
            ]
        },
        "Desc_AluminumScrap_C": {
            "form": "SOLID",
            "id": "Desc_AluminumScrap_C",
            "name": "Aluminum Scrap",
            "recipes": [
                "Recipe_AluminumScrap_C",
                "Recipe_Alternate_ElectroAluminumScrap_C",
                "Recipe_Alternate_InstantScrap_C"
            ]
        },
        "Desc_Battery_C": {
            "form": "SOLID",
            "id": "Desc_Battery_C",
            "name": "Battery",
            "recipes": [
                "Recipe_Battery_C",
                "Recipe_Alternate_ClassicBattery_C"
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
                "Recipe_Biofuel_C"
            ]
        },
        "Desc_Cable_C": {
            "form": "SOLID",
            "id": "Desc_Cable_C",
            "name": "Cable",
            "recipes": [
                "Recipe_Cable_C",
                "Recipe_Alternate_CoatedCable_C",
                "Recipe_Alternate_Cable_2_C",
                "Recipe_Alternate_Cable_1_C"
            ]
        },
        "Desc_CandyCane_C": {
            "form": "SOLID",
            "id": "Desc_CandyCane_C",
            "name": "Candy Cane",
            "recipes": [
                "Recipe_CandyCane_C"
            ]
        },
        "Desc_CartridgeChaos_C": {
            "form": "SOLID",
            "id": "Desc_CartridgeChaos_C",
            "name": "Turbo Rifle Ammo",
            "recipes": [
                "Recipe_CartridgeChaos_Packaged_C",
                "Recipe_CartridgeChaos_C"
            ]
        },
        "Desc_CartridgeSmartProjectile_C": {
            "form": "SOLID",
            "id": "Desc_CartridgeSmartProjectile_C",
            "name": "Homing Rifle Ammo",
            "recipes": [
                "Recipe_CartridgeSmart_C"
            ]
        },
        "Desc_CartridgeStandard_C": {
            "form": "SOLID",
            "id": "Desc_CartridgeStandard_C",
            "name": "Rifle Ammo",
            "recipes": [
                "Recipe_Cartridge_C"
            ]
        },
        "Desc_Cement_C": {
            "form": "SOLID",
            "id": "Desc_Cement_C",
            "name": "Concrete",
            "recipes": [
                "Recipe_Concrete_C",
                "Recipe_Alternate_WetConcrete_C",
                "Recipe_Alternate_RubberConcrete_C",
                "Recipe_Alternate_Concrete_C"
            ]
        },
        "Desc_CircuitBoardHighSpeed_C": {
            "form": "SOLID",
            "id": "Desc_CircuitBoardHighSpeed_C",
            "name": "AI Limiter",
            "recipes": [
                "Recipe_AILimiter_C",
                "Recipe_Alternate_AILimiter_Plastic_C"
            ]
        },
        "Desc_CircuitBoard_C": {
            "form": "SOLID",
            "id": "Desc_CircuitBoard_C",
            "name": "Circuit Board",
            "recipes": [
                "Recipe_CircuitBoard_C",
                "Recipe_Alternate_ElectrodeCircuitBoard_C",
                "Recipe_Alternate_CircuitBoard_2_C",
                "Recipe_Alternate_CircuitBoard_1_C"
            ]
        },
        "Desc_Coal_C": {
            "form": "SOLID",
            "id": "Desc_Coal_C",
            "name": "Coal",
            "recipes": [
                "Recipe_Coal_Iron_C",
                "Recipe_Coal_Limestone_C",
                "Recipe_Alternate_Coal_1_C",
                "Recipe_Alternate_Coal_2_C"
            ]
        },
        "Desc_CompactedCoal_C": {
            "form": "SOLID",
            "id": "Desc_CompactedCoal_C",
            "name": "Compacted Coal",
            "recipes": [
                "Recipe_Alternate_EnrichedCoal_C",
                "Recipe_Alternate_RocketFuel_Nitro_C",
                "Recipe_RocketFuel_C",
                "Recipe_Alternate_IonizedFuel_Dark_C",
                "Recipe_IonizedFuel_C"
            ]
        },
        "Desc_ComputerSuper_C": {
            "form": "SOLID",
            "id": "Desc_ComputerSuper_C",
            "name": "Supercomputer",
            "recipes": [
                "Recipe_ComputerSuper_C",
                "Recipe_Alternate_SuperStateComputer_C",
                "Recipe_Alternate_OCSupercomputer_C"
            ]
        },
        "Desc_Computer_C": {
            "form": "SOLID",
            "id": "Desc_Computer_C",
            "name": "Computer",
            "recipes": [
                "Recipe_Computer_C",
                "Recipe_Alternate_Computer_2_C",
                "Recipe_Alternate_Computer_1_C"
            ]
        },
        "Desc_CoolingSystem_C": {
            "form": "SOLID",
            "id": "Desc_CoolingSystem_C",
            "name": "Cooling System",
            "recipes": [
                "Recipe_CoolingSystem_C",
                "Recipe_Alternate_CoolingDevice_C"
            ]
        },
        "Desc_CopperDust_C": {
            "form": "SOLID",
            "id": "Desc_CopperDust_C",
            "name": "Copper Powder",
            "recipes": [
                "Recipe_CopperDust_C"
            ]
        },
        "Desc_CopperIngot_C": {
            "form": "SOLID",
            "id": "Desc_CopperIngot_C",
            "name": "Copper Ingot",
            "recipes": [
                "Recipe_IngotCopper_C",
                "Recipe_Alternate_PureCopperIngot_C",
                "Recipe_Alternate_CopperAlloyIngot_C",
                "Recipe_Alternate_CopperIngot_Tempered_C",
                "Recipe_Alternate_CopperIngot_Leached_C"
            ]
        },
        "Desc_CopperSheet_C": {
            "form": "SOLID",
            "id": "Desc_CopperSheet_C",
            "name": "Copper Sheet",
            "recipes": [
                "Recipe_CopperSheet_C",
                "Recipe_Alternate_SteamedCopperSheet_C"
            ]
        },
        "Desc_CrystalOscillator_C": {
            "form": "SOLID",
            "id": "Desc_CrystalOscillator_C",
            "name": "Crystal Oscillator",
            "recipes": [
                "Recipe_CrystalOscillator_C",
                "Recipe_Alternate_CrystalOscillator_C"
            ]
        },
        "Desc_CrystalShard_C": {
            "form": "SOLID",
            "id": "Desc_CrystalShard_C",
            "name": "Power Shard",
            "recipes": [
                "Recipe_PowerCrystalShard_2_C",
                "Recipe_PowerCrystalShard_3_C",
                "Recipe_SyntheticPowerShard_C",
                "Recipe_PowerCrystalShard_1_C"
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
                "Recipe_DarkEnergy_C",
                "Recipe_SuperpositionOscillator_C",
                "Recipe_TemporalProcessor_C",
                "Recipe_SpaceElevatorPart_12_C",
                "Recipe_FicsoniumFuelRod_C",
                "Recipe_AlienPowerFuel_C",
                "Recipe_SyntheticPowerShard_C"
            ]
        },
        "Desc_DarkMatter_C": {
            "form": "SOLID",
            "id": "Desc_DarkMatter_C",
            "name": "Dark Matter Crystal",
            "recipes": [
                "Recipe_DarkMatter_C",
                "Recipe_Alternate_DarkMatter_Trap_C",
                "Recipe_Alternate_DarkMatter_Crystallization_C"
            ]
        },
        "Desc_Diamond_C": {
            "form": "SOLID",
            "id": "Desc_Diamond_C",
            "name": "Diamonds",
            "recipes": [
                "Recipe_Diamond_C",
                "Recipe_Alternate_Diamond_Turbo_C",
                "Recipe_Alternate_Diamond_Pink_C",
                "Recipe_Alternate_Diamond_Petroleum_C",
                "Recipe_Alternate_Diamond_OilBased_C",
                "Recipe_Alternate_Diamond_Cloudy_C"
            ]
        },
        "Desc_DissolvedSilica_C": {
            "form": "LIQUID",
            "id": "Desc_DissolvedSilica_C",
            "name": "Dissolved Silica",
            "recipes": [
                "Recipe_Alternate_Quartz_Purified_C"
            ]
        },
        "Desc_ElectromagneticControlRod_C": {
            "form": "SOLID",
            "id": "Desc_ElectromagneticControlRod_C",
            "name": "Electromagnetic Control Rod",
            "recipes": [
                "Recipe_ElectromagneticControlRod_C",
                "Recipe_Alternate_ElectromagneticControlRod_1_C"
            ]
        },
        "Desc_Fabric_C": {
            "form": "SOLID",
            "id": "Desc_Fabric_C",
            "name": "Fabric",
            "recipes": [
                "Recipe_Fabric_C",
                "Recipe_Alternate_PolyesterFabric_C"
            ]
        },
        "Desc_FicsiteIngot_C": {
            "form": "SOLID",
            "id": "Desc_FicsiteIngot_C",
            "name": "Ficsite Ingot",
            "recipes": [
                "Recipe_FicsiteIngot_Iron_C",
                "Recipe_FicsiteIngot_AL_C",
                "Recipe_FicsiteIngot_CAT_C"
            ]
        },
        "Desc_FicsiteMesh_C": {
            "form": "SOLID",
            "id": "Desc_FicsiteMesh_C",
            "name": "Ficsite Trigon",
            "recipes": [
                "Recipe_FicsiteMesh_C"
            ]
        },
        "Desc_FicsoniumFuelRod_C": {
            "form": "SOLID",
            "id": "Desc_FicsoniumFuelRod_C",
            "name": "Ficsonium Fuel Rod",
            "recipes": [
                "Recipe_FicsoniumFuelRod_C"
            ]
        },
        "Desc_Ficsonium_C": {
            "form": "SOLID",
            "id": "Desc_Ficsonium_C",
            "name": "Ficsonium",
            "recipes": [
                "Recipe_Ficsonium_C"
            ]
        },
        "Desc_Filter_C": {
            "form": "SOLID",
            "id": "Desc_Filter_C",
            "name": "Gas Filter",
            "recipes": [
                "Recipe_FilterGasMask_C"
            ]
        },
        "Desc_Fireworks_Projectile_01_C": {
            "form": "SOLID",
            "id": "Desc_Fireworks_Projectile_01_C",
            "name": "Sweet Fireworks",
            "recipes": [
                "Recipe_Fireworks_01_C"
            ]
        },
        "Desc_Fireworks_Projectile_02_C": {
            "form": "SOLID",
            "id": "Desc_Fireworks_Projectile_02_C",
            "name": "Fancy Fireworks",
            "recipes": [
                "Recipe_Fireworks_02_C"
            ]
        },
        "Desc_Fireworks_Projectile_03_C": {
            "form": "SOLID",
            "id": "Desc_Fireworks_Projectile_03_C",
            "name": "Sparkly Fireworks",
            "recipes": [
                "Recipe_Fireworks_03_C"
            ]
        },
        "Desc_FluidCanister_C": {
            "form": "SOLID",
            "id": "Desc_FluidCanister_C",
            "name": "Empty Canister",
            "recipes": [
                "Recipe_FluidCanister_C",
                "Recipe_UnpackageTurboFuel_C",
                "Recipe_Alternate_SteelCanister_C",
                "Recipe_UnpackageBioFuel_C",
                "Recipe_UnpackageFuel_C",
                "Recipe_UnpackageOil_C",
                "Recipe_UnpackageOilResidue_C",
                "Recipe_UnpackageWater_C",
                "Recipe_UnpackageAlumina_C",
                "Recipe_Alternate_CoatedIronCanister_C",
                "Recipe_UnpackageSulfuricAcid_C"
            ]
        },
        "Desc_Fuel_C": {
            "form": "SOLID",
            "id": "Desc_Fuel_C",
            "name": "Packaged Fuel",
            "recipes": [
                "Recipe_Fuel_C",
                "Recipe_Alternate_DilutedPackagedFuel_C"
            ]
        },
        "Desc_GasTank_C": {
            "form": "SOLID",
            "id": "Desc_GasTank_C",
            "name": "Empty Fluid Tank",
            "recipes": [
                "Recipe_GasTank_C",
                "Recipe_UnpackageRocketFuel_C",
                "Recipe_UnpackageIonizedFuel_C",
                "Recipe_UnpackageNitricAcid_C",
                "Recipe_UnpackageNitrogen_C"
            ]
        },
        "Desc_GenericBiomass_C": {
            "form": "SOLID",
            "id": "Desc_GenericBiomass_C",
            "name": "Biomass",
            "recipes": [
                "Recipe_Biomass_Wood_C",
                "Recipe_Biomass_Leaves_C",
                "Recipe_Biomass_AlienProtein_C",
                "Recipe_Biomass_Mycelia_C"
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
                "Recipe_IngotCaterium_C",
                "Recipe_Alternate_PureCateriumIngot_C",
                "Recipe_Alternate_CateriumIngot_Tempered_C",
                "Recipe_Alternate_CateriumIngot_Leached_C"
            ]
        },
        "Desc_GunpowderMK2_C": {
            "form": "SOLID",
            "id": "Desc_GunpowderMK2_C",
            "name": "Smokeless Powder",
            "recipes": [
                "Recipe_GunpowderMK2_C"
            ]
        },
        "Desc_Gunpowder_C": {
            "form": "SOLID",
            "id": "Desc_Gunpowder_C",
            "name": "Black Powder",
            "recipes": [
                "Recipe_Gunpowder_C",
                "Recipe_Alternate_Gunpowder_1_C"
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
                "Recipe_FilterHazmat_C"
            ]
        },
        "Desc_HeavyOilResidue_C": {
            "form": "LIQUID",
            "id": "Desc_HeavyOilResidue_C",
            "name": "Heavy Oil Residue",
            "recipes": [
                "Recipe_Alternate_HeavyOilResidue_C",
                "Recipe_Plastic_C",
                "Recipe_Rubber_C",
                "Recipe_UnpackageOilResidue_C",
                "Recipe_Alternate_PolymerResin_C"
            ]
        },
        "Desc_HighSpeedConnector_C": {
            "form": "SOLID",
            "id": "Desc_HighSpeedConnector_C",
            "name": "High-Speed Connector",
            "recipes": [
                "Recipe_HighSpeedConnector_C",
                "Recipe_Alternate_HighSpeedConnector_C"
            ]
        },
        "Desc_HighSpeedWire_C": {
            "form": "SOLID",
            "id": "Desc_HighSpeedWire_C",
            "name": "Quickwire",
            "recipes": [
                "Recipe_Quickwire_C",
                "Recipe_Alternate_Quickwire_C"
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
                "Recipe_IonizedFuel_C",
                "Recipe_Alternate_IonizedFuel_Dark_C",
                "Recipe_UnpackageIonizedFuel_C"
            ]
        },
        "Desc_IronIngot_C": {
            "form": "SOLID",
            "id": "Desc_IronIngot_C",
            "name": "Iron Ingot",
            "recipes": [
                "Recipe_IngotIron_C",
                "Recipe_Alternate_PureIronIngot_C",
                "Recipe_Alternate_IronIngot_Leached_C",
                "Recipe_Alternate_IronIngot_Basic_C",
                "Recipe_Alternate_IngotIron_C"
            ]
        },
        "Desc_IronPlateReinforced_C": {
            "form": "SOLID",
            "id": "Desc_IronPlateReinforced_C",
            "name": "Reinforced Iron Plate",
            "recipes": [
                "Recipe_IronPlateReinforced_C",
                "Recipe_Alternate_AdheredIronPlate_C",
                "Recipe_Alternate_ReinforcedIronPlate_2_C",
                "Recipe_Alternate_ReinforcedIronPlate_1_C"
            ]
        },
        "Desc_IronPlate_C": {
            "form": "SOLID",
            "id": "Desc_IronPlate_C",
            "name": "Iron Plate",
            "recipes": [
                "Recipe_IronPlate_C",
                "Recipe_Alternate_CoatedIronPlate_C",
                "Recipe_Alternate_SteelCastedPlate_C"
            ]
        },
        "Desc_IronRod_C": {
            "form": "SOLID",
            "id": "Desc_IronRod_C",
            "name": "Iron Rod",
            "recipes": [
                "Recipe_IronRod_C",
                "Recipe_Alternate_SteelRod_C",
                "Recipe_Alternate_AluminumRod_C"
            ]
        },
        "Desc_IronScrew_C": {
            "form": "SOLID",
            "id": "Desc_IronScrew_C",
            "name": "Screws",
            "recipes": [
                "Recipe_Screw_C",
                "Recipe_Alternate_Screw_2_C",
                "Recipe_Alternate_Screw_C"
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
                "Recipe_LiquidBiofuel_C",
                "Recipe_UnpackageBioFuel_C"
            ]
        },
        "Desc_LiquidFuel_C": {
            "form": "LIQUID",
            "id": "Desc_LiquidFuel_C",
            "name": "Fuel",
            "recipes": [
                "Recipe_LiquidFuel_C",
                "Recipe_ResidualFuel_C",
                "Recipe_UnpackageFuel_C",
                "Recipe_Alternate_DilutedFuel_C"
            ]
        },
        "Desc_LiquidOil_C": {
            "form": "LIQUID",
            "id": "Desc_LiquidOil_C",
            "name": "Crude Oil",
            "recipes": [
                "Recipe_UnpackageOil_C"
            ]
        },
        "Desc_LiquidTurboFuel_C": {
            "form": "LIQUID",
            "id": "Desc_LiquidTurboFuel_C",
            "name": "Turbofuel",
            "recipes": [
                "Recipe_Alternate_Turbofuel_C",
                "Recipe_UnpackageTurboFuel_C",
                "Recipe_Alternate_TurboHeavyFuel_C",
                "Recipe_Alternate_TurboBlendFuel_C"
            ]
        },
        "Desc_ModularFrameFused_C": {
            "form": "SOLID",
            "id": "Desc_ModularFrameFused_C",
            "name": "Fused Modular Frame",
            "recipes": [
                "Recipe_FusedModularFrame_C",
                "Recipe_Alternate_HeatFusedFrame_C"
            ]
        },
        "Desc_ModularFrameHeavy_C": {
            "form": "SOLID",
            "id": "Desc_ModularFrameHeavy_C",
            "name": "Heavy Modular Frame",
            "recipes": [
                "Recipe_ModularFrameHeavy_C",
                "Recipe_Alternate_HeavyFlexibleFrame_C",
                "Recipe_Alternate_ModularFrameHeavy_C"
            ]
        },
        "Desc_ModularFrameLightweight_C": {
            "form": "SOLID",
            "id": "Desc_ModularFrameLightweight_C",
            "name": "Radio Control Unit",
            "recipes": [
                "Recipe_RadioControlUnit_C",
                "Recipe_Alternate_RadioControlSystem_C",
                "Recipe_Alternate_RadioControlUnit_1_C"
            ]
        },
        "Desc_ModularFrame_C": {
            "form": "SOLID",
            "id": "Desc_ModularFrame_C",
            "name": "Modular Frame",
            "recipes": [
                "Recipe_ModularFrame_C",
                "Recipe_Alternate_BoltedFrame_C",
                "Recipe_Alternate_ModularFrame_C"
            ]
        },
        "Desc_MotorLightweight_C": {
            "form": "SOLID",
            "id": "Desc_MotorLightweight_C",
            "name": "Turbo Motor",
            "recipes": [
                "Recipe_MotorTurbo_C",
                "Recipe_Alternate_TurboPressureMotor_C",
                "Recipe_Alternate_TurboMotor_1_C"
            ]
        },
        "Desc_Motor_C": {
            "form": "SOLID",
            "id": "Desc_Motor_C",
            "name": "Motor",
            "recipes": [
                "Recipe_Motor_C",
                "Recipe_Alternate_ElectricMotor_C",
                "Recipe_Alternate_Motor_1_C"
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
                "Recipe_NitricAcid_C",
                "Recipe_UnpackageNitricAcid_C"
            ]
        },
        "Desc_NitrogenGas_C": {
            "form": "GAS",
            "id": "Desc_NitrogenGas_C",
            "name": "Nitrogen Gas",
            "recipes": [
                "Recipe_Nitrogen_Bauxite_C",
                "Recipe_Nitrogen_Caterium_C",
                "Recipe_UnpackageNitrogen_C"
            ]
        },
        "Desc_NobeliskCluster_C": {
            "form": "SOLID",
            "id": "Desc_NobeliskCluster_C",
            "name": "Cluster Nobelisk",
            "recipes": [
                "Recipe_NobeliskCluster_C"
            ]
        },
        "Desc_NobeliskExplosive_C": {
            "form": "SOLID",
            "id": "Desc_NobeliskExplosive_C",
            "name": "Nobelisk",
            "recipes": [
                "Recipe_Nobelisk_C"
            ]
        },
        "Desc_NobeliskGas_C": {
            "form": "SOLID",
            "id": "Desc_NobeliskGas_C",
            "name": "Gas Nobelisk",
            "recipes": [
                "Recipe_NobeliskGas_C"
            ]
        },
        "Desc_NobeliskNuke_C": {
            "form": "SOLID",
            "id": "Desc_NobeliskNuke_C",
            "name": "Nuke Nobelisk",
            "recipes": [
                "Recipe_NobeliskNuke_C"
            ]
        },
        "Desc_NobeliskShockwave_C": {
            "form": "SOLID",
            "id": "Desc_NobeliskShockwave_C",
            "name": "Pulse Nobelisk",
            "recipes": [
                "Recipe_NobeliskShockwave_C"
            ]
        },
        "Desc_NuclearFuelRod_C": {
            "form": "SOLID",
            "id": "Desc_NuclearFuelRod_C",
            "name": "Uranium Fuel Rod",
            "recipes": [
                "Recipe_NuclearFuelRod_C",
                "Recipe_Alternate_NuclearFuelRod_1_C"
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
                "Recipe_Bauxite_Caterium_C",
                "Recipe_Bauxite_Copper_C"
            ]
        },
        "Desc_OreCopper_C": {
            "form": "SOLID",
            "id": "Desc_OreCopper_C",
            "name": "Copper Ore",
            "recipes": [
                "Recipe_Copper_Quartz_C",
                "Recipe_Copper_Sulfur_C"
            ]
        },
        "Desc_OreGold_C": {
            "form": "SOLID",
            "id": "Desc_OreGold_C",
            "name": "Caterium Ore",
            "recipes": [
                "Recipe_Caterium_Copper_C",
                "Recipe_Caterium_Quartz_C"
            ]
        },
        "Desc_OreIron_C": {
            "form": "SOLID",
            "id": "Desc_OreIron_C",
            "name": "Iron Ore",
            "recipes": [
                "Recipe_Iron_Limestone_C"
            ]
        },
        "Desc_OreUranium_C": {
            "form": "SOLID",
            "id": "Desc_OreUranium_C",
            "name": "Uranium",
            "recipes": [
                "Recipe_Uranium_Bauxite_C"
            ]
        },
        "Desc_PackagedAlumina_C": {
            "form": "SOLID",
            "id": "Desc_PackagedAlumina_C",
            "name": "Packaged Alumina Solution",
            "recipes": [
                "Recipe_PackagedAlumina_C"
            ]
        },
        "Desc_PackagedBiofuel_C": {
            "form": "SOLID",
            "id": "Desc_PackagedBiofuel_C",
            "name": "Packaged Liquid Biofuel",
            "recipes": [
                "Recipe_PackagedBiofuel_C"
            ]
        },
        "Desc_PackagedIonizedFuel_C": {
            "form": "SOLID",
            "id": "Desc_PackagedIonizedFuel_C",
            "name": "Packaged Ionized Fuel",
            "recipes": [
                "Recipe_PackagedIonizedFuel_C"
            ]
        },
        "Desc_PackagedNitricAcid_C": {
            "form": "SOLID",
            "id": "Desc_PackagedNitricAcid_C",
            "name": "Packaged Nitric Acid",
            "recipes": [
                "Recipe_PackagedNitricAcid_C"
            ]
        },
        "Desc_PackagedNitrogenGas_C": {
            "form": "SOLID",
            "id": "Desc_PackagedNitrogenGas_C",
            "name": "Packaged Nitrogen Gas",
            "recipes": [
                "Recipe_PackagedNitrogen_C"
            ]
        },
        "Desc_PackagedOilResidue_C": {
            "form": "SOLID",
            "id": "Desc_PackagedOilResidue_C",
            "name": "Packaged Heavy Oil Residue",
            "recipes": [
                "Recipe_PackagedOilResidue_C"
            ]
        },
        "Desc_PackagedOil_C": {
            "form": "SOLID",
            "id": "Desc_PackagedOil_C",
            "name": "Packaged Oil",
            "recipes": [
                "Recipe_PackagedCrudeOil_C"
            ]
        },
        "Desc_PackagedRocketFuel_C": {
            "form": "SOLID",
            "id": "Desc_PackagedRocketFuel_C",
            "name": "Packaged Rocket Fuel",
            "recipes": [
                "Recipe_PackagedRocketFuel_C"
            ]
        },
        "Desc_PackagedSulfuricAcid_C": {
            "form": "SOLID",
            "id": "Desc_PackagedSulfuricAcid_C",
            "name": "Packaged Sulfuric Acid",
            "recipes": [
                "Recipe_PackagedSulfuricAcid_C"
            ]
        },
        "Desc_PackagedWater_C": {
            "form": "SOLID",
            "id": "Desc_PackagedWater_C",
            "name": "Packaged Water",
            "recipes": [
                "Recipe_PackagedWater_C"
            ]
        },
        "Desc_PetroleumCoke_C": {
            "form": "SOLID",
            "id": "Desc_PetroleumCoke_C",
            "name": "Petroleum Coke",
            "recipes": [
                "Recipe_PetroleumCoke_C"
            ]
        },
        "Desc_Plastic_C": {
            "form": "SOLID",
            "id": "Desc_Plastic_C",
            "name": "Plastic",
            "recipes": [
                "Recipe_Plastic_C",
                "Recipe_ResidualPlastic_C",
                "Recipe_Alternate_Plastic_1_C"
            ]
        },
        "Desc_PlutoniumCell_C": {
            "form": "SOLID",
            "id": "Desc_PlutoniumCell_C",
            "name": "Encased Plutonium Cell",
            "recipes": [
                "Recipe_PlutoniumCell_C",
                "Recipe_Alternate_InstantPlutoniumCell_C"
            ]
        },
        "Desc_PlutoniumFuelRod_C": {
            "form": "SOLID",
            "id": "Desc_PlutoniumFuelRod_C",
            "name": "Plutonium Fuel Rod",
            "recipes": [
                "Recipe_PlutoniumFuelRod_C",
                "Recipe_Alternate_PlutoniumFuelUnit_C"
            ]
        },
        "Desc_PlutoniumPellet_C": {
            "form": "SOLID",
            "id": "Desc_PlutoniumPellet_C",
            "name": "Plutonium Pellet",
            "recipes": [
                "Recipe_Plutonium_C"
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
                "Recipe_Alternate_PolymerResin_C",
                "Recipe_LiquidFuel_C",
                "Recipe_Alternate_HeavyOilResidue_C"
            ]
        },
        "Desc_PressureConversionCube_C": {
            "form": "SOLID",
            "id": "Desc_PressureConversionCube_C",
            "name": "Pressure Conversion Cube",
            "recipes": [
                "Recipe_PressureConversionCube_C"
            ]
        },
        "Desc_QuantumEnergy_C": {
            "form": "GAS",
            "id": "Desc_QuantumEnergy_C",
            "name": "Excited Photonic Matter",
            "recipes": [
                "Recipe_QuantumEnergy_C"
            ]
        },
        "Desc_QuantumOscillator_C": {
            "form": "SOLID",
            "id": "Desc_QuantumOscillator_C",
            "name": "Superposition Oscillator",
            "recipes": [
                "Recipe_SuperpositionOscillator_C"
            ]
        },
        "Desc_QuartzCrystal_C": {
            "form": "SOLID",
            "id": "Desc_QuartzCrystal_C",
            "name": "Quartz Crystal",
            "recipes": [
                "Recipe_QuartzCrystal_C",
                "Recipe_Alternate_PureQuartzCrystal_C",
                "Recipe_Alternate_Quartz_Purified_C",
                "Recipe_Alternate_Quartz_Fused_C"
            ]
        },
        "Desc_RawQuartz_C": {
            "form": "SOLID",
            "id": "Desc_RawQuartz_C",
            "name": "Raw Quartz",
            "recipes": [
                "Recipe_Quartz_Bauxite_C",
                "Recipe_Quartz_Coal_C"
            ]
        },
        "Desc_Rebar_Explosive_C": {
            "form": "SOLID",
            "id": "Desc_Rebar_Explosive_C",
            "name": "Explosive Rebar",
            "recipes": [
                "Recipe_Rebar_Explosive_C"
            ]
        },
        "Desc_Rebar_Spreadshot_C": {
            "form": "SOLID",
            "id": "Desc_Rebar_Spreadshot_C",
            "name": "Shatter Rebar",
            "recipes": [
                "Recipe_Rebar_Spreadshot_C"
            ]
        },
        "Desc_Rebar_Stunshot_C": {
            "form": "SOLID",
            "id": "Desc_Rebar_Stunshot_C",
            "name": "Stun Rebar",
            "recipes": [
                "Recipe_Rebar_Stunshot_C"
            ]
        },
        "Desc_RocketFuel_C": {
            "form": "GAS",
            "id": "Desc_RocketFuel_C",
            "name": "Rocket Fuel",
            "recipes": [
                "Recipe_RocketFuel_C",
                "Recipe_Alternate_RocketFuel_Nitro_C",
                "Recipe_UnpackageRocketFuel_C"
            ]
        },
        "Desc_Rotor_C": {
            "form": "SOLID",
            "id": "Desc_Rotor_C",
            "name": "Rotor",
            "recipes": [
                "Recipe_Rotor_C",
                "Recipe_Alternate_CopperRotor_C",
                "Recipe_Alternate_Rotor_C"
            ]
        },
        "Desc_Rubber_C": {
            "form": "SOLID",
            "id": "Desc_Rubber_C",
            "name": "Rubber",
            "recipes": [
                "Recipe_Rubber_C",
                "Recipe_ResidualRubber_C",
                "Recipe_Alternate_RecycledRubber_C"
            ]
        },
        "Desc_SAMFluctuator_C": {
            "form": "SOLID",
            "id": "Desc_SAMFluctuator_C",
            "name": "SAM Fluctuator",
            "recipes": [
                "Recipe_SAMFluctuator_C"
            ]
        },
        "Desc_SAMIngot_C": {
            "form": "SOLID",
            "id": "Desc_SAMIngot_C",
            "name": "Reanimated SAM",
            "recipes": [
                "Recipe_IngotSAM_C"
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
                "Recipe_Silica_C",
                "Recipe_AluminaSolution_C",
                "Recipe_Alternate_Silica_Distilled_C",
                "Recipe_Alternate_Silica_C"
            ]
        },
        "Desc_SingularityCell_C": {
            "form": "SOLID",
            "id": "Desc_SingularityCell_C",
            "name": "Singularity Cell",
            "recipes": [
                "Recipe_SingularityCell_C"
            ]
        },
        "Desc_Snow_C": {
            "form": "SOLID",
            "id": "Desc_Snow_C",
            "name": "FICSMAS Actual Snow",
            "recipes": [
                "Recipe_Snow_C"
            ]
        },
        "Desc_SnowballProjectile_C": {
            "form": "SOLID",
            "id": "Desc_SnowballProjectile_C",
            "name": "Snowball",
            "recipes": [
                "Recipe_Snowball_C"
            ]
        },
        "Desc_SpaceElevatorPart_10_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_10_C",
            "name": "Biochemical Sculptor",
            "recipes": [
                "Recipe_SpaceElevatorPart_10_C"
            ]
        },
        "Desc_SpaceElevatorPart_11_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_11_C",
            "name": "Ballistic Warp Drive",
            "recipes": [
                "Recipe_SpaceElevatorPart_11_C"
            ]
        },
        "Desc_SpaceElevatorPart_12_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_12_C",
            "name": "AI Expansion Server",
            "recipes": [
                "Recipe_SpaceElevatorPart_12_C"
            ]
        },
        "Desc_SpaceElevatorPart_1_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_1_C",
            "name": "Smart Plating",
            "recipes": [
                "Recipe_SpaceElevatorPart_1_C",
                "Recipe_Alternate_PlasticSmartPlating_C"
            ]
        },
        "Desc_SpaceElevatorPart_2_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_2_C",
            "name": "Versatile Framework",
            "recipes": [
                "Recipe_SpaceElevatorPart_2_C",
                "Recipe_Alternate_FlexibleFramework_C"
            ]
        },
        "Desc_SpaceElevatorPart_3_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_3_C",
            "name": "Automated Wiring",
            "recipes": [
                "Recipe_SpaceElevatorPart_3_C",
                "Recipe_Alternate_HighSpeedWiring_C"
            ]
        },
        "Desc_SpaceElevatorPart_4_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_4_C",
            "name": "Modular Engine",
            "recipes": [
                "Recipe_SpaceElevatorPart_4_C"
            ]
        },
        "Desc_SpaceElevatorPart_5_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_5_C",
            "name": "Adaptive Control Unit",
            "recipes": [
                "Recipe_SpaceElevatorPart_5_C"
            ]
        },
        "Desc_SpaceElevatorPart_6_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_6_C",
            "name": "Magnetic Field Generator",
            "recipes": [
                "Recipe_SpaceElevatorPart_6_C"
            ]
        },
        "Desc_SpaceElevatorPart_7_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_7_C",
            "name": "Assembly Director System",
            "recipes": [
                "Recipe_SpaceElevatorPart_7_C"
            ]
        },
        "Desc_SpaceElevatorPart_8_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_8_C",
            "name": "Thermal Propulsion Rocket",
            "recipes": [
                "Recipe_SpaceElevatorPart_8_C"
            ]
        },
        "Desc_SpaceElevatorPart_9_C": {
            "form": "SOLID",
            "id": "Desc_SpaceElevatorPart_9_C",
            "name": "Nuclear Pasta",
            "recipes": [
                "Recipe_SpaceElevatorPart_9_C"
            ]
        },
        "Desc_SpikedRebar_C": {
            "form": "SOLID",
            "id": "Desc_SpikedRebar_C",
            "name": "Iron Rebar",
            "recipes": [
                "Recipe_SpikedRebar_C"
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
                "Recipe_Stator_C",
                "Recipe_Alternate_Stator_C"
            ]
        },
        "Desc_SteelIngot_C": {
            "form": "SOLID",
            "id": "Desc_SteelIngot_C",
            "name": "Steel Ingot",
            "recipes": [
                "Recipe_IngotSteel_C",
                "Recipe_Alternate_CokeSteelIngot_C",
                "Recipe_Alternate_IngotSteel_2_C",
                "Recipe_Alternate_IngotSteel_1_C"
            ]
        },
        "Desc_SteelPipe_C": {
            "form": "SOLID",
            "id": "Desc_SteelPipe_C",
            "name": "Steel Pipe",
            "recipes": [
                "Recipe_SteelPipe_C",
                "Recipe_Alternate_SteelPipe_Molded_C",
                "Recipe_Alternate_SteelPipe_Iron_C"
            ]
        },
        "Desc_SteelPlateReinforced_C": {
            "form": "SOLID",
            "id": "Desc_SteelPlateReinforced_C",
            "name": "Encased Industrial Beam",
            "recipes": [
                "Recipe_EncasedIndustrialBeam_C",
                "Recipe_Alternate_EncasedIndustrialBeam_C"
            ]
        },
        "Desc_SteelPlate_C": {
            "form": "SOLID",
            "id": "Desc_SteelPlate_C",
            "name": "Steel Beam",
            "recipes": [
                "Recipe_SteelBeam_C",
                "Recipe_Alternate_SteelBeam_Molded_C",
                "Recipe_Alternate_SteelBeam_Aluminum_C"
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
                "Recipe_Limestone_Sulfur_C"
            ]
        },
        "Desc_Sulfur_C": {
            "form": "SOLID",
            "id": "Desc_Sulfur_C",
            "name": "Sulfur",
            "recipes": [
                "Recipe_Sulfur_Coal_C",
                "Recipe_Sulfur_Iron_C"
            ]
        },
        "Desc_SulfuricAcid_C": {
            "form": "LIQUID",
            "id": "Desc_SulfuricAcid_C",
            "name": "Sulfuric Acid",
            "recipes": [
                "Recipe_SulfuricAcid_C",
                "Recipe_UraniumCell_C",
                "Recipe_UnpackageSulfuricAcid_C"
            ]
        },
        "Desc_TemporalProcessor_C": {
            "form": "SOLID",
            "id": "Desc_TemporalProcessor_C",
            "name": "Neural-Quantum Processor",
            "recipes": [
                "Recipe_TemporalProcessor_C"
            ]
        },
        "Desc_TimeCrystal_C": {
            "form": "SOLID",
            "id": "Desc_TimeCrystal_C",
            "name": "Time Crystal",
            "recipes": [
                "Recipe_TimeCrystal_C"
            ]
        },
        "Desc_TurboFuel_C": {
            "form": "SOLID",
            "id": "Desc_TurboFuel_C",
            "name": "Packaged Turbofuel",
            "recipes": [
                "Recipe_PackagedTurboFuel_C"
            ]
        },
        "Desc_UraniumCell_C": {
            "form": "SOLID",
            "id": "Desc_UraniumCell_C",
            "name": "Encased Uranium Cell",
            "recipes": [
                "Recipe_UraniumCell_C",
                "Recipe_Alternate_UraniumCell_1_C"
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
                "Recipe_NonFissileUranium_C",
                "Recipe_UnpackageWater_C",
                "Recipe_AluminumScrap_C",
                "Recipe_Alternate_ElectroAluminumScrap_C",
                "Recipe_Battery_C",
                "Recipe_Alternate_InstantScrap_C",
                "Recipe_Alternate_FertileUranium_C",
                "Recipe_Alternate_Silica_Distilled_C"
            ]
        },
        "Desc_Wire_C": {
            "form": "SOLID",
            "id": "Desc_Wire_C",
            "name": "Wire",
            "recipes": [
                "Recipe_Wire_C",
                "Recipe_Alternate_FusedWire_C",
                "Recipe_Alternate_Wire_2_C",
                "Recipe_Alternate_Wire_1_C"
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
                "Recipe_XmasBall1_C"
            ]
        },
        "Desc_XmasBall2_C": {
            "form": "SOLID",
            "id": "Desc_XmasBall2_C",
            "name": "Blue FICSMAS Ornament",
            "recipes": [
                "Recipe_XmasBall2_C"
            ]
        },
        "Desc_XmasBall3_C": {
            "form": "SOLID",
            "id": "Desc_XmasBall3_C",
            "name": "Copper FICSMAS Ornament",
            "recipes": [
                "Recipe_XmasBall3_C"
            ]
        },
        "Desc_XmasBall4_C": {
            "form": "SOLID",
            "id": "Desc_XmasBall4_C",
            "name": "Iron FICSMAS Ornament",
            "recipes": [
                "Recipe_XmasBall4_C"
            ]
        },
        "Desc_XmasBallCluster_C": {
            "form": "SOLID",
            "id": "Desc_XmasBallCluster_C",
            "name": "FICSMAS Ornament Bundle",
            "recipes": [
                "Recipe_XmasBallCluster_C"
            ]
        },
        "Desc_XmasBow_C": {
            "form": "SOLID",
            "id": "Desc_XmasBow_C",
            "name": "FICSMAS Bow",
            "recipes": [
                "Recipe_XmasBow_C"
            ]
        },
        "Desc_XmasBranch_C": {
            "form": "SOLID",
            "id": "Desc_XmasBranch_C",
            "name": "FICSMAS Tree Branch",
            "recipes": [
                "Recipe_XmasBranch_C"
            ]
        },
        "Desc_XmasStar_C": {
            "form": "SOLID",
            "id": "Desc_XmasStar_C",
            "name": "FICSMAS Wonder Star",
            "recipes": [
                "Recipe_XmasStar_C"
            ]
        },
        "Desc_XmasWreath_C": {
            "form": "SOLID",
            "id": "Desc_XmasWreath_C",
            "name": "FICSMAS Wreath",
            "recipes": [
                "Recipe_XmasWreath_C"
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
        "Desc_XmasBall2_C",
        "Desc_Cable_C",
        "Desc_CandyCane_C",
        "Desc_GoldIngot_C",
        "Desc_OreGold_C",
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
        "Desc_Fireworks_Projectile_02_C",
        "Desc_FicsiteIngot_C",
        "Desc_FicsiteMesh_C",
        "Desc_Ficsonium_C",
        "Desc_FicsoniumFuelRod_C",
        "Desc_LiquidFuel_C",
        "Desc_ModularFrameFused_C",
        "Desc_Filter_C",
        "Desc_NobeliskGas_C",
        "Desc_AluminumPlateReinforced_C",
        "Desc_ModularFrameHeavy_C",
        "Desc_HeavyOilResidue_C",
        "Desc_HighSpeedConnector_C",
        "Desc_CartridgeSmartProjectile_C",
        "Desc_HazmatFilter_C",
        "Desc_IonizedFuel_C",
        "Desc_XmasBall4_C",
        "Desc_IronIngot_C",
        "Desc_OreIron_C",
        "Desc_IronPlate_C",
        "Desc_SpikedRebar_C",
        "Desc_IronRod_C",
        "Desc_Stone_C",
        "Desc_LiquidBiofuel_C",
        "Desc_SpaceElevatorPart_6_C",
        "Desc_SpaceElevatorPart_4_C",
        "Desc_ModularFrame_C",
        "Desc_Motor_C",
        "Desc_TemporalProcessor_C",
        "Desc_NitricAcid_C",
        "Desc_NitrogenGas_C",
        "Desc_NobeliskExplosive_C",
        "Desc_SpaceElevatorPart_9_C",
        "Desc_NobeliskNuke_C",
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
        "Desc_XmasBall1_C",
        "Desc_IronPlateReinforced_C",
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
        "Desc_Wire_C"
    ],
    "recipes": {
        "Recipe_AILimiter_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "AI Limiter",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_AlienDNACapsule_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_AlienProtein_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Alien DNA Capsule",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_AlienDNACapsule_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_AlienPowerBuilding_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 100
                },
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_SAMFluctuator_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_WAT1_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Alien Power Augmenter",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_AlienPowerBuilding_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_AlienPowerFuel_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_CrystalShard_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_QuantumEnergy_C": {
                    "d": 1,
                    "n": 24
                },
                "Desc_QuantumOscillator_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_SAMFluctuator_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Alien Power Matrix",
            "produced_in": [
                "Build_QuantumEncoder_C"
            ],
            "products": {
                "Desc_AlienPowerFuel_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 24
                }
            }
        },
        "Recipe_Alternate_AILimiter_Plastic_C": {
            "duration": {
                "d": 1,
                "n": 15
            },
            "ingredients": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 7
                }
            },
            "is_alternate": true,
            "name": "Plastic AI Limiter",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_AdheredIronPlate_C": {
            "duration": {
                "d": 1,
                "n": 16
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Adhered Iron Plate",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_AlcladCasing_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_AluminumIngot_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": true,
            "name": "Alclad Casing",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 15
                }
            }
        },
        "Recipe_Alternate_AluminumRod_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_AluminumIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Aluminum Rod",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 7
                }
            }
        },
        "Recipe_Alternate_AutomatedMiner_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": true,
            "name": "Automated Miner",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "BP_ItemDescriptorPortableMiner_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_BoltedFrame_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 56
                }
            },
            "is_alternate": true,
            "name": "Bolted Frame",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_Cable_1_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 9
                }
            },
            "is_alternate": true,
            "name": "Insulated Cable",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 20
                }
            }
        },
        "Recipe_Alternate_Cable_2_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Quickwire Cable",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 11
                }
            }
        },
        "Recipe_Alternate_CateriumIngot_Leached_C": {
            "duration": {
                "d": 1,
                "n": 10
            },
            "ingredients": {
                "Desc_OreGold_C": {
                    "d": 1,
                    "n": 9
                },
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Leached Caterium Ingot",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_GoldIngot_C": {
                    "d": 1,
                    "n": 6
                }
            }
        },
        "Recipe_Alternate_CateriumIngot_Tempered_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_OreGold_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_PetroleumCoke_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Tempered Caterium Ingot",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_GoldIngot_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_CircuitBoard_1_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 11
                },
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 11
                }
            },
            "is_alternate": true,
            "name": "Silicon Circuit Board",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_Alternate_CircuitBoard_2_C": {
            "duration": {
                "d": 1,
                "n": 48
            },
            "ingredients": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": true,
            "name": "Caterium Circuit Board",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 7
                }
            }
        },
        "Recipe_Alternate_ClassicBattery_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 7
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 8
                },
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 12
                }
            },
            "is_alternate": true,
            "name": "Classic Battery",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_Battery_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Alternate_Coal_1_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_Wood_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Charcoal",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Alternate_Coal_2_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_GenericBiomass_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Biocoal",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 6
                }
            }
        },
        "Recipe_Alternate_CoatedCable_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Coated Cable",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 9
                }
            }
        },
        "Recipe_Alternate_CoatedIronCanister_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Coated Iron Canister",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Alternate_CoatedIronPlate_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Coated Iron Plate",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Alternate_CokeSteelIngot_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_PetroleumCoke_C": {
                    "d": 1,
                    "n": 15
                }
            },
            "is_alternate": true,
            "name": "Coke Steel Ingot",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 20
                }
            }
        },
        "Recipe_Alternate_Computer_1_C": {
            "duration": {
                "d": 1,
                "n": 16
            },
            "ingredients": {
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 14
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": true,
            "name": "Caterium Computer",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_Computer_2_C": {
            "duration": {
                "d": 1,
                "n": 36
            },
            "ingredients": {
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Crystal Computer",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_Concrete_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 12
                }
            },
            "is_alternate": true,
            "name": "Fine Concrete",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Alternate_CoolingDevice_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_AluminumPlateReinforced_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_NitrogenGas_C": {
                    "d": 1,
                    "n": 24
                }
            },
            "is_alternate": true,
            "name": "Cooling Device",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_CoolingSystem_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_CopperAlloyIngot_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreCopper_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Copper Alloy Ingot",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Alternate_CopperIngot_Leached_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_OreCopper_C": {
                    "d": 1,
                    "n": 9
                },
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Leached Copper Ingot",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 22
                }
            }
        },
        "Recipe_Alternate_CopperIngot_Tempered_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_OreCopper_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_PetroleumCoke_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": true,
            "name": "Tempered Copper Ingot",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Alternate_CopperRotor_C": {
            "duration": {
                "d": 1,
                "n": 16
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 52
                }
            },
            "is_alternate": true,
            "name": "Copper Rotor",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_CrystalOscillator_C": {
            "duration": {
                "d": 1,
                "n": 32
            },
            "ingredients": {
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 7
                }
            },
            "is_alternate": true,
            "name": "Insulated Crystal Oscillator",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_DarkMatter_Crystallization_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": true,
            "name": "Dark Matter Crystallization",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_DarkMatter_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_DarkMatter_Trap_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_TimeCrystal_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Dark Matter Trap",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_DarkMatter_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_Diamond_Cloudy_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 24
                }
            },
            "is_alternate": true,
            "name": "Cloudy Diamonds",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_Diamond_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_Diamond_OilBased_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_LiquidOil_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": true,
            "name": "Oil-Based Diamonds",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_Diamond_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_Diamond_Petroleum_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_PetroleumCoke_C": {
                    "d": 1,
                    "n": 24
                }
            },
            "is_alternate": true,
            "name": "Petroleum Diamonds",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_Diamond_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_Diamond_Pink_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 8
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": true,
            "name": "Build converter: Alternate: Pink Diamonds",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_Diamond_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_Diamond_Turbo_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_TurboFuel_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Turbo Diamonds",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_Diamond_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_DilutedFuel_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": true,
            "name": "Diluted Fuel",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Alternate_DilutedPackagedFuel_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_PackagedWater_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Diluted Packaged Fuel",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_Fuel_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_ElectricMotor_C": {
            "duration": {
                "d": 1,
                "n": 16
            },
            "ingredients": {
                "Desc_ElectromagneticControlRod_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Electric Motor",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_ElectroAluminumScrap_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_AluminaSolution_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_PetroleumCoke_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": true,
            "name": "Electrode Aluminum Scrap",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_AluminumScrap_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 7
                }
            }
        },
        "Recipe_Alternate_ElectrodeCircuitBoard_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_PetroleumCoke_C": {
                    "d": 1,
                    "n": 8
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": true,
            "name": "Electrode Circuit Board",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_ElectromagneticControlRod_1_C": {
            "duration": {
                "d": 1,
                "n": 15
            },
            "ingredients": {
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Stator_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Electromagnetic Connection Rod",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_ElectromagneticControlRod_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_EncasedIndustrialBeam_C": {
            "duration": {
                "d": 1,
                "n": 15
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": true,
            "name": "Encased Industrial Pipe",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_EnrichedCoal_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Compacted Coal",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_CompactedCoal_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_Alternate_FertileUranium_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_NitricAcid_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_NuclearWaste_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_OreUranium_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Fertile Uranium",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_Water_C": {
                    "d": 1,
                    "n": 8
                }
            }
        },
        "Recipe_Alternate_FlexibleFramework_C": {
            "duration": {
                "d": 1,
                "n": 16
            },
            "ingredients": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 8
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": true,
            "name": "Flexible Framework",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_2_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_FusedWire_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_GoldIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Fused Wire",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 30
                }
            }
        },
        "Recipe_Alternate_Gunpowder_1_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_CompactedCoal_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Fine Black Powder",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Gunpowder_C": {
                    "d": 1,
                    "n": 6
                }
            }
        },
        "Recipe_Alternate_HeatFusedFrame_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_AluminumIngot_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_NitricAcid_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": true,
            "name": "Heat-Fused Frame",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_ModularFrameFused_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_HeatSink_1_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": true,
            "name": "Heat Exchanger",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_AluminumPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_HeavyFlexibleFrame_C": {
            "duration": {
                "d": 1,
                "n": 16
            },
            "ingredients": {
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 104
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": true,
            "name": "Heavy Flexible Frame",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_HeavyOilResidue_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_LiquidOil_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Heavy Oil Residue",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_PolymerResin_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_HighSpeedConnector_C": {
            "duration": {
                "d": 1,
                "n": 40
            },
            "ingredients": {
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 60
                },
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": true,
            "name": "Silicon High-Speed Connector",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_HighSpeedWiring_C": {
            "duration": {
                "d": 1,
                "n": 32
            },
            "ingredients": {
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Stator_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 40
                }
            },
            "is_alternate": true,
            "name": "Automated Speed Wiring",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_3_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Alternate_IngotIron_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_OreCopper_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": true,
            "name": "Iron Alloy Ingot",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 15
                }
            }
        },
        "Recipe_Alternate_IngotSteel_1_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Solid Steel Ingot",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_IngotSteel_2_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_CompactedCoal_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Compacted Steel Ingot",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Alternate_InstantPlutoniumCell_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": true,
            "name": "Instant Plutonium Cell",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_PlutoniumCell_C": {
                    "d": 1,
                    "n": 20
                }
            }
        },
        "Recipe_Alternate_InstantScrap_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_OreBauxite_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": true,
            "name": "Instant Scrap",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_AluminumScrap_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_Alternate_IonizedFuel_Dark_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_DarkMatter_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_PackagedRocketFuel_C": {
                    "d": 1,
                    "n": 12
                }
            },
            "is_alternate": true,
            "name": "Build converter: Alternate: Dark-Ion Fuel",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_CompactedCoal_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IonizedFuel_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Alternate_IronIngot_Basic_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": true,
            "name": "Basic Iron Ingot",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Alternate_IronIngot_Leached_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Leached Iron Ingot",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Alternate_ModularFrameHeavy_C": {
            "duration": {
                "d": 1,
                "n": 64
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 22
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 8
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 36
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": true,
            "name": "Heavy Encased Frame",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_ModularFrame_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": true,
            "name": "Steeled Frame",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_Motor_1_C": {
            "duration": {
                "d": 1,
                "n": 48
            },
            "ingredients": {
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Stator_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": true,
            "name": "Rigor Motor",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 6
                }
            }
        },
        "Recipe_Alternate_NuclearFuelRod_1_C": {
            "duration": {
                "d": 1,
                "n": 300
            },
            "ingredients": {
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_ElectromagneticControlRod_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_UraniumCell_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": true,
            "name": "Uranium Fuel Unit",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_NuclearFuelRod_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_OCSupercomputer_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_CoolingSystem_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "OC Supercomputer",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_ComputerSuper_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_PlasticSmartPlating_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Plastic Smart Plating",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_1_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_Plastic_1_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": true,
            "name": "Recycled Plastic",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Alternate_PlutoniumFuelUnit_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_PlutoniumCell_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_PressureConversionCube_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Plutonium Fuel Unit",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_PlutoniumFuelRod_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_PolyesterFabric_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_PolymerResin_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Polyester Fabric",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_Fabric_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_PolymerResin_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_LiquidOil_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Polymer Resin",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_PolymerResin_C": {
                    "d": 1,
                    "n": 13
                }
            }
        },
        "Recipe_Alternate_PureCateriumIngot_C": {
            "duration": {
                "d": 1,
                "n": 5
            },
            "ingredients": {
                "Desc_OreGold_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Pure Caterium Ingot",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_GoldIngot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_PureCopperIngot_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_OreCopper_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": true,
            "name": "Pure Copper Ingot",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 15
                }
            }
        },
        "Recipe_Alternate_PureIronIngot_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 7
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": true,
            "name": "Pure Iron Ingot",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 13
                }
            }
        },
        "Recipe_Alternate_PureQuartzCrystal_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_RawQuartz_C": {
                    "d": 1,
                    "n": 9
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Pure Quartz Crystal",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 7
                }
            }
        },
        "Recipe_Alternate_Quartz_Fused_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_RawQuartz_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": true,
            "name": "Fused Quartz Crystal",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 18
                }
            }
        },
        "Recipe_Alternate_Quartz_Purified_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_NitricAcid_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_RawQuartz_C": {
                    "d": 1,
                    "n": 24
                }
            },
            "is_alternate": true,
            "name": "Quartz Purification",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_DissolvedSilica_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 15
                }
            }
        },
        "Recipe_Alternate_Quickwire_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_GoldIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Fused Quickwire",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Alternate_RadioControlSystem_C": {
            "duration": {
                "d": 1,
                "n": 40
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 60
                },
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 30
                }
            },
            "is_alternate": true,
            "name": "Radio Control System",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_RadioControlUnit_1_C": {
            "duration": {
                "d": 1,
                "n": 16
            },
            "ingredients": {
                "Desc_AluminumPlateReinforced_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 12
                }
            },
            "is_alternate": true,
            "name": "Radio Connection Unit",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_RecycledRubber_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": true,
            "name": "Recycled Rubber",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Alternate_ReinforcedIronPlate_1_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 18
                },
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 50
                }
            },
            "is_alternate": true,
            "name": "Bolted Iron Plate",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_ReinforcedIronPlate_2_C": {
            "duration": {
                "d": 1,
                "n": 32
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": true,
            "name": "Stitched Iron Plate",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_RocketFuel_Nitro_C": {
            "duration": {
                "d": 5,
                "n": 12
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_NitrogenGas_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": true,
            "name": "Nitro Rocket Fuel",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_CompactedCoal_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_RocketFuel_C": {
                    "d": 1,
                    "n": 6
                }
            }
        },
        "Recipe_Alternate_Rotor_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": true,
            "name": "Steel Rotor",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_RubberConcrete_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": true,
            "name": "Rubber Concrete",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 9
                }
            }
        },
        "Recipe_Alternate_Screw_2_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Steel Screws",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 52
                }
            }
        },
        "Recipe_Alternate_Screw_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Cast Screws",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 20
                }
            }
        },
        "Recipe_Alternate_Silica_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_RawQuartz_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Cheap Silica",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 7
                }
            }
        },
        "Recipe_Alternate_Silica_Distilled_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_DissolvedSilica_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": true,
            "name": "Distilled Silica",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 27
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 8
                }
            }
        },
        "Recipe_Alternate_SloppyAlumina_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_OreBauxite_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": true,
            "name": "Sloppy Alumina",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_AluminaSolution_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Alternate_Stator_C": {
            "duration": {
                "d": 1,
                "n": 15
            },
            "ingredients": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": true,
            "name": "Quickwire Stator",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_Stator_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_SteamedCopperSheet_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": true,
            "name": "Steamed Copper Sheet",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_SteelBeam_Aluminum_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_AluminumIngot_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": true,
            "name": "Aluminum Beam",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_SteelBeam_Molded_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 16
                },
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 24
                }
            },
            "is_alternate": true,
            "name": "Molded Beam",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 9
                }
            }
        },
        "Recipe_Alternate_SteelCanister_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": true,
            "name": "Steel Canister",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Alternate_SteelCastedPlate_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Steel Cast Plate",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_SteelPipe_Iron_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": true,
            "name": "Iron Pipe",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_Alternate_SteelPipe_Molded_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Molded Steel Pipe",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_Alternate_SteelRod_C": {
            "duration": {
                "d": 1,
                "n": 5
            },
            "ingredients": {
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Steel Rod",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Alternate_SuperStateComputer_C": {
            "duration": {
                "d": 1,
                "n": 25
            },
            "ingredients": {
                "Desc_Battery_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_ElectromagneticControlRod_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": true,
            "name": "Super-State Computer",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_ComputerSuper_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Alternate_TurboBlendFuel_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_PetroleumCoke_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": true,
            "name": "Turbo Blend Fuel",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_LiquidTurboFuel_C": {
                    "d": 1,
                    "n": 6
                }
            }
        },
        "Recipe_Alternate_TurboHeavyFuel_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_CompactedCoal_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Turbo Heavy Fuel",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_LiquidTurboFuel_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Alternate_TurboMotor_1_C": {
            "duration": {
                "d": 1,
                "n": 64
            },
            "ingredients": {
                "Desc_ElectromagneticControlRod_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 9
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 7
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 7
                }
            },
            "is_alternate": true,
            "name": "Turbo Electric Motor",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_MotorLightweight_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Alternate_TurboPressureMotor_C": {
            "duration": {
                "d": 1,
                "n": 32
            },
            "ingredients": {
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_PackagedNitrogenGas_C": {
                    "d": 1,
                    "n": 24
                },
                "Desc_PressureConversionCube_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Stator_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": true,
            "name": "Turbo Pressure Motor",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_MotorLightweight_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Alternate_Turbofuel_C": {
            "duration": {
                "d": 1,
                "n": 16
            },
            "ingredients": {
                "Desc_CompactedCoal_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Turbofuel",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_LiquidTurboFuel_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_Alternate_UraniumCell_1_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_OreUranium_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Infused Uranium Cell",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_UraniumCell_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Alternate_WetConcrete_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Wet Concrete",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Alternate_Wire_1_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Iron Wire",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 9
                }
            }
        },
        "Recipe_Alternate_Wire_2_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_GoldIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Caterium Wire",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 8
                }
            }
        },
        "Recipe_AluminaSolution_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreBauxite_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 18
                }
            },
            "is_alternate": false,
            "name": "Alumina Solution",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_AluminaSolution_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_AluminumCasing_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_AluminumIngot_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Aluminum Casing",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_AluminumScrap_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_AluminaSolution_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Aluminum Scrap",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_AluminumScrap_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_AluminumSheet_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_AluminumIngot_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Alclad Aluminum Sheet",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_AssemblerMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 8
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Assembler",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_AssemblerMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Barrier_Corner_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Corner Road Barrier",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Barrier_Corner_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Barrier_Low_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Low Barrier",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Barrier_Low_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Barrier_Tall_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "High Barrier",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Barrier_Tall_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Battery_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_AluminaSolution_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SulfuricAcid_C": {
                    "d": 2,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Battery",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_Battery_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Water_C": {
                    "d": 2,
                    "n": 3
                }
            }
        },
        "Recipe_Bauxite_Caterium_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreGold_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Bauxite (Caterium)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_OreBauxite_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Bauxite_Copper_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreCopper_C": {
                    "d": 1,
                    "n": 18
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Bauxite (Copper)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_OreBauxite_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Beam_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Metal Beam",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Beam_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Beam_Cable_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Braided Cable",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Beam_Cable_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Beam_Cable_Cluster_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Braided Cable Cluster",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Beam_Cable_Cluster_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Beam_Concrete_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Round Concrete Beam",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Beam_Concrete_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Beam_Connector_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Beam Connector",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Beam_Connector_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Beam_Connector_Double_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Double Beam Connector",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Beam_Connector_Double_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Beam_H_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "H-Beam",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Beam_H_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Beam_Painted_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Painted Beam",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Beam_Painted_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Beam_Shelf_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Shelf Beam",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Beam_Shelf_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Beam_Support_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Beam Support",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Beam_Support_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_BigGarageDoor_16x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Roll-Up Gate",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_BigGarageDoor_16x8_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_BigGarageDoor_16x8_Concrete_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": false,
            "name": "Roll-Up Gate",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_BigGarageDoor_16x8_Concrete_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_BigGarageDoor_16x8_Steel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Roll-Up Gate",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_BigGarageDoor_16x8_Steel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Biofuel_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_GenericBiomass_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": false,
            "name": "Solid Biofuel",
            "produced_in": [
                "Build_AutomatedWorkBench_C",
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C"
            ],
            "products": {
                "Desc_Biofuel_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Biomass_AlienProtein_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_AlienProtein_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Biomass (Alien Protein)",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_GenericBiomass_C": {
                    "d": 1,
                    "n": 100
                }
            }
        },
        "Recipe_Biomass_Leaves_C": {
            "duration": {
                "d": 1,
                "n": 5
            },
            "ingredients": {
                "Desc_Leaves_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Biomass (Leaves)",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_GenericBiomass_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_Biomass_Mycelia_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_Mycelia_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Biomass (Mycelia)",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_GenericBiomass_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Biomass_Wood_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_Wood_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Biomass (Wood)",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_GenericBiomass_C": {
                    "d": 1,
                    "n": 20
                }
            }
        },
        "Recipe_BladeRunners_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Blade Runners",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorJumpingStilts_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Blender_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Blender",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Blender_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_BlueprintDesigner_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 100
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "Blueprint Designer Mk.1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_BlueprintDesigner_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_BlueprintDesigner_Mk2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 100
                },
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "Blueprint Designer Mk.2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_BlueprintDesigner_MK2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_BlueprintDesigner_Mk3_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_FicsiteMesh_C": {
                    "d": 1,
                    "n": 100
                },
                "Desc_ModularFrameFused_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_TemporalProcessor_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_TimeCrystal_C": {
                    "d": 1,
                    "n": 50
                }
            },
            "is_alternate": false,
            "name": "Blueprint Designer Mk.3",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_BlueprintDesigner_MK3_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Cable_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Cable",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_CandyCaneBasher_C": {
            "duration": {
                "d": 1,
                "n": 80
            },
            "ingredients": {
                "BP_EquipmentDescriptorShockShank_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_CandyCane_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_Gift_C": {
                    "d": 1,
                    "n": 15
                }
            },
            "is_alternate": false,
            "name": "Candy Cane Basher",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorCandyCane_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_CandyCaneDecor_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CandyCane_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_XmasBow_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Candy Cane",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_CandyCaneDecor_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_CandyCane_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Gift_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Candy Cane",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_CandyCane_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_CartridgeChaos_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_CartridgeStandard_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_LiquidTurboFuel_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Turbo Rifle Ammo",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_CartridgeChaos_C": {
                    "d": 1,
                    "n": 50
                }
            }
        },
        "Recipe_CartridgeChaos_Packaged_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_CartridgeStandard_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_TurboFuel_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Turbo Rifle Ammo",
            "produced_in": [
                "BP_WorkshopComponent_C",
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_CartridgeChaos_C": {
                    "d": 1,
                    "n": 50
                }
            }
        },
        "Recipe_CartridgeSmart_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_CartridgeStandard_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Homing Rifle Ammo",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_CartridgeSmartProjectile_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Cartridge_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_GunpowderMK2_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Rifle Ammo",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_CartridgeStandard_C": {
                    "d": 1,
                    "n": 15
                }
            }
        },
        "Recipe_Caterium_Copper_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreCopper_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Caterium Ore (Copper)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_OreGold_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Caterium_Quartz_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_RawQuartz_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Caterium Ore (Quartz)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_OreGold_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Catwalk_Cross_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Catwalk Intersection",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_CatwalkCross_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Catwalk_Ramp_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Catwalk Ramp",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_CatwalkRamp_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Catwalk_Stairs_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Catwalk Stairs",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_CatwalkStairs_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Catwalk_Straight_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Straight Catwalk",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_CatwalkStraight_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Catwalk_T_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Catwalk T-Junction",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_CatwalkT_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Catwalk_Turn_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Catwalk Corner",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_CatwalkTurn_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_CeilingLight_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 16
                }
            },
            "is_alternate": false,
            "name": "Ceiling Light",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_CeilingLight_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_CentralStorage_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SAMFluctuator_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_WAT2_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "Dimensional Depot Uploader",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_CentralStorage_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ChainLinkFence_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Construction Fence",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ChainLinkFence_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Chainsaw_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 160
                }
            },
            "is_alternate": false,
            "name": "Chainsaw",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Chainsaw_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_CircuitBoard_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Circuit Board",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Coal_Iron_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 18
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Coal (Iron)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Coal_Limestone_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 36
                }
            },
            "is_alternate": true,
            "name": "Build converter: Coal (Limestone)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_ComputerSuper_C": {
            "duration": {
                "d": 1,
                "n": 32
            },
            "ingredients": {
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 28
                }
            },
            "is_alternate": false,
            "name": "Supercomputer",
            "produced_in": [
                "BP_WorkBenchComponent_C",
                "Build_ManufacturerMk1_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_ComputerSuper_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Computer_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 8
                },
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 16
                }
            },
            "is_alternate": false,
            "name": "Computer",
            "produced_in": [
                "BP_WorkBenchComponent_C",
                "Build_ManufacturerMk1_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Concrete_Barrier_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Road Barrier",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Concrete_Barrier_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Concrete_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Concrete",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConstructorMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 8
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Constructor",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConstructorMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Converter_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CoolingSystem_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_ModularFrameFused_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SAMFluctuator_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "Converter",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Converter_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorAttachmentMergerPriority_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Priority Merger",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorAttachmentMergerPriority_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorAttachmentMerger_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Merger",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorAttachmentMerger_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorAttachmentSplitterProgrammable_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Programmable Splitter",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorAttachmentSplitterProgrammable_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorAttachmentSplitterSmart_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Smart Splitter",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorAttachmentSplitterSmart_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorAttachmentSplitter_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Splitter",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorAttachmentSplitter_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorBeltMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Conveyor Belt Mk.1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorBeltMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorBeltMk2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Conveyor Belt Mk.2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorBeltMk2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorBeltMk3_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Conveyor Belt Mk.3",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorBeltMk3_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorBeltMk4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Conveyor Belt Mk.4",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorBeltMk4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorBeltMk5_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Conveyor Belt Mk.5",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorBeltMk5_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorBeltMk6_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_FicsiteMesh_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_TimeCrystal_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Conveyor Belt Mk.6",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorBeltMk6_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorCeilingAttachment_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Ceiling Mount",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorCeilingAttachment_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorLiftMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Lift Mk.1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorLiftMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorLiftMk2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Lift Mk.2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorLiftMk2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorLiftMk3_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Lift Mk.3",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorLiftMk3_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorLiftMk4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Lift Mk.4",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorLiftMk4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorLiftMk5_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Lift Mk.5",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorLiftMk5_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorLiftMk6_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_FicsiteMesh_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_TimeCrystal_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Lift Mk.6",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorLiftMk6_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorMonitor_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Conveyor Throughput Monitor",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorMonitor_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorPoleStackable_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Stackable Conveyor Pole",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorPoleStackable_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorPoleWall_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall Mount",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorPoleWall_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorPole_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Conveyor Pole",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorPole_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ConveyorWallHole_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall Hole",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ConveyorWallHole_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_CoolingSystem_C": {
            "duration": {
                "d": 1,
                "n": 10
            },
            "ingredients": {
                "Desc_AluminumPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_NitrogenGas_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Cooling System",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_CoolingSystem_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_CopperDust_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 30
                }
            },
            "is_alternate": false,
            "name": "Copper Powder",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_CopperDust_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_CopperSheet_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Copper Sheet",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Copper_Quartz_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_RawQuartz_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Copper Ore (Quartz)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_OreCopper_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Copper_Sulfur_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 12
                }
            },
            "is_alternate": true,
            "name": "Build converter: Copper Ore (Sulfur)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_OreCopper_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_CrystalOscillator_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 28
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 36
                }
            },
            "is_alternate": false,
            "name": "Crystal Oscillator",
            "produced_in": [
                "BP_WorkBenchComponent_C",
                "Build_ManufacturerMk1_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_CyberWagon_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Cyber Wagon",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_CyberWagon_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DarkEnergy_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": true,
            "name": "Build converter: Dark Matter Residue",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_DarkMatter_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Diamond_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Dark Matter Crystal",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_DarkMatter_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Diamond_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Diamonds",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_Diamond_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_AsphaltInCorner_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Inner Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipeInCorner_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_AsphaltOutCorner_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Outer Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipeOutCorner_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipe_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_ConcreteInCorner_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Inner Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipeInCorner_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_ConcreteOutCorner_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Outer Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipeOutCorner_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_ConcretePolishedInCorner_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Inner Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipeInCorner_ConcretePolished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_ConcretePolishedOutCorner_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Outer Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipeOutCorner_ConcretePolished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_ConcretePolished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipe_ConcretePolished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipe_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_GripInCorner_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Inner Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipeInCorner_Grip_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_GripOutCorner_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Outer Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipeOutCorner_Grip_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DownQuarterPipe_Grip_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DownQuarterPipe_Grip_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DroneStation_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Drone Port",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DroneStation_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_DroneTransport_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "BP_ItemDescriptorPortableMiner_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Drone",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_DroneTransport_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ElectromagneticControlRod_C": {
            "duration": {
                "d": 1,
                "n": 30
            },
            "ingredients": {
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Stator_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Electromagnetic Control Rod",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_ElectromagneticControlRod_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_ElevatorFloorStop_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Elevator Floor Stop",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ElevatorFloorStop_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Elevator_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Personnel Elevator",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Elevator_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_EncasedIndustrialBeam_C": {
            "duration": {
                "d": 1,
                "n": 10
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Encased Industrial Beam",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Explorer_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 15
                }
            },
            "is_alternate": false,
            "name": "Explorer",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Explorer_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Fabric_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_GenericBiomass_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Mycelia_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Fabric",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_Fabric_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FactoryCart_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Factory Cart\u2122",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_GolfCart_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Fence_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Industrial Railing",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Fence_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FicsiteIngot_AL_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_AluminumIngot_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Build converter: Ficsite Ingot (Aluminum)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_FicsiteIngot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FicsiteIngot_CAT_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_GoldIngot_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": true,
            "name": "Build converter: Ficsite Ingot (Caterium)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_FicsiteIngot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FicsiteIngot_Iron_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 24
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": true,
            "name": "Build converter: Ficsite Ingot (Iron)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_FicsiteIngot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FicsiteMesh_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_FicsiteIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Ficsite Trigon",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C"
            ],
            "products": {
                "Desc_FicsiteMesh_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_FicsoniumFuelRod_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_ElectromagneticControlRod_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_FicsiteMesh_C": {
                    "d": 1,
                    "n": 40
                },
                "Desc_Ficsonium_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_QuantumEnergy_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Ficsonium Fuel Rod",
            "produced_in": [
                "Build_QuantumEncoder_C"
            ],
            "products": {
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_FicsoniumFuelRod_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ficsonium_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_PlutoniumWaste_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SingularityCell_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Ficsonium",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_Ficsonium_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FilterGasMask_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_Fabric_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Gas Filter",
            "produced_in": [
                "BP_WorkshopComponent_C",
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_Filter_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FilterHazmat_C": {
            "duration": {
                "d": 1,
                "n": 16
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Filter_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": false,
            "name": "Iodine-Infused Filter",
            "produced_in": [
                "BP_WorkshopComponent_C",
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_HazmatFilter_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Fireworks_01_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_CandyCane_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_XmasBranch_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Sweet Fireworks",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Fireworks_Projectile_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Fireworks_02_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_XmasBow_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_XmasBranch_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Fancy Fireworks",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Fireworks_Projectile_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Fireworks_03_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_Snow_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_XmasBranch_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Sparkly Fireworks",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Fireworks_Projectile_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Flat_Frame_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Frame Floor",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Flat_Frame_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FloodlightPole_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": false,
            "name": "Flood Light Tower",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_FloodlightPole_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FloodlightWall_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Wall-Mounted Flood Light",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_FloodlightWall_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FluidCanister_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Empty Canister",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_FoundationGlass_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Glass Frame Foundation",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_FoundationGlass_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FoundationPassthrough_Hypertube_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Hypertube Floor Hole",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_FoundationPassthrough_Hypertube_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FoundationPassthrough_Lift_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Lift Floor Hole",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_FoundationPassthrough_Lift_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FoundationPassthrough_Pipe_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Pipeline Floor Hole",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_FoundationPassthrough_Pipe_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_8x1_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_8x1_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_8x2_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_8x2_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_8x4_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_8x4_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_ConcretePolished_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_ConcretePolished_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_ConcretePolished_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Foundation_ConcretePolished_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_ConcretePolished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Foundation_ConcretePolished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_Frame_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Frame Foundation",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_Frame_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_Metal_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_Metal_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_Metal_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_Metal_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Foundation_Metal_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Foundation_Metal_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FrackingExtractor_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Resource Well Extractor",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_FrackingExtractor_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FrackingSmasher_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "Resource Well Pressurizer",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_FrackingSmasher_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_FreightWagon_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Freight Car",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_FreightWagon_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Fuel_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Packaged Fuel",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_Fuel_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_FusedModularFrame_C": {
            "duration": {
                "d": 1,
                "n": 40
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_NitrogenGas_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": false,
            "name": "Fused Modular Frame",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_ModularFrameFused_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_GasTank_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_AluminumIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Empty Fluid Tank",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C"
            ],
            "products": {
                "Desc_GasTank_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Gasmask_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Fabric_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Gas Mask",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorGasmask_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Gate_Automated_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Automated Gate",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Gate_Automated_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_GeneratorBiomass_Automated_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": false,
            "name": "Biomass Burner",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_GeneratorBiomass_Automated_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_GeneratorCoal_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Coal-Powered Generator",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_GeneratorCoal_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_GeneratorFuel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 15
                }
            },
            "is_alternate": false,
            "name": "Fuel-Powered Generator",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_GeneratorFuel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_GeneratorGeoThermal_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 250
                }
            },
            "is_alternate": false,
            "name": "Geothermal Generator",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_GeneratorGeoThermal_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_GeneratorNuclear_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 100
                },
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 200
                },
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 250
                },
                "Desc_ComputerSuper_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": false,
            "name": "Nuclear Power Plant",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_GeneratorNuclear_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_GoldenCart_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_GoldIngot_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Golden Factory Cart\u2122",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_GolfCartGold_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_GunpowderMK2_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_Gunpowder_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Smokeless Powder",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_GunpowderMK2_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Gunpowder_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Black Powder",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Gunpowder_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_HadronCollider_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_ComputerSuper_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_CoolingSystem_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 500
                },
                "Desc_ModularFrameFused_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_MotorLightweight_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Particle Accelerator",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_HadronCollider_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_HazmatSuit_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_Fabric_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 50
                }
            },
            "is_alternate": false,
            "name": "Hazmat Suit",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorHazmatSuit_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_HeatSink_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Heat Sink",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_AluminumPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_HighSpeedConnector_C": {
            "duration": {
                "d": 1,
                "n": 16
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 56
                }
            },
            "is_alternate": false,
            "name": "High-Speed Connector",
            "produced_in": [
                "BP_WorkBenchComponent_C",
                "Build_ManufacturerMk1_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Hoverpack_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 40
                },
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 8
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": false,
            "name": "Hoverpack",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorHoverPack_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_HyperPoleStackable_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Stackable Hypertube Support",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_HyperPoleStackable_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_HyperTubeJunction_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Hypertube Junction",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_HyperTubeJunction_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_HyperTubeTJunction_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Hypertube Branch",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_HypertubeTJunction_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_HyperTubeWallHole_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Hypertube Wall Hole",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_HyperTubeWallHole_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_HyperTubeWallSupport_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Hypertube Wall Support",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_HyperTubeWallSupport_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_IndustrialTank_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Industrial Fluid Buffer",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_IndustrialTank_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_IngotAluminum_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_AluminumScrap_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Aluminum Ingot",
            "produced_in": [
                "Build_FoundryMk1_C",
                "BP_WorkBenchComponent_C"
            ],
            "products": {
                "Desc_AluminumIngot_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_IngotCaterium_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_OreGold_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Caterium Ingot",
            "produced_in": [
                "Build_SmelterMk1_C",
                "BP_WorkBenchComponent_C"
            ],
            "products": {
                "Desc_GoldIngot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_IngotCopper_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_OreCopper_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Copper Ingot",
            "produced_in": [
                "Build_SmelterMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_IngotIron_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Iron Ingot",
            "produced_in": [
                "Build_SmelterMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_IngotSAM_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_SAM_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Reanimated SAM",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C"
            ],
            "products": {
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_IngotSteel_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Steel Ingot",
            "produced_in": [
                "Build_FoundryMk1_C",
                "BP_WorkBenchComponent_C"
            ],
            "products": {
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_InvertedRamp_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Metal_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Metal_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Metal_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Metal_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Metal_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Metal_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Polished_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Polished_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Polished_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Polished_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_DCorner_Polished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_DCorner_Polished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Metal_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Metal_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Metal_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Metal_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Metal_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Metal_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Polished_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Polished_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Polished_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Polished_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_Polished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_Polished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Metal_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Metal_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Metal_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Metal_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Metal_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Metal_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Polished_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Polished_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Polished_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Polished_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_InvertedRamp_UCorner_Polished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_InvertedRamp_UCorner_Polished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_IonizedFuel_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_CrystalShard_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_RocketFuel_C": {
                    "d": 1,
                    "n": 16
                }
            },
            "is_alternate": false,
            "name": "Ionized Fuel",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_CompactedCoal_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IonizedFuel_C": {
                    "d": 1,
                    "n": 16
                }
            }
        },
        "Recipe_IronPlateReinforced_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 12
                }
            },
            "is_alternate": false,
            "name": "Reinforced Iron Plate",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_IronPlate_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Iron Plate",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_IronRod_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Iron Rod",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Iron_Limestone_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 24
                }
            },
            "is_alternate": true,
            "name": "Build converter: Iron Ore (Limestone)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_JetPack_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 50
                }
            },
            "is_alternate": false,
            "name": "Jetpack",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorJetPack_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_JumpPadAdjustable_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Jump Pad",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_JumpPadAdjustable_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_JumpPadTilted_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Old Tilted Jump Pad",
            "produced_in": [],
            "products": {
                "Desc_JumpPadTilted_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_JumpPad_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Old Jump Pad",
            "produced_in": [],
            "products": {
                "Desc_JumpPad_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ladder_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ladder",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ladder_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_LargeFan_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Large Fan",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_LargeFan_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_LargeVent_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Large Vent",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_LargeVent_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_LightsControlPanel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Light Control Panel",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_LightsControlPanel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Limestone_Sulfur_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Build converter: Limestone (Sulfur)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_Stone_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_LiquidBiofuel_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_Biofuel_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Liquid Biofuel",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_LiquidBiofuel_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_LiquidFuel_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_LiquidOil_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Fuel",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_PolymerResin_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Locomotive_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 50
                }
            },
            "is_alternate": false,
            "name": "Electric Locomotive",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Locomotive_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_LookoutTower_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Lookout Tower",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_LookoutTower_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Mam_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 45
                }
            },
            "is_alternate": false,
            "name": "MAM",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Mam_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ManufacturerMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 50
                }
            },
            "is_alternate": false,
            "name": "Manufacturer",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ManufacturerMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_MedicinalInhalerAlienOrgans_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_AlienProtein_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Nut_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Protein Inhaler",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Medkit_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_MedicinalInhaler_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_Berry_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Mycelia_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Vitamin Inhaler",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Medkit_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_MinerMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "BP_ItemDescriptorPortableMiner_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Miner Mk.1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_MinerMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_MinerMk2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "BP_ItemDescriptorPortableMiner_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Miner Mk.2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_MinerMk2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_MinerMk3_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "BP_ItemDescriptorPortableMiner_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_ComputerSuper_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_ModularFrameFused_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_MotorLightweight_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 50
                }
            },
            "is_alternate": false,
            "name": "Miner Mk.3",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_MinerMk3_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ModularFrameHeavy_C": {
            "duration": {
                "d": 1,
                "n": 30
            },
            "ingredients": {
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 120
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Heavy Modular Frame",
            "produced_in": [
                "BP_WorkBenchComponent_C",
                "Build_ManufacturerMk1_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ModularFrame_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 12
                }
            },
            "is_alternate": false,
            "name": "Modular Frame",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_MotorTurbo_C": {
            "duration": {
                "d": 1,
                "n": 32
            },
            "ingredients": {
                "Desc_CoolingSystem_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 24
                }
            },
            "is_alternate": false,
            "name": "Turbo Motor",
            "produced_in": [
                "BP_WorkBenchComponent_C",
                "Build_ManufacturerMk1_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_MotorLightweight_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Motor_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Stator_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Motor",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_NitricAcid_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_NitrogenGas_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Nitric Acid",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_NitricAcid_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Nitrogen_Bauxite_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreBauxite_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Nitrogen Gas (Bauxite)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_NitrogenGas_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Nitrogen_Caterium_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreGold_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Nitrogen Gas (Caterium)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_NitrogenGas_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_NobeliskCluster_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_GunpowderMK2_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_NobeliskExplosive_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Cluster Nobelisk",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_NobeliskCluster_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_NobeliskDetonator_C": {
            "duration": {
                "d": 1,
                "n": 80
            },
            "ingredients": {
                "BP_EquipmentDescriptorObjectScanner_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Nobelisk Detonator",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorNobeliskDetonator_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_NobeliskGas_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_GenericBiomass_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_NobeliskExplosive_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Gas Nobelisk",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_NobeliskGas_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_NobeliskNuke_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_GunpowderMK2_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_NobeliskExplosive_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_UraniumCell_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Nuke Nobelisk",
            "produced_in": [
                "BP_WorkshopComponent_C",
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_NobeliskNuke_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_NobeliskShockwave_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_NobeliskExplosive_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Pulse Nobelisk",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_NobeliskShockwave_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_Nobelisk_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_Gunpowder_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Nobelisk",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_NobeliskExplosive_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_NonFissileUranium_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_NitricAcid_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_NuclearWaste_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Non-Fissile Uranium",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_Water_C": {
                    "d": 1,
                    "n": 6
                }
            }
        },
        "Recipe_NuclearFuelRod_C": {
            "duration": {
                "d": 1,
                "n": 150
            },
            "ingredients": {
                "Desc_ElectromagneticControlRod_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_UraniumCell_C": {
                    "d": 1,
                    "n": 50
                }
            },
            "is_alternate": false,
            "name": "Uranium Fuel Rod",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_NuclearFuelRod_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_NutritionalInhaler_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_Berry_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Nut_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Shroom_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Nutritional Inhaler",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Medkit_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ObjectScanner_C": {
            "duration": {
                "d": 1,
                "n": 40
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Object Scanner",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorObjectScanner_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_OilPump_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 60
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Oil Extractor",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_OilPump_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_OilRefinery_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Refinery",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_OilRefinery_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PackagedAlumina_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_AluminaSolution_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Packaged Alumina Solution",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_PackagedAlumina_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_PackagedBiofuel_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_LiquidBiofuel_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Packaged Liquid Biofuel",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_PackagedBiofuel_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_PackagedCrudeOil_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_LiquidOil_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Packaged Oil",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_PackagedOil_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_PackagedIonizedFuel_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_GasTank_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IonizedFuel_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Packaged Ionized Fuel",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_PackagedIonizedFuel_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_PackagedNitricAcid_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_GasTank_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_NitricAcid_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Packaged Nitric Acid",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_PackagedNitricAcid_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PackagedNitrogen_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_GasTank_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_NitrogenGas_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Packaged Nitrogen Gas",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_PackagedNitrogenGas_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PackagedOilResidue_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Packaged Heavy Oil Residue",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_PackagedOilResidue_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_PackagedRocketFuel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_GasTank_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_RocketFuel_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Packaged Rocket Fuel",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_PackagedRocketFuel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PackagedSulfuricAcid_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Packaged Sulfuric Acid",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_PackagedSulfuricAcid_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_PackagedTurboFuel_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_LiquidTurboFuel_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Packaged Turbofuel",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_TurboFuel_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_PackagedWater_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Packaged Water",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_PackagedWater_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Packager_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Packager",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Packager_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Parachute_C": {
            "duration": {
                "d": 1,
                "n": 40
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Fabric_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Parachute",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Parachute_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PetroleumCoke_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Petroleum Coke",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_PetroleumCoke_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_PillarBase_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Big Pillar Support",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PillarBase_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PillarBase_Small_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Small Pillar Support",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PillarBase_Small_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PillarMiddle_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Big Metal Pillar",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PillarMiddle_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PillarMiddle_Concrete_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Big Concrete Pillar",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PillarMiddle_Concrete_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PillarMiddle_Frame_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Big Frame Pillar",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PillarMiddle_Frame_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PillarTop_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Pillar Top",
            "produced_in": [],
            "products": {
                "Desc_PillarTop_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Pillar_Small_Concrete_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Small Concrete Pillar",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Pillar_Small_Concrete_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Pillar_Small_Frame_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Small Frame Pillar",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Pillar_Small_Frame_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Pillar_Small_Metal_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Small Metal Pillar",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Pillar_Small_Metal_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipeHyperStart_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Hypertube Entrance",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipeHyperStart_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipeHyperSupport_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Hypertube Support",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipeHyperSupport_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipeHyper_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Hypertube",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipeHyper_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipeStorageTank_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Fluid Buffer",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipeStorageTank_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipeSupportStackable_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Stackable Pipeline Support",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipeSupportStackable_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipeSupportWallHole_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Pipeline Wall Hole",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipelineSupportWallHole_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipeSupportWall_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Pipeline Wall Support",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipelineSupportWall_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipeSupport_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Pipeline Support",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipelineSupport_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipelineJunction_Cross_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Pipeline Junction",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipelineJunction_Cross_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipelineMK2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Pipeline Mk.2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipelineMK2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipelineMK2_NoIndicator_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Clean Pipeline Mk.2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipelineMK2_NoIndicator_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipelinePumpMK2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Pipeline Pump Mk.2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipelinePumpMk2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PipelinePump_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Pipeline Pump Mk.1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PipelinePump_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Pipeline_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Pipeline Mk.1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Pipeline_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Pipeline_NoIndicator_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Clean Pipeline Mk.1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Pipeline_NoIndicator_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Plastic_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_LiquidOil_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Plastic",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_PlutoniumCell_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_PlutoniumPellet_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Encased Plutonium Cell",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_PlutoniumCell_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PlutoniumFuelRod_C": {
            "duration": {
                "d": 1,
                "n": 240
            },
            "ingredients": {
                "Desc_AluminumPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_ElectromagneticControlRod_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_PlutoniumCell_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 18
                }
            },
            "is_alternate": false,
            "name": "Plutonium Fuel Rod",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_PlutoniumFuelRod_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Plutonium_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_NuclearWaste_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": false,
            "name": "Plutonium Pellet",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_PlutoniumPellet_C": {
                    "d": 1,
                    "n": 30
                }
            }
        },
        "Recipe_PortableMiner_C": {
            "duration": {
                "d": 1,
                "n": 40
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Portable Miner",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_ItemDescriptorPortableMiner_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PortalSatellite_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_FicsiteMesh_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_QuantumOscillator_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SAMFluctuator_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": false,
            "name": "Satellite Portal",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PortalSatellite_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Portal_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_FicsiteMesh_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_MotorLightweight_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_QuantumOscillator_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_SAMFluctuator_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": false,
            "name": "Main Portal",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Portal_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerCrystalShard_1_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_Crystal_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Power Shard (1)",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_CrystalShard_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerCrystalShard_2_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Crystal_mk2_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Power Shard (2)",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_CrystalShard_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_PowerCrystalShard_3_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_Crystal_mk3_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Power Shard (5)",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_CrystalShard_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_PowerLine_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Power Line",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerLine_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerPoleMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Power Pole Mk.1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerPoleMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerPoleMk2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Power Pole Mk.2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerPoleMk2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerPoleMk3_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Power Pole Mk.3",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerPoleMk3_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerPoleWallDoubleMk2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 16
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Double Wall Outlet Mk.2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerPoleWallDoubleMk2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerPoleWallDoubleMk3_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Double Wall Outlet Mk.3",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerPoleWallDoubleMk3_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerPoleWallDouble_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": false,
            "name": "Double Wall Outlet Mk.1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerPoleWallDouble_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerPoleWallMk2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 8
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Wall Outlet Mk.2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerPoleWallMk2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerPoleWallMk3_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Wall Outlet Mk.3",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerPoleWallMk3_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerPoleWall_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Wall Outlet Mk.1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerPoleWall_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerStorageMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "Power Storage",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerStorageMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerSwitch_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CircuitBoardHighSpeed_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Power Switch",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerSwitch_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerTowerPlatform_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Power Tower Platform",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerTowerPlatform_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PowerTower_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Power Tower",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PowerTower_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PressureConversionCube_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_ModularFrameFused_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Pressure Conversion Cube",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_PressureConversionCube_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PriorityPowerSwitch_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_HighSpeedConnector_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Priority Power Switch",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_PriorityPowerSwitch_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Protein_Crab_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_HatcherParts_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Hatcher Protein",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_AlienProtein_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Protein_Hog_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_HogParts_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Hog Protein",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_AlienProtein_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Protein_Spitter_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_SpitterParts_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Spitter Protein",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_AlienProtein_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Protein_Stinger_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_StingerParts_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Stinger Protein",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_AlienProtein_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_PureAluminumIngot_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_AluminumScrap_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Pure Aluminum Ingot",
            "produced_in": [
                "Build_SmelterMk1_C"
            ],
            "products": {
                "Desc_AluminumIngot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuantumEncoder_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_ComputerSuper_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_CoolingSystem_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_FicsiteMesh_C": {
                    "d": 1,
                    "n": 100
                },
                "Desc_MotorLightweight_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_TimeCrystal_C": {
                    "d": 1,
                    "n": 50
                }
            },
            "is_alternate": false,
            "name": "Quantum Encoder",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuantumEncoder_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuantumEnergy_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {},
            "is_alternate": true,
            "name": "Build converter: Excited Photonic Matter",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_QuantumEnergy_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_QuarterPipeCorner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeCorner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeCorner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Inner Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeCorner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeCorner_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeCorner_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeCorner_04_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Outer Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeCorner_04_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeInCorner_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeInCorner_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeInCorner_ConcretePolished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeInCorner_ConcretePolished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeInCorner_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeInCorner_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeInCorner_Grip_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeInCorner_Grip_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Ficsit_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Ficsit_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Ficsit_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Ficsit_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Ficsit_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Ficsit_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Grip_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Grip_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Grip_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Grip_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_Grip_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_Grip_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Extension (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Asphalt_4x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Asphalt_4x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Asphalt_4x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Concrete_4x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Concrete_4x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Concrete_4x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Concrete_4x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Concrete_4x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Concrete_4x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Ficsit_4x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Ficsit_4x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Ficsit_4x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Grip_4x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Grip_4x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Grip_4x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Grip_4x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_Grip_4x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_Grip_4x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Extension (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Ficsit_4x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Ficsit_4x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Ficsit_4x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Ficsit_4x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Ficsit_4x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Ficsit_4x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Grip_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Grip_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Grip_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Grip_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_Grip_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_Grip_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_PolishedConcrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_PolishedConcrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_PolishedConcrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_PolishedConcrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeMiddle_PolishedConcrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Half Foundation (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeMiddle_PolishedConcrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeOutCorner_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeOutCorner_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeOutCorner_ConcretePolished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeOutCorner_ConcretePolished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeOutCorner_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeOutCorner_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipeOutCorner_Grip_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipeOutCorner_Grip_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipe_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipe_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipe_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipe_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipe_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipe_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipe_ConcretePolished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipe_ConcretePolished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipe_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipe_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuarterPipe_Grip_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Quarter Pipe",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_QuarterPipe_Grip_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_QuartzCrystal_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_RawQuartz_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Quartz Crystal",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 3
                }
            }
        },
        "Recipe_Quartz_Bauxite_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreBauxite_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Raw Quartz (Bauxite)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_RawQuartz_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Quartz_Coal_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 24
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Raw Quartz (Coal)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_RawQuartz_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Quickwire_C": {
            "duration": {
                "d": 1,
                "n": 5
            },
            "ingredients": {
                "Desc_GoldIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Quickwire",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_RadarTower_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 100
                },
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Radar Tower",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RadarTower_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RadioControlUnit_C": {
            "duration": {
                "d": 1,
                "n": 48
            },
            "ingredients": {
                "Desc_AluminumCasing_C": {
                    "d": 1,
                    "n": 32
                },
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Radio Control Unit",
            "produced_in": [
                "BP_WorkBenchComponent_C",
                "Build_ManufacturerMk1_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_ModularFrameLightweight_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Railing_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Modern Railing",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Railing_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RailroadBlockSignal_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Block Signal",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RailroadBlockSignal_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RailroadEndStop_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Buffer Stop",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RailroadEndStop_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RailroadPathSignal_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Path Signal",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RailroadPathSignal_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RailroadTrack_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Railway",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RailroadTrack_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Metal_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Metal_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Metal_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Metal_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Metal_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Metal_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Polished_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Polished_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Polished_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Polished_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampDouble_Polished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampDouble_Polished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampInverted_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampInverted_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampInverted_8x1_Corner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampInverted_8x1_Corner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampInverted_8x1_Corner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampInverted_8x1_Corner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampInverted_8x2_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampInverted_8x2_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampInverted_8x2_Corner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampInverted_8x2_Corner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampInverted_8x2_Corner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampInverted_8x2_Corner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampInverted_8x4_Corner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Up Corner (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampInverted_8x4_Corner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RampInverted_8x4_Corner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Down Corner (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_RampInverted_8x4_Corner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_8x1_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_8x1_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_8x2_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_8x2_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_8x4_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_8x4_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_8x4_Inverted_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_8x4_Inverted_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_8x8x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Double Ramp (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_8x8x8_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Diagonal_8x1_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Diagonal_8x1_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Diagonal_8x1_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Diagonal_8x1_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Diagonal_8x2_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Diagonal_8x2_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Diagonal_8x2_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Diagonal_8x2_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Diagonal_8x4_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Diagonal_8x4_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Diagonal_8x4_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Diagonal_8x4_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Metal_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Metal_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Metal_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Metal_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Metal_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Metal_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Polished_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Polished_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Polished_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Polished_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_DownCorner_Polished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Down Corner Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_DownCorner_Polished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Frame_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Frame Ramp",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Frame_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Frame_Inverted_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Inverted Frame Ramp",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Frame_Inverted_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Metal_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Metal_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Metal_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Metal_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Metal_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Metal_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Polished_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Polished_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Polished_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Polished_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_Polished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_Polished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Metal_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Metal_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Metal_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Metal_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Metal_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Metal_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Polished_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Polished_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Polished_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Polished_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Ramp_UpCorner_Polished_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Up Corner Ramp (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Ramp_UpCorner_Polished_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RebarGun_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 16
                },
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "Rebar Gun",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_RebarGunProjectile_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Rebar_Explosive_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_GunpowderMK2_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SpikedRebar_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Explosive Rebar",
            "produced_in": [
                "BP_WorkshopComponent_C",
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_Rebar_Explosive_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Rebar_Spreadshot_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_SpikedRebar_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Shatter Rebar",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Rebar_Spreadshot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Rebar_Stunshot_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SpikedRebar_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Stun Rebar",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Rebar_Stunshot_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ResidualFuel_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Residual Fuel",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_ResidualPlastic_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_PolymerResin_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Residual Plastic",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_ResidualRubber_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_PolymerResin_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Residual Rubber",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_ResourceSinkShop_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 200
                }
            },
            "is_alternate": false,
            "name": "AWESOME Shop",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ResourceSinkShop_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_ResourceSink_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 45
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 15
                }
            },
            "is_alternate": false,
            "name": "AWESOME Sink",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_ResourceSink_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_RocketFuel_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_LiquidTurboFuel_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_NitricAcid_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Rocket Fuel",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_CompactedCoal_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_RocketFuel_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_Roof_A_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Flat Roof",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_A_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_A_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_A_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_A_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_A_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_A_04_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_A_04_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Metal_InCorner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Metal_InCorner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Metal_InCorner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Metal_InCorner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Metal_InCorner_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Metal_InCorner_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Metal_OutCorner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Metal_OutCorner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Metal_OutCorner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Metal_OutCorner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Metal_OutCorner_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Metal_OutCorner_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Orange_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Flat Roof",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Orange_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Orange_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Orange_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Orange_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Orange_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Orange_04_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Orange_04_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Orange_InCorner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Orange_InCorner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Orange_InCorner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Orange_InCorner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Orange_InCorner_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Orange_InCorner_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Orange_OutCorner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Orange_OutCorner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Orange_OutCorner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Orange_OutCorner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Orange_OutCorner_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Orange_OutCorner_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Tar_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Flat Roof",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Tar_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Tar_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Tar_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Tar_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Tar_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Tar_04_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Tar_04_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Tar_InCorner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Tar_InCorner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Tar_InCorner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Tar_InCorner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Tar_InCorner_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Tar_InCorner_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Tar_OutCorner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Tar_OutCorner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Tar_OutCorner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Tar_OutCorner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Tar_OutCorner_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Tar_OutCorner_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Window_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Flat Roof",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Window_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Window_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Window_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Window_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Window_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Window_04_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Window_04_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Window_InCorner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Window_InCorner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Window_InCorner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Window_InCorner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Window_InCorner_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Inner Corner Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Window_InCorner_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Window_OutCorner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Window_OutCorner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Window_OutCorner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Window_OutCorner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Roof_Window_OutCorner_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Outer Corner Roof (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Roof_Window_OutCorner_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Rotor_C": {
            "duration": {
                "d": 1,
                "n": 15
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": false,
            "name": "Rotor",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Rubber_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_LiquidOil_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Rubber",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_SAMFluctuator_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "SAM Fluctuator",
            "produced_in": [
                "BP_WorkBenchComponent_C",
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_SAMFluctuator_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Screw_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Screws",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_Silica_C": {
            "duration": {
                "d": 1,
                "n": 8
            },
            "ingredients": {
                "Desc_RawQuartz_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Silica",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_SingularityCell_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 200
                },
                "Desc_DarkMatter_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 100
                },
                "Desc_SpaceElevatorPart_9_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Singularity Cell",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_SingularityCell_C": {
                    "d": 1,
                    "n": 10
                }
            }
        },
        "Recipe_SmelterBasicMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": false,
            "name": "Smelter",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SmelterMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SmelterMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Foundry",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_FoundryMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SnowCannon_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Snow_C": {
                    "d": 1,
                    "n": 100
                },
                "Desc_XmasBall3_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_XmasBow_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Snow Cannon",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SnowCannon_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SnowDispenser_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CandyCane_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Snow_C": {
                    "d": 1,
                    "n": 100
                },
                "Desc_XmasBall4_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Snow Dispenser",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SnowDispenser_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Snow_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Gift_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Actual Snow",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_Snow_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_Snowball_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Snow_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Snowball",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_SnowballProjectile_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Snowman_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CandyCane_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Snow_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_XmasBall1_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_XmasBall2_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_XmasBow_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Snowman",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Snowman_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpaceElevatorPart_10_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_FicsiteMesh_C": {
                    "d": 1,
                    "n": 80
                },
                "Desc_SpaceElevatorPart_7_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Biochemical Sculptor",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_10_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_SpaceElevatorPart_11_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_DarkMatter_C": {
                    "d": 1,
                    "n": 40
                },
                "Desc_QuantumOscillator_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SingularityCell_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SpaceElevatorPart_8_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Ballistic Warp Drive",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_11_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpaceElevatorPart_12_C": {
            "duration": {
                "d": 1,
                "n": 15
            },
            "ingredients": {
                "Desc_QuantumEnergy_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_QuantumOscillator_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SpaceElevatorPart_6_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_TemporalProcessor_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "AI Expansion Server",
            "produced_in": [
                "Build_QuantumEncoder_C"
            ],
            "products": {
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_SpaceElevatorPart_12_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpaceElevatorPart_1_C": {
            "duration": {
                "d": 1,
                "n": 30
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Smart Plating",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpaceElevatorPart_2_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 12
                }
            },
            "is_alternate": false,
            "name": "Versatile Framework",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_2_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_SpaceElevatorPart_3_C": {
            "duration": {
                "d": 1,
                "n": 24
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_Stator_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Automated Wiring",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_3_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpaceElevatorPart_4_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_SpaceElevatorPart_1_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Modular Engine",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpaceElevatorPart_5_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_CircuitBoard_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Computer_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_ModularFrameHeavy_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SpaceElevatorPart_3_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Adaptive Control Unit",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_5_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpaceElevatorPart_6_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_ElectromagneticControlRod_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SpaceElevatorPart_2_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Magnetic Field Generator",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_6_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_SpaceElevatorPart_7_C": {
            "duration": {
                "d": 1,
                "n": 80
            },
            "ingredients": {
                "Desc_ComputerSuper_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SpaceElevatorPart_5_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Assembly Director System",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_7_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpaceElevatorPart_8_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_CoolingSystem_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_ModularFrameFused_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_MotorLightweight_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SpaceElevatorPart_4_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Thermal Propulsion Rocket",
            "produced_in": [
                "Build_ManufacturerMk1_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_8_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_SpaceElevatorPart_9_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_CopperDust_C": {
                    "d": 1,
                    "n": 200
                },
                "Desc_PressureConversionCube_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Nuclear Pasta",
            "produced_in": [
                "Build_HadronCollider_C"
            ],
            "products": {
                "Desc_SpaceElevatorPart_9_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpaceElevator_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 500
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 250
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 400
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 1500
                }
            },
            "is_alternate": false,
            "name": "Space Elevator",
            "produced_in": [
                "FGBuildGun"
            ],
            "products": {
                "Desc_SpaceElevator_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpaceRifleMk1_C": {
            "duration": {
                "d": 1,
                "n": 120
            },
            "ingredients": {
                "Desc_IronScrew_C": {
                    "d": 1,
                    "n": 250
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": false,
            "name": "Rifle",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorRifle_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SpikedRebar_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Iron Rebar",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_SpikedRebar_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StackableShelf_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Basic Shelf Unit",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StackableShelf_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_Asphalt_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (1 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_Asphalt_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_Asphalt_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (2 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_Asphalt_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_Asphalt_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (4 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_Asphalt_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (1 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_Concrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (2 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_Concrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (4 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_FicsitSet_8x1_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (1 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_FicsitSet_8x1_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_FicsitSet_8x2_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (2 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_FicsitSet_8x2_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_FicsitSet_8x4_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (4 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_FicsitSet_8x4_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_GripMetal_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (1 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_GripMetal_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_GripMetal_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (2 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_GripMetal_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_GripMetal_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (4 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_GripMetal_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_PolishedConcrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (1 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_PolishedConcrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_PolishedConcrete_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (2 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_PolishedConcrete_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stair_PolishedConcrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Foundation Stairs (4 m)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Stair_PolishedConcrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StandaloneWidgetSign_Huge_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 12
                }
            },
            "is_alternate": false,
            "name": "Large Billboard",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StandaloneWidgetSign_Huge_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StandaloneWidgetSign_Large_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Small Billboard",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StandaloneWidgetSign_Large_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StandaloneWidgetSign_Medium_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Display Sign",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StandaloneWidgetSign_Medium_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StandaloneWidgetSign_Portrait_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Portrait Sign",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StandaloneWidgetSign_Portrait_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StandaloneWidgetSign_SmallVeryWide_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Label Sign (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StandaloneWidgetSign_SmallVeryWide_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StandaloneWidgetSign_SmallWide_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Label Sign (3\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StandaloneWidgetSign_SmallWide_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StandaloneWidgetSign_Small_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Label Sign (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StandaloneWidgetSign_Small_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StandaloneWidgetSign_Square_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Square Sign (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StandaloneWidgetSign_Square_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StandaloneWidgetSign_Square_Small_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Square Sign (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StandaloneWidgetSign_Square_Small_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StandaloneWidgetSign_Square_Tiny_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Square Sign (0.5\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StandaloneWidgetSign_Square_Tiny_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Stator_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": false,
            "name": "Stator",
            "produced_in": [
                "Build_AssemblerMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_Stator_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelBeam_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Steel Beam",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelPipe_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_SteelIngot_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Steel Pipe",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_SteelWall_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Basic Wall (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Tilted Wall (4\u202fm)",
            "produced_in": [],
            "products": {
                "Desc_SteelWall_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_8x4_Gate_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Gate Hole Wall",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_8x4_Gate_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_8x4_Window_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Single Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_8x4_Window_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_8x4_Window_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Reinforced Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_8x4_Window_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_8x4_Window_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Frame Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_8x4_Window_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_8x4_Window_04_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Panel Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_8x4_Window_04_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_FlipTris_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_FlipTris_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_FlipTris_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_FlipTris_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_FlipTris_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_FlipTris_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_FlipTris_8x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_FlipTris_8x8_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_Tris_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_Tris_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_Tris_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_Tris_8x2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_Tris_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_Tris_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SteelWall_Tris_8x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_SteelWall_Tris_8x8_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StorageContainerMk1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Storage Container",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StorageContainerMk1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StorageContainerMk2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPipe_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Industrial Storage Container",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StorageContainerMk2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StorageHazard_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Hazard Storage Box",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StorageHazard_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StorageMedkit_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Medical Storage Box",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StorageMedkit_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StoragePlayer_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 6
                }
            },
            "is_alternate": false,
            "name": "Personal Storage Box",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StoragePlayer_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_StreetLight_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Street Light",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_StreetLight_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Sulfur_Coal_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_Coal_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Sulfur (Coal)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Sulfur_Iron_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Sulfur (Iron)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_SulfuricAcid_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_Sulfur_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Sulfuric Acid",
            "produced_in": [
                "Build_OilRefinery_C"
            ],
            "products": {
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_SuperpositionOscillator_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_AluminumPlate_C": {
                    "d": 1,
                    "n": 9
                },
                "Desc_CrystalOscillator_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_DarkMatter_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_QuantumEnergy_C": {
                    "d": 1,
                    "n": 25
                }
            },
            "is_alternate": false,
            "name": "Superposition Oscillator",
            "produced_in": [
                "Build_QuantumEncoder_C"
            ],
            "products": {
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_QuantumOscillator_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_SyntheticPowerShard_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_DarkMatter_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_QuantumEnergy_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_QuartzCrystal_C": {
                    "d": 1,
                    "n": 12
                },
                "Desc_TimeCrystal_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Synthetic Power Shard",
            "produced_in": [
                "Build_QuantumEncoder_C"
            ],
            "products": {
                "Desc_CrystalShard_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_TarpFence_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tarp Construction Fence",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_TarpFence_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TemporalProcessor_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_ComputerSuper_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_FicsiteMesh_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_QuantumEnergy_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_TimeCrystal_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Neural-Quantum Processor",
            "produced_in": [
                "Build_QuantumEncoder_C"
            ],
            "products": {
                "Desc_DarkEnergy_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_TemporalProcessor_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TherapeuticInhaler_C": {
            "duration": {
                "d": 1,
                "n": 20
            },
            "ingredients": {
                "Desc_AlienProtein_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Mycelia_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_Shroom_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Therapeutic Inhaler",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "Desc_Medkit_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TimeCrystal_C": {
            "duration": {
                "d": 1,
                "n": 10
            },
            "ingredients": {
                "Desc_Diamond_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Build converter: Time Crystal",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_TimeCrystal_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Tractor_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "Tractor",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Tractor_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TradingPost_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_OreIron_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "The HUB",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_TradingPost_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TrainDockingStationLiquid_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "Fluid Freight Platform",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_TrainDockingStationLiquid_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TrainDockingStation_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "Freight Platform",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_TrainDockingStation_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TrainPlatformEmpty_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Empty Platform With Catwalk",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_TrainPlatformEmpty_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TrainPlatformEmpty_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Empty Platform",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_TrainPlatformEmpty_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TrainStation_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_Plastic_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 200
                }
            },
            "is_alternate": false,
            "name": "Train Station",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_TrainStation_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TreeGiftProducer_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Gift_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_XmasBall1_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_XmasBall2_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_XmasBranch_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Gift Tree",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_TreeGiftProducer_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_TruckStation_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Truck Station",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_TruckStation_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Truck_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_Motor_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_SteelPlateReinforced_C": {
                    "d": 1,
                    "n": 20
                }
            },
            "is_alternate": false,
            "name": "Truck",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Truck_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_UJellyLandingPad_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_GenericBiomass_C": {
                    "d": 1,
                    "n": 200
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "U-Jelly Landing Pad",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_LandingPad_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_UnpackageAlumina_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_PackagedAlumina_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Unpackage Alumina Solution",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_AluminaSolution_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_UnpackageBioFuel_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_PackagedBiofuel_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Unpackage Liquid Biofuel",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_LiquidBiofuel_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_UnpackageFuel_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_Fuel_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Unpackage Fuel",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_LiquidFuel_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_UnpackageIonizedFuel_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_PackagedIonizedFuel_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Unpackage Ionized Fuel",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_GasTank_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IonizedFuel_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_UnpackageNitricAcid_C": {
            "duration": {
                "d": 1,
                "n": 3
            },
            "ingredients": {
                "Desc_PackagedNitricAcid_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Unpackage Nitric Acid",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_GasTank_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_NitricAcid_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_UnpackageNitrogen_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_PackagedNitrogenGas_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Unpackage Nitrogen Gas",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_GasTank_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_NitrogenGas_C": {
                    "d": 1,
                    "n": 4
                }
            }
        },
        "Recipe_UnpackageOilResidue_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_PackagedOilResidue_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Unpackage Heavy Oil Residue",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_HeavyOilResidue_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_UnpackageOil_C": {
            "duration": {
                "d": 1,
                "n": 2
            },
            "ingredients": {
                "Desc_PackagedOil_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Unpackage Oil",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_LiquidOil_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_UnpackageRocketFuel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_PackagedRocketFuel_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Unpackage Rocket Fuel",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_GasTank_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_RocketFuel_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_UnpackageSulfuricAcid_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_PackagedSulfuricAcid_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Unpackage Sulfuric Acid",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_UnpackageTurboFuel_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_TurboFuel_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Unpackage Turbofuel",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_LiquidTurboFuel_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_UnpackageWater_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_PackagedWater_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": true,
            "name": "Unpackage Water",
            "produced_in": [
                "Build_Packager_C"
            ],
            "products": {
                "Desc_FluidCanister_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_Water_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_UraniumCell_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_OreUranium_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 8
                }
            },
            "is_alternate": false,
            "name": "Encased Uranium Cell",
            "produced_in": [
                "Build_Blender_C"
            ],
            "products": {
                "Desc_SulfuricAcid_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_UraniumCell_C": {
                    "d": 1,
                    "n": 5
                }
            }
        },
        "Recipe_Uranium_Bauxite_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_OreBauxite_C": {
                    "d": 1,
                    "n": 48
                },
                "Desc_SAMIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": true,
            "name": "Build converter: Uranium Ore (Bauxite)",
            "produced_in": [
                "Build_Converter_C"
            ],
            "products": {
                "Desc_OreUranium_C": {
                    "d": 1,
                    "n": 12
                }
            }
        },
        "Recipe_Valve_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Rubber_C": {
                    "d": 1,
                    "n": 4
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Valve",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Valve_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Walkway_Cross_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Walkway Intersection",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_WalkwayCross_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Walkway_Ramp_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Walkway Ramp",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_WalkwayRamp_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Walkway_Straight_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Straight Walkway",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_WalkwayStraight_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Walkway_T_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Walkway T-Junction",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_WalkwayT_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Walkway_Turn_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Walkway Corner",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_WalkwayTurn_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_WallSet_Steel_Angular_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_WallSet_Steel_Angular_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_WallSet_Steel_Angular_8x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_WallSet_Steel_Angular_8x8_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_8x4_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Basic Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_8x4_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_8x4_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Basic Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_8x4_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Basic Wall (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Basic Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x4_ConveyorHole_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall x\u202f1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_ConveyorHole_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x4_ConveyorHole_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall x\u202f2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_ConveyorHole_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x4_ConveyorHole_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall x\u202f3",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_ConveyorHole_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x4_Corner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Corner Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_Corner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x4_Corner_2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Concave Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_Corner_2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x4_Window_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Single Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_Window_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x4_Window_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Frame Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_Window_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x4_Window_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Panel Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_Window_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x4_Window_04_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Reinforced Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_Window_04_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x8_Corner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Corner Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x8_Corner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_8x8_Corner_2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Concave Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x8_Corner_2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_Angular_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_Angular_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_Angular_8x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_Angular_8x8_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_CDoor_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Center Door Wall",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_CDoor_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_FlipTris_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x1_FlipTris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_FlipTris_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x2_FlipTris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_FlipTris_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_FlipTris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_FlipTris_8x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x8_FlipTris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_Gate_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Gate Hole Wall",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_Gate_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_SDoor_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Side Door Wall",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_SDoor_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_Tris_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x1_Tris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_Tris_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x2_Tris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_Tris_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x4_Tris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Concrete_Tris_8x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Concrete_8x8_Tris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Conveyor_8x4_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall x\u202f3",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Conveyor_8x4_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Conveyor_8x4_01_Steel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall x\u202f3",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Conveyor_8x4_01_Steel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Conveyor_8x4_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall x\u202f2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Conveyor_8x4_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Conveyor_8x4_02_Steel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall x\u202f2",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Conveyor_8x4_02_Steel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Conveyor_8x4_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall x\u202f1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Conveyor_8x4_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Conveyor_8x4_03_Steel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Conveyor Wall x\u202f1",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Conveyor_8x4_03_Steel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Conveyor_8x4_04_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Perpendicular Wall Conveyor",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Conveyor_8x4_04_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Conveyor_8x4_04_Steel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Perpendicular Wall Conveyor",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Conveyor_8x4_04_Steel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Door_8x4_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Center Door Wall",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Door_8x4_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Door_8x4_01_Steel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Center Door Wall",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Door_8x4_01_Steel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Door_8x4_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Side Door Wall",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Door_8x4_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Door_8x4_03_Steel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Side Door Wall",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Door_8x4_03_Steel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Frame_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Frame Wall",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Frame_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Gate_8x4_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Gate Hole Wall",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Gate_8x4_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Basic Wall (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_8x4_Corner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Corner Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x4_Corner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_8x4_Corner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Concave Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x4_Corner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_8x8_Corner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Corner Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x8_Corner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_8x8_Corner_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Concave Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x8_Corner_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_Angular_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_Angular_8x4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_Angular_8x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_Angular_8x8_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_FlipTris_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x1_FlipTris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_FlipTris_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x2_FlipTris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_FlipTris_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x4_FlipTris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_FlipTris_8x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Inverted Ramp Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x8_FlipTris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_Tris_8x1_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (1\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x1_Tris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_Tris_8x2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (2\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x2_Tris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_Tris_8x4_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x4_Tris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Orange_Tris_8x8_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Ramp Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Orange_8x8_Tris_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Steel_8x4_Corner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Corner Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Steel_8x4_Corner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Steel_8x4_Corner_2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Concave Wall (4\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Steel_8x4_Corner_2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Steel_8x8_Corner_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Corner Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Steel_8x8_Corner_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Steel_8x8_Corner_2_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Tilted Concave Wall (8\u202fm)",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Steel_8x8_Corner_2_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Window_8x4_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Single Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Window_8x4_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Window_8x4_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Frame Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Window_8x4_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Window_8x4_03_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Panel Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Window_8x4_03_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Window_8x4_03_Steel_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Panel Window",
            "produced_in": [],
            "products": {
                "Desc_Wall_Window_8x4_03_Steel_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Window_8x4_04_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Reinforced Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Window_8x4_04_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Window_8x4_05_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Angled Frame Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Window_8x4_05_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Window_8x4_06_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Honeycomb Frame Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Window_8x4_06_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Window_8x4_07_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Triple Frame Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Window_8x4_07_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Window_Thin_8x4_01_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Full Frame Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Window_Thin_8x4_01_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wall_Window_Thin_8x4_02_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Silica_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_SteelPlate_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Hex Frame Window",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Wall_Window_Thin_8x4_02_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_WaterPump_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_CopperSheet_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Rotor_C": {
                    "d": 1,
                    "n": 10
                }
            },
            "is_alternate": false,
            "name": "Water Extractor",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_WaterPump_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Wire_C": {
            "duration": {
                "d": 1,
                "n": 4
            },
            "ingredients": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Wire",
            "produced_in": [
                "Build_ConstructorMk1_C",
                "BP_WorkBenchComponent_C",
                "FGBuildableAutomatedWorkBench"
            ],
            "products": {
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_WorkBench_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Crafting Bench",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_WorkBench_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_Workshop_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_IronPlate_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 4
                }
            },
            "is_alternate": false,
            "name": "Equipment Workshop",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_Workshop_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_WreathDecor_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_XmasBow_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_XmasWreath_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Decoration",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_WreathDecor_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XMassTree_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cement_C": {
                    "d": 1,
                    "n": 500
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 50
                },
                "Desc_XmasBranch_C": {
                    "d": 1,
                    "n": 100
                }
            },
            "is_alternate": false,
            "name": "Giant FICSMAS Tree",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_XMassTree_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XenoBasher_C": {
            "duration": {
                "d": 1,
                "n": 80
            },
            "ingredients": {
                "BP_EquipmentDescriptorShockShank_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 25
                },
                "Desc_ModularFrame_C": {
                    "d": 1,
                    "n": 5
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 500
                }
            },
            "is_alternate": false,
            "name": "Xeno-Basher",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorStunSpear_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XenoZapper_C": {
            "duration": {
                "d": 1,
                "n": 40
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 15
                },
                "Desc_IronPlateReinforced_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_Wire_C": {
                    "d": 1,
                    "n": 50
                }
            },
            "is_alternate": false,
            "name": "Xeno-Zapper",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EquipmentDescriptorShockShank_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XmasBall1_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Gift_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Red FICSMAS Ornament",
            "produced_in": [
                "Build_SmelterMk1_C"
            ],
            "products": {
                "Desc_XmasBall1_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XmasBall2_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Gift_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "Blue FICSMAS Ornament",
            "produced_in": [
                "Build_SmelterMk1_C"
            ],
            "products": {
                "Desc_XmasBall2_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_XmasBall3_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_CopperIngot_C": {
                    "d": 1,
                    "n": 2
                },
                "Desc_XmasBall1_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "Copper FICSMAS Ornament",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_XmasBall3_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XmasBall4_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_IronIngot_C": {
                    "d": 1,
                    "n": 3
                },
                "Desc_XmasBall2_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Iron FICSMAS Ornament",
            "produced_in": [
                "Build_FoundryMk1_C"
            ],
            "products": {
                "Desc_XmasBall4_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XmasBallCluster_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_XmasBall3_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_XmasBall4_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Ornament Bundle",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_XmasBallCluster_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XmasBow_C": {
            "duration": {
                "d": 1,
                "n": 12
            },
            "ingredients": {
                "Desc_Gift_C": {
                    "d": 1,
                    "n": 2
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Bow",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_XmasBow_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XmasBranch_C": {
            "duration": {
                "d": 1,
                "n": 6
            },
            "ingredients": {
                "Desc_Gift_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Tree Branch",
            "produced_in": [
                "Build_ConstructorMk1_C"
            ],
            "products": {
                "Desc_XmasBranch_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XmasStar_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_CandyCane_C": {
                    "d": 1,
                    "n": 20
                },
                "Desc_XmasWreath_C": {
                    "d": 1,
                    "n": 5
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Wonder Star",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_XmasStar_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_XmasWreath_C": {
            "duration": {
                "d": 1,
                "n": 60
            },
            "ingredients": {
                "Desc_XmasBallCluster_C": {
                    "d": 1,
                    "n": 6
                },
                "Desc_XmasBranch_C": {
                    "d": 1,
                    "n": 15
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Wreath",
            "produced_in": [
                "Build_AssemblerMk1_C"
            ],
            "products": {
                "Desc_XmasWreath_C": {
                    "d": 1,
                    "n": 2
                }
            }
        },
        "Recipe_ZipLine_C": {
            "duration": {
                "d": 1,
                "n": 40
            },
            "ingredients": {
                "BP_EquipmentDescriptorShockShank_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 10
                },
                "Desc_HighSpeedWire_C": {
                    "d": 1,
                    "n": 30
                },
                "Desc_IronRod_C": {
                    "d": 1,
                    "n": 3
                }
            },
            "is_alternate": false,
            "name": "Zipline",
            "produced_in": [
                "BP_WorkshopComponent_C"
            ],
            "products": {
                "BP_EqDescZipLine_C": {
                    "d": 1,
                    "n": 1
                }
            }
        },
        "Recipe_xmassLights_C": {
            "duration": {
                "d": 1,
                "n": 1
            },
            "ingredients": {
                "Desc_Cable_C": {
                    "d": 1,
                    "n": 1
                },
                "Desc_XmasBallCluster_C": {
                    "d": 1,
                    "n": 1
                }
            },
            "is_alternate": false,
            "name": "FICSMAS Power Light",
            "produced_in": [
                "BP_BuildGun_C"
            ],
            "products": {
                "Desc_xmassLights_C": {
                    "d": 1,
                    "n": 1
                }
            }
        }
    }
};
export default game_data;
