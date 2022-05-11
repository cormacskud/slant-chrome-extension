const stopwords = [
  "a",
  "a's",
  "able",
  "about",
  "above",
  "according",
  "accordingly",
  "across",
  "actually",
  "after",
  "afterwards",
  "again",
  "against",
  "ain't",
  "all",
  "allow",
  "allows",
  "almost",
  "alone",
  "along",
  "already",
  "also",
  "although",
  "always",
  "am",
  "among",
  "amongst",
  "an",
  "and",
  "another",
  "any",
  "anybody",
  "anyhow",
  "anyone",
  "anything",
  "anyway",
  "anyways",
  "anywhere",
  "apart",
  "appear",
  "appreciate",
  "appropriate",
  "are",
  "aren't",
  "around",
  "as",
  "aside",
  "ask",
  "asking",
  "associated",
  "at",
  "available",
  "away",
  "awfully",
  "b",
  "be",
  "became",
  "because",
  "become",
  "becomes",
  "becoming",
  "been",
  "before",
  "beforehand",
  "behind",
  "being",
  "believe",
  "below",
  "beside",
  "besides",
  "best",
  "better",
  "between",
  "beyond",
  "both",
  "brief",
  "but",
  "by",
  "c",
  "c'mon",
  "c's",
  "came",
  "can",
  "can't",
  "cannot",
  "cant",
  "cause",
  "causes",
  "certain",
  "certainly",
  "changes",
  "clearly",
  "co",
  "com",
  "come",
  "comes",
  "concerning",
  "consequently",
  "consider",
  "considering",
  "contain",
  "containing",
  "contains",
  "corresponding",
  "could",
  "couldn't",
  "course",
  "currently",
  "d",
  "definitely",
  "described",
  "despite",
  "did",
  "didn't",
  "different",
  "do",
  "does",
  "doesn't",
  "doing",
  "don't",
  "done",
  "down",
  "downwards",
  "during",
  "e",
  "each",
  "edu",
  "eg",
  "eight",
  "either",
  "else",
  "elsewhere",
  "enough",
  "entirely",
  "especially",
  "et",
  "etc",
  "even",
  "ever",
  "every",
  "everybody",
  "everyone",
  "everything",
  "everywhere",
  "ex",
  "exactly",
  "example",
  "except",
  "f",
  "far",
  "few",
  "fifth",
  "first",
  "five",
  "followed",
  "following",
  "follows",
  "for",
  "former",
  "formerly",
  "forth",
  "four",
  "from",
  "further",
  "furthermore",
  "g",
  "get",
  "gets",
  "getting",
  "given",
  "gives",
  "go",
  "goes",
  "going",
  "gone",
  "got",
  "gotten",
  "greetings",
  "h",
  "had",
  "hadn't",
  "happens",
  "hardly",
  "has",
  "hasn't",
  "have",
  "haven't",
  "having",
  "he",
  "he's",
  "hello",
  "help",
  "hence",
  "her",
  "here",
  "here's",
  "hereafter",
  "hereby",
  "herein",
  "hereupon",
  "hers",
  "herself",
  "hi",
  "him",
  "himself",
  "his",
  "hither",
  "hopefully",
  "how",
  "howbeit",
  "however",
  "i",
  "i'd",
  "i'll",
  "i'm",
  "i've",
  "ie",
  "if",
  "ignored",
  "immediate",
  "in",
  "inasmuch",
  "inc",
  "indeed",
  "indicate",
  "indicated",
  "indicates",
  "inner",
  "insofar",
  "instead",
  "into",
  "inward",
  "is",
  "isn't",
  "it",
  "it'd",
  "it'll",
  "it's",
  "its",
  "itself",
  "j",
  "just",
  "k",
  "keep",
  "keeps",
  "kept",
  "know",
  "knows",
  "known",
  "l",
  "last",
  "lately",
  "later",
  "latter",
  "latterly",
  "least",
  "less",
  "lest",
  "let",
  "let's",
  "like",
  "liked",
  "likely",
  "little",
  "look",
  "looking",
  "looks",
  "ltd",
  "m",
  "mainly",
  "many",
  "may",
  "maybe",
  "me",
  "mean",
  "meanwhile",
  "merely",
  "might",
  "more",
  "moreover",
  "most",
  "mostly",
  "much",
  "must",
  "my",
  "myself",
  "n",
  "name",
  "namely",
  "nd",
  "near",
  "nearly",
  "necessary",
  "need",
  "needs",
  "neither",
  "never",
  "nevertheless",
  "new",
  "next",
  "nine",
  "no",
  "nobody",
  "non",
  "none",
  "noone",
  "nor",
  "normally",
  "not",
  "nothing",
  "novel",
  "now",
  "nowhere",
  "o",
  "obviously",
  "of",
  "off",
  "often",
  "oh",
  "ok",
  "okay",
  "old",
  "on",
  "once",
  "one",
  "ones",
  "only",
  "onto",
  "or",
  "other",
  "others",
  "otherwise",
  "ought",
  "our",
  "ours",
  "ourselves",
  "out",
  "outside",
  "over",
  "overall",
  "own",
  "p",
  "particular",
  "particularly",
  "per",
  "perhaps",
  "placed",
  "please",
  "plus",
  "possible",
  "presumably",
  "probably",
  "provides",
  "q",
  "que",
  "quite",
  "qv",
  "r",
  "rather",
  "rd",
  "re",
  "really",
  "reasonably",
  "regarding",
  "regardless",
  "regards",
  "relatively",
  "respectively",
  "right",
  "s",
  "said",
  "same",
  "saw",
  "say",
  "saying",
  "says",
  "second",
  "secondly",
  "see",
  "seeing",
  "seem",
  "seemed",
  "seeming",
  "seems",
  "seen",
  "self",
  "selves",
  "sensible",
  "sent",
  "serious",
  "seriously",
  "seven",
  "several",
  "shall",
  "she",
  "should",
  "shouldn't",
  "since",
  "six",
  "so",
  "some",
  "somebody",
  "somehow",
  "someone",
  "something",
  "sometime",
  "sometimes",
  "somewhat",
  "somewhere",
  "soon",
  "sorry",
  "specified",
  "specify",
  "specifying",
  "still",
  "sub",
  "such",
  "sup",
  "sure",
  "t",
  "t's",
  "take",
  "taken",
  "tell",
  "tends",
  "th",
  "than",
  "thank",
  "thanks",
  "thanx",
  "that",
  "that's",
  "thats",
  "the",
  "their",
  "theirs",
  "them",
  "themselves",
  "then",
  "thence",
  "there",
  "there's",
  "thereafter",
  "thereby",
  "therefore",
  "therein",
  "theres",
  "thereupon",
  "these",
  "they",
  "they'd",
  "they'll",
  "they're",
  "they've",
  "think",
  "third",
  "this",
  "thorough",
  "thoroughly",
  "those",
  "though",
  "three",
  "through",
  "throughout",
  "thru",
  "thus",
  "to",
  "together",
  "too",
  "took",
  "toward",
  "towards",
  "tried",
  "tries",
  "truly",
  "try",
  "trying",
  "twice",
  "two",
  "u",
  "un",
  "under",
  "unfortunately",
  "unless",
  "unlikely",
  "until",
  "unto",
  "up",
  "upon",
  "us",
  "use",
  "used",
  "useful",
  "uses",
  "using",
  "usually",
  "uucp",
  "v",
  "value",
  "various",
  "very",
  "via",
  "viz",
  "vs",
  "w",
  "want",
  "wants",
  "was",
  "wasn't",
  "way",
  "we",
  "we'd",
  "we'll",
  "we're",
  "we've",
  "welcome",
  "well",
  "went",
  "were",
  "weren't",
  "what",
  "what's",
  "whatever",
  "when",
  "whence",
  "whenever",
  "where",
  "where's",
  "whereafter",
  "whereas",
  "whereby",
  "wherein",
  "whereupon",
  "wherever",
  "whether",
  "which",
  "while",
  "whither",
  "who",
  "who's",
  "whoever",
  "whole",
  "whom",
  "whose",
  "why",
  "will",
  "willing",
  "wish",
  "with",
  "within",
  "without",
  "won't",
  "wonder",
  "would",
  "would",
  "wouldn't",
  "x",
  "y",
  "yes",
  "yet",
  "you",
  "you'd",
  "you'll",
  "you're",
  "you've",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "z",
  "zero"
];

