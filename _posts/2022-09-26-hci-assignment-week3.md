---
creation date: Sunday 25th September 2022 22:22:35
modification date: Sunday 25th September 2022 22:25:52
alias:
tags:
layout: post
title: The Effect of Using an Auto-Generated Anime Avatar on Player-Avatar Identification
author: Jeongwoo
use_math: false
comments: false
---

# wang_effect_2022

# [The Effect of Using an Auto-Generated Anime Avatar on Player-Avatar Identification](https://dl.acm.org/doi/10.1145/3511616.3513094)

## ABSTRACT

Game avatars are a way to represent players within a virtual game world. ==Player-avatar identification can improve game enjoyment, where avatar customisation and player avatar similarity are potential factors that contribute to identification.== Recent emerging technologies, such as image translation algorithms, offer new alternatives for avatar customisation. However, its effectiveness remains unknown. Image translation algorithms enable users to automatically generate avatars that look similar to themselves from their self images (selfies). ==This research aims to investigate how player-avatar appearance similarity can affect identification== by conducting three comparative experiments with different avatar appearance within an offline single-player game. Our results indicate a positive effect of using an auto-generated anime avatar compared to using a default avatar. No correlation was found between player-avatar appearance similarity and player-avatar identification in general. ==We therefore posit that avatar customisation acts as a greater contributor than player-avatar appearance similarity to avatar identification== in offline single-player games.

---

# 이 논문의 큰 흐름

> ## 요약의 요약
>
> - Image Translation Algorithm과 같은 최신 기술들이 ==아바타 개인화==의 새로운 대체재^[이미지 번역 알고리즘으로 본인의 셀피와 유사한 아바타를 자동으로 만들 수 있음]를 제공하지만, 이에 대한 효과는 잘 알려지지 않았다.
> - 본 연구는 오프라인 1인용 게임 내에서 서로 다른 아바타 모양을 가진 세 가지 비교 실험을 수행하여 플레이어-아바타 모양의 유사성이 identification^[게임에서 동일시(identification)는 ==게임의 역할이 일종의 자기 프라이밍(self-priming) 역할==을 하여 플레이어가 미디어가 지속되는 동안 게임 캐릭터의 속성을 자신의 자기 지각으로 상상 속으로 정신적으로 흡수하도록 이끄는 자기 지각의 일시적인 변화로 정의된다. → 게임내 아바타에 대한 몰입 정도? 라고 봐도 무방할 듯... 이전 연구에서는 powerful determinant of player engagement라고 했대요]에 어떤 영향을 미치는지 조사하는 것을 목적으로 한다.
> - 결과적으로, default 아바타를 사용한 경우에 비해 ==알고리즘으로 자동생성된 아바타를 사용한 경우에 긍정적인 효과가 있었다==
> - 플레이어-아바타 외모의 similarity와 identification 사이에는 ==상관관계가 없었다==
> - 따라서 아바타 customization(개인화)가^[오프라인 싱글 플레이어 게임에서] 아바타 identification에 대한 플레이어 아바타 외형 similarity보다 더 크게 작용한다고 가정합니다.

## Research Questions

1. Does an ==anime avatar that is auto-generated== using an image translation algorithm affect ==avatar identification==? → 자동 생성된 anime avatar가 avatar identification에 영향을 주는가?
2. Does ==avatar identification== increase as the player-avatar appearance ==similarity== increases? → 플레이어-아바타의 외모 유사도가 증가하면 avatar identification 또한 증가하는가?

## Experiment Design^[1. no customization, 2. customize + similar, 3. customize + almost same]

- Mode 1. default avatar : (S+ `+` C-)
- Mode 2. player's selfie → avatar : (S+ `+` C+)^[image translation algorithm으로 자동 생성된 아바타 = 플레이어와 어느 정도 유사]
- Mode 3. using player's selfie ==DIRECTLY== as avatar : (S++ `+` C+)^[플레이어의 selfie 그대로 갖다붙여 = 플레이어 빼다 박음]
- 실험 참가자는 위 세가지 모드로 게임 플레이를 수행한 후, player-avatar identification 측정을 위한 survey와 post-test interview를 수행

### The Game

- 이 연구의 실험을 하기 위해서는 image translation algorithm을 이용해서 ==character customization 기능==이 탑재된 게임이 필요한데,
- 기존에 그런 게임이 없어서 ==a stand-alone single-player game==을, 오롯이 이 연구를 위해 만들었다.

#### **Game Design** : 7가지 원칙을 바탕으로 게임을 설계함

