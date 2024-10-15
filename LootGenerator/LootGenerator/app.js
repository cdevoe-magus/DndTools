'use strict';

console.log('Hello world');
//As a general note: Gear modifiers that use flat gold price instead of weapon +value are a bit
//of a sticking point. I'm currently leaning toward adding them in w/ the appropriate + level.
//I will continue to mull this over though.

//Normally I'd just store this following info in a database somewhere, but i don't think the set up is worth it right now.

//weapon modifiers by +cost
const wgp = ["Adaptive"];
const w1 = ["Agile", "Allying", "Ambushing", "Answering", "Bane", "Benevolent", "Bloodhunting", "Bloodsong", "Brawling", "Called", "Confounding", "Conserving", "Corrosive", "Countering", "Courageous", "Cruel", "Cunning", "Deadly", "Defending", "Dispelling", "Distance", "Distracting", "FateStealing", "Flamboyant", "Flaming", "Fortuitous", "Frost", "Shock", "Keen", "Spellstoring",
    "Furious","GhostTouch","Greyflame","Grounding","Guardian","Guided","Heartseeker","Huntsman","Inspired", "Jurist","KiFocus","Limning","Lucky","Menacing", "Merciful","MightyCleaving","Mimetic","Neutralizing","Ominous","Planar","Plummeting","Quenching", "Reliable","Returning","Sacred", "Seaborne","Seeking", "SpiritHunting","Thawing","Throwing","Thundering","Valiant","Vicious"];
const w2 = ["Anarchic","Axiomatic", "Anchoring", "CorrosiveBurst", "Covetous", "Defiant", "Lesser-Designating", "DispellingBurst", "GreaterDistracting", "EndlessAmmo","Furyborn", "Glorious", "Holy","Unholy","Igniting", "Ki-Inensifying", "Impact", "Lifesurge", "Negating", "FlameBurst", "FrostBurst", "ShockBurst", "PhaseLocking", "Stalking", "Wounding"];
const w3 = ["GreaterLucky", "GreaterFlamboyant", "Exhausting", "Speed", "SpellStealing", "Repositioning", "GreaterReliable", "Nullifying"];
const w4 = ["BrilliantEnergy", "SecondChance", "NimbleShot", "Greater-Designating", "Dancing"];
const w5 = ["Vorpal", "Flying", "Heartpiercing"];
const wArray = [w1, w2, w3, w4, w5];
//weapons by type
const mats = ["Adamantine", "Mythril", "Dragonbone", "Demonbone", "Darkleaf", "Silver", "Steel", "Wood", "Stone", "ColdIron", "Bone"];
const swords = ["Shortsword", "Wakizashi", "Katana", "Longsword", "Scimitar", "Rapier", "Canesword", "Greatsword", "Bastardsword", "ElvenCurveBlade", "ElvenLeafBlade", "ElvenThornBlade", "DoubleChickenSaber", "Falchion", "AldoriDuelingSword", "NineRingBroadSword", "Cutlass", "Gladius", "ButterflySword", "TripointSword", "Templesword", "Kopesh", "Shotel", "Falcata", "TwoBladeSword", "SevenBranchSword", "Nodachi", "Urumi", "Sickle", "Sica", "DoubleWalkingStickKatana"];
const daggers = ["Dagger", "Kukri", "Kerambit", "Starknife", "Jutte", "Swordbreaker", "Quadrens", "WarRazor", "Sai"];
const poles = ["Shortspear", "Spear", "Javelin", "BoarSpear", "Pike", "Glaive", "Halberd", "DwarvenUrgosh", "MonkSpade", "LongSpear", "QuarterStaff", "Trident", "Bardiche", "BecDeCorbin", "Bill", "Guisarme", "Glaive-Guisarme", "Naginata", "Lance", "HookLance"];
const axes = ["Handaxe", "BoardingAxe", "BattleAxe", "GreatAxe", "ThrowingAxe", "HookedAxe", "DwarvenWarAxe", "DwarvenDoubleWarAxe", "DwarvenLongAxe", "DwarvenUrgosh", "OrcDoubleAxe"];
const hammers = ["BattleAspergillum", "LightMace", "Club", "HeavyMace", "MorningStar", "LightHammer", "LightFlail", "Warhammer", "Earthbreaker", "Greatclub", "HeavyFlail", "Sansetsukon", "Aklys", "HalflingSlingStaff", "Nunchaku", "Whip", "ScorpionWhip", "NineSectionWhip", "DireFlail", "BladedScarf", "DwarvenLonghammer", "GnomeHookedHammer", "MeteorHammer", "SpikedChian", "Tetsubo", "Urumi", "CatoNineTails"];
const bows = ["Blowgun", "Sling", "Shortbow", "Longbow", "LightCrossbow", "HeavyCrossbow", "Chakram", "Shuriken", "CompositeShortbow", "CompositeLongbow", "HandCrossbow", "RepeatingLightCrossbow", "RepeatingHeavyCrossbow", "RepeatingHandCrossbow", "DoubleCrossbow", "Boomerang", "Bolas"];
const guns = ["Pistol","Revolver","Musket","Rifle","Shotgun", "Blunderbuss"];
const exotics = ["AldoriDuelingSword", "Aklys", "Bich'hwa", "DanBong", "DwarvenBoulderHelmet", "ElvenLeafBlade", "EmeiPiercer", "FightingFan", "HalflingSlingStaff", "Kama", "TriBladeKatar", "KnuckleAxe", "Net", "Nunchaku", "Pata", "Quadrens", "Sai", "ScorpionWhip", "Pata", "Sica", "Swordbreaker", "TekkoKagi", "Wakizashi", "BastardSword", "GreatTerbutje", "DwarvenDoubleWaraxe", "DwarvenWaraxe", "ElvenThornBlade",
    "Falcata", "HookedAxe", "Katana", "Kopesh", "Madu", "NineSectionWhip", "RhokaSword", "SawtoothSaber", "Shotel", "TempleSword", "Urumi", "Wahaika", "Whip", "BladedScarf", "BoStaff", "BoardingGaff", "ChainSpear", "DireFlail", "DoubleWalkingStickKatana", "DoubleChainKama", "DwarvenLongaxe", "DwarvenLonghammer", "DwarvenUrgosh", "FlyingBlade", "GnomeHookedHammer", "Harpoon", "InjectionSpear", "Kusarigama",
    "KyoketsuShoge", "Mancatcher", "MeteorHammer", "OrcDoubleAxe", "SevenBranchSword", "SnagNet", "SpikedChain", "Taiaha", "Tetsubo", "TotemSpear", "TwoBladedSword"];