const supported_languages = [
  "danish",
  "dutch",
  "english",
  "french",
  "galician",
  "german",
  "italian",
  "polish",
  "portuguese",
  "romanian",
  "russian",
  "spanish",
  "swedish",
  "persian",
  "arabic"
];

export function extract(
  str,
  options = {
    remove_digits: true,
    return_changed_case: true,
  }
) {
  if (!str) {
    return [];
  }

  const return_changed_case = options.return_changed_case;
  const return_chained_words = options.return_chained_words;
  const remove_digits = options.remove_digits;
  const _language = options.language || "english";
  const _remove_duplicates = options.remove_duplicates || false;
  const return_max_ngrams = options.return_max_ngrams;

  if (supported_languages.indexOf(_language) < 0) {
    throw new Error(
      "Language must be one of [" + supported_languages.join(",") + "]"
    );
  }

  //  strip any HTML and trim whitespace
  const text = str.replace(/(<([^>]+)>)/gi, "").trim();
  if (!text) {
    return [];
  } else {
    const words = text.split(/\s/);
    const unchanged_words = [];
    const low_words = [];
    //  change the case of all the words
    for (let x = 0; x < words.length; x++) {
      let w = words[x].match(/https?:\/\/.*[\r\n]*/g)
        ? words[x]
        : words[x].replace(/\.|,|;|!|\?|\(|\)|:|"|^'|'$|“|”|‘|’/g, "");
      //  remove periods, question marks, exclamation points, commas, and semi-colons
      //  if this is a short result, make sure it's not a single character or something 'odd'
      if (w.length === 1) {
        w = w.replace(/_|@|&|#/g, "");
      }
      //  if it's a number, remove it
      const digits_match = w.match(/\d/g);
      if (remove_digits && digits_match && digits_match.length === w.length) {
        w = "";
      }
      if (w.length > 0) {
        low_words.push(w.toLowerCase());
        unchanged_words.push(w);
      }
    }
    let results = [];
    const _stopwords =
      options.stopwords || getStopwords({ language: _language });
    console.log(_stopwords);
    let _last_result_word_index = 0;
    let _start_result_word_index = 0;
    let _unbroken_word_chain = false;
    for (let y = 0; y < low_words.length; y++) {
      if (_stopwords.indexOf(low_words[y]) < 0) {
        if (_last_result_word_index !== y - 1) {
          _start_result_word_index = y;
          _unbroken_word_chain = false;
        } else {
          _unbroken_word_chain = true;
        }
        const result_word =
          return_changed_case &&
            !unchanged_words[y].match(/https?:\/\/.*[\r\n]*/g)
            ? low_words[y]
            : unchanged_words[y];

        if (
          return_max_ngrams &&
          _unbroken_word_chain &&
          !return_chained_words &&
          return_max_ngrams > y - _start_result_word_index &&
          _last_result_word_index === y - 1
        ) {
          const change_pos = results.length - 1 < 0 ? 0 : results.length - 1;
          results[change_pos] = results[change_pos]
            ? results[change_pos] + " " + result_word
            : result_word;
        } else if (return_chained_words && _last_result_word_index === y - 1) {
          const change_pos = results.length - 1 < 0 ? 0 : results.length - 1;
          results[change_pos] = results[change_pos]
            ? results[change_pos] + " " + result_word
            : result_word;
        } else {
          results.push(result_word);
        }

        _last_result_word_index = y;
      } else {
        _unbroken_word_chain = false;
      }
    }

    if (_remove_duplicates) {
      results = results.filter((v, i, a) => a.indexOf(v) === i);;
    }

    return results;
  }
}

function getStopwords(options) {
  options = options || {};

  const _language = options.language || "english";
  if (supported_languages.indexOf(_language) < 0) {
    throw new Error(
      "Language must be one of [" + supported_languages.join(",") + "]"
    );
  }

  return stopwords;
}