1. 게임은 세가지 customization setting을 제공해야함 - 위 Experiment Design 참고
2. 플레이어는 게임 하는 동안 ==emotionally engaged==되어야 함
3. 게임은 task-based environment여야 함(e.g. 퍼즐 맞추기, 적과 경쟁하기)^[플레이어의 아바타와의 identification을 촉진할 수 있어서]
4. 게임은 플레이어 경험을 향상시킨다고 검증된, 효과적인 narrative를 포함해야 한다^[이 게임에서는 NPC와의 대화로 구현함]
5. 플레이어는 본인의 아바타의 모습을 게임하는 동안 계속 볼 수 있어야 한다^[1인칭 게임이라 자기 모습을 거의 볼 일이 없으므로 좌측 상단에 걸려있는 프로필 이미지를 아바타로 지정하였음]
6. 한 게임 세션당 플레이할 수 있는 시간은 limited
7. 게임의 난이도는 비교적 쉬운 편이어야 함

→ 이런 원칙으로 만들어진 게임은 바로, ==방탈출 게임(room escape game)==

![[Screen Shot 2022-09-26 at 1.33.33 AM.png]]

### Measurement

- PAI^[Player-Avatar Identification] : 24-item PAI를 본 연구에 맞게 수정하여 사용

## Result

1. `Mode 1`에 비해 `Mode 2`와 `Mode 3`이^[위 Experiment Design에서 언급된 3가지 settings] avatar identification 더 긍정적인 효과를 주었음
2. 그러나, similarity와 avatar identification 사이에는 관계가 없어 보임
3. 그러므로, 중요한건 customization이지 similarity가 아니다.

## Contributions

1. anime avatars that are auto-generated using an image translation algorithm can improve player-avatar identification in an offline single-player game → ==자동 생성된 anime avatar가 player-avatar identification 향상시킴을 밝혔다==
2. avatar identification does not seem to increase as player-avatar similarity increases. → ==그런데 이게 꼭 player-avatar similarity가 증가한다고 함께 증가하는건 아니더라==

## Discussion

### Customization or appearance similarity?

- 플레이어와 NPC 간의 대화가 제공되었지만 이러한 형태의 "피상적인" social element는 일부 플레이어가 게임 내 정체성의 외모에 관심을 갖도록 동기를 부여하지 않았다. → ==similarity가 더 빛을 발하려면 "real" social element가 있었어야 한다.==
- 사람들을 몰입시키는 게임 콘텐츠는 퍼즐에 상당한 집중을 요구하고 플레이어가 아바타에 주의를 덜 기울이도록 한다.

### Customization and appearance similarity?

- 외모 similarity가 임계값을 초과하고 참가자의 실제 모습과 너무 유사해지면(즉, 사실적인 자기 유사 아바타) 플레이어가 자신의 아바타와 덜 identification 하는 경향이 있을 수 있다. → 이것은 "불쾌한 골짜기" 효과
- ==본인의 외모에 만족하는 사람들에게만 해당되는 이야기일 수 있음== - 본인과 similar한 avatar에게 더 identification 효과가 있음

### Anime Avatar vs Selfie as Avatar

- 위의 변수(예: 게임 유형, 플레이어의 개인차)의 영향에도 불구하고 Mode 2에서 Mode 3으로의 identification 정도가 크게 증가하지 않은 것은 다양한 다른 요인 때문일 수도 있다.

### Auto-generated Anime Avatar vs Traditional Avatar

- almost automatic한 customization의 본질은 어떻게 보존할 수 있는지? - 본인과 닮았다 여부를 실질적으로 판단하기 보다, 본인이 적극적으로 클릭해서 아바타를 만들어내는 과정에서 ==본인의 정체성을 나타낸다고 믿게 됨==

### Familiarity and Avatar Identification

- identification은 familiarity보다는 전반적인 게임 전문성(expertise)에 더 큰 영향을 받는다는 결론 → 러닝 커브가 너무 가파르지 않은 게임으로 한정해야할 수도 있음

### Key Takeaway for Designing Customisation Procedure

- 실지적인 사람과의 social interaction이 없다면 아바타의 외모 customization은 less meaningful 할 수 있음
- social element가 있다 하더라도, customization은 여전히 조심스럽게 고려해보아야 함 - customizing에 들어가는 노력과 잠재적인 trade-off가 있어보임
- 프라이버시에 대한 염려

## Limitations and future work

