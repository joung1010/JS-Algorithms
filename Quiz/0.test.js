// 카카오 첫 공채..'블라인드' 방식 채용
// 카카오, 합병 후 첫 공채.. 블라인드 전형으로 개발자 채용
// 카카오, 블라인드 전형으로 신입 개발자 공채
// 카카오 공채, 신입 개발자 코딩 능력만 본다
// 카카오, 신입 공채.. "코딩 실력만 본다"
// 카카오 "코딩 능력만으로 2018 신입 개발자 뽑는다"

// 제목을 기준으로 "블라인드 전형"에 주목하는 기사와 "코딩 테스트"에 주목하는 기사로 나뉘는 걸 발견
// "자카드 유사도"
//  집합 간의 유사도를 검사하는 여러 방법 중의 하나

// 두 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의
// 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의

function solution(str1, str2) {
    const BASE_NUM = 65536;
    const regex = /[\W0-9_]/g;
    const arr1 = [];
    const arr2 = [];

    for (let i = 1; i < str1.length; i++) {
        const word = str1[i - 1] + str1[i];
        if (regex.test(word)) continue;
        arr1.push(word.toLowerCase());
    }

    for (let i = 1; i < str2.length; i++) {
        const word = str2[i - 1] + str2[i];
        if (regex.test(word)) continue;
        arr2.push(word.toLowerCase());
    }


    const cross = [];
    const combination = [];


    for(let i = 0 ; i < arr1.length ; i ++) {
        if(arr2.includes(arr1[i])) {
            const idx = arr2.indexOf(arr1[i]);
            arr2.splice(idx,1);
            cross.push(arr1[i]);
        } else {
            combination.push(arr1[i])
        }
    }


    arr2.forEach((e) => combination.push(e));

    return Math.floor((cross.length / (cross.length+combination.length)) * 65536)
}



console.log(solution('FRANCE', 'french'));