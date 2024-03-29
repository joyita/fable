import axios from 'axios';
import * as actions from "../../common/types";

const apiUrl = actions.apiUrl;

export const loadData = () => async (dispatch) => {

    let restAddress = `${apiUrl  + 'getData?'}`;

    axios.get(restAddress).then(
        function ({data}) {
            dispatch({type: actions.LOADED, payload: data});

        }
    ).catch(
        function () {
            dispatch({type: actions.LOADED, payload: {}})
        }
    );
};

export const addToy = (type, name) => async (dispatch) => {

    /*
    let restAddress = `${apiUrl  + 'getData?'}`;
    axios.get(restAddress).then(
        function ({data}) {
            dispatch({type: actions.LOADED, payload: data});

        }
    ).catch(
        function () {
            dispatch({type: actions.LOADED, payload: {}})
        }
    );
     */
    return await dispatch({type: actions.TOY_ADDED, payload: {type, name}});


};

export const deleteToy = (name) => async (dispatch) => {

    /*
    let restAddress = `${apiUrl  + 'getData?'}`;
    axios.get(restAddress).then(
        function ({data}) {
            dispatch({type: actions.LOADED, payload: data});

        }
    ).catch(
        function () {
            dispatch({type: actions.LOADED, payload: {}})
        }
    );
     */
    return await dispatch({type: actions.TOY_DELETED, payload: name});


};