const close = ["BrassKnuckles", "Cestus", "Gauntlet", "Hookhand", "SpikeGuantlet", "IronBrush", "Klar", "Tonfa", "Sap", "WushuDart", "Scizore", "DanBong", "FightingFan", "Tri-BladeKatar", "Katar", "KnuckleAxe", "Pata", "TekkoKagi", "Madu", "EmeiPiercer"];
const monks = ["Quarterstaff", "BoStaff", "Tonfa", "TempleSword", "ButterflySword", "EmiePeircer", "Sai", "Kama", "FightingFan", "DoubleChainKama", "Kusarigama", "KyoketsuShoge", "Shuriken", "Katana", "Wakizashi", "TekkoKagi", "Nunchaku", "DoubleWalkingStickKatana"];
//armor
const light = ["LeatherArmor", "StuddedLeatherArmor", "Chainshirt", "QuiltedClothArmor", "Haramaki", "PaddedArmor", "HideShirt", "LeafArmor"];
const medium = ["HideArmor", "Breastplate", "Scalemail", "Chainmail", "LamellarArmor", "Do-Maru", "KikkoArmor", "MountainPatternArmor"];
const heavy = ["PLatemail", "O-Yoroi", "Stoneplate", "Hellplate", "Tatami-do", "HalfPlate", "KusariGusoku","BandedMail", "SplintMail"];
const shield = ["Buckler", "LightShield","SpikedLightShield", "HeavyShield","SpikedHeavyShield", "TowerShield", "QuickdrawShield"];
//armor mods, shield mods technically count as armor mods
const a1 = ["Cloudburst","Creeping","Burdenless","Balanced", "Benevolent", "Bitter", "Bolstering", "Burdenless", "Cloudburst", "Champion", "Calming", "Creeping", "Dastard", "Defiant", "LightFortification", "Expeditious", "Glamered","Grinding","Impervious", "Mirrored", "PoisonResistant", "Restful", "Reliquary", "SpellStoring", "Vouchsafing", "Warding", "Jousting", "Rallying", "Shadow", "Slick"];
const a2 = ["Delving","Amorphous","Adhesive","AcidResistance","FireResistance","ColdResistance","LightningResistance","SonicResistance","Jarring","SpellDodging", "SR13", "Trackless", "Harmonizing","Hosteling", "Putrid", "Radiant", "Restful", "Spiteful"];
const a3 = ["ImprovedAcidResist","ImprovedFireResist","ImprovedColdResist","ImprovedLightningResist","ImprovedSonicResist","Brawling","GhostTouch", "ModerateFortification", "Titanic", "Wild", "SR15", "Sensing", "Invulnerability", "Righteous","Unbound", "Unrighteous", "Vigilant", "Martyring", "ImprovedShadow", "ImprovedSlick"];
const a4 = ["SR17","GreaterAcidResist","GreaterFireResist","GreaterColdResist","GreaterLightningResist","GreaterSonicResist", "Determination","Etherealness", "GreaterShadow", "GreaterSlick", "UndeadControlling"];
const a5 = ["HeavyFortification","SR19"];
const s1 = ["ArrowCatching","Bashing","Blinding","Clangorous","Guarding", "Ramming", "Throwing","Wyrm'sBeath"];
const s2 = ["ArrowDeflecting","Animated","Merging","GreaterGuarding", "Jawbreaker"];
const s5 = ["Reflecting"];