- Mode 1 & 2는 그림체로 같은 style인데 반해, Mode 3는 실제 사진이라 불일치 → identification score에 영향을 미쳤을 수 있음
- 실험 참가자를 모집할 때, familiarity 정도를 제어할 필요가 있음^[identification과의 positive correlation이 있는 것으로 판단되므로] → within-subject design에서는 접할수록 familiar해지기 때문에 문제가 있음
- 이 게임이 실험을 위해서 만들어졌다는 것도 고려해야할 점
- 다른 연구에 비해 customizing의 자유도가 제한적이었음 - 본 연구에서는 아바타의 외모만 customizing 가능
- 참가자 20명으로 제한적이었고, within-subject design의 형태였음 - 다음엔 더 많이 할게

---

# Annotations

(9/26/2022, 3:33:11 AM)

“Recent emerging technologies, such as image translation algorithms, offer new alternatives for avatar customisation.” (Wang and Sweetser, 2022, p. 12)

“This research aims to investigate how playeravatar appearance similarity can affect identification by conducting three comparative experiments with different avatar appearance within an offline single-player game.” (Wang and Sweetser, 2022, p. 12)

“Technology-mediated identities have been a popular research topic in the field of media studies since the emergence of online virtual worlds” (Wang and Sweetser, 2022, p. 12) 기술 매개의 identities는 유명한 연구 주제 - 가상현실세계가 발달함에 따라

“Due to the complexities of the identifying process that happens between the player and the virtual avatar, researchers have investigated various factors concerned with it, ranging from customisation to factors such as similarity” (Wang and Sweetser, 2022, p. 12) 플레이어-아바타 사이의 identifying process가 복잡해서 -> 관련한 다양한 요소들을 고려함! customization ~ similarity

“Avatar customisation” (Wang and Sweetser, 2022, p. 12) Avatar identification 에 있어서 핵심

“Player-avatar similarity” (Wang and Sweetser, 2022, p. 12) 아바타의 외형을 customization 하는 비디오 게임에서는 또다른 하나의 중요한 고려 요소

“New emerging technology, such as image translation algorithms, can convert a person’s self-portrait photograph (selfie) into an anime image.” (Wang and Sweetser, 2022, p. 12) 이에 그치는 것이 아니라 새로운 기술, image translation algorithm은 selfie를 anime image 스타일로 자동으로 바꿔주기도 함 -> automatic way to customize + anime avatar(자기 특징을 잘 살린 = similar)

“Identification in a game is defined as a temporary shift in one’s selfperception in which the game role serves as one kind of self-priming, leading the player to imaginarily mentally absorb the properties of the game character into their self-perception for the duration of media exposure” (Wang and Sweetser, 2022, p. 13) 게임 내 나의 아바타와 나를 얼마나 동일시 하는지의 정도

“identification in video games is also a powerful determinant of player engagement” (Wang and Sweetser, 2022, p. 13)

“a stand-alone single-player game was developed specifically for this research using the game engine Unity.” (Wang and Sweetser, 2022, p. 14)

“In our study, player-avatar identification was measured using a 19-item PAI scale with modification.” (Wang and Sweetser, 2022, p. 16) 24-item PAI를 본 연구에 맞게 modified했음

“All 20 participants (ages 18-52) were Asian (Chinese) females.” (Wang and Sweetser, 2022, p. 16) generalizable?

“It was found that appearance confidence level of a player significantly predicted the player’s most enjoyed game mode.” (Wang and Sweetser, 2022, p. 17) 본인 외모에 만족(자신이 있는)하는 플레이어일수록 본인과 더욱 similar avatar를 선호하는 경향이 있음

“Since no previous experience with video game play was required when recruiting our participants,” (Wang and Sweetser, 2022, p. 17) 참가자부터 일단 모집하고 게임이 결정되었나?

“In other words, the results show that the increase in both players’ previous experience with video games and previous experience with a specific type of game were correlated with increase in identification.” (Wang and Sweetser, 2022, p. 17) 실험 참가자가 비디오 게임에 익숙할수록, 특정 게임의 경험이 많을수록 identification 점수가 높게 나타남

“The result suggested no statistically significant difference between different difficulty levels and identification” (Wang and Sweetser, 2022, p. 18) 난이도에 따른 identification의 유의미한 차이는 없으나, 이는 난이도 차이가 너무 minor해서 그럴 수 있으므로 generalize하지 않을것 같다.

“most participants reported that they tended to have a better game experience with the avatar in either Mode 2 or Mode 3, compared to the default avatar given in Mode 1,” (Wang and Sweetser, 2022, p. 18) 정량분석과도 일치하는 응답

“a few participants commented that they did not consciously feel any difference” (Wang and Sweetser, 2022, p. 18) 뭐가 다른지 차이를 못느끼는 참가자도 있음

