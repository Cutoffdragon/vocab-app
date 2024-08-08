import { Injectable } from '@angular/core';
import { VocabularyDefinition } from './vocab-definition';

@Injectable({
    providedIn: 'root'
})

export class VocabularyList {
    protected vocabularyDefinition: VocabularyDefinition[] = [
        {
            "id": 1,
            "word": "Rapacity",
            "definition": "Aggressive greed."
        },
        {
            "id": 2,
            "word": "Diffident",
            "definition": "Modest or shy because of a lack of confidence."
        },
        {
            "id": 3,
            "word": "Supposition",
            "definition": "An uncertain belief."
        },
        {
            "id": 4,
            "word": "Vitiate",
            "definition": "Spoil or impair the quality or efficiency of."
        },
        {
            "id": 5,
            "word": "Ecumenical",
            "definition": "Representing a number of christian branches."
        },
        {
            "id": 6,
            "word": "Demure",
            "definition": "In a quiet or serious way that does not attract attention."
        },
        {
            "id": 7,
            "word": "Corroborate",
            "definition": "Confirm or give support to a theory or statement."
        },
        {
            "id": 8,
            "word": "Brusquely",
            "definition": "Using very few words as if sounding rude."
        },
        {
            "id": 9,
            "word": "Venial",
            "definition": "Denoting a sin that does not deprive the soul of grace."
        },
        {
            "id": 10,
            "word": "Extricate",
            "definition": "To free from a constraint or difficulty."
        },
        {
            "id": 11,
            "word": "Depredation",
            "definition": "An act of attacking or plundering."
        },
        {
            "id": 12,
            "word": "Penultimate",
            "definition": "Second to last in a series."
        },
        {
            "id": 13,
            "word": "Pernicious",
            "definition": "Having a harmful effect in a gradual or subtle way."
        },
        {
            "id": 14,
            "word": "Catharsis",
            "definition": "The process of releasing and therefore providing relief from strong or repressed emotions."
        },
        {
            "id": 15,
            "word": "Edifice",
            "definition": "A complex system of beliefs."
        },
        {
            "id": 16,
            "word": "Sycophant",
            "definition": "A person who acts obsequiously toward someone important in order to gain advantage."
        },
        {
            "id": 17,
            "word": "Equanimity",
            "definition": "Mental calmness, composure, and evenness of temper, especially in a difficult situation."
        },
        {
            "id": 18,
            "word": "Unconscionable",
            "definition": "Not right or reasonable."
        },
        {
            "id": 19,
            "word": "Miscellany",
            "definition": "A group or collection of different items."
        },
        {
            "id": 20,
            "word": "Effete",
            "definition": "Affected and overly refined."
        },
        {
            "id": 21,
            "word": "Libidinous",
            "definition": "Showing excessive sexual drive; lustful."
        },
        {
            "id": 22,
            "word": "Raucous",
            "definition": "Making or constituting a disturbingly rough or harsh noise."
        },
        {
            "id": 23,
            "word": "Lascivious",
            "definition": "Feeling and/or revealing an overt and often offensive sexual desire."
        },
        {
            "id": 24,
            "word": "Flagitious",
            "definition": "Criminal, villainous."
        },
        {
            "id": 25,
            "word": "Lament",
            "definition": "Passionate expression of grief or sorrow."
        },
        {
            "id": 26,
            "word": "Sardonic",
            "definition": "Grimly mocking or cynical."
        },
        {
            "id": 27,
            "word": "Rapt",
            "definition": "Completely fascinated by what one is seeing or hearing."
        },
        {
            "id": 28,
            "word": "Austere",
            "definition": "Severe or strict in manner, attitude, or appearance."
        },
        {
            "id": 29,
            "word": "Dalliance",
            "definition": "A causal romantic or sexual relationship."
        },
        {
            "id": 30,
            "word": "Obsequious",
            "definition": "Obedient or attentive to an excessive or servile degree."
        },
        {
            "id": 31,
            "word": "Admonish",
            "definition": "Warn or reprimand someone firmly."
        },
        {
            "id": 32,
            "word": "Rancor",
            "definition": "Bitterness or resentfulness, especially when long-standing."
        },
        {
            "id": 33,
            "word": "Florid",
            "definition": "Having a red or flushed complexion."
        },
        {
            "id": 34,
            "word": "Vertiginous",
            "definition": "Causing vertigo."
        },
        {
            "id": 35,
            "word": "Interminable",
            "definition": "Endless."
        },
        {
            "id": 36,
            "word": "Hyperbole",
            "definition": "Exaggerated claims or statements not meant to be taken literally."
        },
        {
            "id": 37,
            "word": "Bellicose",
            "definition": "Demonstrating aggression and willingness to fight."
        },
        {
            "id": 38,
            "word": "Accession",
            "definition": "The attainment or acquisition of a position or ranking of power."
        },
        {
            "id": 39,
            "word": "Stolidity",
            "definition": "Remaining the same and not changing."
        },
        {
            "id": 40,
            "word": "Turgid",
            "definition": "Swollen and distended or congested."
        },
        {
            "id": 41,
            "word": "Saturnine",
            "definition": "(of a person or their manner) slow or gloomy."
        },
        {
            "id": 42,
            "word": "Shrewd",
            "definition": "Having or showing sharp powers of judgement; astute."
        },
        {
            "id": 43,
            "word": "Impetus",
            "definition": "The force or energy with which a body moves."
        },
        {
            "id": 44,
            "word": "Vehemence",
            "definition": "The display of strong feeling; passion."
        },
        {
            "id": 45,
            "word": "Quixotic",
            "definition": "Exceedingly idealistic; unrealistic and impractical."
        },
        {
            "id": 46,
            "word": "Abrogate",
            "definition": "Repeal or do away with."
        },
        {
            "id": 47,
            "word": "Cabal",
            "definition": "A secret political clique or faction."
        },
        {
            "id": 48,
            "word": "Ubiquitous",
            "definition": "Present, appearing, or found everywhere."
        },
        {
            "id": 49,
            "word": "Recriminations",
            "definition": "An accusation in response to one from someone else."
        },
        {
            "id": 50,
            "word": "Ovoid",
            "definition": "Egg shaped."
        },
        {
            "id": 51,
            "word": "Verities",
            "definition": "A true principle or belief, especially one of fundamental importance."
        },
        {
            "id": 52,
            "word": "Grandiloquent",
            "definition": "Pompous or extravagant in language, style, or manner, especially in a way that is intended to impress."
        },
        {
            "id": 53,
            "word": "Prodigality",
            "definition": "The act of spending too much money or expending too many resources."
        },
        {
            "id": 54,
            "word": "Obstinate",
            "definition": "Stubbornness or refusal to change one\u2019s opinion or course of action, despite efforts made to convince one to do so."
        },
        {
            "id": 55,
            "word": "Unremitting",
            "definition": "Never relaxing or slackening; incessant."
        },
        {
            "id": 56,
            "word": "Incessant",
            "definition": "(of something unpleasant) continuing without pause or interruption."
        },
        {
            "id": 57,
            "word": "Inert",
            "definition": "Lacking the ability or strength to move."
        },
        {
            "id": 58,
            "word": "Furor",
            "definition": "An outbreak of public anger or excitement."
        },
        {
            "id": 59,
            "word": "Amorphous",
            "definition": "Without a clearly defined shape or form."
        },
        {
            "id": 60,
            "word": "Consternation",
            "definition": "Feelings of anxiety or dismay, especially at something unexpected."
        },
        {
            "id": 61,
            "word": "Cognoscenti",
            "definition": "People who are considered to be well informed about a particular subject."
        },
        {
            "id": 62,
            "word": "Discomfit",
            "definition": "Make someone feel uneasy or embarrassed."
        },
        {
            "id": 63,
            "word": "Tremulous",
            "definition": "Shaking or quivering slightly."
        },
        {
            "id": 64,
            "word": "Enmity",
            "definition": "The state of opposing or being hostile towards someone or something."
        },
        {
            "id": 65,
            "word": "Relegated",
            "definition": "Consign or dismiss to an inferior rank or position."
        },
        {
            "id": 66,
            "word": "Transitory",
            "definition": "Not permanent."
        },
        {
            "id": 67,
            "word": "Restitution",
            "definition": "The restoration of something lost or stolen to its proper owner."
        },
        {
            "id": 68,
            "word": "Beseech",
            "definition": "Urgently ask or implore someone to do something."
        },
        {
            "id": 69,
            "word": "Jubilation",
            "definition": "Great happiness or triumph."
        },
        {
            "id": 70,
            "word": "Coy",
            "definition": "Making a pretense of shyness or modesty that was intended to be alluring."
        },
        {
            "id": 71,
            "word": "Ersatz",
            "definition": "Something made or used as a substitute, typically an inferior one."
        },
        {
            "id": 72,
            "word": "Tacit",
            "definition": "Understood or implied without being stated."
        },
        {
            "id": 73,
            "word": "Premonition",
            "definition": "A strong feeling that something unpleasant is about to happen."
        },
        {
            "id": 74,
            "word": "Vamp",
            "definition": "Repeat a simple lyric or song."
        },
        {
            "id": 75,
            "word": "Acrimony",
            "definition": "Bitterness or ill feeling."
        },
        {
            "id": 76,
            "word": "Huckster",
            "definition": "Someone who sells small items."
        },
        {
            "id": 77,
            "word": "Gestalt",
            "definition": "An organized whole that is perceived as more than the sums of its parts."
        },
        {
            "id": 78,
            "word": "Exasperation",
            "definition": "A feeling of intense annoyance or bitterness."
        },
        {
            "id": 79,
            "word": "Querulous",
            "definition": "Complaining in a petulant or whining matter."
        },
        {
            "id": 80,
            "word": "Uncanny",
            "definition": "Strange or mysterious, especially in an unsettling way."
        },
        {
            "id": 81,
            "word": "Stupor",
            "definition": "A state of near unconsciousness or insensibility."
        },
        {
            "id": 82,
            "word": "Prudent",
            "definition": "Acting with or showing care or thought for the future."
        },
        {
            "id": 83,
            "word": "Countenance",
            "definition": "A persons face or facial expression."
        },
        {
            "id": 84,
            "word": "Pariah",
            "definition": "An outcast."
        },
        {
            "id": 85,
            "word": "Bray",
            "definition": "Speak or laugh loudly and harshly."
        },
        {
            "id": 86,
            "word": "Cogitation",
            "definition": "The act of thinking deeply about something; contemplation."
        },
        {
            "id": 87,
            "word": "Inanities",
            "definition": "A nonsensical remark or action."
        },
        {
            "id": 88,
            "word": "Equable",
            "definition": "Of a person not easily disturbed or angered; calm and even tempered."
        },
        {
            "id": 89,
            "word": "Reproach",
            "definition": "To address someone in such a way as to express disapproval or disagreement."
        },
        {
            "id": 90,
            "word": "Gregarious",
            "definition": "Fond of company; sociable."
        },
        {
            "id": 91,
            "word": "Glean",
            "definition": "Extract information from various sources."
        },
        {
            "id": 92,
            "word": "Commiserate",
            "definition": "Express or feel pity towards; sympathize."
        },
        {
            "id": 93,
            "word": "Rueful",
            "definition": "Expressing sorrow or regret, especially when in a slightly humorous way."
        },
        {
            "id": 94,
            "word": "Innocuous",
            "definition": "Not harmful or offensive."
        },
        {
            "id": 95,
            "word": "Strident",
            "definition": "Loud and harsh; grating."
        },
        {
            "id": 96,
            "word": "Fervor",
            "definition": "Intense and passionate feeling."
        },
        {
            "id": 97,
            "word": "Stridency",
            "definition": "Having the quality of a high pitched sound."
        },
        {
            "id": 98,
            "word": "Remonstrate",
            "definition": "Make a forcefully reproachful protest."
        },
        {
            "id": 99,
            "word": "Immaculate",
            "definition": "Perfectly clean, neat, or tidy."
        },
        {
            "id": 100,
            "word": "Puling",
            "definition": "Crying querulously or weakly."
        },
        {
            "id": 101,
            "word": "Haggard",
            "definition": "Looking exhausted and unwell,."
        },
        {
            "id": 102,
            "word": "Vitriol",
            "definition": "Cruel and bitter criticism."
        },
        {
            "id": 103,
            "word": "Juncture",
            "definition": "A particular point in an event or time."
        },
        {
            "id": 104,
            "word": "Mollify",
            "definition": "Appease the anger or anxiety of someone."
        },
        {
            "id": 105,
            "word": "Ostensibly",
            "definition": "Apparently or purportedly, but perhaps not actually."
        },
        {
            "id": 106,
            "word": "Gaiety",
            "definition": "The state or quality of being lighthearted or cheerful."
        },
        {
            "id": 107,
            "word": "Palpate",
            "definition": "Examine a part of the body by touch, especially for medical purposes."
        },
        {
            "id": 108,
            "word": "Inexorable",
            "definition": "Impossible to stop or prevent."
        },
        {
            "id": 109,
            "word": "Nuance",
            "definition": "A subtle difference in shade of meaning, expression, or sound."
        },
        {
            "id": 110,
            "word": "Indolent",
            "definition": "Wanting to avoid activity or exertion; lazy."
        },
        {
            "id": 111,
            "word": "Cursory",
            "definition": "Hasty and therefore not thorough or detailed."
        },
        {
            "id": 112,
            "word": "Solvent",
            "definition": "Having assets in excess of liabilities; able to pay one\u2019s debts."
        },
        {
            "id": 113,
            "word": "Exasperated",
            "definition": "Intensely irritated and frustrated."
        },
        {
            "id": 114,
            "word": "Stertorous",
            "definition": "(of breathing) noisy and labored."
        },
        {
            "id": 115,
            "word": "Palpable",
            "definition": "So intense as to seem almost tangible."
        },
        {
            "id": 116,
            "word": "Postulate",
            "definition": "Suggest or assume the existence, fact, or truth of something as a basis for reasoning."
        },
        {
            "id": 117,
            "word": "Burlesque",
            "definition": "An absurd or comically exaggerated imitation of something."
        },
        {
            "id": 118,
            "word": "Paltry",
            "definition": "(of an amount) small or meager."
        },
        {
            "id": 119,
            "word": "Apoplexy",
            "definition": "Unconsciousness or incapacity resulting from a cerebral hemorrhage or stroke."
        },
        {
            "id": 120,
            "word": "Benign",
            "definition": "Gentle and kindly."
        },
        {
            "id": 121,
            "word": "Bereave",
            "definition": "To be deprived of a loved one through a profound absence, especially that loved ones death."
        },
        {
            "id": 122,
            "word": "Coquettish",
            "definition": "Behaving in such a way as to suggest a playful sexual attraction."
        },
        {
            "id": 123,
            "word": "Clandestine",
            "definition": "Kept secret or done secretly, especially because illicit."
        },
        {
            "id": 124,
            "word": "Rugose",
            "definition": "Wrinkled, corrugated."
        },
        {
            "id": 125,
            "word": "Reprisal",
            "definition": "An act of retaliation."
        },
        {
            "id": 126,
            "word": "Enjoin",
            "definition": "Instruct or urge (someone) to do something."
        },
        {
            "id": 127,
            "word": "Abase",
            "definition": "Behave in a way that belittles or degrades someone."
        },
        {
            "id": 128,
            "word": "Sedition",
            "definition": "Conduct or speech inciting people to rebel against the authority of a state or monarch."
        },
        {
            "id": 129,
            "word": "Sodden",
            "definition": "Saturated with liquid, especially water; soaked through."
        },
        {
            "id": 130,
            "word": "Promulgate",
            "definition": "Promote or make widely known ( an idea or cause)."
        },
        {
            "id": 131,
            "word": "Sonorous",
            "definition": "(of a persons voice or other sound) imposingly deep and full."
        },
        {
            "id": 132,
            "word": "Redolent",
            "definition": "Strongly reminiscent or suggestive of; fragrant, sweet smelling."
        },
        {
            "id": 133,
            "word": "Deprecatory",
            "definition": "Expressing disapproval; disapproving."
        },
        {
            "id": 134,
            "word": "Bemused",
            "definition": "Puzzled, confused, or bewildered."
        },
        {
            "id": 135,
            "word": "Pontification",
            "definition": "To express opinions or judgements in a dogmatic way."
        },
        {
            "id": 136,
            "word": "Indigent",
            "definition": "Poor, needy."
        },
        {
            "id": 137,
            "word": "Complacent",
            "definition": "Showing smug or uncritical satisfaction with one\u2019s self or one\u2019s achievements."
        },
        {
            "id": 138,
            "word": "Avidity",
            "definition": "Extreme eagerness or enthusiasm."
        },
        {
            "id": 139,
            "word": "Somnolent",
            "definition": "Sleepy, drowsy."
        },
        {
            "id": 140,
            "word": "Prim",
            "definition": "Stiffly formal and respectable; feeling or showing disapproval of anything regarded as improper."
        },
        {
            "id": 141,
            "word": "Susurration",
            "definition": "Whispering, murmuring, or rustling."
        },
        {
            "id": 142,
            "word": "Furtive",
            "definition": "Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble; secretive."
        },
        {
            "id": 143,
            "word": "Portent",
            "definition": "A sign or warning that something, especially something momentous or calamitous, is likely to happen."
        },
        {
            "id": 144,
            "word": "Fusillade",
            "definition": "A series of shots fired or missiles thrown all at the same time or in quick succession."
        },
        {
            "id": 145,
            "word": "Exaltation",
            "definition": "A feeling or state of extreme happiness."
        },
        {
            "id": 146,
            "word": "Diaphanous",
            "definition": "(especially of fabric) light, delicate, and translucent."
        },
        {
            "id": 147,
            "word": "Gravid",
            "definition": "Full of meaning or a specified quality."
        },
        {
            "id": 148,
            "word": "Consternation",
            "definition": "Feelings of anxiety or dismay, typically at something unexpected."
        },
        {
            "id": 149,
            "word": "Supplicate",
            "definition": "Ask or beg for something earnestly or humbly."
        },
        {
            "id": 150,
            "word": "Assuage",
            "definition": "Make (an unpleasant feeling) less intense."
        },
        {
            "id": 151,
            "word": "Jocular",
            "definition": "Fond of or characterized by joking; humorous or playful."
        },
        {
            "id": 152,
            "word": "Jaunty",
            "definition": "Having or expressing a lively, cheerful , and self confident manner."
        },
        {
            "id": 153,
            "word": "Euphemism",
            "definition": "An innocuous word or expression used in place of one that is deemed offensive or suggests something unpleasant."
        },
        {
            "id": 154,
            "word": "Adroitness",
            "definition": "Cleverness or skill."
        },
        {
            "id": 155,
            "word": "Tact",
            "definition": "Adroitness and sensitivity in dealing with others or with difficult issues."
        },
        {
            "id": 156,
            "word": "Incipient",
            "definition": "An initial stage; beginning to happen or develop."
        },
        {
            "id": 157,
            "word": "Inapt",
            "definition": "Not suitable or appropriate in the circumstances."
        },
        {
            "id": 158,
            "word": "Profusion",
            "definition": "An abundance or large quantity of something."
        },
        {
            "id": 159,
            "word": "Malaise",
            "definition": "A general feeling of discomfort, illness, or uneasiness whose exact cause is difficult to identify."
        },
        {
            "id": 160,
            "word": "Faux pas",
            "definition": "An embarrassing or tactless act or remark in a social situation."
        },
        {
            "id": 161,
            "word": "Prerogative",
            "definition": "A right or privilege exclusive to a particular individual or class."
        },
        {
            "id": 162,
            "word": "Lambent",
            "definition": "(of light or fire) glowing, gleaming, or flickering with a soft radiance."
        },
        {
            "id": 163,
            "word": "Raffish",
            "definition": "Unconventional and slightly disreputable, especially in an attractive manner."
        },
        {
            "id": 164,
            "word": "Truculent",
            "definition": "Eager or quick to argue or fight; aggressively defiant."
        },
        {
            "id": 165,
            "word": "Solicitude",
            "definition": "Care or concern for someone or something."
        },
        {
            "id": 166,
            "word": "Compunction",
            "definition": "A feeling of guilt or moral scruple that prevents or follows the doing of something bad."
        },
        {
            "id": 167,
            "word": "Nonce",
            "definition": "(of a word or expression) coined for or used on one occasion."
        },
        {
            "id": 168,
            "word": "Enormity",
            "definition": "The great or extreme scale, seriousness, or extent of something perceived as bad or morally wrong."
        },
        {
            "id": 169,
            "word": "Declamatory",
            "definition": "Vehement or impassioned in expression."
        },
        {
            "id": 170,
            "word": "Baleful",
            "definition": "Threatening harm, menacing."
        },
        {
            "id": 171,
            "word": "Cloying",
            "definition": "Excessively sweet, rich, or sentimental, especially to a disgusting or sickening degree."
        },
        {
            "id": 172,
            "word": "Undulate",
            "definition": "Move or go with a smooth up and down motion."
        },
        {
            "id": 173,
            "word": "Estivate",
            "definition": "(of an animal, particularly an insect, fish, or amphibian) spend a hot or dry period in a prolonged state of torpor or dormancy."
        },
        {
            "id": 174,
            "word": "Subliminal",
            "definition": "(of a stimulus or a mental process) below the threshold of sensation or consciousness; perceived by or affecting someone\u2019s mind without their being aware of it."
        },
        {
            "id": 175,
            "word": "Corollary",
            "definition": "A proposition that follows from ( and is often appended to) one already proven."
        },
        {
            "id": 176,
            "word": "Fecund",
            "definition": "Producing or capable of producing an abundance of offspring or new growth; fertile."
        },
        {
            "id": 177,
            "word": "Inquest",
            "definition": "A judicial inquiry to ascertain the facts relating to an incident, such as death."
        },
        {
            "id": 178,
            "word": "Acumen",
            "definition": "The ability to make good judgements and quick decisions, typically in a particular domain."
        },
        {
            "id": 179,
            "word": "Inscrutable",
            "definition": "Impossible to understand or interpret."
        },
        {
            "id": 180,
            "word": "Capricious",
            "definition": "Given to sudden and unaccountable changes of mood or behavior."
        },
        {
            "id": 181,
            "word": "Exultation",
            "definition": "A feeling of triumphant elation or jubilation; rejoicing."
        },
        {
            "id": 182,
            "word": "Reticent",
            "definition": "Not revealing ones thoughts or feelings readily."
        },
        {
            "id": 183,
            "word": "Hellacious",
            "definition": "Very great, bad, or overwhelming."
        },
        {
            "id": 184,
            "word": "Suppurate",
            "definition": "Undergo the formation of pus; fester."
        },
        {
            "id": 185,
            "word": "Segue",
            "definition": "(in music and film) move without interruption from one piece of music or scene to another."
        },
        {
            "id": 186,
            "word": "Convex",
            "definition": "Having an outline or surface curved like the exterior of a circle or sphere."
        },
        {
            "id": 187,
            "word": "Rapturous",
            "definition": "Characterized by feeling, or expressing great pleasure or enthusiasm."
        },
        {
            "id": 188,
            "word": "Morose",
            "definition": "Sullen and i\u2019ll tempered."
        },
        {
            "id": 189,
            "word": "Dignitary",
            "definition": "A person considered to be important because of high rank or office."
        },
        {
            "id": 190,
            "word": "Deference",
            "definition": "Handle submission and respect."
        },
        {
            "id": 191,
            "word": "Lithely",
            "definition": "In a way that is typical of someone who is young, healthy, attractive, and able to move and bend smoothly."
        },
        {
            "id": 192,
            "word": "Pert",
            "definition": "Attractively lively or cheeky."
        },
        {
            "id": 193,
            "word": "Inculcate",
            "definition": "Instill(an attitude, idea, or habit) by persistent instruction."
        },
        {
            "id": 194,
            "word": "Cozen",
            "definition": "Trick or deceive."
        },
        {
            "id": 195,
            "word": "Canny",
            "definition": "Having or showing shrewdness and good judgement, especially in money or business matters."
        },
        {
            "id": 196,
            "word": "Wile",
            "definition": "Devious or cunning stratagems employed on manipulating or persuading someone to do what one wants."
        },
        {
            "id": 197,
            "word": "Perfunctory",
            "definition": "(of an action or gesture) carried out with a minimum of effort or reflection."
        },
        {
            "id": 198,
            "word": "Feckless",
            "definition": "Lacking initiative or strength of character; irresponsible."
        },
        {
            "id": 199,
            "word": "Glib",
            "definition": "(of words or the person speaking them) fluent and voluble but insincere and shallow."
        },
        {
            "id": 200,
            "word": "Beatific",
            "definition": "Blissfully happy."
        },
        {
            "id": 201,
            "word": "Adamant",
            "definition": "Refusing to be persuaded or to change one\u2019s mind; hard set."
        },
        {
            "id": 202,
            "word": "Precarious",
            "definition": "Not securely held or in position; dangerously likely to fall or collapse."
        },
        {
            "id": 203,
            "word": "Desultory",
            "definition": "Lacking a plan, purpose, or enthusiasm."
        },
        {
            "id": 204,
            "word": "Atavistic",
            "definition": "Relating to or characterized by reversion to something ancient or ancestral."
        },
        {
            "id": 205,
            "word": "Diaphanous",
            "definition": "(especially of fabric) light, delicate, and translucent."
        },
        {
            "id": 206,
            "word": "Malefic",
            "definition": "Causing or capable of causing harm or destruction, especially by supernatural means."
        },
        {
            "id": 207,
            "word": "Intaglio",
            "definition": "A design incised or engraved into a material."
        },
        {
            "id": 208,
            "word": "Incise",
            "definition": "Mark or decorate with a cut or a series of cuts."
        },
        {
            "id": 209,
            "word": "Aphorism",
            "definition": "A pithy observation that contains a general truth."
        },
        {
            "id": 210,
            "word": "Pithy",
            "definition": "(of language) concise or forcefully expressive."
        },
        {
            "id": 211,
            "word": "Apotheosis",
            "definition": "The highest point in the development of something; culmination or climax."
        },
        {
            "id": 212,
            "word": "Convalescent",
            "definition": "(of a person) recovering from an illness or operation."
        },
        {
            "id": 213,
            "word": "Inscrutable",
            "definition": "Impossible to understand or interpret."
        },
        {
            "id": 214,
            "word": "Cavorting",
            "definition": "Jump or dance around excitedly."
        },
        {
            "id": 215,
            "word": "Rudimentary",
            "definition": "Involving or limited to basic principles."
        },
        {
            "id": 216,
            "word": "Divest",
            "definition": "Deprive (someone) of power, rights, or possessions."
        },
        {
            "id": 217,
            "word": "Prevaricate",
            "definition": "Speak or act in an evasive way."
        },
        {
            "id": 218,
            "word": "Truculent",
            "definition": "Eager or quick to argue or fight; aggressively defiant."
        },
        {
            "id": 219,
            "word": "Proselytize",
            "definition": "Convert (or attempt to convert) someone from one religion to another."
        },
        {
            "id": 220,
            "word": "Errant",
            "definition": "Erring or straying from the proper course or standards."
        },
        {
            "id": 221,
            "word": "Interlocutor",
            "definition": "A person who takes part in a dialogue or conversation."
        },
        {
            "id": 222,
            "word": "Anecdote",
            "definition": "A short amusing or interesting story about a real incident or person."
        },
        {
            "id": 223,
            "word": "Extraneous",
            "definition": "Irrelevant or unrelated to the subject being dealt with."
        },
        {
            "id": 224,
            "word": "Incipient",
            "definition": "An initial stage; beginning to happen or develop."
        },
        {
            "id": 225,
            "word": "Augury",
            "definition": "A sign of what will happen in the future; an omen."
        },
        {
            "id": 226,
            "word": "Fortuitous",
            "definition": "Happening by accident or chance rather than design."
        },
        {
            "id": 227,
            "word": "Docent",
            "definition": "(in certain universities and colleges) a member of the teaching staff immediately below professional rank ; a person who acts as a guide, typically on a voluntary basis, in a museum, art gallery, or zoo."
        },
        {
            "id": 228,
            "word": "Venal",
            "definition": "Showing or motivated by susceptibility to bribery."
        },
        {
            "id": 229,
            "word": "Gossamer",
            "definition": "A fine, filmy substance weaved by spiders especially seen in autumn."
        },
        {
            "id": 230,
            "word": "Arduous",
            "definition": "Involving or requiring strenuous effort; difficult and tiring."
        },
        {
            "id": 231,
            "word": "Embossed",
            "definition": "(of a surface or object) decorated with a design that stands out in relief."
        },
        {
            "id": 232,
            "word": "Prodigal",
            "definition": "Spending money or resources freely and recklessly; wastefully extravagant."
        },
        {
            "id": 233,
            "word": "Apropos",
            "definition": "With reference to; concerning."
        },
        {
            "id": 234,
            "word": "Besotted",
            "definition": "Strongly infatuated."
        },
        {
            "id": 235,
            "word": "Articulate",
            "definition": "(of a person or a persons words) having or showing the ability to speak fluently and coherently."
        },
        {
            "id": 236,
            "word": "Ardor",
            "definition": "Enthusiasm or passion."
        },
        {
            "id": 237,
            "word": "Acrid",
            "definition": "Having an irritatingly strong and unpleasant taste or smell."
        },
        {
            "id": 238,
            "word": "Amenable",
            "definition": "(of a person) open and responsive to suggestion; easily persuaded or controlled."
        },
        {
            "id": 239,
            "word": "Febrile",
            "definition": "Having or showing the symptoms of a fever; having or showing a great deal of nervous excitement or energy."
        },
        {
            "id": 240,
            "word": "Clime",
            "definition": "A region considered with reference to its climate."
        },
        {
            "id": 241,
            "word": "Magnanimous",
            "definition": "Generous or forgiving, especially towards a rival or less powerful person."
        },
        {
            "id": 242,
            "word": "Lassitude",
            "definition": "A state of physical or mental weariness; lack of energy."
        },
        {
            "id": 243,
            "word": "Platitude",
            "definition": "A remark or statement, especially one with a moral content, that has been used too often to be interesting or thoughtful."
        },
        {
            "id": 244,
            "word": "Slattern",
            "definition": "A dirty, untidy woman."
        },
        {
            "id": 245,
            "word": "Lurid",
            "definition": "Very vivid in color, especially so as to create an unpleasantly harsh or unnatural effect."
        },
        {
            "id": 246,
            "word": "Mellifluous",
            "definition": "(of a voice or words) sweet or musical; pleasant to hear."
        },
        {
            "id": 247,
            "word": "Noisome",
            "definition": "Having an extremely offensive smell."
        },
        {
            "id": 248,
            "word": "Vagary",
            "definition": "An unexpected and inexplicable change in someone\u2019s behavior or a situation."
        },
        {
            "id": 249,
            "word": "Funereal",
            "definition": "Having the mournful, somber character appropriate to a funeral."
        },
        {
            "id": 250,
            "word": "Expatiate",
            "definition": "Speak or write at length in great detail."
        },
        {
            "id": 251,
            "word": "Dauber",
            "definition": "A crude or inartistic painter."
        },
        {
            "id": 252,
            "word": "Retinue",
            "definition": "A group of advisers, assistants, or others accompanying an important person."
        },
        {
            "id": 253,
            "word": "Obfuscation",
            "definition": "The action of making something obscure, unclear, or unintelligible."
        },
        {
            "id": 254,
            "word": "Convivial",
            "definition": "Friendly; agreeable; fond of feasting, drinking, and merry company."
        },
        {
            "id": 255,
            "word": "Privy",
            "definition": "Sharing in the knowledge of (something secret or private)."
        },
        {
            "id": 256,
            "word": "Prolific",
            "definition": "(of a plant, animal, or person) producing much fruit or foliage or many offspring; present in large numbers or quantities, plentiful."
        },
        {
            "id": 257,
            "word": "Insouciant",
            "definition": "Showing a casual lack of concern; indifferent."
        },
        {
            "id": 258,
            "word": "Balky",
            "definition": "Reluctant; uncooperative."
        },
        {
            "id": 259,
            "word": "Diction",
            "definition": "The choice and use of words and phrases in speech or writing."
        },
        {
            "id": 260,
            "word": "Salient",
            "definition": "Most noticeable or important."
        },
        {
            "id": 261,
            "word": "Ellipsis",
            "definition": "The omission from speech or writing of a word or words that are superfluous or able to be understood from contextual clues."
        },
        {
            "id": 262,
            "word": "Omission",
            "definition": "A person or thing that has been left out or excluded."
        },
        {
            "id": 263,
            "word": "Penchant",
            "definition": "A strong or habitual liking for something or tendency to do something."
        },
        {
            "id": 264,
            "word": "Irate",
            "definition": "Feeling or characterized by great anger."
        },
        {
            "id": 265,
            "word": "Egregious",
            "definition": "Outstandingly bad; shocking."
        },
        {
            "id": 266,
            "word": "Glower",
            "definition": "Have an angry or sullen look on one\u2019s face; scowl."
        },
        {
            "id": 267,
            "word": "Impugn",
            "definition": "Dispute the truth, validity, or honesty of a statement or motive; call into question."
        },
        {
            "id": 268,
            "word": "Ephemeral",
            "definition": "Lasting for a very short time."
        },
        {
            "id": 269,
            "word": "Disinter",
            "definition": "Dig up (something that has been buried, especially a corpse)."
        },
        {
            "id": 270,
            "word": "Evocative",
            "definition": "Bringing strong memories, images, or feelings to mind."
        },
        {
            "id": 271,
            "word": "Torpid",
            "definition": "Mentally or physically inactive; lethargic."
        },
        {
            "id": 272,
            "word": "Galvanize",
            "definition": "Shock or excite (someone) into taking action."
        },
        {
            "id": 273,
            "word": "Simulacrum",
            "definition": "An image or representation of someone or something."
        },
        {
            "id": 274,
            "word": "Sallow",
            "definition": "Unhealthy in appearance; often yellow in color."
        },
        {
            "id": 275,
            "word": "Nictate",
            "definition": "Blink."
        },
        {
            "id": 276,
            "word": "Spasmodic",
            "definition": "Occurring or done in brief , irregular bursts."
        },
        {
            "id": 277,
            "word": "Gaudy",
            "definition": "Extravagantly bright and showy, typically so as to be tasteless."
        },
        {
            "id": 278,
            "word": "Averse",
            "definition": "Having a strong dislike of or opposition to something."
        },
        {
            "id": 279,
            "word": "Precept",
            "definition": "A general rule intended to regulate behavior or thought."
        },
        {
            "id": 280,
            "word": "Exhortation",
            "definition": "An address or communication empathetically urging someone to do something."
        },
        {
            "id": 281,
            "word": "Mnemonic",
            "definition": "A device such as a pattern of letters, ideas, or associations that assists in remembering something; aiding or designed to aid the memory."
        },
        {
            "id": 282,
            "word": "Assent",
            "definition": "The expression of approval or agreement."
        },
        {
            "id": 283,
            "word": "Expound",
            "definition": "Present and explain (a theory or idea) systematically and in detail."
        },
        {
            "id": 284,
            "word": "Affectation",
            "definition": "Behavior, speech, or writing that is artificial and designed to impress."
        },
        {
            "id": 285,
            "word": "Solecism",
            "definition": "A grammatical mistake in speech or writing."
        },
        {
            "id": 286,
            "word": "Duplicity",
            "definition": "Deceitfulness, double dealing."
        },
        {
            "id": 287,
            "word": "Virility",
            "definition": "(in a man) the quality of having strength, energy, and a strong sex drive; manliness."
        },
        {
            "id": 288,
            "word": "Concubine",
            "definition": "A woman who lives with a man but has lower status than his wife or wives."
        },
        {
            "id": 289,
            "word": "Specious",
            "definition": "Superficially plausible, but actually wrong."
        },
        {
            "id": 290,
            "word": "Syllogism",
            "definition": "Deductive reasoning as distinct from induction."
        },
        {
            "id": 291,
            "word": "Impunity",
            "definition": "Exemption from punishment or freedoms from the injurious consequences of an action."
        },
        {
            "id": 292,
            "word": "Ignoble",
            "definition": "Not honorable in character or purpose."
        },
        {
            "id": 293,
            "word": "Conducive",
            "definition": "Making a certain situation or outcome likely or possible."
        },
        {
            "id": 294,
            "word": "Putrefaction",
            "definition": "The process of decay or rotting in a body or other organic matter."
        },
        {
            "id": 295,
            "word": "Perpetuate",
            "definition": "Make something (typically an undesirable situation or an unfounded belief) continue indefinitely."
        },
        {
            "id": 296,
            "word": "Calumny",
            "definition": "The making of false and defamatory statements about someone in order to damage their reputation; slander."
        },
        {
            "id": 297,
            "word": "Ephemeral",
            "definition": "Lasting for a very short time."
        },
        {
            "id": 298,
            "word": "Promontory",
            "definition": "A point of high land that juts out into a large body of water; a headland."
        },
        {
            "id": 299,
            "word": "Phosphorescence",
            "definition": "Light emitted by a substance without combustion or perceptible heat."
        },
        {
            "id": 300,
            "word": "Undulate",
            "definition": "Move or go with a smooth up-and-down motion."
        },
        {
            "id": 301,
            "word": "Clemency",
            "definition": "Mercy, lenience."
        },
        {
            "id": 302,
            "word": "Impetuous",
            "definition": "Acting or done quickly and without thought or care."
        },
        {
            "id": 303,
            "word": "Auspicious",
            "definition": "Conducive to success; favorable."
        },
        {
            "id": 304,
            "word": "Approbation",
            "definition": "Approval or praise."
        },
        {
            "id": 305,
            "word": "Posterity",
            "definition": "All future generations of people."
        },
        {
            "id": 306,
            "word": "Cessation",
            "definition": "The fact or process of ending or being brought to an end."
        },
        {
            "id": 307,
            "word": "Terrene",
            "definition": "Of or like earth; earthly."
        },
        {
            "id": 308,
            "word": "Conduce",
            "definition": "Help to bring about (a particular situation or outcome)."
        },
        {
            "id": 309,
            "word": "Pervade",
            "definition": "(of an influence, feeling, or quality) be present and apparent throughout."
        },
        {
            "id": 310,
            "word": "Comeliness",
            "definition": "The quality of being good looking and attractive."
        },
        {
            "id": 311,
            "word": "Acquiesce",
            "definition": "Accept something reluctantly but without protest."
        },
        {
            "id": 312,
            "word": "Ignominy",
            "definition": "Public shame or disgrace."
        },
        {
            "id": 313,
            "word": "Chide",
            "definition": "Scold or rebuke."
        },
        {
            "id": 314,
            "word": "Rebuke",
            "definition": "Express sharp disapproval or criticism of someone because of their behaviors or actions."
        },
        {
            "id": 315,
            "word": "Insuperable",
            "definition": "(of a difficulty or obstacle) impossible to overcome."
        },
        {
            "id": 316,
            "word": "Knave",
            "definition": "A dishonest or unscrupulous man."
        },
        {
            "id": 317,
            "word": "Supplant",
            "definition": "Supersede and replace."
        },
        {
            "id": 318,
            "word": "Inextricable",
            "definition": "Impossible to disentangle or separate."
        },
        {
            "id": 319,
            "word": "Predilection",
            "definition": "A preference or special liking for something; a bias in favor of something."
        },
        {
            "id": 320,
            "word": "Vestige",
            "definition": "A trace of something that is disappearing or no longer exists."
        },
        {
            "id": 321,
            "word": "Plaintive",
            "definition": "Sounding sad and mournful."
        },
        {
            "id": 322,
            "word": "Anachronism",
            "definition": "A chronological inconsistency in some arrangement, especially a juxtaposition of people, events, objects, language terms and customs from different time periods."
        },
        {
            "id": 323,
            "word": "Scintillating",
            "definition": "Sparkling or shining brightly."
        },
        {
            "id": 324,
            "word": "Squalid",
            "definition": "(of a place) extremely dirty and unpleasant, especially as a result of poverty or neglect."
        },
        {
            "id": 325,
            "word": "Alliterate",
            "definition": "(of a phrase or line of verse) contain words which begin with the same sound or letter."
        },
        {
            "id": 326,
            "word": "Loll",
            "definition": "Sit, lie, or stand in a lazy, relaxed way."
        },
        {
            "id": 327,
            "word": "Contrive",
            "definition": "Create or bring about (an object or a situation) by deliberate use of skill and artifice."
        },
        {
            "id": 328,
            "word": "Licentious",
            "definition": "Promiscuous and unprincipled in sexual matters."
        },
        {
            "id": 329,
            "word": "Erudite",
            "definition": "Having or showing great knowledge or learning."
        },
        {
            "id": 330,
            "word": "Heuristic",
            "definition": "Enabling someone to discover or learn something for themselves; proceeding to a solution by trial and error or by rules that are only loosely defined."
        },
        {
            "id": 331,
            "word": "Dilettante",
            "definition": "A person who cultivated an area of interest, such as the arts, without real commitment or knowledge."
        },
        {
            "id": 332,
            "word": "Derelict",
            "definition": "In very poor condition as a result of misuse or neglect."
        },
        {
            "id": 333,
            "word": "Abdicate",
            "definition": "Fail to fulfill or undertake (a responsibility or duty)."
        },
        {
            "id": 334,
            "word": "Indefatigable",
            "definition": "(of a person or their efforts) persisting tirelessly."
        },
        {
            "id": 335,
            "word": "Demarcation",
            "definition": "The action of fixing the boundary or limits of something."
        },
        {
            "id": 336,
            "word": "Stentorian",
            "definition": "(of a persons voice) loud or powerful."
        },
        {
            "id": 337,
            "word": "Salutary",
            "definition": "(especially with reference to something unwelcome or unpleasant) producing good effects; beneficial."
        },
        {
            "id": 338,
            "word": "Sacrilege",
            "definition": "Violation or misuse of what is regarded as sacred."
        },
        {
            "id": 339,
            "word": "Precipitate",
            "definition": "Cause (an event or situation, typically one that is bad or undesirable) to happen suddenly, unexpectedly, or prematurely."
        },
        {
            "id": 340,
            "word": "Imperious",
            "definition": "Assuming power or authority without justification; arrogant and domineering."
        },
        {
            "id": 341,
            "word": "Precept",
            "definition": "A general rule intended to regulate behavior or thought."
        },
        {
            "id": 342,
            "word": "Trepidation",
            "definition": "A feeling of fear or agitation about something that may happen."
        },
        {
            "id": 343,
            "word": "Circuitous",
            "definition": "(of a route or journey) longer than the most direct way."
        },
        {
            "id": 344,
            "word": "Misnomer",
            "definition": "A wrong or inaccurate name or designation."
        },
        {
            "id": 345,
            "word": "Succor",
            "definition": "Assistance and support in times of hardship and distress."
        },
        {
            "id": 346,
            "word": "Genuflect",
            "definition": "Lower one\u2019s body briefly by bending one knee to the ground, typically in worship or as a sign of respect; show deference or servility."
        },
        {
            "id": 347,
            "word": "Gormless",
            "definition": "Lacking sense or initiative; foolish."
        },
        {
            "id": 348,
            "word": "Unerring",
            "definition": "Always right or accurate."
        },
        {
            "id": 349,
            "word": "Incredulity",
            "definition": "The state of being unwilling or unable to believe something."
        },
        {
            "id": 350,
            "word": "Concerted",
            "definition": "Jointly arranged, planned, or carried out; coordinated."
        },
        {
            "id": 351,
            "word": "Eclectic",
            "definition": "Deriving ideas, style, or taste from a broad and diverse range of sources."
        },
        {
            "id": 352,
            "word": "Mollify",
            "definition": "Appease the anger or anxiety of (someone)."
        },
        {
            "id": 353,
            "word": "Rapport",
            "definition": "A close and harmonious relationship in which the people or groups concerned understand each other\u2019s feelings or ideas and communicate well."
        },
        {
            "id": 354,
            "word": "Tirade",
            "definition": "A long, angry speech of criticism or accusation."
        },
        {
            "id": 355,
            "word": "Ravel",
            "definition": "Untangle or unravel something."
        },
        {
            "id": 356,
            "word": "Ensconce",
            "definition": "Establish or settle (someone) in a comfortable, safe, or secret place."
        },
        {
            "id": 357,
            "word": "Dither",
            "definition": "Be indecisive."
        },
        {
            "id": 358,
            "word": "Litany",
            "definition": "A tedious recital or repetitive series."
        },
        {
            "id": 359,
            "word": "Cosset",
            "definition": "Care for and protect in an overindulgent way."
        },
        {
            "id": 360,
            "word": "Sybaritic",
            "definition": "Fond of sensuous luxury or pleasure; self indulgent."
        },
        {
            "id": 361,
            "word": "Sumptuous",
            "definition": "Splendid and expensive looking."
        },
        {
            "id": 362,
            "word": "Adage",
            "definition": "A proverb or short statement expressing a general truth."
        },
        {
            "id": 363,
            "word": "Propensity",
            "definition": "A tendency or inclination to behave in a particular way."
        },
        {
            "id": 364,
            "word": "Inundation",
            "definition": "An overwhelming abundance of people or things; flooding."
        },
        {
            "id": 365,
            "word": "Blithely",
            "definition": "In a way that shows a casual and cheerful indifference considered to be callous or improper."
        },
        {
            "id": 366,
            "word": "Oubliette",
            "definition": "A secret dungeon with access only through a trapdoor in its ceiling."
        },
        {
            "id": 367,
            "word": "Tantalizing",
            "definition": "Tormenting or teasing with the sight or promise of something unobtainable."
        },
        {
            "id": 368,
            "word": "Quiescent",
            "definition": "In a state or period of inactivity or dormancy."
        },
        {
            "id": 369,
            "word": "Vicarious",
            "definition": "Experiences in the imagination through the feelings or actions of another person."
        },
        {
            "id": 370,
            "word": "Inestimable",
            "definition": "Too great to calculate."
        },
        {
            "id": 371,
            "word": "Tendentious",
            "definition": "Expressing or intending to promote a particular cause or point of view, especially a controversial one."
        },
        {
            "id": 372,
            "word": "Prosaic",
            "definition": "Having the style or diction of prose; lacking poetic beauty."
        },
        {
            "id": 373,
            "word": "Vacillate",
            "definition": "Alternate or waver between different opinions or actions; be indecisive."
        },
        {
            "id": 374,
            "word": "Eponymous",
            "definition": "(of a person) giving their name to something."
        },
        {
            "id": 375,
            "word": "Adumbrate",
            "definition": "Report or represent in outline."
        },
        {
            "id": 376,
            "word": "Importunity",
            "definition": "Persistence, especially to the point of annoyance."
        },
        {
            "id": 377,
            "word": "Veracity",
            "definition": "Conformity to facts; accuracy."
        },
        {
            "id": 378,
            "word": "Dialectic",
            "definition": "The art of investigating or discussing the truth of opinions."
        },
        {
            "id": 379,
            "word": "Fastidious",
            "definition": "Very attentive to and concerned about accuracy and detail."
        },
        {
            "id": 380,
            "word": "Exordium",
            "definition": "The beginning or introductory part, especially of a discourse or treatise."
        },
        {
            "id": 381,
            "word": "Gesticulation",
            "definition": "A gesture, especially a dramatic one, used instead of speaking or to emphasize one\u2019s words."
        },
        {
            "id": 382,
            "word": "Farce",
            "definition": "A comic dramatic work using buffoonery and horseplay and typically including crude characterization and ludicrously improbable situations."
        },
        {
            "id": 383,
            "word": "Staid",
            "definition": "Sedate, respectable, and unadventurous."
        },
        {
            "id": 384,
            "word": "Desideratum",
            "definition": "Something that is wanted or needed."
        },
        {
            "id": 385,
            "word": "Attenuated",
            "definition": "Having been reduced in force, effect, or value."
        },
        {
            "id": 386,
            "word": "Congenial",
            "definition": "(of a person) pleasant because of a personality, qualities, or interests that are similar to one\u2019s own."
        },
        {
            "id": 387,
            "word": "Temerity",
            "definition": "Excessive confidence or boldness; audacity."
        },
        {
            "id": 388,
            "word": "Vanity",
            "definition": "Excessive pride in or admiration of one\u2019s own appearance or achievements."
        },
        {
            "id": 389,
            "word": "Importunate",
            "definition": "Persistent, especially to the point of annoyance or intrusion."
        },
        {
            "id": 390,
            "word": "Requite",
            "definition": "Make appropriate return for (a favor, service, or wrongdoing)."
        },
        {
            "id": 391,
            "word": "Preclude",
            "definition": "To prevent the presence, existence, or occurrence of; make impossible."
        },
        {
            "id": 392,
            "word": "Succinct",
            "definition": "(especially of something written or spoken) briefly and clearly expressed."
        },
        {
            "id": 393,
            "word": "Blithe",
            "definition": "Showing a casual and cheerful indifference considered to be callous or improper."
        },
        {
            "id": 394,
            "word": "Redress",
            "definition": "Remedy or set right (an undesirable or unfair situation)."
        },
        {
            "id": 395,
            "word": "Practicable",
            "definition": "Able to be done or put into practice successfully."
        },
        {
            "id": 396,
            "word": "Cosset",
            "definition": "Care for and protect in an overindulgent way."
        },
        {
            "id": 397,
            "word": "Beleaguer",
            "definition": "Cause problems or difficulties for."
        },
        {
            "id": 398,
            "word": "Presentiment",
            "definition": "An intuitive feeling about the future, especially one of foreboding."
        },
        {
            "id": 399,
            "word": "Articulate",
            "definition": "(of a person or a persons words) having or showing the ability to speak fluently and coherently."
        },
        {
            "id": 400,
            "word": "Lurid",
            "definition": "Gruesome, horrible, revolting."
        },
        {
            "id": 401,
            "word": "Snide",
            "definition": "Derogatory or mocking in an indirect way."
        },
        {
            "id": 402,
            "word": "Effusive",
            "definition": "Expressing feelings of gratitude, pleasure, or approval in an unrestrained or heartfelt manner."
        },
        {
            "id": 403,
            "word": "Predicate",
            "definition": "The part of a sentence or clause containing a verb and stating something about the subject."
        },
        {
            "id": 404,
            "word": "Adulation",
            "definition": "Obsequious flattery; excessive admiration or praise."
        },
        {
            "id": 405,
            "word": "Internecine",
            "definition": "Destructive to both sides in a conflict; relating to conflict within a group or organization."
        },
        {
            "id": 406,
            "word": "Peremptory",
            "definition": "(especially of a persons manner or actions) insisting on immediate attention or obedience, especially in a brusquely imperious way."
        },
        {
            "id": 407,
            "word": "Askance",
            "definition": "With an attitude or look of suspicion or disapproval."
        },
        {
            "id": 408,
            "word": "Aggrandize",
            "definition": "Increase the power, status, or wealth of."
        },
        {
            "id": 409,
            "word": "Triage",
            "definition": "The preliminary assessment of patients or casualties in order to determine the urgency of their need for treatment and the nature of treatment required."
        },
        {
            "id": 410,
            "word": "Apostate",
            "definition": "A person who renounces a religious or political belief or principle."
        },
        {
            "id": 411,
            "word": "Efficacy",
            "definition": "The ability to produce a desired or intended result."
        },
        {
            "id": 412,
            "word": "Detritus",
            "definition": "Waste or debris of any kind."
        },
        {
            "id": 413,
            "word": "Insidious",
            "definition": "Processing in a gradual, subtle way, but with harmful effects."
        },
        {
            "id": 414,
            "word": "Coruscating",
            "definition": "Flashing; sparkling."
        },
        {
            "id": 415,
            "word": "Intercalate",
            "definition": "To insert (something, such as a day) in a calendar; to insert between or among existing elements or layers."
        },
        {
            "id": 416,
            "word": "Elucidate",
            "definition": "Make (something) clear; explain."
        },
        {
            "id": 417,
            "word": "Intrepid",
            "definition": "Characterized by resolute fearlessness, fortitude, and endurance."
        },
        {
            "id": 418,
            "word": "Permissive",
            "definition": "Allowing or characterized by great or excessive freedom of behavior."
        },
        {
            "id": 419,
            "word": "Permissible",
            "definition": "Permitted; allowed."
        },
        {
            "id": 420,
            "word": "Calumny",
            "definition": "The making of false and defamatory statements about someone in order to damage their reputation; slander."
        },
        {
            "id": 421,
            "word": "Repudiate",
            "definition": "Refuse to accept or be associated with."
        },
        {
            "id": 422,
            "word": "Punitive",
            "definition": "Inflicting or intended as punishment."
        },
        {
            "id": 423,
            "word": "Confound",
            "definition": "Cause surprise or confusion in (someone) especially by acting against their expectations."
        },
        {
            "id": 424,
            "word": "Spurious",
            "definition": "Not being what it purports to be; fake or false."
        },
        {
            "id": 425,
            "word": "Soporific",
            "definition": "Tending to induce drowsiness or sleep."
        },
        {
            "id": 426,
            "word": "Antipathy",
            "definition": "A deep-seated feeling of dislike; aversion."
        },
        {
            "id": 427,
            "word": "Audacious",
            "definition": "Showing a willingness to take surprisingly bold risks."
        },
        {
            "id": 428,
            "word": "Indomitable",
            "definition": "Impossible to subdue or defeat."
        },
        {
            "id": 429,
            "word": "Tenacious",
            "definition": "Tending to keep a form hold of something; clinging or adhering closely."
        },
        {
            "id": 430,
            "word": "Conciliatory",
            "definition": "Intended or likely to placate or pacify."
        },
        {
            "id": 431,
            "word": "Equivocate",
            "definition": "Use ambiguous language so as to conceal the truth or avoid committing oneself."
        },
        {
            "id": 432,
            "word": "Abnegation",
            "definition": "The act of renouncing or rejecting something."
        },
        {
            "id": 433,
            "word": "Ornery",
            "definition": "Bad tempered and combative."
        },
        {
            "id": 434,
            "word": "Vilify",
            "definition": "Speak or write about in an abusively disparaging manner."
        },
        {
            "id": 435,
            "word": "Halcyon",
            "definition": "Denoting a period of time in the past that was idyllically happy and peaceful."
        },
        {
            "id": 436,
            "word": "Derision",
            "definition": "Contemptuous ridicule or mockery."
        },
        {
            "id": 437,
            "word": "Emetic",
            "definition": "(of a substance) causing vomiting."
        },
        {
            "id": 438,
            "word": "Carnality",
            "definition": "Feeling morbid sexual desire or a propensity to lewdness."
        },
        {
            "id": 439,
            "word": "Posit",
            "definition": "Assume as a fact; put forward as a basis of argument."
        },
        {
            "id": 440,
            "word": "Endow",
            "definition": "Provide with a quality, ability, or asset."
        },
        {
            "id": 441,
            "word": "Inimical",
            "definition": "Tending to obstruct or harm."
        },
        {
            "id": 442,
            "word": "Profundity",
            "definition": "Deep insight; great depth of knowledge or thought."
        },
        {
            "id": 443,
            "word": "Loquacious",
            "definition": "Tending to talk a great deal; talkative."
        },
        {
            "id": 444,
            "word": "Capacious",
            "definition": "Having a lot of space inside; roomy."
        },
        {
            "id": 445,
            "word": "Ebullition",
            "definition": "The action of bubbling or boiling; a sudden outburst of emotion or violence."
        },
        {
            "id": 446,
            "word": "Digress",
            "definition": "Leave the main subject temporarily in speech or writing."
        },
        {
            "id": 447,
            "word": "Milieu",
            "definition": "A person\u2019s social environment."
        },
        {
            "id": 448,
            "word": "Panegyric",
            "definition": "A public speech or published text in praise of someone or something."
        },
        {
            "id": 449,
            "word": "Garrulous",
            "definition": "Excessively talkative, especially on trivial matters."
        },
        {
            "id": 450,
            "word": "Mendacity",
            "definition": "Untruthfulness; lying."
        },
        {
            "id": 451,
            "word": "Crepuscular",
            "definition": "Of, resembling, or relating to twilight; (of an animal) appearing or active in twilight."
        },
        {
            "id": 452,
            "word": "Propound",
            "definition": "Put forward (an idea, theory, or point of view) for consideration by others."
        },
        {
            "id": 453,
            "word": "Boorish",
            "definition": "Rough and bad mannered; coarse."
        },
        {
            "id": 454,
            "word": "Stultify",
            "definition": "Cause to lose enthusiasm and initiative, especially as a result of a tedious or restrictive routine."
        },
        {
            "id": 455,
            "word": "Taciturn",
            "definition": "(of a person) reserved or uncommunicative in speech; saying little."
        },
        {
            "id": 456,
            "word": "Propagate",
            "definition": "Breed specimens of (a plant or animal) by natural processes from the parent stock."
        },
        {
            "id": 457,
            "word": "Infirmity",
            "definition": "Physical or mental weakness."
        },
        {
            "id": 458,
            "word": "Agglomeration",
            "definition": "A lot of different things gathered together, often in no particular order or arrangement."
        },
        {
            "id": 459,
            "word": "Profligate",
            "definition": "Recklessly extravagant or wasteful in the use of resources."
        },
        {
            "id": 460,
            "word": "Exorbitant",
            "definition": "(of a price or amount charged) unreasonably high."
        },
        {
            "id": 461,
            "word": "Historicity",
            "definition": "Historical authenticity."
        },
        {
            "id": 462,
            "word": "Cavalcade",
            "definition": "A formal procession of people walking, in horseback, or riding in vehicles."
        },
        {
            "id": 463,
            "word": "Dilapidation",
            "definition": "The state or process of falling into decay or being in disrepair."
        },
        {
            "id": 464,
            "word": "Surreptitious",
            "definition": "Kept secret, especially because it would not be approved of."
        },
        {
            "id": 465,
            "word": "Avuncular",
            "definition": "Relating to an uncle."
        },
        {
            "id": 466,
            "word": "Intransigent",
            "definition": "Unwilling or refusing to change one\u2019s views or to agree about something."
        },
        {
            "id": 467,
            "word": "Nascent",
            "definition": "(especially of a process or organization) just coming into existence and beginning to display signs of future potential."
        },
        {
            "id": 468,
            "word": "Subsistence",
            "definition": "The action or fact of maintaining or supporting oneself at a minimum level."
        },
        {
            "id": 469,
            "word": "Credence",
            "definition": "Belief in or acceptance of something as true."
        },
        {
            "id": 470,
            "word": "Interlude",
            "definition": "An intervening period of time."
        },
        {
            "id": 471,
            "word": "Vociferous",
            "definition": "(especially of a person or speech) vehement or clamorous."
        },
        {
            "id": 472,
            "word": "Culpable",
            "definition": "At blame."
        },
        {
            "id": 473,
            "word": "Complicit",
            "definition": "Involved in or knowing about a crime or some activity that is \u2018wrong\u2019."
        },
        {
            "id": 474,
            "word": "Dysgenic",
            "definition": "Exerting a detrimental effect on later generations through the inheritance of undesirable characteristics."
        },
        {
            "id": 475,
            "word": "Stolid",
            "definition": "Having or expressing little or no feeling; not easily stirred or excited."
        },
        {
            "id": 476,
            "word": "Colonnade",
            "definition": "A row of columns supporting a roof, an entablature, or arcade."
        },
        {
            "id": 477,
            "word": "Bereft",
            "definition": "Deprived of or lacking something."
        },
        {
            "id": 478,
            "word": "Signatory",
            "definition": "A party that has signed an agreement, especially a country that has signed a treaty."
        },
        {
            "id": 479,
            "word": "Incendiary",
            "definition": "(of a device or attack) designed to cause fires."
        },
        {
            "id": 480,
            "word": "Connivance",
            "definition": "Willingness to secretly allow or be involved in wrongdoing, especially an immoral or illegal act."
        },
        {
            "id": 481,
            "word": "Sedulous",
            "definition": "Working hard and never giving up."
        },
        {
            "id": 482,
            "word": "Ribald",
            "definition": "Referring to sexual matters in an amusingly coarse or irreverent way."
        },
        {
            "id": 483,
            "word": "Subvert",
            "definition": "Undermine the power and authority of (an established system or institution)."
        },
        {
            "id": 484,
            "word": "Pusillanimity",
            "definition": "Lack of courage or determination; timidity."
        },
        {
            "id": 485,
            "word": "Bemoan",
            "definition": "Express discontent or sorrow over (something)."
        },
        {
            "id": 486,
            "word": "Pulchritude",
            "definition": "Physical beauty."
        },
        {
            "id": 487,
            "word": "Expedient",
            "definition": "(of an action) convenient and practical although possibly improper or immoral."
        },
        {
            "id": 488,
            "word": "Intellection",
            "definition": "The action or process of understanding, as opposed to imagination."
        },
        {
            "id": 489,
            "word": "Colloquial",
            "definition": "(of language) used in ordinary or familiar conversation; not formal or literary."
        },
        {
            "id": 490,
            "word": "Subjunctive",
            "definition": "Relating to or denoting a mood of verbs expressing with is imagined or wished or possible."
        },
        {
            "id": 491,
            "word": "Vestigial",
            "definition": "Forming a very small remnant of something that was once much larger or more noticeable."
        },
        {
            "id": 492,
            "word": "Surrogate",
            "definition": "A substitute, especially a person deputizing for another in a specific role or office."
        },
        {
            "id": 493,
            "word": "Perfidy",
            "definition": "Deceitfulness; untrustworthiness."
        },
        {
            "id": 494,
            "word": "Polemic",
            "definition": "A speech or piece of writing expressing a strongly critical attack on or controversial opinion about someone or something."
        },
        {
            "id": 495,
            "word": "Espouse",
            "definition": "Adopt or support (a cause, belief, or way of life)."
        },
        {
            "id": 496,
            "word": "Impecunious",
            "definition": "Having little or no money."
        },
        {
            "id": 497,
            "word": "Cadre",
            "definition": "A small group of people specifically trained for a particular purpose or profession."
        },
        {
            "id": 498,
            "word": "Execrate",
            "definition": "Feel or express great loathing for."
        },
        {
            "id": 499,
            "word": "Avow",
            "definition": "Assert or confess openly."
        },
        {
            "id": 500,
            "word": "Miser",
            "definition": "A person who hoards wealth and spends as little money as possible."
        },
        {
            "id": 501,
            "word": "Fickle",
            "definition": "Changing frequently, especially as regards one\u2019s loyalties, interests, or affection."
        },
        {
            "id": 502,
            "word": "Caveat",
            "definition": "A warning or proviso of specific stipulations, conditions, or limitations."
        },
        {
            "id": 503,
            "word": "Primordial",
            "definition": "Existing at it from the beginning of time; primeval."
        },
        {
            "id": 504,
            "word": "Inure",
            "definition": "Accustom (someone) to something, especially something unpleasant."
        },
        {
            "id": 505,
            "word": "Temporize",
            "definition": "To act to suit the time or occasion."
        },
        {
            "id": 506,
            "word": "Travail",
            "definition": "Painful or laborious effort."
        },
        {
            "id": 507,
            "word": "Embellish",
            "definition": "Make something more attractive by the addition of decorative details or features."
        },
        {
            "id": 508,
            "word": "Assiduous",
            "definition": "Showing great care and perseverance."
        },
        {
            "id": 509,
            "word": "Lauded",
            "definition": "Highly praised or admired."
        },
        {
            "id": 510,
            "word": "Supercilious",
            "definition": "Behaving or looking as though one thinks one is superior to others."
        },
        {
            "id": 511,
            "word": "Tepid",
            "definition": "Lukewarm."
        },
        {
            "id": 512,
            "word": "Iniquity",
            "definition": "Immoral or grossly unfair behavior."
        },
        {
            "id": 513,
            "word": "Patrimony",
            "definition": "Property inherited from one\u2019s father or male ancestor."
        },
        {
            "id": 514,
            "word": "Parricide",
            "definition": "The killing of a parent or other near relative."
        },
        {
            "id": 515,
            "word": "Trite",
            "definition": "(of a remark, opinion, or idea) overused and consequently of little import, lacking originality or freshness."
        },
        {
            "id": 516,
            "word": "Auxiliary",
            "definition": "Providing supplementary or additional help and support."
        },
        {
            "id": 517,
            "word": "Arbiter",
            "definition": "A person who settles a dispute or has ultimate authority in a matter."
        },
        {
            "id": 518,
            "word": "Palisade",
            "definition": "A fence of wooden stairs or iron railings fixed in the ground, forming an enclosure or defense."
        },
        {
            "id": 519,
            "word": "Enervate",
            "definition": "To lessen the vitality or strength of."
        },
        {
            "id": 520,
            "word": "Affable",
            "definition": "Friendly, good natured, or easy to talk to."
        },
        {
            "id": 521,
            "word": "Rapine",
            "definition": "The violent seizure of someone\u2019s property."
        },
        {
            "id": 522,
            "word": "Parsimony",
            "definition": "Extreme unwillingness to spend money or use resources."
        },
        {
            "id": 523,
            "word": "Odious",
            "definition": "Extremely unpleasant; odious."
        },
        {
            "id": 524,
            "word": "Timorous",
            "definition": "Showing or suffering from nervousness, fear, or a lack of confidence."
        },
        {
            "id": 525,
            "word": "Perfidious",
            "definition": "Deceitful and untrustworthy."
        },
        {
            "id": 526,
            "word": "Cadence",
            "definition": "A modulation or inflection of the voice."
        },
        {
            "id": 527,
            "word": "Munificent",
            "definition": "(of a gift or sum of money) larger or more generous than is usual or necessary."
        },
        {
            "id": 528,
            "word": "Comport",
            "definition": "Conduct oneself; behave."
        },
        {
            "id": 529,
            "word": "Demesne",
            "definition": "Land attached to a manor and retained for the owners own us."
        },
        {
            "id": 530,
            "word": "Latent",
            "definition": "Existing in hidden or dormant form."
        },
        {
            "id": 531,
            "word": "Sidle",
            "definition": "Walk in a furtive, unobtrusive, or timid manner, especially sideways or obliquely."
        },
        {
            "id": 532,
            "word": "Replete",
            "definition": "Fully or well provided or filled."
        },
        {
            "id": 533,
            "word": "Diffuse",
            "definition": "Spread or cause to spread over a wide area or among a large number of people."
        },
        {
            "id": 534,
            "word": "Quietus",
            "definition": "Death or something that causes death; regarded as a release from life."
        },
        {
            "id": 535,
            "word": "Gamut",
            "definition": "The complete range or scope of something."
        },
        {
            "id": 536,
            "word": "Hirsute",
            "definition": "Hairy."
        },
        {
            "id": 537,
            "word": "Sundry",
            "definition": "Of various kinds, several; various items not important enough to be mentioned individually."
        },
        {
            "id": 538,
            "word": "Quizzical",
            "definition": "(of a person\u2019s expression or behavior) indicating mild or amused puzzlement."
        },
        {
            "id": 539,
            "word": "Friable",
            "definition": "Easily crumbled."
        },
        {
            "id": 540,
            "word": "Arbitrary",
            "definition": "Based on random choice or personal whim, rather than any reason or system."
        },
        {
            "id": 541,
            "word": "Idiomatic",
            "definition": "Using, containing, or denoting expressions that are natural to a native speaker."
        },
        {
            "id": 542,
            "word": "Atrophy",
            "definition": "(of body tissue or an organ) waste away, especially as a result of the degeneration of cells, or become vestigial during evolution."
        },
        {
            "id": 543,
            "word": "Repose",
            "definition": "A state of rest, sleep, or tranquility."
        },
        {
            "id": 544,
            "word": "Incandescent",
            "definition": "Emitting light as a result of being heated."
        },
        {
            "id": 545,
            "word": "Tenuous",
            "definition": "Very weak or slight."
        },
        {
            "id": 546,
            "word": "Circumlocution",
            "definition": "The use of many words where fewer would do, especially in a deliberate attempt to be vague or evasive."
        },
        {
            "id": 547,
            "word": "Idiosyncrasy",
            "definition": "A strange or unusual habit, way of behaving, or feature that someone or something has."
        },
        {
            "id": 548,
            "word": "Contrite",
            "definition": "Feeling or expressing remorse or penitence; affected by guilt."
        },
        {
            "id": 549,
            "word": "Languid",
            "definition": "(of a person, manner, or gesture) displaying or having a disinclination for physical exertion or effort; slow and relaxed."
        },
        {
            "id": 550,
            "word": "Parochial",
            "definition": "Relating to a church parish."
        },
        {
            "id": 551,
            "word": "Plenipotentiary",
            "definition": "A person, especially a diplomat, invested with the full power of independent action on behalf of their government, typically in a foreign country."
        },
        {
            "id": 552,
            "word": "Piebald",
            "definition": "(of a horse) having irregular patches of two colors, typically black and white."
        },
        {
            "id": 553,
            "word": "Cacophony",
            "definition": "A harsh discordant mixture of sounds."
        },
        {
            "id": 554,
            "word": "Tenable",
            "definition": "Able to be maintained or defended against attack or objection."
        },
        {
            "id": 555,
            "word": "Exonerate",
            "definition": "(especially of an official body) absolve (someone) from blame for a fault or wrongdoing, especially after due consideration of the case."
        },
        {
            "id": 556,
            "word": "Envisage",
            "definition": "Contemplate or conceive of as a possibility or a desirable future event."
        },
        {
            "id": 557,
            "word": "Inveiglement",
            "definition": "To acquire by ingenuity or flattery."
        },
        {
            "id": 558,
            "word": "Exegete",
            "definition": "An expounder or textual interpreter, especially of scripture."
        },
        {
            "id": 559,
            "word": "Fulminate",
            "definition": "Express vehement protest."
        },
        {
            "id": 560,
            "word": "Incommensurable",
            "definition": "Not able to be judged by the same standard as something; having no common standard of measurement."
        },
        {
            "id": 561,
            "word": "Decry",
            "definition": "Publicly denounce."
        },
        {
            "id": 562,
            "word": "Finitude",
            "definition": "The state of having limits or bounds."
        }
    ];

    constructor() { }

    getAllVocabulary(): VocabularyDefinition[] {
        return this.vocabularyDefinition;
    }

    getVocabularyById(id: Number): VocabularyDefinition | undefined {
        return this.vocabularyDefinition.find(vocabularyWord => vocabularyWord.id === id);
    }

    generateVocabularyNumbers(input: number): number[] {
        const numbers: number[] = [];

        while (numbers.length < 15) {
            const randomNumber = Math.floor(Math.random() * (input + 1));
            numbers.push(randomNumber);
        }

        return numbers;
    }

    getVocabularyQuiz(): VocabularyDefinition {
        const quizNumberArray: number[] = this.generateVocabularyNumbers(this.vocabularyDefinition.length);
        const quizArray: any = [];

        for(let i = 0; i < quizNumberArray.length; i++ ) {
            quizArray.push(this.getVocabularyById(quizNumberArray[i]))
        }

        return quizArray;
    }
}