//magic and potions
uni0 = ["Prestidigitation", "ArcaneMark"];

evo0 = ["Breeze","Pnumbre","Scoop","Spark","DancingLights", "Flare", "Light", "RayofFrost"];
evo1 = ["BurningHands","Ear-PiercingScream","FlareBurst","FloatingDisk","TouchofCombustion","GentleBreeze","MagicMissile", "HydraulicPush", "ShadowHands","ShockingGrasp", "Snowball", "Thunderstomp"];
evo2 = ["AgressiveThundercloud","BurningGaze","ContinualFlame","Darkness","DefensiveShock","ElementalTouch","FireBreath","FlamingSphere","FlurryofSnowballs","FrigidTouch","Frostfall","GhostWhip","GustingSphere","GustofWind","ImbueWithElementalMight","MoltenOrb","PilferingHand","ProtectivePnumbra","RicochetShot","ScorchingRay","Shatter","SonicScream","SpontaneousImmolation"];
evo3 = ["AirGeyser","CallTheVoid","CampfireWall","ChainofPerdition","ContingentAction","Daylight","DistractingCacophany","DraconicReservior","EctoplasmicSnare","ElementalAura","Fireball","FireStream","ForcePunch","HydraulicTorrent","LightningBolt","LissalanSnakeSigil","NightofBlades","PainStrike","GreaterThunderStomp","TinyHut","TwilightKnife", "Windwall"];
evo4 = ["GreaterAggressiveThunderCloud", "Agonize", "BallLightning", "ContingentScroll", "CreepingIce","Detonate","Dragon'sBreath","FireShield","GreaterFlamingSphere","IceStorm","ResilientSphere","RiverofWind","Shout","TelekineticCharge","UnbearableBrightness","VitriolicMist","VolcanicStorm","WallofFire","WallofIce"];
evo5 = ["ConeofCold","FireSnake","IcyPrison","InterposingHand","LightningArc","MassPainStrike","Sending", "SonicThrust","WallofDarkness","WallofEctoplasm","WallofLight","WallofSound","WallofForce"];
evo6 = ["ChainLightning","ChainsofFire","ContagiousFlame","ColdIceStrike","ForcefulHand","ExplodeHead","FreezingSphere","LeashedShackles","PathoftheWinds","SignofWrath","Sirocco","Starfall"];
evo7 = ["DelayedBlastFireball","ForceCage","GraspingHand","KiShout","Mage'sSword","PrismaticSpray","ScouringWinds","Vortex"];
evo8 = ["ClenchedFist","PolarRay","GreaterShout","Stormbolts","Sunburst","TelekineticSphere"];
evo9 = ["CrushingHand","MassIcyPrison","MeteorSwarm","RidetheLightning","WindsofVengeance"];

necro0 = ["Bleed","DisruptUndead","TouchofFatigue"];
necro1 = ["CauseFear","ChillTouch","DecomposeCorpse","Interrogation","PhantomBlood","RayofEnfeeblement","RayofSickening","RepairUndead","RestoreCorpse","SculptCorpse","Undine'sCurse","UnlockFlesh"];
necro2 = ["Blindness/Deafness","BloodyTearsandJaggedSmile","BrowGasher","CommandUndead","CompanionLifeLink","FalseLife","GhoulTouch","LifePact","PerniciousPoison","Scare","SentrySkull","Skinsend","SpectralHand","StealVoice","StrickenHeart","TouchofBloodletting","UnshakableChill"];
necro3 = ["LesserAnimateDead","BarrowHaze","BlackSwordofWar","Catatonia","Deathwine","EldritchFever","GentleRepose","HaltUndead","HealThief","HowlingAgony","KiLeach","LissalanSnakeSigil","MarionettePossession","RayofExhaustion","SandsofTime","Terror","ToxicGift","UnlivingRage","VampiricTouch","VampiricHunger"];
necro4 = ["AggrivateAffliction","AnimateDead","BestowCurse","BlackHand","BloatBomb","Boneshatter","Contagion","Enervation","GreaterFalseLife","FamiliarMelding","Fear","InfuseDecay","LesserObjectPossession","PurgeSpirit","RidingPossession","Sadomaochism","ShadowAttack","ShadowProjection","SkeletonCrew","WallofBlindness/Deafness"];
necro5 = ["AbsorbToxicity","LesserAstralProjection","BlackSpot","Blight","FeastonFear","MagicJar","ObjectPossession","PlagueCarrier","PossessObject","Possession","MassRepairUndead","Suffocation","SummonerConduit","SymbolofPain","VampiricShadowShield","WavesofFatigue"];
necro6 = ["BansheeBlast","CicleofDeath","GreaterContagion","CreateUndead","MajorCurse","Eyebite","SymbolofFear","UndeathtoDeath","UnwillingShield","WhatGrowsWithin"];
necro7 = ["ControlUndead","CreateVariantMummy","Epidemic","FingerofDeath","GreaterObjectPossession","PlagueStorm","SymbolofWeakness","TemporaryResurrection","WavesofExhaustion"];
necro8 = ["GreaterBestowCurse","Clone","CreateGreaterUndead","HorridWilting","OrboftheVoid","GreaterPossession","SymbolofDeath"];
necro9 = ["EnergyDrain", "MassSuffocation", "SoulBind", "WailoftheBanshee"];