“For players that reported not feeling differences between each modes, some managed to think of the potential reason for their feelings. They believed that the engaging (puzzle-based) or stressful (largely due to the time limit) game content distracted their attention from the game avatar” (Wang and Sweetser, 2022, p. 18) 아바타 따위에 신경쓸 겨를이 없어서 뭐가 다른지 몰랐던거 같다.

“However, this does not mean players are capable of paying more attention to their avatar as they become more familiar with the game.” (Wang and Sweetser, 2022, p. 18) 게임에 익숙하다고 아바타에 더 집중하는것만은 아님 : 너무 몰입해서 게임하다보면 아바타의 존재를 점차 까먹음

“strong privacy concerns” (Wang and Sweetser, 2022, p. 18)

“That is, unlike traditional manual customisation that allows players to create an avatar that looks similar to them, auto-generated customisation using an algorithm is capable of achieving a similar effect by enhancing a player’s perceived appearance similarity between player and avatar.” (Wang and Sweetser, 2022, p. 18) 기존의 manual customization과 비슷한 효과를 auto-generated avatar로도 가능했다

“a few participants thought that they cared less about their in-game identity’s appearance when the game contained no social interaction with real humans.” (Wang and Sweetser, 2022, p. 18) 1인용 게임인데 무슨 in-game identity가 중요해? 라고 생각

“Therefore, it is possible that "real" social elements of a game is an important gateway for player-avatar appearance similarity to take effect on avatar identification. The missing "real" social element in our single-player game might have weakened the impact of player-avatar appearance similarity.” (Wang and Sweetser, 2022, p. 19) similarity가 더 빛을 발하려면 "real" social element가 있었어야 !

“appearance similarity does contribute to player-avatar identification and that it indeed plays an active role in boosting the player’s identification score from Mode 1 to Mode 2 and from Mode 1 to Mode 3.” (Wang and Sweetser, 2022, p. 19)

“This might be explained by the "uncanny valley" effect” (Wang and Sweetser, 2022, p. 19)

“Given that our results showed positive correlation between appearance similarity and avatar identification for the group of people with relatively high self-reported appearance satisfaction, the above explanations do not seem to work when considering a specific group of people.” (Wang and Sweetser, 2022, p. 19) 본인의 외모에 만족하는 사람들에게만 해당하는 이야기일 수도 있음

“Moreover, even in a game with a highly realistic environment and highly photorealistic self-similar avatars as in Wauck’s search and rescue game [32], no significant improvement of game experience was found when compared to using an avatar with low appearance similarity.” (Wang and Sweetser, 2022, p. 20) 아주 현실감 넘치고 photorealistic한 본인의 아바타가 등장하는 게임 환경이라고 하더라도 비교적 덜 similar한 avatar에 비해 큰 improvement는 없었다

“Some might question how avatars that are automatically generated can preserve the essence of "customising" when the customisation process is almost automatic.” (Wang and Sweetser, 2022, p. 20) almost automatic한 customization의 본질은 어떻게 보존할 수 있는지? - 본인과 닮았다 여부를 실질적으로 판단하기 보다, 본인이 적극적으로 클릭해서 만들어내는 과정에서 본인의 정체성을 나타낸다고 믿게 됨

“"taking ownership" of it” (Wang and Sweetser, 2022, p. 20)

“identification was more strongly related to the player’s overall video game expertise than the familiarity on a specific type of game.” (Wang and Sweetser, 2022, p. 20)

“This conclusion perhaps should be constrained under the condition that the game itself does not have an extremely hard learning curve” (Wang and Sweetser, 2022, p. 20) identification은 familiarity보다는 전반적인 게임 전문성(expertise)에 더 큰 영향을 받는다는 결론 → 러닝 커브가 너무 가파르지 않은 게임으로 한정해야할 수도 있음

“First, for games that do not contain social interactions with real humans, avatar appearance customisation is less meaningful for certain groups of people.” (Wang and Sweetser, 2022, p. 20)

“Second, even in a game with social elements, the customisation process still requires careful consideration. There seems to be a potential trade-off between the effort involved in customising the character and the improvement this customisation process provides to a player’s overall game experience.” (Wang and Sweetser, 2022, p. 20)

“Finally, user privacy concerns should also be considered when using customisation that involves users uploading their personal likeness for use by image translation algorithms or otherwise.” (Wang and Sweetser, 2022, p. 20)

“Mode 3’s avatar (selfie) is in a different style.” (Wang and Sweetser, 2022, p. 20)

“it is thus necessary to control the level of familiarity when recruiting participants.” (Wang and Sweetser, 2022, p. 20)

“The uniqueness of the game used in this research should be taken into consideration.” (Wang and Sweetser, 2022, p. 20) 이 게임이 실험을 위해서 만들어졌다는 것도 고려해야할 점
