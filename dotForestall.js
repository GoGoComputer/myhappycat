// ===========================================
// 묘냥의 숲 - 단일 통합 파일
// (gameData + dotForest.js)
// ===========================================

// ---------- gameData/worldLore.js ----------
/**
 * 묘냥의 숲 - 세계관 및 스토리 데이터
 * "황혼의 대지" 확장팩
 */

var WorldLore = {
    // ========================================
    // 세계 역사 및 배경
    // ========================================
    history: {
        creation: "태초에 다섯 원소의 신들이 모여 '에테르니아' 대륙을 창조했다. " +
            "생명의 여신 '엘리아나', 불의 신 '이그니스', 물의 신 '아쿠아리온', " +
            "대지의 신 '테라', 바람의 신 '제피로스'가 각자의 영역을 만들어 조화를 이루었다.",
        
        ancientWar: "3000년 전, 심연에서 올라온 '공허의 군주 말라카이'가 세계를 침략했다. " +
            "다섯 신들은 힘을 합쳐 말라카이를 봉인했으나, 그 과정에서 신들도 깊은 잠에 빠졌다.",
        
        currentAge: "현재는 '각성의 시대'. 봉인이 약해지며 공허의 기운이 다시 퍼지고 있다. " +
            "묘냥의 숲은 이 세계의 중심에 있으며, 모험가들이 모여드는 성지가 되었다.",
        
        prophecy: "고대 예언에 따르면, '일곱 별의 용사'가 나타나 세계를 구원할 것이라 한다. " +
            "그 용사들은 각 신의 축복을 받은 자들로, 최후의 전쟁에서 공허를 물리칠 운명이다."
    },

    // ========================================
    // 대륙 및 지역 정보
    // ========================================
    continents: {
        '에테르니아': {
            description: "알려진 세계의 중심 대륙. 다양한 종족과 문화가 공존한다.",
            regions: ['묘냥의 숲', '불타는 사막', '얼어붙은 북방', '황혼의 습지', '천공의 산맥', 
                     '고대의 폐허', '심연의 균열', '엘프의 숲', '드워프 왕국', '인간 제국']
        },
        '암흑대륙': {
            description: "공허의 기운으로 뒤덮인 저주받은 땅. 강력한 몬스터들의 서식지.",
            regions: ['절망의 황야', '피의 강', '죽음의 탑', '악몽의 계곡', '영혼의 감옥']
        },
        '천상계': {
            description: "신들이 잠든 천상의 영역. 특별한 자격을 갖춘 자만 입장 가능.",
            regions: ['빛의 성소', '바람의 궁전', '불꽃의 제단', '물의 신전', '대지의 심장']
        }
    },

    // ========================================
    // 세력 및 진영
    // ========================================
    factions: {
        '빛의 기사단': {
            description: "정의와 질서를 수호하는 성기사들의 조직",
            leader: "대기사장 아델린",
            headquarters: "성광 요새",
            reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
            rewards: ['빛의 성검', '성기사의 갑옷', '축복의 망토', '신성한 인장']
        },
        '그림자 연합': {
            description: "어둠 속에서 활동하는 암살자와 첩보원들의 비밀 조직",
            leader: "그림자 군주 베인",
            headquarters: "암흑 첨탑",
            reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
            rewards: ['그림자 단검', '암살자의 망토', '독의 반지', '은신의 부적']
        },
        '자연의 수호자': {
            description: "자연과 동물을 보호하는 드루이드와 레인저들",
            leader: "대드루이드 실바나",
            headquarters: "생명의 나무",
            reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
            rewards: ['자연의 지팡이', '드루이드의 로브', '생명의 부적', '변신의 인장']
        },
        '마법사 길드': {
            description: "마법의 연구와 전파를 목적으로 하는 마법사들의 학회",
            leader: "대마법사 메를린",
            headquarters: "아르카나 탑",
            reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
            rewards: ['비전의 지팡이', '마법사의 로브', '마나의 보석', '시공의 두루마리']
        },
        '상인 연합': {
            description: "대륙 전역의 무역을 담당하는 상인들의 조합",
            leader: "무역왕 골드만",
            headquarters: "황금 시장",
            reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
            rewards: ['황금 지갑', '상인의 마차', '행운의 동전', '거래의 인장']
        },
        '모험가 조합': {
            description: "전 세계 모험가들을 지원하고 관리하는 조직",
            leader: "조합장 레오",
            headquarters: "모험가 회관",
            reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
            rewards: ['모험가의 배낭', '탐험가의 망원경', '생존자의 키트', '귀환의 돌']
        },
        '대장장이 길드': {
            description: "최고의 무기와 방어구를 제작하는 장인들의 모임",
            leader: "대장장 토르그림",
            headquarters: "불꽃 대장간",
            reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
            rewards: ['용암 망치', '명장의 앞치마', '강화의 돌', '제작 설계도']
        },
        '해적 연맹': {
            description: "바다를 지배하는 해적들의 느슨한 연합",
            leader: "해적왕 블랙비어드",
            headquarters: "해골 만",
            reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
            rewards: ['해적의 커틀러스', '선장의 모자', '보물 지도', '행운의 주화']
        },
        '공허 숭배단': {
            description: "공허의 군주 말라카이를 숭배하는 광신도들 (적대 세력)",
            leader: "암흑 사제 자라쿨",
            headquarters: "공허의 신전",
            reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
            rewards: ['공허의 검', '암흑의 로브', '타락의 반지', '소환의 수정']
        },
        '용의 기사단': {
            description: "고대 용들과 계약을 맺은 전설적인 기사단",
            leader: "용기사 드라코니아",
            headquarters: "용의 둥지",
            reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
            rewards: ['용의 창', '용비늘 갑옷', '용의 불꽃', '용혈의 약']
        }
    },

    // ========================================
    // 주요 NPC들
    // ========================================
    npcs: {
        '현자 알드윈': {
            title: "묘냥의 숲 장로",
            description: "수백 년을 살아온 현명한 엘프. 모험가들에게 조언을 준다.",
            location: "묘냥의 숲 - 지혜의 나무 아래",
            quests: ['첫 발걸음', '잃어버린 고대 유물', '세계의 비밀']
        },
        '대장장이 그론드': {
            title: "전설의 대장장이",
            description: "드워프 최고의 장인. 전설급 장비를 제작할 수 있다.",
            location: "묘냥의 숲 - 불꽃 대장간",
            quests: ['희귀 광석 수집', '전설의 망치', '용의 숨결 담금질']
        },
        '마녀 모르가나': {
            title: "숲의 마녀",
            description: "신비로운 마법약을 만드는 마녀. 위험하지만 유용한 거래를 제안한다.",
            location: "묘냥의 숲 - 안개 늪",
            quests: ['독버섯 채집', '저주받은 유물', '금지된 마법']
        },
        '사냥꾼 라이카': {
            title: "늑대 조련사",
            description: "전설적인 사냥꾼이자 동물 조련의 대가.",
            location: "묘냥의 숲 - 사냥꾼의 오두막",
            quests: ['늑대의 길', '희귀 동물 포획', '맹수의 왕']
        },
        '상인 마르코': {
            title: "떠돌이 상인",
            description: "대륙 전역을 여행하며 희귀한 물건들을 판매하는 상인.",
            location: "무작위 (때때로 묘냥의 숲에 나타남)",
            quests: ['귀중한 배달', '도둑 잡기', '숨겨진 보물']
        }
    },

    // ========================================
    // 메인 스토리라인
    // ========================================
    mainStoryline: {
        chapter1: {
            title: "각성",
            description: "모험가로서의 첫 발걸음. 묘냥의 숲에서 기본적인 전투와 생존 기술을 배운다.",
            levelRange: "1-10",
            quests: ['첫 발걸음', '슬라임 퇴치', '숲의 생존법', '첫 번째 장비', '마을 사람들 돕기']
        },
        chapter2: {
            title: "어둠의 조짐",
            description: "숲 깊은 곳에서 이상한 징조가 발견된다. 공허의 기운이 새어나오기 시작한다.",
            levelRange: "10-20",
            quests: ['이상한 동굴', '오염된 샘물', '암흑의 사제', '봉인의 흔적', '현자의 경고']
        },
        chapter3: {
            title: "세력들의 움직임",
            description: "각 세력들이 공허의 위협에 대응하기 시작한다. 모험가는 동맹을 선택해야 한다.",
            levelRange: "20-30",
            quests: ['기사단의 부름', '그림자의 제안', '자연의 경고', '마법사의 연구', '선택의 기로']
        },
        chapter4: {
            title: "고대 유적 탐험",
            description: "봉인의 비밀을 찾아 고대 유적을 탐험한다. 신들의 흔적을 발견한다.",
            levelRange: "30-40",
            quests: ['잊혀진 신전', '고대의 비문', '신의 시험', '봉인의 열쇠', '시간의 조각']
        },
        chapter5: {
            title: "암흑대륙 침공",
            description: "공허 숭배단의 본거지인 암흑대륙으로 진격한다.",
            levelRange: "40-50",
            quests: ['암흑의 관문', '절망의 황야 횡단', '피의 강 건너기', '숭배단 격퇴', '암흑 사제 자라쿨']
        },
        chapter6: {
            title: "신들의 각성",
            description: "다섯 신을 깨우기 위한 여정. 각 신의 영역에서 시험을 통과해야 한다.",
            levelRange: "50-60",
            quests: ['불의 신 이그니스', '물의 신 아쿠아리온', '바람의 신 제피로스', '대지의 신 테라', '생명의 여신 엘리아나']
        },
        chapter7: {
            title: "최후의 전쟁",
            description: "공허의 군주 말라카이와의 최종 결전. 세계의 운명이 결정된다.",
            levelRange: "60-70",
            quests: ['군대의 결집', '심연의 균열 봉쇄', '말라카이의 장군들', '최후의 봉인', '공허의 군주 말라카이']
        },
        epilogue: {
            title: "새로운 시대",
            description: "전쟁 후의 세계. 영웅으로서 새로운 이야기가 시작된다.",
            levelRange: "70+",
            quests: ['영웅의 귀환', '세계의 재건', '새로운 위협', '전설의 시작']
        }
    }
};

// ========================================
// 세계관 대량 확장 (자동 생성)
// ========================================

(function() {
    // 추가 역사 이벤트
    WorldLore.history.fiveTrials = "신들의 다섯 시련에서 선택된 영웅들이 각 원소의 힘을 시험받았다.";
    WorldLore.history.fallenCity = "천년 전, '빛의 수도 루미나'가 공허의 균열로 인해 사라졌다.";
    WorldLore.history.voidCultRise = "최근 '공허 숭배단'이 세력을 확장하며 대륙 전역에 암흑의 표식을 퍼뜨리고 있다.";

    // 추가 대륙
    WorldLore.continents['불멸의 군도'] = {
        description: "폭풍과 마법으로 둘러싸인 수많은 섬. 신비한 해적들이 지배한다.",
        regions: ['폭풍의 섬', '산호 미궁', '검은 만', '백색 등대', '심연의 도크']
    };
    WorldLore.continents['황혼대륙'] = {
        description: "빛과 어둠이 교차하는 땅. 황혼의 생명체가 서식한다.",
        regions: ['황혼의 성채', '안개 계곡', '별빛 초원', '저무는 숲', '흐릿한 호수']
    };

    // 추가 세력
    WorldLore.factions['황혼 수호단'] = {
        description: "황혼의 균형을 지키는 수호자 집단",
        leader: "대수호자 리아",
        headquarters: "황혼의 성채",
        reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
        rewards: ['황혼의 검', '황혼의 망토', '황혼의 인장', '황혼의 부적']
    };
    WorldLore.factions['심연 감시단'] = {
        description: "심연의 균열을 감시하는 비밀 조직",
        leader: "감시자 카일",
        headquarters: "심연의 망루",
        reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
        rewards: ['심연의 검', '공허의 망토', '감시자의 눈', '심연의 인장']
    };
    WorldLore.factions['별빛 학회'] = {
        description: "별과 시공을 연구하는 마법사들의 학회",
        leader: "아스트라",
        headquarters: "별빛 관측소",
        reputation: { hostile: -3000, unfriendly: 0, neutral: 3000, friendly: 9000, honored: 21000, revered: 42000, exalted: 84000 },
        rewards: ['별빛 지팡이', '시공의 두루마리', '천체의 부적', '오로라 망토']
    };

    // 추가 주요 NPC
    WorldLore.npcs['별빛 현자 아스트리드'] = {
        title: "별빛 관측소의 현자",
        description: "별을 읽고 미래를 예측하는 현자.",
        location: "별빛 관측소",
        quests: ['별의 신탁', '유성의 조각', '성좌의 길']
    };
    WorldLore.npcs['황혼 기사 라비르'] = {
        title: "황혼 수호단 단장",
        description: "황혼의 균형을 지키는 기사.",
        location: "황혼의 성채",
        quests: ['황혼의 그림자', '균형의 시험', '어둠의 관문']
    };
    WorldLore.npcs['심연 감시자 카이로'] = {
        title: "심연 감시단의 수장",
        description: "심연의 균열을 감시하는 강인한 전사.",
        location: "심연의 망루",
        quests: ['심연의 봉인', '공허의 파편', '감시자의 서약']
    };
})();
/**
 * 묘냥의 숲 - 지역(Zone) 데이터
 * 각 지역의 정보, 몬스터, 던전, NPC 등
 */

var ZoneData = {
    // ========================================
    // 초보자 지역 (레벨 1-15)
    // ========================================
    '묘냥의 숲': {
        level: { min: 1, max: 15 },
        type: 'starter',
        description: "평화로운 숲 지역. 모험가들이 처음 여정을 시작하는 곳이다.",
        ambiance: "새들의 지저귐과 바람에 흔들리는 나뭇잎 소리가 들린다.",
        monsters: ['슬라임', '고블린', '늑대', '멧돼지', '거미', '뱀', '박쥐', '쥐', '버섯괴물', '나무정령'],
        bosses: ['숲의 수호자 엔트', '늑대왕 펜리르'],
        dungeons: ['고블린 동굴', '거미 둥지', '잊혀진 지하실'],
        npcs: ['현자 알드윈', '대장장이 그론드', '상인 마르코', '사냥꾼 라이카'],
        resources: ['약초', '나무', '철광석', '가죽'],
        subZones: {
            '평화의 초원': { level: { min: 1, max: 5 }, monsters: ['슬라임', '쥐', '토끼'] },
            '어둠의 숲길': { level: { min: 5, max: 10 }, monsters: ['고블린', '늑대', '박쥐'] },
            '안개 늪지': { level: { min: 8, max: 12 }, monsters: ['거미', '뱀', '습지괴물'] },
            '고대 유적터': { level: { min: 10, max: 15 }, monsters: ['스켈레톤', '고스트', '골렘조각'] }
        }
    },

    '초원 평야': {
        level: { min: 5, max: 20 },
        type: 'field',
        description: "끝없이 펼쳐진 초원 지역. 다양한 동물들과 도적들이 서식한다.",
        ambiance: "바람이 풀을 스치는 소리와 멀리서 들리는 말 울음소리.",
        monsters: ['들소', '도적', '코요테', '독수리', '말벌', '전갈', '땅굴쥐', '초원늑대', '켄타우로스', '하피'],
        bosses: ['도적왕 카일', '폭풍의 매 스톰윙'],
        dungeons: ['도적 은신처', '고대 지하무덤', '버려진 광산'],
        npcs: ['마차 상인 한스', '목동 베티', '현상금 사냥꾼 잭'],
        resources: ['목화', '양털', '은광석', '보석원석'],
        subZones: {
            '황금 목초지': { level: { min: 5, max: 10 }, monsters: ['들소', '코요테', '말벌'] },
            '도적의 길': { level: { min: 10, max: 15 }, monsters: ['도적', '도적궁수', '도적두목'] },
            '바람의 언덕': { level: { min: 12, max: 18 }, monsters: ['하피', '독수리', '바람정령'] },
            '켄타우로스 영역': { level: { min: 15, max: 20 }, monsters: ['켄타우로스전사', '켄타우로스사냥꾼', '켄타우로스주술사'] }
        }
    },

    // ========================================
    // 중급 지역 (레벨 15-35)
    // ========================================
    '불타는 사막': {
        level: { min: 15, max: 35 },
        type: 'desert',
        description: "뜨거운 태양 아래 펼쳐진 광활한 사막. 고대 문명의 유적이 묻혀 있다.",
        ambiance: "뜨거운 바람과 모래폭풍, 가끔 들리는 오아시스의 물소리.",
        monsters: ['사막전갈', '모래뱀', '미라', '사막도적', '모래골렘', '피닉스새끼', '사막스핑크스', '오아시스님프', '거대지렁이', '사막마법사'],
        bosses: ['사막의 군주 스콜피온 킹', '고대 파라오 카무세스'],
        dungeons: ['파라오의 무덤', '사막의 신전', '숨겨진 오아시스 동굴', '모래폭풍 요새'],
        npcs: ['사막 안내인 아흐메드', '고대학자 이시스', '오아시스 상인 파티마'],
        resources: ['사막장미', '태양의 돌', '금광석', '고대 유물조각'],
        subZones: {
            '뜨거운 모래언덕': { level: { min: 15, max: 20 }, monsters: ['사막전갈', '모래뱀', '거대지렁이'] },
            '신기루 오아시스': { level: { min: 18, max: 25 }, monsters: ['오아시스님프', '물정령', '사막도적'] },
            '고대 유적지대': { level: { min: 22, max: 30 }, monsters: ['미라', '스핑크스', '모래골렘'] },
            '불꽃 협곡': { level: { min: 28, max: 35 }, monsters: ['화염정령', '피닉스새끼', '용암골렘'] }
        }
    },

    '얼어붙은 북방': {
        level: { min: 20, max: 40 },
        type: 'frozen',
        description: "영원한 눈과 얼음으로 뒤덮인 극한의 땅. 강인한 전사들의 고향.",
        ambiance: "매서운 바람과 눈보라, 멀리서 들리는 늑대의 울음소리.",
        monsters: ['눈늑대', '서리거인', '얼음정령', '북극곰', '설인', '아이스드래곤새끼', '프로스트위치', '냉기마법사', '눈표범', '빙하골렘'],
        bosses: ['서리 군주 킬라한', '빙룡 프로스트바인'],
        dungeons: ['얼음 동굴', '서리 거인의 성채', '빙하 미궁', '눈폭풍 요새'],
        npcs: ['바이킹 족장 올라프', '얼음 마녀 프리지아', '모피 상인 이반'],
        resources: ['영원의 얼음', '서리꽃', '미스릴광석', '빙룡의 비늘'],
        subZones: {
            '눈덮인 숲': { level: { min: 20, max: 25 }, monsters: ['눈늑대', '눈표범', '북극곰'] },
            '서리 평원': { level: { min: 23, max: 30 }, monsters: ['서리거인', '설인', '얼음정령'] },
            '빙하 계곡': { level: { min: 28, max: 35 }, monsters: ['빙하골렘', '프로스트위치', '냉기마법사'] },
            '용의 봉우리': { level: { min: 33, max: 40 }, monsters: ['아이스드래곤새끼', '빙룡수호자', '고대얼음골렘'] }
        }
    },

    '황혼의 습지': {
        level: { min: 18, max: 38 },
        type: 'swamp',
        description: "항상 안개가 자욱한 음침한 습지. 저주받은 자들과 언데드가 배회한다.",
        ambiance: "개구리 울음과 안개 속에서 들리는 신음 소리.",
        monsters: ['습지좀비', '독늪괴물', '거대두꺼비', '늪지요정', '부패골렘', '흡혈거머리', '안개유령', '습지트롤', '독안개정령', '저주받은사제'],
        bosses: ['늪의 여왕 보그비치', '타락한 성직자 말디온'],
        dungeons: ['침몰한 성당', '독의 소굴', '잊혀진 묘지', '저주받은 수도원'],
        npcs: ['늪지 은둔자 모르두스', '해독사 리아나', '유령 사냥꾼 반 헬싱'],
        resources: ['독버섯', '늪지이끼', '저주받은 뼈', '유령의 정수'],
        subZones: {
            '안개 해안': { level: { min: 18, max: 23 }, monsters: ['습지좀비', '흡혈거머리', '거대두꺼비'] },
            '독의 늪': { level: { min: 21, max: 28 }, monsters: ['독늪괴물', '독안개정령', '독두꺼비'] },
            '망자의 숲': { level: { min: 26, max: 33 }, monsters: ['안개유령', '해골전사', '저주받은사제'] },
            '타락한 제단': { level: { min: 30, max: 38 }, monsters: ['부패골렘', '암흑의신도', '타락한성기사'] }
        }
    },

    // ========================================
    // 고급 지역 (레벨 35-55)
    // ========================================
    '천공의 산맥': {
        level: { min: 35, max: 55 },
        type: 'mountain',
        description: "구름 위로 솟은 거대한 산맥. 드래곤과 천상의 존재들이 산다.",
        ambiance: "차가운 바람과 독수리의 울음, 멀리서 들리는 용의 포효.",
        monsters: ['산악거인', '바위골렘', '그리폰', '천둥새', '구름정령', '산악오크', '돌하피', '번개정령', '강철골렘', '윈드드래곤새끼'],
        bosses: ['산의 왕 그라니트', '폭풍의 용 스톰레이지'],
        dungeons: ['구름 위의 성', '드래곤의 둥지', '바람의 신전', '산악왕의 보좌'],
        npcs: ['은둔 현자 구루', '독수리 조련사 에어하트', '드래곤 연구가 드라코'],
        resources: ['구름꽃', '천둥돌', '드래곤의 뼈', '하늘수정'],
        subZones: {
            '낮은 산기슭': { level: { min: 35, max: 40 }, monsters: ['산악오크', '바위골렘', '산악거인'] },
            '절벽 길': { level: { min: 38, max: 45 }, monsters: ['돌하피', '그리폰', '절벽거미'] },
            '구름 지대': { level: { min: 43, max: 50 }, monsters: ['구름정령', '천둥새', '번개정령'] },
            '용의 영역': { level: { min: 48, max: 55 }, monsters: ['윈드드래곤새끼', '용기사', '고대용'] }
        }
    },

    '엘프의 숲 - 실버문': {
        level: { min: 30, max: 50 },
        type: 'elven',
        description: "고대 엘프들의 신성한 숲. 마법으로 보호받는 아름다운 땅.",
        ambiance: "새들의 노래와 은은한 마법의 빛, 오래된 나무들의 속삭임.",
        monsters: ['타락한요정', '거대거미', '숲의망령', '마법인형', '다크엘프척후', '독나무', '꿈먹는자', '환영사냥꾼', '저주받은드루이드', '그림자사슴'],
        bosses: ['타락한 대드루이드 말라스', '거미 여왕 아라크니아'],
        dungeons: ['잊혀진 엘프 유적', '거미 둥지 깊은 곳', '어둠에 물든 숲', '꿈의 미궁'],
        npcs: ['엘프 여왕 아리엘', '드루이드 장로 셀레네', '궁수 훈련관 레고라스'],
        resources: ['세계수 가지', '엘프 허브', '달빛꽃', '영혼의 나무'],
        subZones: {
            '달빛 숲': { level: { min: 30, max: 35 }, monsters: ['타락한요정', '그림자사슴', '마법인형'] },
            '고대 수목지대': { level: { min: 33, max: 40 }, monsters: ['독나무', '거대거미', '저주받은드루이드'] },
            '어둠의 경계': { level: { min: 38, max: 45 }, monsters: ['다크엘프척후', '다크엘프마법사', '암흑추적자'] },
            '영혼의 안식처': { level: { min: 43, max: 50 }, monsters: ['숲의망령', '꿈먹는자', '환영사냥꾼'] }
        }
    },

    '드워프 왕국 - 철망치': {
        level: { min: 32, max: 52 },
        type: 'underground',
        description: "산 아래 깊숙이 파인 드워프들의 거대한 지하 도시.",
        ambiance: "망치 소리와 광산의 메아리, 용광로의 불꽃 소리.",
        monsters: ['광산고블린', '동굴트롤', '용암골렘', '지하거미', '다크드워프', '마그마정령', '광산유령', '강철구조물', '지하드래곤새끼', '심층악마'],
        bosses: ['배신자 왕 드루가르', '용암의 군주 이그노스'],
        dungeons: ['버려진 광산', '고대 제련소', '드워프 왕의 무덤', '심층 균열'],
        npcs: ['드워프 왕 토린', '대장장이 장로 브론다', '광산 감독관 그림'],
        resources: ['아다만타이트', '드워프강철', '용광로의 불꽃', '지하수정'],
        subZones: {
            '외곽 광산': { level: { min: 32, max: 38 }, monsters: ['광산고블린', '동굴트롤', '지하거미'] },
            '제련 구역': { level: { min: 36, max: 43 }, monsters: ['용암골렘', '마그마정령', '강철구조물'] },
            '고대 터널': { level: { min: 40, max: 47 }, monsters: ['다크드워프', '광산유령', '고대수호자'] },
            '심층 지대': { level: { min: 45, max: 52 }, monsters: ['지하드래곤새끼', '심층악마', '공허의그림자'] }
        }
    },

    // ========================================
    // 엘리트 지역 (레벨 50-70)
    // ========================================
    '고대의 폐허': {
        level: { min: 50, max: 70 },
        type: 'ruins',
        description: "태초 전쟁에서 파괴된 고대 문명의 잔해. 강력한 마법이 잔존한다.",
        ambiance: "시간이 멈춘 듯한 정적과 고대 마법의 웅웅거림.",
        monsters: ['고대수호자', '시간의망령', '마법구조물', '공허감시자', '차원경비병', '시공틈새괴물', '고대용병', '마법사의잔해', '영원의수호자', '차원방랑자'],
        bosses: ['시간의 수호자 크로노스', '공허의 관문지기 보이드워커'],
        dungeons: ['시간의 성소', '공허의 관문', '고대 마법 도서관', '차원의 틈'],
        npcs: ['시간의 현자 에온', '차원 연구자 디멘시아', '고대 기록자 아키비스트'],
        resources: ['시간의 모래', '공허의 정수', '고대 마법석', '차원의 파편'],
        subZones: {
            '무너진 도시': { level: { min: 50, max: 55 }, monsters: ['고대수호자', '마법구조물', '고대용병'] },
            '마법사의 탑': { level: { min: 53, max: 60 }, monsters: ['마법사의잔해', '마법구조물', '영원의수호자'] },
            '시간의 정원': { level: { min: 58, max: 65 }, monsters: ['시간의망령', '시공틈새괴물', '차원경비병'] },
            '공허의 경계': { level: { min: 63, max: 70 }, monsters: ['공허감시자', '차원방랑자', '공허의군단병'] }
        }
    },

    '심연의 균열': {
        level: { min: 55, max: 70 },
        type: 'abyss',
        description: "공허로 통하는 균열. 말라카이의 군대가 쏟아져 나오는 곳.",
        ambiance: "불안한 진동과 공허에서 들려오는 속삭임.",
        monsters: ['공허전사', '심연마법사', '그림자암살자', '공허수호자', '암흑기사', '타락한천사', '공허비스트', '차원침입자', '공허의눈', '공허군단장'],
        bosses: ['공허의 장군 보이드로드', '타락한 대천사 아바돈'],
        dungeons: ['공허의 심장', '타락의 성채', '영혼 감옥', '말라카이의 옥좌'],
        npcs: ['봉인 수호자 세라핌', '타락에서 돌아온 자 리뎀션', '공허 연구자 니힐룸'],
        resources: ['공허의 핵', '타락한 영혼', '심연의 수정', '암흑의 정수'],
        subZones: {
            '균열 입구': { level: { min: 55, max: 60 }, monsters: ['공허전사', '그림자암살자', '암흑기사'] },
            '심연의 다리': { level: { min: 58, max: 63 }, monsters: ['공허수호자', '심연마법사', '차원침입자'] },
            '타락의 영역': { level: { min: 61, max: 67 }, monsters: ['타락한천사', '공허비스트', '공허의눈'] },
            '군주의 문턱': { level: { min: 65, max: 70 }, monsters: ['공허군단장', '말라카이의수호자', '심연의군주'] }
        }
    },

    // ========================================
    // 레이드 지역 (레벨 60+)
    // ========================================
    '천상계 - 빛의 성소': {
        level: { min: 60, max: 80 },
        type: 'celestial',
        description: "생명의 여신 엘리아나가 잠든 신성한 영역.",
        ambiance: "신성한 빛과 천사들의 노래소리.",
        monsters: ['빛의수호자', '성스러운골렘', '천사', '대천사', '빛의정령', '신성한짐승', '빛의기사', '성스러운불꽃', '엘리아나의시종', '빛의화신'],
        bosses: ['대천사장 미카엘', '생명의 여신 엘리아나(각성전)'],
        dungeons: ['빛의 시험장', '신성한 정원', '여신의 침소'],
        npcs: ['천사장 가브리엘', '신성한 치유사 라파엘'],
        resources: ['신성한 빛', '천사의 깃털', '생명의 물', '축복의 정수'],
        isRaid: true,
        minPlayers: 10
    },

    '원소계 - 불꽃의 제단': {
        level: { min: 62, max: 80 },
        type: 'elemental',
        description: "불의 신 이그니스가 잠든 화염의 영역.",
        ambiance: "끊임없는 불꽃과 용암의 울음.",
        monsters: ['화염수호자', '용암정령', '불의기사', '화염마법사', '용암골렘', '피닉스', '불꽃드래곤', '화염악마', '이그니스의시종', '화염의화신'],
        bosses: ['화염의 군주 라그나로스', '불의 신 이그니스(각성전)'],
        dungeons: ['화염의 시험장', '용암의 심장', '신의 불꽃'],
        npcs: ['화염의 현자 프로메테우스', '불꽃 주술사 이프리트'],
        resources: ['영원한 불꽃', '용암의 핵', '불의 정수', '태양의 파편'],
        isRaid: true,
        minPlayers: 10
    }
};

// 던전 상세 정보
var DungeonData = {
    // 초급 던전 (5인)
    '고블린 동굴': {
        level: { min: 5, max: 15 },
        players: { min: 1, max: 5 },
        type: 'normal',
        zone: '묘냥의 숲',
        description: "고블린들이 점령한 어두운 동굴. 그들이 약탈한 보물이 숨겨져 있다.",
        bosses: [
            { name: '고블린 두목 그릭스', hp: 2000, att: 50, def: 20, exp: 500, gold: 200 },
            { name: '고블린 주술사', hp: 1500, att: 70, def: 15, exp: 400, gold: 150 }
        ],
        rewards: ['고블린의 보물상자', '녹슨 단검', '가죽 조각', '약탈품 가방'],
        specialDrop: { item: '고블린왕의 단검', chance: 0.05 }
    },

    '도적 은신처': {
        level: { min: 10, max: 25 },
        players: { min: 1, max: 5 },
        type: 'normal',
        zone: '초원 평야',
        description: "도적단이 숨어있는 비밀 아지트. 현상금이 걸린 범죄자들이 있다.",
        bosses: [
            { name: '도적 부두목 스네이크', hp: 3500, att: 80, def: 30, exp: 800, gold: 400 },
            { name: '도적왕 카일', hp: 5000, att: 100, def: 40, exp: 1200, gold: 600 }
        ],
        rewards: ['도적의 전리품', '독묻은 단검', '은화 주머니', '도적의 망토'],
        specialDrop: { item: '암살자의 단검', chance: 0.05 }
    },

    // 중급 던전 (5-10인)
    '파라오의 무덤': {
        level: { min: 20, max: 35 },
        players: { min: 5, max: 10 },
        type: 'heroic',
        zone: '불타는 사막',
        description: "고대 파라오가 잠든 거대한 피라미드. 수많은 함정과 저주가 기다린다.",
        bosses: [
            { name: '미라 장군 세크메트', hp: 15000, att: 150, def: 80, exp: 3000, gold: 1500 },
            { name: '스핑크스 수호자', hp: 20000, att: 180, def: 100, exp: 4000, gold: 2000 },
            { name: '파라오 카무세스', hp: 35000, att: 250, def: 150, exp: 8000, gold: 5000 }
        ],
        rewards: ['파라오의 보물', '미라의 붕대', '태양의 부적', '황금 스카라브'],
        specialDrop: { item: '파라오의 지팡이', chance: 0.03 }
    },

    '서리 거인의 성채': {
        level: { min: 25, max: 40 },
        players: { min: 5, max: 10 },
        type: 'heroic',
        zone: '얼어붙은 북방',
        description: "서리 거인들이 지배하는 얼음 성채. 내부는 끔찍하게 춥다.",
        bosses: [
            { name: '서리 거인 대장', hp: 25000, att: 200, def: 120, exp: 5000, gold: 2500 },
            { name: '얼음 마녀 프리지아', hp: 20000, att: 250, def: 80, exp: 5500, gold: 2800 },
            { name: '서리 군주 킬라한', hp: 50000, att: 300, def: 180, exp: 12000, gold: 6000 }
        ],
        rewards: ['서리 거인의 보물', '영원의 얼음', '프리지아의 지팡이', '서리 망토'],
        specialDrop: { item: '킬라한의 전투도끼', chance: 0.03 }
    },

    // 고급 던전 (10-20인 레이드)
    '공허의 심장': {
        level: { min: 60, max: 70 },
        players: { min: 10, max: 20 },
        type: 'raid',
        zone: '심연의 균열',
        description: "공허의 중심부. 말라카이의 힘이 가장 강한 곳이다.",
        bosses: [
            { name: '공허의 장군 보이드로드', hp: 500000, att: 800, def: 400, exp: 50000, gold: 25000 },
            { name: '타락한 대천사 아바돈', hp: 750000, att: 1000, def: 500, exp: 75000, gold: 40000 },
            { name: '공허의 군주 말라카이 (1단계)', hp: 1500000, att: 1500, def: 700, exp: 150000, gold: 100000 }
        ],
        rewards: ['공허의 보물함', '타락한 천사의 날개', '공허의 핵', '암흑의 왕관'],
        specialDrop: { item: '말라카이의 검', chance: 0.01 }
    },

    '신들의 시험장': {
        level: { min: 65, max: 80 },
        players: { min: 20, max: 40 },
        type: 'mythic',
        zone: '천상계 - 빛의 성소',
        description: "다섯 신의 축복을 받기 위한 최후의 시험. 세계 최강만이 도전할 수 있다.",
        bosses: [
            { name: '불의 화신 이그니스', hp: 2000000, att: 2000, def: 800, exp: 200000, gold: 100000 },
            { name: '물의 화신 아쿠아리온', hp: 2000000, att: 1800, def: 1000, exp: 200000, gold: 100000 },
            { name: '바람의 화신 제피로스', hp: 2000000, att: 2200, def: 600, exp: 200000, gold: 100000 },
            { name: '대지의 화신 테라', hp: 2500000, att: 1500, def: 1500, exp: 200000, gold: 100000 },
            { name: '생명의 여신 엘리아나', hp: 3000000, att: 2500, def: 1200, exp: 500000, gold: 250000 }
        ],
        rewards: ['신의 축복', '원소의 정수', '천상의 장비함', '신성한 유물'],
        specialDrop: { item: '창조의 검', chance: 0.005 }
    }
};

// ========================================
// 지역/던전 대량 확장 (자동 생성)
// ========================================

(function() {
    function addZone(name, data) {
        if (!ZoneData[name]) {
            ZoneData[name] = data;
        }
    }
    function addDungeon(name, data) {
        if (!DungeonData[name]) {
            DungeonData[name] = data;
        }
    }

    var extraZones = {
        '황혼의 성채': {
            level: { min: 45, max: 60 },
            type: 'twilight',
            description: "빛과 어둠이 교차하는 요새. 황혼 수호단의 본거지.",
            ambiance: "은은한 빛과 그림자가 엇갈린다.",
            monsters: ['황혼기사', '황혼마법사', '그림자추적자', '빛의정령', '암흑정령'],
            bosses: ['황혼의 기사단장', '황혼의 성주'],
            dungeons: ['황혼의 감옥', '빛의 회랑'],
            npcs: ['황혼 기사 라비르', '별빛 현자 아스트리드'],
            resources: ['황혼의 정수', '별빛 광석', '고대 마법석'],
            subZones: {
                '황혼의 전정': { level: { min: 45, max: 50 }, monsters: ['황혼기사', '빛의정령'] },
                '그림자 회랑': { level: { min: 50, max: 55 }, monsters: ['그림자추적자', '암흑정령'] },
                '성주의 홀': { level: { min: 55, max: 60 }, monsters: ['황혼마법사', '황혼수호자'] }
            }
        },
        '별빛 초원': {
            level: { min: 25, max: 40 },
            type: 'starlight',
            description: "밤이 되면 별빛이 내려앉는 초원.",
            ambiance: "밤하늘의 별들이 풀 위에 내려앉는다.",
            monsters: ['별빛토끼', '은하늑대', '별빛정령', '유성골렘'],
            bosses: ['별의 수호자 리라', '유성의 포식자'],
            dungeons: ['별빛 동굴', '유성 낙하 지대'],
            npcs: ['별빛 현자 아스트리드'],
            resources: ['별의 파편', '빛나는 풀', '은하 수정'],
            subZones: {
                '은하 들판': { level: { min: 25, max: 30 }, monsters: ['별빛토끼', '별빛정령'] },
                '유성 분지': { level: { min: 30, max: 35 }, monsters: ['유성골렘', '은하늑대'] },
                '별의 샘': { level: { min: 35, max: 40 }, monsters: ['별의 수호자', '빛의정령'] }
            }
        },
        '폭풍의 고원': {
            level: { min: 30, max: 50 },
            type: 'storm',
            description: "끊임없는 폭풍이 몰아치는 고원.",
            ambiance: "천둥과 번개가 쉬지 않고 내리친다.",
            monsters: ['폭풍정령', '번개골렘', '폭풍독수리', '전격야수'],
            bosses: ['폭풍의 군주 템페스트', '번개의 왕자'],
            dungeons: ['번개의 심연', '폭풍의 탑'],
            npcs: ['폭풍 연구가 테온'],
            resources: ['번개의 정수', '폭풍석', '전격 수정'],
            subZones: {
                '천둥 벌판': { level: { min: 30, max: 35 }, monsters: ['폭풍정령', '전격야수'] },
                '번개 절벽': { level: { min: 35, max: 42 }, monsters: ['번개골렘', '폭풍독수리'] },
                '폭풍의 심장': { level: { min: 42, max: 50 }, monsters: ['폭풍의 수호자', '폭풍정령'] }
            }
        },
        '심연의 해안': {
            level: { min: 55, max: 70 },
            type: 'abyss',
            description: "심연의 균열이 해안으로 퍼진 곳.",
            ambiance: "어둠의 파도와 속삭임이 들린다.",
            monsters: ['공허전사', '심연마법사', '공허비스트', '암흑기사'],
            bosses: ['심연의 감시자', '공허의 사도'],
            dungeons: ['심연의 등대', '공허의 항구'],
            npcs: ['심연 감시자 카이로'],
            resources: ['공허의 핵', '심연의 수정', '암흑의 정수'],
            subZones: {
                '검은 해변': { level: { min: 55, max: 60 }, monsters: ['공허전사', '공허비스트'] },
                '공허 절벽': { level: { min: 60, max: 65 }, monsters: ['심연마법사', '암흑기사'] },
                '심연 등대': { level: { min: 65, max: 70 }, monsters: ['심연의 감시자', '공허의 사도'] }
            }
        }
    };

    for (var z in extraZones) {
        addZone(z, extraZones[z]);
    }

    var extraDungeons = {
        '별빛 동굴': {
            level: { min: 25, max: 40 },
            players: { min: 1, max: 4 },
            type: 'field',
            zone: '별빛 초원',
            description: "별빛이 내려앉은 동굴.",
            bosses: [
                { name: '별빛 수호자 리라', hp: 120000, att: 350, def: 180, exp: 12000, gold: 6000 }
            ],
            rewards: ['별빛 보석함', '별의 파편'],
            specialDrop: { item: '별빛 지팡이', chance: 0.02 }
        },
        '폭풍의 탑': {
            level: { min: 35, max: 50 },
            players: { min: 2, max: 6 },
            type: 'elite',
            zone: '폭풍의 고원',
            description: "폭풍 속에서 솟아오른 탑.",
            bosses: [
                { name: '폭풍의 군주 템페스트', hp: 200000, att: 500, def: 240, exp: 20000, gold: 9000 }
            ],
            rewards: ['폭풍의 보물함', '번개의 정수'],
            specialDrop: { item: '번개의 검', chance: 0.015 }
        },
        '황혼의 감옥': {
            level: { min: 45, max: 60 },
            players: { min: 4, max: 10 },
            type: 'elite',
            zone: '황혼의 성채',
            description: "황혼의 죄인이 갇힌 감옥.",
            bosses: [
                { name: '황혼의 성주', hp: 350000, att: 700, def: 320, exp: 35000, gold: 15000 }
            ],
            rewards: ['황혼의 보물함', '황혼의 정수'],
            specialDrop: { item: '황혼의 검', chance: 0.01 }
        },
        '심연의 등대': {
            level: { min: 60, max: 75 },
            players: { min: 6, max: 12 },
            type: 'raid',
            zone: '심연의 해안',
            description: "심연의 기운을 막아내는 최후의 등대.",
            bosses: [
                { name: '공허의 사도', hp: 600000, att: 1100, def: 500, exp: 70000, gold: 30000 }
            ],
            rewards: ['심연의 보물함', '공허의 정수'],
            specialDrop: { item: '공허의 왕관', chance: 0.005 }
        }
    };

    for (var d in extraDungeons) {
        addDungeon(d, extraDungeons[d]);
    }
})();

// Export
if (typeof module !== 'undefined') {
    module.exports = { ZoneData: ZoneData, DungeonData: DungeonData };
}
function getItemMaxDurability(itemName, slotType) {
    var item = GameData.ItemDatabase && GameData.ItemDatabase[itemName];
    var base = 80;
    if (item && item.level) base += item.level * 2;
    if (slotType === 'weapon') base += 20;
    if (slotType === 'armor') base += 30;
    if (slotType === 'helmet') base += 18;
    if (slotType === 'gloves') base += 15;
    if (slotType === 'boots') base += 15;
    if (slotType === 'shield') base += 15;
    return Math.min(300, Math.max(50, base));
}

function ensureSlotDurability(slot, itemName, slotType) {
    if (!slot || !itemName) return;
    if (!slot.maxDurability) slot.maxDurability = getItemMaxDurability(itemName, slotType);
    if (slot.durability === undefined || slot.durability === null) slot.durability = slot.maxDurability;
    if (slot.durability > slot.maxDurability) slot.durability = slot.maxDurability;
}

function applyDurabilityLoss(p, wLoss, aLoss, sLoss) {
    var notes = [];
    if (p.equipment.weapon && p.equipment.weapon.name) {
        ensureSlotDurability(p.equipment.weapon, p.equipment.weapon.name, 'weapon');
        p.equipment.weapon.durability = Math.max(0, p.equipment.weapon.durability - (wLoss || 0));
        if (p.equipment.weapon.durability === 0) notes.push('무기 파손');
    }
    if (p.equipment.armor && p.equipment.armor.name) {
        ensureSlotDurability(p.equipment.armor, p.equipment.armor.name, 'armor');
        p.equipment.armor.durability = Math.max(0, p.equipment.armor.durability - (aLoss || 0));
        if (p.equipment.armor.durability === 0) notes.push('방어구 파손');
    }
    if (p.equipment.helmet && p.equipment.helmet.name) {
        ensureSlotDurability(p.equipment.helmet, p.equipment.helmet.name, 'helmet');
        p.equipment.helmet.durability = Math.max(0, p.equipment.helmet.durability - (aLoss || 0));
        if (p.equipment.helmet.durability === 0) notes.push('투구 파손');
    }
    if (p.equipment.gloves && p.equipment.gloves.name) {
        ensureSlotDurability(p.equipment.gloves, p.equipment.gloves.name, 'gloves');
        p.equipment.gloves.durability = Math.max(0, p.equipment.gloves.durability - (aLoss || 0));
        if (p.equipment.gloves.durability === 0) notes.push('장갑 파손');
    }
    if (p.equipment.boots && p.equipment.boots.name) {
        ensureSlotDurability(p.equipment.boots, p.equipment.boots.name, 'boots');
        p.equipment.boots.durability = Math.max(0, p.equipment.boots.durability - (aLoss || 0));
        if (p.equipment.boots.durability === 0) notes.push('신발 파손');
    }
    if (p.equipment.shield && p.equipment.shield.name) {
        ensureSlotDurability(p.equipment.shield, p.equipment.shield.name, 'shield');
        p.equipment.shield.durability = Math.max(0, p.equipment.shield.durability - (sLoss || 0));
        if (p.equipment.shield.durability === 0) notes.push('방패 파손');
    }
    return notes;
}


// ---------- gameData/monsters.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */


/**
 * 묘냥의 숲 - 대규모 몬스터 데이터베이스
 * 총 500+ 몬스터 정의
 */

var MonsterDatabase = {
    // ========================================
    // 일반 몬스터 (Common) - 레벨 1-20
    // ========================================
    
    // 슬라임 계열
    '슬라임': { name: '슬라임', hp: 30, att: 8, def: 2, exp: 10, gold: 5, level: 1, type: 'slime', items: ['젤리', '펫 알'] },
    '파란슬라임': { name: '파란슬라임', hp: 40, att: 10, def: 3, exp: 15, gold: 8, level: 2, type: 'slime', items: ['파란젤리', '마나젤리'] },
    '빨간슬라임': { name: '빨간슬라임', hp: 50, att: 15, def: 3, exp: 20, gold: 10, level: 3, type: 'slime', items: ['빨간젤리', '화염젤리'] },
    '황금슬라임': { name: '황금슬라임', hp: 60, att: 12, def: 5, exp: 50, gold: 100, level: 5, type: 'slime', rare: true, items: ['황금젤리', '행운의젤리', '황금조각'] },
    '킹슬라임': { name: '킹슬라임', hp: 500, att: 40, def: 15, exp: 200, gold: 150, level: 10, type: 'slime', elite: true, items: ['왕관젤리', '슬라임핵', '슬라임왕의정수'] },
    '독슬라임': { name: '독슬라임', hp: 45, att: 12, def: 2, exp: 18, gold: 9, level: 3, type: 'slime', items: ['독젤리', '해독젤리'] },
    '얼음슬라임': { name: '얼음슬라임', hp: 55, att: 14, def: 4, exp: 22, gold: 12, level: 4, type: 'slime', items: ['얼음젤리', '서리젤리'] },
    '용암슬라임': { name: '용암슬라임', hp: 80, att: 25, def: 5, exp: 35, gold: 20, level: 8, type: 'slime', items: ['용암젤리', '불꽃정수'] },
    '메탈슬라임': { name: '메탈슬라임', hp: 20, att: 5, def: 50, exp: 500, gold: 300, level: 15, type: 'slime', rare: true, items: ['메탈젤리', '금속조각', '희귀광석'] },
    '다크슬라임': { name: '다크슬라임', hp: 100, att: 30, def: 8, exp: 45, gold: 25, level: 12, type: 'slime', items: ['암흑젤리', '그림자정수'] },

    // 고블린 계열
    '고블린': { name: '고블린', hp: 70, att: 18, def: 6, exp: 25, gold: 20, level: 3, type: 'goblin', items: ['가죽 조각', '단검'] },
    '고블린전사': { name: '고블린전사', hp: 120, att: 30, def: 12, exp: 45, gold: 35, level: 6, type: 'goblin', items: ['녹슨검', '철조각', '고블린방패'] },
    '고블린궁수': { name: '고블린궁수', hp: 80, att: 35, def: 8, exp: 40, gold: 30, level: 5, type: 'goblin', items: ['낡은활', '나무화살', '사냥꾼장갑'] },
    '고블린주술사': { name: '고블린주술사', hp: 90, att: 40, def: 6, exp: 55, gold: 45, level: 7, type: 'goblin', items: ['마법지팡이', '주술서', '마나포션'] },
    '고블린두목': { name: '고블린두목', hp: 300, att: 55, def: 20, exp: 150, gold: 100, level: 10, type: 'goblin', elite: true, items: ['두목의검', '금화주머니', '고블린휘장'] },
    '고블린암살자': { name: '고블린암살자', hp: 100, att: 50, def: 10, exp: 60, gold: 50, level: 8, type: 'goblin', items: ['독단검', '연막탄', '암살자두건'] },
    '고블린약탈자': { name: '고블린약탈자', hp: 110, att: 45, def: 15, exp: 55, gold: 60, level: 8, type: 'goblin', items: ['약탈품', '잡동사니', '은화'] },
    '고블린폭탄병': { name: '고블린폭탄병', hp: 70, att: 60, def: 5, exp: 50, gold: 40, level: 7, type: 'goblin', items: ['폭탄', '화약', '도화선'] },
    '고블린기수': { name: '고블린기수', hp: 150, att: 40, def: 18, exp: 70, gold: 55, level: 9, type: 'goblin', items: ['늑대가죽', '기수창', '안장'] },
    '고블린왕': { name: '고블린왕', hp: 2000, att: 100, def: 50, exp: 800, gold: 500, level: 20, type: 'goblin', boss: true, items: ['고블린왕관', '왕의보물', '희귀무기상자'] },

    // 늑대/야수 계열
    '늑대': { name: '늑대', hp: 90, att: 22, def: 8, exp: 35, gold: 25, level: 5, type: 'beast', items: ['늑대 가죽', '펫 알', '날카로운이빨'] },
    '야생늑대': { name: '야생늑대', hp: 120, att: 30, def: 10, exp: 50, gold: 35, level: 7, type: 'beast', items: ['고급늑대가죽', '늑대발톱'] },
    '검은늑대': { name: '검은늑대', hp: 150, att: 38, def: 12, exp: 65, gold: 45, level: 9, type: 'beast', items: ['검은늑대가죽', '암흑발톱', '펫 알'] },
    '은빛늑대': { name: '은빛늑대', hp: 180, att: 45, def: 15, exp: 80, gold: 60, level: 11, type: 'beast', rare: true, items: ['은빛늑대가죽', '달빛발톱', '희귀펫 알'] },
    '늑대왕펜리르': { name: '늑대왕펜리르', hp: 3000, att: 150, def: 60, exp: 1500, gold: 800, level: 25, type: 'beast', boss: true, items: ['펜리르의송곳니', '전설의늑대가죽', '늑대왕의정수'] },
    '멧돼지': { name: '멧돼지', hp: 100, att: 25, def: 12, exp: 40, gold: 28, level: 6, type: 'beast', items: ['멧돼지 어금니', '돼지가죽', '고기'] },
    '거대멧돼지': { name: '거대멧돼지', hp: 200, att: 50, def: 25, exp: 100, gold: 70, level: 12, type: 'beast', elite: true, items: ['거대어금니', '두꺼운가죽', '상급고기'] },
    '곰': { name: '곰', hp: 180, att: 40, def: 20, exp: 80, gold: 55, level: 10, type: 'beast', items: ['곰가죽', '곰발톱', '꿀'] },
    '회색곰': { name: '회색곰', hp: 250, att: 55, def: 28, exp: 120, gold: 80, level: 14, type: 'beast', items: ['회색곰가죽', '강철발톱', '곰쓸개'] },
    '숲의수호자엔트': { name: '숲의수호자엔트', hp: 5000, att: 120, def: 80, exp: 2000, gold: 1000, level: 30, type: 'beast', boss: true, items: ['생명의나뭇가지', '엔트의심장', '자연의정수'] },

    // 언데드 계열
    '스켈레톤': { name: '스켈레톤', hp: 60, att: 20, def: 5, exp: 30, gold: 18, level: 4, type: 'undead', items: ['뼈조각', '낡은무기'] },
    '스켈레톤전사': { name: '스켈레톤전사', hp: 100, att: 35, def: 15, exp: 55, gold: 40, level: 8, type: 'undead', items: ['강화뼈', '녹슨갑옷조각', '해골투구'] },
    '스켈레톤궁수': { name: '스켈레톤궁수', hp: 80, att: 40, def: 10, exp: 50, gold: 35, level: 7, type: 'undead', items: ['뼈활', '뼈화살', '썩은천'] },
    '스켈레톤마법사': { name: '스켈레톤마법사', hp: 70, att: 50, def: 8, exp: 60, gold: 45, level: 9, type: 'undead', items: ['마력이깃든뼈', '저주의서', '암흑정수'] },
    '죽음의기사': { name: '죽음의기사', hp: 500, att: 100, def: 50, exp: 300, gold: 200, level: 20, type: 'undead', elite: true, items: ['저주받은검', '망자의갑옷', '죽음의정수'] },
    '좀비': { name: '좀비', hp: 80, att: 15, def: 3, exp: 25, gold: 15, level: 3, type: 'undead', items: ['썩은살점', '감염된피'] },
    '구울': { name: '구울', hp: 120, att: 30, def: 8, exp: 45, gold: 32, level: 7, type: 'undead', items: ['구울의발톱', '저주받은심장'] },
    '유령': { name: '유령', hp: 50, att: 35, def: 2, exp: 40, gold: 25, level: 6, type: 'undead', items: ['영혼의파편', '유령의천'] },
    '레이스': { name: '레이스', hp: 150, att: 60, def: 5, exp: 100, gold: 70, level: 15, type: 'undead', items: ['레이스의정수', '저주의반지', '암흑의망토'] },
    '리치': { name: '리치', hp: 800, att: 150, def: 40, exp: 500, gold: 350, level: 30, type: 'undead', elite: true, items: ['리치의지팡이', '영혼의보석', '금지된마법서'] },
    '데스나이트': { name: '데스나이트', hp: 3000, att: 200, def: 100, exp: 2500, gold: 1500, level: 40, type: 'undead', boss: true, items: ['죽음의검', '저주받은갑옷', '영혼의증표'] },

    // ========================================
    // 중급 몬스터 (Uncommon) - 레벨 20-40
    // ========================================

    // 오크 계열
    '오크': { name: '오크', hp: 200, att: 50, def: 25, exp: 100, gold: 70, level: 15, type: 'orc', items: ['오크의 송곳니', '조잡한무기'] },
    '오크전사': { name: '오크전사', hp: 300, att: 70, def: 35, exp: 150, gold: 100, level: 18, type: 'orc', items: ['오크전투도끼', '오크갑옷조각'] },
    '오크광전사': { name: '오크광전사', hp: 350, att: 90, def: 30, exp: 180, gold: 120, level: 20, type: 'orc', items: ['광기의부적', '피묻은도끼'] },
    '오크주술사': { name: '오크주술사', hp: 250, att: 80, def: 20, exp: 160, gold: 110, level: 19, type: 'orc', items: ['주술봉', '야만의토템'] },
    '오크대장': { name: '오크대장', hp: 800, att: 120, def: 60, exp: 400, gold: 300, level: 25, type: 'orc', elite: true, items: ['대장의도끼', '오크군기'] },
    '오크워로드': { name: '오크워로드', hp: 5000, att: 200, def: 100, exp: 3000, gold: 2000, level: 35, type: 'orc', boss: true, items: ['워로드의전투도끼', '정복자의갑옷', '피의깃발'] },

    // 트롤 계열
    '트롤': { name: '트롤', hp: 400, att: 80, def: 40, exp: 200, gold: 150, level: 22, type: 'troll', items: ['트롤가죽', '재생의피'] },
    '숲트롤': { name: '숲트롤', hp: 450, att: 90, def: 45, exp: 230, gold: 170, level: 24, type: 'troll', items: ['숲트롤가죽', '독의샘'] },
    '얼음트롤': { name: '얼음트롤', hp: 500, att: 100, def: 50, exp: 280, gold: 200, level: 28, type: 'troll', items: ['얼음트롤가죽', '서리의핵'] },
    '늪지트롤': { name: '늪지트롤', hp: 480, att: 95, def: 48, exp: 260, gold: 185, level: 26, type: 'troll', items: ['늪지트롤가죽', '독액'] },
    '트롤족장': { name: '트롤족장', hp: 2000, att: 180, def: 90, exp: 1200, gold: 800, level: 35, type: 'troll', elite: true, items: ['족장의곤봉', '재생의부적'] },
    '고대트롤킹': { name: '고대트롤킹', hp: 8000, att: 280, def: 140, exp: 5000, gold: 3500, level: 45, type: 'troll', boss: true, items: ['트롤왕의곤봉', '영원한재생의심장'] },

    // 거인 계열
    '산악거인': { name: '산악거인', hp: 600, att: 120, def: 60, exp: 350, gold: 250, level: 30, type: 'giant', items: ['거인의뼈', '바위조각'] },
    '서리거인': { name: '서리거인', hp: 700, att: 140, def: 70, exp: 420, gold: 300, level: 33, type: 'giant', items: ['서리거인의심장', '영원의얼음'] },
    '화염거인': { name: '화염거인', hp: 750, att: 160, def: 65, exp: 480, gold: 350, level: 36, type: 'giant', items: ['화염거인의핵', '용암조각'] },
    '폭풍거인': { name: '폭풍거인', hp: 680, att: 180, def: 55, exp: 450, gold: 320, level: 35, type: 'giant', items: ['번개의정수', '폭풍의조각'] },
    '타이탄': { name: '타이탄', hp: 15000, att: 400, def: 200, exp: 10000, gold: 7000, level: 55, type: 'giant', boss: true, items: ['타이탄의심장', '신들의무기조각', '고대의갑옷'] },

    // 드래곤 계열
    '드래곤새끼': { name: '드래곤새끼', hp: 300, att: 80, def: 40, exp: 250, gold: 200, level: 25, type: 'dragon', items: ['용의비늘', '용의이빨'] },
    '화염드래곤새끼': { name: '화염드래곤새끼', hp: 400, att: 100, def: 45, exp: 320, gold: 250, level: 28, type: 'dragon', items: ['화염용비늘', '불꽃의숨결'] },
    '얼음드래곤새끼': { name: '얼음드래곤새끼', hp: 380, att: 90, def: 50, exp: 300, gold: 230, level: 27, type: 'dragon', items: ['얼음용비늘', '서리의숨결'] },
    '독룡': { name: '독룡', hp: 450, att: 110, def: 40, exp: 380, gold: 280, level: 32, type: 'dragon', items: ['독용비늘', '맹독의숨결'] },
    '와이번': { name: '와이번', hp: 350, att: 95, def: 35, exp: 280, gold: 210, level: 26, type: 'dragon', items: ['와이번가죽', '날카로운발톱'] },
    '드레이크': { name: '드레이크', hp: 500, att: 130, def: 60, exp: 450, gold: 350, level: 35, type: 'dragon', items: ['드레이크비늘', '드레이크의심장'] },
    '고대용': { name: '고대용', hp: 20000, att: 500, def: 250, exp: 15000, gold: 10000, level: 60, type: 'dragon', boss: true, items: ['드래곤의 심장', '고대용의비늘', '전설의보물'] },
    '어비스드래곤': { name: '어비스드래곤', hp: 50000, att: 800, def: 400, exp: 30000, gold: 20000, level: 70, type: 'dragon', boss: true, items: ['드래곤의 심장', '어비스의 숨결', '찬란한 보물상자'] },

    // ========================================
    // 고급 몬스터 (Rare) - 레벨 40-60
    // ========================================

    // 악마 계열
    '임프': { name: '임프', hp: 200, att: 70, def: 20, exp: 180, gold: 120, level: 25, type: 'demon', items: ['악마의뿔', '지옥불꽃'] },
    '서큐버스': { name: '서큐버스', hp: 350, att: 120, def: 30, exp: 300, gold: 220, level: 32, type: 'demon', items: ['악마의날개', '유혹의정수'] },
    '헬하운드': { name: '헬하운드', hp: 400, att: 140, def: 45, exp: 380, gold: 280, level: 36, type: 'demon', items: ['지옥의가죽', '불꽃발톱'] },
    '악마기사': { name: '악마기사', hp: 600, att: 180, def: 80, exp: 550, gold: 400, level: 42, type: 'demon', items: ['악마철갑옷', '저주받은검'] },
    '발록': { name: '발록', hp: 5000, att: 350, def: 150, exp: 4000, gold: 3000, level: 55, type: 'demon', boss: true, items: ['발록의화염검', '악마군주의뿔', '지옥의정수'] },
    '악마군주': { name: '악마군주', hp: 30000, att: 600, def: 300, exp: 20000, gold: 15000, level: 65, type: 'demon', boss: true, items: ['군주의왕관', '지옥의심장', '전설무기조각'] },

    // 정령 계열
    '불정령': { name: '불정령', hp: 280, att: 100, def: 25, exp: 220, gold: 160, level: 28, type: 'elemental', items: ['불의정수', '타오르는심장'] },
    '물정령': { name: '물정령', hp: 300, att: 85, def: 35, exp: 200, gold: 150, level: 27, type: 'elemental', items: ['물의정수', '순수한물방울'] },
    '대지정령': { name: '대지정령', hp: 400, att: 90, def: 60, exp: 250, gold: 180, level: 30, type: 'elemental', items: ['대지의정수', '생명의돌'] },
    '바람정령': { name: '바람정령', hp: 250, att: 110, def: 20, exp: 210, gold: 155, level: 28, type: 'elemental', items: ['바람의정수', '폭풍의깃털'] },
    '번개정령': { name: '번개정령', hp: 320, att: 150, def: 25, exp: 300, gold: 220, level: 35, type: 'elemental', items: ['번개의정수', '전격의구슬'] },
    '용암정령': { name: '용암정령', hp: 450, att: 130, def: 50, exp: 350, gold: 260, level: 38, type: 'elemental', items: ['용암의핵', '녹아내린바위'] },
    '빙결정령': { name: '빙결정령', hp: 380, att: 120, def: 55, exp: 320, gold: 240, level: 36, type: 'elemental', items: ['빙결의핵', '영원의서리'] },
    '원소의왕': { name: '원소의왕', hp: 15000, att: 450, def: 200, exp: 12000, gold: 8000, level: 60, type: 'elemental', boss: true, items: ['원소의왕관', '융합된정수', '창조의조각'] },

    // 골렘 계열
    '석상골렘': { name: '석상골렘', hp: 500, att: 80, def: 80, exp: 280, gold: 200, level: 32, type: 'golem', items: ['마력의 돌', '골렘의 핵'] },
    '철골렘': { name: '철골렘', hp: 700, att: 100, def: 100, exp: 400, gold: 300, level: 38, type: 'golem', items: ['강철핵', '기계부품'] },
    '수정골렘': { name: '수정골렘', hp: 550, att: 120, def: 70, exp: 380, gold: 280, level: 36, type: 'golem', items: ['마법수정', '수정핵'] },
    '용암골렘': { name: '용암골렘', hp: 650, att: 140, def: 60, exp: 420, gold: 320, level: 40, type: 'golem', items: ['용암핵', '녹은금속'] },
    '빙하골렘': { name: '빙하골렘', hp: 600, att: 110, def: 90, exp: 390, gold: 290, level: 38, type: 'golem', items: ['빙하핵', '영원의얼음조각'] },
    '고대골렘': { name: '고대골렘', hp: 2000, att: 200, def: 150, exp: 1500, gold: 1000, level: 50, type: 'golem', elite: true, items: ['고대의핵', '시간의파편'] },
    '골렘타이탄': { name: '골렘타이탄', hp: 25000, att: 500, def: 350, exp: 18000, gold: 12000, level: 65, type: 'golem', boss: true, items: ['타이탄의핵', '창조의설계도', '고대기술의파편'] },

    // ========================================
    // 전설급 몬스터 (Legendary) - 레벨 60-80
    // ========================================

    // 공허 계열
    '공허전사': { name: '공허전사', hp: 800, att: 200, def: 100, exp: 800, gold: 600, level: 55, type: 'void', items: ['공허의파편', '암흑의철'] },
    '공허마법사': { name: '공허마법사', hp: 600, att: 280, def: 60, exp: 850, gold: 650, level: 57, type: 'void', items: ['공허의서', '암흑마력구슬'] },
    '공허감시자': { name: '공허감시자', hp: 1000, att: 250, def: 120, exp: 1000, gold: 750, level: 60, type: 'void', items: ['감시자의눈', '공허의시선'] },
    '공허수호자': { name: '공허수호자', hp: 1500, att: 300, def: 150, exp: 1500, gold: 1100, level: 63, type: 'void', elite: true, items: ['수호자의핵', '공허의갑옷조각'] },
    '심연의감시자': { name: '심연의감시자', hp: 3000, att: 200, def: 100, exp: 1000, gold: 1000, level: 60, type: 'void', boss: true, items: ['심연의 파편', '찬란한 보물상자'] },
    '혼돈의그림자': { name: '혼돈의그림자', hp: 5000, att: 250, def: 120, exp: 2000, gold: 2000, level: 65, type: 'void', boss: true, items: ['혼돈의 정수', '찬란한 보물상자'] },
    '공허의군주말라카이': { name: '공허의군주말라카이', hp: 100000, att: 1500, def: 700, exp: 100000, gold: 50000, level: 80, type: 'void', boss: true, items: ['말라카이의검', '공허의왕관', '창조의조각', '세계를삼키는암흑'] },

    // 천상 계열 (신의 시험)
    '빛의수호자': { name: '빛의수호자', hp: 1200, att: 220, def: 130, exp: 1200, gold: 900, level: 62, type: 'celestial', items: ['빛의파편', '신성한깃털'] },
    '천사': { name: '천사', hp: 1500, att: 280, def: 140, exp: 1500, gold: 1100, level: 65, type: 'celestial', items: ['천사의깃털', '축복의빛'] },
    '대천사': { name: '대천사', hp: 3000, att: 400, def: 200, exp: 3000, gold: 2000, level: 70, type: 'celestial', elite: true, items: ['대천사의날개', '신성의정수'] },
    '불의화신이그니스': { name: '불의화신이그니스', hp: 50000, att: 800, def: 350, exp: 40000, gold: 25000, level: 75, type: 'celestial', boss: true, items: ['이그니스의불꽃', '신의파편', '화염신의축복'] },
    '물의화신아쿠아리온': { name: '물의화신아쿠아리온', hp: 50000, att: 700, def: 400, exp: 40000, gold: 25000, level: 75, type: 'celestial', boss: true, items: ['아쿠아리온의눈물', '신의파편', '물의신의축복'] },
    '바람의화신제피로스': { name: '바람의화신제피로스', hp: 45000, att: 900, def: 300, exp: 40000, gold: 25000, level: 75, type: 'celestial', boss: true, items: ['제피로스의숨결', '신의파편', '바람신의축복'] },
    '대지의화신테라': { name: '대지의화신테라', hp: 60000, att: 600, def: 500, exp: 40000, gold: 25000, level: 75, type: 'celestial', boss: true, items: ['테라의심장', '신의파편', '대지신의축복'] },
    '생명의여신엘리아나': { name: '생명의여신엘리아나', hp: 80000, att: 1000, def: 450, exp: 80000, gold: 50000, level: 80, type: 'celestial', boss: true, items: ['엘리아나의축복', '신의파편', '생명의정수', '창조의빛'] },

    // ========================================
    // 특수 몬스터 (희귀 조우)
    // ========================================
    '황금고블린': { name: '황금고블린', hp: 100, att: 10, def: 5, exp: 1000, gold: 5000, level: 10, type: 'special', rare: true, items: ['황금덩이', '행운의동전', '희귀보물상자'] },
    '무지개슬라임': { name: '무지개슬라임', hp: 150, att: 15, def: 10, exp: 2000, gold: 3000, level: 15, type: 'special', rare: true, items: ['무지개젤리', '프리즘', '희귀펫 알'] },
    '미믹': { name: '미믹', hp: 500, att: 150, def: 80, exp: 800, gold: 1500, level: 30, type: 'special', items: ['미믹의이빨', '숨겨진보물', '희귀무기상자'] },
    '보물고블린': { name: '보물고블린', hp: 200, att: 30, def: 20, exp: 500, gold: 10000, level: 25, type: 'special', rare: true, items: ['보물자루', '희귀광석', '전설무기조각'] },
    '세계수의정령': { name: '세계수의정령', hp: 10000, att: 300, def: 200, exp: 8000, gold: 5000, level: 50, type: 'special', boss: true, items: ['세계수의가지', '생명의정수', '자연의축복'] },
    '시간의수호자': { name: '시간의수호자', hp: 30000, att: 500, def: 250, exp: 20000, gold: 12000, level: 65, type: 'special', boss: true, items: ['시간의모래', '영원의시계', '차원의열쇠'] }
};

// ========================================
// 몬스터 대량 확장 (자동 생성)
// ========================================

(function() {
    function addMonster(key, data) {
        if (!MonsterDatabase[key]) {
            MonsterDatabase[key] = data;
        }
    }

    var variants = [
        { prefix: '강화된 ', hpMul: 1.4, attMul: 1.2, defMul: 1.2, expMul: 1.3, goldMul: 1.2, levelAdd: 2 },
        { prefix: '정예 ', hpMul: 1.8, attMul: 1.4, defMul: 1.4, expMul: 1.6, goldMul: 1.4, levelAdd: 4 },
        { prefix: '광폭한 ', hpMul: 1.6, attMul: 1.8, defMul: 1.0, expMul: 1.5, goldMul: 1.3, levelAdd: 3 },
        { prefix: '고대의 ', hpMul: 2.2, attMul: 1.6, defMul: 1.6, expMul: 2.2, goldMul: 2.0, levelAdd: 6 },
        { prefix: '어둠의 ', hpMul: 2.0, attMul: 1.7, defMul: 1.5, expMul: 2.0, goldMul: 1.8, levelAdd: 5 }
    ];

    var baseNames = Object.keys(MonsterDatabase);
    for (var i = 0; i < baseNames.length; i++) {
        var base = MonsterDatabase[baseNames[i]];
        if (base && !base.boss) {
            for (var v = 0; v < variants.length; v++) {
                var variant = variants[v];
                var newName = variant.prefix + base.name;
                addMonster(newName, {
                    name: newName,
                    hp: Math.floor(base.hp * variant.hpMul),
                    att: Math.floor(base.att * variant.attMul),
                    def: Math.floor(base.def * variant.defMul),
                    exp: Math.floor(base.exp * variant.expMul),
                    gold: Math.floor(base.gold * variant.goldMul),
                    level: Math.min(120, base.level + variant.levelAdd),
                    type: base.type,
                    items: base.items,
                    elite: base.elite || variant.prefix === '정예 '
                });
            }
        }
    }

    var bossVariants = [
        { prefix: '재림한 ', hpMul: 1.5, attMul: 1.3, defMul: 1.3, expMul: 1.4, goldMul: 1.4, levelAdd: 3 },
        { prefix: '각성한 ', hpMul: 2.0, attMul: 1.5, defMul: 1.5, expMul: 2.0, goldMul: 1.8, levelAdd: 6 }
    ];

    for (var b = 0; b < baseNames.length; b++) {
        var boss = MonsterDatabase[baseNames[b]];
        if (boss && boss.boss) {
            for (var bv = 0; bv < bossVariants.length; bv++) {
                var bvar = bossVariants[bv];
                var bName = bvar.prefix + boss.name;
                addMonster(bName, {
                    name: bName,
                    hp: Math.floor(boss.hp * bvar.hpMul),
                    att: Math.floor(boss.att * bvar.attMul),
                    def: Math.floor(boss.def * bvar.defMul),
                    exp: Math.floor(boss.exp * bvar.expMul),
                    gold: Math.floor(boss.gold * bvar.goldMul),
                    level: Math.min(120, boss.level + bvar.levelAdd),
                    type: boss.type,
                    items: boss.items,
                    boss: true
                });
            }
        }
    }
})();

// 몬스터 레벨별 분류 함수
function getMonstersByLevelRange(minLevel, maxLevel) {
    var result = [];
    for (var name in MonsterDatabase) {
        var monster = MonsterDatabase[name];
        if (monster.level >= minLevel && monster.level <= maxLevel) {
            result.push(monster);
        }
    }
    return result;
}

// 몬스터 타입별 분류 함수
function getMonstersByType(type) {
    var result = [];
    for (var name in MonsterDatabase) {
        var monster = MonsterDatabase[name];
        if (monster.type === type) {
            result.push(monster);
        }
    }
    return result;
}

// 보스 몬스터만 가져오기
function getBossMonsters() {
    var result = [];
    for (var name in MonsterDatabase) {
        var monster = MonsterDatabase[name];
        if (monster.boss) {
            result.push(monster);
        }
    }
    return result;
}

// Export
if (typeof module !== 'undefined') {
    module.exports = { 
        MonsterDatabase: MonsterDatabase,
        getMonstersByLevelRange: getMonstersByLevelRange,
        getMonstersByType: getMonstersByType,
        getBossMonsters: getBossMonsters
    };
}






// ---------- gameData/items_equipment.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */


/**
 * 묘냥의 숲 - 대규모 아이템 데이터베이스 Part 1
 * 무기, 방어구, 장신구
 */

var ItemDatabase = {
    // ========================================
    // 무기 (WEAPONS)
    // ========================================
    
    // --- 한손검 (One-Handed Swords) ---
    '녹슨검': { name: '녹슨검', type: 'weapon', subtype: 'sword', att: 5, price: 50, level: 1, description: '녹이 슨 낡은 검' },
    '철검': { name: '철검', type: 'weapon', subtype: 'sword', att: 12, price: 150, level: 3, description: '일반적인 철제 검' },
    '강철검': { name: '강철검', type: 'weapon', subtype: 'sword', att: 25, price: 500, level: 8, description: '단단한 강철로 만든 검' },
    '미스릴검': { name: '미스릴검', type: 'weapon', subtype: 'sword', att: 45, price: 2000, level: 15, description: '가볍고 날카로운 미스릴 검' },
    '아다만틴검': { name: '아다만틴검', type: 'weapon', subtype: 'sword', att: 70, price: 5000, level: 25, description: '아다만틴으로 제작된 명검' },
    '드래곤슬레이어': { name: '드래곤슬레이어', type: 'weapon', subtype: 'sword', att: 120, price: 20000, level: 40, description: '용을 베기 위해 만들어진 검', special: '용족에게 50% 추가 데미지' },
    '성검엑스칼리버': { name: '성검엑스칼리버', type: 'weapon', subtype: 'sword', att: 200, price: 100000, level: 60, legendary: true, description: '전설의 성검', special: '언데드에게 100% 추가 데미지' },
    '암흑검무라마사': { name: '암흑검무라마사', type: 'weapon', subtype: 'sword', att: 180, price: 80000, level: 55, legendary: true, description: '저주받은 암흑검', special: '공격시 체력 흡수 10%' },
    
    '숏소드': { name: '숏소드', type: 'weapon', subtype: 'sword', att: 8, price: 80, level: 2, description: '짧은 검' },
    '롱소드': { name: '롱소드', type: 'weapon', subtype: 'sword', att: 18, price: 300, level: 5, description: '긴 검' },
    '브로드소드': { name: '브로드소드', type: 'weapon', subtype: 'sword', att: 22, price: 400, level: 7, description: '폭이 넓은 검' },
    '바스타드소드': { name: '바스타드소드', type: 'weapon', subtype: 'sword', att: 35, price: 1200, level: 12, description: '한손 또는 양손으로 쓸 수 있는 검' },
    '불꽃검': { name: '불꽃검', type: 'weapon', subtype: 'sword', att: 55, price: 3500, level: 20, description: '불꽃이 깃든 검', special: '화염 데미지 +15' },
    '서리검': { name: '서리검', type: 'weapon', subtype: 'sword', att: 55, price: 3500, level: 20, description: '서리가 깃든 검', special: '빙결 데미지 +15' },
    '번개검': { name: '번개검', type: 'weapon', subtype: 'sword', att: 55, price: 3500, level: 20, description: '번개가 깃든 검', special: '전격 데미지 +15' },
    '사막곡검': { name: '사막곡검', type: 'weapon', subtype: 'sword', att: 48, price: 2600, level: 20, description: '사막 전사들이 쓰는 곡선형 검' },
    '드워프강철검': { name: '드워프강철검', type: 'weapon', subtype: 'sword', att: 95, price: 9000, level: 38, description: '드워프 강철로 벼린 검' },
    '시간의검': { name: '시간의검', type: 'weapon', subtype: 'sword', att: 130, price: 20000, level: 55, description: '시간의 잔향을 품은 검' },
    '성광의검': { name: '성광의검', type: 'weapon', subtype: 'sword', att: 160, price: 35000, level: 62, description: '성스러운 빛이 흐르는 검' },
    
    // --- 양손검 (Two-Handed Swords) ---
    '그레이트소드': { name: '그레이트소드', type: 'weapon', subtype: 'greatsword', att: 40, price: 1500, level: 10, description: '거대한 양손검' },
    '클레이모어': { name: '클레이모어', type: 'weapon', subtype: 'greatsword', att: 55, price: 2500, level: 15, description: '스코틀랜드식 대검' },
    '쯔바이핸더': { name: '쯔바이핸더', type: 'weapon', subtype: 'greatsword', att: 75, price: 4500, level: 22, description: '독일식 양손 대검' },
    '플램버그': { name: '플램버그', type: 'weapon', subtype: 'greatsword', att: 90, price: 7000, level: 30, description: '물결무늬 날을 가진 대검' },
    '참마도': { name: '참마도', type: 'weapon', subtype: 'greatsword', att: 130, price: 25000, level: 45, description: '마물을 베는 도검' },
    '타이탄블레이드': { name: '타이탄블레이드', type: 'weapon', subtype: 'greatsword', att: 180, price: 60000, level: 55, description: '거인의 검' },
    '신멸의대검': { name: '신멸의대검', type: 'weapon', subtype: 'greatsword', att: 250, price: 150000, level: 70, legendary: true, description: '신마저 베는 대검' },
    
    // --- 단검/대거 (Daggers) ---
    '낡은단검': { name: '낡은단검', type: 'weapon', subtype: 'dagger', att: 4, price: 30, level: 1, description: '낡은 단검' },
    '대거': { name: '대거', type: 'weapon', subtype: 'dagger', att: 8, price: 80, level: 2, description: '일반 단검' },
    '스틸레토': { name: '스틸레토', type: 'weapon', subtype: 'dagger', att: 15, price: 250, level: 6, description: '찌르기용 단검' },
    '암살단검': { name: '암살단검', type: 'weapon', subtype: 'dagger', att: 25, price: 800, level: 12, description: '암살자의 단검', special: '치명타 확률 +10%' },
    '늪지의단검': { name: '늪지의단검', type: 'weapon', subtype: 'dagger', att: 32, price: 1800, level: 22, description: '늪지의 독기가 스민 단검' },
    '독단검': { name: '독단검', type: 'weapon', subtype: 'dagger', att: 30, price: 1200, level: 15, description: '독이 묻은 단검', special: '독 데미지 +20' },
    '카타르': { name: '카타르', type: 'weapon', subtype: 'dagger', att: 35, price: 1500, level: 18, description: '인도식 단검' },
    '미스릴대거': { name: '미스릴대거', type: 'weapon', subtype: 'dagger', att: 50, price: 3000, level: 25, description: '미스릴 단검' },
    '그림자칼날': { name: '그림자칼날', type: 'weapon', subtype: 'dagger', att: 80, price: 12000, level: 40, description: '그림자가 깃든 단검', special: '치명타 데미지 +50%' },
    '악몽의비수': { name: '악몽의비수', type: 'weapon', subtype: 'dagger', att: 120, price: 45000, level: 55, legendary: true, description: '악몽을 불러오는 비수' },
    
    // --- 도끼 (Axes) ---
    '손도끼': { name: '손도끼', type: 'weapon', subtype: 'axe', att: 10, price: 100, level: 2, description: '작은 손도끼' },
    '전투도끼': { name: '전투도끼', type: 'weapon', subtype: 'axe', att: 22, price: 400, level: 7, description: '전투용 도끼' },
    '배틀액스': { name: '배틀액스', type: 'weapon', subtype: 'axe', att: 35, price: 1000, level: 12, description: '양날 전투도끼' },
    '워액스': { name: '워액스', type: 'weapon', subtype: 'axe', att: 50, price: 2000, level: 18, description: '전쟁용 대형 도끼' },
    '서리거인의망치': { name: '서리거인의망치', type: 'weapon', subtype: 'axe', att: 78, price: 4200, level: 26, description: '서리거인의 기운이 깃든 망치' },
    '피의도끼': { name: '피의도끼', type: 'weapon', subtype: 'axe', att: 70, price: 5000, level: 28, description: '피에 물든 도끼', special: '생명력 흡수 5%' },
    '버서커액스': { name: '버서커액스', type: 'weapon', subtype: 'axe', att: 100, price: 15000, level: 40, description: '광전사의 도끼', special: '체력이 낮을수록 공격력 증가' },
    '타이탄의도끼': { name: '타이탄의도끼', type: 'weapon', subtype: 'axe', att: 160, price: 50000, level: 55, legendary: true, description: '거인의 전설적인 도끼' },
    
    // --- 창/폴암 (Polearms) ---
    '나무창': { name: '나무창', type: 'weapon', subtype: 'polearm', att: 6, price: 40, level: 1, description: '나무로 만든 창' },
    '철창': { name: '철창', type: 'weapon', subtype: 'polearm', att: 14, price: 180, level: 4, description: '철제 창' },
    '파이크': { name: '파이크', type: 'weapon', subtype: 'polearm', att: 25, price: 500, level: 10, description: '긴 창' },
    '할버드': { name: '할버드', type: 'weapon', subtype: 'polearm', att: 45, price: 1800, level: 18, description: '도끼창' },
    '글레이브': { name: '글레이브', type: 'weapon', subtype: 'polearm', att: 60, price: 3500, level: 25, description: '월도' },
    '폭풍창': { name: '폭풍창', type: 'weapon', subtype: 'polearm', att: 85, price: 5200, level: 32, description: '폭풍의 기운을 품은 창' },
    '공허의창': { name: '공허의창', type: 'weapon', subtype: 'polearm', att: 140, price: 26000, level: 58, description: '공허의 기운이 응축된 창' },
    '드래곤랜스': { name: '드래곤랜스', type: 'weapon', subtype: 'polearm', att: 100, price: 18000, level: 42, description: '용을 찌르는 창' },
    '천공창': { name: '천공창', type: 'weapon', subtype: 'polearm', att: 150, price: 55000, level: 58, legendary: true, description: '하늘을 찌르는 창' },
    '신의창롱기누스': { name: '신의창롱기누스', type: 'weapon', subtype: 'polearm', att: 230, price: 200000, level: 75, legendary: true, description: '신을 찌른 전설의 창' },
    
    // --- 활 (Bows) ---
    '나무활': { name: '나무활', type: 'weapon', subtype: 'bow', att: 5, price: 50, level: 1, description: '나무로 만든 활' },
    '숏보우': { name: '숏보우', type: 'weapon', subtype: 'bow', att: 10, price: 120, level: 3, description: '짧은 활' },
    '롱보우': { name: '롱보우', type: 'weapon', subtype: 'bow', att: 20, price: 350, level: 8, description: '긴 활' },
    '컴파운드보우': { name: '컴파운드보우', type: 'weapon', subtype: 'bow', att: 35, price: 1000, level: 15, description: '복합궁' },
    '리커브보우': { name: '리커브보우', type: 'weapon', subtype: 'bow', att: 28, price: 700, level: 12, description: '반곡궁' },
    '엘프활': { name: '엘프활', type: 'weapon', subtype: 'bow', att: 55, price: 3000, level: 25, description: '엘프제 정밀활' },
    '실버문활': { name: '실버문활', type: 'weapon', subtype: 'bow', att: 75, price: 8500, level: 35, description: '실버문에서 제작된 정교한 활' },
    '윈드슈터': { name: '윈드슈터', type: 'weapon', subtype: 'bow', att: 80, price: 10000, level: 38, description: '바람을 담은 활' },
    '아폴로의활': { name: '아폴로의활', type: 'weapon', subtype: 'bow', att: 140, price: 50000, level: 55, legendary: true, description: '태양신의 활' },
    '별이내리는밤': { name: '별이내리는밤', type: 'weapon', subtype: 'bow', att: 200, price: 120000, level: 70, legendary: true, description: '별을 쏘는 전설의 활' },
    
    // --- 지팡이/완드 (Staves/Wands) ---
    '나무지팡이': { name: '나무지팡이', type: 'weapon', subtype: 'staff', att: 3, magic: 5, price: 50, level: 1, description: '나무 지팡이' },
    '마법사지팡이': { name: '마법사지팡이', type: 'weapon', subtype: 'staff', att: 5, magic: 15, price: 200, level: 5, description: '기본 마법 지팡이' },
    '오크스태프': { name: '오크스태프', type: 'weapon', subtype: 'staff', att: 8, magic: 25, price: 500, level: 10, description: '오크나무 지팡이' },
    '수정지팡이': { name: '수정지팡이', type: 'weapon', subtype: 'staff', att: 12, magic: 40, price: 1200, level: 18, description: '수정이 박힌 지팡이' },
    '화염의지팡이': { name: '화염의지팡이', type: 'weapon', subtype: 'staff', att: 15, magic: 60, price: 3000, level: 28, description: '화염 마법 강화 지팡이' },
    '빙결의지팡이': { name: '빙결의지팡이', type: 'weapon', subtype: 'staff', att: 15, magic: 60, price: 3000, level: 28, description: '빙결 마법 강화 지팡이' },
    '번개의지팡이': { name: '번개의지팡이', type: 'weapon', subtype: 'staff', att: 15, magic: 60, price: 3000, level: 28, description: '번개 마법 강화 지팡이' },
    '대마법사의지팡이': { name: '대마법사의지팡이', type: 'weapon', subtype: 'staff', att: 25, magic: 100, price: 15000, level: 45, description: '대마법사의 지팡이' },
    '고대마법지팡이': { name: '고대마법지팡이', type: 'weapon', subtype: 'staff', att: 30, magic: 130, price: 24000, level: 55, description: '고대 마법이 깃든 지팡이' },
    '성광지팡이': { name: '성광지팡이', type: 'weapon', subtype: 'staff', att: 35, magic: 160, price: 35000, level: 62, description: '성스러운 빛의 마법 지팡이' },
    '아케인스태프': { name: '아케인스태프', type: 'weapon', subtype: 'staff', att: 35, magic: 150, price: 40000, level: 58, description: '비전 마법 지팡이' },
    '세계수지팡이': { name: '세계수지팡이', type: 'weapon', subtype: 'staff', att: 50, magic: 220, price: 120000, level: 70, legendary: true, description: '세계수의 가지로 만든 지팡이' },
    '시간의지팡이': { name: '시간의지팡이', type: 'weapon', subtype: 'staff', att: 60, magic: 280, price: 200000, level: 80, legendary: true, description: '시간을 조작하는 지팡이' },
    
    // ========================================
    // 방어구 (ARMOR)
    // ========================================
    
    // --- 투구 (Helmets) ---
    '천모자': { name: '천모자', type: 'armor', subtype: 'helmet', def: 2, price: 30, level: 1, description: '천으로 만든 모자' },
    '가죽투구': { name: '가죽투구', type: 'armor', subtype: 'helmet', def: 5, price: 80, level: 3, description: '가죽 투구' },
    '철투구': { name: '철투구', type: 'armor', subtype: 'helmet', def: 10, price: 200, level: 8, description: '철제 투구' },
    '강철투구': { name: '강철투구', type: 'armor', subtype: 'helmet', def: 18, price: 500, level: 15, description: '강철 투구' },
    '미스릴투구': { name: '미스릴투구', type: 'armor', subtype: 'helmet', def: 30, price: 1500, level: 25, description: '미스릴 투구' },
    '기사투구': { name: '기사투구', type: 'armor', subtype: 'helmet', def: 25, price: 1000, level: 20, description: '기사의 투구' },
    '왕관투구': { name: '왕관투구', type: 'armor', subtype: 'helmet', def: 45, price: 5000, level: 38, description: '왕관 형태의 투구' },
    '용의투구': { name: '용의투구', type: 'armor', subtype: 'helmet', def: 60, price: 15000, level: 50, description: '용 비늘로 만든 투구' },
    '신성한투구': { name: '신성한투구', type: 'armor', subtype: 'helmet', def: 80, price: 40000, level: 65, legendary: true, description: '신의 가호가 깃든 투구' },
    
    // --- 갑옷/흉갑 (Body Armor) ---
    '천옷': { name: '천옷', type: 'armor', subtype: 'body', def: 3, price: 40, level: 1, description: '천으로 만든 옷' },
    '가죽갑옷': { name: '가죽갑옷', type: 'armor', subtype: 'body', def: 8, price: 120, level: 3, description: '가죽 갑옷' },
    '체인메일': { name: '체인메일', type: 'armor', subtype: 'body', def: 15, price: 350, level: 8, description: '사슬 갑옷' },
    '철갑옷': { name: '철갑옷', type: 'armor', subtype: 'body', def: 25, price: 800, level: 15, description: '철제 갑옷' },
    '강철갑옷': { name: '강철갑옷', type: 'armor', subtype: 'body', def: 40, price: 2000, level: 25, description: '강철 갑옷' },
    '빙설갑옷': { name: '빙설갑옷', type: 'armor', subtype: 'body', def: 46, price: 4200, level: 28, description: '빙설의 기운을 담은 갑옷' },
    '부패가죽갑옷': { name: '부패가죽갑옷', type: 'armor', subtype: 'body', def: 34, price: 2500, level: 22, description: '늪지의 기운이 스민 가죽갑옷' },
    '천공갑옷': { name: '천공갑옷', type: 'armor', subtype: 'body', def: 60, price: 8000, level: 40, description: '천공의 기운이 담긴 갑옷' },
    '드워프강철갑옷': { name: '드워프강철갑옷', type: 'armor', subtype: 'body', def: 70, price: 14000, level: 45, description: '드워프 강철로 제작된 갑옷' },
    '차원방어구': { name: '차원방어구', type: 'armor', subtype: 'body', def: 90, price: 26000, level: 55, description: '차원의 힘으로 강화된 방어구' },
    '용암갑옷': { name: '용암갑옷', type: 'armor', subtype: 'body', def: 95, price: 28000, level: 58, description: '용암의 열기를 견디는 갑옷' },
    '성역갑옷': { name: '성역갑옷', type: 'armor', subtype: 'body', def: 110, price: 36000, level: 62, description: '신성한 힘이 깃든 갑옷' },
    '플레이트아머': { name: '플레이트아머', type: 'armor', subtype: 'body', def: 55, price: 4000, level: 35, description: '판금 갑옷' },
    '미스릴갑옷': { name: '미스릴갑옷', type: 'armor', subtype: 'body', def: 75, price: 10000, level: 45, description: '미스릴 갑옷' },
    '용린갑옷': { name: '용린갑옷', type: 'armor', subtype: 'body', def: 100, price: 30000, level: 55, description: '용 비늘 갑옷' },
    '아다만틴갑옷': { name: '아다만틴갑옷', type: 'armor', subtype: 'body', def: 120, price: 50000, level: 65, description: '아다만틴 갑옷' },
    '신의갑옷': { name: '신의갑옷', type: 'armor', subtype: 'body', def: 180, price: 200000, level: 80, legendary: true, description: '신이 만든 갑옷' },
    
    // --- 로브 (Robes - 마법사용) ---
    '수련생로브': { name: '수련생로브', type: 'armor', subtype: 'robe', def: 2, magic: 5, price: 50, level: 1, description: '수련생 로브' },
    '마법사로브': { name: '마법사로브', type: 'armor', subtype: 'robe', def: 5, magic: 15, price: 200, level: 8, description: '마법사 로브' },
    '위자드로브': { name: '위자드로브', type: 'armor', subtype: 'robe', def: 10, magic: 30, price: 600, level: 18, description: '위자드 로브' },
    '오아시스로브': { name: '오아시스로브', type: 'armor', subtype: 'robe', def: 12, magic: 28, price: 2200, level: 22, description: '오아시스의 생명력이 깃든 로브' },
    '실버문로브': { name: '실버문로브', type: 'armor', subtype: 'robe', def: 16, magic: 45, price: 5200, level: 30, description: '실버문의 달빛이 스민 로브' },
    '심연로브': { name: '심연로브', type: 'armor', subtype: 'robe', def: 25, magic: 80, price: 22000, level: 55, description: '심연의 어둠이 스며든 로브' },
    '성광로브': { name: '성광로브', type: 'armor', subtype: 'robe', def: 28, magic: 95, price: 30000, level: 60, description: '성스러운 빛으로 강화된 로브' },
    '용암로브': { name: '용암로브', type: 'armor', subtype: 'robe', def: 24, magic: 90, price: 28000, level: 58, description: '용암의 열기를 머금은 로브' },
    '대마법사로브': { name: '대마법사로브', type: 'armor', subtype: 'robe', def: 18, magic: 55, price: 2500, level: 32, description: '대마법사 로브' },
    '아케인로브': { name: '아케인로브', type: 'armor', subtype: 'robe', def: 30, magic: 90, price: 10000, level: 50, description: '비전 로브' },
    '천상의로브': { name: '천상의로브', type: 'armor', subtype: 'robe', def: 45, magic: 140, price: 35000, level: 65, legendary: true, description: '천상의 기운이 담긴 로브' },
    
    // --- 장갑 (Gloves) ---
    '천장갑': { name: '천장갑', type: 'armor', subtype: 'gloves', def: 1, price: 20, level: 1, description: '천 장갑' },
    '가죽장갑': { name: '가죽장갑', type: 'armor', subtype: 'gloves', def: 3, price: 60, level: 3, description: '가죽 장갑' },
    '철건틀릿': { name: '철건틀릿', type: 'armor', subtype: 'gloves', def: 8, price: 180, level: 10, description: '철 건틀릿' },
    '강철건틀릿': { name: '강철건틀릿', type: 'armor', subtype: 'gloves', def: 15, price: 500, level: 20, description: '강철 건틀릿' },
    '미스릴건틀릿': { name: '미스릴건틀릿', type: 'armor', subtype: 'gloves', def: 25, price: 1500, level: 35, description: '미스릴 건틀릿' },
    '드래곤건틀릿': { name: '드래곤건틀릿', type: 'armor', subtype: 'gloves', def: 40, price: 8000, level: 50, description: '용 가죽 건틀릿' },
    '불멸의건틀릿': { name: '불멸의건틀릿', type: 'armor', subtype: 'gloves', def: 55, price: 25000, level: 65, legendary: true, description: '불멸의 기운이 담긴 건틀릿' },
    
    // --- 신발 (Boots) ---
    '천신발': { name: '천신발', type: 'armor', subtype: 'boots', def: 1, price: 25, level: 1, description: '천 신발' },
    '가죽부츠': { name: '가죽부츠', type: 'armor', subtype: 'boots', def: 4, price: 70, level: 3, description: '가죽 부츠' },
    '철부츠': { name: '철부츠', type: 'armor', subtype: 'boots', def: 10, price: 200, level: 10, description: '철 부츠' },
    '강철부츠': { name: '강철부츠', type: 'armor', subtype: 'boots', def: 18, price: 600, level: 20, description: '강철 부츠' },
    '미스릴부츠': { name: '미스릴부츠', type: 'armor', subtype: 'boots', def: 30, price: 1800, level: 35, description: '미스릴 부츠' },
    '신속의부츠': { name: '신속의부츠', type: 'armor', subtype: 'boots', def: 25, speed: 20, price: 3000, level: 30, description: '이동속도 증가 부츠' },
    '드래곤부츠': { name: '드래곤부츠', type: 'armor', subtype: 'boots', def: 45, price: 10000, level: 50, description: '용 가죽 부츠' },
    '천리마신발': { name: '천리마신발', type: 'armor', subtype: 'boots', def: 35, speed: 50, price: 20000, level: 55, legendary: true, description: '천리를 달리는 신발' },
    
    // --- 방패 (Shields) ---
    '나무방패': { name: '나무방패', type: 'armor', subtype: 'shield', def: 5, price: 60, level: 2, description: '나무 방패' },
    '철방패': { name: '철방패', type: 'armor', subtype: 'shield', def: 15, price: 250, level: 8, description: '철 방패' },
    '태양석방패': { name: '태양석방패', type: 'armor', subtype: 'shield', def: 28, price: 2600, level: 22, description: '태양석으로 강화된 방패' },
    '타워실드': { name: '타워실드', type: 'armor', subtype: 'shield', def: 30, price: 800, level: 18, description: '대형 방패' },
    '강철방패': { name: '강철방패', type: 'armor', subtype: 'shield', def: 40, price: 1800, level: 28, description: '강철 방패' },
    '서리수호방패': { name: '서리수호방패', type: 'armor', subtype: 'shield', def: 38, price: 3600, level: 30, description: '서리의 수호가 깃든 방패' },
    '용광로방패': { name: '용광로방패', type: 'armor', subtype: 'shield', def: 65, price: 12000, level: 42, description: '용광로의 열기를 담은 방패' },
    '차원방패': { name: '차원방패', type: 'armor', subtype: 'shield', def: 85, price: 24000, level: 55, description: '차원의 수호가 깃든 방패' },
    '암흑방패': { name: '암흑방패', type: 'armor', subtype: 'shield', def: 95, price: 26000, level: 58, description: '암흑의 정수가 스민 방패' },
    '성역방패': { name: '성역방패', type: 'armor', subtype: 'shield', def: 105, price: 34000, level: 62, description: '성역의 빛으로 강화된 방패' },
    '용암방패': { name: '용암방패', type: 'armor', subtype: 'shield', def: 100, price: 30000, level: 60, description: '용암의 열기를 견디는 방패' },
    '미스릴방패': { name: '미스릴방패', type: 'armor', subtype: 'shield', def: 60, price: 5000, level: 40, description: '미스릴 방패' },
    '드래곤실드': { name: '드래곤실드', type: 'armor', subtype: 'shield', def: 90, price: 20000, level: 55, description: '용 비늘 방패' },
    '이지스': { name: '이지스', type: 'armor', subtype: 'shield', def: 150, price: 100000, level: 75, legendary: true, description: '신의 방패 이지스' },
    
    // ========================================
    // 장신구 (ACCESSORIES)
    // ========================================
    
    // --- 반지 (Rings) ---
    '철반지': { name: '철반지', type: 'accessory', subtype: 'ring', def: 2, price: 100, level: 5, description: '철 반지' },
    '은반지': { name: '은반지', type: 'accessory', subtype: 'ring', def: 5, price: 300, level: 10, description: '은 반지' },
    '금반지': { name: '금반지', type: 'accessory', subtype: 'ring', def: 8, price: 800, level: 18, description: '금 반지' },
    '루비반지': { name: '루비반지', type: 'accessory', subtype: 'ring', att: 10, price: 1500, level: 25, description: '루비가 박힌 반지' },
    '사파이어반지': { name: '사파이어반지', type: 'accessory', subtype: 'ring', magic: 15, price: 1500, level: 25, description: '사파이어가 박힌 반지' },
    '에메랄드반지': { name: '에메랄드반지', type: 'accessory', subtype: 'ring', hp: 50, price: 1500, level: 25, description: '에메랄드가 박힌 반지' },
    '다이아몬드반지': { name: '다이아몬드반지', type: 'accessory', subtype: 'ring', att: 15, def: 10, price: 5000, level: 40, description: '다이아몬드가 박힌 반지' },
    '하늘반지': { name: '하늘반지', type: 'accessory', subtype: 'ring', magic: 20, def: 12, price: 5200, level: 34, description: '하늘의 기운이 깃든 반지' },
    '지하수정반지': { name: '지하수정반지', type: 'accessory', subtype: 'ring', def: 18, magic: 10, price: 9500, level: 40, description: '지하수정이 박힌 반지' },
    '차원반지': { name: '차원반지', type: 'accessory', subtype: 'ring', att: 18, magic: 18, price: 18000, level: 52, description: '차원의 힘이 깃든 반지' },
    '타락의반지': { name: '타락의반지', type: 'accessory', subtype: 'ring', att: 22, def: 12, price: 20000, level: 56, description: '타락한 힘이 스민 반지' },
    '성역의반지': { name: '성역의반지', type: 'accessory', subtype: 'ring', att: 20, hp: 120, price: 26000, level: 60, description: '성역의 축복이 깃든 반지' },
    '생명의반지': { name: '생명의반지', type: 'accessory', subtype: 'ring', hp: 200, price: 10000, level: 50, description: '생명력을 높이는 반지' },
    '힘의반지': { name: '힘의반지', type: 'accessory', subtype: 'ring', att: 30, price: 12000, level: 55, description: '공격력을 높이는 반지' },
    '마력의반지': { name: '마력의반지', type: 'accessory', subtype: 'ring', magic: 40, price: 12000, level: 55, description: '마력을 높이는 반지' },
    '전설의반지': { name: '전설의반지', type: 'accessory', subtype: 'ring', att: 50, def: 30, hp: 100, price: 50000, level: 70, legendary: true, description: '전설의 반지' },
    
    // --- 목걸이 (Necklaces) ---
    '가죽목걸이': { name: '가죽목걸이', type: 'accessory', subtype: 'necklace', def: 2, price: 80, level: 3, description: '가죽끈 목걸이' },
    '은목걸이': { name: '은목걸이', type: 'accessory', subtype: 'necklace', def: 5, price: 250, level: 10, description: '은 목걸이' },
    '금목걸이': { name: '금목걸이', type: 'accessory', subtype: 'necklace', def: 10, price: 700, level: 18, description: '금 목걸이' },
    '호신부': { name: '호신부', type: 'accessory', subtype: 'necklace', def: 20, price: 2000, level: 30, description: '몸을 지키는 부적 목걸이' },
    '마력의목걸이': { name: '마력의목걸이', type: 'accessory', subtype: 'necklace', magic: 30, price: 3500, level: 38, description: '마력을 높이는 목걸이' },
    '달빛펜던트': { name: '달빛펜던트', type: 'accessory', subtype: 'necklace', magic: 28, hp: 60, price: 4800, level: 30, description: '달빛이 응축된 펜던트' },
    '드워프부적': { name: '드워프부적', type: 'accessory', subtype: 'necklace', def: 20, hp: 50, price: 9000, level: 40, description: '드워프의 수호가 깃든 부적' },
    '차원부적': { name: '차원부적', type: 'accessory', subtype: 'necklace', magic: 35, hp: 80, price: 18000, level: 52, description: '차원 에너지가 흐르는 부적' },
    '성광펜던트': { name: '성광펜던트', type: 'accessory', subtype: 'necklace', magic: 40, hp: 100, price: 26000, level: 60, description: '성광의 힘이 응축된 펜던트' },
    '불꽃펜던트': { name: '불꽃펜던트', type: 'accessory', subtype: 'necklace', att: 25, magic: 20, price: 24000, level: 58, description: '불꽃의 열기가 담긴 펜던트' },
    '불사조의깃털': { name: '불사조의깃털', type: 'accessory', subtype: 'necklace', hp: 150, price: 8000, level: 45, description: '불사조 깃털 목걸이' },
    '드래곤펜던트': { name: '드래곤펜던트', type: 'accessory', subtype: 'necklace', att: 25, def: 15, price: 15000, level: 55, description: '용의 펜던트' },
    '영혼의목걸이': { name: '영혼의목걸이', type: 'accessory', subtype: 'necklace', att: 40, magic: 40, price: 40000, level: 65, legendary: true, description: '영혼의 힘이 깃든 목걸이' },
    
    // --- 귀걸이 (Earrings) ---
    '은귀걸이': { name: '은귀걸이', type: 'accessory', subtype: 'earring', def: 3, price: 200, level: 8, description: '은 귀걸이' },
    '금귀걸이': { name: '금귀걸이', type: 'accessory', subtype: 'earring', def: 6, price: 500, level: 15, description: '금 귀걸이' },
    '진주귀걸이': { name: '진주귀걸이', type: 'accessory', subtype: 'earring', magic: 15, price: 1200, level: 25, description: '진주 귀걸이' },
    '다이아귀걸이': { name: '다이아귀걸이', type: 'accessory', subtype: 'earring', att: 12, def: 8, price: 4000, level: 40, description: '다이아몬드 귀걸이' },
    '정령의귀걸이': { name: '정령의귀걸이', type: 'accessory', subtype: 'earring', magic: 35, price: 10000, level: 50, description: '정령의 힘이 담긴 귀걸이' },
    '천사의귀걸이': { name: '천사의귀걸이', type: 'accessory', subtype: 'earring', att: 20, magic: 20, hp: 80, price: 30000, level: 65, legendary: true, description: '천사의 귀걸이' },
    
    // --- 벨트 (Belts) ---
    '가죽벨트': { name: '가죽벨트', type: 'accessory', subtype: 'belt', def: 3, price: 100, level: 5, description: '가죽 벨트' },
    '철벨트': { name: '철벨트', type: 'accessory', subtype: 'belt', def: 8, price: 350, level: 15, description: '철 벨트' },
    '전사의벨트': { name: '전사의벨트', type: 'accessory', subtype: 'belt', att: 10, def: 10, price: 1200, level: 28, description: '전사의 벨트' },
    '영웅의벨트': { name: '영웅의벨트', type: 'accessory', subtype: 'belt', att: 20, def: 20, price: 5000, level: 45, description: '영웅의 벨트' },
    '타이탄벨트': { name: '타이탄벨트', type: 'accessory', subtype: 'belt', att: 35, def: 35, hp: 100, price: 20000, level: 60, legendary: true, description: '거인의 벨트' },
    
    // --- 망토 (Cloaks) ---
    '천망토': { name: '천망토', type: 'accessory', subtype: 'cloak', def: 3, price: 80, level: 3, description: '천 망토' },
    '가죽망토': { name: '가죽망토', type: 'accessory', subtype: 'cloak', def: 8, price: 250, level: 12, description: '가죽 망토' },
    '마법망토': { name: '마법망토', type: 'accessory', subtype: 'cloak', def: 15, magic: 20, price: 1500, level: 28, description: '마법 망토' },
    '은신의망토': { name: '은신의망토', type: 'accessory', subtype: 'cloak', def: 20, price: 3000, level: 35, description: '은신 효과가 있는 망토' },
    '영웅의망토': { name: '영웅의망토', type: 'accessory', subtype: 'cloak', def: 35, att: 15, price: 8000, level: 48, description: '영웅의 망토' },
    '드래곤망토': { name: '드래곤망토', type: 'accessory', subtype: 'cloak', def: 50, att: 25, price: 25000, level: 60, description: '용 가죽 망토' },
    '불사조의날개망토': { name: '불사조의날개망토', type: 'accessory', subtype: 'cloak', def: 70, att: 40, hp: 150, price: 80000, level: 75, legendary: true, description: '불사조 날개로 만든 망토' },

    // --- 지역 특산 장신구 ---
    '오아시스목걸이': { name: '오아시스목걸이', type: 'accessory', subtype: 'necklace', hp: 80, magic: 10, price: 3200, level: 22, description: '오아시스의 생명력이 깃든 목걸이' },
    '모래바람망토': { name: '모래바람망토', type: 'accessory', subtype: 'cloak', def: 18, hp: 40, price: 3000, level: 24, description: '사막의 모래바람을 막아주는 망토' },
    '서리늑대반지': { name: '서리늑대반지', type: 'accessory', subtype: 'ring', def: 12, hp: 40, price: 3200, level: 24, description: '서리늑대의 기운이 깃든 반지' },
    '설원벨트': { name: '설원벨트', type: 'accessory', subtype: 'belt', def: 14, hp: 30, price: 3500, level: 26, description: '차가운 설원에서 단련된 벨트' },
    '늪지부적': { name: '늪지부적', type: 'accessory', subtype: 'necklace', def: 16, price: 2800, level: 24, description: '습지의 저주를 막아주는 부적' },
    '안개귀걸이': { name: '안개귀걸이', type: 'accessory', subtype: 'earring', magic: 18, price: 3200, level: 26, description: '안개 속 마력을 담은 귀걸이' },
    '천공부적': { name: '천공부적', type: 'accessory', subtype: 'necklace', magic: 35, att: 15, price: 12000, level: 45, description: '하늘의 기운이 흐르는 부적' },
    '뇌운귀걸이': { name: '뇌운귀걸이', type: 'accessory', subtype: 'earring', magic: 25, def: 12, price: 9000, level: 40, description: '뇌운의 기운이 깃든 귀걸이' },
    '달빛반지': { name: '달빛반지', type: 'accessory', subtype: 'ring', magic: 25, price: 9000, level: 38, description: '달빛의 마력이 흐르는 반지' },
    '엘프의망토': { name: '엘프의망토', type: 'accessory', subtype: 'cloak', def: 22, magic: 18, price: 6500, level: 35, description: '엘프들이 만든 섬세한 망토' },

    // --- 지역 평판 코스튬 ---
    '사막 비단망토': { name: '사막 비단망토', type: 'accessory', subtype: 'cloak', def: 12, hp: 30, price: 4000, level: 24, description: '사막의 비단으로 만든 코스튬 망토' },
    '빙설 수호망토': { name: '빙설 수호망토', type: 'accessory', subtype: 'cloak', def: 16, hp: 40, price: 7000, level: 34, description: '빙설의 기운이 깃든 코스튬 망토' },
    '늪지 안개망토': { name: '늪지 안개망토', type: 'accessory', subtype: 'cloak', def: 14, hp: 35, price: 9000, level: 42, description: '안개가 감도는 코스튬 망토' },
    '천공 비행망토': { name: '천공 비행망토', type: 'accessory', subtype: 'cloak', def: 18, hp: 50, price: 15000, level: 52, description: '하늘을 닮은 코스튬 망토' },
    '고대 서고망토': { name: '고대 서고망토', type: 'accessory', subtype: 'cloak', def: 22, hp: 70, price: 22000, level: 62, description: '고대의 문양이 새겨진 코스튬 망토' }
};

// ========================================
// 장비 대량 확장 (자동 생성)
// ========================================

(function() {
    function addItem(key, data) {
        if (!ItemDatabase[key]) {
            ItemDatabase[key] = data;
        }
    }

    var prefixes = [
        { prefix: '강화된 ', statMul: 1.2, priceMul: 1.5, levelAdd: 3 },
        { prefix: '정련된 ', statMul: 1.35, priceMul: 2.0, levelAdd: 6 },
        { prefix: '명품 ', statMul: 1.6, priceMul: 3.0, levelAdd: 10 },
        { prefix: '고대의 ', statMul: 2.0, priceMul: 5.0, levelAdd: 15 }
    ];

    var keys = Object.keys(ItemDatabase);
    for (var i = 0; i < keys.length; i++) {
        var base = ItemDatabase[keys[i]];
        if (base.type === 'weapon' || base.type === 'armor' || base.type === 'accessory') {
            for (var p = 0; p < prefixes.length; p++) {
                var pre = prefixes[p];
                var newName = pre.prefix + base.name;
                addItem(newName, {
                    name: newName,
                    type: base.type,
                    subtype: base.subtype,
                    att: base.att ? Math.floor(base.att * pre.statMul) : base.att,
                    def: base.def ? Math.floor(base.def * pre.statMul) : base.def,
                    magic: base.magic ? Math.floor(base.magic * pre.statMul) : base.magic,
                    hp: base.hp ? Math.floor(base.hp * pre.statMul) : base.hp,
                    speed: base.speed ? Math.floor(base.speed * pre.statMul) : base.speed,
                    price: Math.floor(base.price * pre.priceMul),
                    level: Math.min(120, (base.level || 1) + pre.levelAdd),
                    legendary: base.legendary && pre.prefix === '고대의 ' ? true : base.legendary,
                    special: base.special,
                    description: base.description + ' (' + pre.prefix.replace(' ', '') + ')'
                });
            }
        }
    }

    var specialSeries = [
        { name: '황혼의 검', type: 'weapon', subtype: 'sword', att: 160, price: 60000, level: 55, description: '황혼의 힘이 깃든 검' },
        { name: '심연의 단검', type: 'weapon', subtype: 'dagger', att: 140, price: 55000, level: 52, description: '심연의 기운을 품은 단검' },
        { name: '천상의 활', type: 'weapon', subtype: 'bow', att: 170, price: 70000, level: 58, description: '천상의 빛이 깃든 활' },
        { name: '별빛 지팡이', type: 'weapon', subtype: 'staff', att: 30, magic: 180, price: 75000, level: 60, description: '별빛을 담은 지팡이' },
        { name: '심연의 갑옷', type: 'armor', subtype: 'body', def: 140, price: 80000, level: 60, description: '심연의 방어구' },
        { name: '천상의 투구', type: 'armor', subtype: 'helmet', def: 95, price: 65000, level: 58, description: '천상의 기운이 담긴 투구' },
        { name: '황혼의 반지', type: 'accessory', subtype: 'ring', att: 25, def: 20, price: 30000, level: 50, description: '황혼빛 반지' },
        { name: '심해의 목걸이', type: 'accessory', subtype: 'necklace', magic: 35, price: 32000, level: 52, description: '심해의 기운이 흐르는 목걸이' }
    ];

    for (var s = 0; s < specialSeries.length; s++) {
        addItem(specialSeries[s].name, specialSeries[s]);
    }
})();

// 룬 아이템 추가
ItemDatabase['맹공 룬'] = { name: '맹공 룬', type: 'rune', subtype: 'attack', price: 2000, level: 20, description: '공격력 각인에 사용' };
ItemDatabase['수호 룬'] = { name: '수호 룬', type: 'rune', subtype: 'defense', price: 2000, level: 20, description: '방어력 각인에 사용' };
ItemDatabase['생명 룬'] = { name: '생명 룬', type: 'rune', subtype: 'hp', price: 2500, level: 25, description: '체력 각인에 사용' };
ItemDatabase['치명 룬'] = { name: '치명 룬', type: 'rune', subtype: 'crit', price: 3000, level: 30, description: '치명타 각인에 사용' };
ItemDatabase['회복 룬'] = { name: '회복 룬', type: 'rune', subtype: 'heal', price: 3000, level: 30, description: '회복 각인에 사용' };
ItemDatabase['풍요 룬'] = { name: '풍요 룬', type: 'rune', subtype: 'drop', price: 3500, level: 35, description: '드랍 보너스 각인에 사용' };

// Export
if (typeof module !== 'undefined') {
    module.exports = { ItemDatabase: ItemDatabase };
}






// ---------- gameData/items_consumables.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */


/**
 * 묘냥의 숲 - 대규모 아이템 데이터베이스 Part 2
 * 소비품, 재료, 요리, 물약
 */

var ConsumableDatabase = {
    // ========================================
    // 회복 아이템 (POTIONS)
    // ========================================
    
    // --- 체력 포션 ---
    '하급체력포션': { name: '하급체력포션', type: 'consumable', subtype: 'potion', effect: 'hp', value: 50, price: 30, level: 1, description: '체력을 50 회복' },
    '체력포션': { name: '체력포션', type: 'consumable', subtype: 'potion', effect: 'hp', value: 100, price: 80, level: 5, description: '체력을 100 회복' },
    '중급체력포션': { name: '중급체력포션', type: 'consumable', subtype: 'potion', effect: 'hp', value: 250, price: 200, level: 15, description: '체력을 250 회복' },
    '상급체력포션': { name: '상급체력포션', type: 'consumable', subtype: 'potion', effect: 'hp', value: 500, price: 500, level: 30, description: '체력을 500 회복' },
    '최상급체력포션': { name: '최상급체력포션', type: 'consumable', subtype: 'potion', effect: 'hp', value: 1000, price: 1200, level: 50, description: '체력을 1000 회복' },
    '만능체력포션': { name: '만능체력포션', type: 'consumable', subtype: 'potion', effect: 'hp', value: 2000, price: 3000, level: 70, description: '체력을 2000 회복' },
    '불사의영약': { name: '불사의영약', type: 'consumable', subtype: 'potion', effect: 'fullhp', value: 100, price: 10000, level: 60, description: '체력 완전 회복' },
    
    // --- 마나 포션 ---
    '하급마나포션': { name: '하급마나포션', type: 'consumable', subtype: 'potion', effect: 'mp', value: 30, price: 35, level: 1, description: '마나를 30 회복' },
    '마나포션': { name: '마나포션', type: 'consumable', subtype: 'potion', effect: 'mp', value: 70, price: 90, level: 5, description: '마나를 70 회복' },
    '중급마나포션': { name: '중급마나포션', type: 'consumable', subtype: 'potion', effect: 'mp', value: 150, price: 220, level: 15, description: '마나를 150 회복' },
    '상급마나포션': { name: '상급마나포션', type: 'consumable', subtype: 'potion', effect: 'mp', value: 300, price: 550, level: 30, description: '마나를 300 회복' },
    '최상급마나포션': { name: '최상급마나포션', type: 'consumable', subtype: 'potion', effect: 'mp', value: 600, price: 1300, level: 50, description: '마나를 600 회복' },
    '대마력포션': { name: '대마력포션', type: 'consumable', subtype: 'potion', effect: 'mp', value: 1200, price: 3200, level: 70, description: '마나를 1200 회복' },
    '영혼의물': { name: '영혼의물', type: 'consumable', subtype: 'potion', effect: 'fullmp', value: 100, price: 10000, level: 60, description: '마나 완전 회복' },
    
    // --- 복합 포션 ---
    '회복포션': { name: '회복포션', type: 'consumable', subtype: 'potion', effect: 'hpmp', hpValue: 100, mpValue: 50, price: 150, level: 10, description: '체력 100, 마나 50 회복' },
    '엘릭서': { name: '엘릭서', type: 'consumable', subtype: 'potion', effect: 'fullhpmp', value: 100, price: 25000, level: 70, description: '체력과 마나 완전 회복' },
    
    // --- 버프 포션 ---
    '힘의포션': { name: '힘의포션', type: 'consumable', subtype: 'buff', effect: 'attBuff', value: 20, duration: 300, price: 500, level: 15, description: '5분간 공격력 +20' },
    '방어의포션': { name: '방어의포션', type: 'consumable', subtype: 'buff', effect: 'defBuff', value: 20, duration: 300, price: 500, level: 15, description: '5분간 방어력 +20' },
    '속도의포션': { name: '속도의포션', type: 'consumable', subtype: 'buff', effect: 'speedBuff', value: 30, duration: 300, price: 500, level: 15, description: '5분간 속도 +30' },
    '거인의포션': { name: '거인의포션', type: 'consumable', subtype: 'buff', effect: 'attBuff', value: 50, duration: 180, price: 2000, level: 35, description: '3분간 공격력 +50' },
    '철벽의포션': { name: '철벽의포션', type: 'consumable', subtype: 'buff', effect: 'defBuff', value: 50, duration: 180, price: 2000, level: 35, description: '3분간 방어력 +50' },
    '광속의포션': { name: '광속의포션', type: 'consumable', subtype: 'buff', effect: 'speedBuff', value: 80, duration: 180, price: 2000, level: 35, description: '3분간 속도 +80' },
    '경험치포션': { name: '경험치포션', type: 'consumable', subtype: 'buff', effect: 'expBuff', value: 50, duration: 600, price: 5000, level: 20, description: '10분간 경험치 +50%' },
    '황금의포션': { name: '황금의포션', type: 'consumable', subtype: 'buff', effect: 'goldBuff', value: 50, duration: 600, price: 5000, level: 20, description: '10분간 골드 획득 +50%' },
    '드롭율포션': { name: '드롭율포션', type: 'consumable', subtype: 'buff', effect: 'dropBuff', value: 30, duration: 600, price: 8000, level: 30, description: '10분간 아이템 드롭률 +30%' },
    '전사의영약': { name: '전사의영약', type: 'consumable', subtype: 'buff', effect: 'allBuff', attValue: 30, defValue: 30, duration: 300, price: 3000, level: 40, description: '5분간 공격력/방어력 +30' },
    '영웅의영약': { name: '영웅의영약', type: 'consumable', subtype: 'buff', effect: 'allBuff', attValue: 60, defValue: 60, duration: 300, price: 8000, level: 55, description: '5분간 공격력/방어력 +60' },
    
    // --- 해독/치료 포션 ---
    '해독포션': { name: '해독포션', type: 'consumable', subtype: 'cure', effect: 'poison', price: 100, level: 5, description: '독 상태 해제' },
    '해동포션': { name: '해동포션', type: 'consumable', subtype: 'cure', effect: 'freeze', price: 100, level: 5, description: '빙결 상태 해제' },
    '만병통치약': { name: '만병통치약', type: 'consumable', subtype: 'cure', effect: 'allDebuff', price: 500, level: 20, description: '모든 상태이상 해제' },
    '부활의깃털': { name: '부활의깃털', type: 'consumable', subtype: 'special', effect: 'revive', hpPercent: 30, price: 5000, level: 30, description: '사망시 자동 부활 (체력 30%)' },
    '부활의영약': { name: '부활의영약', type: 'consumable', subtype: 'special', effect: 'revive', hpPercent: 100, price: 20000, level: 50, description: '사망시 자동 부활 (체력 100%)' },
    
    // ========================================
    // 음식/요리 (FOOD)
    // ========================================
    
    // --- 기본 음식 ---
    '빵': { name: '빵', type: 'food', effect: 'hp', value: 30, price: 15, level: 1, description: '소박한 빵' },
    '치즈': { name: '치즈', type: 'food', effect: 'hp', value: 40, price: 25, level: 1, description: '숙성된 치즈' },
    '사과': { name: '사과', type: 'food', effect: 'hp', value: 25, price: 10, level: 1, description: '빨간 사과' },
    '고기구이': { name: '고기구이', type: 'food', effect: 'hp', value: 80, price: 50, level: 3, description: '구운 고기' },
    '생선구이': { name: '생선구이', type: 'food', effect: 'hp', value: 70, price: 40, level: 3, description: '구운 생선' },
    '샐러드': { name: '샐러드', type: 'food', effect: 'hp', value: 50, price: 30, level: 2, description: '신선한 샐러드' },
    '스테이크': { name: '스테이크', type: 'food', effect: 'hp', value: 150, price: 120, level: 8, description: '두툼한 스테이크' },
    '꿀바른빵': { name: '꿀바른빵', type: 'food', effect: 'hp', value: 60, price: 40, level: 3, description: '꿀을 바른 빵' },
    
    // --- 요리 (버프 음식) ---
    '전사의식사': { name: '전사의식사', type: 'food', effect: 'buff', buffType: 'att', buffValue: 15, duration: 600, price: 300, level: 15, description: '10분간 공격력 +15' },
    '마법사의식사': { name: '마법사의식사', type: 'food', effect: 'buff', buffType: 'magic', buffValue: 20, duration: 600, price: 350, level: 15, description: '10분간 마력 +20' },
    '기사의만찬': { name: '기사의만찬', type: 'food', effect: 'buff', buffType: 'def', buffValue: 25, duration: 600, price: 400, level: 20, description: '10분간 방어력 +25' },
    '왕의만찬': { name: '왕의만찬', type: 'food', effect: 'buff', buffType: 'all', attValue: 30, defValue: 30, duration: 900, price: 2000, level: 40, description: '15분간 공격력/방어력 +30' },
    '용의스테이크': { name: '용의스테이크', type: 'food', effect: 'buff', buffType: 'att', buffValue: 50, duration: 1200, price: 5000, level: 55, description: '20분간 공격력 +50' },
    '신의만찬': { name: '신의만찬', type: 'food', effect: 'buff', buffType: 'all', attValue: 80, defValue: 80, magicValue: 80, duration: 1800, price: 20000, level: 70, description: '30분간 모든 스탯 +80' },
    
    // --- 지역 특산물 요리 ---
    '초보자도시락': { name: '초보자도시락', type: 'food', effect: 'hp', value: 100, price: 50, level: 1, description: '시작마을 특제 도시락' },
    '숲의과일파이': { name: '숲의과일파이', type: 'food', effect: 'hp', value: 200, price: 150, level: 10, description: '숲의 과일로 만든 파이' },
    '산악특제스튜': { name: '산악특제스튜', type: 'food', effect: 'buff', buffType: 'def', buffValue: 35, duration: 600, price: 800, level: 25, description: '산악지대 특제 스튜' },
    '해산물요리': { name: '해산물요리', type: 'food', effect: 'hp', value: 300, price: 400, level: 20, description: '신선한 해산물 요리' },
    '드워프맥주': { name: '드워프맥주', type: 'food', effect: 'buff', buffType: 'att', buffValue: 25, duration: 300, price: 200, level: 15, description: '드워프 특제 맥주' },
    '엘프와인': { name: '엘프와인', type: 'food', effect: 'buff', buffType: 'magic', buffValue: 35, duration: 600, price: 600, level: 25, description: '엘프 특제 와인' },
    '사막오아시스물': { name: '사막오아시스물', type: 'food', effect: 'mp', value: 200, price: 250, level: 20, description: '사막 오아시스의 신비한 물' },
    '화산온천란': { name: '화산온천란', type: 'food', effect: 'hpmp', hpValue: 250, mpValue: 150, price: 500, level: 30, description: '화산 온천에서 삶은 달걀' },
    
    // ========================================
    // 재료 아이템 (MATERIALS)
    // ========================================
    
    // --- 광석/금속 ---
    '구리광석': { name: '구리광석', type: 'material', subtype: 'ore', price: 20, level: 1, description: '구리 광석' },
    '철광석': { name: '철광석', type: 'material', subtype: 'ore', price: 50, level: 5, description: '철 광석' },
    '은광석': { name: '은광석', type: 'material', subtype: 'ore', price: 100, level: 10, description: '은 광석' },
    '금광석': { name: '금광석', type: 'material', subtype: 'ore', price: 200, level: 15, description: '금 광석' },
    '미스릴광석': { name: '미스릴광석', type: 'material', subtype: 'ore', price: 500, level: 25, description: '미스릴 광석' },
    '아다만틴광석': { name: '아다만틴광석', type: 'material', subtype: 'ore', price: 1000, level: 40, description: '아다만틴 광석' },
    '오리할콘광석': { name: '오리할콘광석', type: 'material', subtype: 'ore', price: 2000, level: 55, description: '오리할콘 광석' },
    '에테리움광석': { name: '에테리움광석', type: 'material', subtype: 'ore', price: 5000, level: 70, description: '에테리움 광석' },
    
    '구리주괴': { name: '구리주괴', type: 'material', subtype: 'ingot', price: 50, level: 1, description: '정제된 구리' },
    '철주괴': { name: '철주괴', type: 'material', subtype: 'ingot', price: 120, level: 5, description: '정제된 철' },
    '강철주괴': { name: '강철주괴', type: 'material', subtype: 'ingot', price: 300, level: 10, description: '정제된 강철' },
    '은주괴': { name: '은주괴', type: 'material', subtype: 'ingot', price: 250, level: 10, description: '정제된 은' },
    '금주괴': { name: '금주괴', type: 'material', subtype: 'ingot', price: 500, level: 15, description: '정제된 금' },
    '미스릴주괴': { name: '미스릴주괴', type: 'material', subtype: 'ingot', price: 1200, level: 25, description: '정제된 미스릴' },
    '아다만틴주괴': { name: '아다만틴주괴', type: 'material', subtype: 'ingot', price: 2500, level: 40, description: '정제된 아다만틴' },
    '오리할콘주괴': { name: '오리할콘주괴', type: 'material', subtype: 'ingot', price: 5000, level: 55, description: '정제된 오리할콘' },
    
    // --- 가죽/천 ---
    '천조각': { name: '천조각', type: 'material', subtype: 'cloth', price: 10, level: 1, description: '일반 천 조각' },
    '고급천': { name: '고급천', type: 'material', subtype: 'cloth', price: 50, level: 10, description: '고급 천' },
    '비단': { name: '비단', type: 'material', subtype: 'cloth', price: 200, level: 25, description: '부드러운 비단' },
    '마력의천': { name: '마력의천', type: 'material', subtype: 'cloth', price: 500, level: 40, description: '마력이 깃든 천' },
    '천사의깃털직물': { name: '천사의깃털직물', type: 'material', subtype: 'cloth', price: 2000, level: 60, description: '천사 깃털로 짠 직물' },
    
    '가죽조각': { name: '가죽조각', type: 'material', subtype: 'leather', price: 15, level: 1, description: '일반 가죽 조각' },
    '두꺼운가죽': { name: '두꺼운가죽', type: 'material', subtype: 'leather', price: 40, level: 8, description: '두꺼운 가죽' },
    '고급가죽': { name: '고급가죽', type: 'material', subtype: 'leather', price: 100, level: 20, description: '고급 가죽' },
    '와이번가죽': { name: '와이번가죽', type: 'material', subtype: 'leather', price: 400, level: 35, description: '와이번 가죽' },
    '용가죽': { name: '용가죽', type: 'material', subtype: 'leather', price: 2000, level: 55, description: '용의 가죽' },
    
    // --- 나무/목재 ---
    '나뭇가지': { name: '나뭇가지', type: 'material', subtype: 'wood', price: 5, level: 1, description: '일반 나뭇가지' },
    '참나무목재': { name: '참나무목재', type: 'material', subtype: 'wood', price: 30, level: 5, description: '참나무 목재' },
    '단풍나무목재': { name: '단풍나무목재', type: 'material', subtype: 'wood', price: 80, level: 15, description: '단풍나무 목재' },
    '흑단목재': { name: '흑단목재', type: 'material', subtype: 'wood', price: 200, level: 30, description: '흑단 목재' },
    '세계수나뭇가지': { name: '세계수나뭇가지', type: 'material', subtype: 'wood', price: 3000, level: 60, description: '세계수의 나뭇가지' },
    
    // --- 보석/원석 ---
    '자수정': { name: '자수정', type: 'material', subtype: 'gem', price: 100, level: 10, description: '보라색 보석' },
    '토파즈': { name: '토파즈', type: 'material', subtype: 'gem', price: 150, level: 15, description: '황금색 보석' },
    '루비원석': { name: '루비원석', type: 'material', subtype: 'gem', price: 300, level: 25, description: '붉은 원석' },
    '사파이어원석': { name: '사파이어원석', type: 'material', subtype: 'gem', price: 300, level: 25, description: '파란 원석' },
    '에메랄드원석': { name: '에메랄드원석', type: 'material', subtype: 'gem', price: 300, level: 25, description: '초록 원석' },
    '다이아몬드원석': { name: '다이아몬드원석', type: 'material', subtype: 'gem', price: 1000, level: 40, description: '투명한 원석' },
    '오팔': { name: '오팔', type: 'material', subtype: 'gem', price: 500, level: 35, description: '무지개빛 보석' },
    '별의파편': { name: '별의파편', type: 'material', subtype: 'gem', price: 5000, level: 60, description: '별에서 떨어진 파편' },

    // --- 지역 특산 재료 ---
    '사막향신료': { name: '사막향신료', type: 'material', subtype: 'spice', price: 120, level: 18, description: '사막의 향이 진한 향신료' },
    '태양석파편': { name: '태양석파편', type: 'material', subtype: 'mineral', price: 220, level: 20, description: '태양의 열기를 머금은 파편' },
    '빙설결정': { name: '빙설결정', type: 'material', subtype: 'mineral', price: 260, level: 22, description: '차가운 기운이 맺힌 결정' },
    '서리꽃': { name: '서리꽃', type: 'material', subtype: 'herb', price: 180, level: 22, description: '얼음 속에서 피어난 꽃' },
    '늪지이끼덩이': { name: '늪지이끼덩이', type: 'material', subtype: 'herb', price: 140, level: 20, description: '습지에서 채취한 이끼 덩이' },
    '유령의정수': { name: '유령의정수', type: 'material', subtype: 'essence', price: 260, level: 28, description: '유령의 기운이 응축된 정수' },
    '폭풍결정': { name: '폭풍결정', type: 'material', subtype: 'mineral', price: 650, level: 35, description: '폭풍의 기운이 담긴 결정' },
    '천둥돌': { name: '천둥돌', type: 'material', subtype: 'mineral', price: 720, level: 35, description: '천둥의 기운을 품은 돌' },
    '하늘수정': { name: '하늘수정', type: 'material', subtype: 'gem', price: 950, level: 40, description: '하늘의 빛이 스며든 수정' },
    '달빛꽃정수': { name: '달빛꽃정수', type: 'material', subtype: 'herb', price: 420, level: 32, description: '달빛꽃에서 추출한 정수' },
    '아다만타이트': { name: '아다만타이트', type: 'material', subtype: 'ore', price: 600, level: 32, description: '드워프들이 쓰는 고급 광석' },
    '드워프강철': { name: '드워프강철', type: 'material', subtype: 'metal', price: 900, level: 38, description: '드워프가 단련한 강철' },
    '용광로의 불꽃': { name: '용광로의 불꽃', type: 'material', subtype: 'essence', price: 1200, level: 40, description: '용광로의 열기가 응축된 불꽃' },
    '지하수정': { name: '지하수정', type: 'material', subtype: 'gem', price: 1500, level: 40, description: '지하 깊은 곳에서 채굴한 수정' },
    '시간의 모래': { name: '시간의 모래', type: 'material', subtype: 'essence', price: 2200, level: 50, description: '시간의 흐름이 담긴 모래' },
    '고대 마법석': { name: '고대 마법석', type: 'material', subtype: 'gem', price: 2600, level: 52, description: '고대 문명의 마법이 응축된 돌' },
    '차원의 파편': { name: '차원의 파편', type: 'material', subtype: 'essence', price: 2800, level: 55, description: '차원의 틈에서 나온 파편' },
    '공허의 핵': { name: '공허의 핵', type: 'material', subtype: 'essence', price: 3500, level: 58, description: '공허의 중심에서 나온 핵' },
    '타락한 영혼': { name: '타락한 영혼', type: 'material', subtype: 'essence', price: 3000, level: 56, description: '타락한 존재의 영혼' },
    '심연의 수정': { name: '심연의 수정', type: 'material', subtype: 'gem', price: 3200, level: 58, description: '심연의 기운이 스민 수정' },
    '암흑의 정수': { name: '암흑의 정수', type: 'material', subtype: 'essence', price: 3000, level: 56, description: '암흑의 힘이 응축된 정수' },
    '신성한 빛': { name: '신성한 빛', type: 'material', subtype: 'essence', price: 3600, level: 60, description: '신성한 빛의 파편' },
    '생명의 물': { name: '생명의 물', type: 'material', subtype: 'essence', price: 3800, level: 60, description: '생명의 기운이 담긴 물' },
    '축복의 정수': { name: '축복의 정수', type: 'material', subtype: 'essence', price: 4000, level: 62, description: '축복이 응축된 정수' },
    '영원한 불꽃': { name: '영원한 불꽃', type: 'material', subtype: 'essence', price: 3600, level: 60, description: '꺼지지 않는 불꽃' },
    '용암의 핵': { name: '용암의 핵', type: 'material', subtype: 'essence', price: 3800, level: 60, description: '용암의 중심에서 나온 핵' },
    '불의 정수': { name: '불의 정수', type: 'material', subtype: 'essence', price: 3500, level: 58, description: '불의 힘이 응축된 정수' },
    '태양의 파편': { name: '태양의 파편', type: 'material', subtype: 'gem', price: 4200, level: 62, description: '태양의 열기를 담은 파편' },
    
    // --- 몬스터 드랍 재료 ---
    '슬라임젤리': { name: '슬라임젤리', type: 'material', subtype: 'monster', price: 10, level: 1, description: '슬라임에서 얻은 젤리' },
    '뼈조각': { name: '뼈조각', type: 'material', subtype: 'monster', price: 15, level: 3, description: '몬스터의 뼈 조각' },
    '늑대발톱': { name: '늑대발톱', type: 'material', subtype: 'monster', price: 25, level: 5, description: '늑대의 발톱' },
    '고블린귀': { name: '고블린귀', name: '고블린귀', type: 'material', subtype: 'monster', price: 20, level: 3, description: '고블린의 귀'  },
    '오크송곳니': { name: '오크송곳니', type: 'material', subtype: 'monster', price: 50, level: 15, description: '오크의 송곳니' },
    '트롤재생액': { name: '트롤재생액', type: 'material', subtype: 'monster', price: 200, level: 25, description: '트롤의 재생액' },
    '용의비늘': { name: '용의비늘', type: 'material', subtype: 'monster', price: 1000, level: 50, description: '용의 비늘' },
    '용의심장': { name: '용의심장', type: 'material', subtype: 'monster', price: 10000, level: 60, description: '용의 심장' },
    '악마의뿔': { name: '악마의뿔', type: 'material', subtype: 'monster', price: 2000, level: 55, description: '악마의 뿔' },
    '천사의깃털': { name: '천사의깃털', type: 'material', subtype: 'monster', price: 3000, level: 65, description: '천사의 깃털' },
    '정령의정수': { name: '정령의정수', type: 'material', subtype: 'monster', price: 800, level: 35, description: '정령의 정수' },
    
    // --- 정수/마력 재료 ---
    '불의정수': { name: '불의정수', type: 'material', subtype: 'essence', price: 300, level: 20, description: '불의 원소 정수' },
    '물의정수': { name: '물의정수', type: 'material', subtype: 'essence', price: 300, level: 20, description: '물의 원소 정수' },
    '바람의정수': { name: '바람의정수', type: 'material', subtype: 'essence', price: 300, level: 20, description: '바람의 원소 정수' },
    '대지의정수': { name: '대지의정수', type: 'material', subtype: 'essence', price: 300, level: 20, description: '대지의 원소 정수' },
    '빛의정수': { name: '빛의정수', type: 'material', subtype: 'essence', price: 1000, level: 45, description: '빛의 정수' },
    '암흑의정수': { name: '암흑의정수', type: 'material', subtype: 'essence', price: 1000, level: 45, description: '암흑의 정수' },
    '생명의정수': { name: '생명의정수', type: 'material', subtype: 'essence', price: 2000, level: 55, description: '생명의 정수' },
    '죽음의정수': { name: '죽음의정수', type: 'material', subtype: 'essence', price: 2000, level: 55, description: '죽음의 정수' },
    '시간의정수': { name: '시간의정수', type: 'material', subtype: 'essence', price: 10000, level: 70, description: '시간의 정수' },
    '공허의정수': { name: '공허의정수', type: 'material', subtype: 'essence', price: 15000, level: 75, description: '공허의 정수' },
    
    // --- 허브/약초 ---
    '야생풀': { name: '야생풀', type: 'material', subtype: 'herb', price: 5, level: 1, description: '야생에서 자라는 풀' },
    '치유허브': { name: '치유허브', type: 'material', subtype: 'herb', price: 20, level: 5, description: '치유 효과가 있는 허브' },
    '마나허브': { name: '마나허브', type: 'material', subtype: 'herb', price: 25, level: 5, description: '마나 회복에 좋은 허브' },
    '불꽃허브': { name: '불꽃허브', type: 'material', subtype: 'herb', price: 50, level: 15, description: '불꽃 속성 허브' },
    '얼음허브': { name: '얼음허브', type: 'material', subtype: 'herb', price: 50, level: 15, description: '얼음 속성 허브' },
    '생명의허브': { name: '생명의허브', type: 'material', subtype: 'herb', price: 200, level: 30, description: '생명력이 깃든 허브' },
    '마력의꽃': { name: '마력의꽃', type: 'material', subtype: 'herb', price: 300, level: 40, description: '마력이 깃든 꽃' },
    '세계수잎': { name: '세계수잎', type: 'material', subtype: 'herb', price: 2000, level: 60, description: '세계수의 잎' },
    '만병초': { name: '만병초', type: 'material', subtype: 'herb', price: 1000, level: 50, description: '모든 병을 치료하는 약초' }
};

// ========================================
// 소비품/재료 대량 확장 (자동 생성)
// ========================================

(function() {
    function addItem(key, data) {
        if (!ConsumableDatabase[key]) {
            ConsumableDatabase[key] = data;
        }
    }

    var keys = Object.keys(ConsumableDatabase);
    for (var i = 0; i < keys.length; i++) {
        var base = ConsumableDatabase[keys[i]];

        if (base.type === 'consumable' && base.subtype === 'potion') {
            var concentratedName = '농축' + base.name;
            addItem(concentratedName, {
                name: concentratedName,
                type: base.type,
                subtype: base.subtype,
                effect: base.effect,
                value: base.value ? Math.floor(base.value * 1.5) : base.value,
                hpValue: base.hpValue ? Math.floor(base.hpValue * 1.5) : base.hpValue,
                mpValue: base.mpValue ? Math.floor(base.mpValue * 1.5) : base.mpValue,
                price: Math.floor(base.price * 1.8),
                level: Math.min(100, (base.level || 1) + 5),
                description: base.description + ' (농축)'
            });

            var ultimateName = '극농축' + base.name;
            addItem(ultimateName, {
                name: ultimateName,
                type: base.type,
                subtype: base.subtype,
                effect: base.effect,
                value: base.value ? Math.floor(base.value * 2.2) : base.value,
                hpValue: base.hpValue ? Math.floor(base.hpValue * 2.2) : base.hpValue,
                mpValue: base.mpValue ? Math.floor(base.mpValue * 2.2) : base.mpValue,
                price: Math.floor(base.price * 3.0),
                level: Math.min(120, (base.level || 1) + 15),
                description: base.description + ' (극농축)'
            });
        }

        if (base.type === 'consumable' && base.subtype === 'buff') {
            var enhancedName = '상급' + base.name;
            addItem(enhancedName, {
                name: enhancedName,
                type: base.type,
                subtype: base.subtype,
                effect: base.effect,
                value: base.value ? Math.floor(base.value * 1.4) : base.value,
                attValue: base.attValue ? Math.floor(base.attValue * 1.4) : base.attValue,
                defValue: base.defValue ? Math.floor(base.defValue * 1.4) : base.defValue,
                magicValue: base.magicValue ? Math.floor(base.magicValue * 1.4) : base.magicValue,
                duration: base.duration ? Math.floor(base.duration * 1.5) : base.duration,
                price: Math.floor(base.price * 2),
                level: Math.min(120, (base.level || 1) + 10),
                description: base.description + ' (상급)'
            });
        }

        if (base.type === 'food') {
            var chefName = '특제' + base.name;
            addItem(chefName, {
                name: chefName,
                type: base.type,
                effect: base.effect,
                value: base.value ? Math.floor(base.value * 1.6) : base.value,
                hpValue: base.hpValue ? Math.floor(base.hpValue * 1.6) : base.hpValue,
                mpValue: base.mpValue ? Math.floor(base.mpValue * 1.6) : base.mpValue,
                buffType: base.buffType,
                buffValue: base.buffValue ? Math.floor(base.buffValue * 1.4) : base.buffValue,
                attValue: base.attValue ? Math.floor(base.attValue * 1.4) : base.attValue,
                defValue: base.defValue ? Math.floor(base.defValue * 1.4) : base.defValue,
                magicValue: base.magicValue ? Math.floor(base.magicValue * 1.4) : base.magicValue,
                duration: base.duration ? Math.floor(base.duration * 1.3) : base.duration,
                price: Math.floor(base.price * 2),
                level: Math.min(120, (base.level || 1) + 8),
                description: base.description + ' (특제 요리)'
            });
        }

        if (base.type === 'material') {
            var refinedName = '정제된 ' + base.name;
            addItem(refinedName, {
                name: refinedName,
                type: base.type,
                subtype: base.subtype,
                price: Math.floor(base.price * 2),
                level: Math.min(120, (base.level || 1) + 5),
                description: base.description + ' (정제됨)'
            });

            var processedName = '가공된 ' + base.name;
            addItem(processedName, {
                name: processedName,
                type: base.type,
                subtype: base.subtype,
                price: Math.floor(base.price * 3),
                level: Math.min(120, (base.level || 1) + 10),
                description: base.description + ' (가공됨)'
            });
        }
    }

    var extraMaterials = [
        { name: '별빛허브', type: 'material', subtype: 'herb', price: 1500, level: 55, description: '별빛을 머금은 허브' },
        { name: '심연의 꽃', type: 'material', subtype: 'herb', price: 2000, level: 65, description: '심연에서 피어난 꽃' },
        { name: '태초의 이슬', type: 'material', subtype: 'essence', price: 5000, level: 70, description: '태초의 힘이 담긴 이슬' },
        { name: '천상의 결정', type: 'material', subtype: 'essence', price: 8000, level: 75, description: '천상의 기운을 담은 결정' },
        { name: '황혼의 잎', type: 'material', subtype: 'herb', price: 2500, level: 60, description: '황혼빛 잎사귀' }
    ];

    for (var m = 0; m < extraMaterials.length; m++) {
        addItem(extraMaterials[m].name, extraMaterials[m]);
    }
})();

// Export
if (typeof module !== 'undefined') {
    module.exports = { ConsumableDatabase: ConsumableDatabase };
}





// ---------- gameData/items_collectibles.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */


/**
 * 묘냥의 숲 - 대규모 아이템 데이터베이스 Part 3
 * 수집품, 장난감, 잡동사니, 특수 아이템
 */

var CollectibleDatabase = {
    // ========================================
    // 수집품 (COLLECTIBLES) - 순수 수집 목적
    // ========================================
    
    // --- 고대 유물 시리즈 ---
    '고대동전': { name: '고대동전', type: 'collectible', series: 'ancient', rarity: 'common', price: 500, description: '고대 문명의 동전. 수집가들이 좋아한다.' },
    '고대은화': { name: '고대은화', type: 'collectible', series: 'ancient', rarity: 'uncommon', price: 1500, description: '고대 문명의 은화. 역사적 가치가 있다.' },
    '고대금화': { name: '고대금화', type: 'collectible', series: 'ancient', rarity: 'rare', price: 5000, description: '고대 문명의 금화. 매우 귀중하다.' },
    '고대토기조각': { name: '고대토기조각', type: 'collectible', series: 'ancient', rarity: 'common', price: 300, description: '고대 토기의 조각' },
    '고대석판': { name: '고대석판', type: 'collectible', series: 'ancient', rarity: 'uncommon', price: 2000, description: '고대 문자가 새겨진 석판' },
    '고대왕관조각': { name: '고대왕관조각', type: 'collectible', series: 'ancient', rarity: 'rare', price: 8000, description: '고대 왕관의 조각' },
    '고대마법서조각': { name: '고대마법서조각', type: 'collectible', series: 'ancient', rarity: 'epic', price: 20000, description: '고대 마법서의 한 페이지' },
    '고대제왕의인장': { name: '고대제왕의인장', type: 'collectible', series: 'ancient', rarity: 'legendary', price: 100000, description: '고대 제왕의 인장. 전설적인 유물.' },
    
    // --- 자연 표본 시리즈 ---
    '희귀나비표본': { name: '희귀나비표본', type: 'collectible', series: 'nature', rarity: 'uncommon', price: 800, description: '희귀한 나비의 표본' },
    '보석딱정벌레': { name: '보석딱정벌레', type: 'collectible', series: 'nature', rarity: 'rare', price: 3000, description: '보석처럼 빛나는 딱정벌레' },
    '무지개꽃': { name: '무지개꽃', type: 'collectible', series: 'nature', rarity: 'rare', price: 4000, description: '무지개빛으로 빛나는 꽃' },
    '결정화된이슬': { name: '결정화된이슬', type: 'collectible', series: 'nature', rarity: 'uncommon', price: 1200, description: '마법적으로 결정화된 이슬' },
    '천년나무조각': { name: '천년나무조각', type: 'collectible', series: 'nature', rarity: 'epic', price: 15000, description: '천년 된 나무의 조각' },
    '요정의먼지': { name: '요정의먼지', type: 'collectible', series: 'nature', rarity: 'rare', price: 5000, description: '요정이 뿌리고 간 먼지' },
    '세계수의열매': { name: '세계수의열매', type: 'collectible', series: 'nature', rarity: 'legendary', price: 80000, description: '세계수가 맺은 열매' },
    '영원의꽃': { name: '영원의꽃', type: 'collectible', series: 'nature', rarity: 'legendary', price: 120000, description: '절대 시들지 않는 꽃' },
    
    // --- 몬스터 트로피 시리즈 ---
    '슬라임왕의왕관': { name: '슬라임왕의왕관', type: 'collectible', series: 'trophy', rarity: 'uncommon', price: 2000, description: '슬라임왕에게서 얻은 왕관' },
    '늑대왕의송곳니': { name: '늑대왕의송곳니', type: 'collectible', series: 'trophy', rarity: 'rare', price: 5000, description: '늑대왕 펜리르의 송곳니' },
    '고블린왕의왕홀': { name: '고블린왕의왕홀', type: 'collectible', series: 'trophy', rarity: 'rare', price: 6000, description: '고블린왕의 왕홀' },
    '오크워로드의투구': { name: '오크워로드의투구', type: 'collectible', series: 'trophy', rarity: 'epic', price: 15000, description: '오크 워로드의 투구' },
    '드래곤의송곳니': { name: '드래곤의송곳니', type: 'collectible', series: 'trophy', rarity: 'epic', price: 30000, description: '고대용의 송곳니' },
    '리치의두개골': { name: '리치의두개골', type: 'collectible', series: 'trophy', rarity: 'epic', price: 25000, description: '리치의 두개골' },
    '악마군주의뿔': { name: '악마군주의뿔', type: 'collectible', series: 'trophy', rarity: 'legendary', price: 100000, description: '악마 군주의 뿔' },
    '공허군주의눈': { name: '공허군주의눈', type: 'collectible', series: 'trophy', rarity: 'legendary', price: 200000, description: '공허의 군주 말라카이의 눈' },
    
    // --- 보석 & 광물 컬렉션 ---
    '스타사파이어': { name: '스타사파이어', type: 'collectible', series: 'gem', rarity: 'rare', price: 8000, description: '별 무늬가 있는 사파이어' },
    '블러드루비': { name: '블러드루비', type: 'collectible', series: 'gem', rarity: 'rare', price: 8000, description: '피처럼 붉은 루비' },
    '황제의에메랄드': { name: '황제의에메랄드', type: 'collectible', series: 'gem', rarity: 'epic', price: 25000, description: '황제에게 바쳐진 에메랄드' },
    '무지개오팔': { name: '무지개오팔', type: 'collectible', series: 'gem', rarity: 'epic', price: 20000, description: '일곱 빛깔로 빛나는 오팔' },
    '암흑다이아몬드': { name: '암흑다이아몬드', type: 'collectible', series: 'gem', rarity: 'legendary', price: 80000, description: '검은 빛을 내는 다이아몬드' },
    '태양의심장석': { name: '태양의심장석', type: 'collectible', series: 'gem', rarity: 'legendary', price: 150000, description: '태양의 열기를 품은 보석' },
    '달의눈물': { name: '달의눈물', type: 'collectible', series: 'gem', rarity: 'legendary', price: 150000, description: '달빛이 응축된 보석' },
    
    // --- 예술품 시리즈 ---
    '무명화가의그림': { name: '무명화가의그림', type: 'collectible', series: 'art', rarity: 'common', price: 500, description: '무명 화가의 그림' },
    '엘프조각상': { name: '엘프조각상', type: 'collectible', series: 'art', rarity: 'uncommon', price: 2000, description: '엘프가 만든 조각상' },
    '드워프명장의작품': { name: '드워프명장의작품', type: 'collectible', series: 'art', rarity: 'rare', price: 8000, description: '드워프 명장의 금속 공예품' },
    '대마법사의초상화': { name: '대마법사의초상화', type: 'collectible', series: 'art', rarity: 'epic', price: 25000, description: '대마법사의 초상화' },
    '왕실의보물함': { name: '왕실의보물함', type: 'collectible', series: 'art', rarity: 'epic', price: 35000, description: '왕실에서 사용하던 보물함' },
    '신의조각상': { name: '신의조각상', type: 'collectible', series: 'art', rarity: 'legendary', price: 200000, description: '신을 형상화한 조각상' },
    
    // ========================================
    // 장난감 (TOYS) - 특수 효과/재미 아이템
    // ========================================
    
    // --- 인형 시리즈 ---
    '슬라임인형': { name: '슬라임인형', type: 'toy', subtype: 'plushie', effect: 'summon', summonType: 'visual', price: 1000, description: '말랑말랑한 슬라임 인형' },
    '늑대인형': { name: '늑대인형', type: 'toy', subtype: 'plushie', effect: 'summon', summonType: 'visual', price: 1500, description: '포근한 늑대 인형' },
    '고블린인형': { name: '고블린인형', type: 'toy', subtype: 'plushie', effect: 'summon', summonType: 'visual', price: 1200, description: '못생긴 고블린 인형' },
    '드래곤인형': { name: '드래곤인형', type: 'toy', subtype: 'plushie', effect: 'summon', summonType: 'visual', price: 5000, description: '위엄있는 드래곤 인형' },
    '천사인형': { name: '천사인형', type: 'toy', subtype: 'plushie', effect: 'summon', summonType: 'visual', price: 8000, description: '날개 달린 천사 인형' },
    '악마인형': { name: '악마인형', type: 'toy', subtype: 'plushie', effect: 'summon', summonType: 'visual', price: 8000, description: '뿔 달린 악마 인형' },
    '전설의영웅인형': { name: '전설의영웅인형', type: 'toy', subtype: 'plushie', effect: 'summon', summonType: 'visual', price: 20000, description: '전설의 영웅을 본뜬 인형' },
    '묘냥이인형': { name: '묘냥이인형', type: 'toy', subtype: 'plushie', effect: 'summon', summonType: 'visual', price: 50000, rare: true, description: '묘냥의 숲 마스코트 인형' },
    
    // --- 이펙트 아이템 ---
    '파티폭죽': { name: '파티폭죽', type: 'toy', subtype: 'effect', effect: 'visual', visualType: 'firework', uses: 10, price: 500, description: '화려한 폭죽 (10회 사용)' },
    '무지개연막탄': { name: '무지개연막탄', type: 'toy', subtype: 'effect', effect: 'visual', visualType: 'smoke', uses: 5, price: 800, description: '무지개빛 연기 (5회 사용)' },
    '빛의구슬': { name: '빛의구슬', type: 'toy', subtype: 'effect', effect: 'visual', visualType: 'light', uses: 20, price: 300, description: '주변을 밝히는 구슬 (20회 사용)' },
    '눈꽃결정': { name: '눈꽃결정', type: 'toy', subtype: 'effect', effect: 'visual', visualType: 'snow', uses: 10, price: 600, description: '눈을 내리게 하는 결정 (10회 사용)' },
    '벚꽃비': { name: '벚꽃비', type: 'toy', subtype: 'effect', effect: 'visual', visualType: 'petals', uses: 10, price: 600, description: '벚꽃잎을 흩날리게 함 (10회 사용)' },
    '별똥별': { name: '별똥별', type: 'toy', subtype: 'effect', effect: 'visual', visualType: 'star', uses: 3, price: 2000, description: '별똥별이 떨어지는 효과 (3회 사용)' },
    '오로라빛': { name: '오로라빛', type: 'toy', subtype: 'effect', effect: 'visual', visualType: 'aurora', uses: 5, price: 3000, description: '오로라를 만드는 아이템 (5회 사용)' },
    
    // --- 변신/코스튬 아이템 ---
    '슬라임모자': { name: '슬라임모자', type: 'toy', subtype: 'costume', effect: 'appearance', price: 2000, description: '슬라임 모양 모자' },
    '토끼귀머리띠': { name: '토끼귀머리띠', type: 'toy', subtype: 'costume', effect: 'appearance', price: 1500, description: '귀여운 토끼귀' },
    '고양이귀': { name: '고양이귀', type: 'toy', subtype: 'costume', effect: 'appearance', price: 1500, description: '고양이 귀 머리띠' },
    '악마뿔': { name: '악마뿔', type: 'toy', subtype: 'costume', effect: 'appearance', price: 3000, description: '악마의 뿔 장식' },
    '천사고리': { name: '천사고리', type: 'toy', subtype: 'costume', effect: 'appearance', price: 3000, description: '천사의 머리 위 고리' },
    '해적모자': { name: '해적모자', type: 'toy', subtype: 'costume', effect: 'appearance', price: 2500, description: '멋진 해적 모자' },
    '마법사모자': { name: '마법사모자', type: 'toy', subtype: 'costume', effect: 'appearance', price: 2500, description: '뾰족한 마법사 모자' },
    '왕관장식': { name: '왕관장식', type: 'toy', subtype: 'costume', effect: 'appearance', price: 5000, description: '작은 왕관 장식' },
    '용날개장식': { name: '용날개장식', type: 'toy', subtype: 'costume', effect: 'appearance', price: 10000, description: '용 날개 모양 장식' },
    '유령망토': { name: '유령망토', type: 'toy', subtype: 'costume', effect: 'appearance', price: 4000, description: '반투명한 유령 망토' },
    
    // --- 탈것 (시각적 효과만) ---
    '나무말': { name: '나무말', type: 'toy', subtype: 'mount', effect: 'mount', speed: 0, price: 500, description: '어린이용 나무 말' },
    '당근마차': { name: '당근마차', type: 'toy', subtype: 'mount', effect: 'mount', speed: 0, price: 3000, description: '당근 모양의 재미있는 마차' },
    '거대슬라임': { name: '거대슬라임', type: 'toy', subtype: 'mount', effect: 'mount', speed: 0, price: 8000, description: '타고 다니는 거대 슬라임' },
    '구름조각': { name: '구름조각', type: 'toy', subtype: 'mount', effect: 'mount', speed: 0, price: 15000, description: '구름 위에 앉아서 이동' },
    '미니드래곤': { name: '미니드래곤', type: 'toy', subtype: 'mount', effect: 'mount', speed: 0, price: 25000, description: '작은 드래곤을 타고 이동' },
    '마법양탄자': { name: '마법양탄자', type: 'toy', subtype: 'mount', effect: 'mount', speed: 0, price: 30000, description: '날아다니는 마법 양탄자' },
    '유니콘': { name: '유니콘', type: 'toy', subtype: 'mount', effect: 'mount', speed: 0, price: 50000, rare: true, description: '전설의 유니콘' },
    '불사조': { name: '불사조', type: 'toy', subtype: 'mount', effect: 'mount', speed: 0, price: 100000, rare: true, description: '불사조를 타고 날아다님' },
    
    // --- 악기 (음악 재생) ---
    '리코더': { name: '리코더', type: 'toy', subtype: 'instrument', effect: 'music', price: 300, description: '간단한 리코더' },
    '류트': { name: '류트', type: 'toy', subtype: 'instrument', effect: 'music', price: 1500, description: '중세식 현악기' },
    '하프': { name: '하프', type: 'toy', subtype: 'instrument', effect: 'music', price: 5000, description: '아름다운 하프' },
    '드럼': { name: '드럼', type: 'toy', subtype: 'instrument', effect: 'music', price: 2000, description: '리듬을 만드는 드럼' },
    '오카리나': { name: '오카리나', type: 'toy', subtype: 'instrument', effect: 'music', price: 2500, description: '전설의 오카리나' },
    '엘프의피리': { name: '엘프의피리', type: 'toy', subtype: 'instrument', effect: 'music', price: 10000, description: '엘프가 만든 피리' },
    '천상의하프': { name: '천상의하프', type: 'toy', subtype: 'instrument', effect: 'music', price: 50000, rare: true, description: '천사의 음악을 연주하는 하프' },
    
    // ========================================
    // 잡동사니 (JUNK) - NPC에게 판매용
    // ========================================
    
    // --- 일반 잡동사니 ---
    '부서진검': { name: '부서진검', type: 'junk', price: 5, description: '더 이상 쓸 수 없는 검' },
    '녹슨갑옷조각': { name: '녹슨갑옷조각', type: 'junk', price: 8, description: '녹이 슨 갑옷 조각' },
    '찢어진천': { name: '찢어진천', type: 'junk', price: 3, description: '찢어진 천 조각' },
    '깨진도자기': { name: '깨진도자기', type: 'junk', price: 10, description: '깨진 도자기 조각' },
    '헌신발': { name: '헌신발', type: 'junk', price: 4, description: '낡아빠진 신발' },
    '썩은나무': { name: '썩은나무', type: 'junk', price: 2, description: '썩어버린 나무 조각' },
    '곰팡이핀빵': { name: '곰팡이핀빵', type: 'junk', price: 1, description: '먹을 수 없는 빵' },
    '구멍난양말': { name: '구멍난양말', type: 'junk', price: 2, description: '구멍이 뚫린 양말' },
    '더러운걸레': { name: '더러운걸레', type: 'junk', price: 3, description: '더러운 걸레' },
    '빈병': { name: '빈병', type: 'junk', price: 5, description: '빈 유리병' },
    
    // --- 몬스터 잡동사니 ---
    '슬라임찌꺼기': { name: '슬라임찌꺼기', type: 'junk', price: 3, description: '슬라임의 찌꺼기' },
    '고블린똥': { name: '고블린똥', type: 'junk', price: 1, description: '고블린의 배설물... 왜 주웠지?' },
    '해골뼛조각': { name: '해골뼛조각', type: 'junk', price: 6, description: '스켈레톤의 뼈 조각' },
    '좀비살점': { name: '좀비살점', type: 'junk', price: 4, description: '썩은 좀비 살점' },
    '늑대털': { name: '늑대털', type: 'junk', price: 8, description: '늑대의 털' },
    '오크의이': { name: '오크의이', type: 'junk', price: 12, description: '오크의 치아' },
    '트롤손톱': { name: '트롤손톱', type: 'junk', price: 15, description: '트롤의 손톱' },
    '악마꼬리': { name: '악마꼬리', type: 'junk', price: 25, description: '악마의 꼬리 조각' },
    '정령가루': { name: '정령가루', type: 'junk', price: 20, description: '정령이 남긴 가루' },
    '유령의눈물': { name: '유령의눈물', type: 'junk', price: 18, description: '유령이 흘린 눈물' },
    
    // --- 던전 잡동사니 ---
    '깨진항아리': { name: '깨진항아리', type: 'junk', price: 15, description: '던전에서 발견한 깨진 항아리' },
    '먼지낀책': { name: '먼지낀책', type: 'junk', price: 20, description: '읽을 수 없는 낡은 책' },
    '거미줄': { name: '거미줄', type: 'junk', price: 7, description: '던전의 거미줄' },
    '부서진함정': { name: '부서진함정', type: 'junk', price: 25, description: '작동하지 않는 함정 조각' },
    '녹슨열쇠': { name: '녹슨열쇠', type: 'junk', price: 30, description: '어디에 쓰는지 모를 열쇠' },
    '부서진보물상자': { name: '부서진보물상자', type: 'junk', price: 40, description: '이미 비어있는 상자' },
    '금이간거울': { name: '금이간거울', type: 'junk', price: 35, description: '금이 간 거울' },
    '꺼진횃불': { name: '꺼진횃불', type: 'junk', price: 10, description: '다 타버린 횃불' },
    
    // --- 가치있는 잡동사니 (높은 판매가) ---
    '금니': { name: '금니', type: 'junk', price: 100, description: '누군가의 금니... 어디서 났을까' },
    '깨진보석': { name: '깨진보석', type: 'junk', price: 80, description: '깨진 보석 조각' },
    '녹슨금화': { name: '녹슨금화', type: 'junk', price: 50, description: '녹이 슨 금화' },
    '찌그러진왕관': { name: '찌그러진왕관', type: 'junk', price: 150, description: '찌그러진 왕관' },
    '부서진마법봉': { name: '부서진마법봉', type: 'junk', price: 120, description: '마력이 빠진 마법봉' },
    
    // ========================================
    // 특수 아이템 (SPECIAL)
    // ========================================
    
    // --- 귀환/이동 아이템 ---
    '귀환의돌': { name: '귀환의돌', type: 'special', subtype: 'teleport', effect: 'returnToTown', uses: 1, price: 100, description: '마을로 귀환하는 돌' },
    '귀환의두루마리': { name: '귀환의두루마리', type: 'special', subtype: 'teleport', effect: 'returnToTown', uses: 5, price: 400, description: '마을로 귀환하는 두루마리 (5회)' },
    '순간이동의돌': { name: '순간이동의돌', type: 'special', subtype: 'teleport', effect: 'teleportAny', uses: 1, price: 500, description: '원하는 곳으로 이동' },
    '차원의열쇠': { name: '차원의열쇠', type: 'special', subtype: 'teleport', effect: 'dungeonTeleport', uses: 3, price: 2000, description: '던전 입구로 이동 (3회)' },
    
    // --- 소환 아이템 ---
    '상인소환서': { name: '상인소환서', type: 'special', subtype: 'summon', effect: 'summonMerchant', uses: 1, price: 500, description: '상인을 소환한다' },
    '대장장이소환서': { name: '대장장이소환서', type: 'special', subtype: 'summon', effect: 'summonBlacksmith', uses: 1, price: 500, description: '대장장이를 소환한다' },
    '수리도구': { name: '수리도구', type: 'special', subtype: 'repair', effect: 'repairAll', uses: 3, price: 800, description: '장비 수리 (3회)' },
    '던전 재도전권': { name: '던전 재도전권', type: 'special', subtype: 'retry', effect: 'retryDungeon', uses: 1, price: 2000, description: '주간 던전 재도전 1회' },
    '심연의 열쇠': { name: '심연의 열쇠', type: 'special', subtype: 'key', effect: 'dungeonKey', uses: 1, price: 5000, description: '심연의 던전 입장에 사용' },
    '시즌 던전 입장권': { name: '시즌 던전 입장권', type: 'special', subtype: 'key', effect: 'seasonKey', uses: 1, price: 3000, description: '시즌 던전 입장에 사용' },

    // --- 평판 상점 전용 설계도/코스튬 ---
    '사막 장인의 설계도': { name: '사막 장인의 설계도', type: 'special', subtype: 'recipe', price: 3500, description: '사막 비단망토 제작에 사용' },
    '북방 제련 설계도': { name: '북방 제련 설계도', type: 'special', subtype: 'recipe', price: 4500, description: '빙설 수호망토 제작에 사용' },
    '습지 비전 설계도': { name: '습지 비전 설계도', type: 'special', subtype: 'recipe', price: 5500, description: '늪지 안개망토 제작에 사용' },
    '천공 공학 설계도': { name: '천공 공학 설계도', type: 'special', subtype: 'recipe', price: 7000, description: '천공 비행망토 제작에 사용' },
    '폐허 고대 설계도': { name: '폐허 고대 설계도', type: 'special', subtype: 'recipe', price: 9000, description: '고대 서고망토 제작에 사용' },
    
    // --- 강화/제작 아이템 ---
    '강화석': { name: '강화석', type: 'special', subtype: 'upgrade', effect: 'upgrade', successRate: 70, price: 1000, description: '장비 강화에 사용 (성공률 70%)' },
    '축복의강화석': { name: '축복의강화석', type: 'special', subtype: 'upgrade', effect: 'upgrade', successRate: 90, price: 5000, description: '장비 강화에 사용 (성공률 90%)' },
    '안전한강화석': { name: '안전한강화석', type: 'special', subtype: 'upgrade', effect: 'upgradesafe', successRate: 50, price: 3000, description: '실패해도 파괴 안됨 (성공률 50%)' },
    '초월석': { name: '초월석', type: 'special', subtype: 'upgrade', effect: 'transcend', price: 50000, description: '장비 초월에 사용' },
    '각성석': { name: '각성석', type: 'special', subtype: 'upgrade', effect: 'awaken', price: 100000, description: '장비 각성에 사용' },
    
    // --- 열쇠/상자 ---
    '일반상자열쇠': { name: '일반상자열쇠', type: 'special', subtype: 'key', effect: 'openBox', boxType: 'common', price: 100, description: '일반 상자를 여는 열쇠' },
    '희귀상자열쇠': { name: '희귀상자열쇠', type: 'special', subtype: 'key', effect: 'openBox', boxType: 'rare', price: 500, description: '희귀 상자를 여는 열쇠' },
    '전설상자열쇠': { name: '전설상자열쇠', type: 'special', subtype: 'key', effect: 'openBox', boxType: 'legendary', price: 2000, description: '전설 상자를 여는 열쇠' },
    
    '일반보물상자': { name: '일반보물상자', type: 'special', subtype: 'box', effect: 'randomItem', rarity: 'common', price: 200, description: '무작위 아이템이 들어있는 상자' },
    '희귀보물상자': { name: '희귀보물상자', type: 'special', subtype: 'box', effect: 'randomItem', rarity: 'rare', price: 1000, description: '희귀 아이템이 들어있는 상자' },
    '전설보물상자': { name: '전설보물상자', type: 'special', subtype: 'box', effect: 'randomItem', rarity: 'legendary', price: 5000, description: '전설 아이템이 들어있을지도?' },
    '찬란한보물상자': { name: '찬란한보물상자', type: 'special', subtype: 'box', effect: 'randomItem', rarity: 'mythic', price: 20000, description: '최고급 아이템이 들어있는 상자' }
};

// ========================================
// 아이템 대량 확장 (자동 생성)
// ========================================

(function() {
    function addItem(key, data) {
        if (!CollectibleDatabase[key]) {
            CollectibleDatabase[key] = data;
        }
    }

    var collectiblePrefixes = [
        { prefix: '복원된 ', priceMul: 1.6, rarity: 'uncommon' },
        { prefix: '빛나는 ', priceMul: 2.0, rarity: 'rare' },
        { prefix: '영롱한 ', priceMul: 2.5, rarity: 'epic' },
        { prefix: '전설의 ', priceMul: 4.0, rarity: 'legendary' }
    ];

    var baseKeys = Object.keys(CollectibleDatabase);
    for (var i = 0; i < baseKeys.length; i++) {
        var base = CollectibleDatabase[baseKeys[i]];
        if (base.type === 'collectible') {
            for (var p = 0; p < collectiblePrefixes.length; p++) {
                var pre = collectiblePrefixes[p];
                var newName = pre.prefix + base.name;
                addItem(newName, {
                    name: newName,
                    type: base.type,
                    series: base.series,
                    rarity: pre.rarity || base.rarity,
                    price: Math.floor(base.price * pre.priceMul),
                    description: base.description + ' (복각품)'
                });
            }
        }
    }

    var toyPrefixes = [
        { prefix: '축제 ', priceMul: 1.4 },
        { prefix: '달빛 ', priceMul: 1.8 },
        { prefix: '황혼 ', priceMul: 2.0 },
        { prefix: '오로라 ', priceMul: 2.5 }
    ];

    for (var t = 0; t < baseKeys.length; t++) {
        var toy = CollectibleDatabase[baseKeys[t]];
        if (toy.type === 'toy') {
            for (var tp = 0; tp < toyPrefixes.length; tp++) {
                var tpref = toyPrefixes[tp];
                var tName = tpref.prefix + toy.name;
                addItem(tName, {
                    name: tName,
                    type: toy.type,
                    subtype: toy.subtype,
                    effect: toy.effect,
                    price: Math.floor(toy.price * tpref.priceMul),
                    description: toy.description + ' (특별판)',
                    uses: toy.uses,
                    summonType: toy.summonType,
                    visualType: toy.visualType,
                    speed: toy.speed,
                    rare: true
                });
            }
        }
    }

    var specialItems = [
        { name: '차원의나침반', type: 'special', subtype: 'teleport', effect: 'teleportAny', uses: 5, price: 5000, description: '원하는 지역으로 이동 (5회)' },
        { name: '시간정지의모래', type: 'special', subtype: 'utility', effect: 'pauseTime', uses: 1, price: 12000, description: '잠시 시간을 멈춘다' },
        { name: '영혼봉인석', type: 'special', subtype: 'utility', effect: 'captureSoul', uses: 3, price: 8000, description: '몬스터의 영혼을 봉인' },
        { name: '봉인의인장', type: 'special', subtype: 'key', effect: 'openBox', boxType: 'mythic', price: 15000, description: '신화급 상자를 여는 인장' },
        { name: '룬각인서', type: 'special', subtype: 'upgrade', effect: 'engrave', price: 20000, description: '장비에 룬을 각인' },
        { name: '정령소환석', type: 'special', subtype: 'summon', effect: 'summonElemental', uses: 1, price: 3500, description: '정령을 소환한다' }
    ];

    for (var s = 0; s < specialItems.length; s++) {
        addItem(specialItems[s].name, specialItems[s]);
    }
})();

// Export
if (typeof module !== 'undefined') {
    module.exports = { CollectibleDatabase: CollectibleDatabase };
}








// ---------- gameData/quests.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */


/**
 * 묘냥의 숲 - 대규모 퀘스트 데이터베이스
 * 메인 퀘스트, 사이드 퀘스트, 일일 퀘스트, 길드 퀘스트
 */

var QuestDatabase = {
    // ========================================
    // 메인 퀘스트 - 제1장: 각성
    // ========================================
    
    'MQ001': {
        id: 'MQ001',
        type: 'main',
        chapter: 1,
        title: '묘냥의 숲에 오신 것을 환영합니다',
        description: '이곳은 묘냥의 숲입니다. 먼저 마을 촌장님을 찾아가 인사를 드리세요.',
        objectives: [{ type: 'talk', target: '촌장', count: 1 }],
        rewards: { exp: 50, gold: 100, items: ['빵', '체력포션'] },
        levelReq: 1,
        nextQuest: 'MQ002'
    },
    'MQ002': {
        id: 'MQ002',
        type: 'main',
        chapter: 1,
        title: '첫 번째 전투',
        description: '촌장님이 마을 근처의 슬라임을 처치해달라고 부탁합니다.',
        objectives: [{ type: 'kill', target: '슬라임', count: 5 }],
        rewards: { exp: 100, gold: 150, items: ['철검'] },
        levelReq: 1,
        prevQuest: 'MQ001',
        nextQuest: 'MQ003'
    },
    'MQ003': {
        id: 'MQ003',
        type: 'main',
        chapter: 1,
        title: '장비를 갖추자',
        description: '대장장이에게 가서 기본 장비를 받으세요.',
        objectives: [{ type: 'talk', target: '대장장이', count: 1 }],
        rewards: { exp: 80, gold: 100, items: ['가죽갑옷', '가죽투구'] },
        levelReq: 2,
        prevQuest: 'MQ002',
        nextQuest: 'MQ004'
    },
    'MQ004': {
        id: 'MQ004',
        type: 'main',
        chapter: 1,
        title: '늑대의 위협',
        description: '마을 외곽에 늑대들이 출몰합니다. 늑대를 처치하세요.',
        objectives: [{ type: 'kill', target: '늑대', count: 10 }],
        rewards: { exp: 200, gold: 250, items: ['늑대 가죽'] },
        levelReq: 3,
        prevQuest: 'MQ003',
        nextQuest: 'MQ005'
    },
    'MQ005': {
        id: 'MQ005',
        type: 'main',
        chapter: 1,
        title: '고블린의 습격',
        description: '고블린들이 마을을 위협하고 있습니다. 고블린 정찰대를 처치하세요.',
        objectives: [{ type: 'kill', target: '고블린', count: 15 }, { type: 'kill', target: '고블린전사', count: 5 }],
        rewards: { exp: 350, gold: 400, items: ['강철검'] },
        levelReq: 5,
        prevQuest: 'MQ004',
        nextQuest: 'MQ006'
    },
    'MQ006': {
        id: 'MQ006',
        type: 'main',
        chapter: 1,
        title: '고블린 두목을 찾아서',
        description: '고블린들의 두목이 근처 동굴에 숨어있다고 합니다. 두목을 처치하세요.',
        objectives: [{ type: 'kill', target: '고블린두목', count: 1 }],
        rewards: { exp: 800, gold: 800, items: ['두목의검', '중급체력포션'] },
        levelReq: 8,
        prevQuest: 'MQ005',
        nextQuest: 'MQ007'
    },
    'MQ007': {
        id: 'MQ007',
        type: 'main',
        chapter: 1,
        title: '새로운 시작',
        description: '촌장에게 보고하고 다음 목적지를 안내받으세요.',
        objectives: [{ type: 'talk', target: '촌장', count: 1 }],
        rewards: { exp: 500, gold: 500, items: ['미스릴검'] },
        levelReq: 10,
        prevQuest: 'MQ006',
        nextQuest: 'MQ008'
    },

    // ========================================
    // 메인 퀘스트 - 제2장: 어둠의 그림자
    // ========================================
    
    'MQ008': {
        id: 'MQ008',
        type: 'main',
        chapter: 2,
        title: '수상한 소문',
        description: '언데드들이 묘지에서 일어나고 있다는 소문이 돌고 있습니다. 조사해보세요.',
        objectives: [{ type: 'kill', target: '스켈레톤', count: 20 }, { type: 'kill', target: '좀비', count: 10 }],
        rewards: { exp: 1000, gold: 800, items: ['해독포션'] },
        levelReq: 12,
        prevQuest: 'MQ007',
        nextQuest: 'MQ009'
    },
    'MQ009': {
        id: 'MQ009',
        type: 'main',
        chapter: 2,
        title: '어둠의 기운',
        description: '언데드들을 조종하는 어둠의 기운의 근원을 찾아야 합니다.',
        objectives: [{ type: 'collect', target: '암흑의정수', count: 5 }],
        rewards: { exp: 1200, gold: 1000 },
        levelReq: 15,
        prevQuest: 'MQ008',
        nextQuest: 'MQ010'
    },
    'MQ010': {
        id: 'MQ010',
        type: 'main',
        chapter: 2,
        title: '리치의 출현',
        description: '리치가 언데드 군단을 이끌고 있습니다. 리치를 처치하세요.',
        objectives: [{ type: 'kill', target: '리치', count: 1 }],
        rewards: { exp: 3000, gold: 2500, items: ['리치의지팡이'] },
        levelReq: 20,
        prevQuest: 'MQ009',
        nextQuest: 'MQ011'
    },
    'MQ011': {
        id: 'MQ011',
        type: 'main',
        chapter: 2,
        title: '흑마법사의 그림자',
        description: '리치 뒤에 누군가가 있습니다. 현자에게 단서를 물어보세요.',
        objectives: [{ type: 'talk', target: '현자', count: 1 }],
        rewards: { exp: 1500, gold: 1200 },
        levelReq: 22,
        prevQuest: 'MQ010',
        nextQuest: 'MQ012'
    },
    'MQ012': {
        id: 'MQ012',
        type: 'main',
        chapter: 2,
        title: '봉인된 던전',
        description: '봉인된 던전의 열쇠를 찾아 던전에 진입하세요.',
        objectives: [{ type: 'collect', target: '봉인의열쇠', count: 1 }, { type: 'dungeon', target: '어둠의던전', count: 1 }],
        rewards: { exp: 4000, gold: 3000, items: ['암흑의갑옷'] },
        levelReq: 25,
        prevQuest: 'MQ011',
        nextQuest: 'MQ013'
    },

    // ========================================
    // 메인 퀘스트 - 제3장: 드래곤의 위협
    // ========================================
    
    'MQ013': {
        id: 'MQ013',
        type: 'main',
        chapter: 3,
        title: '산을 뒤덮는 그림자',
        description: '드래곤이 산악지대에서 목격되었습니다. 정찰하세요.',
        objectives: [{ type: 'explore', target: '용의산맥', count: 1 }],
        rewards: { exp: 2000, gold: 1500 },
        levelReq: 28,
        prevQuest: 'MQ012',
        nextQuest: 'MQ014'
    },
    'MQ014': {
        id: 'MQ014',
        type: 'main',
        chapter: 3,
        title: '드래곤의 부하들',
        description: '드래곤의 부하 드레이크들을 처치하세요.',
        objectives: [{ type: 'kill', target: '드레이크', count: 10 }, { type: 'kill', target: '와이번', count: 5 }],
        rewards: { exp: 5000, gold: 4000, items: ['드래곤슬레이어'] },
        levelReq: 32,
        prevQuest: 'MQ013',
        nextQuest: 'MQ015'
    },
    'MQ015': {
        id: 'MQ015',
        type: 'main',
        chapter: 3,
        title: '드래곤과의 대결',
        description: '고대용과 대결하세요. 승리하여 평화를 가져오세요.',
        objectives: [{ type: 'kill', target: '고대용', count: 1 }],
        rewards: { exp: 15000, gold: 10000, items: ['드래곤의 심장', '용린갑옷'] },
        levelReq: 40,
        prevQuest: 'MQ014',
        nextQuest: 'MQ016'
    },

    // ========================================
    // 메인 퀘스트 - 제4장: 공허의 위협
    // ========================================
    
    'MQ016': {
        id: 'MQ016',
        type: 'main',
        chapter: 4,
        title: '차원의 균열',
        description: '하늘에 차원의 균열이 생겼습니다. 현자에게 가세요.',
        objectives: [{ type: 'talk', target: '대현자', count: 1 }],
        rewards: { exp: 5000, gold: 3000 },
        levelReq: 45,
        prevQuest: 'MQ015',
        nextQuest: 'MQ017'
    },
    'MQ017': {
        id: 'MQ017',
        type: 'main',
        chapter: 4,
        title: '공허의 침략자',
        description: '공허에서 온 존재들이 침략하고 있습니다. 물리치세요.',
        objectives: [{ type: 'kill', target: '공허전사', count: 30 }, { type: 'kill', target: '공허마법사', count: 15 }],
        rewards: { exp: 10000, gold: 8000, items: ['공허의파편'] },
        levelReq: 50,
        prevQuest: 'MQ016',
        nextQuest: 'MQ018'
    },
    'MQ018': {
        id: 'MQ018',
        type: 'main',
        chapter: 4,
        title: '심연의 문',
        description: '심연의 문을 지키는 수호자를 처치하세요.',
        objectives: [{ type: 'kill', target: '심연의감시자', count: 1 }],
        rewards: { exp: 20000, gold: 15000, items: ['심연의 파편'] },
        levelReq: 55,
        prevQuest: 'MQ017',
        nextQuest: 'MQ019'
    },
    'MQ019': {
        id: 'MQ019',
        type: 'main',
        chapter: 4,
        title: '공허를 향해',
        description: '공허의 세계로 진입하세요.',
        objectives: [{ type: 'dungeon', target: '공허의차원', count: 1 }],
        rewards: { exp: 25000, gold: 20000 },
        levelReq: 60,
        prevQuest: 'MQ018',
        nextQuest: 'MQ020'
    },

    // ========================================
    // 메인 퀘스트 - 제5장: 최후의 전투
    // ========================================
    
    'MQ020': {
        id: 'MQ020',
        type: 'main',
        chapter: 5,
        title: '공허의 군주',
        description: '공허의 군주 말라카이와 최후의 전투를 벌이세요.',
        objectives: [{ type: 'kill', target: '공허의군주말라카이', count: 1 }],
        rewards: { exp: 100000, gold: 100000, items: ['말라카이의검', '공허의왕관'] },
        levelReq: 70,
        prevQuest: 'MQ019',
        nextQuest: 'MQ021'
    },
    'MQ021': {
        id: 'MQ021',
        type: 'main',
        chapter: 5,
        title: '영웅의 귀환',
        description: '세계를 구한 영웅으로서 왕에게 보고하세요.',
        objectives: [{ type: 'talk', target: '왕', count: 1 }],
        rewards: { exp: 50000, gold: 50000, items: ['전설의영웅칭호', '성검엑스칼리버'] },
        levelReq: 70,
        prevQuest: 'MQ020'
    },

    // ========================================
    // 사이드 퀘스트 - 숲의 속삭임 시리즈
    // ========================================
    
    'SQ001': {
        id: 'SQ001',
        type: 'side',
        series: '숲의 속삭임',
        title: '숲의 약초 수집',
        description: '약사가 약초를 구해달라고 합니다.',
        objectives: [{ type: 'collect', target: '치유허브', count: 10 }],
        rewards: { exp: 150, gold: 200, items: ['체력포션'] },
        levelReq: 3
    },
    'SQ002': {
        id: 'SQ002',
        type: 'side',
        series: '숲의 속삭임',
        title: '사냥꾼의 의뢰',
        description: '사냥꾼이 늑대 가죽을 구해달라고 합니다.',
        objectives: [{ type: 'collect', target: '늑대 가죽', count: 5 }],
        rewards: { exp: 200, gold: 300, items: ['가죽장갑'] },
        levelReq: 5
    },
    'SQ003': {
        id: 'SQ003',
        type: 'side',
        series: '숲의 속삭임',
        title: '버섯 채집',
        description: '요리사가 특별한 버섯을 구해달라고 합니다.',
        objectives: [{ type: 'collect', target: '숲의버섯', count: 20 }],
        rewards: { exp: 180, gold: 250, items: ['숲의과일파이'] },
        levelReq: 4
    },
    'SQ004': {
        id: 'SQ004',
        type: 'side',
        series: '숲의 속삭임',
        title: '길잃은 아이',
        description: '숲에서 길을 잃은 아이를 찾아 마을로 데려다주세요.',
        objectives: [{ type: 'escort', target: '길잃은아이', count: 1 }],
        rewards: { exp: 300, gold: 200 },
        levelReq: 5
    },
    'SQ005': {
        id: 'SQ005',
        type: 'side',
        series: '숲의 속삭임',
        title: '엔트의 분노',
        description: '숲의 수호자 엔트가 분노했습니다. 원인을 조사하세요.',
        objectives: [{ type: 'talk', target: '엔트', count: 1 }, { type: 'kill', target: '불량벌목꾼', count: 10 }],
        rewards: { exp: 2000, gold: 1500, items: ['생명의나뭇가지'] },
        levelReq: 25
    },

    // ========================================
    // 사이드 퀘스트 - 대장장이 시리즈
    // ========================================
    
    'SQ010': {
        id: 'SQ010',
        type: 'side',
        series: '대장장이의 꿈',
        title: '광석 수집',
        description: '대장장이가 철광석을 수집해달라고 합니다.',
        objectives: [{ type: 'collect', target: '철광석', count: 20 }],
        rewards: { exp: 250, gold: 300, items: ['강철검'] },
        levelReq: 8
    },
    'SQ011': {
        id: 'SQ011',
        type: 'side',
        series: '대장장이의 꿈',
        title: '미스릴을 찾아서',
        description: '대장장이가 미스릴 광석을 구해달라고 합니다.',
        objectives: [{ type: 'collect', target: '미스릴광석', count: 10 }],
        rewards: { exp: 1000, gold: 1500, items: ['미스릴검'] },
        levelReq: 20
    },
    'SQ012': {
        id: 'SQ012',
        type: 'side',
        series: '대장장이의 꿈',
        title: '전설의 설계도',
        description: '전설의 무기 설계도를 찾아주세요.',
        objectives: [{ type: 'dungeon', target: '고대의폐허', count: 1 }, { type: 'collect', target: '전설의설계도', count: 1 }],
        rewards: { exp: 5000, gold: 5000, items: ['전설의무기선택상자'] },
        levelReq: 40
    },

    // ========================================
    // 사이드 퀘스트 - 마법사 길드 시리즈
    // ========================================
    
    'SQ020': {
        id: 'SQ020',
        type: 'side',
        series: '마법사의 길',
        title: '마나의 정수',
        description: '마법사 길드에서 정령의 정수를 수집해달라고 합니다.',
        objectives: [{ type: 'collect', target: '정령의정수', count: 5 }],
        rewards: { exp: 500, gold: 600, items: ['마나포션'] },
        levelReq: 15
    },
    'SQ021': {
        id: 'SQ021',
        type: 'side',
        series: '마법사의 길',
        title: '금지된 마법서',
        description: '금지된 마법서를 찾아 마법사 길드에 전달하세요.',
        objectives: [{ type: 'collect', target: '금지된마법서', count: 1 }],
        rewards: { exp: 3000, gold: 2500, items: ['대마법사의지팡이'] },
        levelReq: 35
    },
    'SQ022': {
        id: 'SQ022',
        type: 'side',
        series: '마법사의 길',
        title: '시간의 탑',
        description: '시간의 탑을 탐험하고 시간의 정수를 가져오세요.',
        objectives: [{ type: 'dungeon', target: '시간의탑', count: 1 }, { type: 'collect', target: '시간의정수', count: 1 }],
        rewards: { exp: 10000, gold: 8000, items: ['시간의지팡이'] },
        levelReq: 60
    },

    // ========================================
    // 일일 퀘스트
    // ========================================
    
    'DQ001': {
        id: 'DQ001',
        type: 'daily',
        title: '일일 사냥',
        description: '오늘의 몬스터를 처치하세요.',
        objectives: [{ type: 'kill', target: 'any', count: 50 }],
        rewards: { exp: 500, gold: 500 },
        levelReq: 5,
        daily: true
    },
    'DQ002': {
        id: 'DQ002',
        type: 'daily',
        title: '일일 채집',
        description: '재료를 채집하세요.',
        objectives: [{ type: 'gather', target: 'any', count: 20 }],
        rewards: { exp: 300, gold: 400 },
        levelReq: 5,
        daily: true
    },
    'DQ003': {
        id: 'DQ003',
        type: 'daily',
        title: '일일 던전',
        description: '던전을 1회 클리어하세요.',
        objectives: [{ type: 'dungeon', target: 'any', count: 1 }],
        rewards: { exp: 1000, gold: 800, items: ['일반보물상자'] },
        levelReq: 15,
        daily: true
    },
    'DQ004': {
        id: 'DQ004',
        type: 'daily',
        title: '일일 보스',
        description: '보스 몬스터를 처치하세요.',
        objectives: [{ type: 'kill', target: 'boss', count: 1 }],
        rewards: { exp: 2000, gold: 1500, items: ['희귀보물상자'] },
        levelReq: 25,
        daily: true
    },
    'DQ005': {
        id: 'DQ005',
        type: 'daily',
        title: '일일 낚시',
        description: '물고기를 잡으세요.',
        objectives: [{ type: 'fish', target: 'any', count: 10 }],
        rewards: { exp: 400, gold: 300, items: ['해산물요리'] },
        levelReq: 10,
        daily: true
    },

    // ========================================
    // 주간 퀘스트
    // ========================================
    
    'WQ001': {
        id: 'WQ001',
        type: 'weekly',
        title: '주간 정예 사냥',
        description: '정예 몬스터를 처치하세요.',
        objectives: [{ type: 'kill', target: 'elite', count: 20 }],
        rewards: { exp: 10000, gold: 8000, items: ['전설보물상자'] },
        levelReq: 30,
        weekly: true
    },
    'WQ002': {
        id: 'WQ002',
        type: 'weekly',
        title: '주간 레이드',
        description: '레이드 던전을 클리어하세요.',
        objectives: [{ type: 'raid', target: 'any', count: 3 }],
        rewards: { exp: 20000, gold: 15000, items: ['찬란한보물상자'] },
        levelReq: 50,
        weekly: true
    },
    'WQ003': {
        id: 'WQ003',
        type: 'weekly',
        title: '주간 PvP',
        description: '결투장에서 승리하세요.',
        objectives: [{ type: 'pvp', target: 'win', count: 10 }],
        rewards: { exp: 8000, gold: 10000, items: ['명예의휘장'] },
        levelReq: 20,
        weekly: true
    },

    // ========================================
    // 업적 퀘스트
    // ========================================
    
    'AQ001': {
        id: 'AQ001',
        type: 'achievement',
        title: '슬라임 헌터',
        description: '슬라임을 1000마리 처치하세요.',
        objectives: [{ type: 'kill', target: '슬라임', count: 1000 }],
        rewards: { exp: 5000, gold: 3000, items: ['슬라임인형'], title: '슬라임 헌터' },
        levelReq: 1
    },
    'AQ002': {
        id: 'AQ002',
        type: 'achievement',
        title: '드래곤 슬레이어',
        description: '드래곤 계열 몬스터를 100마리 처치하세요.',
        objectives: [{ type: 'kill', target: 'dragon', count: 100 }],
        rewards: { exp: 50000, gold: 30000, items: ['드래곤의 심장'], title: '드래곤 슬레이어' },
        levelReq: 30
    },
    'AQ003': {
        id: 'AQ003',
        type: 'achievement',
        title: '백만장자',
        description: '총 획득 골드 1,000,000에 도달하세요.',
        objectives: [{ type: 'accumulate', target: 'gold', count: 1000000 }],
        rewards: { exp: 20000, gold: 100000, title: '백만장자' },
        levelReq: 1
    },
    'AQ004': {
        id: 'AQ004',
        type: 'achievement',
        title: '던전 정복자',
        description: '모든 던전을 클리어하세요.',
        objectives: [{ type: 'dungeon', target: 'all', count: 1 }],
        rewards: { exp: 100000, gold: 80000, items: ['전설의무기선택상자'], title: '던전 정복자' },
        levelReq: 50
    },
    'AQ005': {
        id: 'AQ005',
        type: 'achievement',
        title: '수집가',
        description: '수집품을 50종류 모으세요.',
        objectives: [{ type: 'collect', target: 'collectible', count: 50 }],
        rewards: { exp: 30000, gold: 20000, items: ['희귀수집품상자'], title: '수집가' },
        levelReq: 1
    }
};

// ========================================
// 퀘스트 대량 확장 (자동 생성)
// ========================================

(function() {
    function addQuest(id, data) {
        if (!QuestDatabase[id]) {
            QuestDatabase[id] = data;
        }
    }

    var killTargets = ['슬라임', '고블린', '늑대', '멧돼지', '스켈레톤', '좀비', '오크', '트롤', '드래곤새끼', '불정령', '물정령', '바람정령', '대지정령'];
    var collectTargets = ['슬라임젤리', '뼈조각', '늑대발톱', '철광석', '은광석', '금광석', '미스릴광석', '약초', '마나허브', '치유허브'];
    var talkTargets = ['촌장', '현자', '대장장이', '상인', '사냥꾼', '약사', '연금술사', '모험가 조합원'];
    var zones = ['묘냥의 숲', '초원 평야', '불타는 사막', '얼어붙은 북방', '황혼의 습지', '천공의 산맥', '엘프의 숲', '드워프 왕국', '고대의 폐허', '심연의 균열'];

    // 대량 사이드 퀘스트 (SQ)
    for (var i = 1; i <= 300; i++) {
        var target = killTargets[i % killTargets.length];
        var count = 5 + (i % 10) * 2;
        addQuest('SQ' + (1000 + i), {
            id: 'SQ' + (1000 + i),
            type: 'side',
            title: '사냥 의뢰 #' + i,
            description: target + ' ' + count + '마리를 처치하세요.',
            objectives: [{ type: 'kill', target: target, count: count }],
            rewards: { exp: 80 + i * 5, gold: 50 + i * 3, items: ['하급체력포션'] },
            levelReq: Math.max(1, Math.floor(i / 5))
        });
    }

    // 수집 사이드 퀘스트 (SCQ)
    for (var c = 1; c <= 200; c++) {
        var cTarget = collectTargets[c % collectTargets.length];
        var cCount = 3 + (c % 7);
        addQuest('SCQ' + (2000 + c), {
            id: 'SCQ' + (2000 + c),
            type: 'side',
            title: '수집 의뢰 #' + c,
            description: cTarget + ' ' + cCount + '개를 모아오세요.',
            objectives: [{ type: 'collect', target: cTarget, count: cCount }],
            rewards: { exp: 60 + c * 4, gold: 40 + c * 2, items: ['빵'] },
            levelReq: Math.max(1, Math.floor(c / 6))
        });
    }

    // 대화/탐험 퀘스트 (STQ)
    for (var t = 1; t <= 120; t++) {
        var talk = talkTargets[t % talkTargets.length];
        addQuest('STQ' + (3000 + t), {
            id: 'STQ' + (3000 + t),
            type: 'side',
            title: '연락 임무 #' + t,
            description: talk + '에게 소식을 전하세요.',
            objectives: [{ type: 'talk', target: talk, count: 1 }],
            rewards: { exp: 50 + t * 3, gold: 30 + t * 2 },
            levelReq: Math.max(1, Math.floor(t / 8))
        });
    }

    // 일일 퀘스트 확장 (DQ)
    for (var d = 1; d <= 200; d++) {
        var dTarget = killTargets[d % killTargets.length];
        var dCount = 10 + (d % 10) * 2;
        addQuest('DQ' + (4000 + d), {
            id: 'DQ' + (4000 + d),
            type: 'daily',
            title: '일일 토벌 #' + d,
            description: dTarget + ' ' + dCount + '마리를 처치하세요.',
            objectives: [{ type: 'kill', target: dTarget, count: dCount }],
            rewards: { exp: 150 + d * 4, gold: 120 + d * 3 },
            levelReq: Math.max(1, Math.floor(d / 4)),
            resetDaily: true
        });
    }

    // 길드 퀘스트 확장 (GQ)
    for (var g = 1; g <= 150; g++) {
        var zone = zones[g % zones.length];
        var gTarget = killTargets[g % killTargets.length];
        var gCount = 15 + (g % 10) * 3;
        addQuest('GQ' + (5000 + g), {
            id: 'GQ' + (5000 + g),
            type: 'guild',
            title: '길드 작전 #' + g,
            description: zone + '에서 ' + gTarget + ' ' + gCount + '마리를 처치하세요.',
            objectives: [{ type: 'kill', target: gTarget, count: gCount }],
            rewards: { exp: 300 + g * 6, gold: 250 + g * 4, items: ['길드훈장'] },
            levelReq: Math.max(10, Math.floor(g / 3))
        });
    }

    // 확장 메인 퀘스트 (MQ)
    for (var m = 13; m <= 80; m++) {
        addQuest('MQ' + (100 + m), {
            id: 'MQ' + (100 + m),
            type: 'main',
            chapter: Math.floor(m / 8) + 3,
            title: '주요 사건 #' + m,
            description: '세계의 비밀을 밝히기 위한 단서를 찾으세요.',
            objectives: [{ type: 'talk', target: talkTargets[m % talkTargets.length], count: 1 }],
            rewards: { exp: 800 + m * 30, gold: 600 + m * 20, items: ['중급체력포션'] },
            levelReq: Math.min(100, 10 + m)
        });
    }
})();

// 퀘스트 유틸리티 함수들
function getQuestsByType(type) {
    var result = [];
    for (var id in QuestDatabase) {
        if (QuestDatabase[id].type === type) {
            result.push(QuestDatabase[id]);
        }
    }
    return result;
}

function getQuestsByLevel(level) {
    var result = [];
    for (var id in QuestDatabase) {
        if (QuestDatabase[id].levelReq <= level) {
            result.push(QuestDatabase[id]);
        }
    }
    return result;
}

function getQuestsByChapter(chapter) {
    var result = [];
    for (var id in QuestDatabase) {
        if (QuestDatabase[id].chapter === chapter) {
            result.push(QuestDatabase[id]);
        }
    }
    return result;
}

// Export
if (typeof module !== 'undefined') {
    module.exports = { 
        QuestDatabase: QuestDatabase,
        getQuestsByType: getQuestsByType,
        getQuestsByLevel: getQuestsByLevel,
        getQuestsByChapter: getQuestsByChapter
    };
}



// ---------- gameData/jobs_skills.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */


/**
 * 묘냥의 숲 - 스킬 & 직업 데이터베이스
 * 직업별 스킬, 패시브, 궁극기
 */

var JobDatabase = {
    // ========================================
    // 기본 직업
    // ========================================
    
    '초보자': {
        id: 'novice',
        name: '초보자',
        description: '모든 모험가의 시작',
        baseStats: { hp: 100, mp: 50, att: 10, def: 5, speed: 10 },
        statGrowth: { hp: 10, mp: 5, att: 2, def: 1, speed: 1 },
        skills: ['기본공격', '응급치료'],
        levelReq: 1,
        advanceTo: ['전사', '마법사', '궁수', '도적']
    },
    
    // ========================================
    // 1차 전직
    // ========================================
    
    '전사': {
        id: 'warrior',
        name: '전사',
        description: '강인한 근접 전투 전문가',
        baseStats: { hp: 150, mp: 30, att: 20, def: 15, speed: 8 },
        statGrowth: { hp: 20, mp: 3, att: 5, def: 4, speed: 1 },
        skills: ['강타', '방어태세', '도발', '돌진'],
        passives: ['강인함', '철의의지'],
        levelReq: 10,
        prevJob: '초보자',
        advanceTo: ['기사', '버서커', '검투사']
    },
    '마법사': {
        id: 'mage',
        name: '마법사',
        description: '강력한 마법을 구사하는 지식인',
        baseStats: { hp: 80, mp: 150, att: 5, def: 5, speed: 10, magic: 25 },
        statGrowth: { hp: 8, mp: 15, att: 1, def: 1, speed: 1, magic: 6 },
        skills: ['파이어볼', '아이스스피어', '번개충격', '마나실드'],
        passives: ['마력집중', '명상'],
        levelReq: 10,
        prevJob: '초보자',
        advanceTo: ['화염마법사', '빙결마법사', '대마법사']
    },
    '궁수': {
        id: 'archer',
        name: '궁수',
        description: '원거리 공격 전문가',
        baseStats: { hp: 100, mp: 60, att: 18, def: 8, speed: 15 },
        statGrowth: { hp: 12, mp: 5, att: 5, def: 2, speed: 3 },
        skills: ['정조준', '다중사격', '화살비', '독화살'],
        passives: ['매의눈', '신속'],
        levelReq: 10,
        prevJob: '초보자',
        advanceTo: ['저격수', '레인저', '수렵꾼']
    },
    '도적': {
        id: 'thief',
        name: '도적',
        description: '은밀한 공격과 속임수의 달인',
        baseStats: { hp: 90, mp: 70, att: 16, def: 6, speed: 20 },
        statGrowth: { hp: 10, mp: 6, att: 4, def: 1, speed: 4 },
        skills: ['기습', '독칼날', '그림자걷기', '급소공격'],
        passives: ['은신', '민첩'],
        levelReq: 10,
        prevJob: '초보자',
        advanceTo: ['암살자', '닌자', '해적']
    },
    
    // ========================================
    // 2차 전직 - 전사 계열
    // ========================================
    
    '기사': {
        id: 'knight',
        name: '기사',
        description: '명예로운 수호자',
        baseStats: { hp: 200, mp: 50, att: 30, def: 35, speed: 6 },
        statGrowth: { hp: 30, mp: 5, att: 6, def: 8, speed: 1 },
        skills: ['성스러운방패', '집행자의일격', '수호의빛', '도발'],
        passives: ['철벽', '불굴의정신', '수호자의축복'],
        ultimate: '신성한심판',
        levelReq: 30,
        prevJob: '전사',
        advanceTo: ['팔라딘', '다크나이트']
    },
    '버서커': {
        id: 'berserker',
        name: '버서커',
        description: '분노의 전사',
        baseStats: { hp: 180, mp: 40, att: 45, def: 20, speed: 10 },
        statGrowth: { hp: 25, mp: 3, att: 10, def: 3, speed: 2 },
        skills: ['광분', '피의갈증', '지옥의단죄', '전쟁의포효'],
        passives: ['광전사의혈기', '고통무시', '분노축적'],
        ultimate: '광기의해방',
        levelReq: 30,
        prevJob: '전사',
        advanceTo: ['광전사', '전쟁군주']
    },
    '검투사': {
        id: 'gladiator',
        name: '검투사',
        description: '쌍검을 휘두르는 검술의 달인',
        baseStats: { hp: 160, mp: 50, att: 40, def: 25, speed: 12 },
        statGrowth: { hp: 22, mp: 4, att: 8, def: 4, speed: 2 },
        skills: ['회전베기', '이중참격', '검무', '카운터'],
        passives: ['쌍검술', '검의춤', '투쟁본능'],
        ultimate: '검황의일격',
        levelReq: 30,
        prevJob: '전사',
        advanceTo: ['소드마스터', '블레이드댄서']
    },
    
    // ========================================
    // 2차 전직 - 마법사 계열
    // ========================================
    
    '화염마법사': {
        id: 'pyromancer',
        name: '화염마법사',
        description: '불의 마법 전문가',
        baseStats: { hp: 100, mp: 200, att: 8, def: 8, speed: 10, magic: 50 },
        statGrowth: { hp: 10, mp: 20, att: 1, def: 1, speed: 1, magic: 12 },
        skills: ['대화염', '화염폭발', '불기둥', '용의숨결'],
        passives: ['불의친화', '화염증폭', '연소'],
        ultimate: '지옥의화염',
        levelReq: 30,
        prevJob: '마법사',
        advanceTo: ['불의화신']
    },
    '빙결마법사': {
        id: 'cryomancer',
        name: '빙결마법사',
        description: '얼음의 마법 전문가',
        baseStats: { hp: 100, mp: 200, att: 8, def: 10, speed: 10, magic: 48 },
        statGrowth: { hp: 10, mp: 20, att: 1, def: 2, speed: 1, magic: 11 },
        skills: ['빙결', '눈보라', '얼음창', '절대영도'],
        passives: ['얼음의친화', '서리증폭', '동결'],
        ultimate: '영원의겨울',
        levelReq: 30,
        prevJob: '마법사',
        advanceTo: ['얼음의화신']
    },
    '대마법사': {
        id: 'archmage',
        name: '대마법사',
        description: '모든 원소의 마법을 다루는 현자',
        baseStats: { hp: 110, mp: 250, att: 10, def: 12, speed: 8, magic: 55 },
        statGrowth: { hp: 12, mp: 25, att: 1, def: 2, speed: 1, magic: 13 },
        skills: ['원소융합', '아케인미사일', '마력폭발', '시간가속'],
        passives: ['마력의바다', '현자의지혜', '원소친화'],
        ultimate: '대마력포',
        levelReq: 30,
        prevJob: '마법사',
        advanceTo: ['아크메이지', '현자']
    },
    
    // ========================================
    // 2차 전직 - 궁수 계열
    // ========================================
    
    '저격수': {
        id: 'sniper',
        name: '저격수',
        description: '한 방의 극대화',
        baseStats: { hp: 120, mp: 80, att: 35, def: 10, speed: 12 },
        statGrowth: { hp: 14, mp: 6, att: 9, def: 2, speed: 2 },
        skills: ['치명사격', '완벽조준', '관통화살', '급소저격'],
        passives: ['저격수의눈', '치명증가', '집중력'],
        ultimate: '저격수의극의',
        levelReq: 30,
        prevJob: '궁수',
        advanceTo: ['명사수', '헤드헌터']
    },
    '레인저': {
        id: 'ranger',
        name: '레인저',
        description: '숲의 수호자',
        baseStats: { hp: 130, mp: 100, att: 30, def: 15, speed: 15 },
        statGrowth: { hp: 16, mp: 8, att: 7, def: 3, speed: 3 },
        skills: ['자연의분노', '덫설치', '야수소환', '위장'],
        passives: ['자연의축복', '야수의교감', '숲의지식'],
        ultimate: '숲의심판',
        levelReq: 30,
        prevJob: '궁수',
        advanceTo: ['자연의수호자', '야수조련사']
    },
    '수렵꾼': {
        id: 'hunter',
        name: '수렵꾼',
        description: '몬스터 사냥 전문가',
        baseStats: { hp: 140, mp: 70, att: 32, def: 12, speed: 14 },
        statGrowth: { hp: 18, mp: 5, att: 8, def: 2, speed: 3 },
        skills: ['표식', '맹수사냥', '추적', '함정'],
        passives: ['사냥꾼의직감', '몬스터지식', '추적자'],
        ultimate: '궁극의사냥',
        levelReq: 30,
        prevJob: '궁수',
        advanceTo: ['몬스터헌터', '바운티헌터']
    },
    
    // ========================================
    // 2차 전직 - 도적 계열
    // ========================================
    
    '암살자': {
        id: 'assassin',
        name: '암살자',
        description: '어둠의 살인자',
        baseStats: { hp: 100, mp: 90, att: 35, def: 8, speed: 25 },
        statGrowth: { hp: 12, mp: 7, att: 9, def: 1, speed: 5 },
        skills: ['암습', '그림자베기', '독살', '순간이동'],
        passives: ['그림자숙련', '치명적독', '처형자'],
        ultimate: '죽음의춤',
        levelReq: 30,
        prevJob: '도적',
        advanceTo: ['사신', '그림자무사']
    },
    '닌자': {
        id: 'ninja',
        name: '닌자',
        description: '인술의 달인',
        baseStats: { hp: 110, mp: 100, att: 30, def: 10, speed: 22 },
        statGrowth: { hp: 14, mp: 8, att: 7, def: 2, speed: 4 },
        skills: ['분신술', '표창투척', '연막', '질풍참'],
        passives: ['인술', '회피달인', '속임수'],
        ultimate: '구미호참',
        levelReq: 30,
        prevJob: '도적',
        advanceTo: ['검객', '인법사']
    },
    '해적': {
        id: 'pirate',
        name: '해적',
        description: '바다의 무법자',
        baseStats: { hp: 130, mp: 80, att: 28, def: 15, speed: 18 },
        statGrowth: { hp: 16, mp: 6, att: 6, def: 3, speed: 3 },
        skills: ['함포사격', '칼춤', '럼마시기', '약탈'],
        passives: ['바다의축복', '황금의눈', '불굴'],
        ultimate: '해적왕의분노',
        levelReq: 30,
        prevJob: '도적',
        advanceTo: ['해적선장', '밀수꾼']
    },
    
    // ========================================
    // 3차 전직 (최종)
    // ========================================
    
    '팔라딘': {
        id: 'paladin',
        name: '팔라딘',
        description: '빛의 성기사',
        baseStats: { hp: 300, mp: 150, att: 50, def: 60, speed: 8, magic: 30 },
        statGrowth: { hp: 40, mp: 12, att: 8, def: 12, speed: 1, magic: 5 },
        skills: ['신성일격', '성스러운보호막', '천벌', '부활의빛', '심판'],
        passives: ['빛의가호', '신앙심', '불사', '성전사의축복'],
        ultimate: '성스러운심판',
        levelReq: 60,
        prevJob: '기사',
        finalJob: true
    },
    '광전사': {
        id: 'berserker_lord',
        name: '광전사',
        description: '분노의 화신',
        baseStats: { hp: 250, mp: 50, att: 80, def: 30, speed: 15 },
        statGrowth: { hp: 35, mp: 4, att: 15, def: 4, speed: 3 },
        skills: ['광기의일격', '피의축제', '학살', '불멸의분노', '전쟁의신'],
        passives: ['피의갈망', '고통전환', '광기', '파괴자의본능'],
        ultimate: '라그나로크',
        levelReq: 60,
        prevJob: '버서커',
        finalJob: true
    },
    '아크메이지': {
        id: 'archmage_supreme',
        name: '아크메이지',
        description: '마법의 정점',
        baseStats: { hp: 150, mp: 400, att: 15, def: 20, speed: 10, magic: 100 },
        statGrowth: { hp: 15, mp: 40, att: 2, def: 3, speed: 1, magic: 20 },
        skills: ['원소마스터리', '대마력폭발', '시공간왜곡', '별의폭풍', '차원문'],
        passives: ['무한마력', '마법증폭', '현자의깨달음', '원소융합'],
        ultimate: '메테오스웜',
        levelReq: 60,
        prevJob: '대마법사',
        finalJob: true
    },
    '사신': {
        id: 'reaper',
        name: '사신',
        description: '죽음의 대리인',
        baseStats: { hp: 180, mp: 150, att: 70, def: 15, speed: 30 },
        statGrowth: { hp: 18, mp: 12, att: 14, def: 2, speed: 6 },
        skills: ['죽음의낫', '영혼수확', '그림자차원', '운명변경', '저승사자'],
        passives: ['죽음의손길', '영혼흡수', '사신의눈', '불가피한죽음'],
        ultimate: '영혼참수',
        levelReq: 60,
        prevJob: '암살자',
        finalJob: true
    }
};

// ========================================
// 스킬 데이터베이스
// ========================================

var SkillDatabase = {
    // 기본 스킬
    '기본공격': { name: '기본공격', type: 'active', damage: 100, mpCost: 0, cooldown: 0, description: '기본 공격' },
    '응급치료': { name: '응급치료', type: 'active', heal: 30, mpCost: 10, cooldown: 30, description: '체력을 소량 회복' },
    
    // 전사 스킬
    '강타': { name: '강타', type: 'active', damage: 150, mpCost: 15, cooldown: 5, description: '강력하게 내려친다' },
    '방어태세': { name: '방어태세', type: 'buff', defBonus: 50, duration: 10, mpCost: 20, cooldown: 30, description: '방어력 증가' },
    '도발': { name: '도발', type: 'active', effect: 'taunt', mpCost: 10, cooldown: 15, description: '적의 어그로를 끈다' },
    '돌진': { name: '돌진', type: 'active', damage: 120, effect: 'stun', mpCost: 25, cooldown: 10, description: '적에게 돌진하여 기절시킴' },
    
    // 마법사 스킬
    '파이어볼': { name: '파이어볼', type: 'active', damage: 180, element: 'fire', mpCost: 30, cooldown: 3, description: '불덩어리를 발사' },
    '아이스스피어': { name: '아이스스피어', type: 'active', damage: 160, element: 'ice', effect: 'slow', mpCost: 35, cooldown: 4, description: '얼음창으로 공격' },
    '번개충격': { name: '번개충격', type: 'active', damage: 200, element: 'lightning', mpCost: 40, cooldown: 5, description: '번개로 타격' },
    '마나실드': { name: '마나실드', type: 'buff', shield: 100, duration: 30, mpCost: 50, cooldown: 60, description: '마나 보호막 생성' },
    
    // 궁수 스킬
    '정조준': { name: '정조준', type: 'active', damage: 200, critBonus: 30, mpCost: 25, cooldown: 8, description: '정확히 조준하여 발사' },
    '다중사격': { name: '다중사격', type: 'active', damage: 80, hits: 3, mpCost: 30, cooldown: 6, description: '3발 연속 발사' },
    '화살비': { name: '화살비', type: 'active', damage: 60, aoe: true, hits: 5, mpCost: 50, cooldown: 15, description: '화살비를 내린다' },
    '독화살': { name: '독화살', type: 'active', damage: 100, dot: 20, dotDuration: 10, mpCost: 20, cooldown: 10, description: '독을 묻힌 화살' },
    
    // 도적 스킬
    '기습': { name: '기습', type: 'active', damage: 250, fromStealth: true, mpCost: 30, cooldown: 15, description: '은신 상태에서 공격시 추가 데미지' },
    '독칼날': { name: '독칼날', type: 'active', damage: 120, dot: 30, dotDuration: 8, mpCost: 25, cooldown: 8, description: '독을 묻힌 칼로 공격' },
    '그림자걷기': { name: '그림자걷기', type: 'buff', effect: 'stealth', duration: 15, mpCost: 40, cooldown: 30, description: '은신 상태가 된다' },
    '급소공격': { name: '급소공격', type: 'active', damage: 300, critChance: 100, mpCost: 50, cooldown: 20, description: '확정 크리티컬' },
    
    // 궁극기
    '신성한심판': { name: '신성한심판', type: 'ultimate', damage: 500, element: 'holy', heal: 200, mpCost: 100, cooldown: 180, description: '신성한 빛으로 적을 심판하고 아군을 치유' },
    '영혼참수': { name: '영혼참수', type: 'ultimate', damage: 1500, execute: true, mpCost: 150, cooldown: 300, description: '체력 20% 이하 적 즉사' },
    '라그나로크': { name: '라그나로크', type: 'ultimate', damage: 2000, selfDamage: 50, mpCost: 0, cooldown: 360, description: '자신의 체력을 깎아 최대 피해' }
};

// Export
if (typeof module !== 'undefined') {
    module.exports = { 
        JobDatabase: JobDatabase,
        SkillDatabase: SkillDatabase
    };
}








// ---------- gameData/crafting_npcs.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */



/**
 * 묘냥의 숲 - 제작 레시피 & NPC 데이터베이스
 */

// ========================================
// 제작 레시피 데이터베이스
// ========================================

var CraftingRecipes = {
    // --- 무기 제작 ---
    '철검': {
        result: '철검',
        resultCount: 1,
        materials: [{ item: '철주괴', count: 3 }, { item: '나뭇가지', count: 1 }],
        skill: '대장장이',
        skillLevel: 1,
        time: 30
    },
    '강철검': {
        result: '강철검',
        resultCount: 1,
        materials: [{ item: '강철주괴', count: 5 }, { item: '참나무목재', count: 2 }],
        skill: '대장장이',
        skillLevel: 5,
        time: 60
    },
    '미스릴검': {
        result: '미스릴검',
        resultCount: 1,
        materials: [{ item: '미스릴주괴', count: 8 }, { item: '단풍나무목재', count: 3 }, { item: '루비원석', count: 1 }],
        skill: '대장장이',
        skillLevel: 15,
        time: 120
    },
    '사막곡검': {
        result: '사막곡검',
        resultCount: 1,
        materials: [{ item: '강철주괴', count: 4 }, { item: '태양석파편', count: 3 }, { item: '참나무목재', count: 2 }],
        skill: '대장장이',
        skillLevel: 12,
        time: 90
    },
    '서리거인의망치': {
        result: '서리거인의망치',
        resultCount: 1,
        materials: [{ item: '강철주괴', count: 6 }, { item: '빙설결정', count: 4 }, { item: '참나무목재', count: 2 }],
        skill: '대장장이',
        skillLevel: 16,
        time: 110
    },
    '늪지의단검': {
        result: '늪지의단검',
        resultCount: 1,
        materials: [{ item: '강철주괴', count: 3 }, { item: '늪지이끼덩이', count: 3 }, { item: '가죽조각', count: 2 }],
        skill: '대장장이',
        skillLevel: 10,
        time: 70
    },
    '폭풍창': {
        result: '폭풍창',
        resultCount: 1,
        materials: [{ item: '강철주괴', count: 5 }, { item: '폭풍결정', count: 2 }, { item: '천둥돌', count: 2 }],
        skill: '대장장이',
        skillLevel: 18,
        time: 120
    },
    '실버문활': {
        result: '실버문활',
        resultCount: 1,
        materials: [{ item: '단풍나무목재', count: 4 }, { item: '하늘수정', count: 1 }, { item: '달빛꽃정수', count: 2 }],
        skill: '대장장이',
        skillLevel: 16,
        time: 95
    },
    '드워프강철검': {
        result: '드워프강철검',
        resultCount: 1,
        materials: [{ item: '드워프강철', count: 5 }, { item: '아다만타이트', count: 2 }, { item: '용광로의 불꽃', count: 1 }],
        skill: '대장장이',
        skillLevel: 20,
        time: 140
    },
    '시간의검': {
        result: '시간의검',
        resultCount: 1,
        materials: [{ item: '미스릴주괴', count: 6 }, { item: '시간의 모래', count: 3 }, { item: '고대 마법석', count: 2 }],
        skill: '대장장이',
        skillLevel: 26,
        time: 180
    },
    '공허의창': {
        result: '공허의창',
        resultCount: 1,
        materials: [{ item: '아다만틴주괴', count: 6 }, { item: '공허의 핵', count: 2 }, { item: '암흑의 정수', count: 2 }],
        skill: '대장장이',
        skillLevel: 28,
        time: 200
    },
    '성광의검': {
        result: '성광의검',
        resultCount: 1,
        materials: [{ item: '아다만틴주괴', count: 6 }, { item: '신성한 빛', count: 2 }, { item: '축복의 정수', count: 2 }],
        skill: '대장장이',
        skillLevel: 30,
        time: 220
    },
    '고대마법지팡이': {
        result: '고대마법지팡이',
        resultCount: 1,
        materials: [{ item: '고대 마법석', count: 3 }, { item: '차원의 파편', count: 2 }, { item: '단풍나무목재', count: 3 }],
        skill: '대장장이',
        skillLevel: 26,
        time: 170
    },
    '성광지팡이': {
        result: '성광지팡이',
        resultCount: 1,
        materials: [{ item: '신성한 빛', count: 3 }, { item: '생명의 물', count: 2 }, { item: '세계수나뭇가지', count: 1 }],
        skill: '대장장이',
        skillLevel: 30,
        time: 200
    },
    '드래곤슬레이어': {
        result: '드래곤슬레이어',
        resultCount: 1,
        materials: [{ item: '아다만틴주괴', count: 15 }, { item: '용의비늘', count: 10 }, { item: '용의심장', count: 1 }, { item: '불의정수', count: 5 }],
        skill: '대장장이',
        skillLevel: 40,
        time: 600
    },
    
    // --- 방어구 제작 ---
    '가죽갑옷': {
        result: '가죽갑옷',
        resultCount: 1,
        materials: [{ item: '가죽조각', count: 5 }, { item: '천조각', count: 2 }],
        skill: '재봉',
        skillLevel: 1,
        time: 30
    },
    '철갑옷': {
        result: '철갑옷',
        resultCount: 1,
        materials: [{ item: '철주괴', count: 8 }, { item: '두꺼운가죽', count: 3 }],
        skill: '대장장이',
        skillLevel: 8,
        time: 90
    },
    '빙설갑옷': {
        result: '빙설갑옷',
        resultCount: 1,
        materials: [{ item: '강철주괴', count: 6 }, { item: '빙설결정', count: 3 }, { item: '고급가죽', count: 3 }],
        skill: '대장장이',
        skillLevel: 14,
        time: 110
    },
    '오아시스로브': {
        result: '오아시스로브',
        resultCount: 1,
        materials: [{ item: '천조각', count: 4 }, { item: '사막향신료', count: 2 }, { item: '마력의천', count: 1 }],
        skill: '재봉',
        skillLevel: 10,
        time: 70
    },
    '부패가죽갑옷': {
        result: '부패가죽갑옷',
        resultCount: 1,
        materials: [{ item: '가죽조각', count: 6 }, { item: '늪지이끼덩이', count: 3 }, { item: '유령의정수', count: 1 }],
        skill: '재봉',
        skillLevel: 12,
        time: 85
    },
    '천공갑옷': {
        result: '천공갑옷',
        resultCount: 1,
        materials: [{ item: '미스릴주괴', count: 6 }, { item: '천둥돌', count: 2 }, { item: '하늘수정', count: 2 }],
        skill: '대장장이',
        skillLevel: 20,
        time: 140
    },
    '드워프강철갑옷': {
        result: '드워프강철갑옷',
        resultCount: 1,
        materials: [{ item: '드워프강철', count: 6 }, { item: '아다만타이트', count: 3 }, { item: '용광로의 불꽃', count: 1 }],
        skill: '대장장이',
        skillLevel: 22,
        time: 160
    },
    '차원방어구': {
        result: '차원방어구',
        resultCount: 1,
        materials: [{ item: '아다만틴주괴', count: 6 }, { item: '차원의 파편', count: 2 }, { item: '고대 마법석', count: 2 }],
        skill: '대장장이',
        skillLevel: 26,
        time: 190
    },
    '용암갑옷': {
        result: '용암갑옷',
        resultCount: 1,
        materials: [{ item: '아다만틴주괴', count: 6 }, { item: '용암의 핵', count: 2 }, { item: '영원한 불꽃', count: 2 }],
        skill: '대장장이',
        skillLevel: 28,
        time: 200
    },
    '성역갑옷': {
        result: '성역갑옷',
        resultCount: 1,
        materials: [{ item: '아다만틴주괴', count: 6 }, { item: '신성한 빛', count: 2 }, { item: '축복의 정수', count: 2 }],
        skill: '대장장이',
        skillLevel: 30,
        time: 210
    },
    '실버문로브': {
        result: '실버문로브',
        resultCount: 1,
        materials: [{ item: '천조각', count: 5 }, { item: '달빛꽃정수', count: 3 }, { item: '엘프 허브', count: 1 }],
        skill: '재봉',
        skillLevel: 15,
        time: 100
    },
    '심연로브': {
        result: '심연로브',
        resultCount: 1,
        materials: [{ item: '마력의천', count: 3 }, { item: '심연의 수정', count: 2 }, { item: '암흑의 정수', count: 2 }],
        skill: '재봉',
        skillLevel: 26,
        time: 170
    },
    '성광로브': {
        result: '성광로브',
        resultCount: 1,
        materials: [{ item: '마력의천', count: 3 }, { item: '신성한 빛', count: 2 }, { item: '생명의 물', count: 2 }],
        skill: '재봉',
        skillLevel: 28,
        time: 180
    },
    '용암로브': {
        result: '용암로브',
        resultCount: 1,
        materials: [{ item: '마력의천', count: 3 }, { item: '영원한 불꽃', count: 2 }, { item: '불의 정수', count: 2 }],
        skill: '재봉',
        skillLevel: 28,
        time: 180
    },
    '용광로방패': {
        result: '용광로방패',
        resultCount: 1,
        materials: [{ item: '드워프강철', count: 4 }, { item: '용광로의 불꽃', count: 1 }, { item: '지하수정', count: 1 }],
        skill: '대장장이',
        skillLevel: 20,
        time: 130
    },
    '차원방패': {
        result: '차원방패',
        resultCount: 1,
        materials: [{ item: '아다만틴주괴', count: 4 }, { item: '차원의 파편', count: 2 }, { item: '고대 마법석', count: 1 }],
        skill: '대장장이',
        skillLevel: 26,
        time: 170
    },
    '암흑방패': {
        result: '암흑방패',
        resultCount: 1,
        materials: [{ item: '아다만틴주괴', count: 4 }, { item: '암흑의 정수', count: 2 }, { item: '심연의 수정', count: 1 }],
        skill: '대장장이',
        skillLevel: 27,
        time: 180
    },
    '성역방패': {
        result: '성역방패',
        resultCount: 1,
        materials: [{ item: '아다만틴주괴', count: 4 }, { item: '신성한 빛', count: 2 }, { item: '축복의 정수', count: 1 }],
        skill: '대장장이',
        skillLevel: 30,
        time: 190
    },
    '용암방패': {
        result: '용암방패',
        resultCount: 1,
        materials: [{ item: '아다만틴주괴', count: 4 }, { item: '용암의 핵', count: 2 }, { item: '영원한 불꽃', count: 1 }],
        skill: '대장장이',
        skillLevel: 28,
        time: 185
    },
    '태양석방패': {
        result: '태양석방패',
        resultCount: 1,
        materials: [{ item: '강철주괴', count: 4 }, { item: '태양석파편', count: 2 }, { item: '가죽조각', count: 2 }],
        skill: '대장장이',
        skillLevel: 12,
        time: 80
    },
    '서리수호방패': {
        result: '서리수호방패',
        resultCount: 1,
        materials: [{ item: '강철주괴', count: 4 }, { item: '빙설결정', count: 2 }, { item: '서리꽃', count: 2 }],
        skill: '대장장이',
        skillLevel: 14,
        time: 85
    },
    '미스릴갑옷': {
        result: '미스릴갑옷',
        resultCount: 1,
        materials: [{ item: '미스릴주괴', count: 15 }, { item: '고급가죽', count: 5 }, { item: '마력의천', count: 3 }],
        skill: '대장장이',
        skillLevel: 25,
        time: 180
    },
    
    // --- 포션 제작 ---
    '체력포션': {
        result: '체력포션',
        resultCount: 3,
        materials: [{ item: '치유허브', count: 3 }, { item: '빈병', count: 1 }],
        skill: '연금술',
        skillLevel: 1,
        time: 10
    },
    '중급체력포션': {
        result: '중급체력포션',
        resultCount: 3,
        materials: [{ item: '치유허브', count: 5 }, { item: '생명의허브', count: 2 }, { item: '빈병', count: 1 }],
        skill: '연금술',
        skillLevel: 10,
        time: 20
    },
    '마나포션': {
        result: '마나포션',
        resultCount: 3,
        materials: [{ item: '마나허브', count: 3 }, { item: '빈병', count: 1 }],
        skill: '연금술',
        skillLevel: 1,
        time: 10
    },
    '엘릭서': {
        result: '엘릭서',
        resultCount: 1,
        materials: [{ item: '생명의허브', count: 5 }, { item: '마력의꽃', count: 5 }, { item: '세계수잎', count: 1 }, { item: '빈병', count: 1 }],
        skill: '연금술',
        skillLevel: 40,
        time: 120
    },
    
    // --- 음식 제작 ---
    '고기구이': {
        result: '고기구이',
        resultCount: 1,
        materials: [{ item: '고기', count: 1 }],
        skill: '요리',
        skillLevel: 1,
        time: 5
    },
    '스테이크': {
        result: '스테이크',
        resultCount: 1,
        materials: [{ item: '상급고기', count: 1 }, { item: '소금', count: 1 }],
        skill: '요리',
        skillLevel: 5,
        time: 15
    },
    '왕의만찬': {
        result: '왕의만찬',
        resultCount: 1,
        materials: [{ item: '상급고기', count: 3 }, { item: '고급야채', count: 5 }, { item: '향신료', count: 3 }, { item: '엘프와인', count: 1 }],
        skill: '요리',
        skillLevel: 25,
        time: 60
    },
    
    // --- 주괴 제련 ---
    '철주괴': {
        result: '철주괴',
        resultCount: 1,
        materials: [{ item: '철광석', count: 3 }],
        skill: '제련',
        skillLevel: 1,
        time: 10
    },
    '강철주괴': {
        result: '강철주괴',
        resultCount: 1,
        materials: [{ item: '철주괴', count: 2 }, { item: '석탄', count: 1 }],
        skill: '제련',
        skillLevel: 5,
        time: 20
    },
    '미스릴주괴': {
        result: '미스릴주괴',
        resultCount: 1,
        materials: [{ item: '미스릴광석', count: 3 }],
        skill: '제련',
        skillLevel: 15,
        time: 30
    },
    '아다만틴주괴': {
        result: '아다만틴주괴',
        resultCount: 1,
        materials: [{ item: '아다만틴광석', count: 3 }, { item: '용암정수', count: 1 }],
        skill: '제련',
        skillLevel: 30,
        time: 60
    }
};

// ========================================
// 제작 레시피 대량 확장 (자동 생성)
// ========================================

(function() {
    function addRecipe(key, data) {
        if (!CraftingRecipes[key]) {
            CraftingRecipes[key] = data;
        }
    }

    var weaponBases = [
        { name: '숏소드', mat: '철주괴', wood: '나뭇가지', level: 1 },
        { name: '롱소드', mat: '강철주괴', wood: '참나무목재', level: 5 },
        { name: '브로드소드', mat: '강철주괴', wood: '참나무목재', level: 7 },
        { name: '바스타드소드', mat: '미스릴주괴', wood: '단풍나무목재', level: 12 },
        { name: '그레이트소드', mat: '강철주괴', wood: '참나무목재', level: 10 },
        { name: '클레이모어', mat: '미스릴주괴', wood: '단풍나무목재', level: 15 },
        { name: '쯔바이핸더', mat: '아다만틴주괴', wood: '흑단목재', level: 22 },
        { name: '손도끼', mat: '철주괴', wood: '나뭇가지', level: 2 },
        { name: '전투도끼', mat: '강철주괴', wood: '참나무목재', level: 7 },
        { name: '배틀액스', mat: '미스릴주괴', wood: '단풍나무목재', level: 12 },
        { name: '나무창', mat: '철주괴', wood: '나뭇가지', level: 1 },
        { name: '철창', mat: '강철주괴', wood: '참나무목재', level: 4 },
        { name: '파이크', mat: '미스릴주괴', wood: '단풍나무목재', level: 10 },
        { name: '나무활', mat: '참나무목재', wood: '나뭇가지', level: 1 },
        { name: '롱보우', mat: '단풍나무목재', wood: '참나무목재', level: 8 },
        { name: '컴파운드보우', mat: '흑단목재', wood: '단풍나무목재', level: 15 },
        { name: '나무지팡이', mat: '나뭇가지', wood: '나뭇가지', level: 1 },
        { name: '수정지팡이', mat: '미스릴주괴', wood: '단풍나무목재', level: 18 }
    ];

    for (var i = 0; i < weaponBases.length; i++) {
        var w = weaponBases[i];
        addRecipe(w.name, {
            result: w.name,
            resultCount: 1,
            materials: [
                { item: w.mat, count: Math.max(2, Math.floor(w.level / 2)) },
                { item: w.wood, count: Math.max(1, Math.floor(w.level / 3)) }
            ],
            skill: '대장장이',
            skillLevel: w.level,
            time: 20 + w.level * 3
        });
    }

    var armorBases = [
        { name: '가죽투구', mat: '가죽조각', cloth: '천조각', level: 3 },
        { name: '철투구', mat: '철주괴', cloth: '천조각', level: 8 },
        { name: '강철투구', mat: '강철주괴', cloth: '고급천', level: 15 },
        { name: '가죽장갑', mat: '가죽조각', cloth: '천조각', level: 3 },
        { name: '철건틀릿', mat: '철주괴', cloth: '고급천', level: 10 },
        { name: '강철건틀릿', mat: '강철주괴', cloth: '고급천', level: 20 },
        { name: '가죽부츠', mat: '가죽조각', cloth: '천조각', level: 3 },
        { name: '철부츠', mat: '철주괴', cloth: '고급천', level: 10 },
        { name: '강철부츠', mat: '강철주괴', cloth: '고급천', level: 20 },
        { name: '나무방패', mat: '참나무목재', cloth: '가죽조각', level: 2 },
        { name: '철방패', mat: '철주괴', cloth: '가죽조각', level: 8 },
        { name: '강철방패', mat: '강철주괴', cloth: '고급가죽', level: 28 }
    ];

    for (var j = 0; j < armorBases.length; j++) {
        var a = armorBases[j];
        addRecipe(a.name, {
            result: a.name,
            resultCount: 1,
            materials: [
                { item: a.mat, count: Math.max(2, Math.floor(a.level / 3)) },
                { item: a.cloth, count: Math.max(1, Math.floor(a.level / 5)) }
            ],
            skill: '재봉',
            skillLevel: a.level,
            time: 15 + a.level * 2
        });
    }

    var potionBases = [
        { name: '하급체력포션', herbs: ['치유허브'], level: 1 },
        { name: '체력포션', herbs: ['치유허브', '생명의허브'], level: 5 },
        { name: '중급체력포션', herbs: ['생명의허브', '마력의꽃'], level: 15 },
        { name: '상급체력포션', herbs: ['생명의허브', '세계수잎'], level: 30 },
        { name: '하급마나포션', herbs: ['마나허브'], level: 1 },
        { name: '마나포션', herbs: ['마나허브', '마력의꽃'], level: 5 },
        { name: '중급마나포션', herbs: ['마나허브', '세계수잎'], level: 15 },
        { name: '상급마나포션', herbs: ['마력의꽃', '세계수잎'], level: 30 }
    ];

    for (var k = 0; k < potionBases.length; k++) {
        var p = potionBases[k];
        var mats = [];
        for (var h = 0; h < p.herbs.length; h++) {
            mats.push({ item: p.herbs[h], count: 2 + h });
        }
        mats.push({ item: '빈병', count: 1 });
        addRecipe(p.name, {
            result: p.name,
            resultCount: 2,
            materials: mats,
            skill: '연금술',
            skillLevel: p.level,
            time: 8 + p.level
        });
    }

    var foodBases = [
        { name: '샐러드', mats: ['고급야채', '소금'], level: 2 },
        { name: '꿀바른빵', mats: ['빵', '꿀'], level: 3 },
        { name: '산악특제스튜', mats: ['상급고기', '고급야채', '향신료'], level: 25 },
        { name: '엘프와인', mats: ['엘프허브', '과일', '물'], level: 25 },
        { name: '드워프맥주', mats: ['보리', '물', '홉'], level: 15 }
    ];

    for (var f = 0; f < foodBases.length; f++) {
        var food = foodBases[f];
        var fm = [];
        for (var m = 0; m < food.mats.length; m++) {
            fm.push({ item: food.mats[m], count: 1 });
        }
        addRecipe(food.name, {
            result: food.name,
            resultCount: 1,
            materials: fm,
            skill: '요리',
            skillLevel: food.level,
            time: 10 + food.level
        });
    }
})();

// ========================================
// NPC 데이터베이스
// ========================================

var NPCDatabase = {
    // --- 시작 마을 NPC ---
    '촌장': {
        id: 'village_chief',
        name: '촌장',
        title: '묘냥 마을 촌장',
        location: '시작마을',
        type: 'quest',
        dialog: {
            greeting: '어서오게, 젊은 모험가여. 이곳은 묘냥의 숲일세.',
            quest: '마을을 위해 해줄 일이 있다네.',
            farewell: '조심해서 다녀오게.'
        },
        quests: ['MQ001', 'MQ007'],
        services: []
    },
    '대장장이': {
        id: 'blacksmith',
        name: '대장장이 하머',
        title: '묘냥 마을 대장장이',
        location: '시작마을',
        type: 'vendor',
        dialog: {
            greeting: '좋은 무기를 찾고 있나? 잘 왔어!',
            shop: '필요한 것이 있으면 말해.',
            farewell: '좋은 장비와 함께 하길!'
        },
        quests: ['MQ003', 'SQ010', 'SQ011', 'SQ012'],
        services: ['상점', '수리', '강화', '제작'],
        shop: ['철검', '강철검', '철갑옷', '강철갑옷', '철투구', '강철투구']
    },
    '약사': {
        id: 'herbalist',
        name: '약사 리나',
        title: '묘냥 마을 약사',
        location: '시작마을',
        type: 'vendor',
        dialog: {
            greeting: '약초가 필요하신가요?',
            shop: '좋은 포션들이 있어요.',
            farewell: '건강하세요!'
        },
        quests: ['SQ001'],
        services: ['상점'],
        shop: ['체력포션', '마나포션', '해독포션', '중급체력포션', '중급마나포션']
    },
    '상인': {
        id: 'merchant',
        name: '상인 마르코',
        title: '떠돌이 상인',
        location: '시작마을',
        type: 'vendor',
        dialog: {
            greeting: '희귀한 물건들이 많이 있습니다!',
            shop: '둘러보세요.',
            farewell: '좋은 거래였습니다!'
        },
        services: ['상점', '매입'],
        shop: ['귀환의돌', '일반상자열쇠', '희귀상자열쇠', '강화석']
    },
    
    // --- 수도 NPC ---
    '왕': {
        id: 'king',
        name: '대왕 레오날드',
        title: '에테르니아 왕국의 왕',
        location: '에테르니아수도',
        type: 'quest',
        dialog: {
            greeting: '오오, 용사여. 잘 왔다.',
            quest: '왕국을 위해 힘을 빌려주겠는가?',
            farewell: '왕국의 축복이 함께하기를.'
        },
        quests: ['MQ021'],
        services: []
    },
    '대현자': {
        id: 'sage',
        name: '대현자 엘드리안',
        title: '에테르니아 대현자',
        location: '에테르니아수도',
        type: 'quest',
        dialog: {
            greeting: '지식을 구하는 자여, 어서 오라.',
            quest: '세계의 균형이 흔들리고 있다.',
            farewell: '진실은 언제나 어둠 속에 숨어있지.'
        },
        quests: ['MQ011', 'MQ016', 'SQ020', 'SQ021', 'SQ022'],
        services: ['마법연구', '스킬초기화']
    },
    '전직관': {
        id: 'job_master',
        name: '전직관 레온',
        title: '직업 훈련사',
        location: '에테르니아수도',
        type: 'service',
        dialog: {
            greeting: '새로운 길을 찾고 있는가?',
            jobChange: '전직에는 각오가 필요하다.',
            farewell: '더 강해져서 다시 오게.'
        },
        services: ['전직', '스킬학습']
    },
    
    // --- 던전/필드 NPC ---
    '현자': {
        id: 'wise_man',
        name: '숨은 현자',
        title: '은둔 현자',
        location: '고대의폐허',
        type: 'quest',
        dialog: {
            greeting: '여기까지 왔다니, 대단하군.',
            quest: '고대의 비밀을 알고 싶은가?',
            farewell: '조심하게, 어둠이 가까이 있네.'
        },
        quests: ['MQ011'],
        services: ['지식']
    },
    '엔트': {
        id: 'ent',
        name: '엔트',
        title: '숲의 수호자',
        location: '엘프의숲',
        type: 'quest',
        dialog: {
            greeting: '...인간이...왔군...',
            quest: '...숲이...아프다...',
            farewell: '...숲을...지켜다오...'
        },
        quests: ['SQ005'],
        services: []
    },
    
    // --- 길드 NPC ---
    '모험가길드마스터': {
        id: 'adventurer_gm',
        name: '길드마스터 세라',
        title: '모험가 길드장',
        location: '에테르니아수도',
        type: 'guild',
        dialog: {
            greeting: '모험가 길드에 오신 것을 환영합니다!',
            quest: '오늘의 의뢰가 있습니다.',
            farewell: '좋은 모험 되세요!'
        },
        services: ['일일퀘스트', '주간퀘스트', '길드상점', '랭킹']
    },
    '전사길드마스터': {
        id: 'warrior_gm',
        name: '길드마스터 볼드',
        title: '전사 길드장',
        location: '에테르니아수도',
        type: 'guild',
        dialog: {
            greeting: '강해지고 싶은가? 잘 왔다!',
            training: '훈련이 필요하면 말해라.',
            farewell: '강해져서 돌아오라!'
        },
        services: ['전사전직', '전사스킬', '훈련']
    },
    '마법사길드마스터': {
        id: 'mage_gm',
        name: '길드마스터 아르카나',
        title: '마법사 길드장',
        location: '에테르니아수도',
        type: 'guild',
        dialog: {
            greeting: '마법의 길을 걷고자 하는가?',
            training: '마력을 다루는 것은 쉽지 않지.',
            farewell: '지식은 힘이니라.'
        },
        services: ['마법사전직', '마법사스킬', '마법연구']
    }
};

// ========================================
// NPC 데이터베이스 대량 확장 (자동 생성)
// ========================================

(function() {
    function addNpc(key, data) {
        if (!NPCDatabase[key]) {
            NPCDatabase[key] = data;
        }
    }

    var npcTemplates = [
        { name: '연금술사', type: 'vendor', services: ['상점', '제작'], location: '마법 구역' },
        { name: '요리사', type: 'vendor', services: ['상점', '제작'], location: '시장' },
        { name: '잡화상', type: 'vendor', services: ['상점'], location: '시장' },
        { name: '수리공', type: 'service', services: ['수리'], location: '대장간' },
        { name: '강화사', type: 'service', services: ['강화'], location: '대장간' },
        { name: '여행상인', type: 'vendor', services: ['상점'], location: '여행길' },
        { name: '낚시꾼', type: 'quest', services: ['낚시'], location: '강가' },
        { name: '광부', type: 'quest', services: ['채광'], location: '광산' },
        { name: '채집가', type: 'quest', services: ['채집'], location: '숲' },
        { name: '훈련교관', type: 'trainer', services: ['훈련'], location: '훈련장' },
        { name: '마법서 연구가', type: 'vendor', services: ['상점'], location: '도서관' },
        { name: '보석상', type: 'vendor', services: ['상점'], location: '보석가' }
    ];

    for (var i = 0; i < npcTemplates.length; i++) {
        var t = npcTemplates[i];
        for (var j = 1; j <= 5; j++) {
            var key = t.name + ' ' + j;
            addNpc(key, {
                id: t.name.toLowerCase().replace(/\s+/g, '_') + '_' + j,
                name: key,
                title: t.name + ' 길드 ' + j + '호점',
                location: t.location,
                type: t.type,
                dialog: {
                    greeting: t.name + '에게 오신 것을 환영합니다.',
                    shop: '필요한 것이 있으면 말해 주세요.',
                    farewell: '다시 찾아주세요.'
                },
                quests: [],
                services: t.services,
                shop: []
            });
        }
    }

    var questNpcs = [
        { name: '모험가 조합원', location: '모험가 회관' },
        { name: '정찰병', location: '성벽' },
        { name: '역사가', location: '도서관' },
        { name: '기술자', location: '공방' },
        { name: '사막 안내인', location: '사막 캠프' },
        { name: '빙하 탐험가', location: '빙하 기지' },
        { name: '엘프 사서', location: '엘프의 숲' },
        { name: '드워프 감독관', location: '드워프 왕국' },
        { name: '용 연구가', location: '천공의 산맥' },
        { name: '심연 감시자', location: '심연의 균열' }
    ];

    for (var q = 0; q < questNpcs.length; q++) {
        var qn = questNpcs[q];
        addNpc(qn.name, {
            id: qn.name.toLowerCase().replace(/\s+/g, '_'),
            name: qn.name,
            title: '현장 담당자',
            location: qn.location,
            type: 'quest',
            dialog: {
                greeting: '도움이 필요합니다, 모험가여.',
                quest: '새로운 임무가 있습니다.',
                farewell: '행운을 빕니다.'
            },
            quests: [],
            services: []
        });
    }
})();

// ========================================
// 상점 데이터베이스
// ========================================

var ShopDatabase = {
    '시작마을무기점': {
        id: 'starter_weapon',
        name: '하머의 대장간',
        location: '시작마을',
        type: 'weapon',
        items: [
            { item: '철검', stock: -1 },
            { item: '강철검', stock: -1 },
            { item: '숏소드', stock: -1 },
            { item: '롱소드', stock: -1 },
            { item: '대거', stock: -1 },
            { item: '브로드소드', stock: -1 },
            { item: '마법사지팡이', stock: -1 },
            { item: '나무활', stock: -1 },
            { item: '숏보우', stock: -1 },
            { item: '나무지팡이', stock: -1 },
            { item: '오크스태프', stock: -1 }
        ]
    },
    '시작마을방어구점': {
        id: 'starter_armor',
        name: '하머의 대장간',
        location: '시작마을',
        type: 'armor',
        items: [
            { item: '가죽갑옷', stock: -1 },
            { item: '가죽투구', stock: -1 },
            { item: '가죽장갑', stock: -1 },
            { item: '가죽부츠', stock: -1 },
            { item: '나무방패', stock: -1 },
            { item: '천옷', stock: -1 },
            { item: '천모자', stock: -1 },
            { item: '천장갑', stock: -1 },
            { item: '천신발', stock: -1 },
            { item: '수련생로브', stock: -1 },
            { item: '철방패', stock: -1 }
        ]
    },
    '시작마을잡화점': {
        id: 'starter_general',
        name: '마르코의 잡화점',
        location: '시작마을',
        type: 'general',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '사과', stock: -1 },
            { item: '귀환의돌', stock: -1 },
            { item: '빈병', stock: -1 }
        ]
    },
    '시작마을약국': {
        id: 'starter_potion',
        name: '리나의 약국',
        location: '시작마을',
        type: 'potion',
        items: [
            { item: '하급체력포션', stock: -1 },
            { item: '체력포션', stock: -1 },
            { item: '하급마나포션', stock: -1 },
            { item: '마나포션', stock: -1 },
            { item: '해독포션', stock: -1 }
        ]
    },
    '시작마을장신구점': {
        id: 'starter_accessory',
        name: '초보 장신구 상점',
        location: '시작마을',
        type: 'accessory',
        items: [
            { item: '철반지', stock: -1 },
            { item: '가죽목걸이', stock: -1 },
            { item: '은귀걸이', stock: -1 },
            { item: '가죽벨트', stock: -1 },
            { item: '천망토', stock: -1 }
        ]
    },
    '시작마을식당': {
        id: 'starter_food',
        name: '포근한 식당',
        location: '시작마을',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '사과', stock: -1 },
            { item: '고기구이', stock: -1 },
            { item: '생선구이', stock: -1 },
            { item: '샐러드', stock: -1 },
            { item: '꿀바른빵', stock: -1 }
        ]
    },
    '수도고급무기점': {
        id: 'capital_weapon',
        name: '왕립 대장간',
        location: '에테르니아수도',
        type: 'weapon',
        items: [
            { item: '브로드소드', stock: -1 },
            { item: '바스타드소드', stock: -1 },
            { item: '전투도끼', stock: -1 },
            { item: '미스릴검', stock: -1 },
            { item: '아다만틴검', stock: -1 },
            { item: '미스릴대거', stock: -1 },
            { item: '컴파운드보우', stock: -1 },
            { item: '대마법사의지팡이', stock: -1 },
            { item: '화염의지팡이', stock: -1 },
            { item: '빙결의지팡이', stock: -1 },
            { item: '번개의지팡이', stock: -1 }
        ]
    },
    '에테르니아방어구점': {
        id: 'capital_armor',
        name: '왕립 방어구점',
        location: '에테르니아수도',
        type: 'armor',
        items: [
            { item: '강철투구', stock: -1 },
            { item: '기사투구', stock: -1 },
            { item: '강철갑옷', stock: -1 },
            { item: '플레이트아머', stock: -1 },
            { item: '미스릴갑옷', stock: -1 },
            { item: '강철건틀릿', stock: -1 },
            { item: '강철부츠', stock: -1 },
            { item: '미스릴건틀릿', stock: -1 },
            { item: '미스릴부츠', stock: -1 },
            { item: '대마법사로브', stock: -1 }
        ]
    },
    '에테르니아방패점': {
        id: 'capital_shield',
        name: '수도 방패 상인',
        location: '에테르니아수도',
        type: 'armor',
        items: [
            { item: '철방패', stock: -1 },
            { item: '타워실드', stock: -1 },
            { item: '강철방패', stock: -1 },
            { item: '미스릴방패', stock: -1 },
            { item: '태양석방패', stock: -1 }
        ]
    },
    '사막평판상점': {
        id: 'rep_desert',
        name: '사막 명예 상점',
        location: '불타는 사막',
        type: 'special',
        rotation: false,
        repFaction: '불타는 사막',
        items: [
            { item: '사막 장인의 설계도', stock: -1, repRequired: 1200 },
            { item: '사막 비단망토', stock: -1, repRequired: 2000 }
        ]
    },
    '북방평판상점': {
        id: 'rep_frozen',
        name: '북방 명예 상점',
        location: '얼어붙은 북방',
        type: 'special',
        rotation: false,
        repFaction: '얼어붙은 북방',
        items: [
            { item: '북방 제련 설계도', stock: -1, repRequired: 1500 },
            { item: '빙설 수호망토', stock: -1, repRequired: 2600 }
        ]
    },
    '습지평판상점': {
        id: 'rep_swamp',
        name: '습지 명예 상점',
        location: '황혼의 습지',
        type: 'special',
        rotation: false,
        repFaction: '황혼의 습지',
        items: [
            { item: '습지 비전 설계도', stock: -1, repRequired: 1800 },
            { item: '늪지 안개망토', stock: -1, repRequired: 3000 }
        ]
    },
    '천공평판상점': {
        id: 'rep_sky',
        name: '천공 명예 상점',
        location: '천공의 산맥',
        type: 'special',
        rotation: false,
        repFaction: '천공의 산맥',
        items: [
            { item: '천공 공학 설계도', stock: -1, repRequired: 2200 },
            { item: '천공 비행망토', stock: -1, repRequired: 3600 }
        ]
    },
    '폐허평판상점': {
        id: 'rep_ruins',
        name: '폐허 명예 상점',
        location: '고대의 폐허',
        type: 'special',
        rotation: false,
        repFaction: '고대의 폐허',
        items: [
            { item: '폐허 고대 설계도', stock: -1, repRequired: 2600 },
            { item: '고대 서고망토', stock: -1, repRequired: 4200 }
        ]
    },
    '초원무기점': {
        id: 'plains_weapon',
        name: '초원 대장간',
        location: '초원 평야',
        type: 'weapon',
        items: [
            { item: '브로드소드', stock: -1 },
            { item: '바스타드소드', stock: -1 },
            { item: '전투도끼', stock: -1 },
            { item: '배틀액스', stock: -1 },
            { item: '파이크', stock: -1 },
            { item: '롱소드', stock: -1 },
            { item: '리커브보우', stock: -1 },
            { item: '오크스태프', stock: -1 },
            { item: '수정지팡이', stock: -1 },
            { item: '마법사지팡이', stock: -1 }
        ]
    },
    '초원방어구점': {
        id: 'plains_armor',
        name: '초원 장비점',
        location: '초원 평야',
        type: 'armor',
        items: [
            { item: '철투구', stock: -1 },
            { item: '체인메일', stock: -1 },
            { item: '철갑옷', stock: -1 },
            { item: '철건틀릿', stock: -1 },
            { item: '철부츠', stock: -1 },
            { item: '철방패', stock: -1 },
            { item: '강철투구', stock: -1 },
            { item: '강철갑옷', stock: -1 },
            { item: '강철건틀릿', stock: -1 },
            { item: '강철부츠', stock: -1 },
            { item: '강철방패', stock: -1 },
            { item: '타워실드', stock: -1 },
            { item: '플레이트아머', stock: -1 }
        ]
    },
    '초원재료상': {
        id: 'plains_material',
        name: '초원 재료 상점',
        location: '초원 평야',
        type: 'material',
        items: [
            { item: '나뭇가지', stock: -1 },
            { item: '참나무목재', stock: -1 },
            { item: '철광석', stock: -1 },
            { item: '은광석', stock: -1 },
            { item: '약초', stock: -1 },
            { item: '마나허브', stock: -1 },
            { item: '치유허브', stock: -1 }
        ]
    },
    '에테르니아약국': {
        id: 'capital_potion',
        name: '에테르니아 약국',
        location: '에테르니아수도',
        type: 'potion',
        items: [
            { item: '하급체력포션', stock: -1 },
            { item: '체력포션', stock: -1 },
            { item: '중급체력포션', stock: -1 },
            { item: '상급체력포션', stock: -1 },
            { item: '하급마나포션', stock: -1 },
            { item: '마나포션', stock: -1 },
            { item: '중급마나포션', stock: -1 },
            { item: '상급마나포션', stock: -1 },
            { item: '해독포션', stock: -1 }
        ]
    },
    '에테르니아잡화점': {
        id: 'capital_general',
        name: '수도 잡화점',
        location: '에테르니아수도',
        type: 'general',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '사과', stock: -1 },
            { item: '귀환의돌', stock: -1 },
            { item: '빈병', stock: -1 },
            { item: '강화석', stock: -1 }
        ]
    },
    '에테르니아장신구점': {
        id: 'capital_accessory',
        name: '에테르니아 장신구점',
        location: '에테르니아수도',
        type: 'accessory',
        items: [
            { item: '은반지', stock: -1 },
            { item: '금반지', stock: -1 },
            { item: '은목걸이', stock: -1 },
            { item: '금목걸이', stock: -1 },
            { item: '금귀걸이', stock: -1 },
            { item: '철벨트', stock: -1 },
            { item: '가죽망토', stock: -1 }
        ]
    },
    '에테르니아연금상': {
        id: 'capital_alchemy',
        name: '연금 재료상',
        location: '에테르니아수도',
        type: 'potion',
        items: [
            { item: '체력포션', stock: -1 },
            { item: '중급체력포션', stock: -1 },
            { item: '상급체력포션', stock: -1 },
            { item: '마나포션', stock: -1 },
            { item: '중급마나포션', stock: -1 },
            { item: '상급마나포션', stock: -1 },
            { item: '회복포션', stock: -1 },
            { item: '해독포션', stock: -1 },
            { item: '해동포션', stock: -1 }
        ]
    },
    '에테르니아요리점': {
        id: 'capital_food',
        name: '왕도 요리점',
        location: '에테르니아수도',
        type: 'food',
        items: [
            { item: '고기구이', stock: -1 },
            { item: '생선구이', stock: -1 },
            { item: '샐러드', stock: -1 },
            { item: '스테이크', stock: -1 },
            { item: '꿀바른빵', stock: -1 },
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 }
        ]
    },
    '보석상점': {
        id: 'gem_shop',
        name: '보석 상회',
        location: '에테르니아수도',
        type: 'material',
        items: [
            { item: '자수정', stock: -1 },
            { item: '토파즈', stock: -1 },
            { item: '루비원석', stock: -1 },
            { item: '사파이어원석', stock: -1 },
            { item: '에메랄드원석', stock: -1 },
            { item: '오팔', stock: -1 },
            { item: '다이아몬드원석', stock: -1 },
            { item: '별의파편', stock: -1 }
        ]
    },
    '사막상회': {
        id: 'desert_trade',
        name: '오아시스 상회',
        location: '불타는 사막',
        type: 'general',
        items: [
            { item: '사막향신료', stock: -1 },
            { item: '태양석파편', stock: -1 },
            { item: '오아시스목걸이', stock: -1 },
            { item: '모래바람망토', stock: -1 },
            { item: '루비반지', stock: -1 },
            { item: '귀환의돌', stock: -1 },
            { item: '빈병', stock: -1 }
        ]
    },
    '북방보급소': {
        id: 'frozen_supply',
        name: '북방 보급소',
        location: '얼어붙은 북방',
        type: 'general',
        items: [
            { item: '빙설결정', stock: -1 },
            { item: '서리꽃', stock: -1 },
            { item: '서리늑대반지', stock: -1 },
            { item: '설원벨트', stock: -1 },
            { item: '상급체력포션', stock: -1 },
            { item: '상급마나포션', stock: -1 },
            { item: '귀환의돌', stock: -1 }
        ]
    },
    '습지주술상점': {
        id: 'swamp_mystic',
        name: '늪지 주술상',
        location: '황혼의 습지',
        type: 'general',
        items: [
            { item: '늪지이끼덩이', stock: -1 },
            { item: '유령의정수', stock: -1 },
            { item: '늪지부적', stock: -1 },
            { item: '안개귀걸이', stock: -1 },
            { item: '해독포션', stock: -1 },
            { item: '귀환의돌', stock: -1 }
        ]
    },
    '천공장비점': {
        id: 'sky_gear',
        name: '천공 장비점',
        location: '천공의 산맥',
        type: 'general',
        items: [
            { item: '폭풍결정', stock: -1 },
            { item: '천둥돌', stock: -1 },
            { item: '하늘수정', stock: -1 },
            { item: '하늘반지', stock: -1 },
            { item: '천공부적', stock: -1 },
            { item: '뇌운귀걸이', stock: -1 },
            { item: '귀환의돌', stock: -1 }
        ]
    },
    '실버문상점': {
        id: 'silvermoon_shop',
        name: '실버문 상점',
        location: '엘프의 숲 - 실버문',
        type: 'general',
        items: [
            { item: '달빛꽃정수', stock: -1 },
            { item: '달빛반지', stock: -1 },
            { item: '달빛펜던트', stock: -1 },
            { item: '엘프의망토', stock: -1 },
            { item: '귀환의돌', stock: -1 }
        ]
    },
    '드워프상회': {
        id: 'dwarf_trade',
        name: '철망치 상회',
        location: '드워프 왕국 - 철망치',
        type: 'general',
        items: [
            { item: '아다만타이트', stock: -1 },
            { item: '드워프강철', stock: -1 },
            { item: '용광로의 불꽃', stock: -1 },
            { item: '지하수정', stock: -1 },
            { item: '지하수정반지', stock: -1 },
            { item: '드워프부적', stock: -1 }
        ]
    },
    '고대유물상점': {
        id: 'ancient_relics',
        name: '고대 유물 상점',
        location: '고대의 폐허',
        type: 'general',
        items: [
            { item: '시간의 모래', stock: -1 },
            { item: '고대 마법석', stock: -1 },
            { item: '차원의 파편', stock: -1 },
            { item: '차원반지', stock: -1 },
            { item: '차원부적', stock: -1 }
        ]
    },
    '심연거래소': {
        id: 'abyss_market',
        name: '심연 거래소',
        location: '심연의 균열',
        type: 'general',
        items: [
            { item: '공허의 핵', stock: -1 },
            { item: '타락한 영혼', stock: -1 },
            { item: '심연의 수정', stock: -1 },
            { item: '암흑의 정수', stock: -1 },
            { item: '타락의반지', stock: -1 }
        ]
    },
    '천상성소상점': {
        id: 'celestial_shop',
        name: '성소의 상점',
        location: '천상계 - 빛의 성소',
        type: 'general',
        items: [
            { item: '신성한 빛', stock: -1 },
            { item: '생명의 물', stock: -1 },
            { item: '축복의 정수', stock: -1 },
            { item: '성역의반지', stock: -1 },
            { item: '성광펜던트', stock: -1 }
        ]
    },
    '불꽃제단상점': {
        id: 'flame_altar',
        name: '불꽃 제단 상점',
        location: '원소계 - 불꽃의 제단',
        type: 'general',
        items: [
            { item: '영원한 불꽃', stock: -1 },
            { item: '용암의 핵', stock: -1 },
            { item: '불의 정수', stock: -1 },
            { item: '태양의 파편', stock: -1 },
            { item: '불꽃펜던트', stock: -1 }
        ]
    },
    // 지역별 전문 상점 (재료/장신구/요리)
    '사막재료상': {
        id: 'desert_material',
        name: '사막 재료 상점',
        location: '불타는 사막',
        type: 'material',
        items: [
            { item: '사막향신료', stock: -1 },
            { item: '태양석파편', stock: -1 },
            { item: '금광석', stock: -1 }
        ]
    },
    '사막장신구점': {
        id: 'desert_accessory',
        name: '사막 장신구점',
        location: '불타는 사막',
        type: 'accessory',
        items: [
            { item: '오아시스목걸이', stock: -1 },
            { item: '모래바람망토', stock: -1 },
            { item: '루비반지', stock: -1 },
            { item: '금귀걸이', stock: -1 },
            { item: '전사의벨트', stock: -1 }
        ]
    },
    '사막요리점': {
        id: 'desert_food',
        name: '오아시스 요리점',
        location: '불타는 사막',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '사과', stock: -1 },
            { item: '고기구이', stock: -1 },
            { item: '생선구이', stock: -1 },
            { item: '샐러드', stock: -1 },
            { item: '스테이크', stock: -1 },
            { item: '꿀바른빵', stock: -1 }
        ]
    },
    '북방재료상': {
        id: 'frozen_material',
        name: '북방 재료 상점',
        location: '얼어붙은 북방',
        type: 'material',
        items: [
            { item: '빙설결정', stock: -1 },
            { item: '서리꽃', stock: -1 },
            { item: '미스릴광석', stock: -1 }
        ]
    },
    '북방장신구점': {
        id: 'frozen_accessory',
        name: '북방 장신구점',
        location: '얼어붙은 북방',
        type: 'accessory',
        items: [
            { item: '서리늑대반지', stock: -1 },
            { item: '설원벨트', stock: -1 },
            { item: '은목걸이', stock: -1 },
            { item: '은귀걸이', stock: -1 },
            { item: '가죽망토', stock: -1 }
        ]
    },
    '북방요리점': {
        id: 'frozen_food',
        name: '북방 식당',
        location: '얼어붙은 북방',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '고기구이', stock: -1 },
            { item: '생선구이', stock: -1 },
            { item: '스테이크', stock: -1 },
            { item: '꿀바른빵', stock: -1 }
        ]
    },
    '습지재료상': {
        id: 'swamp_material',
        name: '습지 재료 상점',
        location: '황혼의 습지',
        type: 'material',
        items: [
            { item: '늪지이끼덩이', stock: -1 },
            { item: '유령의정수', stock: -1 },
            { item: '약초', stock: -1 },
            { item: '치유허브', stock: -1 }
        ]
    },
    '습지장신구점': {
        id: 'swamp_accessory',
        name: '습지 장신구점',
        location: '황혼의 습지',
        type: 'accessory',
        items: [
            { item: '늪지부적', stock: -1 },
            { item: '안개귀걸이', stock: -1 },
            { item: '마법망토', stock: -1 },
            { item: '철벨트', stock: -1 }
        ]
    },
    '습지요리점': {
        id: 'swamp_food',
        name: '늪지 식당',
        location: '황혼의 습지',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '사과', stock: -1 },
            { item: '샐러드', stock: -1 },
            { item: '생선구이', stock: -1 }
        ]
    },
    '천공재료상': {
        id: 'sky_material',
        name: '천공 재료 상점',
        location: '천공의 산맥',
        type: 'material',
        items: [
            { item: '폭풍결정', stock: -1 },
            { item: '천둥돌', stock: -1 },
            { item: '하늘수정', stock: -1 }
        ]
    },
    '천공장신구점': {
        id: 'sky_accessory',
        name: '천공 장신구점',
        location: '천공의 산맥',
        type: 'accessory',
        items: [
            { item: '하늘반지', stock: -1 },
            { item: '천공부적', stock: -1 },
            { item: '뇌운귀걸이', stock: -1 }
        ]
    },
    '천공요리점': {
        id: 'sky_food',
        name: '천공 산장식당',
        location: '천공의 산맥',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '고기구이', stock: -1 },
            { item: '스테이크', stock: -1 }
        ]
    },
    '실버문재료상': {
        id: 'silvermoon_material',
        name: '실버문 재료 상점',
        location: '엘프의 숲 - 실버문',
        type: 'material',
        items: [
            { item: '달빛꽃정수', stock: -1 },
            { item: '하늘수정', stock: -1 },
            { item: '자수정', stock: -1 }
        ]
    },
    '실버문장신구점': {
        id: 'silvermoon_accessory',
        name: '실버문 장신구점',
        location: '엘프의 숲 - 실버문',
        type: 'accessory',
        items: [
            { item: '달빛반지', stock: -1 },
            { item: '달빛펜던트', stock: -1 },
            { item: '엘프의망토', stock: -1 }
        ]
    },
    '실버문요리점': {
        id: 'silvermoon_food',
        name: '실버문 식당',
        location: '엘프의 숲 - 실버문',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '샐러드', stock: -1 },
            { item: '스테이크', stock: -1 },
            { item: '꿀바른빵', stock: -1 }
        ]
    },
    '드워프재료상': {
        id: 'dwarf_material',
        name: '드워프 재료 상점',
        location: '드워프 왕국 - 철망치',
        type: 'material',
        items: [
            { item: '아다만타이트', stock: -1 },
            { item: '드워프강철', stock: -1 },
            { item: '용광로의 불꽃', stock: -1 },
            { item: '지하수정', stock: -1 }
        ]
    },
    '드워프장신구점': {
        id: 'dwarf_accessory',
        name: '드워프 장신구점',
        location: '드워프 왕국 - 철망치',
        type: 'accessory',
        items: [
            { item: '지하수정반지', stock: -1 },
            { item: '드워프부적', stock: -1 },
            { item: '전사의벨트', stock: -1 }
        ]
    },
    '드워프요리점': {
        id: 'dwarf_food',
        name: '드워프 식당',
        location: '드워프 왕국 - 철망치',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '고기구이', stock: -1 },
            { item: '스테이크', stock: -1 }
        ]
    },
    '고대재료상': {
        id: 'ancient_material',
        name: '고대 재료 상점',
        location: '고대의 폐허',
        type: 'material',
        items: [
            { item: '시간의 모래', stock: -1 },
            { item: '고대 마법석', stock: -1 },
            { item: '차원의 파편', stock: -1 }
        ]
    },
    '고대장신구점': {
        id: 'ancient_accessory',
        name: '고대 장신구점',
        location: '고대의 폐허',
        type: 'accessory',
        items: [
            { item: '차원반지', stock: -1 },
            { item: '차원부적', stock: -1 }
        ]
    },
    '고대요리점': {
        id: 'ancient_food',
        name: '고대 식당',
        location: '고대의 폐허',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '고기구이', stock: -1 },
            { item: '스테이크', stock: -1 }
        ]
    },
    '심연재료상': {
        id: 'abyss_material',
        name: '심연 재료 상점',
        location: '심연의 균열',
        type: 'material',
        items: [
            { item: '공허의 핵', stock: -1 },
            { item: '타락한 영혼', stock: -1 },
            { item: '심연의 수정', stock: -1 },
            { item: '암흑의 정수', stock: -1 }
        ]
    },
    '심연장신구점': {
        id: 'abyss_accessory',
        name: '심연 장신구점',
        location: '심연의 균열',
        type: 'accessory',
        items: [
            { item: '타락의반지', stock: -1 }
        ]
    },
    '심연요리점': {
        id: 'abyss_food',
        name: '심연 식당',
        location: '심연의 균열',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '고기구이', stock: -1 },
            { item: '스테이크', stock: -1 }
        ]
    },
    '성소재료상': {
        id: 'celestial_material',
        name: '성소 재료 상점',
        location: '천상계 - 빛의 성소',
        type: 'material',
        items: [
            { item: '신성한 빛', stock: -1 },
            { item: '생명의 물', stock: -1 },
            { item: '축복의 정수', stock: -1 }
        ]
    },
    '성소장신구점': {
        id: 'celestial_accessory',
        name: '성소 장신구점',
        location: '천상계 - 빛의 성소',
        type: 'accessory',
        items: [
            { item: '성역의반지', stock: -1 },
            { item: '성광펜던트', stock: -1 }
        ]
    },
    '성소요리점': {
        id: 'celestial_food',
        name: '성소 식당',
        location: '천상계 - 빛의 성소',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '샐러드', stock: -1 },
            { item: '스테이크', stock: -1 }
        ]
    },
    '불꽃재료상': {
        id: 'flame_material',
        name: '불꽃 재료 상점',
        location: '원소계 - 불꽃의 제단',
        type: 'material',
        items: [
            { item: '영원한 불꽃', stock: -1 },
            { item: '용암의 핵', stock: -1 },
            { item: '불의 정수', stock: -1 },
            { item: '태양의 파편', stock: -1 }
        ]
    },
    '불꽃장신구점': {
        id: 'flame_accessory',
        name: '불꽃 장신구점',
        location: '원소계 - 불꽃의 제단',
        type: 'accessory',
        items: [
            { item: '불꽃펜던트', stock: -1 }
        ]
    },
    '불꽃요리점': {
        id: 'flame_food',
        name: '불꽃 식당',
        location: '원소계 - 불꽃의 제단',
        type: 'food',
        items: [
            { item: '빵', stock: -1 },
            { item: '치즈', stock: -1 },
            { item: '고기구이', stock: -1 },
            { item: '스테이크', stock: -1 }
        ]
    }
};

// Export
if (typeof module !== 'undefined') {
    module.exports = { 
        CraftingRecipes: CraftingRecipes,
        NPCDatabase: NPCDatabase,
        ShopDatabase: ShopDatabase
    };
}






// ---------- gameData/pets_mounts.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */


/**
 * 묘냥의 숲 - 펫 & 탈것 데이터베이스
 */

var PetDatabase = {
    // ========================================
    // 일반 펫 (Common)
    // ========================================
    
    '아기슬라임': {
        id: 'baby_slime',
        name: '아기슬라임',
        rarity: 'common',
        type: 'slime',
        baseStats: { hp: 50, att: 5, def: 3 },
        growth: { hp: 5, att: 1, def: 0.5 },
        maxLevel: 30,
        skills: ['말랑말랑', '젤리방어'],
        description: '말랑말랑한 아기 슬라임',
        obtainMethod: '슬라임에게서 드롭'
    },
    '아기늑대': {
        id: 'baby_wolf',
        name: '아기늑대',
        rarity: 'common',
        type: 'beast',
        baseStats: { hp: 60, att: 8, def: 4 },
        growth: { hp: 6, att: 1.5, def: 0.8 },
        maxLevel: 30,
        skills: ['물기', '포효'],
        description: '귀여운 아기 늑대',
        obtainMethod: '늑대에게서 드롭'
    },
    '병아리': {
        id: 'chick',
        name: '병아리',
        rarity: 'common',
        type: 'bird',
        baseStats: { hp: 40, att: 3, def: 2 },
        growth: { hp: 4, att: 0.5, def: 0.3 },
        maxLevel: 30,
        skills: ['삐약삐약', '날개짓'],
        passive: '골드획득량 +5%',
        description: '귀여운 병아리',
        obtainMethod: '상점 구매'
    },
    '고양이': {
        id: 'cat',
        name: '고양이',
        rarity: 'common',
        type: 'beast',
        baseStats: { hp: 55, att: 6, def: 3 },
        growth: { hp: 5.5, att: 1.2, def: 0.6 },
        maxLevel: 30,
        skills: ['할퀴기', '고양이세수'],
        passive: '아이템드롭률 +3%',
        description: '도도한 고양이',
        obtainMethod: '상점 구매'
    },
    
    // ========================================
    // 희귀 펫 (Uncommon)
    // ========================================
    
    '파란슬라임': {
        id: 'blue_slime',
        name: '파란슬라임',
        rarity: 'uncommon',
        type: 'slime',
        baseStats: { hp: 70, att: 8, def: 5 },
        growth: { hp: 7, att: 1.5, def: 1 },
        maxLevel: 50,
        skills: ['물방울', '냉기', '젤리쉴드'],
        passive: '마나회복 +5%',
        description: '시원한 파란 슬라임',
        obtainMethod: '파란슬라임에게서 희귀 드롭'
    },
    '은빛여우': {
        id: 'silver_fox',
        name: '은빛여우',
        rarity: 'uncommon',
        type: 'beast',
        baseStats: { hp: 80, att: 12, def: 6 },
        growth: { hp: 8, att: 2, def: 1.2 },
        maxLevel: 50,
        skills: ['꼬리치기', '여우불', '매혹'],
        passive: '경험치획득 +10%',
        description: '신비로운 은빛 여우',
        obtainMethod: '은빛늑대에게서 희귀 드롭'
    },
    '불꽃정령': {
        id: 'fire_spirit',
        name: '불꽃정령',
        rarity: 'uncommon',
        type: 'elemental',
        baseStats: { hp: 60, att: 15, def: 4 },
        growth: { hp: 6, att: 2.5, def: 0.8 },
        maxLevel: 50,
        skills: ['불꽃', '화염분출', '불의보호'],
        passive: '화염데미지 +15%',
        description: '작은 불꽃 정령',
        obtainMethod: '불정령에게서 드롭'
    },
    '물정령': {
        id: 'water_spirit',
        name: '물정령',
        rarity: 'uncommon',
        type: 'elemental',
        baseStats: { hp: 70, att: 10, def: 8 },
        growth: { hp: 7, att: 1.8, def: 1.5 },
        maxLevel: 50,
        skills: ['물방울', '치유의물', '물의보호'],
        passive: '체력회복 +10%',
        description: '순수한 물 정령',
        obtainMethod: '물정령에게서 드롭'
    },
    
    // ========================================
    // 레어 펫 (Rare)
    // ========================================
    
    '황금슬라임': {
        id: 'golden_slime',
        name: '황금슬라임',
        rarity: 'rare',
        type: 'slime',
        baseStats: { hp: 100, att: 15, def: 10 },
        growth: { hp: 10, att: 2.5, def: 2 },
        maxLevel: 70,
        skills: ['황금분출', '행운의기운', '황금방어'],
        passive: '골드획득량 +30%',
        description: '번쩍이는 황금 슬라임',
        obtainMethod: '황금슬라임에게서 극희귀 드롭'
    },
    '아기드래곤': {
        id: 'baby_dragon',
        name: '아기드래곤',
        rarity: 'rare',
        type: 'dragon',
        baseStats: { hp: 120, att: 20, def: 15 },
        growth: { hp: 12, att: 3, def: 2.5 },
        maxLevel: 70,
        skills: ['불의숨결', '비행돌진', '용의포효'],
        passive: '모든데미지 +10%',
        description: '작지만 위엄있는 아기 드래곤',
        obtainMethod: '드래곤새끼에게서 희귀 드롭'
    },
    '달빛토끼': {
        id: 'moon_rabbit',
        name: '달빛토끼',
        rarity: 'rare',
        type: 'magical',
        baseStats: { hp: 90, att: 12, def: 8 },
        growth: { hp: 9, att: 2, def: 1.5 },
        maxLevel: 70,
        skills: ['달빛', '빠른발', '달의축복'],
        passive: '회피율 +15%',
        description: '달빛을 머금은 신비한 토끼',
        obtainMethod: '밤에만 출현하는 희귀 몬스터에서 드롭'
    },
    '그림자고양이': {
        id: 'shadow_cat',
        name: '그림자고양이',
        rarity: 'rare',
        type: 'shadow',
        baseStats: { hp: 85, att: 18, def: 7 },
        growth: { hp: 8.5, att: 2.8, def: 1.2 },
        maxLevel: 70,
        skills: ['그림자베기', '은신', '치명적공격'],
        passive: '치명타확률 +20%',
        description: '그림자 속에서 나타난 고양이',
        obtainMethod: '암살자몬스터에게서 희귀 드롭'
    },
    
    // ========================================
    // 에픽 펫 (Epic)
    // ========================================
    
    '불사조새끼': {
        id: 'phoenix_chick',
        name: '불사조새끼',
        rarity: 'epic',
        type: 'phoenix',
        baseStats: { hp: 150, att: 30, def: 20 },
        growth: { hp: 15, att: 4, def: 3 },
        maxLevel: 100,
        skills: ['불사의불꽃', '재생', '화염폭발', '불사'],
        passive: '사망시 1회 부활 (30분 쿨타임)',
        description: '전설의 불사조의 새끼',
        obtainMethod: '불사조 레이드 보스 극희귀 드롭'
    },
    '얼음드래곤새끼': {
        id: 'ice_baby_dragon',
        name: '얼음드래곤새끼',
        rarity: 'epic',
        type: 'dragon',
        baseStats: { hp: 160, att: 28, def: 25 },
        growth: { hp: 16, att: 3.5, def: 4 },
        maxLevel: 100,
        skills: ['서리숨결', '빙결', '얼음갑옷', '절대영도'],
        passive: '빙결데미지 +30%, 빙결저항 +50%',
        description: '냉기를 다루는 얼음 드래곤',
        obtainMethod: '얼음드래곤 보스 극희귀 드롭'
    },
    '천사의아이': {
        id: 'angel_child',
        name: '천사의아이',
        rarity: 'epic',
        type: 'celestial',
        baseStats: { hp: 140, att: 25, def: 22 },
        growth: { hp: 14, att: 3, def: 3.5 },
        maxLevel: 100,
        skills: ['신성한빛', '치유', '보호막', '축복'],
        passive: '파티원전체 체력회복 +15%',
        description: '하늘에서 내려온 천사의 아이',
        obtainMethod: '천상의 던전 숨겨진 보스에서 드롭'
    },
    
    // ========================================
    // 전설 펫 (Legendary)
    // ========================================
    
    '미니용왕': {
        id: 'mini_dragon_king',
        name: '미니용왕',
        rarity: 'legendary',
        type: 'dragon',
        baseStats: { hp: 250, att: 50, def: 40 },
        growth: { hp: 25, att: 6, def: 5 },
        maxLevel: 150,
        skills: ['용왕의분노', '원소의숨결', '용의위압', '불멸의비늘', '천지개벽'],
        passive: '모든스탯 +20%, 드래곤몬스터에게 +50% 데미지',
        description: '고대 용왕의 축소판',
        obtainMethod: '어비스드래곤 레이드 극극희귀 드롭'
    },
    '빛의정령왕': {
        id: 'light_spirit_king',
        name: '빛의정령왕',
        rarity: 'legendary',
        type: 'elemental',
        baseStats: { hp: 200, att: 45, def: 35 },
        growth: { hp: 20, att: 5.5, def: 4.5 },
        maxLevel: 150,
        skills: ['빛의심판', '정화', '신성한보호', '빛의축제', '천상의빛'],
        passive: '언데드/악마에게 +100% 데미지, 암흑저항 면역',
        description: '빛을 다스리는 정령왕',
        obtainMethod: '천상의 성역 최종 보스 드롭'
    },
    '묘냥이': {
        id: 'myonyang',
        name: '묘냥이',
        rarity: 'legendary',
        type: 'special',
        baseStats: { hp: 300, att: 60, def: 50 },
        growth: { hp: 30, att: 7, def: 6 },
        maxLevel: 200,
        skills: ['묘냥펀치', '냥냥빔', '고양이의9생', '묘냥의축복', '묘냥신권'],
        passive: '모든스탯 +30%, 경험치/골드 +50%',
        description: '묘냥의 숲의 마스코트. 전설 중의 전설.',
        obtainMethod: '특별 이벤트 한정'
    }
};

// ========================================
// 탈것 데이터베이스
// ========================================

var MountDatabase = {
    // 일반 탈것
    '말': {
        id: 'horse',
        name: '말',
        rarity: 'common',
        speed: 50,
        buff: { hpMul: 1.02, defMul: 1.01, hp: 10 },
        price: 5000,
        description: '일반적인 말'
    },
    '당나귀': {
        id: 'donkey',
        name: '당나귀',
        rarity: 'common',
        speed: 30,
        carryCapacity: 50,
        buff: { hpMul: 1.03, defMul: 1.02, hp: 18 },
        price: 3000,
        description: '짐을 많이 실을 수 있는 당나귀'
    },
    
    // 희귀 탈것
    '전쟁마': {
        id: 'warhorse',
        name: '전쟁마',
        rarity: 'uncommon',
        speed: 70,
        buff: { attMul: 1.04, defMul: 1.05, att: 3 },
        price: 15000,
        description: '전쟁용으로 훈련된 말'
    },
    '검은말': {
        id: 'black_horse',
        name: '검은말',
        rarity: 'uncommon',
        speed: 80,
        buff: { attMul: 1.05, hpMul: 1.03, att: 2 },
        price: 20000,
        description: '빠른 검은 말'
    },
    
    // 레어 탈것
    '그리폰': {
        id: 'griffin',
        name: '그리폰',
        rarity: 'rare',
        speed: 120,
        flying: true,
        buff: { attMul: 1.07, hpMul: 1.05, att: 4 },
        price: 100000,
        description: '하늘을 나는 그리폰'
    },
    '와이번': {
        id: 'wyvern_mount',
        name: '길들인 와이번',
        rarity: 'rare',
        speed: 130,
        flying: true,
        buff: { attMul: 1.08, defMul: 1.06, def: 3 },
        price: 120000,
        description: '길들인 와이번'
    },
    
    // 에픽 탈것
    '드래곤': {
        id: 'dragon_mount',
        name: '드래곤',
        rarity: 'epic',
        speed: 180,
        flying: true,
        buff: { attMul: 1.1, defMul: 1.09, hpMul: 1.07, att: 6, hp: 30 },
        price: 500000,
        description: '전설의 드래곤 탈것',
        obtainMethod: '드래곤 레이드 보상'
    },
    '불사조': {
        id: 'phoenix_mount',
        name: '불사조',
        rarity: 'epic',
        speed: 200,
        flying: true,
        buff: { attMul: 1.09, hpMul: 1.12, hp: 40 },
        price: 800000,
        description: '영원히 타오르는 불사조',
        obtainMethod: '불사조 레이드 보상'
    },
    
    // 전설 탈것
    '천마': {
        id: 'pegasus',
        name: '천마',
        rarity: 'legendary',
        speed: 250,
        flying: true,
        buff: { attMul: 1.12, defMul: 1.11, hpMul: 1.1, att: 8, def: 5 },
        description: '신의 말 천마',
        obtainMethod: '천상의 성역 업적 보상'
    }
};

// ========================================
// 펫/탈것 대량 확장 (자동 생성)
// ========================================

(function() {
    function addPet(key, data) {
        if (!PetDatabase[key]) {
            PetDatabase[key] = data;
        }
    }
    function addMount(key, data) {
        if (!MountDatabase[key]) {
            MountDatabase[key] = data;
        }
    }

    var petPrefixes = [
        { prefix: '화염 ', attMul: 1.3, defMul: 1.0, hpMul: 1.1, rarity: 'uncommon' },
        { prefix: '빙결 ', attMul: 1.1, defMul: 1.2, hpMul: 1.2, rarity: 'uncommon' },
        { prefix: '번개 ', attMul: 1.4, defMul: 0.9, hpMul: 1.1, rarity: 'rare' },
        { prefix: '자연의 ', attMul: 1.0, defMul: 1.3, hpMul: 1.4, rarity: 'rare' },
        { prefix: '황혼의 ', attMul: 1.5, defMul: 1.2, hpMul: 1.3, rarity: 'epic' }
    ];

    var petKeys = Object.keys(PetDatabase);
    for (var i = 0; i < petKeys.length; i++) {
        var base = PetDatabase[petKeys[i]];
        for (var p = 0; p < petPrefixes.length; p++) {
            var pref = petPrefixes[p];
            var newName = pref.prefix + base.name;
            addPet(newName, {
                id: base.id + '_' + p,
                name: newName,
                rarity: pref.rarity || base.rarity,
                type: base.type,
                baseStats: {
                    hp: Math.floor(base.baseStats.hp * pref.hpMul),
                    att: Math.floor(base.baseStats.att * pref.attMul),
                    def: Math.floor(base.baseStats.def * pref.defMul)
                },
                growth: {
                    hp: Math.floor(base.growth.hp * pref.hpMul * 10) / 10,
                    att: Math.floor(base.growth.att * pref.attMul * 10) / 10,
                    def: Math.floor(base.growth.def * pref.defMul * 10) / 10
                },
                maxLevel: Math.min(120, (base.maxLevel || 30) + 10),
                skills: base.skills,
                passive: base.passive,
                description: base.description + ' (' + pref.prefix.replace(' ', '') + ')',
                obtainMethod: base.obtainMethod
            });
        }
    }

    var extraPets = [
        { id: 'starlight_cat', name: '별빛 고양이', rarity: 'epic', type: 'beast', baseStats: { hp: 140, att: 22, def: 16 }, growth: { hp: 14, att: 3.5, def: 2.8 }, maxLevel: 80, skills: ['별빛가르기', '은하보호'], passive: '경험치획득 +20%', description: '별빛을 두른 신비한 고양이', obtainMethod: '별빛 균열 드롭' },
        { id: 'abyss_wolf', name: '심연 늑대', rarity: 'epic', type: 'beast', baseStats: { hp: 160, att: 28, def: 18 }, growth: { hp: 16, att: 4, def: 3 }, maxLevel: 80, skills: ['심연의포효', '그림자도약'], passive: '치명타 확률 +8%', description: '심연의 기운을 두른 늑대', obtainMethod: '심연의 균열 드롭' },
        { id: 'golden_owl', name: '황금 부엉이', rarity: 'rare', type: 'bird', baseStats: { hp: 90, att: 14, def: 10 }, growth: { hp: 9, att: 2.5, def: 1.6 }, maxLevel: 70, skills: ['예지', '황금눈'], passive: '드롭률 +12%', description: '예지를 가진 황금 부엉이', obtainMethod: '엘프의 숲 희귀 드롭' }
    ];

    for (var ep = 0; ep < extraPets.length; ep++) {
        addPet(extraPets[ep].name, extraPets[ep]);
    }

    var mountVariants = [
        { name: '폭풍 늑대', rarity: 'rare', speed: 150, flying: false, description: '번개를 두른 늑대 탈것', obtainMethod: '폭풍 골짜기 보상' },
        { name: '빙하 곰', rarity: 'rare', speed: 140, flying: false, description: '빙결의 힘을 가진 곰', obtainMethod: '북방 레이드 보상' },
        { name: '황혼 그리폰', rarity: 'epic', speed: 190, flying: true, description: '황혼빛 그리폰', obtainMethod: '황혼의 습지 업적' },
        { name: '심연 와이번', rarity: 'epic', speed: 210, flying: true, description: '심연의 기운을 머금은 와이번', obtainMethod: '심연의 균열 보상' },
        { name: '천상 드래곤', rarity: 'legendary', speed: 280, flying: true, description: '천상계의 수호 드래곤', obtainMethod: '천상 레이드 보상' }
    ];

    for (var mv = 0; mv < mountVariants.length; mv++) {
        var m = mountVariants[mv];
        var rarityBuff = {
            rare: { attMul: 1.07, defMul: 1.05, hpMul: 1.05, att: 3 },
            epic: { attMul: 1.1, defMul: 1.08, hpMul: 1.09, att: 5, hp: 25 },
            legendary: { attMul: 1.13, defMul: 1.11, hpMul: 1.11, att: 7, def: 4 }
        };
        addMount(m.name, {
            id: m.name.toLowerCase().replace(/\s+/g, '_'),
            name: m.name,
            rarity: m.rarity,
            speed: m.speed,
            flying: m.flying,
            price: m.price,
            buff: rarityBuff[m.rarity] || undefined,
            description: m.description,
            obtainMethod: m.obtainMethod
        });
    }
})();

// Export
if (typeof module !== 'undefined') {
    module.exports = { 
        PetDatabase: PetDatabase,
        MountDatabase: MountDatabase
    };
}






// ---------- gameData/achievements_titles.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */


/**
 * 묘냥의 숲 - 업적 & 칭호 시스템
 */

var AchievementDatabase = {
    // ========================================
    // 전투 업적
    // ========================================
    
    // 처치 업적
    'KILL_100': { id: 'KILL_100', title: '사냥 입문자', description: '몬스터 100마리 처치', requirement: { type: 'kill', count: 100 }, reward: { exp: 500, gold: 300, title: '사냥 입문자' } },
    'KILL_1000': { id: 'KILL_1000', title: '숙련된 사냥꾼', description: '몬스터 1,000마리 처치', requirement: { type: 'kill', count: 1000 }, reward: { exp: 3000, gold: 2000, title: '숙련된 사냥꾼' } },
    'KILL_10000': { id: 'KILL_10000', title: '전설의 사냥꾼', description: '몬스터 10,000마리 처치', requirement: { type: 'kill', count: 10000 }, reward: { exp: 30000, gold: 20000, title: '전설의 사냥꾼' } },
    'KILL_100000': { id: 'KILL_100000', title: '학살자', description: '몬스터 100,000마리 처치', requirement: { type: 'kill', count: 100000 }, reward: { exp: 300000, gold: 200000, title: '학살자' } },
    
    // 보스 업적
    'BOSS_1': { id: 'BOSS_1', title: '보스 킬러', description: '보스 몬스터 1마리 처치', requirement: { type: 'killBoss', count: 1 }, reward: { exp: 1000, gold: 500, title: '보스 킬러' } },
    'BOSS_10': { id: 'BOSS_10', title: '보스 헌터', description: '보스 몬스터 10마리 처치', requirement: { type: 'killBoss', count: 10 }, reward: { exp: 10000, gold: 5000, title: '보스 헌터' } },
    'BOSS_100': { id: 'BOSS_100', title: '보스 슬레이어', description: '보스 몬스터 100마리 처치', requirement: { type: 'killBoss', count: 100 }, reward: { exp: 100000, gold: 50000, title: '보스 슬레이어' } },
    
    // 특정 몬스터 업적
    'SLIME_MASTER': { id: 'SLIME_MASTER', title: '슬라임 마스터', description: '슬라임 1,000마리 처치', requirement: { type: 'killType', target: 'slime', count: 1000 }, reward: { exp: 5000, gold: 3000, item: '슬라임인형', title: '슬라임 마스터' } },
    'GOBLIN_SLAYER': { id: 'GOBLIN_SLAYER', title: '고블린 슬레이어', description: '고블린 1,000마리 처치', requirement: { type: 'killType', target: 'goblin', count: 1000 }, reward: { exp: 8000, gold: 5000, title: '고블린 슬레이어' } },
    'DRAGON_SLAYER': { id: 'DRAGON_SLAYER', title: '드래곤 슬레이어', description: '드래곤 계열 100마리 처치', requirement: { type: 'killType', target: 'dragon', count: 100 }, reward: { exp: 50000, gold: 30000, item: '드래곤의 심장', title: '드래곤 슬레이어' } },
    'DEMON_HUNTER': { id: 'DEMON_HUNTER', title: '악마 사냥꾼', description: '악마 계열 100마리 처치', requirement: { type: 'killType', target: 'demon', count: 100 }, reward: { exp: 50000, gold: 30000, title: '악마 사냥꾼' } },
    
    // ========================================
    // 던전 업적
    // ========================================
    
    'DUNGEON_1': { id: 'DUNGEON_1', title: '던전 탐험가', description: '던전 1회 클리어', requirement: { type: 'dungeon', count: 1 }, reward: { exp: 500, gold: 300, title: '던전 탐험가' } },
    'DUNGEON_50': { id: 'DUNGEON_50', title: '던전 정복자', description: '던전 50회 클리어', requirement: { type: 'dungeon', count: 50 }, reward: { exp: 25000, gold: 15000, title: '던전 정복자' } },
    'DUNGEON_ALL': { id: 'DUNGEON_ALL', title: '던전 마스터', description: '모든 던전 클리어', requirement: { type: 'dungeonAll' }, reward: { exp: 100000, gold: 80000, title: '던전 마스터' } },
    'RAID_1': { id: 'RAID_1', title: '레이드 참가자', description: '레이드 1회 클리어', requirement: { type: 'raid', count: 1 }, reward: { exp: 5000, gold: 3000, title: '레이드 참가자' } },
    'RAID_ALL': { id: 'RAID_ALL', title: '레이드 정복자', description: '모든 레이드 클리어', requirement: { type: 'raidAll' }, reward: { exp: 200000, gold: 150000, title: '레이드 정복자' } },
    
    // ========================================
    // 수집 업적
    // ========================================
    
    'COLLECT_10': { id: 'COLLECT_10', title: '수집가 견습생', description: '수집품 10종 수집', requirement: { type: 'collect', count: 10 }, reward: { exp: 2000, gold: 1000, title: '수집가 견습생' } },
    'COLLECT_50': { id: 'COLLECT_50', title: '열정적인 수집가', description: '수집품 50종 수집', requirement: { type: 'collect', count: 50 }, reward: { exp: 15000, gold: 10000, title: '열정적인 수집가' } },
    'COLLECT_ALL': { id: 'COLLECT_ALL', title: '완벽주의자', description: '모든 수집품 수집', requirement: { type: 'collectAll' }, reward: { exp: 100000, gold: 80000, title: '완벽주의자' } },
    
    // ========================================
    // 부 업적
    // ========================================
    
    'GOLD_10000': { id: 'GOLD_10000', title: '저축왕', description: '총 10,000 골드 획득', requirement: { type: 'gold', count: 10000 }, reward: { exp: 500, gold: 1000, title: '저축왕' } },
    'GOLD_100000': { id: 'GOLD_100000', title: '부자', description: '총 100,000 골드 획득', requirement: { type: 'gold', count: 100000 }, reward: { exp: 5000, gold: 10000, title: '부자' } },
    'GOLD_1000000': { id: 'GOLD_1000000', title: '백만장자', description: '총 1,000,000 골드 획득', requirement: { type: 'gold', count: 1000000 }, reward: { exp: 50000, gold: 100000, title: '백만장자' } },
    'GOLD_10000000': { id: 'GOLD_10000000', title: '재벌', description: '총 10,000,000 골드 획득', requirement: { type: 'gold', count: 10000000 }, reward: { exp: 500000, gold: 1000000, title: '재벌' } },
    
    // ========================================
    // 레벨 업적
    // ========================================
    
    'LEVEL_10': { id: 'LEVEL_10', title: '성장중', description: '레벨 10 달성', requirement: { type: 'level', count: 10 }, reward: { exp: 500, gold: 500, title: '성장중' } },
    'LEVEL_30': { id: 'LEVEL_30', title: '베테랑', description: '레벨 30 달성', requirement: { type: 'level', count: 30 }, reward: { exp: 3000, gold: 3000, title: '베테랑' } },
    'LEVEL_50': { id: 'LEVEL_50', title: '엘리트', description: '레벨 50 달성', requirement: { type: 'level', count: 50 }, reward: { exp: 10000, gold: 10000, title: '엘리트' } },
    'LEVEL_70': { id: 'LEVEL_70', title: '마스터', description: '레벨 70 달성', requirement: { type: 'level', count: 70 }, reward: { exp: 50000, gold: 50000, title: '마스터' } },
    'LEVEL_MAX': { id: 'LEVEL_MAX', title: '전설', description: '최대 레벨 달성', requirement: { type: 'levelMax' }, reward: { exp: 0, gold: 100000, title: '전설' } },
    
    // ========================================
    // 퀘스트 업적
    // ========================================
    
    'QUEST_10': { id: 'QUEST_10', title: '퀘스트 입문자', description: '퀘스트 10개 완료', requirement: { type: 'quest', count: 10 }, reward: { exp: 1000, gold: 500, title: '퀘스트 입문자' } },
    'QUEST_100': { id: 'QUEST_100', title: '퀘스트 마니아', description: '퀘스트 100개 완료', requirement: { type: 'quest', count: 100 }, reward: { exp: 10000, gold: 5000, title: '퀘스트 마니아' } },
    'MAIN_COMPLETE': { id: 'MAIN_COMPLETE', title: '영웅', description: '메인 퀘스트 완료', requirement: { type: 'mainQuest' }, reward: { exp: 100000, gold: 100000, title: '영웅' } },
    
    // ========================================
    // 제작 업적
    // ========================================
    
    'CRAFT_10': { id: 'CRAFT_10', title: '장인 견습생', description: '아이템 10개 제작', requirement: { type: 'craft', count: 10 }, reward: { exp: 500, gold: 300, title: '장인 견습생' } },
    'CRAFT_100': { id: 'CRAFT_100', title: '숙련 장인', description: '아이템 100개 제작', requirement: { type: 'craft', count: 100 }, reward: { exp: 5000, gold: 3000, title: '숙련 장인' } },
    'CRAFT_LEGENDARY': { id: 'CRAFT_LEGENDARY', title: '전설의 장인', description: '전설 등급 아이템 제작', requirement: { type: 'craftLegendary' }, reward: { exp: 50000, gold: 30000, title: '전설의 장인' } },
    
    // ========================================
    // 펫 업적
    // ========================================
    
    'PET_1': { id: 'PET_1', title: '펫 주인', description: '펫 1마리 획득', requirement: { type: 'pet', count: 1 }, reward: { exp: 500, gold: 300, title: '펫 주인' } },
    'PET_10': { id: 'PET_10', title: '펫 수집가', description: '펫 10마리 획득', requirement: { type: 'pet', count: 10 }, reward: { exp: 5000, gold: 3000, title: '펫 수집가' } },
    'PET_LEGENDARY': { id: 'PET_LEGENDARY', title: '전설의 동반자', description: '전설 등급 펫 획득', requirement: { type: 'petLegendary' }, reward: { exp: 50000, gold: 30000, title: '전설의 동반자' } },
    
    // ========================================
    // 특수 업적
    // ========================================
    
    'FIRST_DEATH': { id: 'FIRST_DEATH', title: '첫 죽음', description: '처음으로 사망', requirement: { type: 'death', count: 1 }, reward: { exp: 100, gold: 0, title: '첫 죽음' } },
    'DEATH_100': { id: 'DEATH_100', title: '불사신', description: '100번 사망 후 부활', requirement: { type: 'death', count: 100 }, reward: { exp: 10000, gold: 5000, title: '불사신' } },
    'LUCKY_DROP': { id: 'LUCKY_DROP', title: '행운아', description: '전설 아이템 드롭', requirement: { type: 'legendaryDrop' }, reward: { exp: 10000, gold: 5000, title: '행운아' } },
    'SPEEDRUN': { id: 'SPEEDRUN', title: '스피드러너', description: '30분 내에 레벨 20 달성', requirement: { type: 'speedrun', level: 20, time: 1800 }, reward: { exp: 20000, gold: 10000, title: '스피드러너' } }
};

// ========================================
// 추가 업적 대량 확장 (자동 생성)
// ========================================

(function() {
    function addAchievement(id, data) {
        if (!AchievementDatabase[id]) {
            AchievementDatabase[id] = data;
        }
    }

    var killTiers = [200, 500, 2000, 5000, 20000, 50000, 200000, 500000];
    for (var i = 0; i < killTiers.length; i++) {
        var count = killTiers[i];
        addAchievement('KILL_' + count, {
            id: 'KILL_' + count,
            title: '사냥 ' + count + '연승',
            description: '몬스터 ' + count.toLocaleString() + '마리 처치',
            requirement: { type: 'kill', count: count },
            reward: { exp: count * 5, gold: Math.floor(count / 2), title: '사냥 ' + count + '연승' }
        });
    }

    var bossTiers = [3, 25, 250, 500, 1000];
    for (var j = 0; j < bossTiers.length; j++) {
        var bCount = bossTiers[j];
        addAchievement('BOSS_' + bCount, {
            id: 'BOSS_' + bCount,
            title: '보스 ' + bCount + '연전',
            description: '보스 몬스터 ' + bCount + '마리 처치',
            requirement: { type: 'killBoss', count: bCount },
            reward: { exp: bCount * 800, gold: bCount * 300, title: '보스 ' + bCount + '연전' }
        });
    }

    var dungeonTiers = [5, 20, 100, 200, 500, 1000];
    for (var k = 0; k < dungeonTiers.length; k++) {
        var dCount = dungeonTiers[k];
        addAchievement('DUNGEON_' + dCount, {
            id: 'DUNGEON_' + dCount,
            title: '던전 정복 ' + dCount + '회',
            description: '던전 ' + dCount + '회 클리어',
            requirement: { type: 'dungeon', count: dCount },
            reward: { exp: dCount * 300, gold: dCount * 200, title: '던전 정복 ' + dCount + '회' }
        });
    }

    var collectTiers = [5, 20, 80, 150, 300, 500];
    for (var c = 0; c < collectTiers.length; c++) {
        var cCount = collectTiers[c];
        addAchievement('COLLECT_' + cCount, {
            id: 'COLLECT_' + cCount,
            title: '수집품 ' + cCount + '종',
            description: '수집품 ' + cCount + '종 수집',
            requirement: { type: 'collect', count: cCount },
            reward: { exp: cCount * 200, gold: cCount * 100, title: '수집품 ' + cCount + '종' }
        });
    }

    var goldTiers = [50000, 250000, 500000, 5000000, 25000000, 50000000];
    for (var g = 0; g < goldTiers.length; g++) {
        var gCount = goldTiers[g];
        addAchievement('GOLD_' + gCount, {
            id: 'GOLD_' + gCount,
            title: '재산가 ' + (g + 1),
            description: '총 ' + gCount.toLocaleString() + ' 골드 획득',
            requirement: { type: 'gold', count: gCount },
            reward: { exp: Math.floor(gCount / 50), gold: Math.floor(gCount / 10), title: '재산가 ' + (g + 1) }
        });
    }

    var levelTiers = [5, 15, 25, 35, 45, 60, 80, 100];
    for (var l = 0; l < levelTiers.length; l++) {
        var lvl = levelTiers[l];
        addAchievement('LEVEL_' + lvl, {
            id: 'LEVEL_' + lvl,
            title: '레벨 ' + lvl + ' 달성',
            description: '레벨 ' + lvl + ' 달성',
            requirement: { type: 'level', count: lvl },
            reward: { exp: lvl * 500, gold: lvl * 200, title: '레벨 ' + lvl + ' 달성' }
        });
    }

    var questTiers = [25, 50, 200, 500, 1000, 2000];
    for (var q = 0; q < questTiers.length; q++) {
        var qCount = questTiers[q];
        addAchievement('QUEST_' + qCount, {
            id: 'QUEST_' + qCount,
            title: '퀘스트 ' + qCount + '개 완료',
            description: '퀘스트 ' + qCount + '개 완료',
            requirement: { type: 'quest', count: qCount },
            reward: { exp: qCount * 100, gold: qCount * 50, title: '퀘스트 ' + qCount + '개 완료' }
        });
    }

    var craftTiers = [25, 50, 200, 500, 1000, 2500];
    for (var r = 0; r < craftTiers.length; r++) {
        var rCount = craftTiers[r];
        addAchievement('CRAFT_' + rCount, {
            id: 'CRAFT_' + rCount,
            title: '장인 ' + rCount + '작',
            description: '아이템 ' + rCount + '개 제작',
            requirement: { type: 'craft', count: rCount },
            reward: { exp: rCount * 100, gold: rCount * 80, title: '장인 ' + rCount + '작' }
        });
    }

    var petTiers = [3, 5, 20, 50, 100, 200];
    for (var p = 0; p < petTiers.length; p++) {
        var pCount = petTiers[p];
        addAchievement('PET_' + pCount, {
            id: 'PET_' + pCount,
            title: '펫 ' + pCount + '마리',
            description: '펫 ' + pCount + '마리 획득',
            requirement: { type: 'pet', count: pCount },
            reward: { exp: pCount * 300, gold: pCount * 200, title: '펫 ' + pCount + '마리' }
        });
    }

    var fishTiers = [10, 50, 100, 300, 500, 1000];
    for (var f = 0; f < fishTiers.length; f++) {
        var fCount = fishTiers[f];
        addAchievement('FISH_' + fCount, {
            id: 'FISH_' + fCount,
            title: '낚시 달인 ' + fCount + '마리',
            description: '물고기 ' + fCount + '마리 낚기',
            requirement: { type: 'fishing', count: fCount },
            reward: { exp: fCount * 120, gold: fCount * 60, title: '낚시 달인 ' + fCount + '마리' }
        });
    }

    var exploreTiers = [3, 8, 15, 25, 40, 60];
    for (var e = 0; e < exploreTiers.length; e++) {
        var eCount = exploreTiers[e];
        addAchievement('ZONE_' + eCount, {
            id: 'ZONE_' + eCount,
            title: '탐험가 ' + eCount + '지역',
            description: '서로 다른 지역 ' + eCount + '곳 방문',
            requirement: { type: 'explore', count: eCount },
            reward: { exp: eCount * 300, gold: eCount * 200, title: '탐험가 ' + eCount + '지역' }
        });
    }
})();

// ========================================
// 칭호 데이터베이스
// ========================================

var TitleDatabase = {
    // 기본 칭호
    '초보 모험가': { id: 'novice', name: '초보 모험가', effect: null, description: '모든 모험의 시작' },
    '모험가': { id: 'adventurer', name: '모험가', effect: null, description: '진정한 모험가' },
    
    // 전투 칭호
    '사냥 입문자': { id: 'hunt_novice', name: '사냥 입문자', effect: { att: 5 }, description: '사냥을 시작한 자' },
    '숙련된 사냥꾼': { id: 'hunt_veteran', name: '숙련된 사냥꾼', effect: { att: 15 }, description: '사냥에 숙련된 자' },
    '전설의 사냥꾼': { id: 'hunt_legend', name: '전설의 사냥꾼', effect: { att: 30 }, description: '사냥의 전설' },
    '학살자': { id: 'massacre', name: '학살자', effect: { att: 50, def: -10 }, description: '수많은 생명을 거둔 자' },
    '보스 킬러': { id: 'boss_killer', name: '보스 킬러', effect: { att: 10 }, description: '보스를 쓰러뜨린 자' },
    '보스 헌터': { id: 'boss_hunter', name: '보스 헌터', effect: { att: 25 }, description: '보스 사냥꾼' },
    '보스 슬레이어': { id: 'boss_slayer', name: '보스 슬레이어', effect: { att: 50 }, description: '보스의 천적' },
    
    // 몬스터 특화 칭호
    '슬라임 마스터': { id: 'slime_master', name: '슬라임 마스터', effect: { goldBonus: 10 }, description: '슬라임을 완벽히 이해한 자' },
    '고블린 슬레이어': { id: 'goblin_slayer', name: '고블린 슬레이어', effect: { att: 20 }, description: '고블린의 공포' },
    '드래곤 슬레이어': { id: 'dragon_slayer', name: '드래곤 슬레이어', effect: { att: 40, def: 20 }, description: '용을 쓰러뜨린 영웅' },
    '악마 사냥꾼': { id: 'demon_hunter', name: '악마 사냥꾼', effect: { att: 35, magic: 20 }, description: '악마를 사냥하는 자' },
    
    // 던전/레이드 칭호
    '던전 탐험가': { id: 'dungeon_explorer', name: '던전 탐험가', effect: { expBonus: 5 }, description: '던전을 탐험하는 자' },
    '던전 정복자': { id: 'dungeon_conqueror', name: '던전 정복자', effect: { expBonus: 15 }, description: '던전을 정복한 자' },
    '던전 마스터': { id: 'dungeon_master', name: '던전 마스터', effect: { expBonus: 25, goldBonus: 10 }, description: '모든 던전을 정복한 자' },
    '레이드 정복자': { id: 'raid_conqueror', name: '레이드 정복자', effect: { att: 30, def: 30, hp: 100 }, description: '모든 레이드를 정복한 자' },
    
    // 수집 칭호
    '수집가 견습생': { id: 'collector_novice', name: '수집가 견습생', effect: { dropBonus: 3 }, description: '수집을 시작한 자' },
    '열정적인 수집가': { id: 'collector_passion', name: '열정적인 수집가', effect: { dropBonus: 10 }, description: '수집에 열정적인 자' },
    '완벽주의자': { id: 'perfectionist', name: '완벽주의자', effect: { dropBonus: 20, goldBonus: 10 }, description: '모든 것을 수집한 자' },
    
    // 부 칭호
    '저축왕': { id: 'saver', name: '저축왕', effect: { goldBonus: 5 }, description: '돈을 아끼는 자' },
    '부자': { id: 'rich', name: '부자', effect: { goldBonus: 10 }, description: '부를 축적한 자' },
    '백만장자': { id: 'millionaire', name: '백만장자', effect: { goldBonus: 20 }, description: '백만 골드를 번 자' },
    '재벌': { id: 'tycoon', name: '재벌', effect: { goldBonus: 30, expBonus: 10 }, description: '천만 골드를 번 자' },
    
    // 레벨 칭호
    '성장중': { id: 'growing', name: '성장중', effect: { expBonus: 5 }, description: '성장하는 중인 자' },
    '베테랑': { id: 'veteran', name: '베테랑', effect: { att: 10, def: 10 }, description: '경험이 풍부한 자' },
    '엘리트': { id: 'elite', name: '엘리트', effect: { att: 20, def: 20, hp: 50 }, description: '엘리트 모험가' },
    '마스터': { id: 'master', name: '마스터', effect: { att: 30, def: 30, hp: 100 }, description: '마스터의 경지에 오른 자' },
    '전설': { id: 'legend', name: '전설', effect: { att: 50, def: 50, hp: 200, magic: 30 }, description: '전설이 된 자' },
    
    // 퀘스트 칭호
    '영웅': { id: 'hero', name: '영웅', effect: { att: 40, def: 40, hp: 150, expBonus: 20 }, description: '세계를 구한 영웅' },
    
    // 제작 칭호
    '장인 견습생': { id: 'craft_novice', name: '장인 견습생', effect: null, description: '제작을 배우는 자' },
    '숙련 장인': { id: 'craft_skilled', name: '숙련 장인', effect: null, description: '제작에 숙련된 자' },
    '전설의 장인': { id: 'craft_legend', name: '전설의 장인', effect: { att: 20, def: 20 }, description: '전설적인 물건을 만드는 자' },
    
    // 펫 칭호
    '펫 주인': { id: 'pet_owner', name: '펫 주인', effect: null, description: '펫과 함께하는 자' },
    '펫 수집가': { id: 'pet_collector', name: '펫 수집가', effect: { petBonus: 10 }, description: '많은 펫과 함께하는 자' },
    '전설의 동반자': { id: 'pet_legend', name: '전설의 동반자', effect: { petBonus: 30 }, description: '전설의 펫과 함께하는 자' },
    
    // 특수 칭호
    '첫 죽음': { id: 'first_death', name: '첫 죽음', effect: null, description: '첫 죽음을 경험한 자' },
    '불사신': { id: 'immortal', name: '불사신', effect: { hp: 100, def: 20 }, description: '수없이 죽고 부활한 자' },
    '행운아': { id: 'lucky', name: '행운아', effect: { dropBonus: 15 }, description: '운이 좋은 자' },
    '스피드러너': { id: 'speedrunner', name: '스피드러너', effect: { expBonus: 30 }, description: '빠르게 성장한 자' }
};

// ========================================
// 추가 칭호 대량 확장 (자동 생성)
// ========================================

(function() {
    function addTitle(name, data) {
        if (!TitleDatabase[name]) {
            TitleDatabase[name] = data;
        }
    }

    var bonusTiers = [5, 10, 15, 20, 30, 40, 60, 80];
    for (var i = 0; i < bonusTiers.length; i++) {
        var b = bonusTiers[i];
        addTitle('사냥꾼 +' + b, { id: 'hunt_plus_' + b, name: '사냥꾼 +' + b, effect: { att: b }, description: '사냥에 능한 자' });
        addTitle('탐험가 +' + b, { id: 'explorer_plus_' + b, name: '탐험가 +' + b, effect: { speed: Math.floor(b / 2) }, description: '길을 잘 아는 자' });
        addTitle('수집가 +' + b, { id: 'collector_plus_' + b, name: '수집가 +' + b, effect: { dropBonus: Math.floor(b / 2) }, description: '희귀한 물건을 모으는 자' });
        addTitle('부자 +' + b, { id: 'rich_plus_' + b, name: '부자 +' + b, effect: { goldBonus: Math.floor(b / 2) }, description: '부를 축적한 자' });
        addTitle('낚시꾼 +' + b, { id: 'fisher_plus_' + b, name: '낚시꾼 +' + b, effect: { expBonus: Math.floor(b / 2) }, description: '낚시에 능한 자' });
    }

    var specialTitles = [
        { name: '별빛 수호자', id: 'star_guardian', effect: { def: 25, hp: 80 }, description: '별빛의 수호' },
        { name: '황혼의 방랑자', id: 'twilight_wanderer', effect: { speed: 15, expBonus: 10 }, description: '황혼을 걷는 자' },
        { name: '심연의 관찰자', id: 'abyss_watcher', effect: { magic: 25, def: 15 }, description: '심연을 바라본 자' },
        { name: '대지의 심장', id: 'earth_heart', effect: { hp: 120, def: 30 }, description: '대지의 힘을 품은 자' },
        { name: '폭풍의 인도자', id: 'storm_bearer', effect: { att: 35, speed: 20 }, description: '폭풍을 다루는 자' },
        { name: '천상의 사도', id: 'celestial_envoy', effect: { magic: 40, hp: 60 }, description: '천상의 뜻을 전하는 자' },
        { name: '심연의 정복자', id: 'abyss_conqueror', effect: { att: 50, def: 50, hp: 150 }, description: '심연을 정복한 자' },
        { name: '용의 계약자', id: 'dragon_pact', effect: { att: 45, magic: 30 }, description: '용과 계약한 자' }
    ];

    for (var s = 0; s < specialTitles.length; s++) {
        addTitle(specialTitles[s].name, specialTitles[s]);
    }
})();

// Export
if (typeof module !== 'undefined') {
    module.exports = { 
        AchievementDatabase: AchievementDatabase,
        TitleDatabase: TitleDatabase
    };
}





// ---------- gameData/fish.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */


/**
 * 묘냥의 숲 - 물고기 데이터베이스
 * 낚시 시스템용 물고기 & 해양 생물 데이터
 * 
 * 희귀도(rarity): junk < common < uncommon < rare < epic < legendary < mythic
 * 서식지(habitat): freshwater(민물), saltwater(바다), both(둘다), special(특수)
 */

var FishDatabase = {
    // ========================================
    // 잡동사니 (Junk) - 가치 거의 없음
    // ========================================
    '돌': { name: '돌', basePrice: 1, rarity: 'junk', habitat: 'both', description: '그냥 돌이다.' },
    '장화': { name: '장화', basePrice: 1, rarity: 'junk', habitat: 'both', description: '누군가 버린 낡은 장화.' },
    '먼지': { name: '먼지', basePrice: 1, rarity: 'junk', habitat: 'both', description: '물 속에서도 먼지가?' },
    '빈 캔': { name: '빈 캔', basePrice: 2, rarity: 'junk', habitat: 'both', description: '녹슨 빈 캔.' },
    '깨진 병': { name: '깨진 병', basePrice: 1, rarity: 'junk', habitat: 'both', description: '위험한 깨진 유리병.' },
    '낡은 타이어': { name: '낡은 타이어', basePrice: 3, rarity: 'junk', habitat: 'saltwater', description: '바다에 버려진 타이어.' },
    '해초 뭉치': { name: '해초 뭉치', basePrice: 5, rarity: 'junk', habitat: 'saltwater', description: '먹을 수 있을지도?' },
    '나뭇가지': { name: '나뭇가지', basePrice: 2, rarity: 'junk', habitat: 'freshwater', description: '물에 떠다니던 나뭇가지.' },
    '진흙 덩어리': { name: '진흙 덩어리', basePrice: 1, rarity: 'junk', habitat: 'freshwater', description: '끈적끈적한 진흙.' },
    '젖은 신문': { name: '젖은 신문', basePrice: 1, rarity: 'junk', habitat: 'both', description: '글씨가 번져 읽을 수 없다.' },

    // ========================================
    // 일반 (Common) - 흔한 물고기
    // ========================================
    // 민물 일반
    '붕어': { name: '붕어', basePrice: 8, rarity: 'common', habitat: 'freshwater', description: '가장 흔한 민물고기.' },
    '잉어': { name: '잉어', basePrice: 12, rarity: 'common', habitat: 'freshwater', description: '튼튼하고 맛있는 민물고기.' },
    '미꾸라지': { name: '미꾸라지', basePrice: 10, rarity: 'common', habitat: 'freshwater', description: '미끌미끌한 물고기.' },
    '피라미': { name: '피라미', basePrice: 6, rarity: 'common', habitat: 'freshwater', description: '작고 빠른 민물고기.' },
    '송사리': { name: '송사리', basePrice: 5, rarity: 'common', habitat: 'freshwater', description: '아주 작은 민물고기.' },
    '버들치': { name: '버들치', basePrice: 7, rarity: 'common', habitat: 'freshwater', description: '맑은 물에 사는 작은 물고기.' },
    '모래무지': { name: '모래무지', basePrice: 8, rarity: 'common', habitat: 'freshwater', description: '모래 바닥을 좋아하는 물고기.' },
    '돌고기': { name: '돌고기', basePrice: 9, rarity: 'common', habitat: 'freshwater', description: '돌 틈에 숨어사는 물고기.' },
    '민물새우': { name: '민물새우', basePrice: 7, rarity: 'common', habitat: 'freshwater', description: '작고 투명한 민물새우.' },
    '가재': { name: '가재', basePrice: 15, rarity: 'common', habitat: 'freshwater', description: '집게가 있는 민물 갑각류.' },
    '다슬기': { name: '다슬기', basePrice: 4, rarity: 'common', habitat: 'freshwater', description: '민물 달팽이.' },
    '우렁이': { name: '우렁이', basePrice: 6, rarity: 'common', habitat: 'freshwater', description: '큰 민물 달팽이.' },
    
    // 바다 일반
    '멸치': { name: '멸치', basePrice: 5, rarity: 'common', habitat: 'saltwater', description: '작지만 맛있는 물고기.' },
    '정어리': { name: '정어리', basePrice: 7, rarity: 'common', habitat: 'saltwater', description: '떼지어 다니는 작은 물고기.' },
    '전어': { name: '전어', basePrice: 10, rarity: 'common', habitat: 'saltwater', description: '가을이 제철인 생선.' },
    '고등어': { name: '고등어', basePrice: 15, rarity: 'common', habitat: 'saltwater', description: '등푸른 생선의 대표.' },
    '꽁치': { name: '꽁치', basePrice: 12, rarity: 'common', habitat: 'saltwater', description: '가늘고 긴 물고기.' },
    '삼치': { name: '삼치', basePrice: 18, rarity: 'common', habitat: 'saltwater', description: '맛있는 흰살 생선.' },
    '해파리': { name: '해파리', basePrice: 3, rarity: 'common', habitat: 'saltwater', description: '투명하게 떠다니는 해파리.' },
    '말미잘': { name: '말미잘', basePrice: 4, rarity: 'common', habitat: 'saltwater', description: '바위에 붙어사는 생물.' },
    '새우': { name: '새우', basePrice: 8, rarity: 'common', habitat: 'saltwater', description: '맛있는 바다새우.' },
    '소라': { name: '소라', basePrice: 12, rarity: 'common', habitat: 'saltwater', description: '예쁜 껍데기를 가진 소라.' },
    '바지락': { name: '바지락', basePrice: 6, rarity: 'common', habitat: 'saltwater', description: '조개탕의 필수 재료.' },
    '홍합': { name: '홍합', basePrice: 8, rarity: 'common', habitat: 'saltwater', description: '검은 껍데기의 조개.' },
    '굴': { name: '굴', basePrice: 15, rarity: 'common', habitat: 'saltwater', description: '바다의 우유라 불리는 조개.' },
    '오징어': { name: '오징어', basePrice: 20, rarity: 'common', habitat: 'saltwater', description: '다리가 10개인 연체동물.' },
    '갑오징어': { name: '갑오징어', basePrice: 22, rarity: 'common', habitat: 'saltwater', description: '뼈가 있는 오징어.' },
    '쭈꾸미': { name: '쭈꾸미', basePrice: 25, rarity: 'common', habitat: 'saltwater', description: '작고 맛있는 문어 친척.' },
    '낙지': { name: '낙지', basePrice: 28, rarity: 'common', habitat: 'saltwater', description: '산낙지로 유명한 연체동물.' },

    // ========================================
    // 고급 (Uncommon) - 조금 귀한 물고기
    // ========================================
    // 민물 고급
    '쏘가리': { name: '쏘가리', basePrice: 45, rarity: 'uncommon', habitat: 'freshwater', description: '민물 최고의 맛. 매운탕 재료.' },
    '뱀장어': { name: '뱀장어', basePrice: 60, rarity: 'uncommon', habitat: 'freshwater', description: '보양식으로 유명한 장어.' },
    '메기': { name: '메기', basePrice: 35, rarity: 'uncommon', habitat: 'freshwater', description: '수염이 긴 민물고기.' },
    '가물치': { name: '가물치', basePrice: 40, rarity: 'uncommon', habitat: 'freshwater', description: '물 밖에서도 살 수 있는 물고기.' },
    '빙어': { name: '빙어', basePrice: 30, rarity: 'uncommon', habitat: 'freshwater', description: '맑고 차가운 물에 사는 물고기.' },
    '은어': { name: '은어', basePrice: 50, rarity: 'uncommon', habitat: 'freshwater', description: '수박 향이 나는 물고기.' },
    '산천어': { name: '산천어', basePrice: 45, rarity: 'uncommon', habitat: 'freshwater', description: '깨끗한 계곡의 물고기.' },
    '열목어': { name: '열목어', basePrice: 55, rarity: 'uncommon', habitat: 'freshwater', description: '천연기념물 민물고기.' },
    '황어': { name: '황어', basePrice: 35, rarity: 'uncommon', habitat: 'freshwater', description: '황금빛이 도는 물고기.' },
    '꺽지': { name: '꺽지', basePrice: 38, rarity: 'uncommon', habitat: 'freshwater', description: '바위 틈에 사는 맹렬한 물고기.' },
    '동자개': { name: '동자개', basePrice: 42, rarity: 'uncommon', habitat: 'freshwater', description: '가시가 있는 작은 메기.' },
    '자라': { name: '자라', basePrice: 80, rarity: 'uncommon', habitat: 'freshwater', description: '민물에 사는 연갑 거북.' },
    
    // 바다 고급
    '갈치': { name: '갈치', basePrice: 35, rarity: 'uncommon', habitat: 'saltwater', description: '은빛으로 빛나는 긴 생선.' },
    '농어': { name: '농어', basePrice: 40, rarity: 'uncommon', habitat: 'saltwater', description: '회로 최고인 흰살 생선.' },
    '대구': { name: '대구', basePrice: 38, rarity: 'uncommon', habitat: 'saltwater', description: '알이 유명한 생선.' },
    '우럭': { name: '우럭', basePrice: 45, rarity: 'uncommon', habitat: 'saltwater', description: '낚시꾼들이 좋아하는 생선.' },
    '광어': { name: '광어', basePrice: 55, rarity: 'uncommon', habitat: 'saltwater', description: '납작한 고급 생선.' },
    '가오리': { name: '가오리', basePrice: 30, rarity: 'uncommon', habitat: 'saltwater', description: '홍어의 친척.' },
    '볼락': { name: '볼락', basePrice: 35, rarity: 'uncommon', habitat: 'saltwater', description: '깊은 바다의 물고기.' },
    '조피볼락': { name: '조피볼락', basePrice: 50, rarity: 'uncommon', habitat: 'saltwater', description: '우럭과 비슷한 고급 생선.' },
    '붕장어': { name: '붕장어', basePrice: 48, rarity: 'uncommon', habitat: 'saltwater', description: '바다 장어. 아나고.' },
    '전복': { name: '전복', basePrice: 70, rarity: 'uncommon', habitat: 'saltwater', description: '바다의 보석. 고급 조개.' },
    '키조개': { name: '키조개', basePrice: 55, rarity: 'uncommon', habitat: 'saltwater', description: '크고 맛있는 조개.' },
    '대합': { name: '대합', basePrice: 45, rarity: 'uncommon', habitat: 'saltwater', description: '큰 조개. 구이로 최고.' },
    '가리비': { name: '가리비', basePrice: 42, rarity: 'uncommon', habitat: 'saltwater', description: '관자가 맛있는 조개.' },
    '꽃게': { name: '꽃게', basePrice: 50, rarity: 'uncommon', habitat: 'saltwater', description: '꽃처럼 예쁜 게.' },
    '대게': { name: '대게', basePrice: 80, rarity: 'uncommon', habitat: 'saltwater', description: '다리가 긴 게.' },
    '랍스터': { name: '랍스터', basePrice: 90, rarity: 'uncommon', habitat: 'saltwater', description: '큰 집게를 가진 고급 갑각류.' },
    '성게': { name: '성게', basePrice: 65, rarity: 'uncommon', habitat: 'saltwater', description: '가시투성이 바다 생물.' },
    '해삼': { name: '해삼', basePrice: 55, rarity: 'uncommon', habitat: 'saltwater', description: '바다의 인삼.' },
    '멍게': { name: '멍게', basePrice: 40, rarity: 'uncommon', habitat: 'saltwater', description: '독특한 향의 해산물.' },

    // ========================================
    // 희귀 (Rare) - 희귀한 물고기
    // ========================================
    // 민물 희귀
    '철갑상어': { name: '철갑상어', basePrice: 200, rarity: 'rare', habitat: 'freshwater', description: '캐비어의 원천. 고대어.' },
    '황금잉어': { name: '황금잉어', basePrice: 150, rarity: 'rare', habitat: 'freshwater', description: '황금빛 비늘의 잉어.' },
    '무지개송어': { name: '무지개송어', basePrice: 120, rarity: 'rare', habitat: 'freshwater', description: '무지개빛 옆줄의 송어.' },
    '큰입배스': { name: '큰입배스', basePrice: 100, rarity: 'rare', habitat: 'freshwater', description: '공격적인 외래어종.' },
    '블루길': { name: '블루길', basePrice: 80, rarity: 'rare', habitat: 'freshwater', description: '푸른 아가미의 물고기.' },
    '향어': { name: '향어', basePrice: 130, rarity: 'rare', habitat: 'freshwater', description: '향기로운 고급 민물고기.' },
    '대왕자라': { name: '대왕자라', basePrice: 180, rarity: 'rare', habitat: 'freshwater', description: '거대한 자라.' },
    '알비노 메기': { name: '알비노 메기', basePrice: 170, rarity: 'rare', habitat: 'freshwater', description: '흰색의 돌연변이 메기.' },
    
    // 바다 희귀
    '장어': { name: '장어', basePrice: 100, rarity: 'rare', habitat: 'saltwater', description: '바다와 민물을 오가는 생선.' },
    '도미': { name: '도미', basePrice: 90, rarity: 'rare', habitat: 'saltwater', description: '경사스러운 자리의 생선.' },
    '방어': { name: '방어', basePrice: 110, rarity: 'rare', habitat: 'saltwater', description: '겨울이 제철인 대형 생선.' },
    '복어': { name: '복어', basePrice: 130, rarity: 'rare', habitat: 'saltwater', description: '독이 있지만 맛있는 생선.' },
    '가다랑어': { name: '가다랑어', basePrice: 85, rarity: 'rare', habitat: 'saltwater', description: '가쓰오부시의 재료.' },
    '연어': { name: '연어', basePrice: 95, rarity: 'rare', habitat: 'both', description: '강으로 돌아오는 회귀성 생선.' },
    '송어': { name: '송어', basePrice: 88, rarity: 'rare', habitat: 'both', description: '연어의 친척. 맛있는 생선.' },
    '참치': { name: '참치', basePrice: 150, rarity: 'rare', habitat: 'saltwater', description: '바다의 참다랑어.' },
    '다랑어': { name: '다랑어', basePrice: 140, rarity: 'rare', habitat: 'saltwater', description: '참치의 한 종류.' },
    '눈다랑어': { name: '눈다랑어', basePrice: 160, rarity: 'rare', habitat: 'saltwater', description: '큰 눈의 고급 다랑어.' },
    '황다랑어': { name: '황다랑어', basePrice: 145, rarity: 'rare', habitat: 'saltwater', description: '노란 지느러미의 다랑어.' },
    '민어': { name: '민어', basePrice: 120, rarity: 'rare', habitat: 'saltwater', description: '보양식으로 유명한 생선.' },
    '농어과': { name: '농어과', basePrice: 115, rarity: 'rare', habitat: 'saltwater', description: '큰 농어.' },
    '점농어': { name: '점농어', basePrice: 125, rarity: 'rare', habitat: 'saltwater', description: '점이 있는 농어.' },
    '능성어': { name: '능성어', basePrice: 180, rarity: 'rare', habitat: 'saltwater', description: '다금바리의 친척.' },
    '돌돔': { name: '돌돔', basePrice: 170, rarity: 'rare', habitat: 'saltwater', description: '줄무늬의 고급 생선.' },
    '감성돔': { name: '감성돔', basePrice: 135, rarity: 'rare', habitat: 'saltwater', description: '검은 빛의 도미.' },
    '참돔': { name: '참돔', basePrice: 165, rarity: 'rare', habitat: 'saltwater', description: '붉은 빛의 진짜 도미.' },
    '옥돔': { name: '옥돔', basePrice: 175, rarity: 'rare', habitat: 'saltwater', description: '제주의 고급 생선.' },
    '문어': { name: '문어', basePrice: 100, rarity: 'rare', habitat: 'saltwater', description: '8개의 다리를 가진 영리한 생물.' },
    '킹크랩 다리': { name: '킹크랩 다리', basePrice: 200, rarity: 'rare', habitat: 'saltwater', description: '킹크랩에서 떨어진 다리.' },

    // ========================================
    // 영웅 (Epic) - 매우 희귀한 물고기
    // ========================================
    // 민물 영웅
    '금빛 철갑상어': { name: '금빛 철갑상어', basePrice: 500, rarity: 'epic', habitat: 'freshwater', description: '금빛 갑옷의 고대 상어.' },
    '황금 쏘가리': { name: '황금 쏘가리', basePrice: 400, rarity: 'epic', habitat: 'freshwater', description: '전설의 황금 쏘가리.' },
    '백룡어': { name: '백룡어', basePrice: 550, rarity: 'epic', habitat: 'freshwater', description: '백색의 신비로운 물고기.' },
    '무지개 비늘 붕어': { name: '무지개 비늘 붕어', basePrice: 350, rarity: 'epic', habitat: 'freshwater', description: '일곱 색깔 비늘의 붕어.' },
    '대왕 메기': { name: '대왕 메기', basePrice: 450, rarity: 'epic', habitat: 'freshwater', description: '거대한 메기 왕.' },
    '은빛 뱀장어': { name: '은빛 뱀장어', basePrice: 480, rarity: 'epic', habitat: 'freshwater', description: '은빛 비늘의 신비한 장어.' },
    
    // 바다 영웅
    '상어': { name: '상어', basePrice: 300, rarity: 'epic', habitat: 'saltwater', description: '바다의 포식자.' },
    '청상아리': { name: '청상아리', basePrice: 350, rarity: 'epic', habitat: 'saltwater', description: '가장 빠른 상어.' },
    '백상아리': { name: '백상아리', basePrice: 500, rarity: 'epic', habitat: 'saltwater', description: '바다의 제왕.' },
    '귀상어': { name: '귀상어', basePrice: 400, rarity: 'epic', habitat: 'saltwater', description: '망치 머리의 상어.' },
    '개복치': { name: '개복치', basePrice: 250, rarity: 'epic', habitat: 'saltwater', description: '거대하고 느린 물고기.' },
    '만새기': { name: '만새기', basePrice: 280, rarity: 'epic', habitat: 'saltwater', description: '신비로운 대양의 물고기.' },
    '돛새치': { name: '돛새치', basePrice: 320, rarity: 'epic', habitat: 'saltwater', description: '돛 같은 등지느러미의 생선.' },
    '청새치': { name: '청새치', basePrice: 380, rarity: 'epic', habitat: 'saltwater', description: '푸른 빛의 대형 새치.' },
    '황새치': { name: '황새치', basePrice: 360, rarity: 'epic', habitat: 'saltwater', description: '노란 빛의 새치.' },
    '흑새치': { name: '흑새치', basePrice: 400, rarity: 'epic', habitat: 'saltwater', description: '검은 빛의 대형 새치.' },
    '대왕오징어': { name: '대왕오징어', basePrice: 450, rarity: 'epic', habitat: 'saltwater', description: '전설의 거대 오징어.' },
    '대왕문어': { name: '대왕문어', basePrice: 480, rarity: 'epic', habitat: 'saltwater', description: '거대한 문어.' },
    '다금바리': { name: '다금바리', basePrice: 550, rarity: 'epic', habitat: 'saltwater', description: '최고급 흰살 생선.' },
    '자바리': { name: '자바리', basePrice: 520, rarity: 'epic', habitat: 'saltwater', description: '다금바리의 친척.' },
    '킹크랩': { name: '킹크랩', basePrice: 400, rarity: 'epic', habitat: 'saltwater', description: '게의 왕.' },
    '대왕 랍스터': { name: '대왕 랍스터', basePrice: 450, rarity: 'epic', habitat: 'saltwater', description: '거대한 바닷가재.' },
    '황금 전복': { name: '황금 전복', basePrice: 380, rarity: 'epic', habitat: 'saltwater', description: '금빛 껍데기의 전복.' },

    // ========================================
    // 전설 (Legendary) - 전설적인 물고기
    // ========================================
    // 민물 전설
    '용왕의 잉어': { name: '용왕의 잉어', basePrice: 1000, rarity: 'legendary', habitat: 'freshwater', description: '용이 되기 직전의 잉어.' },
    '청룡어': { name: '청룡어', basePrice: 1200, rarity: 'legendary', habitat: 'freshwater', description: '청룡의 기운을 품은 물고기.' },
    '천년 자라': { name: '천년 자라', basePrice: 1500, rarity: 'legendary', habitat: 'freshwater', description: '천 년을 살아온 거대 자라.' },
    '신룡의 새끼': { name: '신룡의 새끼', basePrice: 2000, rarity: 'legendary', habitat: 'freshwater', description: '신룡의 자손.' },
    '달빛 메기': { name: '달빛 메기', basePrice: 1100, rarity: 'legendary', habitat: 'freshwater', description: '달빛에 반짝이는 신비한 메기.' },
    
    // 바다 전설
    '고래': { name: '고래', basePrice: 800, rarity: 'legendary', habitat: 'saltwater', description: '바다의 거인.' },
    '혹등고래': { name: '혹등고래', basePrice: 900, rarity: 'legendary', habitat: 'saltwater', description: '노래하는 고래.' },
    '범고래': { name: '범고래', basePrice: 1000, rarity: 'legendary', habitat: 'saltwater', description: '바다의 늑대.' },
    '향유고래': { name: '향유고래', basePrice: 1100, rarity: 'legendary', habitat: 'saltwater', description: '깊은 바다의 거인.' },
    '돌고래': { name: '돌고래', basePrice: 600, rarity: 'legendary', habitat: 'saltwater', description: '영리하고 친근한 해양 생물.' },
    '바다표범': { name: '바다표범', basePrice: 550, rarity: 'legendary', habitat: 'saltwater', description: '귀여운 바다 포유류.' },
    '바다사자': { name: '바다사자', basePrice: 580, rarity: 'legendary', habitat: 'saltwater', description: '갈기가 있는 바다 포유류.' },
    '황금 다금바리': { name: '황금 다금바리', basePrice: 1500, rarity: 'legendary', habitat: 'saltwater', description: '황금빛의 전설적인 다금바리.' },
    '용궁의 도미': { name: '용궁의 도미', basePrice: 1300, rarity: 'legendary', habitat: 'saltwater', description: '용궁에서 온 신비한 도미.' },
    '심해의 아귀': { name: '심해의 아귀', basePrice: 1200, rarity: 'legendary', habitat: 'saltwater', description: '심해에서 빛을 내는 아귀.' },
    '전설의 참치': { name: '전설의 참치', basePrice: 2000, rarity: 'legendary', habitat: 'saltwater', description: '바다의 다이아몬드.' },
    '대왕 조개': { name: '대왕 조개', basePrice: 1000, rarity: 'legendary', habitat: 'saltwater', description: '진주를 품은 거대 조개.' },
    '황금 진주 조개': { name: '황금 진주 조개', basePrice: 1800, rarity: 'legendary', habitat: 'saltwater', description: '황금 진주가 들어있는 조개.' },

    // ========================================
    // 신화 (Mythic) - 신화적인 존재
    // ========================================
    '해룡': { name: '해룡', basePrice: 5000, rarity: 'mythic', habitat: 'saltwater', description: '바다의 용. 신화 속 존재.' },
    '백룡': { name: '백룡', basePrice: 5500, rarity: 'mythic', habitat: 'both', description: '하얀 용. 행운을 가져다준다.' },
    '흑룡': { name: '흑룡', basePrice: 5500, rarity: 'mythic', habitat: 'both', description: '검은 용. 강력한 힘을 가졌다.' },
    '인어': { name: '인어', basePrice: 8000, rarity: 'mythic', habitat: 'saltwater', description: '전설의 바다 요정.' },
    '크라켄의 촉수': { name: '크라켄의 촉수', basePrice: 6000, rarity: 'mythic', habitat: 'saltwater', description: '심해 괴물의 촉수.' },
    '리바이어던의 비늘': { name: '리바이어던의 비늘', basePrice: 7000, rarity: 'mythic', habitat: 'saltwater', description: '전설의 바다 괴물의 비늘.' },
    '포세이돈의 삼지창 파편': { name: '포세이돈의 삼지창 파편', basePrice: 10000, rarity: 'mythic', habitat: 'saltwater', description: '바다 신의 무기 조각.' },
    '용왕의 여의주': { name: '용왕의 여의주', basePrice: 15000, rarity: 'mythic', habitat: 'saltwater', description: '용왕이 떨어뜨린 신비한 구슬.' },
    '아틀란티스의 유물': { name: '아틀란티스의 유물', basePrice: 12000, rarity: 'mythic', habitat: 'saltwater', description: '잃어버린 도시의 보물.' },
    '황금 물고기': { name: '황금 물고기', basePrice: 20000, rarity: 'mythic', habitat: 'both', description: '소원을 들어주는 황금빛 물고기.' }
};

// ========================================
// 물고기 데이터 대량 확장 (자동 생성)
// ========================================

(function() {
    var rarityOrder = ['junk', 'common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic'];
    var variantPrefixes = [
        { prefix: '거대한 ', priceMul: 2.0, rarityShift: 1 },
        { prefix: '야생의 ', priceMul: 1.5, rarityShift: 0 },
        { prefix: '심연의 ', priceMul: 2.5, rarityShift: 2 },
        { prefix: '황혼의 ', priceMul: 2.2, rarityShift: 1 },
        { prefix: '성스러운 ', priceMul: 3.0, rarityShift: 2 }
    ];
    var variantSuffixes = [
        { suffix: ' (변종)', priceMul: 1.3, rarityShift: 0 },
        { suffix: ' (축제)', priceMul: 1.4, rarityShift: 0 },
        { suffix: ' (유성)', priceMul: 1.8, rarityShift: 1 }
    ];

    function shiftRarity(rarity, shift) {
        var idx = rarityOrder.indexOf(rarity);
        if (idx === -1) return rarity;
        return rarityOrder[Math.min(rarityOrder.length - 1, Math.max(0, idx + shift))];
    }

    function addFish(name, data) {
        if (!FishDatabase[name]) {
            FishDatabase[name] = data;
        }
    }

    var baseNames = Object.keys(FishDatabase);
    for (var i = 0; i < baseNames.length; i++) {
        var base = FishDatabase[baseNames[i]];
        for (var p = 0; p < variantPrefixes.length; p++) {
            var v = variantPrefixes[p];
            var newName = v.prefix + base.name;
            addFish(newName, {
                name: newName,
                basePrice: Math.floor(base.basePrice * v.priceMul),
                rarity: shiftRarity(base.rarity, v.rarityShift),
                habitat: base.habitat,
                description: base.description + ' (확장종)'
            });
        }
        for (var s = 0; s < variantSuffixes.length; s++) {
            var vs = variantSuffixes[s];
            var sName = base.name + vs.suffix;
            addFish(sName, {
                name: sName,
                basePrice: Math.floor(base.basePrice * vs.priceMul),
                rarity: shiftRarity(base.rarity, vs.rarityShift),
                habitat: base.habitat,
                description: base.description + ' (특별 변이)' 
            });
        }
    }
})();

// ========================================
// 희귀도별 확률 가중치
// ========================================
var FishRarityWeights = {
    'junk': 150,      // 15%
    'common': 400,    // 40%
    'uncommon': 250,  // 25%
    'rare': 120,      // 12%
    'epic': 50,       // 5%
    'legendary': 25,  // 2.5%
    'mythic': 5       // 0.5%
};

// ========================================
// 낚시 레벨별 희귀도 보정
// ========================================
var FishLevelBonus = {
    // 낚시 레벨이 높을수록 희귀한 물고기 확률 증가
    getRarityBonus: function(fishingLevel) {
        return {
            'junk': Math.max(50, 150 - fishingLevel * 5),      // 레벨 올라갈수록 잡동사니 감소
            'common': 400 - fishingLevel * 2,
            'uncommon': 250 + fishingLevel * 2,
            'rare': 120 + fishingLevel * 3,
            'epic': 50 + fishingLevel * 2,
            'legendary': 25 + fishingLevel * 1.5,
            'mythic': 5 + fishingLevel * 0.5
        };
    }
};

// ========================================
// 서식지별 물고기 목록 헬퍼
// ========================================
var FishHelper = {
    // 서식지별 물고기 가져오기
    getByHabitat: function(habitat) {
        var result = [];
        for (var name in FishDatabase) {
            var fish = FishDatabase[name];
            if (fish.habitat === habitat || fish.habitat === 'both') {
                result.push(fish);
            }
        }
        return result;
    },
    
    // 희귀도별 물고기 가져오기
    getByRarity: function(rarity) {
        var result = [];
        for (var name in FishDatabase) {
            var fish = FishDatabase[name];
            if (fish.rarity === rarity) {
                result.push(fish);
            }
        }
        return result;
    },
    
    // 랜덤 물고기 낚기 (낚시 레벨 고려)
    catchRandomFish: function(fishingLevel, habitat) {
        habitat = habitat || 'both';
        
        // 희귀도 가중치 계산
        var weights = FishLevelBonus.getRarityBonus(fishingLevel);
        var totalWeight = 0;
        for (var r in weights) {
            totalWeight += weights[r];
        }
        
        // 희귀도 결정
        var roll = Math.random() * totalWeight;
        var selectedRarity = 'common';
        var cumulative = 0;
        for (var rarity in weights) {
            cumulative += weights[rarity];
            if (roll < cumulative) {
                selectedRarity = rarity;
                break;
            }
        }
        
        // 해당 희귀도와 서식지에 맞는 물고기 중 랜덤 선택
        var candidates = [];
        for (var name in FishDatabase) {
            var fish = FishDatabase[name];
            if (fish.rarity === selectedRarity && 
                (fish.habitat === habitat || fish.habitat === 'both' || habitat === 'both')) {
                candidates.push(fish);
            }
        }
        
        if (candidates.length === 0) {
            // 후보가 없으면 common에서 선택
            candidates = this.getByRarity('common');
        }
        
        return candidates[Math.floor(Math.random() * candidates.length)];
    },
    
    // 물고기 검색
    findFish: function(name) {
        return FishDatabase[name] || null;
    },
    
    // 가격 계산 (크기 보정 포함)
    calculatePrice: function(fish, size) {
        // size: 0.5 ~ 2.0 배율
        size = size || 1.0;
        return Math.floor(fish.basePrice * size);
    },
    
    // 통계
    getStats: function() {
        var stats = { total: 0, byRarity: {}, byHabitat: {} };
        for (var name in FishDatabase) {
            stats.total++;
            var fish = FishDatabase[name];
            stats.byRarity[fish.rarity] = (stats.byRarity[fish.rarity] || 0) + 1;
            stats.byHabitat[fish.habitat] = (stats.byHabitat[fish.habitat] || 0) + 1;
        }
        return stats;
    }
};

// Export
if (typeof module !== 'undefined') {
    module.exports = { 
        FishDatabase: FishDatabase,
        FishRarityWeights: FishRarityWeights,
        FishLevelBonus: FishLevelBonus,
        FishHelper: FishHelper
    };
}





// ---------- gameData/systems.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */



/**
 * 묘냥의 숲 - 핵심 게임 시스템 데이터
 * 펫, 퀘스트, 직업, 세트 아이템, 제작 레시피, 보물상자, 던전 데이터
 */

// ========================================
// 펫 데이터베이스
// ========================================
var PetSystemData = {
    pets: {
        '아기용': { name: '아기용', description: '작지만 강력한 힘을 숨긴 용.', buff: { type: 'att', baseValue: 5, growth: 2 } },
        '새끼늑대': { name: '새끼늑대', description: '민첩하고 날카로운 감각을 지닌 늑대.', buff: { type: 'def', baseValue: 3, growth: 1 } },
        '숲의정령': { name: '숲의정령', description: '생명의 기운으로 가득한 정령.', buff: { type: 'maxHp', baseValue: 20, growth: 10 } },
        '화염용': { name: '화염용', description: '뜨거운 화염의 기운을 내뿜는 용.', buff: { type: 'att', baseValue: 15, growth: 5 } },
        '서리늑대': { name: '서리늑대', description: '냉혹한 서리의 힘을 다루는 늑대.', buff: { type: 'def', baseValue: 10, growth: 3 } },
        '세계수의 정령': { name: '세계수의 정령', description: '세계수의 기운을 받은 위대한 정령.', buff: { type: 'maxHp', baseValue: 50, growth: 25 } },
        // 추가 펫
        '불사조 새끼': { name: '불사조 새끼', description: '불멸의 불꽃을 품은 신비한 새.', buff: { type: 'att', baseValue: 8, growth: 4 } },
        '바다정령': { name: '바다정령', description: '깊은 바다의 신비한 힘을 가진 정령.', buff: { type: 'maxHp', baseValue: 30, growth: 15 } },
        '뇌룡 새끼': { name: '뇌룡 새끼', description: '번개의 힘을 다루는 작은 용.', buff: { type: 'att', baseValue: 10, growth: 3 } },
        '얼음 여우': { name: '얼음 여우', description: '차가운 서리의 기운을 품은 여우.', buff: { type: 'def', baseValue: 5, growth: 2 } },
        '그림자 고양이': { name: '그림자 고양이', description: '그림자 속에 숨는 신비한 고양이.', buff: { type: 'att', baseValue: 6, growth: 3 } },
        '달빛 토끼': { name: '달빛 토끼', description: '달빛을 받으면 빛나는 토끼.', buff: { type: 'maxHp', baseValue: 15, growth: 8 } },
        '대지 거북': { name: '대지 거북', description: '단단한 껍질로 주인을 보호하는 거북.', buff: { type: 'def', baseValue: 8, growth: 4 } },
        '요정': { name: '요정', description: '작은 날개로 날아다니는 빛나는 요정.', buff: { type: 'maxHp', baseValue: 25, growth: 12 } }
    },
    evolutions: {
        '아기용': { evolvesTo: '화염용', requiredLevel: 20, requiredItem: '진화의 돌' },
        '새끼늑대': { evolvesTo: '서리늑대', requiredLevel: 20, requiredItem: '진화의 돌' },
        '숲의정령': { evolvesTo: '세계수의 정령', requiredLevel: 20, requiredItem: '진화의 돌' },
        '불사조 새끼': { evolvesTo: '피닉스', requiredLevel: 25, requiredItem: '불멸의 불꽃' },
        '뇌룡 새끼': { evolvesTo: '뇌룡', requiredLevel: 25, requiredItem: '번개의 정수' },
        '얼음 여우': { evolvesTo: '구미호', requiredLevel: 25, requiredItem: '달빛 구슬' },
        '그림자 고양이': { evolvesTo: '암흑 표범', requiredLevel: 25, requiredItem: '그림자 정수' }
    }
};

// ========================================
// 퀘스트 데이터베이스
// ========================================
var QuestSystemData = {
    // 기본 퀘스트
    basic: {
        '늑대 사냥꾼': { name: '늑대 사냥꾼', description: '숲의 늑대 10마리를 처치하세요.', target: '늑대', count: 10, reward: { exp: 500, gold: 300, items: ['강철 몽둥이'] } },
        '골렘 파괴': { name: '골렘 파괴', description: '산악 지대의 골렘을 파괴하고 핵을 가져오세요.', target: '골렘', count: 1, reward: { exp: 2000, gold: 1500, items: ['어둠의 검'] } },
        '영웅의 길': { name: '영웅의 길', description: '자신의 한계를 증명하기 위해 어비스 드래곤을 1번 처치하세요.', target: '어비스 드래곤', count: 1, reward: { exp: 10000, gold: 5000, items: ['영웅의 증표'] } }
    },
    // 초보자 퀘스트
    beginner: {
        '첫 번째 사냥': { name: '첫 번째 사냥', description: '슬라임 5마리를 처치하세요.', target: '슬라임', count: 5, levelReq: 1, reward: { exp: 100, gold: 50, items: ['포션'] } },
        '고블린 퇴치': { name: '고블린 퇴치', description: '고블린 10마리를 처치하세요.', target: '고블린', count: 10, levelReq: 5, reward: { exp: 300, gold: 150, items: ['조잡한 철검'] } },
        '숲의 위협': { name: '숲의 위협', description: '늑대 5마리를 처치하세요.', target: '늑대', count: 5, levelReq: 8, reward: { exp: 400, gold: 200, items: ['가죽 갑옷'] } }
    },
    // 일일 퀘스트
    daily: {
        '일일 사냥': { name: '일일 사냥', description: '몬스터 20마리를 처치하세요.', type: 'kill_any', count: 20, reward: { exp: 500, gold: 300 }, resetDaily: true },
        '일일 낚시': { name: '일일 낚시', description: '물고기 10마리를 낚으세요.', type: 'fishing', count: 10, reward: { exp: 300, gold: 200 }, resetDaily: true },
        '일일 제작': { name: '일일 제작', description: '아이템 3개를 제작하세요.', type: 'craft', count: 3, reward: { exp: 400, gold: 250 }, resetDaily: true }
    }
};

// ========================================
// 직업 데이터베이스
// ========================================
var ClassSystemData = {
    // 1차 직업
    tier1: {
        '전사': { hp: 120, mp: 30, att: 12, def: 8, jobTier: 1, nextJob: { '버서커': '공격 특화', '팔라딘': '방어 특화' } },
        '마법사': { hp: 80, mp: 80, att: 8, def: 5, jobTier: 1, nextJob: { '아크메이지': '광역 마법', '서모너': '소환 특화' } },
        '도적': { hp: 90, mp: 50, att: 15, def: 6, jobTier: 1, nextJob: { '어쌔신': '치명타 특화', '로그': '파밍 특화' } },
        '힐러': { hp: 90, mp: 100, att: 6, def: 6, jobTier: 1, nextJob: { '프리스트': '회복/부활', '몽크': '전투/회복' } }
    },
    // 2차 직업
    tier2: {
        '버서커': { hp: 150, mp: 40, att: 18, def: 10, jobTier: 2 },
        '팔라딘': { hp: 200, mp: 50, att: 14, def: 15, jobTier: 2 },
        '아크메이지': { hp: 100, mp: 150, att: 10, def: 8, jobTier: 2 },
        '서모너': { hp: 110, mp: 120, att: 12, def: 10, jobTier: 2 },
        '어쌔신': { hp: 120, mp: 70, att: 20, def: 8, jobTier: 2 },
        '로그': { hp: 130, mp: 80, att: 18, def: 12, jobTier: 2 },
        '프리스트': { hp: 120, mp: 180, att: 8, def: 10, jobTier: 2 },
        '몽크': { hp: 140, mp: 100, att: 15, def: 13, jobTier: 2 }
    },
    // 스킬 데이터
    skills: {
        '강타': { name: '강타', mpCost: 15, damageMultiplier: 2.0, description: 'MP를 소모하여 적에게 강력한 일격을 날립니다.', classes: ['전사', '버서커', '팔라딘'] },
        '파이어볼': { name: '파이어볼', mpCost: 20, baseDamage: 50, description: '거대한 화염구를 날려 적을 공격합니다.', classes: ['마법사', '아크메이지', '서모너'] },
        '독바르기': { name: '독바르기', mpCost: 25, duration: 300000, extraDamage: 10, description: '5분간 무기에 맹독을 발라 공격 시 추가 데미지를 줍니다.', classes: ['도적', '어쌔신', '로그'] },
        '치유': { name: '치유', mpCost: 25, healAmount: 80, description: '아군의 HP를 회복시킵니다.', classes: ['힐러', '프리스트', '몽크'] },
        '분노폭발': { name: '분노폭발', mpCost: 30, selfBuff: true, description: '5분간 자신의 공격력을 30% 증가시키고 방어력을 10% 감소시킵니다.', classes: ['버서커'] },
        '신성한 방패': { name: '신성한 방패', mpCost: 40, partyBuff: true, description: '5분간 모든 파티원의 방어력을 20% 증가시킵니다.', classes: ['팔라딘'] },
        '메테오': { name: '메테오', mpCost: 80, baseDamage: 200, description: '하늘에서 거대한 운석을 떨어트려 강력한 피해를 줍니다.', classes: ['아크메이지'] },
        '골렘소환': { name: '골렘소환', mpCost: 100, description: '전투를 돕는 작은 골렘을 소환합니다.', classes: ['서모너'] },
        '암살': { name: '암살', mpCost: 50, damageMultiplier: 3.0, description: '적의 약점을 노려 치명적인 일격을 가합니다.', classes: ['어쌔신'] },
        '훔치기': { name: '훔치기', mpCost: 30, description: '전투 중인 몬스터에게서 골드를 훔칩니다.', classes: ['로그'] },
        '부활': { name: '부활', mpCost: 150, description: '전투 불능 상태의 파티원을 부활시킵니다.', classes: ['프리스트'] },
        '아수라파천무': { name: '아수라파천무', mpCost: 60, damageMultiplier: 2.5, description: '빠른 연타로 적에게 큰 데미지를 줍니다.', classes: ['몽크'] }
    }
};

// ========================================
// 세트 아이템 데이터베이스
// ========================================
var ItemSetData = {
    '어비스 드래곤 세트': {
        items: ['어비스의 숨결', '드래곤의 심장'],
        bonuses: { '2': { description: '공격력 +10%, 방어력 +10%', attMultiplier: 1.1, defMultiplier: 1.1 } }
    },
    '기사의 맹세 세트': {
        items: ['기사의 검', '강철 갑옷', '낡은 방패'],
        bonuses: { '2': { description: '최대 HP +50', maxHpBonus: 50 }, '3': { description: '공격력 +5%, 방어력 +5%', attMultiplier: 1.05, defMultiplier: 1.05 } }
    },
    '마법사의 지혜 세트': {
        items: ['마법사의 로브', '마력의 지팡이', '지혜의 반지'],
        bonuses: { '2': { description: '최대 MP +30', maxMpBonus: 30 }, '3': { description: '마법 공격력 +15%', magicAttMultiplier: 1.15 } }
    },
    '암살자의 그림자 세트': {
        items: ['암흑의 단검', '그림자 망토', '암살자의 장갑'],
        bonuses: { '2': { description: '공격력 +8%', attMultiplier: 1.08 }, '3': { description: '치명타 확률 +10%', critBonus: 0.1 } }
    },
    '수호자의 맹세 세트': {
        items: ['수호자의 검', '수호자의 갑옷', '수호자의 방패', '수호자의 투구'],
        bonuses: { '2': { description: '방어력 +10%', defMultiplier: 1.1 }, '3': { description: '최대 HP +100', maxHpBonus: 100 }, '4': { description: '받는 피해 -10%', damageReduction: 0.1 } }
    }
};

// ========================================
// 제작 레시피 데이터베이스
// ========================================
var CraftingRecipeData = {
    // 조합 레시피
    combination: {
        '포션': { cost: 50, materials: [{ name: '젤리', count: 10 }], result: { name: '포션', count: 1 } },
        '펫 먹이': { cost: 100, materials: [{ name: '젤리', count: 5 }, { name: '가죽 조각', count: 5 }], result: { name: '펫 먹이', count: 3 } },
        '강철검': { cost: 100, materials: [{ name: '조잡한 철검', count: 1 }, { name: '구리 조각', count: 5 }], result: { name: '강철검', count: 1 } },
        '강철 갑옷': { cost: 200, materials: [{ name: '가죽 갑옷', count: 1 }, { name: '구리 조각', count: 10 }], result: { name: '강철 갑옷', count: 1 } },
        '기사의 검': { cost: 500, materials: [{ name: '강철검', count: 1 }, { name: '보석', count: 1 }], result: { name: '기사의 검', count: 1 } },
        '룬 블레이드': { cost: 3000, materials: [{ name: '어둠의 검', count: 1 }, { name: '마력의 돌', count: 5 }, { name: '심연의 파편', count: 1 }], result: { name: '룬 블레이드', count: 1 } },
        '힘의 영약': { cost: 1000, materials: [{ name: '트롤의 피', count: 2 }, { name: '오우거의 가죽', count: 1 }, { name: '불의 정수', count: 1 }], result: { name: '힘의 영약', count: 1 } },
        '수호의 영약': { cost: 1000, materials: [{ name: '골렘의 핵', count: 1 }, { name: '용의 비늘', count: 2 }, { name: '지옥의 가죽', count: 1 }], result: { name: '수호의 영약', count: 1 } },
        '성장의 영약': { cost: 10000, materials: [{ name: '혼돈의 정수', count: 1 }, { name: '드래곤의 심장', count: 1 }, { name: '찬란한 보물상자', count: 1 }], result: { name: '성장의 영약', count: 1 } }
    },
    // 요리 레시피
    cooking: {
        '멸치구이': { cost: 10, fish: { name: '멸치', count: 1 }, result: { name: '멸치구이', count: 1 } },
        '잉어찜': { cost: 30, fish: { name: '잉어', count: 1 }, result: { name: '잉어찜', count: 1 } },
        '광어회': { cost: 100, fish: { name: '광어', count: 1 }, result: { name: '광어회', count: 1 } },
        '장어구이': { cost: 200, fish: { name: '장어', count: 1 }, result: { name: '장어구이', count: 1 } },
        '고래찜': { cost: 1000, fish: { name: '고래', count: 1 }, result: { name: '고래찜', count: 1 } },
        '연어스테이크': { cost: 150, fish: { name: '연어', count: 1 }, result: { name: '연어스테이크', count: 1 } },
        '복어회': { cost: 300, fish: { name: '복어', count: 1 }, result: { name: '복어회', count: 1 } },
        '참치회': { cost: 400, fish: { name: '참치', count: 1 }, result: { name: '참치회', count: 1 } },
        '대왕문어숙회': { cost: 800, fish: { name: '대왕문어', count: 1 }, result: { name: '대왕문어숙회', count: 1 } },
        '용왕의 만찬': { cost: 5000, fish: { name: '해룡', count: 1 }, result: { name: '용왕의 만찬', count: 1 } }
    }
};

// ========================================
// 보물 상자 데이터베이스
// ========================================
var TreasureBoxData = {
    '낡은 보물상자': [
        { item: '포션', count: 5, weight: 30 }, { item: '마나 포션', count: 5, weight: 30 },
        { item: '조잡한 철검', count: 1, weight: 15 }, { item: '가죽 갑옷', count: 1, weight: 15 },
        { item: '강철 몽둥이', count: 1, weight: 5 }, { item: '보석', count: 1, weight: 4 },
        { item: '펫 알', count: 1, weight: 2 }, { item: '화려한 보물상자', count: 1, weight: 1 }
    ],
    '화려한 보물상자': [
        { item: '엘릭서', count: 3, weight: 30 }, { item: '강철 몽둥이', count: 1, weight: 20 },
        { item: '어둠의 검', count: 1, weight: 10 }, { item: '마법사의 로브', count: 1, weight: 10 },
        { item: '기사의 검', count: 1, weight: 5 }, { item: '화염의 검', count: 1, weight: 2 },
        { item: '펫 알', count: 1, weight: 5 }, { item: '찬란한 보물상자', count: 1, weight: 1 }
    ],
    '찬란한 보물상자': [
        { item: '엘릭서', count: 10, weight: 30 }, { item: '화염의 검', count: 1, weight: 20 },
        { item: '저주받은 갑옷 조각', count: 1, weight: 15 }, { item: '룬 블레이드', count: 1, weight: 10 },
        { item: '어비스의 숨결', count: 1, weight: 5 }, { item: '드래곤의 심장', count: 1, weight: 2 }
    ],
    '전설의 보물상자': [
        { item: '전설의 무기 조각', count: 1, weight: 30 }, { item: '성장의 영약', count: 1, weight: 20 },
        { item: '어비스의 숨결', count: 1, weight: 15 }, { item: '드래곤의 심장', count: 1, weight: 15 },
        { item: '진화의 돌', count: 1, weight: 10 }, { item: '펫 알', count: 3, weight: 8 },
        { item: '황금 물고기', count: 1, weight: 2 }
    ]
};

// ========================================
// 던전/레이드 데이터베이스
// ========================================
var DungeonSystemData = {
    raidDungeon: {
        name: "어비스 던전", 
        entryItem: "어비스의 열쇠", 
        minLevel: 20, 
        bosses: ['심연의 감시자', '혼돈의 그림자', '어비스 드래곤']
    },
    dungeons: {
        '초보자의 동굴': { minLevel: 1, maxLevel: 10, entryItem: null, bosses: ['슬라임 킹'] },
        '고블린 소굴': { minLevel: 10, maxLevel: 20, entryItem: '고블린 열쇠', bosses: ['고블린 대장'] },
        '잊혀진 사원': { minLevel: 20, maxLevel: 35, entryItem: '사원의 열쇠', bosses: ['타락한 사제'] },
        '용의 둥지': { minLevel: 35, maxLevel: 50, entryItem: '용의 열쇠', bosses: ['화염 드래곤', '얼음 드래곤'] },
        '심연의 틈': { minLevel: 50, maxLevel: 70, entryItem: '심연의 균열', bosses: ['심연의 군주'] }
    }
};

// ========================================
// 핵심 시스템 대량 확장 (자동 생성)
// ========================================

(function() {
    // 펫 시스템 확장
    var extraPets = {
        '폭풍 매': { name: '폭풍 매', description: '폭풍의 기운을 두른 매.', buff: { type: 'att', baseValue: 12, growth: 4 } },
        '심연 수호자': { name: '심연 수호자', description: '심연을 지키는 신비한 존재.', buff: { type: 'def', baseValue: 18, growth: 6 } },
        '별빛 여우': { name: '별빛 여우', description: '별빛을 머금은 여우.', buff: { type: 'maxHp', baseValue: 40, growth: 18 } },
        '황혼 늑대': { name: '황혼 늑대', description: '황혼의 힘을 품은 늑대.', buff: { type: 'att', baseValue: 20, growth: 7 } },
        '천상의 사자': { name: '천상의 사자', description: '천상의 수호자.', buff: { type: 'maxHp', baseValue: 60, growth: 22 } },
        '암흑 표범': { name: '암흑 표범', description: '그림자 속의 포식자.', buff: { type: 'att', baseValue: 16, growth: 5 } }
    };

    for (var petKey in extraPets) {
        PetSystemData.pets[petKey] = extraPets[petKey];
    }

    PetSystemData.evolutions['폭풍 매'] = { evolvesTo: '천둥의 매', requiredLevel: 25, requiredItem: '번개의 정수' };
    PetSystemData.evolutions['별빛 여우'] = { evolvesTo: '성좌의 여우', requiredLevel: 25, requiredItem: '별의 파편' };
    PetSystemData.evolutions['황혼 늑대'] = { evolvesTo: '황혼의 군주', requiredLevel: 30, requiredItem: '황혼의 정수' };

    // 퀘스트 시스템 확장
    QuestSystemData.basic['심연의 문지기'] = { name: '심연의 문지기', description: '심연의 문지기를 처치하세요.', target: '심연의 문지기', count: 1, reward: { exp: 5000, gold: 4000, items: ['심연의 열쇠'] } };
    QuestSystemData.basic['천상 시험'] = { name: '천상 시험', description: '천상의 수호자를 처치하세요.', target: '천상 수호자', count: 1, reward: { exp: 6000, gold: 5000, items: ['천상의 인장'] } };

    // 직업/스킬 확장
    ClassSystemData.tier1['궁수'] = { hp: 100, mp: 60, att: 14, def: 7, jobTier: 1, nextJob: { '저격수': '치명타 특화', '레인저': '생존 특화' } };

    var extraSkills = {
        '폭풍화살': { name: '폭풍화살', mpCost: 35, baseDamage: 90, description: '폭풍의 화살을 발사합니다.', classes: ['궁수', '저격수', '레인저'] },
        '어둠의 일격': { name: '어둠의 일격', mpCost: 40, damageMultiplier: 2.2, description: '어둠의 힘으로 급습합니다.', classes: ['어쌔신', '로그'] },
        '성역의 빛': { name: '성역의 빛', mpCost: 60, description: '파티원의 체력을 대량 회복합니다.', classes: ['프리스트', '힐러'] },
        '대지강타': { name: '대지강타', mpCost: 35, damageMultiplier: 2.4, description: '대지의 힘으로 강타합니다.', classes: ['전사', '팔라딘'] },
        '빙결파동': { name: '빙결파동', mpCost: 45, baseDamage: 110, description: '빙결의 파동을 일으킵니다.', classes: ['빙결마법사'] }
    };

    for (var skillKey in extraSkills) {
        ClassSystemData.skills[skillKey] = extraSkills[skillKey];
    }

    // 세트 아이템 확장
    ItemSetData['별빛 수호 세트'] = {
        items: ['별빛 지팡이', '천상의 로브', '빛나는 반지'],
        bonuses: { '2': { description: '마력 +15%', magicAttMultiplier: 1.15 }, '3': { description: '최대 MP +80', maxMpBonus: 80 } }
    };
    ItemSetData['황혼의 사냥꾼 세트'] = {
        items: ['황혼의 활', '황혼의 망토', '황혼의 장갑'],
        bonuses: { '2': { description: '치명타 확률 +8%', critBonus: 0.08 }, '3': { description: '공격력 +12%', attMultiplier: 1.12 } }
    };

    // 제작 레시피 확장
    CraftingRecipeData.combination['황혼의 검'] = { cost: 5000, materials: [{ name: '강철검', count: 1 }, { name: '황혼의 정수', count: 2 }, { name: '고대 마법석', count: 1 }], result: { name: '황혼의 검', count: 1 } };
    CraftingRecipeData.combination['심연의 갑옷'] = { cost: 6000, materials: [{ name: '강철 갑옷', count: 1 }, { name: '공허의 정수', count: 2 }, { name: '심연의 수정', count: 1 }], result: { name: '심연의 갑옷', count: 1 } };
    CraftingRecipeData.cooking['황혼의 스튜'] = { cost: 300, fish: { name: '연어', count: 2 }, result: { name: '황혼의 스튜', count: 1 } };

    // 보물 상자 확장
    TreasureBoxData['황혼의 보물상자'] = [
        { item: '황혼의 검', count: 1, weight: 10 },
        { item: '황혼의 망토', count: 1, weight: 15 },
        { item: '황혼의 장갑', count: 1, weight: 15 },
        { item: '경험치포션', count: 5, weight: 30 },
        { item: '황금의포션', count: 5, weight: 30 }
    ];
    TreasureBoxData['심연의 보물상자'] = [
        { item: '심연의 갑옷', count: 1, weight: 10 },
        { item: '공허의 정수', count: 2, weight: 20 },
        { item: '심연의 수정', count: 2, weight: 20 },
        { item: '전설상자열쇠', count: 1, weight: 10 },
        { item: '찬란한보물상자', count: 1, weight: 5 }
    ];

    // 던전 확장
    DungeonSystemData.dungeons['황혼의 성채'] = { minLevel: 45, maxLevel: 60, entryItem: '황혼의 열쇠', bosses: ['황혼의 기사', '황혼의 마법사'] };
    DungeonSystemData.dungeons['심연의 심장부'] = { minLevel: 60, maxLevel: 80, entryItem: '심연의 열쇠', bosses: ['심연의 군주', '공허의 왕'] };
    DungeonSystemData.dungeons['천상 시험장'] = { minLevel: 50, maxLevel: 70, entryItem: '천상의 인장', bosses: ['빛의 수호자', '천사의 군단장'] };
})();

// Export
if (typeof module !== 'undefined') {
    module.exports = { 
        PetSystemData: PetSystemData,
        QuestSystemData: QuestSystemData,
        ClassSystemData: ClassSystemData,
        ItemSetData: ItemSetData,
        CraftingRecipeData: CraftingRecipeData,
        TreasureBoxData: TreasureBoxData,
        DungeonSystemData: DungeonSystemData
    };
}




// ---------- dotForest.js ----------
/* (중간 생략: 위와 동일한 원본 내용 전체가 포함됩니다) */



/**
 * 묘냥의 숲 - 점(.) 명령어 전용 간소 RPG (메신저봇 R)
 * gameData 폴더만 있으면 작동
 */

// -------------------------------------------
// 1. 환경 설정
// -------------------------------------------

var DB_MANAGER = {
    // [설정] 내부저장공간 바로 아래 경로 사용
    ROOT_PATH: "/storage/emulated/0/happyCat/gameFiles",
    // 기존 공용 경로(권한 허용 시 읽기용)
    LEGACY_ROOT_PATH: "/storage/emulated/0/Rbot",
    SAVE_FILE_NAME: "dot_rpg.json",

    // 경로 생성 헬퍼 함수
    getGameDataPath: function() {
        return this.ROOT_PATH + "/gameData";
    },

    getLegacyGameDataPath: function() {
        return this.LEGACY_ROOT_PATH + "/gameData";
    },

    getSavePath: function() {
        return this.ROOT_PATH + "/DotRPG";
    },

    // 1. 초기화: 폴더가 없으면 생성
    init: function() {
        var root = new java.io.File(this.ROOT_PATH);
        if (!root.exists()) root.mkdirs();
        var saveFolder = new java.io.File(this.getSavePath());
        if (!saveFolder.exists()) saveFolder.mkdirs();
    },

    // 2. 파일 저장 (ES5 문법)
    saveFile: function(dataObject) {
        this.init(); // 폴더 확인
        try {
            var fullPath = this.getSavePath() + "/" + this.SAVE_FILE_NAME;
            var file = new java.io.File(fullPath);
            var fos = new java.io.FileOutputStream(file);
            var osw = new java.io.OutputStreamWriter(fos, "UTF-8"); // 한글 깨짐 방지
            
            // JSON 문자열로 변환 (들여쓰기 4칸)
            var jsonStr = JSON.stringify(dataObject, null, 4);
            
            osw.write(jsonStr);
            osw.flush();
            osw.close();
            fos.close();
            return true;
        } catch(e) {
            Log.e("저장 실패: " + e);
            return false;
        }
    },

    // 3. 파일 읽기 (ES5 문법)
    readFile: function() {
        this.init(); // 폴더 확인
        var fullPath = this.getSavePath() + "/" + this.SAVE_FILE_NAME;
        var file = new java.io.File(fullPath);
        
        if (!file.exists()) {
            try {
                var fos = new java.io.FileOutputStream(file);
                var osw = new java.io.OutputStreamWriter(fos, "UTF-8");
                osw.write("{}");
                osw.flush();
                osw.close();
                fos.close();
            } catch (e) {
                Log.e("파일 생성 실패: " + e);
                return null;
            }
            return {};
        }

        try {
            var fis = new java.io.FileInputStream(file);
            var isr = new java.io.InputStreamReader(fis, "UTF-8");
            var br = new java.io.BufferedReader(isr);
            var str = "";
            var line = "";

            // readLine()을 사용하여 한 줄씩 읽기
            while ((line = br.readLine()) != null) {
                str += line; // 문자열 연결
            }
            
            br.close();
            isr.close();
            fis.close();

            return JSON.parse(str); // 객체로 변환하여 반환
        } catch(e) {
            Log.e("로드 실패: " + e);
            return null;
        }
    }
};
    

var Config = {
    DATA_FOLDER_PATH: DB_MANAGER.getSavePath(),
    GAMEDATA_PATH: DB_MANAGER.getGameDataPath(),
    GAMEDATA_FALLBACKS: [DB_MANAGER.getLegacyGameDataPath()],
    SAVE_FILE: DB_MANAGER.SAVE_FILE_NAME,
    PREFIX: ".",
    IGNORE_PREFIX_REGEX: /^\.{2,}/,
    CHAR_SLOTS: 20,
    DROP_RATE: 0.35,
    FISH_BASE_DELAY_MS: 3000,
    FISH_SELL_MULT: 0.2,
    SHOP_DAILY_BUY_LIMIT: 5,
    ALLOW_FREE_TRAVEL: true,
    MOUNT_BALANCE_MULT: 1.08,
    REST_COOLDOWN_MS: 60000,
    DAILY_GOLD: 300,
    DAILY_EXP: 150,
    DUNGEON_BONUS_MULT: 1.5,
    LEVEL_EXP_SCALE: 0.02,
    LEVEL_GOLD_SCALE: 0.02,
    PET_EXP_PER_FEED: 10,
    PET_LEVEL_EXP: 100,
    PET_TRAIN_COST: 100,
    PET_TRAIN_EXP: 15,
    PET_EXPLORE_COOLDOWN_MS: 600000,
    PARTY_MAX: 5,
    RAID_MAX: 10,
    AUCTION_LIST_FEE_RATE: 0.05,
    AUCTION_CANCEL_FEE_RATE: 0.02,
    BG_REWARD_GOLD: 220,
    BG_REWARD_EXP: 140,
    PVP_WIN_RATING: 20,
    PVP_LOSE_RATING: 10,
    GUILD_CREATE_COST: 1000,
    HOUSE_COST: 5000,
    BEGINNER_DUNGEON_MAX_LEVEL: 15,
    MID_DUNGEON_MIN_LEVEL: 16,
    MID_DUNGEON_MAX_LEVEL: 35,
    ENDGAME_DUNGEON_MIN_LEVEL: 50,
    CHALLENGE_TIME_LIMIT_SEC: 90,
    MUTATION_REWARD_MULT: 1.8,
    SEASON_DUNGEON_MIN_LEVEL: 30,
    SEASON_DUNGEON_REWARD_GOLD: 3000
};

var TutorialQuestLine = [
    { id: 'TQ1', title: '첫 사냥', type: 'kill', count: 3, reward: { exp: 40, gold: 60, items: ['포션'] }, hint: '.사냥' },
    { id: 'TQ2', title: '장비 착용', type: 'equip', count: 1, reward: { exp: 60, gold: 80, items: ['낡은 보물상자'] }, hint: '.장착 <부위> <아이템>' },
    { id: 'TQ3', title: '강화 맛보기', type: 'enhance', count: 1, reward: { exp: 80, gold: 100, items: ['강화석'] }, hint: '.강화 <부위>' },
    { id: 'TQ4', title: '던전 입장', type: 'dungeon', count: 1, reward: { exp: 120, gold: 150, items: ['룬각인서'] }, hint: '.던전 <이름>' }
];

var RuneEffectTable = {
    '맹공 룬': { attMul: 1.06 },
    '수호 룬': { defMul: 1.06 },
    '생명 룬': { hpBonus: 80 },
    '치명 룬': { critPct: 0.06 },
    '회복 룬': { healPct: 0.08 },
    '풍요 룬': { dropRate: 0.05 }
};

var MutationRulePool = [
    { name: '광폭', desc: '몬스터 공격력 강화', monsterAttMul: 1.35 },
    { name: '거대화', desc: '몬스터 HP 강화', monsterHpMul: 1.45 },
    { name: '강철', desc: '몬스터 방어력 강화', monsterDefMul: 1.35 },
    { name: '저주', desc: '플레이어 공격/방어 감소', playerAttMul: 0.9, playerDefMul: 0.9 },
    { name: '쇠약', desc: '플레이어 방어 감소', playerDefMul: 0.85 },
    { name: '피의 대가', desc: '플레이어 공격 증가, 방어 감소', playerAttMul: 1.08, playerDefMul: 0.88 }
];

var TarotCardPool = [
    // Major Arcana (22)
    { id: 'fool', name: '바보', desc: '새로운 시작', effects: { expBonus: 0.06 } },
    { id: 'magician', name: '마법사', desc: '집중된 힘', effects: { attMul: 1.08 } },
    { id: 'high_priestess', name: '여사제', desc: '직관의 빛', effects: { healPct: 0.06 } },
    { id: 'empress', name: '여제', desc: '풍요와 성장', effects: { hpBonus: 80 } },
    { id: 'emperor', name: '황제', desc: '굳건한 수호', effects: { defMul: 1.08 } },
    { id: 'hierophant', name: '교황', desc: '치유와 가호', effects: { healPct: 0.08, defMul: 1.04 } },
    { id: 'lovers', name: '연인', desc: '조화와 선택', effects: { goldBonus: 0.06 } },
    { id: 'chariot', name: '전차', desc: '진격의 기세', effects: { attMul: 1.06, defMul: 1.04 } },
    { id: 'strength', name: '힘', desc: '의지와 용기', effects: { attMul: 1.06 } },
    { id: 'hermit', name: '은둔자', desc: '내면의 통찰', effects: { expBonus: 0.08 } },
    { id: 'wheel', name: '운명의 수레바퀴', desc: '행운의 흐름', effects: { dropRate: 0.06, goldBonus: 0.08 } },
    { id: 'justice', name: '정의', desc: '균형의 심판', effects: { defMul: 1.05 } },
    { id: 'hanged_man', name: '매달린 남자', desc: '인내의 시간', effects: { expBonus: 0.07 } },
    { id: 'death', name: '죽음', desc: '새로운 전환', effects: { attMul: 1.05, dropRate: 0.05 } },
    { id: 'temperance', name: '절제', desc: '회복과 안정', effects: { healPct: 0.1 } },
    { id: 'devil', name: '악마', desc: '유혹과 대가', effects: { attMul: 1.08, defMul: 0.96 } },
    { id: 'tower', name: '탑', desc: '격변과 시험', effects: { expBonus: 0.1 } },
    { id: 'star', name: '별', desc: '회복과 희망', effects: { healPct: 0.12, hpBonus: 60 } },
    { id: 'moon', name: '달', desc: '신비한 기운', effects: { dropRate: 0.08 } },
    { id: 'sun', name: '태양', desc: '활력과 번영', effects: { expBonus: 0.12, goldBonus: 0.12 } },
    { id: 'judgement', name: '심판', desc: '각성과 결단', effects: { attMul: 1.07, expBonus: 0.06 } },
    { id: 'world', name: '세계', desc: '완성과 보상', effects: { goldBonus: 0.12, dropRate: 0.05 } },

    // Minor Arcana (56) - Wands
    { id: 'wands_ace', name: '완드 에이스', desc: '불꽃의 시작' },
    { id: 'wands_2', name: '완드 2', desc: '계획과 방향' },
    { id: 'wands_3', name: '완드 3', desc: '확장과 준비' },
    { id: 'wands_4', name: '완드 4', desc: '안정과 축하' },
    { id: 'wands_5', name: '완드 5', desc: '경쟁과 자극' },
    { id: 'wands_6', name: '완드 6', desc: '승리와 인정' },
    { id: 'wands_7', name: '완드 7', desc: '방어와 결의' },
    { id: 'wands_8', name: '완드 8', desc: '속도와 진전' },
    { id: 'wands_9', name: '완드 9', desc: '인내와 대비' },
    { id: 'wands_10', name: '완드 10', desc: '과중한 책임' },
    { id: 'wands_page', name: '완드 페이지', desc: '호기심과 소식' },
    { id: 'wands_knight', name: '완드 기사', desc: '열정과 돌진' },
    { id: 'wands_queen', name: '완드 여왕', desc: '자신감과 매력' },
    { id: 'wands_king', name: '완드 왕', desc: '지도력과 비전' },

    // Cups
    { id: 'cups_ace', name: '컵 에이스', desc: '감정의 시작' },
    { id: 'cups_2', name: '컵 2', desc: '조화와 동맹' },
    { id: 'cups_3', name: '컵 3', desc: '우정과 축하' },
    { id: 'cups_4', name: '컵 4', desc: '권태와 숙고' },
    { id: 'cups_5', name: '컵 5', desc: '아쉬움과 회복' },
    { id: 'cups_6', name: '컵 6', desc: '향수와 회상' },
    { id: 'cups_7', name: '컵 7', desc: '환상과 선택' },
    { id: 'cups_8', name: '컵 8', desc: '결별과 전진' },
    { id: 'cups_9', name: '컵 9', desc: '소원과 만족' },
    { id: 'cups_10', name: '컵 10', desc: '완성된 조화' },
    { id: 'cups_page', name: '컵 페이지', desc: '감성의 소식' },
    { id: 'cups_knight', name: '컵 기사', desc: '이상과 제안' },
    { id: 'cups_queen', name: '컵 여왕', desc: '공감과 배려' },
    { id: 'cups_king', name: '컵 왕', desc: '성숙한 감정' },

    // Swords
    { id: 'swords_ace', name: '소드 에이스', desc: '결단과 진실' },
    { id: 'swords_2', name: '소드 2', desc: '갈등과 선택' },
    { id: 'swords_3', name: '소드 3', desc: '아픔과 이별' },
    { id: 'swords_4', name: '소드 4', desc: '휴식과 회복' },
    { id: 'swords_5', name: '소드 5', desc: '손실과 교훈' },
    { id: 'swords_6', name: '소드 6', desc: '이동과 전환' },
    { id: 'swords_7', name: '소드 7', desc: '전략과 기지' },
    { id: 'swords_8', name: '소드 8', desc: '제한과 인내' },
    { id: 'swords_9', name: '소드 9', desc: '불안과 악몽' },
    { id: 'swords_10', name: '소드 10', desc: '끝과 전환' },
    { id: 'swords_page', name: '소드 페이지', desc: '경계와 관찰' },
    { id: 'swords_knight', name: '소드 기사', desc: '결단과 돌격' },
    { id: 'swords_queen', name: '소드 여왕', desc: '명확함과 절제' },
    { id: 'swords_king', name: '소드 왕', desc: '권위와 판단' },

    // Pentacles
    { id: 'pentacles_ace', name: '펜타클 에이스', desc: '기회의 씨앗' },
    { id: 'pentacles_2', name: '펜타클 2', desc: '균형과 조율' },
    { id: 'pentacles_3', name: '펜타클 3', desc: '협업과 기술' },
    { id: 'pentacles_4', name: '펜타클 4', desc: '보호와 소유' },
    { id: 'pentacles_5', name: '펜타클 5', desc: '결핍과 지원' },
    { id: 'pentacles_6', name: '펜타클 6', desc: '균형과 나눔' },
    { id: 'pentacles_7', name: '펜타클 7', desc: '인내와 성장' },
    { id: 'pentacles_8', name: '펜타클 8', desc: '수련과 집중' },
    { id: 'pentacles_9', name: '펜타클 9', desc: '성취와 보상' },
    { id: 'pentacles_10', name: '펜타클 10', desc: '유산과 안정' },
    { id: 'pentacles_page', name: '펜타클 페이지', desc: '실천과 탐구' },
    { id: 'pentacles_knight', name: '펜타클 기사', desc: '성실과 지속' },
    { id: 'pentacles_queen', name: '펜타클 여왕', desc: '풍요와 배려' },
    { id: 'pentacles_king', name: '펜타클 왕', desc: '확고한 기반' }
];

var TarotFocusTable = {
    att: { label: '공격', text: '공격 x1.04' },
    def: { label: '방어', text: '방어 x1.04' },
    hp: { label: '체력', text: 'HP +70' },
    drop: { label: '드랍', text: '드랍 +3%' },
    exp: { label: '경험', text: 'EXP +3%' },
    gold: { label: '골드', text: '골드 +3%' },
    heal: { label: '치유', text: '치유 +3%' }
};

var ExtraDungeons = {
    '초보자 수련동굴': {
        minLevel: 1,
        maxLevel: 15,
        zone: '묘냥의 숲',
        type: 'beginner',
        monsters: ['슬라임', '고블린', '박쥐'],
        bosses: [{ name: '훈련용 골렘', hp: 260, att: 18, def: 6, exp: 80, gold: 70, level: 6, items: ['낡은 보물상자', '강화석'] }],
        dropItems: ['낡은 보물상자', '강화석']
    },
    '정예 훈련장': {
        minLevel: 16,
        maxLevel: 35,
        zone: '초원 평야',
        type: 'mid',
        monsters: ['도적', '초원늑대', '하피', '켄타우로스전사'],
        bosses: [{ name: '정예 교관 크로넌', hp: 900, att: 70, def: 25, exp: 260, gold: 220, level: 25, items: ['화려한 보물상자', '강화석'] }],
        dropItems: ['화려한 보물상자', '강화석', '룬석']
    },
    '묘냥이의 옷장': {
        minLevel: 1,
        maxLevel: 10,
        zone: '묘냥의 숲',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['슬라임', '고블린', '박쥐', '쥐'],
        bosses: [
            { name: '상자 도깨비', hp: 170, att: 12, def: 4, exp: 45, gold: 30, level: 4, items: ['낡은 보물상자'] },
            { name: '옷장 유령', hp: 260, att: 16, def: 6, exp: 70, gold: 45, level: 6, items: ['낡은 보물상자', '강화석'], final: true }
        ],
        dropItems: ['낡은 보물상자', '강화석', '천조각']
    },
    '버섯 저장고': {
        minLevel: 1,
        maxLevel: 10,
        zone: '묘냥의 숲',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['버섯괴물', '슬라임', '쥐', '박쥐'],
        bosses: [
            { name: '광포한 버섯괴물', hp: 190, att: 13, def: 5, exp: 55, gold: 35, level: 5, items: ['낡은 보물상자'] },
            { name: '균사 군주', hp: 280, att: 18, def: 7, exp: 80, gold: 50, level: 7, items: ['낡은 보물상자', '강화석'], final: true }
        ],
        dropItems: ['낡은 보물상자', '천조각']
    },
    '숲길 연습장': {
        minLevel: 1,
        maxLevel: 10,
        zone: '묘냥의 숲',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['슬라임', '고블린', '늑대', '멧돼지'],
        bosses: [
            { name: '숲길 감시자', hp: 200, att: 14, def: 5, exp: 60, gold: 40, level: 5, items: ['낡은 보물상자'] },
            { name: '숲의 수문장', hp: 300, att: 19, def: 7, exp: 90, gold: 55, level: 8, items: ['낡은 보물상자', '강화석'], final: true }
        ],
        dropItems: ['낡은 보물상자', '가죽 조각']
    },
    '초원의 마굿간': {
        minLevel: 11,
        maxLevel: 20,
        zone: '초원 평야',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['들소', '도적', '초원늑대', '하피'],
        bosses: [
            { name: '마굿간 난동자', hp: 420, att: 26, def: 10, exp: 130, gold: 90, level: 13, items: ['화려한 보물상자'] },
            { name: '마굿간 지배자', hp: 580, att: 36, def: 14, exp: 190, gold: 130, level: 16, items: ['화려한 보물상자', '강화석'], final: true }
        ],
        dropItems: ['화려한 보물상자', '강화석', '가죽 조각']
    },
    '바람마루 초소': {
        minLevel: 11,
        maxLevel: 20,
        zone: '초원 평야',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['코요테', '독수리', '하피', '도적'],
        bosses: [
            { name: '초소 감시자', hp: 460, att: 28, def: 11, exp: 140, gold: 95, level: 14, items: ['화려한 보물상자'] },
            { name: '바람마루 사령관', hp: 640, att: 40, def: 16, exp: 210, gold: 140, level: 18, items: ['화려한 보물상자', '강화석'], final: true }
        ],
        dropItems: ['화려한 보물상자', '강화석']
    },
    '도적 보급창': {
        minLevel: 11,
        maxLevel: 20,
        zone: '초원 평야',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['도적', '도적궁수', '도적두목', '초원늑대'],
        bosses: [
            { name: '보급창 경비장', hp: 480, att: 30, def: 12, exp: 150, gold: 100, level: 15, items: ['화려한 보물상자'] },
            { name: '보급창 지배자', hp: 680, att: 42, def: 17, exp: 230, gold: 150, level: 19, items: ['화려한 보물상자', '강화석'], final: true }
        ],
        dropItems: ['화려한 보물상자', '강화석']
    },
    '사막의 유물창고': {
        minLevel: 21,
        maxLevel: 30,
        zone: '불타는 사막',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['사막전갈', '모래뱀', '미라', '사막도적'],
        bosses: [
            { name: '유물 감시병', hp: 780, att: 48, def: 18, exp: 280, gold: 200, level: 24, items: ['화려한 보물상자'] },
            { name: '유물 수호자 안푸', hp: 980, att: 60, def: 22, exp: 350, gold: 240, level: 26, items: ['화려한 보물상자', '룬석'], final: true }
        ],
        dropItems: ['화려한 보물상자', '룬석', '고대 유물조각']
    },
    '모래바람 금고': {
        minLevel: 21,
        maxLevel: 30,
        zone: '불타는 사막',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['사막전갈', '사막도적', '모래골렘', '모래뱀'],
        bosses: [
            { name: '모래바람 추적자', hp: 820, att: 52, def: 19, exp: 300, gold: 210, level: 25, items: ['화려한 보물상자'] },
            { name: '모래바람 금고지기', hp: 1050, att: 64, def: 24, exp: 370, gold: 250, level: 27, items: ['화려한 보물상자', '룬석'], final: true }
        ],
        dropItems: ['화려한 보물상자', '룬석', '사막향신료']
    },
    '오아시스 방공호': {
        minLevel: 21,
        maxLevel: 30,
        zone: '불타는 사막',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['오아시스님프', '사막도적', '미라', '모래뱀'],
        bosses: [
            { name: '오아시스 파수꾼', hp: 860, att: 54, def: 20, exp: 310, gold: 220, level: 25, items: ['화려한 보물상자'] },
            { name: '오아시스 수호자', hp: 1100, att: 66, def: 25, exp: 380, gold: 260, level: 28, items: ['화려한 보물상자', '룬석'], final: true }
        ],
        dropItems: ['화려한 보물상자', '룬석', '태양석파편']
    },
    '빙결 창고': {
        minLevel: 31,
        maxLevel: 40,
        zone: '얼어붙은 북방',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['눈늑대', '서리거인', '얼음정령', '설인'],
        bosses: [
            { name: '빙결 감시자', hp: 1300, att: 72, def: 26, exp: 460, gold: 330, level: 34, items: ['전설의 보물상자'] },
            { name: '빙결 수호자', hp: 1650, att: 88, def: 30, exp: 560, gold: 380, level: 36, items: ['전설의 보물상자', '룬석'], final: true }
        ],
        dropItems: ['전설의 보물상자', '룬석', '영원의 얼음']
    },
    '서리 창고': {
        minLevel: 31,
        maxLevel: 40,
        zone: '얼어붙은 북방',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['서리거인', '얼음정령', '설인', '눈표범'],
        bosses: [
            { name: '서리 파수꾼', hp: 1350, att: 74, def: 27, exp: 470, gold: 340, level: 34, items: ['전설의 보물상자'] },
            { name: '서리 군장', hp: 1750, att: 92, def: 32, exp: 600, gold: 400, level: 37, items: ['전설의 보물상자', '룬석'], final: true }
        ],
        dropItems: ['전설의 보물상자', '룬석', '빙설결정']
    },
    '빙하 감시소': {
        minLevel: 31,
        maxLevel: 40,
        zone: '얼어붙은 북방',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['빙하골렘', '프로스트위치', '냉기마법사', '설인'],
        bosses: [
            { name: '빙하 감시자', hp: 1400, att: 76, def: 28, exp: 480, gold: 350, level: 35, items: ['전설의 보물상자'] },
            { name: '빙하 관리자', hp: 1800, att: 96, def: 33, exp: 620, gold: 420, level: 38, items: ['전설의 보물상자', '룬석'], final: true }
        ],
        dropItems: ['전설의 보물상자', '룬석', '서리꽃']
    },
    '안개의 창고': {
        minLevel: 41,
        maxLevel: 50,
        zone: '황혼의 습지',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['습지좀비', '독늪괴물', '안개유령', '습지트롤'],
        bosses: [
            { name: '안개 파수꾼', hp: 2000, att: 100, def: 37, exp: 700, gold: 480, level: 44, items: ['전설의 보물상자'] },
            { name: '안개 감시자 말디온', hp: 2350, att: 118, def: 42, exp: 820, gold: 560, level: 46, items: ['전설의 보물상자', '룬석'], final: true }
        ],
        dropItems: ['전설의 보물상자', '룬석', '유령의 정수']
    },
    '부패의 제단': {
        minLevel: 41,
        maxLevel: 50,
        zone: '황혼의 습지',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['부패골렘', '습지좀비', '안개유령', '독늪괴물'],
        bosses: [
            { name: '부패의 집행자', hp: 2050, att: 104, def: 38, exp: 720, gold: 490, level: 44, items: ['전설의 보물상자'] },
            { name: '부패의 대사제', hp: 2450, att: 122, def: 44, exp: 850, gold: 580, level: 47, items: ['전설의 보물상자', '룬석'], final: true }
        ],
        dropItems: ['전설의 보물상자', '룬석', '늪지이끼덩이']
    },
    '늪지 관측소': {
        minLevel: 41,
        maxLevel: 50,
        zone: '황혼의 습지',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['습지트롤', '독안개정령', '거대두꺼비', '안개유령'],
        bosses: [
            { name: '관측소 수문장', hp: 2100, att: 106, def: 39, exp: 730, gold: 500, level: 45, items: ['전설의 보물상자'] },
            { name: '관측소 관리자', hp: 2550, att: 126, def: 46, exp: 880, gold: 600, level: 48, items: ['전설의 보물상자', '룬석'], final: true }
        ],
        dropItems: ['전설의 보물상자', '룬석', '유령의 정수']
    },
    '천공의 공방': {
        minLevel: 51,
        maxLevel: 60,
        zone: '천공의 산맥',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['폭풍정령', '번개골렘', '폭풍독수리', '전격야수'],
        bosses: [
            { name: '공방 감독관', hp: 2950, att: 130, def: 52, exp: 920, gold: 700, level: 54, items: ['찬란한 보물상자'] },
            { name: '폭풍의 수호기계', hp: 3350, att: 148, def: 58, exp: 1080, gold: 780, level: 56, items: ['찬란한 보물상자', '룬석'], final: true }
        ],
        dropItems: ['찬란한 보물상자', '룬석', '폭풍석']
    },
    '구름 작업장': {
        minLevel: 51,
        maxLevel: 60,
        zone: '천공의 산맥',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['폭풍독수리', '번개골렘', '폭풍정령', '전격야수'],
        bosses: [
            { name: '구름 작업장 반장', hp: 3000, att: 132, def: 53, exp: 940, gold: 710, level: 54, items: ['찬란한 보물상자'] },
            { name: '구름 작업장 관리관', hp: 3450, att: 150, def: 60, exp: 1100, gold: 800, level: 57, items: ['찬란한 보물상자', '룬석'], final: true }
        ],
        dropItems: ['찬란한 보물상자', '룬석', '천둥돌']
    },
    '번개의 저장소': {
        minLevel: 51,
        maxLevel: 60,
        zone: '천공의 산맥',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['번개골렘', '폭풍정령', '전격야수', '폭풍독수리'],
        bosses: [
            { name: '번개의 감시자', hp: 3050, att: 134, def: 54, exp: 950, gold: 720, level: 55, items: ['찬란한 보물상자'] },
            { name: '번개의 저장소 관리자', hp: 3500, att: 152, def: 61, exp: 1120, gold: 820, level: 58, items: ['찬란한 보물상자', '룬석'], final: true }
        ],
        dropItems: ['찬란한 보물상자', '룬석', '폭풍결정']
    },
    '고대의 서고': {
        minLevel: 61,
        maxLevel: 70,
        zone: '고대의 폐허',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['데스나이트', '리치', '그림자전사', '레이스'],
        bosses: [
            { name: '서고 파수꾼', hp: 4900, att: 178, def: 75, exp: 1400, gold: 1000, level: 64, items: ['찬란한 보물상자'] },
            { name: '봉인된 사서', hp: 5400, att: 200, def: 85, exp: 1600, gold: 1200, level: 66, items: ['찬란한 보물상자', '룬각인서'], final: true }
        ],
        dropItems: ['찬란한 보물상자', '룬각인서', '고대 마법석']
    },
    '잊힌 금고': {
        minLevel: 61,
        maxLevel: 70,
        zone: '고대의 폐허',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['데스나이트', '그림자전사', '레이스', '리치'],
        bosses: [
            { name: '금고 경비장', hp: 5000, att: 182, def: 76, exp: 1420, gold: 1020, level: 64, items: ['찬란한 보물상자'] },
            { name: '금고의 파수자', hp: 5500, att: 204, def: 86, exp: 1620, gold: 1220, level: 67, items: ['찬란한 보물상자', '룬각인서'], final: true }
        ],
        dropItems: ['찬란한 보물상자', '룬각인서', '차원의 파편']
    },
    '비전 격납고': {
        minLevel: 61,
        maxLevel: 70,
        zone: '고대의 폐허',
        type: 'solo',
        weeklyLockout: false,
        monsters: ['리치', '레이스', '그림자전사', '데스나이트'],
        bosses: [
            { name: '비전 감시자', hp: 5050, att: 184, def: 77, exp: 1440, gold: 1040, level: 65, items: ['찬란한 보물상자'] },
            { name: '비전 격납관', hp: 5600, att: 208, def: 88, exp: 1650, gold: 1240, level: 68, items: ['찬란한 보물상자', '룬각인서'], final: true }
        ],
        dropItems: ['찬란한 보물상자', '룬각인서', '고대 마법석']
    },
    '룬의 심연': {
        minLevel: 50,
        zone: '심연의 균열',
        type: 'endgame',
        keyItem: '심연의 열쇠',
        monsters: ['데스나이트', '리치', '그림자전사'],
        bosses: [{ name: '심연의 감시자', hp: 2800, att: 160, def: 60, exp: 900, gold: 700, level: 60, items: ['룬각인서', '룬석'] }],
        dropItems: ['룬석', '맹공 룬', '수호 룬', '생명 룬', '치명 룬', '회복 룬', '풍요 룬', '어비스의 숨결', '드래곤의 심장']
    }
};

var SeasonDungeonData = {
    name: '시즌 랭크 던전',
    minLevel: 30,
    zone: '황혼의 습지',
    type: 'season',
    keyItem: '시즌 던전 입장권',
    monsters: ['습지좀비', '안개유령', '저주받은사제', '부패골렘'],
    bosses: [{ name: '시즌의 심판자', hp: 1800, att: 120, def: 45, exp: 600, gold: 450, level: 45, items: ['룬각인서'] }],
    dropItems: ['룬각인서', '룬석']
};

var SoloDungeonRewardTable = [
    { label: 'Lv.1~10', min: 1, max: 10, rewards: ['낡은 보물상자', '강화석', '천조각'] },
    { label: 'Lv.11~20', min: 11, max: 20, rewards: ['화려한 보물상자', '강화석', '가죽 조각'] },
    { label: 'Lv.21~30', min: 21, max: 30, rewards: ['화려한 보물상자', '룬석', '태양석파편'] },
    { label: 'Lv.31~40', min: 31, max: 40, rewards: ['전설의 보물상자', '룬석', '빙설결정'] },
    { label: 'Lv.41~50', min: 41, max: 50, rewards: ['전설의 보물상자', '룬석', '유령의 정수'] },
    { label: 'Lv.51~60', min: 51, max: 60, rewards: ['찬란한 보물상자', '룬석', '폭풍결정'] },
    { label: 'Lv.61~70', min: 61, max: 70, rewards: ['찬란한 보물상자', '룬각인서', '고대 마법석'] }
];

var BattlegroundMaps = [
    { name: '고대 전장', rewardMult: 1.0, desc: '균형 잡힌 전장' },
    { name: '서리 협곡', rewardMult: 1.1, desc: '혹한의 땅, 보상 +10%' },
    { name: '불타는 사원', rewardMult: 1.2, desc: '위험한 지역, 보상 +20%' }
];

var BattlegroundEvents = [
    { name: '깃발 쟁탈전', bonus: { att: 1.05 }, desc: '공격력 +5%' },
    { name: '치유의 비', bonus: { hp: 50 }, desc: '최대 HP +50' },
    { name: '불길의 축복', bonus: { reward: 1.15 }, desc: '보상 +15%' }
];

var BattlegroundRewards = [
    { item: '전장 토큰', chance: 0.5, qty: 1 },
    { item: '낡은 보물상자', chance: 0.3, qty: 1 },
    { item: '화려한 보물상자', chance: 0.1, qty: 1 },
    { item: '룬석', chance: 0.05, qty: 1 }
];

var ExtraRecipes = {
    combination: {
        '강철 방패': { cost: 300, materials: [{ name: '철조각', count: 6 }], result: { name: '강철 방패', count: 1 } },
        '치유의 링': { cost: 500, materials: [{ name: '보석', count: 1 }, { name: '약초', count: 5 }], result: { name: '치유의 링', count: 1 } },
        '전사의 벨트': { cost: 400, materials: [{ name: '가죽 조각', count: 6 }, { name: '철조각', count: 2 }], result: { name: '전사의 벨트', count: 1 } },
        '미스릴 검': { cost: 1500, materials: [{ name: '미스릴 광석', count: 4 }], result: { name: '미스릴검', count: 1 }, levelReq: 10 },
        '룬 방패': { cost: 2500, materials: [{ name: '룬석', count: 2 }, { name: '강철조각', count: 4 }], result: { name: '룬 방패', count: 1 }, levelReq: 15 },
        '사막 비단망토': { cost: 1200, materials: [{ name: '사막 장인의 설계도', count: 1 }, { name: '사막향신료', count: 3 }, { name: '태양석파편', count: 2 }, { name: '천조각', count: 6 }], result: { name: '사막 비단망토', count: 1 }, levelReq: 6 },
        '빙설 수호망토': { cost: 2000, materials: [{ name: '북방 제련 설계도', count: 1 }, { name: '빙설결정', count: 3 }, { name: '서리꽃', count: 2 }, { name: '고급천', count: 4 }], result: { name: '빙설 수호망토', count: 1 }, levelReq: 12 },
        '늪지 안개망토': { cost: 3000, materials: [{ name: '습지 비전 설계도', count: 1 }, { name: '늪지이끼덩이', count: 4 }, { name: '유령의 정수', count: 2 }, { name: '고급천', count: 4 }], result: { name: '늪지 안개망토', count: 1 }, levelReq: 18 },
        '천공 비행망토': { cost: 4500, materials: [{ name: '천공 공학 설계도', count: 1 }, { name: '폭풍결정', count: 3 }, { name: '천둥돌', count: 2 }, { name: '마력의천', count: 2 }], result: { name: '천공 비행망토', count: 1 }, levelReq: 24 },
        '고대 서고망토': { cost: 6500, materials: [{ name: '폐허 고대 설계도', count: 1 }, { name: '고대 마법석', count: 2 }, { name: '차원의 파편', count: 2 }, { name: '마력의천', count: 3 }], result: { name: '고대 서고망토', count: 1 }, levelReq: 30 }
    },
    cooking: {
        '연어스테이크': { cost: 150, fish: { name: '연어', count: 1 }, result: { name: '연어스테이크', count: 1 } },
        '복어회': { cost: 300, fish: { name: '복어', count: 1 }, result: { name: '복어회', count: 1 } },
        '참치회': { cost: 400, fish: { name: '참치', count: 1 }, result: { name: '참치회', count: 1 } },
        '용왕의 만찬': { cost: 3000, fish: { name: '해룡', count: 1 }, result: { name: '용왕의 만찬', count: 1 }, levelReq: 20 }
    }
};

var RareMaterials = ['룬석', '심연의 파편', '용의 비늘', '미스릴 광석'];

var RaidSets = {
    '어비스 드래곤 세트': { items: ['어비스의 숨결', '드래곤의 심장'], bonus: { attMul: 1.1, defMul: 1.1 } },
    '성기사의 맹세': { items: ['성기사의 갑옷', '빛의 성검'], bonus: { hpBonus: 100 } }
};

var RaidMaterials = ['강화 코어', '심연의 정수', '용왕의 비늘'];

var GuildRaidRewards = [
    { item: '강화 코어', chance: 0.4, qty: 1 },
    { item: '심연의 정수', chance: 0.25, qty: 1 },
    { item: '용왕의 비늘', chance: 0.2, qty: 1 },
    { item: '전설의 보물상자', chance: 0.05, qty: 1 }
];

var GuildShopItems = [
    { item: '길드 망토', cost: 800, level: 1 },
    { item: '길드 표식', cost: 1200, level: 2 },
    { item: '길드의 검', cost: 3000, level: 3 }
];

// -------------------------------------------
// 2. 파일 I/O
// -------------------------------------------
function readText(path) {
    try {
        var fis = new java.io.FileInputStream(path);
        var isr = new java.io.InputStreamReader(fis, "UTF-8");
        var br = new java.io.BufferedReader(isr);
        var line, out = "";
        while ((line = br.readLine()) != null) out += line + "\n";
        br.close();
        return out;
    } catch (e) {
        return null;
    }
}

function fileExists(path) {
    try {
        var f = new java.io.File(path);
        return f.exists();
    } catch (e) {
        return false;
    }
}

function writeText(path, text) {
    var file = new java.io.File(path);
    var parent = file.getParentFile();
    if (parent && !parent.exists()) parent.mkdirs();
    var fos = new java.io.FileOutputStream(file);
    var osw = new java.io.OutputStreamWriter(fos, "UTF-8");
    osw.write(text);
    osw.close();
}

function loadJson(path, fallback) {
    var text = readText(path);
    if (!text) return fallback;
    try { return JSON.parse(text); } catch (e) { return fallback; }
}

function saveJson(path, obj) {
    writeText(path, JSON.stringify(obj));
}

// -------------------------------------------
// 3. gameData 로드
// -------------------------------------------
var GameData = {};

function loadGameData() {
    var items = {};
    var sources = [typeof ItemDatabase !== 'undefined' ? ItemDatabase : {}, typeof ConsumableDatabase !== 'undefined' ? ConsumableDatabase : {}, typeof CollectibleDatabase !== 'undefined' ? CollectibleDatabase : {}];
    for (var s = 0; s < sources.length; s++) {
        for (var key in sources[s]) items[key] = sources[s][key];
    }

    GameData = {
        WorldLore: typeof WorldLore !== 'undefined' ? WorldLore : {},
        ZoneData: typeof ZoneData !== 'undefined' ? ZoneData : {},
        DungeonData: typeof DungeonData !== 'undefined' ? DungeonData : {},
        MonsterDatabase: typeof MonsterDatabase !== 'undefined' ? MonsterDatabase : {},
        ItemDatabase: items,
        QuestDatabase: typeof QuestDatabase !== 'undefined' ? QuestDatabase : {},
        JobDatabase: typeof JobDatabase !== 'undefined' ? JobDatabase : {},
        SkillDatabase: typeof SkillDatabase !== 'undefined' ? SkillDatabase : {},
        CraftingRecipes: typeof CraftingRecipes !== 'undefined' ? CraftingRecipes : {},
        NPCDatabase: typeof NPCDatabase !== 'undefined' ? NPCDatabase : {},
        ShopDatabase: typeof ShopDatabase !== 'undefined' ? ShopDatabase : {},
        PetDatabase: typeof PetDatabase !== 'undefined' ? PetDatabase : {},
        MountDatabase: typeof MountDatabase !== 'undefined' ? MountDatabase : {},
        AchievementDatabase: typeof AchievementDatabase !== 'undefined' ? AchievementDatabase : {},
        TitleDatabase: typeof TitleDatabase !== 'undefined' ? TitleDatabase : {},
        FishDatabase: typeof FishDatabase !== 'undefined' ? FishDatabase : {},
        FishRarityWeights: typeof FishRarityWeights !== 'undefined' ? FishRarityWeights : null,
        FishHelper: typeof FishHelper !== 'undefined' ? FishHelper : null,
        PetSystemData: typeof PetSystemData !== 'undefined' ? PetSystemData : null,
        QuestSystemData: typeof QuestSystemData !== 'undefined' ? QuestSystemData : null,
        ClassSystemData: typeof ClassSystemData !== 'undefined' ? ClassSystemData : null,
        ItemSetData: typeof ItemSetData !== 'undefined' ? ItemSetData : null,
        CraftingRecipeData: typeof CraftingRecipeData !== 'undefined' ? CraftingRecipeData : null,
        TreasureBoxData: typeof TreasureBoxData !== 'undefined' ? TreasureBoxData : null,
        DungeonSystemData: typeof DungeonSystemData !== 'undefined' ? DungeonSystemData : null
    };
}

loadGameData();

// -------------------------------------------
// 4. 상태 저장
// -------------------------------------------
var dataFilePath = Config.DATA_FOLDER_PATH + "/" + Config.SAVE_FILE;
var state = loadJson(dataFilePath, {
    players: {},
    playerSlots: {},
    battles: {},
    lastFishing: {},
    lastRest: {},
    daily: {},
    petExplore: {},
    repWork: {},
    parties: {},
    partyInvites: {},
    partyOf: {},
    duelRequests: {},
    bgQueue: [],
    pvpRating: {},
    seasonRewards: {},
    bgEvent: { name: '', bonus: {}, date: '' },
    logs: { dungeon: {}, raid: {} },
    weeklyLockouts: {},
    seasonDungeonRank: {},
    seasonDungeonRewards: {},
    seasonDungeon: {},
    tarotDaily: {},
    market: { listings: [] },
    guilds: {},
    guildInvites: {},
    worldEvent: {},
    worldBossDaily: {},
    soloWeekly: {},
    shopBuyThrottle: {}
});

if (!state.lastRest) state.lastRest = {};
if (!state.daily) state.daily = {};
if (!state.petExplore) state.petExplore = {};
if (!state.repWork) state.repWork = {};
if (!state.parties) state.parties = {};
if (!state.partyInvites) state.partyInvites = {};
if (!state.partyOf) state.partyOf = {};
if (!state.duelRequests) state.duelRequests = {};
if (!state.bgQueue) state.bgQueue = [];
if (!state.pvpRating) state.pvpRating = {};
if (!state.seasonRewards) state.seasonRewards = {};
if (!state.bgEvent) state.bgEvent = { name: '', bonus: {}, date: '' };
if (!state.logs) state.logs = { dungeon: {}, raid: {} };
if (!state.logs.dungeon) state.logs.dungeon = {};
if (!state.logs.raid) state.logs.raid = {};
if (!state.weeklyLockouts) state.weeklyLockouts = {};
if (!state.seasonDungeonRank) state.seasonDungeonRank = {};
if (!state.seasonDungeonRewards) state.seasonDungeonRewards = {};
if (!state.seasonDungeon) state.seasonDungeon = {};
if (!state.tarotDaily) state.tarotDaily = {};
if (!state.market) state.market = { listings: [] };
if (!state.market.listings) state.market.listings = [];
if (!state.guilds) state.guilds = {};
if (!state.guildInvites) state.guildInvites = {};
if (!state.worldEvent) state.worldEvent = {};
if (!state.worldBossDaily) state.worldBossDaily = {};
if (!state.playerSlots) state.playerSlots = {};
if (!state.soloWeekly) state.soloWeekly = {};
if (!state.shopBuyThrottle) state.shopBuyThrottle = {};

// 기존 단일 캐릭터 -> 슬롯 마이그레이션
for (var legacyName in state.players) {
    if (!state.playerSlots[legacyName]) {
        state.playerSlots[legacyName] = { selected: '1', slots: { '1': state.players[legacyName] } };
    } else if (!state.playerSlots[legacyName].slots || !state.playerSlots[legacyName].slots['1']) {
        if (!state.playerSlots[legacyName].slots) state.playerSlots[legacyName].slots = {};
        state.playerSlots[legacyName].slots['1'] = state.players[legacyName];
        if (!state.playerSlots[legacyName].selected) state.playerSlots[legacyName].selected = '1';
    }
}

function saveState() {
    saveJson(dataFilePath, state);
}

// -------------------------------------------
// 5. 유틸
// -------------------------------------------
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function mergeMaps(a, b) {
    var out = {};
    for (var k in a) out[k] = a[k];
    for (var k2 in b) out[k2] = b[k2];
    return out;
}

function calcScaledReward(base, level, bonus, isGold, player) {
    var scale = 1 + (level * (isGold ? Config.LEVEL_GOLD_SCALE : Config.LEVEL_EXP_SCALE));
    var tarot = player ? getTarotBonus(player) : null;
    var tarotBonus = tarot ? (isGold ? (tarot.goldBonus || 0) : (tarot.expBonus || 0)) : 0;
    return Math.floor(base * (bonus || 1) * scale * (1 + tarotBonus));
}

function getLevelDiffScale(playerLevel, monsterLevel) {
    if (!monsterLevel || !playerLevel) return 1;
    var diff = playerLevel - monsterLevel;
    if (diff >= 10) return 0.3;
    if (diff >= 5) return 0.6;
    if (diff <= -10) return 1.6;
    if (diff <= -5) return 1.3;
    return 1.0;
}

function applyRewardLevelDiff(base, playerLevel, monsterLevel) {
    var scale = getLevelDiffScale(playerLevel, monsterLevel);
    return Math.floor(base * scale);
}

function getDropRate(battle, player) {
    var rate = Config.DROP_RATE;
    if (battle && battle.bonus) rate *= Math.min(2.0, battle.bonus);
    var monsterLevel = battle && battle.monster ? battle.monster.level : 0;
    var playerLevel = player ? player.level : (battle ? battle.playerLevel : 0);
    rate *= getLevelDiffScale(playerLevel, monsterLevel);
    if (player) {
        var acc = getAccessoryEffects(player);
        var rune = getRuneEffects(player);
        var tarot = getTarotBonus(player);
        rate *= (1 + (acc.dropRate || 0) + (rune.dropRate || 0) + (tarot.dropRate || 0));
    }
    if (rate > 0.8) rate = 0.8;
    if (rate < 0.05) rate = 0.05;
    return rate;
}

function getDateKey() {
    var d = new Date();
    var yyyy = d.getFullYear();
    var mm = (d.getMonth() + 1); if (mm < 10) mm = "0" + mm;
    var dd = d.getDate(); if (dd < 10) dd = "0" + dd;
    return yyyy + "-" + mm + "-" + dd;
}

function getWeekKey() {
    var d = new Date();
    var onejan = new Date(d.getFullYear(), 0, 1);
    var millis = d - onejan;
    var week = Math.ceil((((millis / 86400000) + onejan.getDay() + 1) / 7));
    return d.getFullYear() + "-W" + week;
}

function getSeasonKey() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1);
}

function normalizeTarotFocusType(input) {
    if (!input) return null;
    var v = String(input).replace(/\s+/g, '').toLowerCase();
    if (v === '공격' || v === '공' || v === '딜' || v === '딜링' || v === 'att' || v === 'attack') return 'att';
    if (v === '방어' || v === '방' || v === '탱' || v === '탱킹' || v === 'def' || v === 'defense') return 'def';
    if (v === '체력' || v === 'hp') return 'hp';
    if (v === '드랍' || v === '드롭' || v === '드랍률' || v === '드롭률' || v === 'drop') return 'drop';
    if (v === '경험' || v === '경험치' || v === 'exp' || v === 'experience') return 'exp';
    if (v === '골드' || v === '돈' || v === '머니' || v === 'gold') return 'gold';
    if (v === '치유' || v === '회복' || v === '힐' || v === 'heal') return 'heal';
    return null;
}

function getTarotFocusInfo(type) {
    return TarotFocusTable[type] || null;
}

function applyTarotFocusBonus(base, focusType) {
    if (!base || !focusType) return base;
    if (focusType === 'att') base.attMul *= 1.04;
    else if (focusType === 'def') base.defMul *= 1.04;
    else if (focusType === 'hp') base.hpBonus += 70;
    else if (focusType === 'drop') base.dropRate += 0.03;
    else if (focusType === 'exp') base.expBonus += 0.03;
    else if (focusType === 'gold') base.goldBonus += 0.03;
    else if (focusType === 'heal') base.healPct += 0.03;

    base.dropRate = Math.min(0.2, base.dropRate);
    base.expBonus = Math.min(0.3, base.expBonus);
    base.goldBonus = Math.min(0.3, base.goldBonus);
    base.healPct = Math.min(0.2, base.healPct);
    return base;
}

function formatTarotFocus(entry) {
    if (!entry || !entry.focus || !entry.focus.type) return '';
    var info = getTarotFocusInfo(entry.focus.type);
    if (!info) return '집중: ' + entry.focus.type;
    return '집중: ' + info.label + ' (' + info.text + ')';
}

function getTarotState(p) {
    if (!state.tarotDaily) state.tarotDaily = {};
    var key = p.name;
    var entry = state.tarotDaily[key];
    if (!entry || entry.date !== getDateKey()) return null;
    return entry;
}

function drawTarotCard(p) {
    if (!state.tarotDaily) state.tarotDaily = {};
    var key = p.name;
    var today = getDateKey();
    var entry = state.tarotDaily[key];
    if (entry && entry.date === today) return entry;
    var pool = TarotCardPool.slice();
    var cards = [];
    for (var i = 0; i < 3 && pool.length > 0; i++) {
        var idx = rand(0, pool.length - 1);
        cards.push(pool[idx]);
        pool.splice(idx, 1);
    }
    entry = { date: today, cards: cards };
    state.tarotDaily[key] = entry;
    return entry;
}

function getTarotBonus(p) {
    var base = { attMul: 1, defMul: 1, hpBonus: 0, dropRate: 0, expBonus: 0, goldBonus: 0, healPct: 0 };
    if (!p) return base;
    var entry = getTarotState(p);
    if (!entry || !entry.cards || !entry.cards.length) return base;
    var bonus = computeTarotBonusFromCards(entry.cards);
    if (entry.focus && entry.focus.type) bonus = applyTarotFocusBonus(bonus, entry.focus.type);
    return bonus;
}

function computeTarotBonusFromCards(cards) {
    var base = { attMul: 1, defMul: 1, hpBonus: 0, dropRate: 0, expBonus: 0, goldBonus: 0, healPct: 0 };
    if (!cards || !cards.length) return base;
    for (var i = 0; i < cards.length; i++) {
        var eff = cards[i].effects || {};
        if (eff.attMul) base.attMul *= eff.attMul;
        if (eff.defMul) base.defMul *= eff.defMul;
        if (eff.hpBonus) base.hpBonus += eff.hpBonus;
        if (eff.dropRate) base.dropRate += eff.dropRate;
        if (eff.expBonus) base.expBonus += eff.expBonus;
        if (eff.goldBonus) base.goldBonus += eff.goldBonus;
        if (eff.healPct) base.healPct += eff.healPct;
    }
    base.dropRate = Math.min(0.2, base.dropRate);
    base.expBonus = Math.min(0.3, base.expBonus);
    base.goldBonus = Math.min(0.3, base.goldBonus);
    base.healPct = Math.min(0.2, base.healPct);
    return base;
}

function formatTarotEffects(eff) {
    if (!eff) return '없음';
    var parts = [];
    if (eff.attMul) parts.push('공격 x' + eff.attMul.toFixed(2));
    if (eff.defMul) parts.push('방어 x' + eff.defMul.toFixed(2));
    if (eff.hpBonus) parts.push('HP +' + eff.hpBonus);
    if (eff.dropRate) parts.push('드랍 +' + Math.floor(eff.dropRate * 100) + '%');
    if (eff.expBonus) parts.push('EXP +' + Math.floor(eff.expBonus * 100) + '%');
    if (eff.goldBonus) parts.push('골드 +' + Math.floor(eff.goldBonus * 100) + '%');
    if (eff.healPct) parts.push('치유 +' + Math.floor(eff.healPct * 100) + '%');
    return parts.length ? parts.join(', ') : '없음';
}

function formatTarotSpread(entry) {
    if (!entry || !entry.cards || !entry.cards.length) return '카드 없음';
    var labels = ['과거', '현재', '미래'];
    var lines = [];
    for (var i = 0; i < entry.cards.length; i++) {
        var card = entry.cards[i];
        lines.push((labels[i] || ('카드 ' + (i + 1))) + ': ' + card.name + ' - ' + card.desc);
    }
    var total = computeTarotBonusFromCards(entry.cards);
    if (entry.focus && entry.focus.type) total = applyTarotFocusBonus(total, entry.focus.type);
    var out = lines.join('\n') + '\n보너스: ' + formatTarotEffects(total);
    var focusLine = formatTarotFocus(entry);
    if (focusLine) out += '\n' + focusLine;
    return out;
}

function getSlotState(sender) {
    if (!state.playerSlots[sender]) state.playerSlots[sender] = { selected: '', slots: {} };
    if (!state.playerSlots[sender].slots) state.playerSlots[sender].slots = {};
    return state.playerSlots[sender];
}

function normalizeSlots(sender) {
    var slotState = getSlotState(sender);
    for (var i = 1; i <= Config.CHAR_SLOTS; i++) {
        var key = String(i);
        if (slotState.slots[key] === undefined) slotState.slots[key] = null;
    }
    if (!slotState.selected && state.players[sender]) {
        slotState.slots['1'] = state.players[sender];
        slotState.selected = '1';
    }
    if (slotState.selected && slotState.slots[slotState.selected]) {
        state.players[sender] = slotState.slots[slotState.selected];
    }
}

function getSelectedPlayer(sender) {
    normalizeSlots(sender);
    var slotState = getSlotState(sender);
    var slotId = slotState.selected;
    return slotId ? (slotState.slots[slotId] || null) : null;
}

function ensurePlayer(sender) {
    var p = getSelectedPlayer(sender);
    if (p) normalizePlayer(p);
    return p;
}

function buildNewPlayer(sender, jobName) {
    var job = getJob(jobName);
    return {
        name: sender,
        job: job.name || jobName,
        level: 1,
        exp: 0,
        maxExp: 100,
        gold: 100,
        hp: job.baseStats.hp,
        mp: job.baseStats.mp,
        inventory: [{ name: '포션', count: 3 }, { name: '낡은단검', count: 1 }],
        equipment: {
            weapon: { name: null },
            armor: { name: null },
            shield: { name: null },
            helmet: { name: null },
            gloves: { name: null },
            boots: { name: null },
            ring1: { name: null },
            ring2: { name: null },
            necklace: { name: null },
            earring: { name: null },
            belt: { name: null },
            cloak: { name: null }
        },
        quests: {},
        fish: [],
        fishBag: [],
        fishingLevel: 1,
        fishingExp: 0,
        maxFishingExp: 100,
        pet: null
    };
}

function getJob(jobName) {
    return GameData.JobDatabase[jobName] || GameData.JobDatabase['초보자'] || null;
}

function normalizePlayer(p) {
    if (!p.equipment) p.equipment = { weapon: { name: null }, armor: { name: null }, shield: { name: null }, helmet: { name: null }, gloves: { name: null }, boots: { name: null }, ring1: { name: null }, ring2: { name: null }, necklace: { name: null }, earring: { name: null }, belt: { name: null }, cloak: { name: null } };
    if (!p.equipment.weapon) p.equipment.weapon = { name: null };
    if (!p.equipment.armor) p.equipment.armor = { name: null };
    if (!p.equipment.shield) p.equipment.shield = { name: null };
    if (!p.equipment.helmet) p.equipment.helmet = { name: null };
    if (!p.equipment.gloves) p.equipment.gloves = { name: null };
    if (!p.equipment.boots) p.equipment.boots = { name: null };
    if (!p.equipment.ring1) p.equipment.ring1 = { name: null };
    if (!p.equipment.ring2) p.equipment.ring2 = { name: null };
    if (!p.equipment.necklace) p.equipment.necklace = { name: null };
    if (!p.equipment.earring) p.equipment.earring = { name: null };
    if (!p.equipment.belt) p.equipment.belt = { name: null };
    if (!p.equipment.cloak) p.equipment.cloak = { name: null };
    if (p.equipment.weapon.enhance === undefined) p.equipment.weapon.enhance = 0;
    if (p.equipment.armor.enhance === undefined) p.equipment.armor.enhance = 0;
    if (p.equipment.shield.enhance === undefined) p.equipment.shield.enhance = 0;
    if (p.equipment.helmet.enhance === undefined) p.equipment.helmet.enhance = 0;
    if (p.equipment.gloves.enhance === undefined) p.equipment.gloves.enhance = 0;
    if (p.equipment.boots.enhance === undefined) p.equipment.boots.enhance = 0;
    if (p.equipment.ring1.enhance === undefined) p.equipment.ring1.enhance = 0;
    if (p.equipment.ring2.enhance === undefined) p.equipment.ring2.enhance = 0;
    if (p.equipment.necklace.enhance === undefined) p.equipment.necklace.enhance = 0;
    if (p.equipment.earring.enhance === undefined) p.equipment.earring.enhance = 0;
    if (p.equipment.belt.enhance === undefined) p.equipment.belt.enhance = 0;
    if (p.equipment.cloak.enhance === undefined) p.equipment.cloak.enhance = 0;
    if (p.equipment.weapon.gem === undefined) p.equipment.weapon.gem = "";
    if (p.equipment.weapon.rune === undefined) p.equipment.weapon.rune = "";
    if (p.equipment.armor.rune === undefined) p.equipment.armor.rune = "";
    if (p.equipment.shield.rune === undefined) p.equipment.shield.rune = "";
    if (p.equipment.helmet.rune === undefined) p.equipment.helmet.rune = "";
    if (p.equipment.gloves.rune === undefined) p.equipment.gloves.rune = "";
    if (p.equipment.boots.rune === undefined) p.equipment.boots.rune = "";
    if (p.equipment.ring1.rune === undefined) p.equipment.ring1.rune = "";
    if (p.equipment.ring2.rune === undefined) p.equipment.ring2.rune = "";
    if (p.equipment.necklace.rune === undefined) p.equipment.necklace.rune = "";
    if (p.equipment.earring.rune === undefined) p.equipment.earring.rune = "";
    if (p.equipment.belt.rune === undefined) p.equipment.belt.rune = "";
    if (p.equipment.cloak.rune === undefined) p.equipment.cloak.rune = "";
    if (p.equipment.weapon.name) ensureSlotDurability(p.equipment.weapon, p.equipment.weapon.name, 'weapon');
    if (p.equipment.armor.name) ensureSlotDurability(p.equipment.armor, p.equipment.armor.name, 'armor');
    if (p.equipment.shield.name) ensureSlotDurability(p.equipment.shield, p.equipment.shield.name, 'shield');
    if (p.equipment.helmet.name) ensureSlotDurability(p.equipment.helmet, p.equipment.helmet.name, 'helmet');
    if (p.equipment.gloves.name) ensureSlotDurability(p.equipment.gloves, p.equipment.gloves.name, 'gloves');
    if (p.equipment.boots.name) ensureSlotDurability(p.equipment.boots, p.equipment.boots.name, 'boots');
    if (!p.inventory) p.inventory = [];
    if (!p.quests) p.quests = {};
    if (!p.fish) p.fish = [];
    if (!p.fishBag) p.fishBag = [];
    if (!p.fishingLevel) p.fishingLevel = 1;
    if (!p.fishingExp) p.fishingExp = 0;
    if (!p.maxFishingExp) p.maxFishingExp = 100;
    if (!p.pet) p.pet = null;
    if (p.pet && !p.pet.level) p.pet.level = 1;
    if (p.pet && !p.pet.exp) p.pet.exp = 0;
    if (p.pet && p.pet.nickname === undefined) p.pet.nickname = "";
    if (!p.petCollection) p.petCollection = [];
    if (!p.mounts) p.mounts = [];
    if (!p.activeMount) p.activeMount = "";
    if (!p.rep) p.rep = {};
    if (!p.titles) p.titles = [];
    if (!p.activeTitle) p.activeTitle = "";
    if (!p.achievements) p.achievements = [];
    if (!p.stats) p.stats = { kills: 0, pvpWins: 0, dungeons: 0, fishing: 0 };
    if (p.talentPoints === undefined) p.talentPoints = 0;
    if (!p.talents) p.talents = { att: 0, def: 0, hp: 0 };
    if (!p.discoveredZones) p.discoveredZones = [];
    if (!p.house) p.house = { owned: false, level: 0 };
    if (!p.guildId) p.guildId = "";
    if (!p.dailyQuest) p.dailyQuest = null;
    if (!p.weeklyQuest) p.weeklyQuest = null;
    if (!p.professions) p.professions = { mining: 1, herbal: 1, alchemy: 1, blacksmith: 1, cooking: 1 };
    if (!p.currentZone) p.currentZone = '묘냥의 숲';
    if (!p.shopPurchases) p.shopPurchases = {};
    if (!p.tutorial) p.tutorial = { step: 0, progress: {}, completed: false };
    if (!p.challengeRecords) p.challengeRecords = {};
    if (!p.equipPresets) p.equipPresets = {};
}

function getTitleBonus(p) {
    if (!p.activeTitle) return { attMul: 1, defMul: 1, hpBonus: 0 };
    var map = {
        '전설의 모험가': { attMul: 1.05, defMul: 1.05, hpBonus: 30 },
        '낚시왕': { attMul: 1, defMul: 1, hpBonus: 20 },
        '전장의 지배자': { attMul: 1.08, defMul: 1.02, hpBonus: 0 },
        '던전 정복자': { attMul: 1.05, defMul: 1.05, hpBonus: 50 }
    };
    return map[p.activeTitle] || { attMul: 1, defMul: 1, hpBonus: 0 };
}

function getPartyId(sender) {
    return state.partyOf[sender] || "";
}

function getParty(sender) {
    var pid = getPartyId(sender);
    if (!pid) return null;
    return state.parties[pid] || null;
}

function getPartyBuff(p) {
    var party = getParty(p.name);
    if (!party) return { attMul: 1, defMul: 1, hpBonus: 0 };
    if (!party.roles) party.roles = {};
    var hasTank = false, hasHeal = false, hasDps = false;
    for (var m = 0; m < party.members.length; m++) {
        var role = party.roles[party.members[m]] || '';
        if (role === '탱') hasTank = true;
        if (role === '힐') hasHeal = true;
        if (role === '딜') hasDps = true;
    }
    var buff = { attMul: 1.0, defMul: 1.0, hpBonus: 0 };
    if (hasTank) { buff.defMul *= 1.06; buff.hpBonus += 40; }
    if (hasHeal) { buff.hpBonus += 60; }
    if (hasDps) { buff.attMul *= 1.06; }
    if (hasTank && hasHeal && hasDps) {
        buff.attMul *= 1.03;
        buff.defMul *= 1.03;
        buff.hpBonus += 30;
    }
    return buff;
}

function getBgEventBonus() {
    if (!state.bgEvent) state.bgEvent = { name: '', bonus: {} };
    return state.bgEvent.bonus || {};
}

function getRaidSetBonus(p) {
    var eq = p.equipment || {};
    var equipped = [];
    if (eq.weapon && eq.weapon.name) equipped.push(eq.weapon.name);
    if (eq.armor && eq.armor.name) equipped.push(eq.armor.name);
    if (eq.shield && eq.shield.name) equipped.push(eq.shield.name);
    var bonus = { attMul: 1, defMul: 1, hpBonus: 0 };
    for (var setName in RaidSets) {
        var setInfo = RaidSets[setName];
        var count = 0;
        for (var i = 0; i < setInfo.items.length; i++) if (equipped.indexOf(setInfo.items[i]) !== -1) count++;
        if (count >= setInfo.items.length) {
            if (setInfo.bonus.attMul) bonus.attMul *= setInfo.bonus.attMul;
            if (setInfo.bonus.defMul) bonus.defMul *= setInfo.bonus.defMul;
            if (setInfo.bonus.hpBonus) bonus.hpBonus += setInfo.bonus.hpBonus;
        }
    }
    return bonus;
}

function rollRareMaterial() {
    return pickRandom(RareMaterials);
}

function addLog(type, playerName, message) {
    if (!state.logs || !state.logs[type]) return;
    if (!state.logs[type][playerName]) state.logs[type][playerName] = [];
    var list = state.logs[type][playerName];
    list.push(getDateKey() + ' ' + message);
    if (list.length > 20) list.shift();
}

function parseLogMeta(line) {
    var meta = { difficulty: '', boss: '' };
    // example: 2026-01-15 던전명 신화 - 보스명 클리어
    var parts = line.split(' - ');
    if (parts.length >= 2) meta.boss = parts[1].replace(' 클리어', '').trim();
    var tokens = parts[0].split(' ');
    if (tokens.length >= 3) meta.difficulty = tokens[tokens.length - 1];
    return meta;
}

function uniquePush(arr, value) {
    if (value && arr.indexOf(value) === -1) arr.push(value);
}

function rollRewardTable(table) {
    var rewards = [];
    for (var i = 0; i < table.length; i++) {
        if (Math.random() < table[i].chance) rewards.push({ item: table[i].item, qty: table[i].qty || 1 });
    }
    return rewards;
}

function getJobSkillList(p) {
    var job = getJob(p.job);
    return (job && job.skills) ? job.skills : [];
}

function getSkillEmoji(skillName) {
    var map = {
        '기본공격': '⚔️',
        '응급치료': '🩹',
        '강타': '💥',
        '방어태세': '🛡️',
        '도발': '📣',
        '돌진': '🏃',
        '파이어볼': '🔥',
        '아이스스피어': '❄️',
        '번개충격': '⚡',
        '마나실드': '🔮',
        '정조준': '🎯',
        '다중사격': '🏹',
        '화살비': '🌧️',
        '독화살': '☠️',
        '기습': '🗡️',
        '독칼날': '🧪',
        '그림자걷기': '🌑',
        '급소공격': '🎯',
        '신성한심판': '🌟',
        '광기의해방': '🩸',
        '대마력포': '💫',
        '죽음의춤': '💀',
        '메테오스웜': '☄️',
        '영혼참수': '🪓',
        '라그나로크': '🌋',
        '독바르기': '🧴',
        '치유': '💚',
        '성역의 빛': '✨',
        '분노폭발': '😡',
        '신성한 방패': '🛡️',
        '메테오': '☄️',
        '골렘소환': '🪨',
        '암살': '🗡️',
        '훔치기': '🧤',
        '부활': '🕊️',
        '아수라파천무': '👊',
        '폭풍화살': '🌪️',
        '어둠의 일격': '🌑',
        '대지강타': '🌍',
        '빙결파동': '🧊'
    };
    if (map[skillName]) return map[skillName];
    if (skillName.indexOf('치유') !== -1 || skillName.indexOf('회복') !== -1) return '💚';
    if (skillName.indexOf('방패') !== -1 || skillName.indexOf('보호') !== -1) return '🛡️';
    if (skillName.indexOf('불') !== -1 || skillName.indexOf('화염') !== -1) return '🔥';
    if (skillName.indexOf('얼음') !== -1 || skillName.indexOf('빙결') !== -1) return '❄️';
    if (skillName.indexOf('번개') !== -1 || skillName.indexOf('뇌') !== -1) return '⚡';
    if (skillName.indexOf('독') !== -1) return '☠️';
    if (skillName.indexOf('검') !== -1 || skillName.indexOf('창') !== -1) return '⚔️';
    return '✨';
}

function buildSkillBar(p) {
    var skills = getJobSkillList(p) || [];
    if (!skills.length) return '';
    var maxShow = 6;
    var shown = skills.slice(0, maxShow);
    for (var i = 0; i < shown.length; i++) {
        shown[i] = getSkillEmoji(shown[i]) + shown[i];
    }
    var more = skills.length > maxShow ? ' +' + (skills.length - maxShow) : '';
    return '\n[스킬] ' + shown.join(' | ') + more + '\n사용: .스킬 <이름>';
}

function buildDurabilityStatus(p) {
    var eq = p.equipment || {};
    var slots = [
        { key: 'weapon', label: '무기', type: 'weapon' },
        { key: 'armor', label: '갑옷', type: 'armor' },
        { key: 'shield', label: '방패', type: 'shield' },
        { key: 'helmet', label: '투구', type: 'helmet' },
        { key: 'gloves', label: '장갑', type: 'gloves' },
        { key: 'boots', label: '신발', type: 'boots' }
    ];
    var parts = [];
    var broken = [];
    for (var i = 0; i < slots.length; i++) {
        var slot = eq[slots[i].key];
        if (!slot || !slot.name) continue;
        ensureSlotDurability(slot, slot.name, slots[i].type);
        var text = slots[i].label + ' ' + slot.durability + '/' + slot.maxDurability;
        if (slot.durability <= 0) {
            broken.push(slots[i].label);
            text += '(파손)';
        }
        parts.push(text);
    }
    if (parts.length === 0) return '🧰 내구도: 장비 없음';
    var line = '🧰 내구도: ' + parts.join(', ');
    if (broken.length) line += '\n파손: ' + broken.join(', ');
    return line;
}

function buildNextActionLine() {
    return '\n다음 행동: .공격 / .스킬 / .사용';
}

function buildPlayerStatusLine(p) {
    return '내 상태: 💚 ' + p.hp + '/' + getMaxHp(p) + ' | 🔷 ' + p.mp + '/' + getMaxMp(p);
}

function buildNextActionHint(context) {
    if (context === 'shop-list') return '\n다음 행동: .상점 <상점명> [페이지] / .인벤 / .정보';
    if (context === 'shop-view') return '\n다음 행동: .구매 <아이템> / .판매 <아이템> / .인벤';
    if (context === 'inventory') return '\n다음 행동: .장착 <부위> <아이템> / .사용 <아이템> / .장비';
    if (context === 'equipment') return '\n다음 행동: .장착 <부위> <아이템> / .해제 <부위> / .강화 <부위>'; 
    if (context === 'status') return '\n다음 행동: .사냥 / .상점 / .인벤';
    if (context === 'trade') return '\n다음 행동: .상점 / .인벤';
    if (context === 'party') return '\n다음 행동: .파티역할 <탱/힐/딜> / .파티나가기';
    if (context === 'item-info') return '\n다음 행동: .장착 <부위> <아이템> / .판매 <아이템> / .인벤';
    if (context === 'profession') return '\n다음 행동: .채광 / .약초 / .제작 / .요리';
    if (context === 'gather') return '\n다음 행동: .인벤 / .제작 / .상점';
    if (context === 'repair') return '\n다음 행동: .수리 <부위> / .장비';
    if (context === 'enhance') return '\n다음 행동: .강화 <부위> [강화석] / .장비';
    if (context === 'gem') return '\n다음 행동: .보석장착 <보석> / .장비';
    if (context === 'dungeon-list') return '\n다음 행동: .던전 <이름> [난이도] / .사냥';
    if (context === 'dungeon-start') return '\n다음 행동: .공격 / .스킬 / .사용';
    if (context === 'world-event') return '\n다음 행동: .침공 / .정보';
    if (context === 'world-boss') return '\n다음 행동: .월드보스공격 / .월드보스보상 / .정보';
    if (context === 'quest-list') return '\n다음 행동: .퀘스트수락 <ID> / .퀘스트현황';
    if (context === 'daily-quest') return '\n다음 행동: .사냥 / .낚시 / .일일완료';
    if (context === 'weekly-quest') return '\n다음 행동: .던전 / .전장참가 / .주간완료';
    if (context === 'quest-progress') return '\n다음 행동: .퀘스트완료 <ID> / .퀘스트현황';
    if (context === 'craft') return '\n다음 행동: .제작 <레시피> / .인벤';
    if (context === 'cook') return '\n다음 행동: .요리 <레시피> / .인벤';
    if (context === 'fishing') return '\n다음 행동: .낚시판매 / .인벤';
    if (context === 'fishing-info') return '\n다음 행동: .낚시 / .낚시판매';
    if (context === 'pet') return '\n다음 행동: .펫먹이 / .펫훈련 / .펫탐험';
    if (context === 'mount') return '\n다음 행동: .탈것목록 / .탈것타기 <이름>'; 
    if (context === 'zone') return '\n다음 행동: .지역이동 <이름> / .사냥';
    if (context === 'explore') return '\n다음 행동: .탐험 / .사냥 / .보물상자';
    if (context === 'treasure') return '\n다음 행동: .보물상자 <이름> / .인벤';
    if (context === 'skills') return '\n다음 행동: .스킬 <이름> / .사냥';
    if (context === 'equip-change') return '\n다음 행동: .장비 / .강화 <부위> / .수리';
    if (context === 'use-item') return '\n다음 행동: .인벤 / .사냥 / .상점';
    if (context === 'escape') return '\n다음 행동: .사냥 / .휴식 / .인벤';
    if (context === 'enhance-fail') return '\n다음 행동: .수리 / .강화 <부위> [강화석] / .상점';
    if (context === 'gem-fail') return '\n다음 행동: .보석장착 <보석> / .상점 / .인벤';
    if (context === 'quest-reward') return '\n다음 행동: .퀘스트목록 / .일일퀘스트 / .던전';
    if (context === 'battle-end') return '\n다음 행동: .사냥 / .던전 / .상점';
    if (context === 'tutorial') return '\n다음 행동: .튜토리얼 / .추천루트';
    if (context === 'rune') return '\n다음 행동: .룬각인 <부위> <룬> / .룬확인';
    if (context === 'mutation') return '\n다음 행동: .변이던전 <이름> / .도전모드 <이름>';
    if (context === 'season-dungeon') return '\n다음 행동: .시즌던전랭킹 / .시즌던전보상';
    if (context === 'tarot') return '\n다음 행동: .타로상태 / .타로집중 / .사냥 / .던전';
    return '\n다음 행동: .사냥 / .상점 / .인벤';
}

function findRecommendedZoneForLevel(level) {
    var zones = GameData.ZoneData || {};
    var best = null;
    var bestScore = 9999;
    for (var name in zones) {
        var z = zones[name];
        if (!z || !z.level) continue;
        var min = z.level.min || 1;
        var max = z.level.max || min + 5;
        var score = 0;
        if (level < min) score = min - level;
        else if (level > max) score = level - max;
        if (score < bestScore) { bestScore = score; best = name; }
    }
    return best;
}

function getEquipmentGaps(p) {
    var eq = p.equipment || {};
    var gaps = [];
    if (!eq.weapon || !eq.weapon.name) gaps.push('무기');
    if (!eq.armor || !eq.armor.name) gaps.push('갑옷');
    if (!eq.helmet || !eq.helmet.name) gaps.push('투구');
    if (!eq.gloves || !eq.gloves.name) gaps.push('장갑');
    if (!eq.boots || !eq.boots.name) gaps.push('신발');
    return gaps;
}

function buildRecommendedRoute(p) {
    var lines = ['[추천 루트]'];
    var t = getTutorialState(p);
    if (!t.completed && p.level <= Config.BEGINNER_DUNGEON_MAX_LEVEL) {
        lines.push('튜토리얼: ' + formatTutorialProgress(p));
    }

    var gaps = getEquipmentGaps(p);
    if (gaps.length) {
        lines.push('장비 추천: ' + gaps.join(', ') + ' 확보 → .상점 / .장착');
    }

    var zoneName = p.currentZone || '묘냥의 숲';
    var currentZone = GameData.ZoneData ? GameData.ZoneData[zoneName] : null;
    if (currentZone && currentZone.level) {
        var max = currentZone.level.max || p.level;
        if (p.level > max + 2) {
            var nextZone = findRecommendedZoneForLevel(p.level);
            if (nextZone && nextZone !== zoneName) lines.push('지역 이동 추천: .지역이동 ' + nextZone);
        }
    }

    if (p.level <= Config.BEGINNER_DUNGEON_MAX_LEVEL) {
        lines.push('초보 던전: .초보던전 또는 .던전 초보자 수련동굴');
    } else if (p.level >= Config.MID_DUNGEON_MIN_LEVEL && p.level <= Config.MID_DUNGEON_MAX_LEVEL) {
        lines.push('중급 콘텐츠: .중급던전 / .정예사냥');
    } else if (p.level >= Config.ENDGAME_DUNGEON_MIN_LEVEL) {
        lines.push('엔드게임 파밍: .던전 룬의 심연 / .변이던전 <이름>');
    } else {
        lines.push('던전 도전: .던전 <이름> [난이도]');
    }

    lines.push('자동 추천 다시보기: .추천루트');
    return lines.join('\n');
}

function checkChallengeTimeout(battle) {
    if (!battle || !battle.challenge) return null;
    var limit = (battle.challenge.timeLimitSec || Config.CHALLENGE_TIME_LIMIT_SEC) * 1000;
    if (Date.now() - battle.challenge.startedAt > limit) return '도전 실패: 제한 시간 초과';
    return null;
}

function recordChallengeResult(p, battle, success, reason) {
    if (!battle || !battle.challenge) return '';
    var key = battle.challenge.key || '도전 모드';
    var elapsed = Math.max(1, Math.floor((Date.now() - battle.challenge.startedAt) / 1000));
    if (!p.challengeRecords) p.challengeRecords = {};
    if (!p.challengeRecords[key] || (success && elapsed < p.challengeRecords[key].timeSec)) {
        p.challengeRecords[key] = { timeSec: elapsed, success: success, date: getDateKey() };
    }
    return '\n[도전 모드] ' + key + ' ' + (success ? '성공' : '실패') + ' (' + elapsed + '초) ' + (reason ? '- ' + reason : '');
}

function recordSeasonDungeonScore(p, battle) {
    if (!battle || !battle.seasonDungeon) return '';
    ensureSeasonDungeon();
    var sid = state.seasonDungeon.id;
    if (!state.seasonDungeonRank[sid]) state.seasonDungeonRank[sid] = {};
    var elapsed = Math.max(1, Math.floor((Date.now() - battle.seasonDungeon.startedAt) / 1000));
    var score = Math.max(1, Math.floor(10000 / (elapsed + 30)) + Math.floor(p.level * 5));
    var prev = state.seasonDungeonRank[sid][p.name];
    if (!prev || score > prev.score) {
        state.seasonDungeonRank[sid][p.name] = { score: score, timeSec: elapsed, date: getDateKey() };
    }
    return '\n[시즌 던전] 기록 갱신: 점수 ' + score + ' (시간 ' + elapsed + '초)';
}

function buildBattleEndHint(p) {
    var zoneName = p.currentZone || '묘냥의 숲';
    var zone = GameData.ZoneData ? GameData.ZoneData[zoneName] : null;
    var maxHp = getMaxHp(p);
    var maxMp = getMaxMp(p);
    var lowHp = maxHp > 0 && (p.hp / maxHp) < 0.4;
    var lowMp = maxMp > 0 && (p.mp / maxMp) < 0.25;
    var base = '\n다음 행동: ';

    if (lowHp || lowMp) {
        return base + '.휴식 / .사용 <포션> / .상점';
    }

    if (zone && zone.levelReq && p.level < zone.levelReq) {
        return base + '.지역이동 / .지역목록 / .상점';
    }

    if (p.level < 10) {
        return base + '.사냥 / .지역이동 / .상점';
    }

    if (p.level < 30) {
        return base + '.던전 / .사냥 / .상점';
    }

    return base + '.던전 / .월드이벤트 / .상점';
}

var AccessoryEffectTable = {
    // 반지 (치명타)
    '철반지': { healPct: 0, critPct: 0.02, dropPct: 0 },
    '은반지': { healPct: 0, critPct: 0.03, dropPct: 0 },
    '금반지': { healPct: 0, critPct: 0.04, dropPct: 0 },
    '루비반지': { healPct: 0, critPct: 0.05, dropPct: 0 },
    '사파이어반지': { healPct: 0, critPct: 0.05, dropPct: 0 },
    '에메랄드반지': { healPct: 0, critPct: 0.04, dropPct: 0 },
    '다이아몬드반지': { healPct: 0, critPct: 0.07, dropPct: 0 },
    '생명의반지': { healPct: 0, critPct: 0.06, dropPct: 0 },
    '힘의반지': { healPct: 0, critPct: 0.08, dropPct: 0 },
    '마력의반지': { healPct: 0, critPct: 0.08, dropPct: 0 },
    '전설의반지': { healPct: 0, critPct: 0.12, dropPct: 0 },
    // 목걸이 (치유)
    '가죽목걸이': { healPct: 0.02, critPct: 0, dropPct: 0 },
    '은목걸이': { healPct: 0.03, critPct: 0, dropPct: 0 },
    '금목걸이': { healPct: 0.04, critPct: 0, dropPct: 0 },
    '호신부': { healPct: 0.05, critPct: 0, dropPct: 0 },
    '마력의목걸이': { healPct: 0.06, critPct: 0, dropPct: 0 },
    '불사조의깃털': { healPct: 0.07, critPct: 0, dropPct: 0 },
    '드래곤펜던트': { healPct: 0.08, critPct: 0, dropPct: 0 },
    '영혼의목걸이': { healPct: 0.12, critPct: 0, dropPct: 0 },
    // 귀걸이 (드랍)
    '은귀걸이': { healPct: 0, critPct: 0, dropPct: 0.02 },
    '금귀걸이': { healPct: 0, critPct: 0, dropPct: 0.03 },
    '진주귀걸이': { healPct: 0, critPct: 0, dropPct: 0.04 },
    '다이아귀걸이': { healPct: 0, critPct: 0, dropPct: 0.05 },
    '정령의귀걸이': { healPct: 0, critPct: 0, dropPct: 0.07 },
    '천사의귀걸이': { healPct: 0, critPct: 0, dropPct: 0.10 },
    // 벨트 (치명타)
    '가죽벨트': { healPct: 0, critPct: 0.02, dropPct: 0 },
    '철벨트': { healPct: 0, critPct: 0.03, dropPct: 0 },
    '전사의벨트': { healPct: 0, critPct: 0.05, dropPct: 0 },
    '영웅의벨트': { healPct: 0, critPct: 0.07, dropPct: 0 },
    '타이탄벨트': { healPct: 0, critPct: 0.10, dropPct: 0 },
    // 망토 (드랍)
    '천망토': { healPct: 0, critPct: 0, dropPct: 0.02 },
    '가죽망토': { healPct: 0, critPct: 0, dropPct: 0.03 },
    '마법망토': { healPct: 0, critPct: 0, dropPct: 0.05 },
    '은신의망토': { healPct: 0, critPct: 0, dropPct: 0.06 },
    '영웅의망토': { healPct: 0, critPct: 0, dropPct: 0.08 },
    '드래곤망토': { healPct: 0, critPct: 0, dropPct: 0.10 },
    '불사조의날개망토': { healPct: 0, critPct: 0, dropPct: 0.13 }
};

function getAccessoryEffectFromItem(item) {
    if (!item || !item.type || item.type !== 'accessory') return { healPct: 0, critPct: 0, dropPct: 0 };
    if (item.specialEffect) return item.specialEffect;
    var name = item.name || '';
    if (AccessoryEffectTable[name]) return AccessoryEffectTable[name];
    var prefixes = [
        { prefix: '강화된 ', mult: 1.2 },
        { prefix: '정련된 ', mult: 1.35 },
        { prefix: '명품 ', mult: 1.6 },
        { prefix: '고대의 ', mult: 2.0 }
    ];
    for (var i = 0; i < prefixes.length; i++) {
        if (name.indexOf(prefixes[i].prefix) === 0) {
            var baseName = name.substring(prefixes[i].prefix.length);
            var baseEff = AccessoryEffectTable[baseName];
            if (baseEff) {
                return {
                    healPct: Math.min(0.25, (baseEff.healPct || 0) * prefixes[i].mult),
                    critPct: Math.min(0.25, (baseEff.critPct || 0) * prefixes[i].mult),
                    dropPct: Math.min(0.25, (baseEff.dropPct || 0) * prefixes[i].mult)
                };
            }
        }
    }
    return { healPct: 0, critPct: 0, dropPct: 0 };
}

function getAccessoryEffects(p) {
    var eq = p.equipment || {};
    var slots = ['ring1', 'ring2', 'necklace', 'earring', 'belt', 'cloak'];
    var total = { healPct: 0, critPct: 0, dropRate: 0 };
    for (var i = 0; i < slots.length; i++) {
        var slot = eq[slots[i]];
        if (!slot || !slot.name) continue;
        var item = GameData.ItemDatabase[slot.name];
        var eff = getAccessoryEffectFromItem(item);
        total.healPct += (eff.healPct || 0);
        total.critPct += (eff.critPct || 0);
        total.dropRate += (eff.dropPct || 0);
    }
    return total;
}

function getRuneEffects(p) {
    var eq = p.equipment || {};
    var slots = ['weapon', 'armor', 'shield', 'helmet', 'gloves', 'boots', 'ring1', 'ring2', 'necklace', 'earring', 'belt', 'cloak'];
    var total = { attMul: 1, defMul: 1, hpBonus: 0, critPct: 0, healPct: 0, dropRate: 0 };
    for (var i = 0; i < slots.length; i++) {
        var slot = eq[slots[i]];
        if (!slot || !slot.rune) continue;
        var eff = RuneEffectTable[slot.rune];
        if (!eff) continue;
        if (eff.attMul) total.attMul *= eff.attMul;
        if (eff.defMul) total.defMul *= eff.defMul;
        if (eff.hpBonus) total.hpBonus += eff.hpBonus;
        if (eff.critPct) total.critPct += eff.critPct;
        if (eff.healPct) total.healPct += eff.healPct;
        if (eff.dropRate) total.dropRate += eff.dropRate;
    }
    total.critPct = Math.min(0.35, total.critPct);
    total.healPct = Math.min(0.25, total.healPct);
    total.dropRate = Math.min(0.25, total.dropRate);
    return total;
}

function getTutorialState(p) {
    if (!p.tutorial) p.tutorial = { step: 0, progress: {}, completed: false };
    return p.tutorial;
}

function getTutorialStep(p) {
    var t = getTutorialState(p);
    if (t.completed) return null;
    return TutorialQuestLine[t.step] || null;
}

function formatTutorialProgress(p) {
    var step = getTutorialStep(p);
    if (!step) return '튜토리얼 완료!';
    var t = getTutorialState(p);
    var cur = t.progress[step.type] || 0;
    return '[튜토리얼] ' + step.title + ' (' + cur + '/' + step.count + ')\n힌트: ' + step.hint;
}

function advanceTutorialStep(p) {
    var t = getTutorialState(p);
    t.step += 1;
    t.progress = {};
    if (t.step >= TutorialQuestLine.length) t.completed = true;
}

function applyTutorialProgress(p, type) {
    var step = getTutorialStep(p);
    if (!step || step.type !== type) return '';
    var t = getTutorialState(p);
    t.progress[step.type] = (t.progress[step.type] || 0) + 1;
    if (t.progress[step.type] < step.count) return '\n' + formatTutorialProgress(p);

    if (step.reward) {
        if (step.reward.gold) p.gold += step.reward.gold;
        if (step.reward.exp) addExp(p, step.reward.exp);
        if (step.reward.items) {
            for (var i = 0; i < step.reward.items.length; i++) addItem(p, step.reward.items[i], 1);
        }
    }
    var rewardText = step.reward ? ('보상: ' + (step.reward.gold || 0) + 'G, EXP ' + (step.reward.exp || 0)) : '보상 없음';
    advanceTutorialStep(p);
    var next = getTutorialStep(p);
    var nextText = next ? ('다음: ' + next.title) : '튜토리얼 완료!';
    return '\n[튜토리얼 완료] ' + step.title + '\n' + rewardText + '\n' + nextText;
}

function buildMutationData() {
    var count = 2 + rand(0, 1);
    var picked = [];
    var rules = MutationRulePool.slice();
    for (var i = 0; i < count && rules.length > 0; i++) {
        var idx = rand(0, rules.length - 1);
        picked.push(rules[idx]);
        rules.splice(idx, 1);
    }
    var data = {
        rules: picked,
        monsterHpMul: 1,
        monsterAttMul: 1,
        monsterDefMul: 1,
        playerAttMul: 1,
        playerDefMul: 1
    };
    for (var r = 0; r < picked.length; r++) {
        data.monsterHpMul *= (picked[r].monsterHpMul || 1);
        data.monsterAttMul *= (picked[r].monsterAttMul || 1);
        data.monsterDefMul *= (picked[r].monsterDefMul || 1);
        data.playerAttMul *= (picked[r].playerAttMul || 1);
        data.playerDefMul *= (picked[r].playerDefMul || 1);
    }
    return data;
}

function formatMutationRules(data) {
    if (!data || !data.rules || !data.rules.length) return '';
    var lines = [];
    for (var i = 0; i < data.rules.length; i++) lines.push('- ' + data.rules[i].name + ': ' + data.rules[i].desc);
    return lines.join('\n');
}

function ensureSeasonDungeon() {
    var seasonKey = getSeasonKey();
    if (!state.seasonDungeon || state.seasonDungeon.id !== seasonKey) {
        state.seasonDungeon = { id: seasonKey, started: getDateKey() };
        state.seasonDungeonRank = state.seasonDungeonRank || {};
        state.seasonDungeonRank[seasonKey] = {};
    }
}

function applyCritDamage(p, dmg) {
    var acc = getAccessoryEffects(p);
    var rune = getRuneEffects(p);
    var critChance = Math.min(0.45, (acc.critPct || 0) + (rune.critPct || 0));
    if (Math.random() < critChance) return { dmg: Math.floor(dmg * 1.5), crit: true };
    return { dmg: dmg, crit: false };
}

function getSkillData(skillName) {
    return (GameData.SkillDatabase && GameData.SkillDatabase[skillName]) || null;
}

function getBaseStat(p, key) {
    var job = getJob(p.job);
    if (!job) return 0;
    var base = (job.baseStats && job.baseStats[key]) || 0;
    var growth = (job.statGrowth && job.statGrowth[key]) || 0;
    return base + growth * (p.level - 1);
}

function getPetBonus(p, type) {
    if (!p.pet || !p.pet.type) return 0;
    if (!GameData.PetSystemData || !GameData.PetSystemData.pets) return 0;
    var petData = GameData.PetSystemData.pets[p.pet.type];
    if (!petData || !petData.buff || petData.buff.type !== type) return 0;
    var base = petData.buff.baseValue || 0;
    var growth = petData.buff.growth || 0;
    return base + growth * (p.pet.level - 1);
}

function getMountBonus(p) {
    var bonus = { attMul: 1, defMul: 1, hpMul: 1, att: 0, def: 0, hp: 0 };
    if (!p.activeMount) return bonus;
    if (!GameData.MountDatabase) return bonus;
    var m = GameData.MountDatabase[p.activeMount];
    if (!m) return bonus;
    if (m.buff) {
        bonus.attMul = m.buff.attMul || 1;
        bonus.defMul = m.buff.defMul || 1;
        bonus.hpMul = m.buff.hpMul || 1;
        bonus.att = m.buff.att || 0;
        bonus.def = m.buff.def || 0;
        bonus.hp = m.buff.hp || 0;
        return bonus;
    }
    var rarityMap = {
        common: { attMul: 1.02, defMul: 1.02, hpMul: 1.03 },
        uncommon: { attMul: 1.04, defMul: 1.04, hpMul: 1.05 },
        rare: { attMul: 1.06, defMul: 1.06, hpMul: 1.08 },
        epic: { attMul: 1.08, defMul: 1.08, hpMul: 1.1 },
        legendary: { attMul: 1.1, defMul: 1.1, hpMul: 1.12 },
        mythic: { attMul: 1.12, defMul: 1.12, hpMul: 1.15 }
    };
    var r = rarityMap[m.rarity] || { attMul: 1.03, defMul: 1.03, hpMul: 1.04 };
    bonus.attMul = r.attMul;
    bonus.defMul = r.defMul;
    bonus.hpMul = r.hpMul;
    return bonus;
}

function applyMountBalance(monster, p) {
    if (!p || !p.activeMount) return monster;
    var mult = Config.MOUNT_BALANCE_MULT || 1;
    if (mult <= 1) return monster;
    var m = {};
    for (var k in monster) m[k] = monster[k];
    if (m.hp) m.hp = Math.floor(m.hp * mult);
    if (m.att) m.att = Math.floor(m.att * mult);
    if (m.def) m.def = Math.floor(m.def * mult);
    return m;
}

function getMaxHp(p) {
    var base = getBaseStat(p, 'hp') + getPetBonus(p, 'maxHp');
    base += (p.talents ? (p.talents.hp || 0) * 20 : 0);
    base += (p.petCollection ? p.petCollection.length * 2 : 0);
    base += (p.mounts ? p.mounts.length * 2 : 0);
    if (p.house && p.house.owned) base += 20 + (p.house.level || 0) * 10;
    var eq = p.equipment || {};
    var slotsHp = ['weapon', 'armor', 'shield', 'helmet', 'gloves', 'boots', 'ring1', 'ring2', 'necklace', 'earring', 'belt', 'cloak'];
    for (var i = 0; i < slotsHp.length; i++) {
        var slot = eq[slotsHp[i]];
        if (slot && slot.name) {
            var itemHp = GameData.ItemDatabase[slot.name];
            if (itemHp && itemHp.hp) base += itemHp.hp;
        }
    }
    var mountBonus = getMountBonus(p);
    base = Math.floor(base * mountBonus.hpMul) + (mountBonus.hp || 0);
    var title = getTitleBonus(p);
    var party = getPartyBuff(p);
    var setBonus = getRaidSetBonus(p);
    var bg = getBgEventBonus();
    var rune = getRuneEffects(p);
    var tarot = getTarotBonus(p);
    base += title.hpBonus + party.hpBonus;
    base += setBonus.hpBonus + (bg.hp || 0);
    base += (rune.hpBonus || 0) + (tarot.hpBonus || 0);
    return Math.floor(base);
}
function getMaxMp(p) { return getBaseStat(p, 'mp'); }

function getAttack(p) {
    var base = getBaseStat(p, 'att');
    if (p.equipment.weapon && p.equipment.weapon.name) {
    ensureSlotDurability(p.equipment.weapon, p.equipment.weapon.name, 'weapon');
    if (p.equipment.weapon.durability <= 0) {
        // 파손된 무기는 공격력 적용 없음
    } else {
        var w = GameData.ItemDatabase[p.equipment.weapon.name];
        if (w && w.att) base += w.att;
        if (p.equipment.weapon.enhance) base += p.equipment.weapon.enhance * 2;
        if (p.equipment.weapon.gem) base += 5;
    }
    }
    var eq = p.equipment || {};
    var attSlots = ['armor', 'shield', 'helmet', 'gloves', 'boots', 'ring1', 'ring2', 'necklace', 'earring', 'belt', 'cloak'];
    for (var i = 0; i < attSlots.length; i++) {
        var slot = eq[attSlots[i]];
        if (!slot || !slot.name) continue;
        var item = GameData.ItemDatabase[slot.name];
        if (!item) continue;
        if (attSlots[i] === 'armor') ensureSlotDurability(slot, slot.name, 'armor');
        if (attSlots[i] === 'shield') ensureSlotDurability(slot, slot.name, 'shield');
        if (attSlots[i] === 'helmet') ensureSlotDurability(slot, slot.name, 'helmet');
        if (attSlots[i] === 'gloves') ensureSlotDurability(slot, slot.name, 'gloves');
        if (attSlots[i] === 'boots') ensureSlotDurability(slot, slot.name, 'boots');
        if (slot.durability !== undefined && slot.durability <= 0) continue;
        if (item.att) base += item.att;
    }
    base += getPetBonus(p, 'att');
    if (p.talents) base += (p.talents.att || 0) * 2;
    var mountBonus = getMountBonus(p);
    base = Math.floor(base * mountBonus.attMul) + (mountBonus.att || 0);
    var title = getTitleBonus(p);
    var party = getPartyBuff(p);
    var setBonus = getRaidSetBonus(p);
    var bg = getBgEventBonus();
    var bgMul = bg.att ? bg.att : 1;
    var rune = getRuneEffects(p);
    var tarot = getTarotBonus(p);
    return Math.floor(base * title.attMul * party.attMul * setBonus.attMul * bgMul * (rune.attMul || 1) * (tarot.attMul || 1));
}

function getDefense(p) {
    var base = getBaseStat(p, 'def');
    if (p.equipment.armor && p.equipment.armor.name) {
    ensureSlotDurability(p.equipment.armor, p.equipment.armor.name, 'armor');
    if (p.equipment.armor.durability > 0) {
        var a = GameData.ItemDatabase[p.equipment.armor.name];
        if (a && a.def) base += a.def;
        if (p.equipment.armor.enhance) base += p.equipment.armor.enhance * 2;
    }
    }
    if (p.equipment.shield && p.equipment.shield.name) {
    ensureSlotDurability(p.equipment.shield, p.equipment.shield.name, 'shield');
    if (p.equipment.shield.durability > 0) {
        var s = GameData.ItemDatabase[p.equipment.shield.name];
        if (s && s.def) base += s.def;
        if (p.equipment.shield.enhance) base += p.equipment.shield.enhance * 2;
    }
    }
    if (p.equipment.helmet && p.equipment.helmet.name) {
    ensureSlotDurability(p.equipment.helmet, p.equipment.helmet.name, 'helmet');
    if (p.equipment.helmet.durability > 0) {
        var h = GameData.ItemDatabase[p.equipment.helmet.name];
        if (h && h.def) base += h.def;
        if (p.equipment.helmet.enhance) base += p.equipment.helmet.enhance * 2;
    }
    }
    if (p.equipment.gloves && p.equipment.gloves.name) {
    ensureSlotDurability(p.equipment.gloves, p.equipment.gloves.name, 'gloves');
    if (p.equipment.gloves.durability > 0) {
        var g = GameData.ItemDatabase[p.equipment.gloves.name];
        if (g && g.def) base += g.def;
        if (p.equipment.gloves.enhance) base += p.equipment.gloves.enhance * 2;
    }
    }
    if (p.equipment.boots && p.equipment.boots.name) {
    ensureSlotDurability(p.equipment.boots, p.equipment.boots.name, 'boots');
    if (p.equipment.boots.durability > 0) {
        var b = GameData.ItemDatabase[p.equipment.boots.name];
        if (b && b.def) base += b.def;
        if (p.equipment.boots.enhance) base += p.equipment.boots.enhance * 2;
    }
    }
    var eq2 = p.equipment || {};
    var accSlots = ['ring1', 'ring2', 'necklace', 'earring', 'belt', 'cloak'];
    for (var ai = 0; ai < accSlots.length; ai++) {
        var acc = eq2[accSlots[ai]];
        if (!acc || !acc.name) continue;
        var accItem = GameData.ItemDatabase[acc.name];
        if (accItem && accItem.def) base += accItem.def;
    }
    base += getPetBonus(p, 'def');
    if (p.talents) base += (p.talents.def || 0) * 2;
    var mountBonus = getMountBonus(p);
    base = Math.floor(base * mountBonus.defMul) + (mountBonus.def || 0);
    var title = getTitleBonus(p);
    var party = getPartyBuff(p);
    var setBonus = getRaidSetBonus(p);
    var bg = getBgEventBonus();
    var bgMul = bg.def ? bg.def : 1;
    var rune = getRuneEffects(p);
    var tarot = getTarotBonus(p);
    return Math.floor(base * title.defMul * party.defMul * setBonus.defMul * bgMul * (rune.defMul || 1) * (tarot.defMul || 1));
}

function getBattleAttack(p, battle) {
    var base = getAttack(p);
    var mult = (battle && battle.playerAttMul) ? battle.playerAttMul : 1;
    return Math.floor(base * mult);
}

function getBattleDefense(p, battle) {
    var base = getDefense(p);
    var mult = (battle && battle.playerDefMul) ? battle.playerDefMul : 1;
    return Math.floor(base * mult);
}

function addItem(p, name, count) {
    count = count || 1;
    for (var i = 0; i < p.inventory.length; i++) {
        if (p.inventory[i].name === name) { p.inventory[i].count += count; return; }
    }
    p.inventory.push({ name: name, count: count });
}

function removeItem(p, name, count) {
    count = count || 1;
    for (var i = 0; i < p.inventory.length; i++) {
        if (p.inventory[i].name === name) {
            if (p.inventory[i].count < count) return false;
            p.inventory[i].count -= count;
            if (p.inventory[i].count <= 0) p.inventory.splice(i, 1);
            return true;
        }
    }
    return false;
}

function findItemCount(p, name) {
    for (var i = 0; i < p.inventory.length; i++) {
        if (p.inventory[i].name === name) return p.inventory[i].count;
    }
    return 0;
}

function resolveUseItemName(p, rawName) {
    var input = (rawName || '').trim();
    if (!input) return '';
    var candidates = [input];
    var noSpace = input.replace(/\s+/g, '');
    if (noSpace !== input) candidates.push(noSpace);
    if (input.indexOf('포션') !== -1 && input.indexOf(' ') === -1) {
        candidates.push(input.replace('포션', ' 포션'));
    }
    if (input.indexOf(' 포션') !== -1) {
        candidates.push(input.replace(' 포션', '포션'));
    }
    var uniq = {};
    for (var i = 0; i < candidates.length; i++) {
        var name = candidates[i];
        if (!name || uniq[name]) continue;
        uniq[name] = true;
        if (findItemCount(p, name) > 0) return name;
    }
    return input;
}

function addExp(p, amount) {
    p.exp += amount;
    var leveled = false;
    while (p.exp >= p.maxExp) {
        p.exp -= p.maxExp;
        p.level += 1;
        p.maxExp = Math.floor(p.maxExp * 1.15 + 20);
        if (p.level % 5 === 0) p.talentPoints = (p.talentPoints || 0) + 1;
        p.hp = getMaxHp(p);
        p.mp = getMaxMp(p);
        leveled = true;
    }
    return leveled;
}

function addFishingExp(p, amount) {
    p.fishingExp += amount;
    var leveled = false;
    while (p.fishingExp >= p.maxFishingExp) {
        p.fishingExp -= p.maxFishingExp;
        p.fishingLevel += 1;
        p.maxFishingExp = Math.floor(p.maxFishingExp * 1.2 + 30);
        leveled = true;
    }
    return leveled;
}

function getConsumableEffect(itemName) {
    var effects = {
        '포션': function(p) { p.hp = Math.min(getMaxHp(p), p.hp + 50); return 'HP +50'; },
        '마나 포션': function(p) { p.mp = Math.min(getMaxMp(p), p.mp + 30); return 'MP +30'; },
        '엘릭서': function(p) { p.hp = getMaxHp(p); p.mp = getMaxMp(p); return 'HP/MP 완전 회복'; },
        '멸치구이': function(p) { p.hp = Math.min(getMaxHp(p), p.hp + 15); return 'HP +15'; },
        '잉어찜': function(p) { p.hp = Math.min(getMaxHp(p), p.hp + 40); return 'HP +40'; },
        '광어회': function(p) { p.hp = Math.min(getMaxHp(p), p.hp + 120); return 'HP +120'; },
        '장어구이': function(p) { p.hp = Math.min(getMaxHp(p), p.hp + 200); p.mp = Math.min(getMaxMp(p), p.mp + 50); return 'HP +200, MP +50'; },
        '고래찜': function(p) { p.hp = getMaxHp(p); p.mp = getMaxMp(p); return 'HP/MP 완전 회복'; },
        '연어스테이크': function(p) { p.hp = Math.min(getMaxHp(p), p.hp + 150); p.mp = Math.min(getMaxMp(p), p.mp + 30); return 'HP +150, MP +30'; },
        '복어회': function(p) { if (Math.random() < 0.1) { p.hp = Math.max(1, p.hp - 50); return '독에 중독됨'; } p.hp = Math.min(getMaxHp(p), p.hp + 250); return 'HP +250'; },
        '참치회': function(p) { p.hp = Math.min(getMaxHp(p), p.hp + 300); return 'HP +300'; },
        '대왕문어숙회': function(p) { p.hp = getMaxHp(p); p.mp = getMaxMp(p); return 'HP/MP 완전 회복'; },
        '용왕의 만찬': function(p) { p.hp = getMaxHp(p); p.mp = getMaxMp(p); return 'HP/MP 완전 회복'; }
    };
    if (effects[itemName]) return effects[itemName];
    var item = GameData && GameData.ItemDatabase ? GameData.ItemDatabase[itemName] : null;
    if (!item) return null;
    if (item.type !== 'consumable' && item.type !== 'food') return null;
    return function(p) {
        var eff = item.effect;
        if (eff === 'hp') {
            var v1 = item.value || 0;
            p.hp = Math.min(getMaxHp(p), p.hp + v1);
            return 'HP +' + v1;
        }
        if (eff === 'mp') {
            var v2 = item.value || 0;
            p.mp = Math.min(getMaxMp(p), p.mp + v2);
            return 'MP +' + v2;
        }
        if (eff === 'hpmp') {
            var h = item.hpValue || item.value || 0;
            var m = item.mpValue || item.value || 0;
            p.hp = Math.min(getMaxHp(p), p.hp + h);
            p.mp = Math.min(getMaxMp(p), p.mp + m);
            return 'HP +' + h + ', MP +' + m;
        }
        if (eff === 'fullhp') { p.hp = getMaxHp(p); return 'HP 완전 회복'; }
        if (eff === 'fullmp') { p.mp = getMaxMp(p); return 'MP 완전 회복'; }
        if (eff === 'fullhpmp') { p.hp = getMaxHp(p); p.mp = getMaxMp(p); return 'HP/MP 완전 회복'; }
        if (eff === 'poison' || eff === 'freeze' || eff === 'allDebuff') return item.description || '상태이상 해제';
        if (eff === 'revive') return item.description || '부활 효과 발동';
        if (eff === 'buff' || item.subtype === 'buff') return item.description || '버프 효과 적용';
        return item.description || '사용됨';
    };
}

function pickMonsterForLevel(level) {
    var list = [];
    for (var name in GameData.MonsterDatabase) {
        var m = GameData.MonsterDatabase[name];
        if (m.level >= level - 5 && m.level <= level + 5) list.push(m);
    }
    if (list.length === 0) {
        for (var n in GameData.MonsterDatabase) list.push(GameData.MonsterDatabase[n]);
    }
    return pickRandom(list);
}

function collectZoneMonsters(zoneName) {
    var zone = GameData.ZoneData && GameData.ZoneData[zoneName];
    if (!zone) return [];
    var names = [];
    if (zone.monsters && zone.monsters.length) names = names.concat(zone.monsters);
    if (zone.subZones) {
        for (var sz in zone.subZones) {
            var sub = zone.subZones[sz];
            if (sub && sub.monsters && sub.monsters.length) names = names.concat(sub.monsters);
        }
    }
    var list = [];
    for (var i = 0; i < names.length; i++) {
        var m = GameData.MonsterDatabase[names[i]];
        if (m) list.push(m);
    }
    return list;
}

function pickMonsterForZone(zoneName, level) {
    var list = collectZoneMonsters(zoneName);
    if (list.length === 0) return pickMonsterForLevel(level);
    var filtered = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].level >= level - 7 && list[i].level <= level + 7) filtered.push(list[i]);
    }
    return pickRandom(filtered.length ? filtered : list);
}

function getTreasureBoxKey(boxName) {
    var map = {
        '낡은 보물상자': '일반상자열쇠',
        '화려한 보물상자': '희귀상자열쇠',
        '전설의 보물상자': '전설상자열쇠',
        '찬란한 보물상자': '봉인의인장'
    };
    return map[boxName] || '';
}

function hashString(str) {
    var hash = 0;
    if (!str) return hash;
    for (var i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

function parseWeekIndex(key) {
    var parts = String(key || '').split('W');
    if (parts.length < 2) return 0;
    return parseInt(parts[1], 10) || 0;
}

function parseSeasonIndex(key) {
    var parts = String(key || '').split('-');
    if (parts.length < 2) return 0;
    return parseInt(parts[1], 10) || 0;
}

function getShopRotationConfig(shop) {
    if (shop && shop.rotation === false) return null;
    var rot = shop && shop.rotation ? shop.rotation : null;
    if (typeof rot === 'string') rot = { type: rot };
    if (!rot) {
        if (!shop || !shop.location || shop.location === '시작마을') return null;
        rot = { type: 'weekly', groups: 3 };
    }
    var type = rot.type || 'weekly';
    var groups = rot.groups || rot.groupCount || 3;
    var indexSource = type === 'season' ? parseSeasonIndex(getSeasonKey()) : parseWeekIndex(getWeekKey());
    var idx = indexSource - 1;
    if (idx < 0) idx = 0;
    if (groups > 0) idx = idx % groups;
    return { type: type, groups: groups, index: idx, key: type === 'season' ? getSeasonKey() : getWeekKey() };
}

function isEssentialShopItem(itemName) {
    var essentials = {
        '하급체력포션': true,
        '체력포션': true,
        '하급마나포션': true,
        '마나포션': true,
        '빵': true,
        '치즈': true,
        '사과': true,
        '고기구이': true,
        '생선구이': true,
        '샐러드': true,
        '꿀바른빵': true,
        '귀환의돌': true,
        '빈병': true
    };
    return !!essentials[itemName];
}

function isShopItemInRotation(shopName, entry, shop) {
    var itemName = entry.item || entry;
    if (entry && entry.always) return true;
    if (isEssentialShopItem(itemName)) return true;
    var rot = getShopRotationConfig(shop);
    if (!rot || rot.groups <= 1) return true;
    if (entry && entry.rotateGroup !== undefined && entry.rotateGroup !== null) {
        return (entry.rotateGroup % rot.groups) === rot.index;
    }
    var hash = Math.abs(hashString(String(shopName) + ':' + String(itemName)));
    return (hash % rot.groups) === rot.index;
}

function getShopRepFaction(shop, entry) {
    if (entry && entry.repFaction !== undefined) return entry.repFaction;
    if (shop && shop.repFaction !== undefined) return shop.repFaction;
    if (shop && shop.location && GameData.ZoneData && GameData.ZoneData[shop.location]) return shop.location;
    return null;
}

function getShopRepRequirement(shop, itemName, entry) {
    if (entry && entry.repRequired !== undefined && entry.repRequired !== null) return entry.repRequired;
    if (shop && shop.repRequired !== undefined && shop.repRequired !== null) return shop.repRequired;
    var rep = 0;
    var itemData = GameData.ItemDatabase && GameData.ItemDatabase[itemName];
    if (itemData && itemData.level) rep = Math.max(0, (itemData.level - 5) * 60);
    if (shop && shop.location && GameData.ZoneData && GameData.ZoneData[shop.location] && GameData.ZoneData[shop.location].level) {
        var zone = GameData.ZoneData[shop.location];
        if (zone.level && zone.level.min) rep = Math.max(rep, Math.max(0, (zone.level.min - 5) * 50));
    }
    if (rep < 200) rep = 0;
    if (rep > 3000) rep = 3000;
    return rep;
}

function getShopItemAccess(player, shopName, entry, shop) {
    var itemName = entry.item || entry;
    var rotationOk = isShopItemInRotation(shopName, entry, shop);
    var faction = getShopRepFaction(shop, entry);
    var repRequired = 0;
    var repOk = true;
    if (faction) {
        repRequired = getShopRepRequirement(shop, itemName, entry);
        if (repRequired > 0) {
            var curRep = (player.rep && player.rep[faction]) ? player.rep[faction] : 0;
            repOk = curRep >= repRequired;
        }
    }
    return { ok: rotationOk && repOk, rotationOk: rotationOk, repOk: repOk, repFaction: faction, repRequired: repRequired };
}

function getFilteredShopItems(player, shopName, shop) {
    var items = shop.items || [];
    var available = [];
    var lockedRotation = 0;
    var lockedRep = 0;
    var repFaction = null;
    var rotation = getShopRotationConfig(shop);
    for (var i = 0; i < items.length; i++) {
        var entry = items[i];
        var access = getShopItemAccess(player, shopName, entry, shop);
        if (access.ok) available.push(entry);
        else {
            if (!access.rotationOk) lockedRotation++;
            if (!access.repOk) lockedRep++;
        }
        if (!repFaction && access.repFaction) repFaction = access.repFaction;
    }
    return { items: available, lockedRotation: lockedRotation, lockedRep: lockedRep, rotation: rotation, repFaction: repFaction };
}

function getShopEntry(itemName) {
    if (!GameData || !GameData.ShopDatabase) return null;
    for (var shopName in GameData.ShopDatabase) {
        var shop = GameData.ShopDatabase[shopName];
        var items = shop.items || [];
        for (var i = 0; i < items.length; i++) {
            var entry = items[i];
            var name = entry.item || entry;
            if (name === itemName) return { shopName: shopName, entry: entry, shop: shop };
        }
    }
    return null;
}

function getNonShopItemNames() {
    if (!GameData || !GameData.ItemDatabase) return [];
    var names = [];
    for (var name in GameData.ItemDatabase) {
        if (!getShopEntry(name)) names.push(name);
    }
    names.sort();
    return names;
}

function getNonShopPetNames() {
    if (!GameData || !GameData.PetDatabase) return [];
    var names = [];
    for (var name in GameData.PetDatabase) {
        if (!getShopEntry(name)) names.push(name);
    }
    names.sort();
    return names;
}

function getNonShopMountNames() {
    if (!GameData || !GameData.MountDatabase) return [];
    var names = [];
    for (var name in GameData.MountDatabase) {
        if (!getShopEntry(name)) names.push(name);
    }
    names.sort();
    return names;
}

function resolveTreasureBoxName(name) {
    var map = {
        '보물상자': '낡은 보물상자',
        '일반보물상자': '낡은 보물상자',
        '희귀보물상자': '화려한 보물상자',
        '전설보물상자': '전설의 보물상자',
        '찬란한보물상자': '찬란한 보물상자'
    };
    return map[name] || name;
}

function rollTreasureBoxReward(boxTable) {
    var total = 0;
    for (var i = 0; i < boxTable.length; i++) total += (boxTable[i].weight || 0);
    var roll = Math.random() * total;
    var acc = 0;
    for (var j = 0; j < boxTable.length; j++) {
        acc += (boxTable[j].weight || 0);
        if (roll <= acc) return boxTable[j];
    }
    return boxTable[boxTable.length - 1];
}

function pickMiningReward(level) {
    if (level < 5) return '구리 조각';
    if (level < 10) return '철조각';
    if (level < 20) return '은광석';
    if (level < 30) return '금광석';
    return '희귀광석';
}

function pickHerbReward(level) {
    if (level < 5) return '약초';
    if (level < 10) return '치유초';
    if (level < 20) return '마력초';
    if (level < 30) return '신비초';
    return '영원의 꽃';
}

function pickFishByRarity(rarity) {
    var candidates = [];
    for (var name in GameData.FishDatabase) {
        if (GameData.FishDatabase[name].rarity === rarity) candidates.push(GameData.FishDatabase[name]);
    }
    if (candidates.length === 0) {
        for (var n in GameData.FishDatabase) candidates.push(GameData.FishDatabase[n]);
    }
    return candidates.length ? pickRandom(candidates) : null;
}

function rollFishRarity(level) {
    var weights = GameData.FishRarityWeights || {
        junk: 150, common: 400, uncommon: 250, rare: 120, epic: 50, legendary: 25, mythic: 5
    };
    var levelBonus = Math.min(50, level * 2);
    var adjusted = {
        junk: Math.max(20, weights.junk - levelBonus),
        common: weights.common,
        uncommon: weights.uncommon + Math.floor(levelBonus * 0.6),
        rare: weights.rare + Math.floor(levelBonus * 0.5),
        epic: weights.epic + Math.floor(levelBonus * 0.3),
        legendary: weights.legendary + Math.floor(levelBonus * 0.2),
        mythic: weights.mythic + Math.floor(levelBonus * 0.1)
    };
    var total = 0;
    for (var k in adjusted) total += adjusted[k];
    var roll = Math.random() * total;
    var acc = 0;
    for (var r in adjusted) {
        acc += adjusted[r];
        if (roll < acc) return r;
    }
    return 'common';
}

function rollFishSize() {
    var size = 0.7 + Math.random() * 1.6;
    return Math.round(size * 100) / 100;
}

function addFishBag(p, fishName, size) {
    if (!p.fishBag) p.fishBag = [];
    p.fishBag.push({ name: fishName, size: size });
}

function sellAllFish(p) {
    var total = 0;
    var mult = (Config && Config.FISH_SELL_MULT !== undefined) ? Config.FISH_SELL_MULT : 1;
    var bag = p.fishBag || [];
    for (var i = bag.length - 1; i >= 0; i--) {
        var f = bag[i];
        if (findItemCount(p, f.name) <= 0) { bag.splice(i, 1); continue; }
        var fdata = GameData.FishDatabase[f.name];
        var price = (fdata && fdata.basePrice ? fdata.basePrice : 5) * (f.size || 1);
        total += Math.floor(price * mult);
        removeItem(p, f.name, 1);
        bag.splice(i, 1);
    }
    for (var j = p.inventory.length - 1; j >= 0; j--) {
        var it = p.inventory[j];
        if (GameData.FishDatabase[it.name]) {
            var fdata2 = GameData.FishDatabase[it.name];
            var price2 = (fdata2 && fdata2.basePrice ? fdata2.basePrice : 5) * it.count;
            total += Math.floor(price2 * mult);
            p.inventory.splice(j, 1);
        }
    }
    return total;
}

function addAchievement(p, title, description, rewardTitle) {
    if (!p.achievements) p.achievements = [];
    for (var i = 0; i < p.achievements.length; i++) {
        if (p.achievements[i].title === title) return false;
    }
    p.achievements.push({ title: title, description: description, date: getDateKey() });
    if (rewardTitle) {
        if (!p.titles) p.titles = [];
        if (p.titles.indexOf(rewardTitle) === -1) p.titles.push(rewardTitle);
    }
    return true;
}

function addRep(p, faction, amount) {
    if (!p.rep) p.rep = {};
    p.rep[faction] = (p.rep[faction] || 0) + amount;
}

function getFactionShop(faction) {
    var shops = {
        '빛의 기사단': [
            { item: '성기사의 갑옷', cost: 3000, rep: 3000 },
            { item: '빛의 성검', cost: 8000, rep: 9000 }
        ],
        '그림자 연합': [
            { item: '그림자 단검', cost: 3000, rep: 3000 },
            { item: '암살자의 망토', cost: 6000, rep: 9000 }
        ],
        '불타는 사막': [
            { item: '사막 장인의 설계도', cost: 2500, rep: 1200 },
            { item: '사막 비단망토', cost: 4800, rep: 2000 }
        ],
        '얼어붙은 북방': [
            { item: '북방 제련 설계도', cost: 3000, rep: 1500 },
            { item: '빙설 수호망토', cost: 5200, rep: 2600 }
        ],
        '황혼의 습지': [
            { item: '습지 비전 설계도', cost: 3500, rep: 1800 },
            { item: '늪지 안개망토', cost: 5600, rep: 3000 }
        ],
        '천공의 산맥': [
            { item: '천공 공학 설계도', cost: 4200, rep: 2200 },
            { item: '천공 비행망토', cost: 6200, rep: 3600 }
        ],
        '고대의 폐허': [
            { item: '폐허 고대 설계도', cost: 5200, rep: 2600 },
            { item: '고대 서고망토', cost: 7200, rep: 4200 }
        ]
    };
    return shops[faction] || [];
}

function getWeeklyLockout(p, key) {
    if (!state.weeklyLockouts[p.name]) state.weeklyLockouts[p.name] = {};
    return state.weeklyLockouts[p.name][key] || null;
}

function setWeeklyLockout(p, key) {
    if (!state.weeklyLockouts[p.name]) state.weeklyLockouts[p.name] = {};
    state.weeklyLockouts[p.name][key] = getWeekKey();
}

function ensureSeason() {
    var seasonKey = getSeasonKey();
    if (!state.season || state.season.id !== seasonKey) {
        state.season = { id: seasonKey, started: getDateKey() };
    }
}

function getDungeonMap() {
    var base = {};
    if (GameData.DungeonData && Object.keys(GameData.DungeonData).length > 0) base = GameData.DungeonData;
    else if (GameData.DungeonSystemData && GameData.DungeonSystemData.dungeons) base = GameData.DungeonSystemData.dungeons;
    return mergeMaps(base, ExtraDungeons || {});
}

function recordSoloWeeklyClear(p, dungeonName) {
    var wk = getWeekKey();
    if (!state.soloWeekly[p.name] || state.soloWeekly[p.name].week !== wk) {
        state.soloWeekly[p.name] = { week: wk, clears: {}, total: 0 };
    }
    var entry = state.soloWeekly[p.name];
    entry.clears[dungeonName] = (entry.clears[dungeonName] || 0) + 1;
    entry.total = (entry.total || 0) + 1;
}

function formatSoloWeeklyRecord(p) {
    var wk = getWeekKey();
    var entry = state.soloWeekly[p.name];
    if (!entry || entry.week !== wk) return '이번 주 솔로 던전 기록이 없습니다.';
    var lines = ['[솔로 던전 주간 기록] ' + wk];
    lines.push('총 클리어: ' + (entry.total || 0));
    var list = [];
    for (var dn in entry.clears) list.push({ name: dn, count: entry.clears[dn] });
    list.sort(function(a, b) { return b.count - a.count; });
    for (var i = 0; i < list.length && i < 20; i++) {
        lines.push('- ' + list[i].name + ' x' + list[i].count);
    }
    return lines.join('\n');
}

function formatSoloRewardTable() {
    var lines = ['[솔로 던전 보상표]'];
    for (var i = 0; i < SoloDungeonRewardTable.length; i++) {
        var r = SoloDungeonRewardTable[i];
        lines.push(r.label + ': ' + r.rewards.join(', '));
    }
    return lines.join('\n');
}

function getShopRotationGroupIndex(shopName, entry, shop, groups) {
    if (!groups || groups <= 1) return 0;
    if (entry && entry.rotateGroup !== undefined && entry.rotateGroup !== null) {
        return (entry.rotateGroup % groups + groups) % groups;
    }
    var itemName = entry.item || entry;
    var hash = Math.abs(hashString(String(shopName) + ':' + String(itemName)));
    return hash % groups;
}

function buildShopRotationPreview(player, shopName, shop) {
    var rot = getShopRotationConfig(shop);
    if (!rot || rot.groups <= 1) return '로테이션이 적용되지 않은 상점입니다.';
    var items = shop.items || [];
    var groups = [];
    for (var g = 0; g < rot.groups; g++) groups.push([]);
    var always = [];
    for (var i = 0; i < items.length; i++) {
        var entry = items[i];
        var name = entry.item || entry;
        if (entry && entry.always) { always.push(name); continue; }
        if (isEssentialShopItem(name)) { always.push(name); continue; }
        var idx = getShopRotationGroupIndex(shopName, entry, shop, rot.groups);
        groups[idx].push(name);
    }
    var curIdx = rot.index;
    var nextIdx = (curIdx + 1) % rot.groups;
    var lines = ['[상점 로테이션] ' + shopName + ' (' + (rot.type === 'season' ? '시즌' : '주간') + ' ' + (curIdx + 1) + '/' + rot.groups + ')'];
    if (always.length) lines.push('항상 판매: ' + always.slice(0, 12).join(', ') + (always.length > 12 ? ' ...' : ''));
    lines.push('현재: ' + (groups[curIdx].length ? groups[curIdx].slice(0, 12).join(', ') : '없음') + (groups[curIdx].length > 12 ? ' ...' : ''));
    lines.push('다음: ' + (groups[nextIdx].length ? groups[nextIdx].slice(0, 12).join(', ') : '없음') + (groups[nextIdx].length > 12 ? ' ...' : ''));
    return lines.join('\n');
}

function snapshotEquipment(p) {
    var eq = p.equipment || {};
    var slots = ['weapon', 'armor', 'shield', 'helmet', 'gloves', 'boots', 'ring1', 'ring2', 'necklace', 'earring', 'belt', 'cloak'];
    var out = {};
    for (var i = 0; i < slots.length; i++) {
        var key = slots[i];
        var slot = eq[key] || { name: null };
        out[key] = {
            name: slot.name || null,
            enhance: slot.enhance || 0,
            rune: slot.rune || '',
            gem: slot.gem || '',
            durability: slot.durability,
            maxDurability: slot.maxDurability
        };
    }
    return out;
}

function applyEquipmentPreset(p, preset) {
    if (!preset) return { ok: false, applied: 0, skipped: 0 };
    var slots = ['weapon', 'armor', 'shield', 'helmet', 'gloves', 'boots', 'ring1', 'ring2', 'necklace', 'earring', 'belt', 'cloak'];
    var applied = 0;
    var skipped = 0;
    for (var i = 0; i < slots.length; i++) {
        var key = slots[i];
        var data = preset[key];
        if (!data || !data.name) { skipped++; continue; }
        if (findItemCount(p, data.name) <= 0) { skipped++; continue; }
        if (!p.equipment[key]) p.equipment[key] = { name: null };
        p.equipment[key].name = data.name;
        p.equipment[key].enhance = data.enhance || 0;
        p.equipment[key].rune = data.rune || '';
        if (key === 'weapon') p.equipment[key].gem = data.gem || '';
        if (data.maxDurability) p.equipment[key].maxDurability = data.maxDurability;
        if (data.durability !== undefined && data.durability !== null) p.equipment[key].durability = data.durability;
        if (p.equipment[key].name) {
            if (key === 'weapon' || key === 'armor' || key === 'shield' || key === 'helmet' || key === 'gloves' || key === 'boots') {
                ensureSlotDurability(p.equipment[key], p.equipment[key].name, key);
            }
        }
        applied++;
    }
    return { ok: true, applied: applied, skipped: skipped };
}

function normalizeName(name) {
    return (name || '').replace(/\s+/g, '');
}

function levenshteinDistance(a, b) {
    if (a === b) return 0;
    var alen = a.length, blen = b.length;
    if (alen === 0) return blen;
    if (blen === 0) return alen;
    var matrix = [];
    for (var i = 0; i <= alen; i++) {
        matrix[i] = [i];
    }
    for (var j = 1; j <= blen; j++) {
        matrix[0][j] = j;
    }
    for (var i2 = 1; i2 <= alen; i2++) {
        for (var j2 = 1; j2 <= blen; j2++) {
            var cost = a.charAt(i2 - 1) === b.charAt(j2 - 1) ? 0 : 1;
            matrix[i2][j2] = Math.min(
                matrix[i2 - 1][j2] + 1,
                matrix[i2][j2 - 1] + 1,
                matrix[i2 - 1][j2 - 1] + cost
            );
        }
    }
    return matrix[alen][blen];
}

function resolveDungeonName(input, dungeons) {
    if (!input) return { name: null, suggestion: null };
    if (dungeons[input]) return { name: input, suggestion: null };
    var norm = normalizeName(input);
    for (var key in dungeons) {
        if (normalizeName(key) === norm) return { name: key, suggestion: null };
    }
    var bestKey = null;
    var bestDist = 999;
    for (var key2 in dungeons) {
        var dist = levenshteinDistance(norm, normalizeName(key2));
        if (dist < bestDist) { bestDist = dist; bestKey = key2; }
    }
    if (bestKey && bestDist <= 1) return { name: bestKey, suggestion: null };
    return { name: null, suggestion: bestKey };
}

function getDungeonBoss(dungeon) {
    if (!dungeon || !dungeon.bosses || dungeon.bosses.length === 0) return null;
    for (var bi = 0; bi < dungeon.bosses.length; bi++) {
        var entry = dungeon.bosses[bi];
        if (entry && typeof entry === 'object' && entry.final) {
            var fixedName = entry.name || entry.id || entry;
            if (typeof fixedName !== 'string') fixedName = String(fixedName);
            var fixedBoss = GameData.MonsterDatabase[fixedName];
            if (fixedBoss) return fixedBoss;
            return {
                name: fixedName,
                hp: entry.hp || (300 + rand(0, 200)),
                att: entry.att || (35 + rand(0, 15)),
                def: entry.def || (10 + rand(0, 5)),
                exp: entry.exp || 120,
                gold: entry.gold || 80,
                level: entry.level || dungeon.minLevel || 10,
                items: entry.items || ['보물상자']
            };
        }
    }
    var bossEntry = pickRandom(dungeon.bosses);
    var bossName = bossEntry;
    if (bossEntry && typeof bossEntry === 'object') {
        if (bossEntry.name) bossName = bossEntry.name;
        else if (bossEntry.id) bossName = bossEntry.id;
    }
    if (typeof bossName !== 'string') bossName = String(bossName);
    var boss = GameData.MonsterDatabase[bossName];
    if (boss) return boss;
    if (bossEntry && typeof bossEntry === 'object') {
        var fallback = {
            name: bossName,
            hp: bossEntry.hp || (300 + rand(0, 200)),
            att: bossEntry.att || (35 + rand(0, 15)),
            def: bossEntry.def || (10 + rand(0, 5)),
            exp: bossEntry.exp || 120,
            gold: bossEntry.gold || 80,
            level: bossEntry.level || dungeon.minLevel || 10,
            items: bossEntry.items || ['보물상자']
        };
        return fallback;
    }
    return { name: bossName, hp: 300 + rand(0, 200), att: 35 + rand(0, 15), def: 10 + rand(0, 5), exp: 120, gold: 80, level: dungeon.minLevel || 10, items: ['보물상자'] };
}

function cloneMonsterData(m) {
    if (!m) return null;
    return {
        name: m.name,
        hp: m.hp,
        att: m.att,
        def: m.def,
        exp: m.exp,
        gold: m.gold,
        level: m.level,
        items: m.items ? m.items.slice() : []
    };
}

function scaleMonsterStats(mon, mult) {
    var m = cloneMonsterData(mon);
    if (!m) return null;
    var scale = mult || 1;
    var pack = (typeof scale === 'object') ? scale : null;
    var hpMul = pack ? (pack.hp || 1) : scale;
    var attMul = pack ? (pack.att || 1) : scale;
    var defMul = pack ? (pack.def || 1) : scale;
    var expMul = pack ? (pack.exp || 1) : scale;
    var goldMul = pack ? (pack.gold || 1) : scale;
    m.hp = Math.max(1, Math.floor((m.hp || 50) * hpMul));
    m.att = Math.max(1, Math.floor((m.att || 10) * attMul));
    m.def = Math.max(0, Math.floor((m.def || 5) * defMul));
    m.exp = Math.max(1, Math.floor((m.exp || 20) * expMul));
    m.gold = Math.max(1, Math.floor((m.gold || 10) * goldMul));
    return m;
}

function buildDungeonStages(dungeonName, dungeonData, diffKey, player, options) {
    var opts = options || {};
    var diffMult = (diffKey === '영웅') ? 1.5 : (diffKey === '신화' ? 2.2 : 1.0);
    var isRaid = !!opts.isRaid || (dungeonData && (dungeonData.type === 'raid' || dungeonData.type === 'mythic'));
    var baseStages = diffKey === '신화' ? 5 : (diffKey === '영웅' ? 4 : 3);
    if (isRaid) baseStages += 2;
    var totalStages = Math.max(3, baseStages + rand(0, 1));
    if (opts.stageCount !== undefined && opts.stageCount !== null) {
        totalStages = Math.max(2, Math.floor(opts.stageCount));
    }

    var zoneName = (dungeonData && dungeonData.zone) ? dungeonData.zone : (player.currentZone || '묘냥의 숲');
    var zone = GameData.ZoneData ? GameData.ZoneData[zoneName] : null;
    var trashPool = (dungeonData && dungeonData.monsters && dungeonData.monsters.length) ? dungeonData.monsters
        : (zone && zone.monsters && zone.monsters.length) ? zone.monsters
        : Object.keys(GameData.MonsterDatabase || {});
    if (!trashPool || trashPool.length === 0) trashPool = ['슬라임'];

    var bossCandidates = (dungeonData && dungeonData.bosses && dungeonData.bosses.length) ? dungeonData.bosses.slice() : [];
    var namedCandidates = bossCandidates.slice();

    var stages = [];
    var typePool = ['trash', 'named', 'midboss'];
    while (stages.length < totalStages - 1) {
        stages.push(typePool[rand(0, typePool.length - 1)]);
    }
    // ensure at least one named and one midboss if possible
    if (stages.indexOf('named') === -1) stages[0] = 'named';
    if (stages.indexOf('midboss') === -1 && stages.length > 1) stages[1] = 'midboss';
    // shuffle
    for (var i = stages.length - 1; i > 0; i--) {
        var j = rand(0, i);
        var tmp = stages[i]; stages[i] = stages[j]; stages[j] = tmp;
    }

    var stageList = [];
    var typeMult = { trash: 0.6, named: 0.85, midboss: 1.05, boss: 1.35 };
    if (isRaid) { typeMult.named += 0.1; typeMult.midboss += 0.15; typeMult.boss += 0.2; }

    var extraItems = (dungeonData && dungeonData.dropItems) ? dungeonData.dropItems : (opts.extraItems || []);
    for (var s = 0; s < stages.length; s++) {
        var t = stages[s];
        var namePick = (t === 'trash') ? pickRandom(trashPool) : null;
        var bossEntry = null;
        if (t !== 'trash' && namedCandidates.length > 0) {
            bossEntry = pickRandom(namedCandidates);
            namePick = (bossEntry && typeof bossEntry === 'object') ? (bossEntry.name || bossEntry.id) : bossEntry;
        }
        if (!namePick) namePick = pickRandom(trashPool);
        var baseMon = GameData.MonsterDatabase[namePick] || bossEntry || { name: namePick, hp: 300, att: 35, def: 10, exp: 120, gold: 80, level: (dungeonData && dungeonData.level ? dungeonData.level.min : player.level) };
        var baseScale = diffMult * (typeMult[t] || 1);
        var scalePack = {
            hp: baseScale,
            att: baseScale,
            def: baseScale,
            exp: baseScale,
            gold: baseScale
        };
        if (opts.monsterMult) {
            scalePack.hp *= opts.monsterMult;
            scalePack.att *= opts.monsterMult;
            scalePack.def *= opts.monsterMult;
            scalePack.exp *= opts.monsterMult;
            scalePack.gold *= opts.monsterMult;
        }
        if (opts.monsterHpMul) scalePack.hp *= opts.monsterHpMul;
        if (opts.monsterAttMul) scalePack.att *= opts.monsterAttMul;
        if (opts.monsterDefMul) scalePack.def *= opts.monsterDefMul;
        var scaled = scaleMonsterStats(baseMon, scalePack);
        scaled.items = baseMon.items || (t === 'trash' ? [] : ['보물상자']);
        if (extraItems && extraItems.length) scaled.items = scaled.items.concat(extraItems);
        scaled = applyMountBalance(scaled, player);
        stageList.push({ type: t, monster: scaled });
    }

    var finalBoss = opts.finalBoss || getDungeonBoss(dungeonData || { bosses: bossCandidates, minLevel: player.level });
    var baseBossScale = diffMult * (typeMult.boss || 1);
    var bossScalePack = {
        hp: baseBossScale,
        att: baseBossScale,
        def: baseBossScale,
        exp: baseBossScale,
        gold: baseBossScale
    };
    if (opts.monsterMult) {
        bossScalePack.hp *= opts.monsterMult;
        bossScalePack.att *= opts.monsterMult;
        bossScalePack.def *= opts.monsterMult;
        bossScalePack.exp *= opts.monsterMult;
        bossScalePack.gold *= opts.monsterMult;
    }
    if (opts.monsterHpMul) bossScalePack.hp *= opts.monsterHpMul;
    if (opts.monsterAttMul) bossScalePack.att *= opts.monsterAttMul;
    if (opts.monsterDefMul) bossScalePack.def *= opts.monsterDefMul;
    var bossScaled = scaleMonsterStats(finalBoss, bossScalePack);
    bossScaled.items = finalBoss.items || ['보물상자'];
    if (extraItems && extraItems.length) bossScaled.items = bossScaled.items.concat(extraItems);
    bossScaled = applyMountBalance(bossScaled, player);
    stageList.push({ type: 'boss', monster: bossScaled });

    return { name: dungeonName, stages: stageList, index: 0, total: stageList.length, zone: zoneName };
}

function getStageLabel(stageType) {
    if (stageType === 'trash') return '잡몹';
    if (stageType === 'named') return '네임드';
    if (stageType === 'midboss') return '중간보스';
    return '보스';
}

function formatDungeonProgress(run) {
    if (!run || !run.stages || !run.stages.length) return '';
    var cur = run.stages[run.index];
    var label = getStageLabel(cur.type);
    return '진행도: ' + (run.index + 1) + '/' + run.total + ' (' + label + ')';
}

function isDungeonFinalStage(battle) {
    if (!battle || !battle.run) return true;
    return battle.run.index >= battle.run.total - 1;
}

function advanceDungeonStage(battle, player) {
    if (!battle || !battle.run) return null;
    battle.run.index += 1;
    var next = battle.run.stages[battle.run.index];
    battle.monster = next.monster;
    battle.hp = next.monster.hp;
    battle.playerLevel = player.level;
    return next;
}

function getWorldBoss() {
    var candidates = ['어비스 드래곤', '늑대왕펜리르', '데스나이트', '리치'];
    var name = pickRandom(candidates);
    var boss = GameData.MonsterDatabase[name];
    if (boss) return boss;
    return { name: name, hp: 5000, att: 150, def: 60, exp: 800, gold: 500, level: 40, items: ['전설의 보물상자'] };
}

function getDailyWorldBoss() {
    var candidates = ['어비스 드래곤', '늑대왕펜리르', '데스나이트', '리치', '서리 군주 킬라한', '사막의 군주 스콜피온 킹', '폭풍의 용 스톰레이지', '공허의 장군 보이드로드'];
    var name = pickRandom(candidates);
    var boss = GameData.MonsterDatabase[name];
    if (boss) return boss;
    return { name: name, hp: 8000, att: 220, def: 80, exp: 1500, gold: 900, level: 50, items: ['화려한 보물상자'] };
}

function ensureDailyWorldBoss() {
    if (!state.worldBossDaily) state.worldBossDaily = {};
    var today = getDateKey();
    if (!state.worldBossDaily.date || state.worldBossDaily.date !== today) {
        var boss = getDailyWorldBoss();
        var baseHp = Math.max(12000, Math.floor((boss.hp || 8000) * 25));
        state.worldBossDaily = {
            date: today,
            boss: boss,
            maxHp: baseHp,
            hp: baseHp,
            contributions: {},
            attacked: {},
            defeated: false,
            rewards: {}
        };
    }
    return state.worldBossDaily;
}

function getWorldBossRanking(contrib) {
    var list = [];
    for (var name in contrib) list.push({ name: name, dmg: contrib[name] });
    list.sort(function(a, b) { return b.dmg - a.dmg; });
    return list;
}

function formatWorldBossStatus(entry, viewerName) {
    if (!entry || !entry.boss) return '월드보스 정보가 없습니다.';
    var boss = entry.boss;
    var lines = [];
    lines.push('[오늘의 월드보스] ' + boss.name);
    lines.push('HP: ' + entry.hp + ' / ' + entry.maxHp + (entry.defeated ? ' (격파됨)' : ''));
    var total = 0;
    for (var c in entry.contributions) total += entry.contributions[c];
    lines.push('총 기여도: ' + total);
    var ranking = getWorldBossRanking(entry.contributions);
    if (ranking.length) {
        var top = ranking.slice(0, 5).map(function(r, i) { return (i + 1) + '. ' + r.name + ' (' + r.dmg + ')'; });
        lines.push('TOP 5: ' + top.join(' | '));
    } else {
        lines.push('TOP 5: 아직 없음');
    }
    var mine = entry.contributions[viewerName] || 0;
    lines.push('내 기여도: ' + mine);
    return lines.join('\n');
}

function calcWorldBossDamage(player, boss) {
    var att = getAttack(player);
    var randMul = 0.8 + Math.random() * 0.4;
    var raw = att * randMul + Math.floor(player.level * 3);
    var mitigated = raw - ((boss.def || 0) * 0.5);
    return Math.max(1, Math.floor(mitigated));
}

function updateQuestProgress(p, monsterName) {
    for (var qid in p.quests) {
        var qstate = p.quests[qid];
        var q = GameData.QuestDatabase[qid];
        if (!q || !q.objectives) continue;
        for (var i = 0; i < q.objectives.length; i++) {
            var obj = q.objectives[i];
            if (obj.type === 'kill' && obj.target === monsterName) {
                qstate.progress[obj.target] = (qstate.progress[obj.target] || 0) + 1;
            }
        }
    }
    if (p.dailyQuest && p.dailyQuest.target === monsterName) p.dailyQuest.progress++;
    if (p.weeklyQuest && p.weeklyQuest.target === monsterName) p.weeklyQuest.progress++;
}

function updateQuestTalkProgress(p, npcName) {
    for (var qid in p.quests) {
        var qstate = p.quests[qid];
        var q = GameData.QuestDatabase[qid];
        if (!q || !q.objectives) continue;
        for (var i = 0; i < q.objectives.length; i++) {
            var obj = q.objectives[i];
            if (obj.type === 'talk' && obj.target === npcName) {
                qstate.progress[obj.target] = (qstate.progress[obj.target] || 0) + 1;
            }
        }
    }
}

function generateDailyQuest(p) {
    var target = pickMonsterForLevel(p.level).name;
    return { target: target, count: 10, progress: 0, date: getDateKey(), reward: { gold: 200, exp: 100 } };
}

function generateWeeklyQuest(p) {
    var target = pickMonsterForLevel(p.level + 5).name;
    return { target: target, count: 50, progress: 0, week: getWeekKey(), reward: { gold: 1200, exp: 600 } };
}

// -------------------------------------------
// 6. 명령 처리
// -------------------------------------------
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (!msg || msg.length === 0) return;
    if (msg.indexOf(Config.PREFIX) !== 0) return;
    if (Config.IGNORE_PREFIX_REGEX.test(msg)) return;

    var input = msg.slice(1).trim();
    if (input.length === 0) return;
    var parts = input.split(/\s+/);
    var cmd = parts[0];
    var arg = parts.slice(1).join(' ');

    ensureSeason();
    ensureSeasonDungeon();

    // 도움말
    if (cmd === '도움말' || cmd === '명령어') {
        replier.reply(
            "[묘냥의 숲 - 점RPG]\n" +
            ".시작 [직업] .캐릭생성 <슬롯> [직업] .캐릭선택 <슬롯> .캐릭목록 .캐릭삭제 <슬롯> 확인\n" +
            ".정보 .지역목록 .지역이동 <이름> .사냥 .공격(.공경) .도망\n" +
            ".대화 <NPC>\n" +
            ".스킬목록 .스킬 <이름> .휴식 .일일보상 .랭킹\n" +
            ".파티생성 .레이드생성 .파티초대 <유저> .파티수락 <유저> .파티나가기 .파티역할 <탱/힐/딜>\n" +
            ".던전목록 .던전 <이름> [노말/영웅/신화] .인던 <이름> [난이도]\n" +
            ".초보던전 .중급던전 .정예사냥 .도전모드 <던전> [시간/노데미지] .변이던전 <던전> [난이도]\n" +
            ".결투 <유저> .결투수락 <유저> .전장참가 .전장맵 .전장이벤트 .시즌랭킹 .시즌보상\n" +
            ".시즌던전 .시즌던전랭킹 .시즌던전보상\n" +
            ".전문기술 .채광 .약초 .연금 <아이템> .대장 <아이템>\n" +
            ".경매목록 .경매등록 <아이템> <가격> [수량] .경매구매 <번호> .경매취소 <번호>\n" +
            ".업적 .칭호목록 .칭호설정 <이름>\n" +
            ".평판 <진영> .평판작업 <진영> .평판상점 <진영> .평판구매 <진영> <아이템>\n" +
            ".월드이벤트 .침공 .주간이벤트 .월드보스 .월드보스공격 .월드보스보상 .길드레이드\n" +
            ".길드생성 <이름> .길드초대 <유저> .길드수락 <유저> .길드정보 .길드기부 .길드상점 .길드구매 <아이템>\n" +
            ".세트효과 .세트요약\n" +
            ".룬목록 .룬각인 <부위> <룬> .룬확인\n" +
            ".튜토리얼 .추천루트\n" +
            ".인던로그 .레이드로그 .로그탭 인던|레이드 보스|난이도 [페이지] .로그상세 인던|레이드 [난이도=] [보스=]\n" +
            ".보상표 전장|레이드 .보상패널 전장|레이드 [짧게]\n" +
            ".집구매 .집정보\n" +
            ".특성 .특성찍기 <공격/방어/HP>\n" +
            ".탈것획득 .탈것목록 .탈것타기 <이름> .도감\n" +
            ".지역목록 .지역이동 <이름> .탐험\n" +
            ".강화 <무기/방어구/방패> .보석장착 <보석>\n" +
            ".수리 <무기/방어구/방패/전체>\n" +
            ".일일퀘스트 .주간퀘스트 .일일완료 .주간완료\n" +
            ".인벤 .장비 .장착 <아이템> .해제 <슬롯>\n" +
            ".사용 <아이템> .상점 <상점명> [페이지] .구매 <아이템> .판매 <아이템>\n" +
            ".낚시 .낚시정보 .낚시판매\n" +
            ".보물상자 <이름>\n" +
            ".비판매목록 [아이템|펫|탈것] [페이지]\n" +
            ".퀘스트목록 .퀘스트수락 <ID> .퀘스트현황 .퀘스트완료 <ID>\n" +
            ".제작 <아이템> .요리 <아이템>\n" +
            ".펫획득 .펫정보 .펫먹이 .펫훈련 .펫진화 .펫이름 <이름> .펫방생 .펫탐험\n" +
            ".타로카드 .타로상태 .타로집중 <공격/방어/체력/드랍/경험/골드/치유>\n" +
            ".보물상자 <이름>"
        );
        return;
    }

    // 캐릭터 슬롯 목록
    if (cmd === '캐릭목록') {
        normalizeSlots(sender);
        var slotStateList = getSlotState(sender);
        var out = '[캐릭터 슬롯]\n';
        for (var si = 1; si <= Config.CHAR_SLOTS; si++) {
            var skey = String(si);
            var sp = slotStateList.slots[skey];
            var mark = (slotStateList.selected === skey) ? '★' : '-';
            if (sp) out += mark + ' 슬롯 ' + skey + ': ' + sp.name + ' / ' + sp.job + ' Lv.' + sp.level + '\n';
            else out += mark + ' 슬롯 ' + skey + ': (비어있음)\n';
        }
        replier.reply(out.trim() + buildNextActionHint('inventory'));
        return;
    }

    // 캐릭터 생성
    if (cmd === '캐릭생성') {
        normalizeSlots(sender);
        var slotStateCreate = getSlotState(sender);
        var args = arg ? arg.split(/\s+/) : [];
        var slotId = null;
        var jobArg = '';
        if (args.length > 0 && /^\d+$/.test(args[0])) {
            slotId = args[0];
            jobArg = args.slice(1).join(' ');
        } else {
            jobArg = arg;
        }
        if (!slotId) {
            for (var si2 = 1; si2 <= Config.CHAR_SLOTS; si2++) {
                var k = String(si2);
                if (!slotStateCreate.slots[k]) { slotId = k; break; }
            }
        }
        if (!slotId || Number(slotId) < 1 || Number(slotId) > Config.CHAR_SLOTS) {
            replier.reply('슬롯 범위: 1~' + Config.CHAR_SLOTS);
            return;
        }
        if (slotStateCreate.slots[slotId]) { replier.reply('이미 캐릭터가 있는 슬롯입니다.'); return; }
        var jobNameC = jobArg && GameData.JobDatabase[jobArg] ? jobArg : '초보자';
        var jobC = getJob(jobNameC);
        if (!jobC) { replier.reply('직업 정보를 불러올 수 없습니다.'); return; }
        var newP = buildNewPlayer(sender, jobNameC);
        slotStateCreate.slots[slotId] = newP;
        slotStateCreate.selected = slotId;
        state.players[sender] = newP;
        saveState();
        replier.reply('캐릭터 생성 완료! 슬롯 ' + slotId + ' 선택됨. 직업: ' + newP.job);
        return;
    }

    // 캐릭터 선택
    if (cmd === '캐릭선택') {
        var selectId = arg && arg.trim();
        if (!selectId) { replier.reply('사용: .캐릭선택 <슬롯번호>'); return; }
        normalizeSlots(sender);
        var slotStateSelect = getSlotState(sender);
        if (!slotStateSelect.slots[selectId]) { replier.reply('해당 슬롯이 비어있습니다.'); return; }
        slotStateSelect.selected = selectId;
        state.players[sender] = slotStateSelect.slots[selectId];
        saveState();
        replier.reply('슬롯 ' + selectId + ' 캐릭터로 전환했습니다.');
        return;
    }

    // 캐릭터 삭제
    if (cmd === '캐릭삭제') {
        var delArg = arg && arg.trim();
        if (!delArg) { replier.reply('사용: .캐릭삭제 <슬롯번호> 확인'); return; }
        var delParts = delArg.split(/\s+/);
        var delId = delParts[0];
        var confirmToken = delParts[1] || '';
        if (confirmToken !== '확인') { replier.reply('삭제 보호: .캐릭삭제 <슬롯번호> 확인'); return; }
        normalizeSlots(sender);
        var slotStateDel = getSlotState(sender);
        if (!slotStateDel.slots[delId]) { replier.reply('해당 슬롯이 비어있습니다.'); return; }
        if (state.battles[sender]) { replier.reply('전투 중에는 삭제할 수 없습니다.'); return; }
        var remain = 0;
        for (var si4 = 1; si4 <= Config.CHAR_SLOTS; si4++) {
            var rk = String(si4);
            if (slotStateDel.slots[rk]) remain++;
        }
        if (remain <= 1) { replier.reply('삭제 보호: 마지막 캐릭터는 삭제할 수 없습니다.'); return; }
        slotStateDel.slots[delId] = null;
        if (slotStateDel.selected === delId) {
            slotStateDel.selected = '';
            delete state.players[sender];
            for (var si3 = 1; si3 <= Config.CHAR_SLOTS; si3++) {
                var k2 = String(si3);
                if (slotStateDel.slots[k2]) {
                    slotStateDel.selected = k2;
                    state.players[sender] = slotStateDel.slots[k2];
                    break;
                }
            }
        }
        saveState();
        replier.reply('슬롯 ' + delId + ' 캐릭터를 삭제했습니다.');
        return;
    }

    // 시작
    if (cmd === '시작' || cmd === '가입') {
        normalizeSlots(sender);
        var slotStateStart = getSlotState(sender);
        var emptySlot = null;
        for (var s1 = 1; s1 <= Config.CHAR_SLOTS; s1++) {
            var k3 = String(s1);
            if (!slotStateStart.slots[k3]) { emptySlot = k3; break; }
        }
        if (!emptySlot) { replier.reply('슬롯이 가득 찼습니다. .캐릭삭제 후 다시 시도하세요.'); return; }
        var jobName = arg && GameData.JobDatabase[arg] ? arg : '초보자';
        var job = getJob(jobName);
        if (!job) { replier.reply('직업 정보를 불러올 수 없습니다.'); return; }
        var p = buildNewPlayer(sender, jobName);
        slotStateStart.slots[emptySlot] = p;
        slotStateStart.selected = emptySlot;
        state.players[sender] = p;
        saveState();
        replier.reply('캐릭터 생성 완료! 슬롯 ' + emptySlot + ' 선택됨. 직업: ' + p.job + '\n.정보 로 확인하세요.');
        return;
    }

    var player = ensurePlayer(sender);
    if (!player) { replier.reply('먼저 .시작 을 입력하세요.'); return; }

    // 파티 생성
    if (cmd === '파티생성' || cmd === '레이드생성') {
        if (getPartyId(sender)) { replier.reply('이미 파티/레이드에 참여 중입니다.'); return; }
        var isRaid = (cmd === '레이드생성');
        state.parties[sender] = { leader: sender, members: [sender], roles: {}, isRaid: isRaid };
        state.partyOf[sender] = sender;
        replier.reply((isRaid ? '레이드' : '파티') + ' 생성 완료.');
        return;
    }

    // 파티 초대
    if (cmd === '파티초대') {
        var target = arg;
        if (!target) { replier.reply('사용: .파티초대 <유저>'); return; }
        var party = getParty(sender);
        if (!party || party.leader !== sender) { replier.reply('파티장만 초대할 수 있습니다.'); return; }
        var maxSize = party.isRaid ? Config.RAID_MAX : Config.PARTY_MAX;
        if (party.members.length >= maxSize) { replier.reply('인원이 가득 찼습니다.'); return; }
        state.partyInvites[target] = sender;
        replier.reply(target + ' 님에게 초대 보냄.');
        return;
    }

    // 파티 수락
    if (cmd === '파티수락') {
        var leader = arg;
        if (!leader) { replier.reply('사용: .파티수락 <유저>'); return; }
        if (getPartyId(sender)) { replier.reply('이미 파티/레이드에 참여 중입니다.'); return; }
        if (state.partyInvites[sender] !== leader) { replier.reply('초대가 없습니다.'); return; }
        var party2 = state.parties[leader];
        if (!party2) { replier.reply('파티가 존재하지 않습니다.'); return; }
        var maxSize2 = party2.isRaid ? Config.RAID_MAX : Config.PARTY_MAX;
        if (party2.members.length >= maxSize2) { replier.reply('인원이 가득 찼습니다.'); return; }
        party2.members.push(sender);
        state.partyOf[sender] = leader;
        delete state.partyInvites[sender];
        saveState();
        replier.reply('파티 참여 완료.');
        return;
    }

    // 파티 나가기
    if (cmd === '파티나가기') {
        var pid = getPartyId(sender);
        if (!pid) { replier.reply('파티에 속해있지 않습니다.'); return; }
        var party3 = state.parties[pid];
        if (!party3) { state.partyOf[sender] = ""; return; }
        if (party3.leader === sender) {
            for (var m = 0; m < party3.members.length; m++) delete state.partyOf[party3.members[m]];
            delete state.parties[pid];
            replier.reply('파티를 해산했습니다.');
        } else {
            for (var i = 0; i < party3.members.length; i++) {
                if (party3.members[i] === sender) party3.members.splice(i, 1);
            }
            delete party3.roles[sender];
            delete state.partyOf[sender];
            replier.reply('파티에서 나갔습니다.');
        }
        saveState();
        return;
    }

    // 파티 역할
    if (cmd === '파티역할') {
        var role = arg;
        if (role !== '탱' && role !== '힐' && role !== '딜') { replier.reply('역할: 탱/힐/딜'); return; }
        var party4 = getParty(sender);
        if (!party4) { replier.reply('파티에 속해있지 않습니다.'); return; }
        party4.roles[sender] = role;
        saveState();
        replier.reply('역할 설정: ' + role);
        return;
    }

    // 파티 정보
    if (cmd === '파티정보') {
        var party5 = getParty(sender);
        if (!party5) { replier.reply('파티에 속해있지 않습니다.'); return; }
        var msg = (party5.isRaid ? '[레이드]' : '[파티]') + '\n';
        for (var pm = 0; pm < party5.members.length; pm++) {
            var mem = party5.members[pm];
            var role2 = party5.roles[mem] || '-';
            var roleIcon = (role2 === '탱') ? '🛡️ 탱' : (role2 === '힐') ? '💚 힐' : (role2 === '딜') ? '⚔️ 딜' : '—';
            msg += '- ' + mem + ' (' + roleIcon + ')\n';
        }
        replier.reply(msg.trim() + buildNextActionHint('party'));
        return;
    }

    // 결투 신청
    if (cmd === '결투') {
        var targetDuel = arg;
        if (!targetDuel) { replier.reply('사용: .결투 <유저>'); return; }
        state.duelRequests[targetDuel] = sender;
        replier.reply(targetDuel + ' 님에게 결투 신청.');
        return;
    }

    // 결투 수락
    if (cmd === '결투수락') {
        var dueler = arg;
        if (!dueler) { replier.reply('사용: .결투수락 <유저>'); return; }
        if (state.duelRequests[sender] !== dueler) { replier.reply('결투 신청이 없습니다.'); return; }
        var p1 = state.players[dueler];
        var p2 = player;
        if (!p1) { replier.reply('상대가 없습니다.'); return; }
        normalizePlayer(p1);
        var power1 = getAttack(p1) + getDefense(p1) + Math.floor(getMaxHp(p1) / 10);
        var power2 = getAttack(p2) + getDefense(p2) + Math.floor(getMaxHp(p2) / 10);
        var winner = (Math.random() * (power1 + power2) < power1) ? p1 : p2;
        var loser = (winner === p1) ? p2 : p1;
        var winName = winner.name;
        var loseName = loser.name;
        if (!state.pvpStreak) state.pvpStreak = {};
        var winStreak = (state.pvpStreak[winName] || 0) + 1;
        var loseStreak = Math.min(0, (state.pvpStreak[loseName] || 0) - 1);
        state.pvpStreak[winName] = winStreak;
        state.pvpStreak[loseName] = loseStreak;
        var winFactor = Math.max(0.5, 1 - Math.max(0, winStreak - 3) * 0.1);
        var loseFactor = Math.max(0.4, 1 - Math.max(0, Math.abs(loseStreak) - 3) * 0.15);
        var winRating = Math.floor(Config.PVP_WIN_RATING * winFactor);
        var loseRating = Math.floor(Config.PVP_LOSE_RATING * loseFactor);
        state.pvpRating[winName] = (state.pvpRating[winName] || 1000) + winRating;
        state.pvpRating[loseName] = Math.max(0, (state.pvpRating[loseName] || 1000) - loseRating);
        var baseGold = 100;
        var goldBonus = Math.floor(baseGold * winFactor);
        winner.gold += baseGold + goldBonus;
        winner.stats.pvpWins = (winner.stats.pvpWins || 0) + 1;
        if (winner.stats.pvpWins >= 3) addAchievement(winner, '전장의 지배자', 'PVP 3승 달성', '전장의 지배자');
        delete state.duelRequests[sender];
        saveState();
        replier.reply('결투 결과: ' + winName + ' 승리!');
        return;
    }

    // 전장 맵
    if (cmd === '전장맵') {
        var outM = '[전장 맵]\n';
        for (var mi = 0; mi < BattlegroundMaps.length; mi++) outM += '- ' + BattlegroundMaps[mi].name + ' (' + BattlegroundMaps[mi].desc + ')\n';
        replier.reply(outM.trim());
        return;
    }

    // 전장 이벤트
    if (cmd === '전장이벤트') {
        var today = getDateKey();
        if (!state.bgEvent.date || state.bgEvent.date !== today) {
            var ev = pickRandom(BattlegroundEvents);
            state.bgEvent = { name: ev.name, bonus: ev.bonus, date: today };
            saveState();
        }
        replier.reply('[전장 이벤트]\n' + state.bgEvent.name + ' - ' + (state.bgEvent.bonus.reward ? '보상 보너스' : '전투 보너스'));
        return;
    }

    // 전장 참가
    if (cmd === '전장참가') {
        for (var q = 0; q < state.bgQueue.length; q++) {
            if (state.bgQueue[q] === sender) { replier.reply('이미 대기 중입니다.'); return; }
        }
        state.bgQueue.push(sender);
        if (state.bgQueue.length >= 2) {
            var a = state.bgQueue.shift();
            var b = state.bgQueue.shift();
            var pa = state.players[a];
            var pb = state.players[b];
            if (!pa || !pb) { saveState(); replier.reply('매칭 실패.'); return; }
            normalizePlayer(pa); normalizePlayer(pb);
            var map = pickRandom(BattlegroundMaps);
            var powA = getAttack(pa) + getDefense(pa) + Math.floor(getMaxHp(pa) / 10);
            var powB = getAttack(pb) + getDefense(pb) + Math.floor(getMaxHp(pb) / 10);
            var win = (Math.random() * (powA + powB) < powA) ? pa : pb;
            var lose = (win === pa) ? pb : pa;
            var evBonus = (state.bgEvent && state.bgEvent.bonus && state.bgEvent.bonus.reward) ? state.bgEvent.bonus.reward : 1;
            win.gold += Math.floor(Config.BG_REWARD_GOLD * map.rewardMult * evBonus);
            addExp(win, Math.floor(Config.BG_REWARD_EXP * map.rewardMult * evBonus));
            state.pvpRating[win.name] = (state.pvpRating[win.name] || 1000) + Config.PVP_WIN_RATING;
            state.pvpRating[lose.name] = Math.max(0, (state.pvpRating[lose.name] || 1000) - Config.PVP_LOSE_RATING);
            win.stats.pvpWins = (win.stats.pvpWins || 0) + 1;
            if (win.stats.pvpWins >= 3) addAchievement(win, '전장의 지배자', 'PVP 3승 달성', '전장의 지배자');
            var bgRewards = rollRewardTable(BattlegroundRewards);
            for (var br = 0; br < bgRewards.length; br++) addItem(win, bgRewards[br].item, bgRewards[br].qty);
            saveState();
            replier.reply('전장 맵: ' + map.name + '\n전장 결과: ' + win.name + ' 승리!');
            return;
        }
        saveState();
        replier.reply('전장 대기열에 참가했습니다.');
        return;
    }

    // 시즌 랭킹
    if (cmd === '시즌랭킹') {
        var listS = [];
        for (var n in state.pvpRating) listS.push({ name: n, rating: state.pvpRating[n] });
        listS.sort(function(a, b) { return b.rating - a.rating; });
        var outS = '[시즌 랭킹]\n';
        for (var r2 = 0; r2 < listS.length && r2 < 10; r2++) outS += (r2 + 1) + '. ' + listS[r2].name + ' (' + listS[r2].rating + ')\n';
        replier.reply(outS.trim());
        return;
    }

    // 시즌 보상
    if (cmd === '시즌보상') {
        var sid = state.season.id;
        var key = sid + ':' + sender;
        if (state.seasonRewards[key]) { replier.reply('이번 시즌 보상을 이미 받았습니다.'); return; }
        var rating = state.pvpRating[sender] || 1000;
        if (rating < 1400) { replier.reply('보상 기준 미달 (레이팅 1400 필요)'); return; }
        state.seasonRewards[key] = true;
        player.gold += 2000;
        if (player.titles.indexOf('전장의 지배자') === -1) player.titles.push('전장의 지배자');
        saveState();
        replier.reply('시즌 보상 수령 완료!');
        return;
    }

    // 정보
    if (cmd === '정보') {
        replier.reply(
            "[" + player.name + "]\n" +
            "직업: " + player.job + "\n" +
            "레벨: " + player.level + " (" + player.exp + "/" + player.maxExp + ")\n" +
            "💚 HP: " + player.hp + "/" + getMaxHp(player) + "\n" +
            "🔷 MP: " + player.mp + "/" + getMaxMp(player) + "\n" +
            "공격/방어: " + getAttack(player) + "/" + getDefense(player) + "\n" +
            "골드: " + player.gold + "\n" +
            "낚시: Lv." + player.fishingLevel + " (" + player.fishingExp + "/" + player.maxFishingExp + ")\n" +
            "지역: " + (player.currentZone || '묘냥의 숲') + "\n" +
            "칭호: " + (player.activeTitle || '없음') + "\n" +
            buildDurabilityStatus(player) +
            buildNextActionHint('status')
        );
        return;
    }

    // 대화
    if (cmd === '대화') {
        var zoneNameTalk = player.currentZone || '묘냥의 숲';
        var zoneTalk = GameData.ZoneData ? GameData.ZoneData[zoneNameTalk] : null;
        var npcs = (zoneTalk && zoneTalk.npcs) ? zoneTalk.npcs.slice() : [];
        if (!arg) {
            if (!npcs.length) { replier.reply('이 지역에는 NPC가 없습니다.'); return; }
            replier.reply('[NPC 목록 - ' + zoneNameTalk + ']\n' + npcs.join('\n') + buildNextActionHint('quest-progress'));
            return;
        }
        var npcName = arg;
        var exists = npcs.indexOf(npcName) !== -1;
        if (!exists && NPCDatabase && NPCDatabase[npcName]) exists = true;
        if (!exists) { replier.reply('해당 NPC가 없습니다. .대화 로 목록 확인'); return; }
        updateQuestTalkProgress(player, npcName);
        saveState();
        replier.reply(npcName + '와 대화했습니다.' + buildNextActionHint('quest-progress'));
        return;
    }

    // 튜토리얼
    if (cmd === '튜토리얼') {
        var tstate = getTutorialState(player);
        if (tstate.completed) {
            replier.reply('튜토리얼 완료!\n.추천루트 로 다음 목표를 확인하세요.' + buildNextActionHint('tutorial'));
            return;
        }
        replier.reply(formatTutorialProgress(player) + buildNextActionHint('tutorial'));
        return;
    }

    // 추천 루트
    if (cmd === '추천루트') {
        replier.reply(buildRecommendedRoute(player));
        return;
    }

    // 타로 카드
    if (cmd === '타로카드') {
        var entry = drawTarotCard(player);
        saveState();
        replier.reply('[오늘의 타로카드]\n' + formatTarotSpread(entry) + buildNextActionHint('tarot'));
        return;
    }

    if (cmd === '타로상태' || cmd === '타로카드상태') {
        var cur = getTarotState(player);
        if (!cur) { replier.reply('오늘의 타로카드가 없습니다. .타로카드'); return; }
        replier.reply('[타로카드 상태]\n' + formatTarotSpread(cur) + buildNextActionHint('tarot'));
        return;
    }

    if (cmd === '타로집중') {
        var focusEntry = getTarotState(player);
        if (!focusEntry) { replier.reply('오늘의 타로카드가 없습니다. .타로카드'); return; }
        if (!arg) {
            var focusLine = formatTarotFocus(focusEntry);
            var baseMsg = '사용: .타로집중 <공격/방어/체력/드랍/경험/골드/치유>';
            if (focusLine) baseMsg += '\n현재 ' + focusLine;
            replier.reply(baseMsg + buildNextActionHint('tarot'));
            return;
        }
        var focusType = normalizeTarotFocusType(arg);
        if (!focusType) {
            replier.reply('집중 옵션: 공격/방어/체력/드랍/경험/골드/치유');
            return;
        }
        if (focusEntry.focus && focusEntry.focus.type) {
            replier.reply('오늘은 이미 타로 집중을 선택했습니다.\n' + formatTarotFocus(focusEntry) + buildNextActionHint('tarot'));
            return;
        }
        focusEntry.focus = { type: focusType };
        saveState();
        var focusInfo = getTarotFocusInfo(focusType);
        var msg = '타로 집중 적용: ' + (focusInfo ? focusInfo.label : focusType);
        if (focusInfo && focusInfo.text) msg += ' (' + focusInfo.text + ')';
        replier.reply(msg + '\n' + formatTarotSpread(focusEntry) + buildNextActionHint('tarot'));
        return;
    }

    // 아이템정보
    if (cmd === '아이템정보') {
        var itemName = arg;
        if (!itemName) { replier.reply('사용: .아이템정보 <이름>'); return; }
        var data = GameData.ItemDatabase && GameData.ItemDatabase[itemName];
        if (!data) { replier.reply('아이템 정보가 없습니다.'); return; }
        var lines = [];
        lines.push('[아이템 정보] ' + itemName);
        if (data.type) lines.push('분류: ' + data.type + (data.subtype ? '/' + data.subtype : ''));
        if (data.level) lines.push('레벨: ' + data.level);
        if (data.att) lines.push('공격력: ' + data.att);
        if (data.def) lines.push('방어력: ' + data.def);
        if (data.magic) lines.push('마력: ' + data.magic);
        if (data.hp) lines.push('HP: ' + data.hp);
        if (data.price !== undefined) lines.push('가격: ' + data.price + 'G');
        if (data.description) lines.push('설명: ' + data.description);
        if (data.obtainMethod) lines.push('획득: ' + data.obtainMethod);
        replier.reply(lines.join('\n') + buildNextActionHint('item-info'));
        return;
    }

    // 전문기술
    if (cmd === '전문기술') {
        var prof = player.professions || {};
        replier.reply('[전문기술]\n채광 Lv.' + (prof.mining || 1) + '\n약초 Lv.' + (prof.herbal || 1) + '\n연금 Lv.' + (prof.alchemy || 1) + '\n대장 Lv.' + (prof.blacksmith || 1) + '\n요리 Lv.' + (prof.cooking || 1) + buildNextActionHint('profession'));
        return;
    }

    // 채광
    if (cmd === '채광') {
        var mReward = pickMiningReward(player.professions.mining || 1);
        addItem(player, mReward, 1);
        if (Math.random() < 0.1) addItem(player, rollRareMaterial(), 1);
        player.professions.mining += 1;
        saveState();
        replier.reply('채광 성공: ' + mReward + ' 획득!' + buildNextActionHint('gather'));
        return;
    }

    // 약초
    if (cmd === '약초') {
        var hReward = pickHerbReward(player.professions.herbal || 1);
        addItem(player, hReward, 1);
        if (Math.random() < 0.1) addItem(player, rollRareMaterial(), 1);
        player.professions.herbal += 1;
        saveState();
        replier.reply('채집 성공: ' + hReward + ' 획득!' + buildNextActionHint('gather'));
        return;
    }

    // 연금
    if (cmd === '연금') {
        var alchemyItem = arg;
        if (!alchemyItem) { replier.reply('사용: .연금 <아이템>'); return; }
        if (alchemyItem !== '포션' && alchemyItem !== '마나 포션' && alchemyItem !== '엘릭서') { replier.reply('연금 가능: 포션/마나 포션/엘릭서'); return; }
        var need = (alchemyItem === '엘릭서') ? 2 : 1;
        if (findItemCount(player, '약초') < need && findItemCount(player, '치유초') < need) { replier.reply('재료 부족'); return; }
        if (findItemCount(player, '약초') >= need) removeItem(player, '약초', need); else removeItem(player, '치유초', need);
        addItem(player, alchemyItem, 1);
        player.professions.alchemy += 1;
        saveState();
        replier.reply('연금 제작 완료: ' + alchemyItem);
        return;
    }

    // 대장
    if (cmd === '대장') {
        var smithItem = arg;
        if (!smithItem) { replier.reply('사용: .대장 <아이템>'); return; }
        if (smithItem !== '철검' && smithItem !== '강철검') { replier.reply('대장 제작: 철검/강철검'); return; }
        var needOre = (smithItem === '강철검') ? '철조각' : '구리 조각';
        var needCnt = (smithItem === '강철검') ? 3 : 2;
        if (findItemCount(player, needOre) < needCnt) { replier.reply('재료 부족'); return; }
        removeItem(player, needOre, needCnt);
        addItem(player, smithItem, 1);
        player.professions.blacksmith += 1;
        saveState();
        replier.reply('대장 제작 완료: ' + smithItem);
        return;
    }

    // 일일보상
    if (cmd === '일일보상') {
        var today = getDateKey();
        if (state.daily[sender] === today) { replier.reply('오늘 보상은 이미 받았습니다.'); return; }
        state.daily[sender] = today;
        var bonusGold = Math.floor(player.level * 15);
        var bonusExp = Math.floor(player.level * 8);
        var activityBonusGold = 0;
        var activityBonusExp = 0;
        if (player.stats.kills > 0) { activityBonusGold += 100; activityBonusExp += 50; }
        if (player.stats.fishing > 0) { activityBonusGold += 80; activityBonusExp += 40; }
        if (player.stats.dungeons > 0) { activityBonusGold += 200; activityBonusExp += 120; }
        var totalGold = Config.DAILY_GOLD + bonusGold + activityBonusGold;
        var totalExp = Config.DAILY_EXP + bonusExp + activityBonusExp;
        player.gold += totalGold;
        addExp(player, totalExp);
        saveState();
        replier.reply('일일보상 지급! 골드 +' + totalGold + ', EXP +' + totalExp);
        return;
    }

    // 휴식
    if (cmd === '휴식') {
        var lastRest = state.lastRest[sender] || 0;
        var now = Date.now();
        if (now - lastRest < Config.REST_COOLDOWN_MS) {
            var sec = Math.ceil((Config.REST_COOLDOWN_MS - (now - lastRest)) / 1000);
            replier.reply('휴식 대기: ' + sec + '초');
            return;
        }
        state.lastRest[sender] = now;
        player.hp = getMaxHp(player);
        player.mp = getMaxMp(player);
        saveState();
        replier.reply('휴식 완료! HP/MP가 회복되었습니다.');
        return;
    }

    // 랭킹
    if (cmd === '랭킹') {
        var listRank = [];
        for (var name in state.players) listRank.push(state.players[name]);
        listRank.sort(function(a, b) {
            if (b.level !== a.level) return b.level - a.level;
            return b.exp - a.exp;
        });
        var outRank = '[랭킹]\n';
        for (var r = 0; r < listRank.length && r < 10; r++) {
            outRank += (r + 1) + '. ' + listRank[r].name + ' Lv.' + listRank[r].level + '\n';
        }
        replier.reply(outRank.trim());
        return;
    }

    // 보상표
    if (cmd === '보상표') {
        if (!arg) { replier.reply('사용: .보상표 전장|레이드'); return; }
        if (arg === '전장') {
            var outB = '[전장 보상]\n';
            for (var iB = 0; iB < BattlegroundRewards.length; iB++) outB += '- ' + BattlegroundRewards[iB].item + ' x' + (BattlegroundRewards[iB].qty || 1) + ' (' + Math.floor(BattlegroundRewards[iB].chance * 100) + '%)\n';
            outB += '\n[전장 이벤트] 보상 +15% (불길의 축복)';
            replier.reply(outB.trim());
            return;
        }
        if (arg === '레이드') {
            var outR = '[길드 레이드 보상]\n';
            for (var iR = 0; iR < GuildRaidRewards.length; iR++) outR += '- ' + GuildRaidRewards[iR].item + ' x' + (GuildRaidRewards[iR].qty || 1) + ' (' + Math.floor(GuildRaidRewards[iR].chance * 100) + '%)\n';
            outR += '\n[난이도 배율]\n노말 x1.0 / 영웅 x1.5 / 신화 x2.2';
            replier.reply(outR.trim());
            return;
        }
        replier.reply('사용: .보상표 전장|레이드');
        return;
    }

    // 보상 패널
    if (cmd === '보상패널') {
        var argsP = arg.split(/\s+/);
        var mode = argsP[1] || '';
        if (!argsP[0]) { replier.reply('사용: .보상패널 전장|레이드 [짧게]'); return; }
        if (argsP[0] === '전장') {
            var panelB = '[전장 보상 패널]\n';
            if (mode === '짧게') {
                panelB += '기본 보상: 골드 ' + Config.BG_REWARD_GOLD + ', EXP ' + Config.BG_REWARD_EXP + '\n';
                panelB += '맵 보너스: x1.0~x1.2, 이벤트 보너스 +15%\n';
                panelB += '드랍: ' + BattlegroundRewards.length + '종';
            } else {
                panelB += '기본 보상: 골드 ' + Config.BG_REWARD_GOLD + ', EXP ' + Config.BG_REWARD_EXP + '\n';
                panelB += '맵 보너스: 고대 전장 x1.0 / 서리 협곡 x1.1 / 불타는 사원 x1.2\n';
                panelB += '이벤트 보너스: 불길의 축복 보상 +15%\n\n';
                panelB += '[드랍 테이블]\n';
                for (var pB = 0; pB < BattlegroundRewards.length; pB++) {
                    panelB += '- ' + BattlegroundRewards[pB].item + ' x' + (BattlegroundRewards[pB].qty || 1) + ' (' + Math.floor(BattlegroundRewards[pB].chance * 100) + '%)\n';
                }
            }
            replier.reply(panelB.trim());
            return;
        }
        if (argsP[0] === '레이드') {
            var panelR = '[길드 레이드 보상 패널]\n';
            if (mode === '짧게') {
                panelR += '난이도 배율: x1.0/x1.5/x2.2, 주간 락아웃\n';
                panelR += '드랍: ' + GuildRaidRewards.length + '종';
            } else {
                panelR += '난이도 배율: 노말 x1.0 / 영웅 x1.5 / 신화 x2.2\n';
                panelR += '주간 락아웃 적용\n\n';
                panelR += '[드랍 테이블]\n';
                for (var pR = 0; pR < GuildRaidRewards.length; pR++) {
                    panelR += '- ' + GuildRaidRewards[pR].item + ' x' + (GuildRaidRewards[pR].qty || 1) + ' (' + Math.floor(GuildRaidRewards[pR].chance * 100) + '%)\n';
                }
            }
            replier.reply(panelR.trim());
            return;
        }
        replier.reply('사용: .보상패널 전장|레이드 [짧게]');
        return;
    }

    // 인던 로그
    if (cmd === '인던로그') {
        var logs = (state.logs.dungeon && state.logs.dungeon[sender]) ? state.logs.dungeon[sender] : [];
        if (logs.length === 0) { replier.reply('인던 로그가 없습니다.'); return; }
        replier.reply('[인던 로그]\n' + logs.slice(-10).join('\n'));
        return;
    }

    // 레이드 로그
    if (cmd === '레이드로그') {
        var logs2 = (state.logs.raid && state.logs.raid[sender]) ? state.logs.raid[sender] : [];
        if (logs2.length === 0) { replier.reply('레이드 로그가 없습니다.'); return; }
        replier.reply('[레이드 로그]\n' + logs2.slice(-10).join('\n'));
        return;
    }

    // 로그 탭 UI
    if (cmd === '로그탭') {
        var argsT = arg.split(/\s+/);
        var typeT = argsT[0];
        var tab = argsT[1];
        var page = parseInt(argsT[2], 10) || 1;
        if (typeT !== '인던' && typeT !== '레이드') { replier.reply('사용: .로그탭 인던|레이드 보스|난이도 [페이지]'); return; }
        if (tab !== '보스' && tab !== '난이도') { replier.reply('탭: 보스/난이도'); return; }
        var sourceT = (typeT === '인던') ? (state.logs.dungeon && state.logs.dungeon[sender]) : (state.logs.raid && state.logs.raid[sender]);
        sourceT = sourceT || [];
        if (sourceT.length === 0) { replier.reply('로그가 없습니다.'); return; }
        var listT = [];
        for (var t = 0; t < sourceT.length; t++) {
            var meta = parseLogMeta(sourceT[t]);
            if (tab === '보스') uniquePush(listT, meta.boss);
            if (tab === '난이도') uniquePush(listT, meta.difficulty);
        }
        if (listT.length === 0) { replier.reply('표시할 항목이 없습니다.'); return; }
        var pageSize = 5;
        var totalPages = Math.ceil(listT.length / pageSize);
        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;
        var start = (page - 1) * pageSize;
        var slice = listT.slice(start, start + pageSize);
        replier.reply('[' + typeT + ' 로그탭 - ' + tab + '] (페이지 ' + page + '/' + totalPages + ')\n' + slice.join('\n'));
        return;
    }

    // 로그 상세 보기
    if (cmd === '로그상세') {
        var argsD = arg.split(/\s+/);
        var typeD = argsD[0];
        if (typeD !== '인던' && typeD !== '레이드') { replier.reply('사용: .로그상세 인던|레이드 [난이도=] [보스=]'); return; }
        var diffD = '';
        var bossD = '';
        for (var d = 1; d < argsD.length; d++) {
            if (argsD[d].indexOf('난이도=') === 0) diffD = argsD[d].replace('난이도=', '');
            if (argsD[d].indexOf('보스=') === 0) bossD = argsD[d].replace('보스=', '');
        }
        var sourceD = (typeD === '인던') ? (state.logs.dungeon && state.logs.dungeon[sender]) : (state.logs.raid && state.logs.raid[sender]);
        sourceD = sourceD || [];
        var filteredD = [];
        for (var ld = 0; ld < sourceD.length; ld++) {
            var lineD = sourceD[ld];
            var metaD = parseLogMeta(lineD);
            if (diffD && metaD.difficulty !== diffD) continue;
            if (bossD && metaD.boss.indexOf(bossD) === -1) continue;
            filteredD.push(lineD);
        }
        if (filteredD.length === 0) { replier.reply('조건에 맞는 로그가 없습니다.'); return; }
        replier.reply('[' + typeD + ' 로그 상세]\n' + filteredD.slice(-10).join('\n'));
        return;
    }

    // 로그 필터
    if (cmd === '로그필터') {
        var argsL = arg.split(/\s+/);
        var type = argsL[0];
        if (type !== '인던' && type !== '레이드') { replier.reply('사용: .로그필터 인던|레이드 [난이도=신화] [보스=이름]'); return; }
        var difficulty = '';
        var boss = '';
        for (var iL = 1; iL < argsL.length; iL++) {
            if (argsL[iL].indexOf('난이도=') === 0) difficulty = argsL[iL].replace('난이도=', '');
            if (argsL[iL].indexOf('보스=') === 0) boss = argsL[iL].replace('보스=', '');
        }
        var source = (type === '인던') ? (state.logs.dungeon && state.logs.dungeon[sender]) : (state.logs.raid && state.logs.raid[sender]);
        source = source || [];
        var filtered = [];
        for (var li = 0; li < source.length; li++) {
            var line = source[li];
            if (difficulty && line.indexOf(' ' + difficulty + ' ') === -1) continue;
            if (boss && line.indexOf(boss) === -1) continue;
            filtered.push(line);
        }
        if (filtered.length === 0) { replier.reply('조건에 맞는 로그가 없습니다.'); return; }
        replier.reply('[' + type + ' 로그 필터]\n' + filtered.slice(-10).join('\n'));
        return;
    }

    // 업적
    if (cmd === '업적') {
        var ach = player.achievements || [];
        if (ach.length === 0) { replier.reply('획득한 업적이 없습니다.'); return; }
        var outAch = '[업적]\n';
        for (var a = 0; a < ach.length && a < 10; a++) outAch += '- ' + ach[a].title + '\n';
        replier.reply(outAch.trim());
        return;
    }

    // 칭호 목록
    if (cmd === '칭호목록') {
        var titles = player.titles || [];
        if (titles.length === 0) { replier.reply('보유한 칭호가 없습니다.'); return; }
        replier.reply('[칭호]\n' + titles.join('\n'));
        return;
    }

    // 칭호 설정
    if (cmd === '칭호설정') {
        if (!arg) { replier.reply('사용: .칭호설정 <이름>'); return; }
        if (!player.titles || player.titles.indexOf(arg) === -1) { replier.reply('보유한 칭호가 아닙니다.'); return; }
        player.activeTitle = arg;
        saveState();
        replier.reply('칭호 설정: ' + arg);
        return;
    }

    // 평판 확인
    if (cmd === '평판') {
        var faction = arg;
        if (!faction) { replier.reply('사용: .평판 <진영>'); return; }
        var rep = player.rep[faction] || 0;
        replier.reply(faction + ' 평판: ' + rep);
        return;
    }

    // 평판 작업
    if (cmd === '평판작업') {
        var fac = arg;
        if (!fac) { replier.reply('사용: .평판작업 <진영>'); return; }
        var key = sender + ':' + fac;
        if (state.repWork[key] === getDateKey()) { replier.reply('오늘은 이미 작업했습니다.'); return; }
        state.repWork[key] = getDateKey();
        addRep(player, fac, 200);
        saveState();
        replier.reply(fac + ' 평판 +200');
        return;
    }

    // 평판 상점
    if (cmd === '평판상점') {
        var fac2 = arg;
        if (!fac2) { replier.reply('사용: .평판상점 <진영>'); return; }
        var shopR = getFactionShop(fac2);
        if (shopR.length === 0) { replier.reply('상점이 없습니다.'); return; }
        var outR = '[' + fac2 + ' 상점]\n';
        for (var si2 = 0; si2 < shopR.length; si2++) outR += '- ' + shopR[si2].item + ' (골드 ' + shopR[si2].cost + ', 평판 ' + shopR[si2].rep + ')\n';
        replier.reply(outR.trim());
        return;
    }

    // 평판 구매
    if (cmd === '평판구매') {
        var argsR = arg.split(/\s+/);
        var fac3 = argsR[0];
        var itemR = argsR.slice(1).join(' ');
        if (!fac3 || !itemR) { replier.reply('사용: .평판구매 <진영> <아이템>'); return; }
        var shopR2 = getFactionShop(fac3);
        var entry = null;
        for (var sidx = 0; sidx < shopR2.length; sidx++) if (shopR2[sidx].item === itemR) entry = shopR2[sidx];
        if (!entry) { replier.reply('아이템이 없습니다.'); return; }
        if ((player.rep[fac3] || 0) < entry.rep) { replier.reply('평판 부족'); return; }
        if (player.gold < entry.cost) { replier.reply('골드 부족'); return; }
        player.gold -= entry.cost;
        addItem(player, entry.item, 1);
        saveState();
        replier.reply('구매 완료: ' + entry.item);
        return;
    }

    // 길드 생성
    if (cmd === '길드생성') {
        var gname = arg;
        if (!gname) { replier.reply('사용: .길드생성 <이름>'); return; }
        if (player.guildId) { replier.reply('이미 길드에 속해있습니다.'); return; }
        if (state.guilds[gname]) { replier.reply('이미 존재하는 길드입니다.'); return; }
        if (player.gold < Config.GUILD_CREATE_COST) { replier.reply('골드 부족'); return; }
        player.gold -= Config.GUILD_CREATE_COST;
        state.guilds[gname] = { name: gname, leader: sender, members: [sender], level: 1, exp: 0 };
        player.guildId = gname;
        saveState();
        replier.reply('길드 생성 완료: ' + gname);
        return;
    }

    // 길드 초대
    if (cmd === '길드초대') {
        var gtarget = arg;
        if (!gtarget) { replier.reply('사용: .길드초대 <유저>'); return; }
        if (!player.guildId) { replier.reply('길드가 없습니다.'); return; }
        var guild = state.guilds[player.guildId];
        if (!guild || guild.leader !== sender) { replier.reply('길드장만 초대할 수 있습니다.'); return; }
        state.guildInvites[gtarget] = player.guildId;
        replier.reply(gtarget + ' 님에게 길드 초대 보냄.');
        return;
    }

    // 길드 수락
    if (cmd === '길드수락') {
        var gfrom = arg;
        if (!gfrom) { replier.reply('사용: .길드수락 <길드명>'); return; }
        if (player.guildId) { replier.reply('이미 길드에 속해있습니다.'); return; }
        if (state.guildInvites[sender] !== gfrom) { replier.reply('초대가 없습니다.'); return; }
        var g = state.guilds[gfrom];
        if (!g) { replier.reply('길드가 없습니다.'); return; }
        g.members.push(sender);
        player.guildId = gfrom;
        delete state.guildInvites[sender];
        saveState();
        replier.reply('길드 가입 완료: ' + gfrom);
        return;
    }

    // 길드 정보
    if (cmd === '길드정보') {
        if (!player.guildId) { replier.reply('길드가 없습니다.'); return; }
        var g2 = state.guilds[player.guildId];
        if (!g2) { replier.reply('길드가 없습니다.'); return; }
        replier.reply('[길드]\n이름: ' + g2.name + '\n레벨: ' + g2.level + '\n인원: ' + g2.members.length);
        return;
    }

    // 길드 기부
    if (cmd === '길드기부') {
        if (!player.guildId) { replier.reply('길드가 없습니다.'); return; }
        var amount = parseInt(arg, 10) || 0;
        if (amount <= 0) { replier.reply('사용: .길드기부 <골드>'); return; }
        if (player.gold < amount) { replier.reply('골드 부족'); return; }
        var g3 = state.guilds[player.guildId];
        player.gold -= amount;
        g3.exp += amount;
        while (g3.exp >= g3.level * 1000) { g3.exp -= g3.level * 1000; g3.level += 1; }
        saveState();
        replier.reply('길드 기부 완료. 길드 레벨: ' + g3.level);
        return;
    }

    // 길드 레이드
    if (cmd === '길드레이드') {
        if (!player.guildId) { replier.reply('길드가 없습니다.'); return; }
        var gRaid = state.guilds[player.guildId];
        var lockKey = '길드레이드:' + player.guildId;
        if (getWeeklyLockout(player, lockKey) === getWeekKey()) { replier.reply('이번 주 길드 레이드는 이미 클리어했습니다.'); return; }
        var boss = getWorldBoss();
        var run = buildDungeonStages('길드레이드', null, '주간', player, { finalBoss: boss, isRaid: true });
        state.battles[sender] = { monster: run.stages[0].monster, hp: run.stages[0].monster.hp, bonus: 2.5, dungeon: lockKey, diff: '주간', playerLevel: player.level, run: run };
        saveState();
        replier.reply('길드 레이드 시작!\n' + formatDungeonProgress(run) + '\n' + run.stages[0].monster.name + ' 등장!' + buildNextActionHint('dungeon-start'));
        return;
    }

    // 길드 상점
    if (cmd === '길드상점') {
        if (!player.guildId) { replier.reply('길드가 없습니다.'); return; }
        var g4 = state.guilds[player.guildId];
        if (!g4) { replier.reply('길드가 없습니다.'); return; }
        var outG = '[길드 상점]\n';
        for (var gi = 0; gi < GuildShopItems.length; gi++) {
            var it = GuildShopItems[gi];
            outG += '- ' + it.item + ' (골드 ' + it.cost + ', 길드Lv ' + it.level + ')\n';
        }
        replier.reply(outG.trim());
        return;
    }

    // 길드 구매
    if (cmd === '길드구매') {
        if (!player.guildId) { replier.reply('길드가 없습니다.'); return; }
        var g5 = state.guilds[player.guildId];
        if (!g5) { replier.reply('길드가 없습니다.'); return; }
        if (!arg) { replier.reply('사용: .길드구매 <아이템>'); return; }
        var found = null;
        for (var gi2 = 0; gi2 < GuildShopItems.length; gi2++) if (GuildShopItems[gi2].item === arg) found = GuildShopItems[gi2];
        if (!found) { replier.reply('아이템이 없습니다.'); return; }
        if (g5.level < found.level) { replier.reply('길드 레벨 부족'); return; }
        if (player.gold < found.cost) { replier.reply('골드 부족'); return; }
        player.gold -= found.cost;
        addItem(player, found.item, 1);
        saveState();
        replier.reply('구매 완료: ' + found.item);
        return;
    }

    // 집 구매
    if (cmd === '집구매') {
        if (player.house.owned) { replier.reply('이미 집이 있습니다.'); return; }
        if (player.gold < Config.HOUSE_COST) { replier.reply('골드 부족'); return; }
        player.gold -= Config.HOUSE_COST;
        player.house.owned = true;
        player.house.level = 1;
        saveState();
        replier.reply('집 구매 완료!');
        return;
    }

    // 집 정보
    if (cmd === '집정보') {
        if (!player.house.owned) { replier.reply('집이 없습니다.'); return; }
        replier.reply('집 레벨: ' + player.house.level + '\n최대 HP 보너스 적용 중');
        return;
    }

    // 특성 확인
    if (cmd === '특성') {
        replier.reply('[특성]\n공격: ' + (player.talents.att || 0) + '\n방어: ' + (player.talents.def || 0) + '\nHP: ' + (player.talents.hp || 0) + '\n포인트: ' + (player.talentPoints || 0));
        return;
    }

    // 특성 찍기
    if (cmd === '특성찍기') {
        if (!arg) { replier.reply('사용: .특성찍기 <공격/방어/HP>'); return; }
        if ((player.talentPoints || 0) <= 0) { replier.reply('특성 포인트가 없습니다.'); return; }
        if (arg === '공격') player.talents.att += 1;
        else if (arg === '방어') player.talents.def += 1;
        else if (arg === 'HP') player.talents.hp += 1;
        else { replier.reply('공격/방어/HP 중 선택'); return; }
        player.talentPoints -= 1;
        saveState();
        replier.reply('특성 포인트 사용 완료.');
        return;
    }

    // 인벤
    if (cmd === '인벤') {
        var out = '[인벤토리]\n';
        if (player.inventory.length === 0) out += '비어있음';
        for (var i = 0; i < player.inventory.length; i++) {
            out += '- ' + player.inventory[i].name + ' x' + player.inventory[i].count + '\n';
        }
        replier.reply(out.trim());
        return;
    }

    // 장비
    if (cmd === '장비') {
        var isDetail = (arg === '상세' || arg === 'detail');
        if (player.equipment.weapon.name) ensureSlotDurability(player.equipment.weapon, player.equipment.weapon.name, 'weapon');
        if (player.equipment.armor.name) ensureSlotDurability(player.equipment.armor, player.equipment.armor.name, 'armor');
        if (player.equipment.shield.name) ensureSlotDurability(player.equipment.shield, player.equipment.shield.name, 'shield');
        if (player.equipment.helmet.name) ensureSlotDurability(player.equipment.helmet, player.equipment.helmet.name, 'helmet');
        if (player.equipment.gloves.name) ensureSlotDurability(player.equipment.gloves, player.equipment.gloves.name, 'gloves');
        if (player.equipment.boots.name) ensureSlotDurability(player.equipment.boots, player.equipment.boots.name, 'boots');
        var eq = player.equipment;
        function fmtEquip(slot, label, showDurability) {
            var name = slot.name || '없음';
            var enh = slot.enhance || 0;
            var dur = '';
            if (showDurability && slot.name) {
                dur = ' / 🧰 ' + slot.durability + '/' + slot.maxDurability;
            }
            return label + ': ' + name + ' (강화 +' + enh + ')' + dur;
        }
        if (!isDetail) {
            var accLine = '💍 ' + (eq.ring1.name || '없음') + ' / 💍 ' + (eq.ring2.name || '없음') +
                ' / 📿 ' + (eq.necklace.name || '없음') + ' / 👂 ' + (eq.earring.name || '없음') +
                ' / 🎗️ ' + (eq.belt.name || '없음') + ' / 🧣 ' + (eq.cloak.name || '없음');
            replier.reply(
                "[장비 요약]\n" +
                "👑 투구: " + (eq.helmet.name || '없음') + "\n" +
                "🗡️ 무기: " + (eq.weapon.name || '없음') + "\n" +
                "👕 갑옷: " + (eq.armor.name || '없음') + "\n" +
                "🛡️ 방패: " + (eq.shield.name || '없음') + "\n" +
                "🧤 장갑: " + (eq.gloves.name || '없음') + "\n" +
                "👢 신발: " + (eq.boots.name || '없음') + "\n" +
                "[액세서리]\n" + accLine + "\n" +
                buildDurabilityStatus(player) + "\n" +
                "상세: .장비 상세" +
                buildNextActionHint('equipment')
            );
            return;
        }
        replier.reply(
            "[장비]\n" +
            "        [👑 투구]\n" +
            "            │\n" +
            "[🗡️ 무기]─[👕 갑옷]─[🛡️ 방패]\n" +
            "            │\n" +
            "        [🧤 장갑]\n" +
            "            │\n" +
            "        [👢 신발]\n\n" +
            fmtEquip(eq.helmet, '👑 투구', true) + "\n" +
            fmtEquip(eq.weapon, '🗡️ 무기', true) + "\n" +
            fmtEquip(eq.armor, '👕 갑옷', true) + "\n" +
            fmtEquip(eq.shield, '🛡️ 방패', true) + "\n" +
            fmtEquip(eq.gloves, '🧤 장갑', true) + "\n" +
            fmtEquip(eq.boots, '👢 신발', true) + "\n" +
            "💎 보석: " + (eq.weapon.gem || '없음') + "\n\n" +
            "[액세서리]\n" +
            fmtEquip(eq.ring1, '💍 반지1', false) + "\n" +
            fmtEquip(eq.ring2, '💍 반지2', false) + "\n" +
            fmtEquip(eq.necklace, '📿 목걸이', false) + "\n" +
            fmtEquip(eq.earring, '👂 귀걸이', false) + "\n" +
            fmtEquip(eq.belt, '🎗️ 벨트', false) + "\n" +
            fmtEquip(eq.cloak, '🧣 망토', false) +
            buildNextActionHint('equipment')
        );
        return;
    }

    // 수리
    if (cmd === '수리') {
        var target = arg || '전체';
        var targets = [];
        if (target === '전체') targets = ['무기', '갑옷', '방패', '투구', '장갑', '신발'];
        else targets = [target];

        var slots = [];
        for (var t = 0; t < targets.length; t++) {
            if (targets[t] === '무기' && player.equipment.weapon.name) slots.push({ slot: '무기', obj: player.equipment.weapon, type: 'weapon' });
            if ((targets[t] === '방어구' || targets[t] === '갑옷') && player.equipment.armor.name) slots.push({ slot: '갑옷', obj: player.equipment.armor, type: 'armor' });
            if (targets[t] === '방패' && player.equipment.shield.name) slots.push({ slot: '방패', obj: player.equipment.shield, type: 'shield' });
            if (targets[t] === '투구' && player.equipment.helmet.name) slots.push({ slot: '투구', obj: player.equipment.helmet, type: 'helmet' });
            if (targets[t] === '장갑' && player.equipment.gloves.name) slots.push({ slot: '장갑', obj: player.equipment.gloves, type: 'gloves' });
            if ((targets[t] === '신발' || targets[t] === '부츠') && player.equipment.boots.name) slots.push({ slot: '신발', obj: player.equipment.boots, type: 'boots' });
        }
        if (slots.length === 0) { replier.reply('수리할 장비가 없습니다.'); return; }

        for (var s = 0; s < slots.length; s++) {
            ensureSlotDurability(slots[s].obj, slots[s].obj.name, slots[s].type);
        }

        if (findItemCount(player, '수리도구') > 0) {
            removeItem(player, '수리도구', 1);
            for (var r = 0; r < slots.length; r++) slots[r].obj.durability = slots[r].obj.maxDurability;
            saveState();
            replier.reply('수리도구 사용 완료: ' + slots.map(function(s) { return s.slot; }).join(', ') + buildNextActionHint('repair'));
            return;
        }

        var cost = 0;
        for (var c = 0; c < slots.length; c++) {
            var obj = slots[c].obj;
            var missing = obj.maxDurability - obj.durability;
            if (missing <= 0) continue;
            var itemData = GameData.ItemDatabase[obj.name] || {};
            var baseCost = Math.max(10, Math.floor(missing * 3 + (obj.maxDurability || 0) * 0.4 + (itemData.price || 0) * 0.03));
            cost += baseCost;
        }
        if (cost <= 0) { replier.reply('수리가 필요하지 않습니다.'); return; }
        if (player.gold < cost) { replier.reply('골드 부족. 필요: ' + cost + 'G'); return; }

        player.gold -= cost;
        for (var r2 = 0; r2 < slots.length; r2++) slots[r2].obj.durability = slots[r2].obj.maxDurability;
        saveState();
        replier.reply('수리 완료. 소모 골드: ' + cost + 'G' + buildNextActionHint('repair'));
        return;
    }

    // 세트 효과 패널
    if (cmd === '세트효과') {
        var eq = player.equipment || {};
        var equipped = [];
        if (eq.weapon && eq.weapon.name) equipped.push(eq.weapon.name);
        if (eq.armor && eq.armor.name) equipped.push(eq.armor.name);
        if (eq.shield && eq.shield.name) equipped.push(eq.shield.name);
        var outSet = '[세트효과]\n';
        var any = false;
        for (var sname in RaidSets) {
            var s = RaidSets[sname];
            var count = 0;
            for (var i = 0; i < s.items.length; i++) if (equipped.indexOf(s.items[i]) !== -1) count++;
            if (count > 0) {
                any = true;
                outSet += '- ' + sname + ' (' + count + '/' + s.items.length + ')\n';
                if (count >= s.items.length) {
                    outSet += '  보너스: ';
                    if (s.bonus.attMul) outSet += '공격 x' + s.bonus.attMul + ' ';
                    if (s.bonus.defMul) outSet += '방어 x' + s.bonus.defMul + ' ';
                    if (s.bonus.hpBonus) outSet += 'HP +' + s.bonus.hpBonus + ' ';
                    outSet += '\n';
                }
            }
        }
        replier.reply(any ? outSet.trim() : '활성화된 세트 효과가 없습니다.');
        return;
    }

    // 세트 요약
    if (cmd === '세트요약') {
        var bonus = getRaidSetBonus(player);
        var summary = '[세트 요약]\n';
        summary += '공격 배율: x' + bonus.attMul + '\n';
        summary += '방어 배율: x' + bonus.defMul + '\n';
        summary += '추가 HP: +' + bonus.hpBonus;
        replier.reply(summary);
        return;
    }

    // 장착
    if (cmd === '장착') {
        var rawEquip = (arg || '').trim();
        if (!rawEquip) { replier.reply('사용: .장착 <아이템> 또는 .장착 <부위> <아이템>'); return; }
        var equipTokens = rawEquip.split(/\s+/);
        var slotName = '';
        var itemName = rawEquip;
        var slotAliases = {
            '무기': 'weapon',
            '갑옷': 'armor',
            '방어구': 'armor',
            '방패': 'shield',
            '투구': 'helmet',
            '장갑': 'gloves',
            '신발': 'boots',
            '부츠': 'boots',
            '반지': 'ring',
            '반지1': 'ring1',
            '반지2': 'ring2',
            '목걸이': 'necklace',
            '귀걸이': 'earring',
            '벨트': 'belt',
            '망토': 'cloak'
        };
        if (slotAliases[equipTokens[0]]) {
            slotName = equipTokens[0];
            itemName = equipTokens.slice(1).join(' ').trim();
            if (!itemName) { replier.reply('사용: .장착 <부위> <아이템>'); return; }
        }
        if (findItemCount(player, itemName) <= 0) { replier.reply('아이템이 없습니다.'); return; }
        var item = GameData.ItemDatabase[itemName];
        if (!item || !item.type) { replier.reply('장착할 수 없는 아이템입니다.'); return; }
        var resolvedSlot = '';
        var subtype = item.subtype || '';
        if (slotName) {
            resolvedSlot = slotAliases[slotName] || '';
        } else if (item.type === 'weapon') {
            resolvedSlot = 'weapon';
        } else if (item.type === 'armor') {
            if (subtype === 'shield') resolvedSlot = 'shield';
            else if (subtype === 'helmet') resolvedSlot = 'helmet';
            else if (subtype === 'gloves') resolvedSlot = 'gloves';
            else if (subtype === 'boots') resolvedSlot = 'boots';
            else resolvedSlot = 'armor';
        } else if (item.type === 'accessory') {
            if (subtype === 'ring') resolvedSlot = (player.equipment.ring1.name ? (player.equipment.ring2.name ? 'ring1' : 'ring2') : 'ring1');
            else if (subtype === 'necklace') resolvedSlot = 'necklace';
            else if (subtype === 'earring') resolvedSlot = 'earring';
            else if (subtype === 'belt') resolvedSlot = 'belt';
            else if (subtype === 'cloak') resolvedSlot = 'cloak';
        }

        if (resolvedSlot === 'ring' && slotName === '반지') {
            resolvedSlot = (player.equipment.ring1.name ? (player.equipment.ring2.name ? 'ring1' : 'ring2') : 'ring1');
        }

        if (!resolvedSlot) { replier.reply('장착할 수 없는 타입입니다.'); return; }

        if (resolvedSlot === 'weapon' && item.type !== 'weapon') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }
        if ((resolvedSlot === 'armor' || resolvedSlot === 'helmet' || resolvedSlot === 'gloves' || resolvedSlot === 'boots' || resolvedSlot === 'shield') && item.type !== 'armor') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }
        if (resolvedSlot === 'shield' && item.subtype !== 'shield') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }
        if (resolvedSlot === 'helmet' && item.subtype !== 'helmet') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }
        if (resolvedSlot === 'gloves' && item.subtype !== 'gloves') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }
        if (resolvedSlot === 'boots' && item.subtype !== 'boots') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }
        if ((resolvedSlot === 'ring1' || resolvedSlot === 'ring2') && item.type !== 'accessory') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }
        if (resolvedSlot === 'necklace' && item.subtype !== 'necklace') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }
        if (resolvedSlot === 'earring' && item.subtype !== 'earring') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }
        if (resolvedSlot === 'belt' && item.subtype !== 'belt') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }
        if (resolvedSlot === 'cloak' && item.subtype !== 'cloak') { replier.reply('해당 슬롯에 장착할 수 없는 아이템입니다.'); return; }

        var targetSlot = player.equipment[resolvedSlot];
        targetSlot.name = itemName;
        targetSlot.enhance = targetSlot.enhance || 0;
        targetSlot.rune = '';
        if (resolvedSlot === 'weapon') {
            targetSlot.gem = targetSlot.gem || "";
            targetSlot.maxDurability = getItemMaxDurability(itemName, 'weapon');
            targetSlot.durability = targetSlot.maxDurability;
        } else if (resolvedSlot === 'armor') {
            targetSlot.maxDurability = getItemMaxDurability(itemName, 'armor');
            targetSlot.durability = targetSlot.maxDurability;
        } else if (resolvedSlot === 'shield') {
            targetSlot.maxDurability = getItemMaxDurability(itemName, 'shield');
            targetSlot.durability = targetSlot.maxDurability;
        } else if (resolvedSlot === 'helmet') {
            targetSlot.maxDurability = getItemMaxDurability(itemName, 'helmet');
            targetSlot.durability = targetSlot.maxDurability;
        } else if (resolvedSlot === 'gloves') {
            targetSlot.maxDurability = getItemMaxDurability(itemName, 'gloves');
            targetSlot.durability = targetSlot.maxDurability;
        } else if (resolvedSlot === 'boots') {
            targetSlot.maxDurability = getItemMaxDurability(itemName, 'boots');
            targetSlot.durability = targetSlot.maxDurability;
        }

        var slotLabel = {
            weapon: '무기', armor: '갑옷', shield: '방패', helmet: '투구', gloves: '장갑', boots: '신발',
            ring1: '반지1', ring2: '반지2', necklace: '목걸이', earring: '귀걸이', belt: '벨트', cloak: '망토'
        }[resolvedSlot] || resolvedSlot;
        var tEquip = applyTutorialProgress(player, 'equip');
        saveState();
        replier.reply(itemName + ' 장착 완료. (' + slotLabel + ')' + buildNextActionHint('equip-change') + tEquip);
        return;
    }

    // 해제
    if (cmd === '해제') {
        var slot = arg;
        if (slot === '무기') player.equipment.weapon.name = null;
        else if (slot === '갑옷' || slot === '방어구') player.equipment.armor.name = null;
        else if (slot === '방패') player.equipment.shield.name = null;
        else if (slot === '투구') player.equipment.helmet.name = null;
        else if (slot === '장갑') player.equipment.gloves.name = null;
        else if (slot === '신발' || slot === '부츠') player.equipment.boots.name = null;
        else if (slot === '반지1') player.equipment.ring1.name = null;
        else if (slot === '반지2') player.equipment.ring2.name = null;
        else if (slot === '반지') { player.equipment.ring1.name = null; player.equipment.ring2.name = null; }
        else if (slot === '목걸이') player.equipment.necklace.name = null;
        else if (slot === '귀걸이') player.equipment.earring.name = null;
        else if (slot === '벨트') player.equipment.belt.name = null;
        else if (slot === '망토') player.equipment.cloak.name = null;
        else { replier.reply('슬롯: 무기/갑옷/방패/투구/장갑/신발/반지1/반지2/목걸이/귀걸이/벨트/망토'); return; }
        saveState();
        replier.reply(slot + ' 해제 완료.' + buildNextActionHint('equip-change'));
        return;
    }

    // 강화
    if (cmd === '강화') {
        var parts = (arg || '').trim().split(/\s+/).filter(function(s) { return s; });
        var t = parts[0];
        var stone = parts.length > 1 ? parts.slice(1).join(' ') : '';
        if (t !== '무기' && t !== '방어구' && t !== '갑옷' && t !== '방패' && t !== '투구' && t !== '장갑' && t !== '신발' && t !== '부츠') {
            replier.reply('사용: .강화 <무기/갑옷/방패/투구/장갑/신발> [강화석/축복의강화석/안전한강화석]');
            return;
        }
        var slotObj = (t === '무기') ? player.equipment.weapon
            : (t === '방어구' || t === '갑옷') ? player.equipment.armor
            : (t === '방패') ? player.equipment.shield
            : (t === '투구') ? player.equipment.helmet
            : (t === '장갑') ? player.equipment.gloves
            : player.equipment.boots;
        if (!slotObj || !slotObj.name) { replier.reply('장착된 아이템이 없습니다.'); return; }
        var itemData = GameData.ItemDatabase[slotObj.name] || {};
        var itemLevel = itemData.level || 1;
        var isLegendary = !!itemData.legendary;
        var cap = (itemLevel <= 10 ? 3 : itemLevel <= 30 ? 6 : itemLevel <= 50 ? 9 : itemLevel <= 70 ? 12 : itemLevel <= 90 ? 15 : 18);
        if (isLegendary) cap += 2;
        if ((slotObj.enhance || 0) >= cap) { replier.reply('해당 장비는 +' + cap + ' 까지 강화 가능합니다.'); return; }

        var cost = (slotObj.enhance + 1) * 200;
        if (player.gold < cost) { replier.reply('골드 부족. 필요: ' + cost); return; }
        var stoneRate = 0;
        var safeFail = false;
        if (stone) {
            if (findItemCount(player, stone) <= 0) { replier.reply('강화석이 없습니다.'); return; }
            removeItem(player, stone, 1);
            if (stone === '강화석') stoneRate = 10;
            if (stone === '축복의강화석') stoneRate = 20;
            if (stone === '안전한강화석') { stoneRate = 5; safeFail = true; }
        }
        player.gold -= cost;
        var successRate = Math.max(20, 80 - slotObj.enhance * 8 + stoneRate);
        if (Math.random() * 100 < successRate) {
            slotObj.enhance += 1;
            var tEnh = applyTutorialProgress(player, 'enhance');
            replier.reply('강화 성공! +' + slotObj.enhance + buildNextActionHint('enhance') + tEnh);
        } else {
            var refund = Math.floor(cost * (stone ? 0.5 : 0.3));
            player.gold += refund;
            if (!safeFail && slotObj.enhance > 0 && Math.random() < 0.3) slotObj.enhance -= 1;
            var stoneRefunded = false;
            if (stone && Math.random() < 0.4) { addItem(player, stone, 1); stoneRefunded = true; }
            var tEnhFail = applyTutorialProgress(player, 'enhance');
            replier.reply('강화 실패. 골드 환급 +' + refund + (stoneRefunded ? ', 재료 환급' : '') + buildNextActionHint('enhance-fail') + tEnhFail);
        }
        saveState();
        return;
    }

    // 보석 장착 (무기에만)
    if (cmd === '보석장착') {
        var gem = arg;
        if (!gem) { replier.reply('사용: .보석장착 <보석>'); return; }
        if (findItemCount(player, gem) <= 0) { replier.reply('보석이 없습니다.' + buildNextActionHint('gem-fail')); return; }
        if (!player.equipment.weapon || !player.equipment.weapon.name) { replier.reply('무기를 먼저 장착하세요.'); return; }
        if (gem.indexOf('보석') === -1 && gem.indexOf('룬') === -1) { replier.reply('보석/룬 아이템만 장착 가능합니다.' + buildNextActionHint('gem-fail')); return; }
        removeItem(player, gem, 1);
        player.equipment.weapon.gem = gem;
        saveState();
        replier.reply('보석 장착 완료: ' + gem + buildNextActionHint('gem'));
        return;
    }

    // 룬 목록
    if (cmd === '룬목록') {
        var linesR = ['[룬 목록]'];
        for (var rn in RuneEffectTable) {
            var eff = RuneEffectTable[rn];
            var desc = [];
            if (eff.attMul) desc.push('공격 x' + eff.attMul);
            if (eff.defMul) desc.push('방어 x' + eff.defMul);
            if (eff.hpBonus) desc.push('HP +' + eff.hpBonus);
            if (eff.critPct) desc.push('치명 +' + Math.floor(eff.critPct * 100) + '%');
            if (eff.healPct) desc.push('회복 +' + Math.floor(eff.healPct * 100) + '%');
            if (eff.dropRate) desc.push('드랍 +' + Math.floor(eff.dropRate * 100) + '%');
            linesR.push('- ' + rn + ' (' + desc.join(', ') + ')');
        }
        replier.reply(linesR.join('\n') + buildNextActionHint('rune'));
        return;
    }

    // 룬 각인
    if (cmd === '룬각인') {
        var argsRune = (arg || '').split(/\s+/).filter(function(s) { return s; });
        if (argsRune.length < 2) { replier.reply('사용: .룬각인 <부위> <룬>'); return; }
        var slotNameR = argsRune[0];
        var runeName = argsRune.slice(1).join(' ');
        if (!RuneEffectTable[runeName]) { replier.reply('해당 룬이 없습니다. .룬목록'); return; }
        if (findItemCount(player, '룬각인서') <= 0) { replier.reply('룬각인서가 필요합니다.'); return; }
        if (findItemCount(player, runeName) <= 0) { replier.reply('룬 아이템이 없습니다.'); return; }

        var slotMap = {
            '무기': 'weapon',
            '갑옷': 'armor',
            '방어구': 'armor',
            '방패': 'shield',
            '투구': 'helmet',
            '장갑': 'gloves',
            '신발': 'boots',
            '부츠': 'boots',
            '반지1': 'ring1',
            '반지2': 'ring2',
            '반지': 'ring',
            '목걸이': 'necklace',
            '귀걸이': 'earring',
            '벨트': 'belt',
            '망토': 'cloak'
        };
        var resolvedSlot = slotMap[slotNameR];
        if (resolvedSlot === 'ring') {
            resolvedSlot = player.equipment.ring1 && player.equipment.ring1.name ? 'ring1' : 'ring2';
        }
        if (!resolvedSlot || !player.equipment[resolvedSlot] || !player.equipment[resolvedSlot].name) {
            replier.reply('해당 부위에 장착된 아이템이 없습니다.');
            return;
        }
        removeItem(player, '룬각인서', 1);
        removeItem(player, runeName, 1);
        player.equipment[resolvedSlot].rune = runeName;
        saveState();
        replier.reply('룬 각인 완료: ' + slotNameR + ' → ' + runeName + buildNextActionHint('rune'));
        return;
    }

    // 룬 확인
    if (cmd === '룬확인') {
        var eqR = player.equipment || {};
        var partsR = [];
        function pushRune(label, slot) {
            var name = (slot && slot.name) ? slot.name : '없음';
            var rune = (slot && slot.rune) ? slot.rune : '없음';
            partsR.push(label + ': ' + name + ' / 룬: ' + rune);
        }
        pushRune('무기', eqR.weapon);
        pushRune('갑옷', eqR.armor);
        pushRune('방패', eqR.shield);
        pushRune('투구', eqR.helmet);
        pushRune('장갑', eqR.gloves);
        pushRune('신발', eqR.boots);
        pushRune('반지1', eqR.ring1);
        pushRune('반지2', eqR.ring2);
        pushRune('목걸이', eqR.necklace);
        pushRune('귀걸이', eqR.earring);
        pushRune('벨트', eqR.belt);
        pushRune('망토', eqR.cloak);
        replier.reply('[룬 각인 현황]\n' + partsR.join('\n') + buildNextActionHint('rune'));
        return;
    }

    // 사용
    if (cmd === '사용') {
        var useItem = resolveUseItemName(player, arg);
        if (!useItem) { replier.reply('사용: .사용 <아이템>'); return; }
        if (findItemCount(player, useItem) <= 0) { replier.reply('아이템이 없습니다.'); return; }
        var effect = getConsumableEffect(useItem);
        if (!effect) { replier.reply('사용할 수 없는 아이템입니다.'); return; }
        removeItem(player, useItem, 1);
        var result = effect(player);
        saveState();
        replier.reply(useItem + ' 사용: ' + result + buildNextActionHint('use-item'));
        return;
    }

    // 사냥
    if (cmd === '사냥') {
        var zoneName = player.currentZone || '묘냥의 숲';
        var monster = pickMonsterForZone(zoneName, player.level);
        monster = applyMountBalance(monster, player);
        state.battles[sender] = { monster: monster, hp: monster.hp, bonus: 1, playerLevel: player.level };
        saveState();
        replier.reply('[' + zoneName + '] 야생의 ' + monster.name + ' 발견! 💚 HP ' + monster.hp + '\n다음 행동: .공격 / .스킬 / .사용');
        return;
    }

    // 스킬목록
    if (cmd === '스킬목록') {
        var skills = getJobSkillList(player);
        if (!skills || skills.length === 0) { replier.reply('사용 가능한 스킬이 없습니다.'); return; }
        replier.reply('[스킬목록]\n' + skills.join('\n') + buildNextActionHint('skills'));
        return;
    }

    // 스킬
    if (cmd === '스킬') {
        var rawSkill = (arg || '').trim();
        if (!rawSkill) { replier.reply('사용: .스킬 <이름>'); return; }
        var skillList = getJobSkillList(player);
        var tokens = rawSkill.split(/\s+/);
        var skillName = '';
        var targetName = '';
        for (var ti = tokens.length; ti >= 1; ti--) {
            var candidate = tokens.slice(0, ti).join(' ');
            for (var sj = 0; sj < skillList.length; sj++) {
                if (skillList[sj] === candidate) {
                    skillName = candidate;
                    targetName = tokens.slice(ti).join(' ').trim();
                    break;
                }
            }
            if (skillName) break;
        }
        if (!skillName) {
            skillName = rawSkill;
            targetName = '';
        }

        var allow = false;
        for (var si = 0; si < skillList.length; si++) if (skillList[si] === skillName) allow = true;
        if (!allow) { replier.reply('현재 직업으로 사용할 수 없는 스킬입니다.'); return; }

        var battleSkill = state.battles[sender];
        if (battleSkill && battleSkill.challenge) {
            var failMsg = checkChallengeTimeout(battleSkill);
            if (failMsg) {
                var recordMsg = recordChallengeResult(player, battleSkill, false, '시간 초과');
                delete state.battles[sender];
                saveState();
                replier.reply(failMsg + recordMsg);
                return;
            }
        }
        var sdata = getSkillData(skillName) || {};
        var mpCost = sdata.mpCost || 10;
        var isHealSkill = (skillName === '치유' || skillName === '성역의 빛' || skillName === '응급치료' || sdata.healAmount || sdata.heal);
        var isReviveSkill = (skillName === '부활');

        if (isHealSkill || isReviveSkill) {
            var party = getParty(sender);
            if (isReviveSkill) {
                if (!targetName) { replier.reply('사용: .스킬 부활 <유저>'); return; }
                if (!party || !party.members || party.members.indexOf(targetName) === -1) { replier.reply('파티원만 부활시킬 수 있습니다.'); return; }
                var reviveTarget = ensurePlayer(targetName);
                if (!reviveTarget) { replier.reply('대상을 찾을 수 없습니다.'); return; }
                var reviveMax = getMaxHp(reviveTarget);
                if (reviveTarget.hp > 1) { replier.reply('대상이 전투 불능 상태가 아닙니다.'); return; }
                if (player.mp < mpCost) { replier.reply('MP 부족'); return; }
                player.mp -= mpCost;
                var reviveHp = Math.max(1, Math.floor(reviveMax * 0.3));
                reviveTarget.hp = reviveHp;
                var reviveLog = player.name + '의 ' + skillName + '! ' + reviveTarget.name + ' HP ' + reviveHp + '/' + reviveMax;
                if (battleSkill) {
                    var bmRev = battleSkill.monster;
                    var zoneRev = player.currentZone || '묘냥의 숲';
                    var rDmgRev = Math.max(1, (bmRev.att || 5) - Math.floor(getBattleDefense(player, battleSkill) * 0.4));
                    player.hp -= rDmgRev;
                    if (battleSkill && battleSkill.challenge && battleSkill.challenge.noDamage && rDmgRev > 0) {
                        battleSkill.challenge.takenDamage = true;
                    }
                    var durNotesRev = applyDurabilityLoss(player, 0, 1, 1);
                    reviveLog = '[' + zoneRev + '] ' + reviveLog + '\n' + bmRev.name + '의 반격! ' + rDmgRev + ' 데미지\n';
                    if (durNotesRev.length) reviveLog += '🧰 내구도: ' + durNotesRev.join(', ') + '\n';
                    if (player.hp <= 0) {
                        player.hp = 1;
                        delete state.battles[sender];
                        saveState();
                        replier.reply(reviveLog + '기절... HP 1로 회복');
                        return;
                    }
                    reviveLog += '💚 ' + bmRev.name + ' HP: ' + battleSkill.hp + '/' + bmRev.hp + '\n' + buildPlayerStatusLine(player) + buildNextActionLine();
                }
                saveState();
                replier.reply(reviveLog);
                return;
            }

            if (skillName === '성역의 빛') {
                var healTargets = [];
                var members = (party && party.members && party.members.length) ? party.members : [player.name];
                for (var mi = 0; mi < members.length; mi++) {
                    var memberName = members[mi];
                    var member = ensurePlayer(memberName);
                    if (!member) continue;
                    var memberMax = getMaxHp(member);
                    var healBonusPct = (getAccessoryEffects(player).healPct || 0) + (getRuneEffects(player).healPct || 0) + (getTarotBonus(player).healPct || 0);
                    var healAmount = Math.max(1, Math.floor(memberMax * (0.35 + healBonusPct)));
                    var missing = memberMax - member.hp;
                    if (missing > 0) {
                        var actualHeal = Math.min(missing, healAmount);
                        healTargets.push({ target: member, amount: actualHeal, maxHp: memberMax });
                    }
                }
                if (healTargets.length === 0) { replier.reply('모두 최대 HP입니다.'); return; }
                if (player.mp < mpCost) { replier.reply('MP 부족'); return; }
                player.mp -= mpCost;
                var hlog = player.name + '의 ' + skillName + '! 파티 HP 회복\n';
                for (var hi = 0; hi < healTargets.length; hi++) {
                    var entry = healTargets[hi];
                    entry.target.hp += entry.amount;
                    hlog += entry.target.name + ' +' + entry.amount + ' (' + entry.target.hp + '/' + entry.maxHp + ')\n';
                }
                if (battleSkill) {
                    var bmHeal = battleSkill.monster;
                    var zoneHeal = player.currentZone || '묘냥의 숲';
                    var rDmgHeal = Math.max(1, (bmHeal.att || 5) - Math.floor(getBattleDefense(player, battleSkill) * 0.4));
                    player.hp -= rDmgHeal;
                    if (battleSkill && battleSkill.challenge && battleSkill.challenge.noDamage && rDmgHeal > 0) {
                        battleSkill.challenge.takenDamage = true;
                    }
                    var durNotesHeal = applyDurabilityLoss(player, 0, 1, 1);
                    hlog = '[' + zoneHeal + '] ' + hlog + bmHeal.name + '의 반격! ' + rDmgHeal + ' 데미지\n';
                    if (durNotesHeal.length) hlog += '🧰 내구도: ' + durNotesHeal.join(', ') + '\n';
                    if (player.hp <= 0) {
                        player.hp = 1;
                        delete state.battles[sender];
                        saveState();
                        replier.reply(hlog + '기절... HP 1로 회복');
                        return;
                    }
                    hlog += '💚 ' + bmHeal.name + ' HP: ' + battleSkill.hp + '/' + bmHeal.hp + '\n' + buildPlayerStatusLine(player) + buildNextActionLine();
                }
                saveState();
                replier.reply(hlog.trim());
                return;
            }

            var healTargetName = targetName || player.name;
            if (healTargetName !== player.name) {
                if (!party || !party.members || party.members.indexOf(healTargetName) === -1) { replier.reply('파티원만 치유할 수 있습니다.'); return; }
            }
            var healTarget = ensurePlayer(healTargetName);
            if (!healTarget) { replier.reply('대상을 찾을 수 없습니다.'); return; }
            var healMax = getMaxHp(healTarget);
            var baseHeal = sdata.healAmount || sdata.heal || 80;
            var healBonusPct2 = (getAccessoryEffects(player).healPct || 0) + (getRuneEffects(player).healPct || 0) + (getTarotBonus(player).healPct || 0);
            baseHeal = Math.floor(baseHeal * (1 + healBonusPct2));
            var missingHeal = healMax - healTarget.hp;
            if (missingHeal <= 0) { replier.reply('이미 최대 HP입니다.'); return; }
            if (player.mp < mpCost) { replier.reply('MP 부족'); return; }
            player.mp -= mpCost;
            var actualHeal2 = Math.min(missingHeal, baseHeal);
            healTarget.hp += actualHeal2;
            var singleLog = player.name + '의 ' + skillName + '! ' + healTarget.name + ' HP +' + actualHeal2 + ' (' + healTarget.hp + '/' + healMax + ')';
            if (battleSkill) {
                var bmHealOne = battleSkill.monster;
                var zoneHealOne = player.currentZone || '묘냥의 숲';
                var rDmgHealOne = Math.max(1, (bmHealOne.att || 5) - Math.floor(getBattleDefense(player, battleSkill) * 0.4));
                player.hp -= rDmgHealOne;
                if (battleSkill && battleSkill.challenge && battleSkill.challenge.noDamage && rDmgHealOne > 0) {
                    battleSkill.challenge.takenDamage = true;
                }
                var durNotesHealOne = applyDurabilityLoss(player, 0, 1, 1);
                singleLog = '[' + zoneHealOne + '] ' + singleLog + '\n' + bmHealOne.name + '의 반격! ' + rDmgHealOne + ' 데미지\n';
                if (durNotesHealOne.length) singleLog += '🧰 내구도: ' + durNotesHealOne.join(', ') + '\n';
                if (player.hp <= 0) {
                    player.hp = 1;
                    delete state.battles[sender];
                    saveState();
                    replier.reply(singleLog + '기절... HP 1로 회복');
                    return;
                }
                singleLog += '💚 ' + bmHealOne.name + ' HP: ' + battleSkill.hp + '/' + bmHealOne.hp + '\n' + buildPlayerStatusLine(player) + buildNextActionLine();
            }
            saveState();
            replier.reply(singleLog);
            return;
        }

        if (!battleSkill) { replier.reply('전투 중이 아닙니다. .사냥'); return; }
        if (player.mp < mpCost) { replier.reply('MP 부족'); return; }
        player.mp -= mpCost;
        var base = getBattleAttack(player, battleSkill);
        var dmg = sdata.baseDamage || Math.floor(base * (sdata.damageMultiplier || 1.5));
        var critInfo = applyCritDamage(player, dmg);
        dmg = critInfo.dmg;
        var bm = battleSkill.monster;
        battleSkill.hp -= dmg;
        var zoneName = player.currentZone || '묘냥의 숲';
        var slog = '[' + zoneName + '] ' + player.name + '의 ' + skillName + '! ' + bm.name + '에게 ' + dmg + ' 데미지';
        if (critInfo.crit) slog += ' (치명타!)';
        slog += '\n';
        var durNotes = applyDurabilityLoss(player, 1, 0, 0);
        if (durNotes.length) slog += '🧰 내구도: ' + durNotes.join(', ') + '\n';
        if (battleSkill.hp <= 0) {
            var noReward = battleSkill && battleSkill.challenge && battleSkill.challenge.noReward;
            var exp2 = noReward ? 0 : (bm.exp || 10);
            var gold2 = noReward ? 0 : (bm.gold || 5);
            var bonus2 = battleSkill.bonus || 1;
            if (!noReward) {
                exp2 = calcScaledReward(exp2, player.level, bonus2, false, player);
                gold2 = calcScaledReward(gold2, player.level, bonus2, true, player);
                exp2 = applyRewardLevelDiff(exp2, player.level, bm.level);
                gold2 = applyRewardLevelDiff(gold2, player.level, bm.level);
            }
            var leveled2 = noReward ? false : addExp(player, exp2);
            player.gold += gold2;
            updateQuestProgress(player, bm.name);
            player.stats.kills = (player.stats.kills || 0) + 1;
            var drops = [];
            if (!noReward && bm.items && bm.items.length > 0 && Math.random() < getDropRate(battleSkill, player)) {
                var drop2 = pickRandom(bm.items);
                addItem(player, drop2, 1);
                drops.push(drop2);
            }
            if (!noReward && battleSkill.dungeon && isDungeonFinalStage(battleSkill) && !battleSkill.seasonDungeon) {
                player.stats.dungeons = (player.stats.dungeons || 0) + 1;
                var dmapSkill = getDungeonMap();
                var ddataSkill = dmapSkill[battleSkill.dungeon];
                if (!ddataSkill || ddataSkill.weeklyLockout !== false) {
                    setWeeklyLockout(player, battleSkill.dungeon + ':' + (battleSkill.diff || '노말'));
                }
                addRep(player, '빛의 기사단', 50);
            }
            if (player.level >= 10) addAchievement(player, '성장 시작', '레벨 10 달성', '전설의 모험가');
            if (player.stats.dungeons >= 3) addAchievement(player, '던전 정복자', '던전 3회 클리어', '던전 정복자');
            if (player.gold >= 10000) addAchievement(player, '부자', '골드 10,000 달성', '전설의 모험가');
            var summary2 = '보상 요약: EXP +' + exp2 + ', 골드 +' + gold2 + ', 드랍 ' + (drops.length || 0);
            var detail2 = '상세: EXP +' + exp2 + ', 골드 +' + gold2 + (drops.length ? ', 드랍: ' + drops.join(', ') : '');
            var isFinalStage2 = !battleSkill.run || isDungeonFinalStage(battleSkill);
            var tutorialMsg2 = applyTutorialProgress(player, 'kill');
            if (battleSkill.dungeon && isFinalStage2) tutorialMsg2 += applyTutorialProgress(player, 'dungeon');
            var seasonMsg2 = (battleSkill.seasonDungeon && isFinalStage2) ? recordSeasonDungeonScore(player, battleSkill) : '';
            var challengeMsg2 = '';
            if (battleSkill.challenge && isFinalStage2) {
                var reason2 = '';
                var success2 = true;
                if (battleSkill.challenge.noDamage && battleSkill.challenge.takenDamage) { success2 = false; reason2 = '노데미지 조건 실패'; }
                challengeMsg2 = recordChallengeResult(player, battleSkill, success2, reason2);
            }
            slog += summary2 + '\n' + detail2 + (isFinalStage2 ? buildBattleEndHint(player) : '') + tutorialMsg2 + seasonMsg2 + challengeMsg2;
            if (leveled2) slog += '\n레벨 업! 현재 레벨: ' + player.level;
            if (battleSkill.run && !isDungeonFinalStage(battleSkill)) {
                var nextStage = advanceDungeonStage(battleSkill, player);
                var prog = formatDungeonProgress(battleSkill.run);
                saveState();
                replier.reply(slog + '\n다음 구역: ' + prog + '\n' + nextStage.monster.name + ' 등장!\n' + buildPlayerStatusLine(player) + buildNextActionHint('dungeon-start'));
                return;
            }
            delete state.battles[sender];
            saveState();
            replier.reply(slog);
            return;
        }
        var rDmg = Math.max(1, (bm.att || 5) - Math.floor(getBattleDefense(player, battleSkill) * 0.4));
        player.hp -= rDmg;
        if (battleSkill && battleSkill.challenge && battleSkill.challenge.noDamage && rDmg > 0) {
            battleSkill.challenge.takenDamage = true;
        }
        var durNotes2 = applyDurabilityLoss(player, 0, 1, 1);
        slog += bm.name + '의 반격! ' + rDmg + ' 데미지\n';
        if (durNotes2.length) slog += '🧰 내구도: ' + durNotes2.join(', ') + '\n';
        if (player.hp <= 0) {
            player.hp = 1;
            delete state.battles[sender];
            saveState();
            replier.reply(slog + '기절... HP 1로 회복');
            return;
        }
        saveState();
        replier.reply(slog + '💚 ' + bm.name + ' HP: ' + battleSkill.hp + '/' + bm.hp + '\n' + buildPlayerStatusLine(player) + buildNextActionLine());
        return;
    }

    // 공격/공경
    if (cmd === '공격' || cmd === '공경') {
        var battle = state.battles[sender];
        if (!battle) { replier.reply('전투 중이 아닙니다. .사냥'); return; }
        if (battle.challenge) {
            var failMsg2 = checkChallengeTimeout(battle);
            if (failMsg2) {
                var recordMsg2 = recordChallengeResult(player, battle, false, '시간 초과');
                delete state.battles[sender];
                saveState();
                replier.reply(failMsg2 + recordMsg2);
                return;
            }
        }
        var m = battle.monster;
        var dmg = Math.max(1, getBattleAttack(player, battle) - Math.floor(m.def * 0.5));
        var critInfo2 = applyCritDamage(player, dmg);
        dmg = critInfo2.dmg;
        battle.hp -= dmg;
        var zoneName = player.currentZone || '묘냥의 숲';
        var log = '[' + zoneName + '] ' + player.name + '의 공격! ' + m.name + '에게 ' + dmg + ' 데미지';
        if (critInfo2.crit) log += ' (치명타!)';
        log += '\n';
        var dnotes = applyDurabilityLoss(player, 1, 0, 0);
        if (dnotes.length) log += '🧰 내구도: ' + dnotes.join(', ') + '\n';
        if (battle.hp <= 0) {
            var noReward = battle.challenge && battle.challenge.noReward;
            var exp = noReward ? 0 : (m.exp || 10);
            var gold = noReward ? 0 : (m.gold || 5);
            var bonus = battle.bonus || 1;
            if (!noReward) {
                exp = calcScaledReward(exp, player.level, bonus, false, player);
                gold = calcScaledReward(gold, player.level, bonus, true, player);
                exp = applyRewardLevelDiff(exp, player.level, m.level);
                gold = applyRewardLevelDiff(gold, player.level, m.level);
            }
            var leveled = noReward ? false : addExp(player, exp);
            player.gold += gold;
            updateQuestProgress(player, m.name);
            player.stats.kills = (player.stats.kills || 0) + 1;

            // 드랍
            var drops2 = [];
            if (!noReward && m.items && m.items.length > 0 && Math.random() < getDropRate(battle, player)) {
                var drop = pickRandom(m.items);
                addItem(player, drop, 1);
                drops2.push(drop);
            }
            if (!noReward && battle.dungeon && isDungeonFinalStage(battle) && !battle.seasonDungeon) {
                player.stats.dungeons = (player.stats.dungeons || 0) + 1;
                var dmapBattle = getDungeonMap();
                var ddataBattle = dmapBattle[battle.dungeon];
                if (!ddataBattle || ddataBattle.weeklyLockout !== false) {
                    setWeeklyLockout(player, battle.dungeon + ':' + (battle.diff || '노말'));
                }
                addRep(player, '빛의 기사단', 50);
                if (battle.diff === '신화' || battle.diff === '영웅' || battle.diff === '노말') {
                    addLog('dungeon', player.name, battle.dungeon + ' ' + battle.diff + ' - ' + m.name + ' 클리어');
                }
                if (battle.dungeon.indexOf('길드레이드:') === 0) {
                    var gname = player.guildId;
                    if (gname && state.guilds[gname]) {
                        state.guilds[gname].exp += 800;
                        while (state.guilds[gname].exp >= state.guilds[gname].level * 1000) {
                            state.guilds[gname].exp -= state.guilds[gname].level * 1000;
                            state.guilds[gname].level += 1;
                        }
                        addLog('raid', player.name, '길드 레이드 - ' + m.name + ' 클리어');
                        var raidRewards = rollRewardTable(GuildRaidRewards);
                        for (var rr = 0; rr < raidRewards.length; rr++) addItem(player, raidRewards[rr].item, raidRewards[rr].qty);
                    }
                }
            }
            if (player.level >= 10) addAchievement(player, '성장 시작', '레벨 10 달성', '전설의 모험가');
            if (player.stats.dungeons >= 3) addAchievement(player, '던전 정복자', '던전 3회 클리어', '던전 정복자');
            if (player.gold >= 10000) addAchievement(player, '부자', '골드 10,000 달성', '전설의 모험가');
            var summary = '보상 요약: EXP +' + exp + ', 골드 +' + gold + ', 드랍 ' + (drops2.length || 0);
            var detail = '상세: EXP +' + exp + ', 골드 +' + gold + (drops2.length ? ', 드랍: ' + drops2.join(', ') : '');
            var isFinalStage = !battle.run || isDungeonFinalStage(battle);
            var tutorialMsg = applyTutorialProgress(player, 'kill');
            if (battle.dungeon && isFinalStage) tutorialMsg += applyTutorialProgress(player, 'dungeon');
            var seasonMsg = (battle.seasonDungeon && isFinalStage) ? recordSeasonDungeonScore(player, battle) : '';
            var challengeMsg = '';
            if (battle.challenge && isFinalStage) {
                var reason = '';
                var success = true;
                if (battle.challenge.noDamage && battle.challenge.takenDamage) { success = false; reason = '노데미지 조건 실패'; }
                challengeMsg = recordChallengeResult(player, battle, success, reason);
            }
            log += summary + '\n' + detail + (isFinalStage ? buildBattleEndHint(player) : '') + tutorialMsg + seasonMsg + challengeMsg;
            if (leveled) log += '\n레벨 업! 현재 레벨: ' + player.level;
            if (battle.run && !isDungeonFinalStage(battle)) {
                var nextStage2 = advanceDungeonStage(battle, player);
                var prog2 = formatDungeonProgress(battle.run);
                saveState();
                replier.reply(log + '\n다음 구역: ' + prog2 + '\n' + nextStage2.monster.name + ' 등장!\n' + buildPlayerStatusLine(player) + buildNextActionHint('dungeon-start'));
                return;
            }
            delete state.battles[sender];
            saveState();
            replier.reply(log);
            return;
        }

        // 몬스터 반격
        var mdmg = Math.max(1, (m.att || 5) - Math.floor(getBattleDefense(player, battle) * 0.4));
        player.hp -= mdmg;
        if (battle.challenge && battle.challenge.noDamage && mdmg > 0) {
            battle.challenge.takenDamage = true;
        }
        var dnotes2 = applyDurabilityLoss(player, 0, 1, 1);
        log += m.name + '의 반격! ' + mdmg + ' 데미지\n';
        if (dnotes2.length) log += '🧰 내구도: ' + dnotes2.join(', ') + '\n';
        if (player.hp <= 0) {
            player.hp = 1;
            delete state.battles[sender];
            saveState();
            replier.reply(log + '기절... HP 1로 회복');
            return;
        }
        var skillBar = buildSkillBar(player);
        saveState();
        replier.reply(log + '💚 ' + m.name + ' HP: ' + battle.hp + '/' + m.hp + '\n' + buildPlayerStatusLine(player) + buildNextActionLine() + skillBar);
        return;
    }

    // 도망
    if (cmd === '도망') {
        if (state.battles[sender]) { delete state.battles[sender]; saveState(); }
        replier.reply('도망쳤습니다.' + buildNextActionHint('escape'));
        return;
    }

    // 초보자 던전
    if (cmd === '초보던전') {
        var beginnerName = '초보자 수련동굴';
        var dmapB = getDungeonMap();
        var dungeonB = dmapB[beginnerName];
        if (!dungeonB) { replier.reply('초보 던전 데이터가 없습니다.'); return; }
        if (player.level > Config.BEGINNER_DUNGEON_MAX_LEVEL) {
            replier.reply('초보 던전은 레벨 ' + Config.BEGINNER_DUNGEON_MAX_LEVEL + '까지 입장 가능합니다.');
            return;
        }
        var runB = buildDungeonStages(beginnerName, dungeonB, '노말', player, { stageCount: 2, monsterMult: 0.9 });
        state.battles[sender] = { monster: runB.stages[0].monster, hp: runB.stages[0].monster.hp, bonus: Config.DUNGEON_BONUS_MULT * 1.2, dungeon: beginnerName, diff: '노말', playerLevel: player.level, run: runB };
        saveState();
        replier.reply('초보 던전 입장: ' + beginnerName + '\n' + formatDungeonProgress(runB) + '\n' + runB.stages[0].monster.name + ' 등장!' + buildNextActionHint('dungeon-start'));
        return;
    }

    // 중급 던전
    if (cmd === '중급던전') {
        var midName = '정예 훈련장';
        var dmapM2 = getDungeonMap();
        var dungeonM2 = dmapM2[midName];
        if (!dungeonM2) { replier.reply('중급 던전 데이터가 없습니다.'); return; }
        if (player.level < Config.MID_DUNGEON_MIN_LEVEL || player.level > Config.MID_DUNGEON_MAX_LEVEL) {
            replier.reply('중급 던전은 레벨 ' + Config.MID_DUNGEON_MIN_LEVEL + '~' + Config.MID_DUNGEON_MAX_LEVEL + '만 입장 가능합니다.');
            return;
        }
        var runM2 = buildDungeonStages(midName, dungeonM2, '노말', player, { stageCount: 3, monsterMult: 1.1 });
        state.battles[sender] = { monster: runM2.stages[0].monster, hp: runM2.stages[0].monster.hp, bonus: Config.DUNGEON_BONUS_MULT * 1.3, dungeon: midName, diff: '노말', playerLevel: player.level, run: runM2 };
        saveState();
        replier.reply('중급 던전 입장: ' + midName + '\n' + formatDungeonProgress(runM2) + '\n' + runM2.stages[0].monster.name + ' 등장!' + buildNextActionHint('dungeon-start'));
        return;
    }

    // 정예 사냥
    if (cmd === '정예사냥') {
        var zoneElite = player.currentZone || '묘냥의 숲';
        var baseMon = pickMonsterForZone(zoneElite, player.level);
        var eliteMon = scaleMonsterStats(baseMon, 1.25);
        eliteMon.name = '정예 ' + eliteMon.name;
        eliteMon.items = (eliteMon.items || []).concat(['강화석']);
        state.battles[sender] = { monster: eliteMon, hp: eliteMon.hp, bonus: 1.3, playerLevel: player.level, elite: true };
        saveState();
        replier.reply('[' + zoneElite + '] ' + eliteMon.name + ' 등장! 💚 HP ' + eliteMon.hp + '\n다음 행동: .공격 / .스킬 / .사용');
        return;
    }

    // 도전 모드
    if (cmd === '도전모드') {
        if (!arg) { replier.reply('사용: .도전모드 <던전> [시간] [노데미지]'); return; }
        var argsC = arg.split(/\s+/);
        var options = { timeLimitSec: Config.CHALLENGE_TIME_LIMIT_SEC, noDamage: false, noReward: true };
        var optionTokens = ['시간', '노데미지'];
        var nameTokens = [];
        for (var ci = 0; ci < argsC.length; ci++) {
            if (optionTokens.indexOf(argsC[ci]) !== -1) {
                if (argsC[ci] === '노데미지') options.noDamage = true;
            } else {
                nameTokens.push(argsC[ci]);
            }
        }
        var dName = nameTokens.join(' ').trim();
        if (!dName) { replier.reply('사용: .도전모드 <던전> [시간] [노데미지]'); return; }
        var dmapC = getDungeonMap();
        var resolvedC = resolveDungeonName(dName, dmapC);
        if (!resolvedC.name) { replier.reply('던전이 없습니다. .던전목록'); return; }
        var dungeonC = dmapC[resolvedC.name];
        if (dungeonC.minLevel && player.level < dungeonC.minLevel) { replier.reply('레벨이 낮습니다.'); return; }
        var runC = buildDungeonStages(resolvedC.name, dungeonC, '영웅', player, { monsterMult: 1.6 });
        state.battles[sender] = {
            monster: runC.stages[0].monster,
            hp: runC.stages[0].monster.hp,
            bonus: Config.DUNGEON_BONUS_MULT * 1.6,
            dungeon: resolvedC.name,
            diff: '도전',
            playerLevel: player.level,
            run: runC,
            challenge: {
                timeLimitSec: options.timeLimitSec,
                noDamage: options.noDamage,
                noReward: true,
                startedAt: Date.now(),
                takenDamage: false,
                key: resolvedC.name
            }
        };
        saveState();
        replier.reply('도전 모드 시작: ' + resolvedC.name + '\n제한 ' + options.timeLimitSec + '초 / 노데미지 ' + (options.noDamage ? 'ON' : 'OFF') + '\n' + formatDungeonProgress(runC) + '\n' + runC.stages[0].monster.name + ' 등장!' + buildNextActionHint('mutation'));
        return;
    }

    // 변이 던전
    if (cmd === '변이던전') {
        if (!arg) { replier.reply('사용: .변이던전 <던전> [노말/영웅/신화]'); return; }
        var argsM = arg.split(/\s+/);
        var diffTokenM = argsM[argsM.length - 1];
        var diffM = (diffTokenM === '노말' || diffTokenM === '영웅' || diffTokenM === '신화') ? diffTokenM : '노말';
        var dNameM = (diffTokenM === '노말' || diffTokenM === '영웅' || diffTokenM === '신화') ? argsM.slice(0, -1).join(' ') : arg;
        var dmapM = getDungeonMap();
        var resolvedM = resolveDungeonName(dNameM, dmapM);
        if (!resolvedM.name) { replier.reply('던전이 없습니다. .던전목록'); return; }
        var dungeonM = dmapM[resolvedM.name];
        if (dungeonM.minLevel && player.level < dungeonM.minLevel) { replier.reply('레벨이 낮습니다.'); return; }
        var mutation = buildMutationData();
        var runM = buildDungeonStages(resolvedM.name, dungeonM, diffM, player, {
            monsterHpMul: mutation.monsterHpMul,
            monsterAttMul: mutation.monsterAttMul,
            monsterDefMul: mutation.monsterDefMul,
            extraItems: ['룬석', '맹공 룬', '수호 룬', '생명 룬', '치명 룬', '회복 룬', '풍요 룬']
        });
        state.battles[sender] = {
            monster: runM.stages[0].monster,
            hp: runM.stages[0].monster.hp,
            bonus: Config.DUNGEON_BONUS_MULT * Config.MUTATION_REWARD_MULT,
            dungeon: resolvedM.name,
            diff: diffM,
            playerLevel: player.level,
            run: runM,
            mutation: mutation,
            playerAttMul: mutation.playerAttMul,
            playerDefMul: mutation.playerDefMul
        };
        saveState();
        replier.reply('변이 던전 시작: ' + resolvedM.name + ' (' + diffM + ')\n[규칙]\n' + formatMutationRules(mutation) + '\n' + formatDungeonProgress(runM) + '\n' + runM.stages[0].monster.name + ' 등장!' + buildNextActionHint('mutation'));
        return;
    }

    // 시즌 던전
    if (cmd === '시즌던전') {
        if (player.level < Config.SEASON_DUNGEON_MIN_LEVEL) { replier.reply('레벨 ' + Config.SEASON_DUNGEON_MIN_LEVEL + ' 이상부터 입장 가능합니다.'); return; }
        var runS = buildDungeonStages(SeasonDungeonData.name, SeasonDungeonData, '영웅', player, { monsterMult: 1.25, extraItems: SeasonDungeonData.dropItems || [] });
        state.battles[sender] = {
            monster: runS.stages[0].monster,
            hp: runS.stages[0].monster.hp,
            bonus: Config.DUNGEON_BONUS_MULT * 1.4,
            dungeon: SeasonDungeonData.name,
            diff: '시즌',
            playerLevel: player.level,
            run: runS,
            seasonDungeon: { startedAt: Date.now() }
        };
        saveState();
        replier.reply('시즌 던전 입장: ' + SeasonDungeonData.name + '\n' + formatDungeonProgress(runS) + '\n' + runS.stages[0].monster.name + ' 등장!' + buildNextActionHint('season-dungeon'));
        return;
    }

    // 시즌 던전 랭킹
    if (cmd === '시즌던전랭킹') {
        ensureSeasonDungeon();
        var sid = state.seasonDungeon.id;
        var ranks = state.seasonDungeonRank[sid] || {};
        var listRankS = [];
        for (var nameS in ranks) listRankS.push({ name: nameS, score: ranks[nameS].score, time: ranks[nameS].timeSec });
        listRankS.sort(function(a, b) { return b.score - a.score; });
        var outRS = '[시즌 던전 랭킹]\n';
        for (var iS = 0; iS < listRankS.length && iS < 10; iS++) {
            outRS += (iS + 1) + '. ' + listRankS[iS].name + ' - ' + listRankS[iS].score + '점 (' + listRankS[iS].time + '초)\n';
        }
        replier.reply(outRS.trim() + buildNextActionHint('season-dungeon'));
        return;
    }

    // 시즌 던전 보상
    if (cmd === '시즌던전보상') {
        ensureSeasonDungeon();
        var sid2 = state.seasonDungeon.id;
        var keyS = sid2 + ':' + sender;
        if (state.seasonDungeonRewards[keyS]) { replier.reply('이번 시즌 보상을 이미 받았습니다.'); return; }
        var rankData = state.seasonDungeonRank[sid2] || {};
        if (!rankData[sender]) { replier.reply('시즌 던전 기록이 없습니다.'); return; }
        var listS2 = [];
        for (var nameS2 in rankData) listS2.push({ name: nameS2, score: rankData[nameS2].score });
        listS2.sort(function(a, b) { return b.score - a.score; });
        var rank = 1;
        for (var iR = 0; iR < listS2.length; iR++) {
            if (listS2[iR].name === sender) { rank = iR + 1; break; }
        }
        var rewardGold = Config.SEASON_DUNGEON_REWARD_GOLD;
        if (rank === 1) {
            rewardGold += 3000;
            addItem(player, '룬각인서', 2);
            if (player.titles.indexOf('시즌 정복자') === -1) player.titles.push('시즌 정복자');
        }
        else if (rank <= 3) { rewardGold += 1500; addItem(player, '룬각인서', 1); }
        else if (rank <= 10) { rewardGold += 500; addItem(player, '룬석', 1); }
        player.gold += rewardGold;
        state.seasonDungeonRewards[keyS] = true;
        saveState();
        replier.reply('시즌 던전 보상 수령 완료! (랭킹 ' + rank + '위, 골드 +' + rewardGold + ')' + buildNextActionHint('season-dungeon'));
        return;
    }

    // 던전목록
    if (cmd === '던전목록') {
        var dmap = getDungeonMap();
        var dlist = [];
        for (var dn in dmap) dlist.push(dn);
        if (dlist.length === 0) { replier.reply('던전 데이터가 없습니다.'); return; }
        dlist.sort();
        replier.reply('[던전 목록]\n' + dlist.slice(0, 10).join('\n') + buildNextActionHint('dungeon-list'));
        return;
    }

    // 던전/인던
    if (cmd === '던전' || cmd === '인던') {
        if (!arg) { replier.reply('사용: .던전 <이름> [노말/영웅/신화]'); return; }
        var args = arg.split(/\s+/);
        var diffToken = args[args.length - 1];
        var diff = (diffToken === '노말' || diffToken === '영웅' || diffToken === '신화') ? diffToken : '노말';
        var dungeonName = (diffToken === '노말' || diffToken === '영웅' || diffToken === '신화') ? args.slice(0, -1).join(' ') : arg;
        if (!dungeonName) { replier.reply('사용: .던전 <이름> [노말/영웅/신화]'); return; }
        var dungeons = getDungeonMap();
        var resolved = resolveDungeonName(dungeonName, dungeons);
        if (!resolved.name) {
            var hint = resolved.suggestion ? '\n혹시 이건가요? ' + resolved.suggestion : '';
            replier.reply('던전이 없습니다. .던전목록' + hint);
            return;
        }
        dungeonName = resolved.name;
        var dungeon = dungeons[dungeonName];
        if (dungeon.minLevel && player.level < dungeon.minLevel) { replier.reply('레벨이 낮습니다.'); return; }
        if (dungeon.type === 'solo' && dungeon.maxLevel && player.level > dungeon.maxLevel) {
            replier.reply('이 던전은 레벨 ' + dungeon.maxLevel + '까지 권장됩니다.');
            return;
        }
        if (dungeon.type === 'beginner' && player.level > Config.BEGINNER_DUNGEON_MAX_LEVEL) {
            replier.reply('초보 던전은 레벨 ' + Config.BEGINNER_DUNGEON_MAX_LEVEL + '까지 입장 가능합니다.');
            return;
        }

        var diffKey = diff;
        var lockKey = dungeonName + ':' + diffKey;
        if (dungeon.weeklyLockout !== false) {
            if (getWeeklyLockout(player, lockKey) === getWeekKey()) {
                replier.reply('이번 주에는 이미 클리어했습니다.');
                return;
            }
        }

        var mult = diffKey === '영웅' ? 1.5 : (diffKey === '신화' ? 2.2 : 1.0);
        var opts = { isRaid: dungeon.type === 'raid' || dungeon.type === 'mythic' };
        if (dungeon.type === 'beginner') {
            opts.stageCount = 2;
            opts.monsterMult = 0.9;
            mult *= 1.2;
        }
        if (dungeon.type === 'solo') {
            opts.stageCount = 4;
            opts.monsterMult = 0.92;
            mult *= 1.2;
        }
        var run = buildDungeonStages(dungeonName, dungeon, diffKey, player, opts);
        state.battles[sender] = { monster: run.stages[0].monster, hp: run.stages[0].monster.hp, bonus: Config.DUNGEON_BONUS_MULT * mult, dungeon: dungeonName, diff: diffKey, playerLevel: player.level, run: run };
        saveState();
        replier.reply('던전 입장: ' + dungeonName + ' (' + diffKey + ')\n' + formatDungeonProgress(run) + '\n' + run.stages[0].monster.name + ' 등장!' + buildNextActionHint('dungeon-start'));
        return;
    }

    // 월드 이벤트
    if (cmd === '월드이벤트' || cmd === '주간이벤트') {
        var wk = getWeekKey();
        if (!state.worldEvent.week || state.worldEvent.week !== wk) {
            state.worldEvent.week = wk;
            state.worldEvent.boss = getWorldBoss();
            saveState();
        }
        var b = state.worldEvent.boss;
        replier.reply('[월드 이벤트]\n이번 주 보스: ' + b.name + '\n.침공 으로 전투' + buildNextActionHint('world-event'));
        return;
    }

    // 월드보스 (일일)
    if (cmd === '월드보스') {
        var entryDaily = ensureDailyWorldBoss();
        replier.reply(formatWorldBossStatus(entryDaily, player.name) + buildNextActionHint('world-boss'));
        return;
    }

    if (cmd === '월드보스공격') {
        var entryAttack = ensureDailyWorldBoss();
        if (entryAttack.defeated) {
            replier.reply('오늘의 월드보스는 이미 격파되었습니다.\n.월드보스보상 으로 보상을 확인하세요.' + buildNextActionHint('world-boss'));
            return;
        }
        if (entryAttack.attacked[player.name]) {
            replier.reply('오늘은 이미 기여했습니다.\n' + formatWorldBossStatus(entryAttack, player.name) + buildNextActionHint('world-boss'));
            return;
        }
        var dmg = calcWorldBossDamage(player, entryAttack.boss);
        if (dmg > entryAttack.hp) dmg = entryAttack.hp;
        entryAttack.hp -= dmg;
        entryAttack.contributions[player.name] = (entryAttack.contributions[player.name] || 0) + dmg;
        entryAttack.attacked[player.name] = true;
        var defeatedMsg = '';
        if (entryAttack.hp <= 0) {
            entryAttack.hp = 0;
            entryAttack.defeated = true;
            defeatedMsg = '\n월드보스를 격파했습니다! .월드보스보상 으로 기여도 보상을 받으세요.';
        }
        saveState();
        replier.reply('월드보스에 피해 ' + dmg + ' 기여!' + defeatedMsg + '\n' + formatWorldBossStatus(entryAttack, player.name) + buildNextActionHint('world-boss'));
        return;
    }

    if (cmd === '월드보스보상') {
        var entryReward = ensureDailyWorldBoss();
        if (!entryReward.defeated) {
            replier.reply('월드보스가 아직 격파되지 않았습니다.' + buildNextActionHint('world-boss'));
            return;
        }
        var myDmg = entryReward.contributions[player.name] || 0;
        if (myDmg <= 0) {
            replier.reply('기여도가 없습니다.\n.월드보스공격 으로 기여하세요.' + buildNextActionHint('world-boss'));
            return;
        }
        if (entryReward.rewards[player.name]) {
            replier.reply('이미 보상을 받았습니다.' + buildNextActionHint('world-boss'));
            return;
        }
        var totalDmg = 0;
        for (var nm in entryReward.contributions) totalDmg += entryReward.contributions[nm];
        var ratio = totalDmg > 0 ? (myDmg / totalDmg) : 0;
        var baseGold = 400 + Math.floor((entryReward.boss.level || 1) * 15);
        var baseExp = 300 + Math.floor((entryReward.boss.level || 1) * 12);
        var mult = 0.5 + (ratio * 1.5);
        var rewardGold = Math.floor(baseGold * mult);
        var rewardExp = Math.floor(baseExp * mult);
        player.gold += rewardGold;
        addExp(player, rewardExp);
        var box = ratio >= 0.2 ? '전설의 보물상자' : (ratio >= 0.08 ? '화려한 보물상자' : '낡은 보물상자');
        addItem(player, box, 1);
        entryReward.rewards[player.name] = true;
        saveState();
        replier.reply('월드보스 보상 지급! 골드 +' + rewardGold + ', EXP +' + rewardExp + ', 보물상자: ' + box + buildNextActionHint('world-boss'));
        return;
    }

    // 침공
    if (cmd === '침공') {
        var wk2 = getWeekKey();
        if (!state.worldEvent.week || state.worldEvent.week !== wk2) {
            state.worldEvent.week = wk2;
            state.worldEvent.boss = getWorldBoss();
        }
        if (getWeeklyLockout(player, '월드보스:주간') === wk2) { replier.reply('이번 주 보상은 이미 받았습니다.'); return; }
        var wb = state.worldEvent.boss;
        var run = buildDungeonStages('월드보스', null, '주간', player, { finalBoss: wb, isRaid: true });
        state.battles[sender] = { monster: run.stages[0].monster, hp: run.stages[0].monster.hp, bonus: 2.0, dungeon: '월드보스', diff: '주간', playerLevel: player.level, run: run };
        saveState();
        replier.reply('침공 시작!\n' + formatDungeonProgress(run) + '\n' + run.stages[0].monster.name + ' 등장!' + buildNextActionHint('dungeon-start'));
        return;
    }

    // 퀘스트 목록
    if (cmd === '퀘스트목록') {
        var list = [];
        for (var id in GameData.QuestDatabase) {
            var q = GameData.QuestDatabase[id];
            if ((q.levelReq || 1) <= player.level) list.push(id + ' - ' + q.title);
            if (list.length >= 10) break;
        }
        replier.reply('[퀘스트 목록]\n' + (list.length ? list.join('\n') : '없음') + buildNextActionHint('quest-list'));
        return;
    }

    // 일일 퀘스트
    if (cmd === '일일퀘스트') {
        if (!player.dailyQuest || player.dailyQuest.date !== getDateKey()) player.dailyQuest = generateDailyQuest(player);
        var dq = player.dailyQuest;
        replier.reply('[일일퀘스트]\n' + dq.target + ' ' + dq.progress + '/' + dq.count + buildNextActionHint('daily-quest'));
        return;
    }

    // 주간 퀘스트
    if (cmd === '주간퀘스트') {
        if (!player.weeklyQuest || player.weeklyQuest.week !== getWeekKey()) player.weeklyQuest = generateWeeklyQuest(player);
        var wq = player.weeklyQuest;
        replier.reply('[주간퀘스트]\n' + wq.target + ' ' + wq.progress + '/' + wq.count + buildNextActionHint('weekly-quest'));
        return;
    }

    // 일일 완료
    if (cmd === '일일완료') {
        var dq2 = player.dailyQuest;
        if (!dq2 || dq2.date !== getDateKey()) { replier.reply('일일 퀘스트가 없습니다.'); return; }
        if (dq2.progress < dq2.count) { replier.reply('목표를 달성하지 못했습니다.'); return; }
        var dailyGold = dq2.reward.gold + Math.floor(player.level * 8);
        var dailyExp = dq2.reward.exp + Math.floor(player.level * 5);
        player.gold += dailyGold;
        addExp(player, dailyExp);
        player.dailyQuest = null;
        saveState();
        replier.reply('일일 퀘스트 완료! 골드 +' + dailyGold + ', EXP +' + dailyExp + buildNextActionHint('quest-reward'));
        return;
    }

    // 주간 완료
    if (cmd === '주간완료') {
        var wq2 = player.weeklyQuest;
        if (!wq2 || wq2.week !== getWeekKey()) { replier.reply('주간 퀘스트가 없습니다.'); return; }
        if (wq2.progress < wq2.count) { replier.reply('목표를 달성하지 못했습니다.'); return; }
        var weeklyGold = Math.floor(wq2.reward.gold * 1.2) + Math.floor(player.level * 20);
        var weeklyExp = Math.floor(wq2.reward.exp * 1.2) + Math.floor(player.level * 12);
        player.gold += weeklyGold;
        addExp(player, weeklyExp);
        player.weeklyQuest = null;
        saveState();
        replier.reply('주간 퀘스트 완료! 골드 +' + weeklyGold + ', EXP +' + weeklyExp + buildNextActionHint('quest-reward'));
        return;
    }

    // 퀘스트 수락
    if (cmd === '퀘스트수락') {
        var qid = arg;
        var qdata = GameData.QuestDatabase[qid];
        if (!qdata) { replier.reply('퀘스트 ID가 없습니다.'); return; }
        if (player.quests[qid]) { replier.reply('이미 수락한 퀘스트입니다.'); return; }
        player.quests[qid] = { progress: {} };
        saveState();
        replier.reply('퀘스트 수락: ' + qdata.title + buildNextActionHint('quest-progress'));
        return;
    }

    // 퀘스트 현황
    if (cmd === '퀘스트현황') {
        var outQ = '[진행중 퀘스트]\n';
        var has = false;
        for (var q in player.quests) {
            var qinfo = GameData.QuestDatabase[q];
            if (!qinfo) continue;
            has = true;
            outQ += q + ' - ' + qinfo.title + '\n';
        }
        replier.reply((has ? outQ.trim() : '진행중인 퀘스트가 없습니다.') + buildNextActionHint('quest-progress'));
        return;
    }

    // 퀘스트 완료
    if (cmd === '퀘스트완료') {
        var qc = arg;
        var qd = GameData.QuestDatabase[qc];
        var qs = player.quests[qc];
        if (!qd || !qs) { replier.reply('완료 가능한 퀘스트가 없습니다.'); return; }
        var ok = true;
        if (qd.objectives) {
            for (var i = 0; i < qd.objectives.length; i++) {
                var obj = qd.objectives[i];
                if (obj.type === 'kill' || obj.type === 'talk') {
                    var cur = qs.progress[obj.target] || 0;
                    if (cur < obj.count) ok = false;
                } else if (obj.type === 'collect') {
                    var have = findItemCount(player, obj.target);
                    if (have < obj.count) ok = false;
                }
            }
        }
        if (!ok) { replier.reply('목표를 달성하지 못했습니다.'); return; }
        if (qd.objectives) {
            for (var i2 = 0; i2 < qd.objectives.length; i2++) {
                var obj2 = qd.objectives[i2];
                if (obj2.type === 'collect') {
                    removeItem(player, obj2.target, obj2.count);
                }
            }
        }
        if (qd.rewards) {
            player.gold += qd.rewards.gold || 0;
            addExp(player, qd.rewards.exp || 0);
            if (qd.rewards.items) {
                for (var ii = 0; ii < qd.rewards.items.length; ii++) addItem(player, qd.rewards.items[ii], 1);
            }
        }
        delete player.quests[qc];
        saveState();
        replier.reply('퀘스트 완료! 보상 지급.' + buildNextActionHint('quest-reward'));
        return;
    }

    // 제작
    if (cmd === '제작') {
        var recipeName = arg;
        var baseRecipes = GameData.CraftingRecipeData ? GameData.CraftingRecipeData.combination : {};
        var recipes = mergeMaps(baseRecipes, ExtraRecipes.combination || {});
        if (!recipeName || !recipes || !recipes[recipeName]) { replier.reply('레시피가 없습니다.'); return; }
        var r = recipes[recipeName];
        if (r.levelReq && (player.professions.blacksmith || 1) < r.levelReq) { replier.reply('전문기술 레벨 부족'); return; }
        for (var k = 0; k < r.materials.length; k++) {
            if (findItemCount(player, r.materials[k].name) < r.materials[k].count) { replier.reply('재료 부족'); return; }
        }
        for (var k2 = 0; k2 < r.materials.length; k2++) removeItem(player, r.materials[k2].name, r.materials[k2].count);
        player.gold -= r.cost || 0;
        addItem(player, r.result.name, r.result.count || 1);
        saveState();
        replier.reply('제작 완료: ' + r.result.name + buildNextActionHint('craft'));
        return;
    }

    // 요리
    if (cmd === '요리') {
        var cookName = arg;
        var baseCooking = GameData.CraftingRecipeData ? GameData.CraftingRecipeData.cooking : {};
        var cooking = mergeMaps(baseCooking, ExtraRecipes.cooking || {});
        if (!cookName) {
            var list = [];
            for (var cname in cooking) list.push(cname);
            if (list.length === 0) { replier.reply('요리 레시피가 없습니다.'); return; }
            list.sort();
            replier.reply('[요리 레시피]\n' + list.slice(0, 20).join('\n') + '\n사용: .요리 <아이템>' + buildNextActionHint('cook'));
            return;
        }
        if (!cooking || !cooking[cookName]) { replier.reply('요리 레시피가 없습니다.'); return; }
        var cr = cooking[cookName];
        if (cr.levelReq && (player.professions.cooking || 1) < cr.levelReq) { replier.reply('요리 레벨 부족'); return; }
        if (findItemCount(player, cr.fish.name) < cr.fish.count) { replier.reply('물고기 부족'); return; }
        removeItem(player, cr.fish.name, cr.fish.count);
        addItem(player, cr.result.name, cr.result.count || 1);
        if (player.professions) player.professions.cooking += 1;
        saveState();
        replier.reply('요리 완료: ' + cr.result.name + buildNextActionHint('cook'));
        return;
    }

    // 낚시
    if (cmd === '낚시') {
        var last = state.lastFishing[sender] || 0;
        if (Date.now() - last < Config.FISH_BASE_DELAY_MS) { replier.reply('잠시 쉬었다가 낚시하세요.'); return; }
        state.lastFishing[sender] = Date.now();
        var rarity = rollFishRarity(player.fishingLevel);
        var f = pickFishByRarity(rarity);
        if (!f) { replier.reply('물고기 데이터가 없습니다.'); return; }
        var size = rollFishSize();
        addItem(player, f.name, 1);
        addFishBag(player, f.name, size);
        var leveledFish = addFishingExp(player, 15);
        player.stats.fishing = (player.stats.fishing || 0) + 1;
        if (player.stats.fishing >= 10) addAchievement(player, '낚시왕', '물고기 10마리 낚기', '낚시왕');
        saveState();
        replier.reply('낚시 성공! ' + f.name + ' (' + rarity + ', 크기 ' + size + 'm)\n' + (leveledFish ? '낚시 레벨 업! Lv.' + player.fishingLevel : '') + buildNextActionHint('fishing'));
        return;
    }

    // 낚시정보
    if (cmd === '낚시정보') {
        replier.reply('낚시 Lv.' + player.fishingLevel + ' (' + player.fishingExp + '/' + player.maxFishingExp + ')' + buildNextActionHint('fishing-info'));
        return;
    }

    // 낚시판매
    if (cmd === '낚시판매') {
        var sold = sellAllFish(player);
        player.gold += sold;
        saveState();
        replier.reply('물고기 판매 완료. 골드 +' + sold + buildNextActionHint('fishing'));
        return;
    }

    // 펫획득
    if (cmd === '펫획득') {
        if (player.pet && player.pet.type) { replier.reply('이미 펫이 있습니다.'); return; }
        if (findItemCount(player, '펫 알') <= 0) { replier.reply('펫 알이 필요합니다.'); return; }
        var pets = GameData.PetSystemData && GameData.PetSystemData.pets ? GameData.PetSystemData.pets : {};
        var names = [];
        for (var pn in pets) names.push(pn);
        if (names.length === 0) { replier.reply('펫 데이터가 없습니다.'); return; }
        var petName = pickRandom(names);
        removeItem(player, '펫 알', 1);
        player.pet = { type: petName, level: 1, exp: 0 };
        if (player.petCollection.indexOf(petName) === -1) player.petCollection.push(petName);
        saveState();
        replier.reply('펫 획득: ' + petName);
        return;
    }

    // 펫정보
    if (cmd === '펫정보') {
        if (!player.pet || !player.pet.type) { replier.reply('펫이 없습니다.'); return; }
        var nick = player.pet.nickname ? ' (' + player.pet.nickname + ')' : '';
        replier.reply('펫: ' + player.pet.type + nick + ' Lv.' + player.pet.level + ' EXP ' + player.pet.exp + '/' + Config.PET_LEVEL_EXP + buildNextActionHint('pet'));
        return;
    }

    // 펫먹이
    if (cmd === '펫먹이') {
        if (!player.pet || !player.pet.type) { replier.reply('펫이 없습니다.'); return; }
        if (findItemCount(player, '펫 먹이') <= 0) { replier.reply('펫 먹이가 없습니다.'); return; }
        removeItem(player, '펫 먹이', 1);
        player.pet.exp += Config.PET_EXP_PER_FEED;
        if (player.pet.exp >= Config.PET_LEVEL_EXP) { player.pet.exp = 0; player.pet.level += 1; }
        if (player.pet.level >= 5) addAchievement(player, '펫 친구', '펫 레벨 5 달성', '전설의 모험가');
        saveState();
        replier.reply('펫 먹이 사용. 펫 레벨: ' + player.pet.level + buildNextActionHint('pet'));
        return;
    }

    // 펫훈련
    if (cmd === '펫훈련') {
        if (!player.pet || !player.pet.type) { replier.reply('펫이 없습니다.'); return; }
        if (player.gold < Config.PET_TRAIN_COST) { replier.reply('골드 부족'); return; }
        player.gold -= Config.PET_TRAIN_COST;
        player.pet.exp += Config.PET_TRAIN_EXP;
        if (player.pet.exp >= Config.PET_LEVEL_EXP) { player.pet.exp = 0; player.pet.level += 1; }
        if (player.pet.level >= 5) addAchievement(player, '펫 친구', '펫 레벨 5 달성', '전설의 모험가');
        saveState();
        replier.reply('펫 훈련 완료! 펫 레벨: ' + player.pet.level + buildNextActionHint('pet'));
        return;
    }

    // 펫이름
    if (cmd === '펫이름') {
        if (!player.pet || !player.pet.type) { replier.reply('펫이 없습니다.'); return; }
        if (!arg) { replier.reply('사용: .펫이름 <이름>'); return; }
        player.pet.nickname = arg;
        saveState();
        replier.reply('펫 이름 설정: ' + arg);
        return;
    }

    // 펫방생
    if (cmd === '펫방생') {
        if (!player.pet || !player.pet.type) { replier.reply('펫이 없습니다.'); return; }
        player.pet = null;
        saveState();
        replier.reply('펫을 방생했습니다.');
        return;
    }

    // 펫탐험
    if (cmd === '펫탐험') {
        if (!player.pet || !player.pet.type) { replier.reply('펫이 없습니다.'); return; }
        var lastExplore = state.petExplore[sender] || 0;
        if (Date.now() - lastExplore < Config.PET_EXPLORE_COOLDOWN_MS) {
            var sec2 = Math.ceil((Config.PET_EXPLORE_COOLDOWN_MS - (Date.now() - lastExplore)) / 1000);
            replier.reply('펫 탐험 대기: ' + sec2 + '초');
            return;
        }
        state.petExplore[sender] = Date.now();
        var rewardGold = rand(50, 150) + player.pet.level * 5;
        player.gold += rewardGold;
        player.pet.exp += 20;
        if (player.pet.exp >= Config.PET_LEVEL_EXP) { player.pet.exp = 0; player.pet.level += 1; }
        if (player.pet.level >= 5) addAchievement(player, '펫 친구', '펫 레벨 5 달성', '전설의 모험가');
        if (Math.random() < 0.3) addItem(player, '펫 먹이', 1);
        saveState();
        replier.reply('펫 탐험 완료! 골드 +' + rewardGold + (Math.random() < 0.3 ? '\n펫 먹이 획득!' : '') + buildNextActionHint('pet'));
        return;
    }

    // 탈것 획득
    if (cmd === '탈것획득') {
        var mounts = GameData.MountDatabase || {};
        var mlist = [];
        for (var mn in mounts) mlist.push(mn);
        if (mlist.length === 0) { replier.reply('탈것 데이터가 없습니다.'); return; }
        var pick = pickRandom(mlist);
        if (player.mounts.indexOf(pick) === -1) player.mounts.push(pick);
        saveState();
        replier.reply('탈것 획득: ' + pick);
        return;
    }

    // 탈것 목록
    if (cmd === '탈것목록') {
        if (!player.mounts || player.mounts.length === 0) { replier.reply('보유한 탈것이 없습니다.'); return; }
        replier.reply('[탈것]\n' + player.mounts.join('\n') + buildNextActionHint('mount'));
        return;
    }

    // 탈것 타기
    if (cmd === '탈것타기') {
        if (!arg) { replier.reply('사용: .탈것타기 <이름>'); return; }
        if (player.mounts.indexOf(arg) === -1) { replier.reply('보유한 탈것이 아닙니다.'); return; }
        player.activeMount = arg;
        saveState();
        replier.reply('탈것 탑승: ' + arg + buildNextActionHint('mount'));
        return;
    }

    // 도감
    if (cmd === '도감') {
        var petCount = player.petCollection ? player.petCollection.length : 0;
        var mountCount = player.mounts ? player.mounts.length : 0;
        replier.reply('[도감]\n펫: ' + petCount + '종\n탈것: ' + mountCount + '종');
        return;
    }

    // 지역 목록
    if (cmd === '지역목록') {
        var zones = GameData.ZoneData || {};
        var zlist = [];
        for (var zn in zones) zlist.push(zn);
        if (zlist.length === 0) { replier.reply('지역 데이터가 없습니다.'); return; }
        replier.reply('[지역 목록]\n' + zlist.slice(0, 10).join('\n') + buildNextActionHint('zone'));
        return;
    }

    // 지역 이동
    if (cmd === '지역이동') {
        var zname = arg;
        if (!zname) { replier.reply('사용: .지역이동 <이름>'); return; }
        var z = GameData.ZoneData && GameData.ZoneData[zname];
        if (!z && GameData.ZoneData) {
            var normalized = zname.replace(/\s+/g, '');
            for (var znk in GameData.ZoneData) {
                if (znk.replace(/\s+/g, '') === normalized) { z = GameData.ZoneData[znk]; zname = znk; break; }
            }
        }
        if (!z) { replier.reply('지역이 없습니다.'); return; }
        if (!Config.ALLOW_FREE_TRAVEL && z.levelReq && player.level < z.levelReq) { replier.reply('레벨이 낮습니다.'); return; }
        player.currentZone = zname;
        if (player.discoveredZones.indexOf(zname) === -1) player.discoveredZones.push(zname);
        saveState();
        replier.reply('지역 이동: ' + zname + buildNextActionHint('zone'));
        return;
    }

    // 탐험
    if (cmd === '탐험') {
        var zones2 = GameData.ZoneData || {};
        var names = [];
        for (var zn2 in zones2) names.push(zn2);
        if (names.length === 0) { replier.reply('탐험할 지역이 없습니다.'); return; }
        var found = pickRandom(names);
        if (player.discoveredZones.indexOf(found) === -1) player.discoveredZones.push(found);
        var treasure = Math.random() < 0.2;
        if (treasure) addItem(player, '낡은 보물상자', 1);
        saveState();
        replier.reply('탐험 성공: ' + found + (treasure ? '\n보물상자 발견!' : '') + buildNextActionHint('explore'));
        return;
    }

    // 펫진화
    if (cmd === '펫진화') {
        if (!player.pet || !player.pet.type) { replier.reply('펫이 없습니다.'); return; }
        var evol = GameData.PetSystemData && GameData.PetSystemData.evolutions ? GameData.PetSystemData.evolutions[player.pet.type] : null;
        if (!evol) { replier.reply('진화 정보가 없습니다.'); return; }
        if (player.pet.level < evol.requiredLevel) { replier.reply('펫 레벨 부족'); return; }
        if (findItemCount(player, evol.requiredItem) <= 0) { replier.reply('진화 아이템 부족: ' + evol.requiredItem); return; }
        removeItem(player, evol.requiredItem, 1);
        player.pet.type = evol.evolvesTo;
        saveState();
        replier.reply('펫 진화 완료: ' + player.pet.type);
        return;
    }

    // 보물상자
    if (cmd === '보물상자') {
        if (!arg) {
            var owned = [];
            for (var ii = 0; ii < player.inventory.length; ii++) {
                var it = player.inventory[ii];
                var resolvedName = resolveTreasureBoxName(it.name);
                if (TreasureBoxData[resolvedName]) owned.push(it.name + ' x' + it.count);
            }
            replier.reply('사용: .보물상자 <이름>\n보유 상자: ' + (owned.length ? '\n' + owned.join('\n') : '없음') + buildNextActionHint('treasure'));
            return;
        }

        var inputBox = arg;
        var resolvedBox = resolveTreasureBoxName(inputBox);
        var boxTable = TreasureBoxData[resolvedBox];
        if (!boxTable) { replier.reply('상자 데이터가 없습니다.'); return; }

        var keyItem = getTreasureBoxKey(resolvedBox);
        if (keyItem && findItemCount(player, keyItem) <= 0) {
            replier.reply('열쇠가 필요합니다: ' + keyItem);
            return;
        }

        var actualBoxName = inputBox;
        if (findItemCount(player, actualBoxName) <= 0) {
            if (findItemCount(player, resolvedBox) > 0) actualBoxName = resolvedBox;
        }
        if (findItemCount(player, actualBoxName) <= 0) { replier.reply('상자가 없습니다.'); return; }

        removeItem(player, actualBoxName, 1);
        if (keyItem) removeItem(player, keyItem, 1);
        var result = rollTreasureBoxReward(boxTable);
        addItem(player, result.item, result.count || 1);
        saveState();
        replier.reply('보물상자 결과: ' + result.item + ' x' + (result.count || 1) + buildNextActionHint('treasure'));
        return;
    }

    // 상점 비판매 목록
    if (cmd === '비판매목록') {
        if (!GameData || !GameData.ShopDatabase || Object.keys(GameData.ShopDatabase).length === 0) loadGameData();
        var argsNon = arg ? arg.split(/\s+/) : [];
        var filter = '';
        var page = 1;
        if (argsNon.length > 0) {
            if (argsNon[0] === '아이템' || argsNon[0] === '펫' || argsNon[0] === '탈것') {
                filter = argsNon[0];
                page = parseInt(argsNon[1], 10) || 1;
            } else {
                var p = parseInt(argsNon[0], 10);
                if (!isNaN(p)) page = p;
            }
        }

        var itemList = (filter === '' || filter === '아이템') ? getNonShopItemNames() : [];
        var petList = (filter === '' || filter === '펫') ? getNonShopPetNames() : [];
        var mountList = (filter === '' || filter === '탈것') ? getNonShopMountNames() : [];
        if (itemList.length === 0 && petList.length === 0 && mountList.length === 0) {
            replier.reply('비판매 목록이 없습니다.');
            return;
        }
        var perPage = 15;
        var total = itemList.length + petList.length + mountList.length;
        var totalPages = Math.max(1, Math.ceil(total / perPage));
        page = Math.max(1, Math.min(totalPages, page));
        var start = (page - 1) * perPage;
        var combined = [];
        for (var i = 0; i < itemList.length; i++) combined.push('[아이템] ' + itemList[i]);
        for (var j = 0; j < petList.length; j++) combined.push('[펫] ' + petList[j]);
        for (var k = 0; k < mountList.length; k++) combined.push('[탈것] ' + mountList[k]);
        var slice = combined.slice(start, start + perPage);
        var title = '[상점 비판매 목록' + (filter ? ' - ' + filter : '') + ']';
        replier.reply(title + ' (' + page + '/' + totalPages + ')\n' + slice.join('\n') + buildNextActionHint('shop-list'));
        return;
    }

    // 상점
    if (cmd === '상점') {
        if (!GameData || !GameData.ShopDatabase || Object.keys(GameData.ShopDatabase).length === 0) loadGameData();
        var shopDb = GameData.ShopDatabase || {};
        var shopKeys = Object.keys(shopDb);
        if (shopKeys.length === 0) { replier.reply('상점 데이터가 없습니다.'); return; }

        var argsShop = arg ? arg.split(/\s+/) : [];
        var shopName = argsShop[0] || '';
        var pageArg = argsShop[1] || '';

        if (!shopName || !shopDb[shopName]) {
            var listPage = 1;
            if (shopName && !shopDb[shopName]) {
                var parsed = parseInt(shopName, 10);
                if (!isNaN(parsed)) listPage = parsed;
            }
            var perPage = 10;
            var totalPages = Math.max(1, Math.ceil(shopKeys.length / perPage));
            listPage = Math.max(1, Math.min(totalPages, listPage));
            var start = (listPage - 1) * perPage;
            var slice = shopKeys.slice(start, start + perPage);
            replier.reply('[상점 목록] (' + listPage + '/' + totalPages + ')\n' + slice.join('\n') + '\n사용: .상점 <상점명> [페이지]' + buildNextActionHint('shop-list'));
            return;
        }

        var shop = shopDb[shopName];
        var filterResult = getFilteredShopItems(player, shopName, shop);
        var items = filterResult.items || [];
        var metaParts = [];
        if (filterResult.rotation && filterResult.rotation.groups > 1) {
            metaParts.push('로테이션: ' + (filterResult.rotation.type === 'season' ? '시즌' : '주간') + ' ' + (filterResult.rotation.index + 1) + '/' + filterResult.rotation.groups);
        }
        if (filterResult.lockedRotation) metaParts.push('잠김(로테이션) ' + filterResult.lockedRotation + '개');
        if (filterResult.lockedRep) metaParts.push('잠김(평판) ' + filterResult.lockedRep + '개');
        if (filterResult.repFaction) metaParts.push('평판 연동: ' + filterResult.repFaction);
        var metaLine = metaParts.length ? metaParts.join(' | ') : '';
        if (items.length === 0) {
            replier.reply('현재 판매 중인 아이템이 없습니다.' + (metaLine ? '\n' + metaLine : ''));
            return;
        }

        var page = parseInt(pageArg, 10) || 1;
        var perPageItems = 10;
        var totalItemPages = Math.max(1, Math.ceil(items.length / perPageItems));
        page = Math.max(1, Math.min(totalItemPages, page));

        var outShop = '[' + shopName + '] (' + page + '/' + totalItemPages + ')\n';
        if (metaLine) outShop += metaLine + '\n';
        var startItem = (page - 1) * perPageItems;
        for (var si = startItem; si < items.length && si < startItem + perPageItems; si++) {
            var entry = items[si];
            var itemName = entry.item || entry;
            var iData = GameData.ItemDatabase[itemName] || {};
            var price = iData.price || 0;
            outShop += '- ' + itemName + (price ? ' (' + price + 'G)' : '') + '\n';
        }
        outShop += '구매: .구매 <아이템>';
        replier.reply(outShop.trim() + buildNextActionHint('shop-view'));
        return;
    }

    // 구매
    if (cmd === '구매') {
        var buy = arg;
        if (!buy) { replier.reply('사용: .구매 <아이템>'); return; }
        if (!GameData || !GameData.ShopDatabase || Object.keys(GameData.ShopDatabase).length === 0) loadGameData();
        var shopEntry = getShopEntry(buy);
        if (!shopEntry) { replier.reply('상점에서 판매하지 않는 아이템입니다.'); return; }
        var access = getShopItemAccess(player, shopEntry.shopName, shopEntry.entry, shopEntry.shop);
        if (!access.rotationOk) { replier.reply('이번 주 로테이션 품목이 아닙니다.'); return; }
        if (!access.repOk) {
            var curRep = (player.rep && access.repFaction) ? (player.rep[access.repFaction] || 0) : 0;
            replier.reply('평판 부족: ' + access.repFaction + ' ' + curRep + '/' + access.repRequired);
            return;
        }
        var itemData = GameData.ItemDatabase[buy];
        if (!itemData) { replier.reply('아이템 데이터가 없습니다.'); return; }
        var price = itemData.price || 0;
        if (player.gold < price) { replier.reply('골드 부족'); return; }

        var today = getDateKey();
        var key = today + ':' + buy;
        var limit = Config.SHOP_DAILY_BUY_LIMIT || 0;
        if (limit > 0) {
            var cur = player.shopPurchases[key] || 0;
            if (cur >= limit) { replier.reply('오늘 구매 한도 초과: ' + buy); return; }
        }
        if (shopEntry.entry && shopEntry.entry.stock !== undefined && shopEntry.entry.stock !== null) {
            if (shopEntry.entry.stock === 0) { replier.reply('재고가 없습니다.'); return; }
            if (shopEntry.entry.stock > 0) shopEntry.entry.stock -= 1;
        }

        player.gold -= price;
        addItem(player, buy, 1);
        if (limit > 0) player.shopPurchases[key] = (player.shopPurchases[key] || 0) + 1;
        saveState();
        replier.reply('구매 완료: ' + buy + buildNextActionHint('trade'));
        return;
    }

    // 판매
    if (cmd === '판매') {
        var sell = arg;
        if (!sell || findItemCount(player, sell) <= 0) { replier.reply('아이템 없음'); return; }
        var data = GameData.ItemDatabase[sell];
        var value = data && data.price ? Math.floor(data.price * 0.4) : 5;
        removeItem(player, sell, 1);
        player.gold += value;
        saveState();
        replier.reply('판매 완료: ' + sell + ' (+ ' + value + 'G)' + buildNextActionHint('trade'));
        return;
    }

    // 경매 목록
    if (cmd === '경매목록') {
        var listA = state.market.listings || [];
        if (listA.length === 0) { replier.reply('등록된 경매가 없습니다.'); return; }
        var outA = '[경매목록]\n';
        for (var li = 0; li < listA.length && li < 10; li++) {
            var it = listA[li];
            outA += (li + 1) + '. ' + it.item + ' x' + it.qty + ' - ' + it.price + 'G (판매자 ' + it.seller + ')\n';
        }
        replier.reply(outA.trim());
        return;
    }

    // 경매 등록
    if (cmd === '경매등록') {
        var argsA = arg.split(/\s+/);
        var itemA = argsA[0];
        var priceA = parseInt(argsA[1], 10);
        var qtyA = parseInt(argsA[2], 10) || 1;
        if (!itemA || !priceA || priceA <= 0) { replier.reply('사용: .경매등록 <아이템> <가격> [수량]'); return; }
        if (findItemCount(player, itemA) < qtyA) { replier.reply('아이템이 부족합니다.'); return; }
        var fee = Math.floor(priceA * qtyA * Config.AUCTION_LIST_FEE_RATE);
        if (player.gold < fee) { replier.reply('등록 수수료 부족: ' + fee + 'G'); return; }
        removeItem(player, itemA, qtyA);
        player.gold -= fee;
        state.market.listings.push({ seller: sender, item: itemA, price: priceA, qty: qtyA });
        saveState();
        replier.reply('경매 등록 완료: ' + itemA + ' x' + qtyA + ' (' + priceA + 'G)');
        return;
    }

    // 경매 구매
    if (cmd === '경매구매') {
        var idx = parseInt(arg, 10) - 1;
        var listB = state.market.listings || [];
        if (isNaN(idx) || !listB[idx]) { replier.reply('경매 번호가 잘못되었습니다.'); return; }
        var listing = listB[idx];
        var totalPrice = listing.price * listing.qty;
        if (player.gold < totalPrice) { replier.reply('골드 부족'); return; }
        player.gold -= totalPrice;
        addItem(player, listing.item, listing.qty);
        var seller = state.players[listing.seller];
        if (seller) {
            normalizePlayer(seller);
            seller.gold += Math.floor(totalPrice * 0.95);
        }
        listB.splice(idx, 1);
        saveState();
        replier.reply('경매 구매 완료: ' + listing.item + ' x' + listing.qty);
        return;
    }

    // 경매 취소
    if (cmd === '경매취소') {
        var idxC = parseInt(arg, 10) - 1;
        var listC = state.market.listings || [];
        if (isNaN(idxC) || !listC[idxC]) { replier.reply('경매 번호가 잘못되었습니다.'); return; }
        var l = listC[idxC];
        if (l.seller !== sender) { replier.reply('본인 경매만 취소할 수 있습니다.'); return; }
        var cancelFee = Math.floor(l.price * l.qty * Config.AUCTION_CANCEL_FEE_RATE);
        if (player.gold < cancelFee) { replier.reply('취소 수수료 부족: ' + cancelFee + 'G'); return; }
        player.gold -= cancelFee;
        addItem(player, l.item, l.qty);
        listC.splice(idxC, 1);
        saveState();
        replier.reply('경매 취소 완료: ' + l.item + ' x' + l.qty);
        return;
    }
}