abjur0 = ["Resistance"];
abjur1 = ["AbjuringStep","Alarm","EndureElements","HoldPortal","InvisibilityAlarm","LineintheSand","PeaceBond","ProtectionFromAlignment","Shield","ShockShield","StunningBarrier","SunderBreaker","TheftWard","WaveShield","WinterFeathers"];
abjur2 = ["ArcaneLock","BulletShield","BulletWard","CrimsonConfession","DeathFromBelow","CommunalEndureElements","EscapingWard","LightWarding","MiserablePity","ObscureObject","ProtectionFromArrows","CommunalProcetionFromAlignment","ResistEnergy","SuppressCharmsandCompulsions","WardingWeapon","WiththeWind"];
abjur3 = ["Blink","CloakofWinds","DispelMagic","ExplosiveRunes","LissalanSnakeSigil","MagicCircle","Nondetection","CommunalProtectionFromArrows","ProtectionFromEnergy","CommunalResistEnergy","ShieldCompanion","GreaterStunningBarrier"];
abjur4 = ["AbsorbRune1","CurseofMagicNegation","DimensionalAnchor","EnchantmentFoil","FireTrap","LesserGlobeofInvulnerability","CommunalNondetection","CommunalProtectionFromEnergy","RemoveCurse","LesserSpellCrash","Stoneskin","ThaumaturgicCircle","TrueForm"];
abjur5 = ["BreakEnchantment","CovetousAura","Dismissal","LifeBubble","Mage'sPrivateSanctum","SootheConstruct","CommunalStoneskin","UnbreakableConstruct","WreathofBlades"];
abjur6 = ["AbsorbRune2","AntimagiField","GreaterDispelMagic","GlobeofInvulnerability","GuardsandWards","Repulsion","Seer'sBane","Spellcrash","SymbolofSealing","WallofSilver"];
abjur7 = ["Banishment","CircleofClarity","Deflection","EtherealJaunt","Expend","Sequester","SpellTurning","TeleportTrap"];
abjur8 = ["DimensionalLock","MindBlank","PrismaticWall","ProtectionFromSpells","GreaterSpellcrash"];
abjur9 = ["AbsorbRune3", "Etherealness", "Freedom", "Imprisonment", "Mage'sDisjunction", "CommunalMindBlank", "PrismaticSphere", "SymbolofVulnerability", "WallofSupression"];

Div0 = ["DetectMagic","DetectPoison","ReadMagic"];
Div1 = ["AnticipatePeril","ComprehendLanguages","DetectCharm","DetectSecretDoor","DetectUndead","DiscernNextofKin","HeightenedAwareness","Identify","Mindlink","RuneTrace","SeeAlignment","TrueStrike"];
Div2 = ["AnticipateThoughts","BloodTrascription","CommuneWithBirds","CreateTreasureMap","DetectThoughts","ElementalSpeech","LocateObject","PsychicReading","SeeInvisibility","ShadowSight","ShareLanguage","ShareMemory", "StormSight","TrackShip"];
Div3 = ["ArcaneSight","AuraSight","BloodBiography","Clairvoyance","CompellingFate","DetectMindscape","Harrowing","IrriseniMirrorSight","LocateWeakness","PierceDisguise","SeedSpies","SeekThoughts","CommunalShareLanguage","Tongues","UnspokenName"];
Div4 = ["ArcaneEye","DetectScrying","FlickeringFate","Hypercognition","LocateCreature","NamedBullet","Scrying","ShareSenses","SymbolofRevelation","CommunalTongues"];
Div5 = ["ContactOtherPlane","MaskFromDivination","MindProbe","PryingEyes","SymbolofScrying","TelepathicBond","ThoughtSense","Truespeak"];
Div6 = ["AnalyzeDweomer","BattlemindLink","DreamScan","LegendLore","GreaterNamedBullet","SarzariShadowMemory","Telepathy","Trueseeing"];
Div7 = ["GreaterArcaneSight","Retrocognition","GreaterScrying","Vision"];
Div8 = ["DiscernLocation","MomentofPrecience","PredictionofFailure","GreaterPryingEyes"];
Div9 = ["", "", "", "", ""];