export function searchToys (searchText) {
    let animals =  [
        "canidae","felidae","cat","cattle","dog","donkey","goat","guinea pig","horse","pig","rabbit","fancy rat varieties","laboratory rat strains","sheep breeds","water buffalo breeds","chicken breeds","duck breeds","goose breeds","pigeon breeds","turkey breeds","aardvark","aardwolf","african buffalo","african elephant","african leopard","albatross","alligator","alpaca","american buffalo (bison)","american robin","amphibian","list","anaconda","angelfish","anglerfish","ant","anteater","antelope","antlion","ape","aphid","arabian leopard","arctic fox","arctic wolf","armadillo","arrow crab","asp","ass (donkey)","baboon","badger","bald eagle","bandicoot","barnacle","barracuda","basilisk","bass","bat","beaked whale","bear","list","beaver","bedbug","bee","beetle","bird","list","bison","blackbird","black panther","black widow spider","blue bird","blue jay","blue whale","boa","boar","bobcat","bobolink","bonobo","booby","box jellyfish","bovid","buffalo, african","buffalo, american (bison)","bug","butterfly","buzzard","camel","canid","cape buffalo","capybara","cardinal","caribou","carp","cat","list","catshark","caterpillar","catfish","cattle","list","centipede","cephalopod","chameleon","cheetah","chickadee","chicken","list","chimpanzee","chinchilla","chipmunk","clam","clownfish","cobra","cockroach","cod","condor","constrictor","coral","cougar","cow","coyote","crab","crane","crane fly","crawdad","crayfish","cricket","crocodile","crow","cuckoo","cicada","damselfly","deer","dingo","dinosaur","list","dog","list","dolphin","donkey","list","dormouse","dove","dragonfly","dragon","duck","list","dung beetle","eagle","earthworm","earwig","echidna","eel","egret","elephant","elephant seal","elk","emu","english pointer","ermine","falcon","ferret","finch","firefly","fish","flamingo","flea","fly","flyingfish","fowl","fox","frog","fruit bat","gamefowl","list","galliform","list","gazelle","gecko","gerbil","giant panda","giant squid","gibbon","gila monster","giraffe","goat","list","goldfish","goose","list","gopher","gorilla","grasshopper","great blue heron","great white shark","grizzly bear","ground shark","ground sloth","grouse","guan","list","guanaco","guineafowl","list","guinea pig","list","gull","guppy","haddock","halibut","hammerhead shark","hamster","hare","harrier","hawk","hedgehog","hermit crab","heron","herring","hippopotamus","hookworm","hornet","horse","list","hoverfly","hummingbird","humpback whale","hyena","iguana","impala","irukandji jellyfish","jackal","jaguar","jay","jellyfish","junglefowl","kangaroo","kangaroo mouse","kangaroo rat","kingfisher","kite","kiwi","koala","koi","komodo dragon","krill","ladybug","lamprey","landfowl","land snail","lark","leech","lemming","lemur","leopard","leopon","limpet","lion","lizard","llama","lobster","locust","loon","louse","lungfish","lynx","macaw","mackerel","magpie","mammal","manatee","mandrill","manta ray","marlin","marmoset","marmot","marsupial","marten","mastodon","meadowlark","meerkat","mink","minnow","mite","mockingbird","mole","mollusk","mongoose","monitor lizard","monkey","moose","mosquito","moth","mountain goat","mouse","mule","muskox","narwhal","newt","new world quail","nightingale","ocelot","octopus","old world quail","opossum","orangutan","orca","ostrich","otter","owl","ox","panda","panther","panthera hybrid","parakeet","parrot","parrotfish","partridge","peacock","peafowl","pelican","penguin","perch","peregrine falcon","pheasant","pig","pigeon","list","pike","pilot whale","pinniped","piranha","planarian","platypus","polar bear","pony","porcupine","porpoise","portuguese man o' war","possum","prairie dog","prawn","praying mantis","primate","ptarmigan","puffin","puma","python","quail","quelea","quokka","rabbit","list","raccoon","rainbow trout","rat","rattlesnake","raven","ray (batoidea)","ray (rajiformes)","red panda","reindeer","reptile","rhinoceros","right whale","roadrunner","rodent","rook","rooster","roundworm","saber-toothed cat","sailfish","salamander","salmon","sawfish","scale insect","scallop","scorpion","seahorse","sea lion","sea slug","sea snail","shark","list","sheep","list","shrew","shrimp","silkworm","silverfish","skink","skunk","sloth","slug","smelt","snail","snake","list","snipe","snow leopard","sockeye salmon","sole","sparrow","sperm whale","spider","spider monkey","spoonbill","squid","squirrel","starfish","star-nosed mole","steelhead trout","stingray","stoat","stork","sturgeon","sugar glider","swallow","swan","swift","swordfish","swordtail","tahr","takin","tapir","tarantula","tarsier","tasmanian devil","termite","tern","thrush","tick","tiger","tiger shark","tiglon","toad","tortoise","toucan","trapdoor spider","tree frog","trout","tuna","turkey","list","turtle","tyrannosaurus","urial","vampire bat","vampire squid","vicuna","viper","vole","vulture","wallaby","walrus","wasp","warbler","water boa","water buffalo","weasel","whale","whippet","whitefish","whooping crane","wildcat","wildebeest","wildfowl","wolf","wolverine","wombat","woodpecker","worm","wren","xerinae","x-ray fish","yak","yellow perch","zebra","zebra finch","animals by number of neurons","animals by size","common household pests","common names of poisonous animals","alpaca","bali cattle","cat","cattle","chicken","dog","domestic bactrian camel","domestic canary","domestic dromedary camel","domestic duck","domestic goat","domestic goose","domestic guineafowl","domestic hedgehog","domestic pig","domestic pigeon","domestic rabbit","domestic silkmoth","domestic silver fox","domestic turkey","donkey","fancy mouse","fancy rat","lab rat","ferret","gayal","goldfish","guinea pig","guppy","horse","koi","llama","ringneck dove","sheep","siamese fighting fish","society finch","yak","water buffalo"    ];
   animals = [...new Set(animals)];
    let results = animals.filter(s => s.includes(searchText.toLowerCase()));
    return results;
    //dispatch({type: actions.TOYS_SEARCHED, payload: results});
}

export const clearToySearch = () => async (dispatch) => {
    dispatch({type: actions.TOYS_SEARCHED, payload: []});
}


