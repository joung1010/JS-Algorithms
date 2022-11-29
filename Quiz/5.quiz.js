/*
포털 다음에서 검색어 자동완성 기능을 넣고 싶은 라이언은 한 번 입력된 문자열을 학습해서 다음 입력 때 활용하고 싶어 졌다.
    예를 들어, go 가 한 번 입력되었다면, 다음 사용자는 g 만 입력해도 go를 추천해주므로 o를 입력할 필요가 없어진다! 단,
    학습에 사용된 단어들 중 앞부분이 같은 경우에는 어쩔 수 없이 다른 문자가 나올 때까지 입력을 해야 한다.
    효과가 얼마나 좋을지 알고 싶은 라이언은 학습된 단어들을 찾을 때 몇 글자를 입력해야 하는지 궁금해졌다.

    예를 들어, 학습된 단어들이 아래와 같을 때*/
/*go
gone
guild
go를 찾을 때 go를 모두 입력해야 한다.
    gone을 찾을 때 gon 까지 입력해야 한다. (gon이 입력되기 전까지는 go 인지 gone인지 확신할 수 없다.)
guild를 찾을 때는 gu 까지만 입력하면 guild가 완성된다.
    이 경우 총 입력해야 할 문자의 수는 7이다.

    라이언을 도와 위와 같이 문자열이 입력으로 주어지면 학습을 시킨 후, 학습된 단어들을 순서대로 찾을 때 몇 개의 문자를 입력하면 되는지 계산하는 프로그램을 만들어보자.

    입력 형식
학습과 검색에 사용될 중복 없는 단어 N개가 주어진다.
    모든 단어는 알파벳 소문자로 구성되며 단어의 수 N과 단어들의 길이의 총합 L의 범위는 다음과 같다.

2 <= N <= 100,000
2 <= L <= 1,000,000
출력 형식
단어를 찾을 때 입력해야 할 총 문자수를 리턴한다.*/

/*
입출력 예제
words	result
    ["go","gone","guild"]	7
    ["abc","def","ghi","jklm"]	4
    ["word","war","warrior","world"]	15
입출력 설명
첫 번째 예제는 본문 설명과 같다.
    두 번째 예제에서는 모든 단어들이 공통된 부분이 없으므로, 가장 앞글자만 입력하면 된다.
    세 번째 예제는 총 15 자를 입력해야 하고 설명은 아래와 같다.
    word는 word모두 입력해야 한다.
    war는 war 까지 모두 입력해야 한다.
    warrior는 warr 까지만 입력하면 된다.
    world는 worl까지 입력해야 한다. (word와 구분되어야 함을 명심하자)
*/

// 1. 트라이 활용
// 2. 트라이에서 중복으로 검색되는 횟수가 1까지 갈때까지의 반복횟수의 합


class Node {
    constructor(value = "") {
        this.value = value;
        this.children = new Map();
        this.cnt = 0;
    }

    addCnt() {
        this.cnt++;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(string) {
        let currNode = this.root;

        for (const char of string) {
            if (!currNode.children.has(char)) {
                currNode.children.set(char, new Node(currNode.value + char));
            }
            currNode = currNode.children.get(char);
            currNode.addCnt();
        }
    }

    findWords(words) {
        let wordCnt = 0;
        words.forEach(word => {
            let currNode = this.root;
            for (const char of word) {
                wordCnt++;
                currNode = currNode.children.get(char);
                if (currNode.cnt <= 1) break;
            }
        });
        return wordCnt;
    }

}



function solution(words) {
    const trie = new Trie();
    words.forEach(item => trie.insert(item));
    return trie.findWords(words);
}

console.log(solution(["go", "gone", "guild"]));
console.log(solution(["abc","def","ghi","jklm"]));
console.log(solution(["word","war","warrior","world"]));