Ill0 = ["GhostSound", "HauntedFeyAspect", "ShadowBite","Silhouete"];
Ill1 = ["AlterMusicalInstrument", "Blend", "BlurredMovement", "ColorSpray", "DecrepitDisguise", "DisguiseSelf", "DisguiseWeapon", "IllusionofCalm", "LoseTheTrail", "MagicAura", "MirrorMantis", "NegativeReaction", "Quintessence","SemblanceofFlesh","ShadowWeapon","SilentImage","Vanish","Ventriloquism"];
Ill2 = ["Blur", "DisguiseOther", "GhostlyDisguise", "HauntingMists", "HypnoticPattern", "Invisibility", "Jitterbugs", "MadHallucination", "MagicMouth", "MirrorImage", "MinorImage", "Misdirection", "ObscuredScript", "Paranoia", "PhantomTrap","RamientofCommand","ShadowAnchor","SilentTable","SymbolofMirroring","SympatheticAura"];
Ill3 = ["AdjustibleDisguise", "Displacement", "FearsomeDuplicate", "IllusoryScript", "InvisibilitySphere", "LissalanSnakeSigil", "LoathsomeVeil", "MajorImage", "MinorDream", "OnericHorror", "Sunstalker", "VisionofHell", "WallofNausea"];
Ill4 = ["HallucinatoryTerrain", "IllusoryWall", "GreaterInvisibility", "MindscapeDoor", "MinorPhantomObject", "PhantasmalKiller", "RainbowPattern", "ShadowConjuration", "ShadowStep", "ShockingImage","LesserSimulacrum","WanderingStarMote"];
Ill5 = ["CreateMindscape", "DeceptiveRedundancy", "Dream", "FalseVision", "MajorPhantomObject", "MirageArcana", "Nightmare", "GreaterOnericHorror","PersistentImage","PhantasmalWeb","Seeming","ShadowEvocation","SymbolofStriking","VillageVeil"];
Ill6 = ["Mislead", "PermanentImage", "ProgrammedImage", "PsychicAsylum", "ShadowWalk", "Veil"];
Ill7 = ["GreaterCreateMindscape", "DreamCouncil", "MassInvisibility", "LunarVeil","PhantasmalRevenge","ProjectImage","GreaterShadowConjuration", "Simulacrum"];
Ill8 = ["ScintillatingPattern", "Screen", "GreaterShadowEvocation"];
Ill9 = ["Shades", "Weird"];

Trans0 = ["Jolt", "ResizeShadow", "Root", "ShadowBlindness"];
Trans1 = ["AlchemicalTinkering", "AlterWinds", "AnimateRope", "AntHaul", "BloodMoney", "BodyCapacitance", "Break", "Crafter'sCurse", "Crafter'sFortune", "DampPowder", "DancingLanturn", "EnlargePerson", "ExpeditiousExcavation", "ExpecditiousRetreat", "FabricateBullets", "FeatherFall", "ForcedQuiet", "GravityBow",
    "Jump", "Jury-Rig", "Keyhole", "LengthenShadows", "LiberatingCommand", "LongArm", "Longshot", "MagicWeapon", "Marid'sMastery", "MirrorPolish", "MirrorStrike", "MonkeyFish", "PeasantArmaments", "PolypurposePanacea", "RechargeInnateMagic", "ReducePerson", "RefineImprovisedWeapon", "ReinforceArmaments", "ShadowShape",
    "SnapdragonFireworks", "StoneFist", "StrongWings", "SunderingShards", "TouchofGracelessness","TouchoftheSea","UnerringWeapon","UrbanGrace","VocalAlteratioin", "WeakenPowder", "WindyEscape", "YouthfulAppearance"];
Trans2 = ["Aboleth'sLung", "AcceleratePoison", "AdhesiveBlood", "AirStep", "AlterSelf", "AnimalAspect", "CommunalAntHaul", "Badger'sFerocity", "Bear'sEndurance", "BloodArmor", "BloodBlaze", "BoilingBlood", "BrittlePortal", "Bull'sStrength", "Bouyancy", "Cat'sGrace", "CertainGrip", "Darkvision", "DestabilizePowder", "DisfiguringTouch",
    "Eagle'sSplendor", "ExtremeFlexibility", "Fox'sCunning", "FungalBlisters", "Glide", "GraspingVine", "Greensight", "HiddenKnowledge", "KineticReverberation", "Knock", "Levitate", "MagicSeigeEngine", "MakeWhole", "MarkofBlood", "MasterworkTransformation", "MergeWithFamiliar", "MirrorHideaway", "Owl'sWisdom", "PouncingFury", "Pyrotechnics", "RecoilFire",
    "CommunalReinforceArmaments", "Rogue'sStab","RopeTrick","RuneofRule","SculptSimulacrum","SilentCombat","SilktoSteel","Slither","SpiderClimb","Squeeze","StabilizePowder", "StealBreath","Sun'sDisdain","TelekineticAssembly","ThunderFire","TimeShudder","TwistedSpace", "WhisperingWind"];
Trans3 = ["AncestralRegression", "AnchoredStep", "AnthropomorphicAnimal", "BeastShapeI", "Blink", "BloodScent", "BloodSentinel", "BoneFlense", "Burrow", "CountlessEyes", "CommunalDarkvision", "Devolution", "DisableConstruct", "EarthTremor", "EnterImage", "EruptivePustules", "ExcruciatingDeformation", "FinstoFeet", "FireTrail", "FlameArrow", "FlashFire", "FractionsofHealandHarm", "Fly",
    "GaseousForm", "Haste", "HeartoftheMetal", "HostileLevitation", "JaNoiAspect", "ImproveTrap", "KeenEdge", "LassilianSnakeSigilTransmutation", "GreaterMagicWeapon", "MonsterousExtremities", "MonsterousPhysiqueI", "ParagonSurge", "PolymorphFamiliar", "PrehensilePilfer", "PupShape", "RagingRubble", "ResinousSkin", "SebaceousTwin", "SecretPage", "ShadowSnare", "ShiftSand", "ShrinkItem", "Slow", "CommunalSpiderClimb",
    "StranglingHair", "ThunderousFootfalls", "TouchInjection", "UndeadAnatomyI", "VersatileWeapon", "WaterBreathing"];
Trans4 = ["AbsorbingInhalation", "AbyssalVermin", "AdjustiblePolymorph", "LesserAgeResistance", "GreaterAnimalAspect", "BeastShapeII", "CalcificTouch", "CloudShape", "CrimsonBreath", "CurseofBurningSleep", "GreaterDarkvision", "EarthGlide", "ElementalBodyI", "MassEnlargePerson", "EyesoftheVoid", "FeyFormI", "FilmofFilth", "Firefall", "FlamingAura", "FrostyAura", "HellmouthLash", "GreaterMagicSiegeEngine", "Malfunction", "MiasmaticForm",
    "MirrorTransport", "MnemonicEnhancer", "MonsterousPhysiqueII", "ObsidianFlow", "MassReducePerson", "ResilientReservoir","RidetheWaves","ScorchingAshForm","StoneShape", "ShadowyHaven","SymbolofSlowing","TailCurrent","Tailwind","TelekineticManeuver","ThanatoticFury", "VerminShapeI"];
Trans5 = ["AnimalGrowth", "BalefulPolymorph", "CondenseEther", "BeastShapeIII", "Echolocation", "ElementalBodyII", "EnergySiegeShot", "Fabricate","FickleWinds","HalfBloodExtraction","MonsterousPhysiqueIII","OozeFormI","OverlandFlight","ParchmentSwarm","Passwall","PlanarAdaptation","PlantFormI","Polymorph","RapidRepair","SawtoothTerrain","ShadowPlaneAdaptation","ShapechangersGift","MassSun'sDisdain","Telekinesis","TransmuteRocktoMud","TransmuteMudtoRock","TreasureStitching","UndeadAnatomyII","VerminShapeII","WindBlades", "Waft"];
Trans6 = ["AgeResistance", "MassBear'sEndurance", "BeastShapeIV", "MassBull'sStrength", "MassCat'sGrace", "ControlWater", "DelectableFlesh", "Disintigrate","MassEagle'sSplendor","ElementalBodyIII","EnemyHammer","GreaterEnergySiegeShot","FeyFormII","FleshtoStone","FluidForm","FormoftheDragonI","MassFox'sCunning","Mage'sLubrucation","MonsterousPhysiqueIV", "MoveEarth","OozeFormII","MassOwl'sWisdom","PlantShapeII", "SonicForm", "StonetoFlesh","TarPool","Transformation", "UndeadAnatomyIII"];
Trans7 = ["GreaterAgeResistance", "ArcaneCannon", "AwakenConstuct", "ControlConstruct","ControlWeather","ElementalBodyIV","EtherialJaunt","FeyFormIII","Firebrand", "MassFly","FormoftheDragonII","GiantFormI","IceBody","MagicalBeastShape","OozeFormIII","MassPlanarAdaptation","PlantShapeIII","GreaterPolymorph","ResonatingWord","ReverseGravity","ShadowBody","GreaterShapechanger'sGift","Statue","SubmergeShip","Terrefom"];
Trans8 = ["FormoftheDragonIII", "FrightfulAspect", "GiantFormII", "IronBody","PolymorphAnyObject","TemporalStasis","UndeadAnatomyIV","WanderingWeather"];
Trans9 = ["Etherealness", "FeyFormIV", "RuneofJundelay", "FieryBody", "Salvage", "Shapechange","TimeStop","TransmuteBloodtoAcid","WorldWave"];

Con0 = ["DetectMagic", "DetectPoison", "ReadMagic"];
Con1 = ["AnticipatePeril", "ComprehendLanguages", "DetectCharm", "DetectSecretDoor", "DetectUndead", "DiscernNextofKin", "HeightenedAwareness", "Identify", "Mindlink", "RuneTrace", "SeeAlignment", "TrueStrike"];
Con2 = ["AnticipateThoughts", "BloodTrascription", "CommuneWithBirds", "CreateTreasureMap", "DetectThoughts", "ElementalSpeech", "LocateObject", "PsychicReading", "SeeInvisibility", "ShadowSight", "ShareLanguage", "ShareMemory", "StormSight", "TrackShip"];
Con3 = ["ArcaneSight", "AuraSight", "BloodBiography", "Clairvoyance", "CompellingFate", "DetectMindscape", "Harrowing", "IrriseniMirrorSight", "LocateWeakness", "PierceDisguise", "SeedSpies", "SeekThoughts", "CommunalShareLanguage", "Tongues", "UnspokenName"];
Con4 = ["ArcaneEye", "DetectScrying", "FlickeringFate", "Hypercognition", "LocateCreature", "NamedBullet", "Scrying", "ShareSenses", "SymbolofRevelation", "CommunalTongues"];
Con5 = ["ContactOtherPlane", "MaskFromDivination", "MindProbe", "PryingEyes", "SymbolofScrying", "TelepathicBond", "ThoughtSense", "Truespeak"];
Con6 = ["AnalyzeDweomer", "BattlemindLink", "DreamScan", "LegendLore", "GreaterNamedBullet", "SarzariShadowMemory", "Telepathy", "Trueseeing"];
Con7 = ["GreaterArcaneSight", "Retrocognition", "GreaterScrying", "Vision"];
Con8 = ["DiscernLocation", "MomentofPrecience", "PredictionofFailure", "GreaterPryingEyes"];
Con9 = ["", "", "", "", ""];

function genPot(button) {
    let potion = "A potion/scroll of ";
}

function genWeapon(button) {
    let limit = button.parentNode.childNodes[11].valueAsNumber;
    //console.log(button.parentNode.childNodes);
    let plus = Math.ceil(Math.random() * 5);
    let fullWeapon = "";
    //set plus mod
    if (plus > limit) {
        plus = limit;
        limit = 0;
    } else {
        limit -= plus;
    }
    console.log(limit);
    console.log(plus);
    //while we still have +'s to spend, add magic properties
    while (limit > 0) {
        let lvl = 0;
        if (limit > wArray.length) {
            lvl = Math.floor(Math.random()*wArray.length);
        } else {
            lvl = Math.floor(Math.random()*limit);
        }
        let mod = Math.floor(Math.random() * wArray[lvl].length);
        fullWeapon += wArray[lvl][mod] + " ";
        limit -= (lvl+1);
    }
    console.log(fullWeapon);
    //select weapon
    let selection = button.parentNode.childNodes[5].value;
    console.log(button.parentNode.childNodes[5]);
    let weaponType = "";
    switch (selection) {
        case "Sword":
            weaponType += swords[Math.floor(Math.random() * swords.length)];
            break;
        case "Dagger":
            weaponType += daggers[Math.floor(Math.random() * daggers.length)];
            break;
        case "Polearm/Spear":
            weaponType += poles[Math.floor(Math.random() * poles.length)];
            break;
        case "Axe":
            weaponType += axes[Math.floor(Math.random() * axes.length)];
            break;
        case "Hammer/Flail":
            weaponType += hammers[Math.floor(Math.random() * hammers.length)];
            break;
        case "Bow/Ranged":
            weaponType += bows[Math.floor(Math.random() * bows.length)];
            break;
        case "Gun":
            weaponType += guns[Math.floor(Math.random() * guns.length)];
            break;
        case "Exotic":
            weaponType += exotics[Math.floor(Math.random() * exotics.length)];
            break;
        case "Close/Fist":
            weaponType += close[Math.floor(Math.random() * close.length)];
            break;
        case "Monk/Ninja":
            weaponType += monks[Math.floor(Math.random() * monks.length)];
            break;
        default:
            //random path
            let allWeap = [swords, daggers, poles, axes, hammers, bows, guns, exotics, close, monks];
            let cat = Math.floor(Math.random() * allWeap.length);
            let type = Math.floor(Math.random() * allWeap[cat].length);
            weaponType += allWeap[cat][type];
            console.log(selection);
    }
    //select material
    let material = mats[Math.floor(Math.random() * mats.length)];
    if (plus == 0) {
        fullWeapon += "Masterwork " + material + " " + weaponType;
    } else {
        fullWeapon += material + " " + weaponType + " +" + plus;
    }
   
    button.parentNode.parentNode.childNodes[11].innerHTML = button.parentNode.parentNode.childNodes[11].innerHTML + "<il>" + fullWeapon + "</il><br>";
}

function genArmor(button) {
    let limit = button.parentNode.childNodes[11].valueAsNumber;
    let plus = 0;
    let fullArmor= "";
    if (limit > 0) {
        plus = Math.ceil(Math.random() * limit);
    }
    if (plus > 5) {
        plus = 5;
    }
    limit -= plus;
    let armMods = [a1,a2,a3,a4,a5];
    let shieldMods = [s1, s2, s5];
    let type = button.parentNode.childNodes[5].value;
    let gear = "";
    let shieldSelect = false;
    switch (type) {
        case "Light":
            gear += light[Math.floor(Math.random() * light.length)];
            break;
        case "Medium":
            gear += medium[Math.floor(Math.random() * medium.length)];
            break;
        case "Heavy":
            gear += heavy[Math.floor(Math.random() * heavy.length)];
            break;
        case "Shield":
            gear += shield[Math.floor(Math.random() * shield.length)];
            shieldSelect = true;
            break;
        default:
            let all = [light, medium, heavy, shield];
            let select = Math.floor(Math.random() * all.length);
            gear += all[select][Math.floor(Math.random * all[select].length)];
            console.log(all);
            if (select == 3) {
                shieldSelect = true;
            }
    }
    
    while (limit > 0) {
        let lvl = 0;
        if (limit <= 5) {
           lvl = Math.floor(Math.random() * limit);
        } else {
            lvl = Math.floor(Math.random()*5);
        }

        if (shieldSelect && (lvl == 0 || lvl == 1 || lvl == 4)) {
            //shield mods in play
            let coinFlip = Math.floor(Math.random()*2);
            if (lvl == 0) {
                if (coinFlip == 1) {
                    //tails = shield
                    fullArmor += s1[Math.floor(Math.random() * s1.length)] + " ";
                } else {
                    //heads = armor
                    fullArmor += a1[Math.floor(Math.random() * a1.length)] + " ";
                }
            }
            if (lvl == 1) {
                if (coinFlip == 1) {
                    //tails = shield
                    fullArmor += s2[Math.floor(Math.random() * s2.length)] + " ";
                } else {
                    //heads = armor
                    fullArmor += a2[Math.floor(Math.random() * a2.length)] + " ";
                }
            }
            if (lvl == 4) {
                if (coinFlip == 1) {
                    //tails = shield
                    fullArmor += s5[Math.floor(Math.random() * s5.length)] + " ";
                } else {
                    //heads = armor
                    fullArmor += a5[Math.floor(Math.random() * a5.length)] + " ";
                }
                
            }
            limit -= (lvl + 1);
        } else {
            //just armor
            fullArmor += armMods[lvl][Math.floor(Math.random() * armMods[lvl].length)] + " ";
            limit -= (lvl + 1);
        }
    }
    if (plus == 0) {
        fullArmor += " Masterwork";
    }
    fullArmor += " " + gear;
    if (plus != 0) {
        fullArmor += "+" + plus;
    }
    button.parentNode.parentNode.childNodes[11].innerHTML = button.parentNode.parentNode.childNodes[11].innerHTML + "<il>" + fullArmor + "</il><br>";
}

function roll(button, size) {
    let sum = 0;
    let count = button.parentNode.childNodes[5].valueAsNumber;
    //console.log(button.parentNode);
    //console.log(button.parentNode.childNodes);
    //console.log(count);
    if (count <= 0) {
        count = 1;
    }
    for (let i = 0; i < count; i++) {
        sum += Math.ceil(Math.random() * size);
    }
    //console.log(sum);
    console.log(button.parentNode.parentNode.childNodes);
    //return sum;
    button.parentNode.parentNode.childNodes[11].innerHTML = button.parentNode.parentNode.childNodes[11].innerHTML + "<il>"+ sum + "</il><br>";
}

//function clearDice(button) {
    //let out = button.parentNode.childNodes[23];
   // out.innerHTML = "";
//}

function clearLoot(button) {
    let out = button.parentNode.childNodes[11];
    out.innerHTML = "";
}
