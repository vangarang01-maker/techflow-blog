---
title: "Spotlight를 넘어선 Raycast 완벽 세팅: 마우스 없이 끝내는 Mac 업무 자동화 워크플로우"
description: "기본 Spotlight의 한계를 극복하고 앱 실행, 창 관리, 텍스트 스니펫, 클립보드 히스토리까지 단축키 하나로 제어하는 Raycast 핵심 세팅 가이드입니다. 실무에서 바로 쓸 수 있는 필수 확장 프로그램(Extensions)과 커스텀 단축키 설정법을 정리했습니다."
pubDate: "2026-09-27"
category: "Mac & PC"
tags: ["Raycast", "Mac생산성", "업무자동화", "단축키"]
author: "테크플로우 편집팀"
draft: false
---

개발사의 거창한 릴리즈 노트와 화려한 마케팅 문구는 모두 걷어내겠습니다. 지난 10년간 테크 에디터로 일하며 수많은 생산성 툴을 검증해 왔지만, 실제 매일 화면을 마주하고 일하는 실무자에게 진짜 의미 있는 변화는 ‘작업 흐름이 깨지지 않는 단속적인 경험’ 딱 하나였습니다. 

하루에도 수십 번씩 텍스트를 복사하느라 클립보드 앱을 켰다 끄고, 화면 분할을 위해 마우스를 쥐고 창 모서리를 드래그하며, 사칙연산이나 환율을 확인하려 브라우저 탭을 새로 여는 행위는 전부 우리의 몰입을 방해하는 낭비 요소입니다. Spotlight의 단순함에 한계를 느끼셨다면, 이제 Raycast로 Mac의 제어권을 완벽히 가져올 때입니다. 이번 리뷰에서는 실무자의 작업 시간을 즉각적으로 단축시켜 줄 Raycast의 핵심 실전 세팅법을 상세히 정리해 드립니다.

---

## 왜 지금 Raycast로 갈아타야 하는가?

기존 macOS 스포트라이트(Spotlight)나 Alfred 같은 유틸리티가 단순히 앱을 실행하고 파일을 찾는 용도에 머물렀다면, Raycast는 Mac에서 일어나는 모든 업무 제어를 키보드 하나로 통합하는 단일 오케스트라에 가깝습니다.

1. **마우스 이동 및 클릭 횟수 80% 감소**: 손이 키보드 하우징을 벗어나 마우스로 이동하는 1.5초의 간극을 완전히 줄여줍니다. 하루에 수십 번 반복되는 작업 시 최소 20분의 실질 업무 시간이 절약됩니다.
2. **유료 생산성 툴 대거 통합**: Magnet/Rectangle(창 관리), Paste(클립보드 히스토리), TextExpander(상용구) 등 개별 유료 구독 및 앱 구매 비용을 0원으로 줄여주며, 시스템 리소스도 하나로 단일화됩니다.
3. **강력한 확장 프로그램(Extensions) 생태계**: 단순 검색을 넘어 Notion 검색, GitHub Pull Request 확인, DeepL 즉시 번역 등 실제 업무에 사용하는 툴과 1:1로 직접 연결됩니다.

---

## 사전 준비 사항

세팅에 들어가기 전 다음 세 가지 요소를 미리 확인하세요.

* **macOS 버전**: macOS Monterey(12.0) 이상 지원 (최신 Sonoma 및 Sequoia 완벽 호환)
* **프로그램 다운로드**: Raycast 공식 홈페이지(raycast.com)에서 무료 버전 다운로드 및 설치
* **Spotlight 단축키 비활성화**: macOS 기본 단축키와 충돌을 방지하기 위한 선제 작업

---

## 3단계로 끝내는 Raycast 핵심 실전 세팅

### 1단계: Spotlight 단축키 대체 및 기본 환경 최적화

가장 먼저 할 일은 macOS의 기본 Spotlight 단축키(`Cmd + Space`)를 Raycast가 가져오도록 설정하는 것입니다.

1. **macOS 기본 단축키 해제**: `[시스템 설정]` > `[키보드]` > `[키보드 단축키]` > `[Spotlight]`로 이동합니다. `Spotlight 검색 표시` 항목의 체크를 해제합니다.
2. **Raycast Hotkey 매핑**: Raycast를 실행한 뒤, 설정(`Cmd + ,`)에 진입합니다. `General` 탭의 `Raycast Hotkey` 입력창을 클릭하고 `Cmd + Space`를 입력합니다.
3. **부팅 시 자동 실행**: 동일한 `General` 탭에서 `Launch at login` 옵션을 체크하여 Mac 켜짐과 동시에 항시 대기 상태로 만듭니다.

> 💡 **팁**: Raycast 설정의 `Window Mode`를 `Compact`로 변경하면 검색창 크기가 줄어들어 작업 중인 화면을 가리지 않고 한층 더 깔끔하게 사용할 수 있습니다.

```
[설정 경로 요약]
macOS 시스템 설정 > 키보드 > 키보드 단축키 > Spotlight 해제
Raycast 설정(Cmd + ,) > General > Hotkey: Cmd + Space 설정
```

---

### 2단계: 화면 분할(Window Management) 및 클립보드 히스토리 매핑

타사 창 관리 앱(Magnet, Rectangle 등)을 삭제하고 Raycast 내장 기능으로 전환합니다.

1. **Window Management 설정**: Raycast 설정에서 `Extensions` 탭을 선택하고 `Window Management`를 검색합니다.
2. **단축키 할당**:
   * **Left Half (좌측 50% 정렬)**: `Ctrl + Option + Left`
   * **Right Half (우측 50% 정렬)**: `Ctrl + Option + Right`
   * **Maximize (전체 화면)**: `Ctrl + Option + Up`
   * **Center (중앙 정렬)**: `Ctrl + Option + Down`
3. **Clipboard History 활성화**: `Extensions` 탭에서 `Clipboard History`를 찾은 후, 직관적인 핫키(예: `Option + V` 또는 `Cmd + Shift + V`)를 할당합니다. 텍스트, 이미지, 색상 코드까지 복사된 모든 기록을 즉시 불러올 수 있습니다.

> 💡 **팁**: Clipboard History 설정 내 `Primary Action`을 `Paste to Active App`으로 세팅하면, 엔터 키를 누르는 즉시 현재 작업 중인 문서나 채팅창에 복사한 내용이 자동으로 붙여넣어집니다.

---

### 3단계: 스니펫(Snippets) 등록 및 확장 프로그램(Store) 연동

자주 쓰는 텍스트와 반복 업무를 자동화하는 가장 중요한 단계입니다.

1. **상용구(Snippets) 등록**: Raycast 창에서 `Create Snippet`을 입력합니다.
   * **Name**: 회의록 양식
   * **Keyword**: `!meet`
   * **Text**: 정형화된 회의록 템플릿 작성
   * *키워드(`!meet`)를 아무 텍스트 입력창에서나 치면 지정된 문구가 즉시 대치됩니다.*
2. **Store 확장 프로그램 설치**: Raycast 입력창에 `Store`를 검색해 진입합니다. 업무 필수 익스텐션을 설치합니다.
   * **DeepL Translator**: 드래그한 텍스트를 단축키 하나로 번역 팝업 호출.
   * **Google Workspace**: 브라우저를 열지 않고 내 구글 드라이브 문서 및 일정을 검색.
   * **GitHub**: 자신에게 할당된 PR(Pull Request) 및 Issue 상태 확인.

> 💡 **팁**: Snippet 작성 시 `{date}`나 `{clipboard}` 같은 동적 변수(Dynamic Placeholders)를 활용하면, 스니펫이 실행되는 순간의 현재 날짜나 복사되어 있던 텍스트가 자동으로 조합되어 입력됩니다.

---

## macOS 기본 도구 vs Raycast 통합 워크플로우 비교

| 비교 항목 | macOS 기본 도구 조합 | Raycast 통합 워크플로우 |
| :--- | :--- | :--- |
| **앱 실행 및 파일 검색** | Spotlight (기능 및 검색 깊이 제한적) | Raycast (앱 내부 명령 실행 및 파일 딥서치 지원) |
| **화면 분할 및 창 관리** | 별도 유료 앱 필요 (Magnet, Rectangle 등) | 내장 **Window Management** 단축키로 완벽 대체 |
| **텍스트 대치 (상용구)** | 시스템 텍스트 대치 (줄바꿈/서식 제약) | 동적 변수(`{date}`) 지원 **Snippets** 지원 |
| **클립보드 관리** | 지원 불가 (별도 Paste 앱 구독 필요) | **Clipboard History**를 통해 이미지, 텍스트 무제한 추적 |
| **외부 서드파티 툴 연동** | 웹 브라우저 접속 후 검색 및 확인 | 단축키로 **Notion, GitHub, DeepL** 즉시 연동 |

---

## 업무 속도를 3배 높여주는 에디터의 꿀팁 (Pro Tips)

### 1. Quicklinks로 반복 웹 검색 1초 만에 끝내기
자주 들어가는 웹사이트나 특정 검색 엔진 결과를 즉시 여는 기능입니다. Raycast에서 `Create Quicklink`를 실행하고, URL 부분에 `https://www.google.com/search?q={Query}`를 입력한 뒤 단축 명령어 `g`를 지정하세요. Raycast에 `g 생산성`이라고 입력하는 즉시 구글 검색 결과 페이지가 열립니다.

### 2. 자연어 지원 계산기 및 단위 변환
별도로 계산기 앱을 켤 필요가 없습니다. Raycast 창(`Cmd + Space`)을 열고 아래와 같이 그냥 타핑하세요.
* `100 USD to KRW` (실시간 환율 반영 변환)
* `3 hours later` (현재 시간 기준 3시간 뒤 시각 계산)
* `1250 * 1.15` (사칙연산 및 퍼센트 계산)

### 3. 설정 내보내기(Export Settings)로 백업 및 환경 동기화
열심히 구축한 스니펫과 단축키 환경을 잃어버리지 않으려면 설정 백업이 필수입니다. Raycast 설정의 `Advanced` > `Export Settings`를 통해 단 하나의 파일로 세팅값을 백업해 두세요. 새로 산 Mac에서도 5초 만에 동일한 워크플로우를 복원할 수 있습니다.

---

## 자주 묻는 질문 (FAQ)

**Q1. 기존에 Alfred 유료 버전(Powerpack)을 사용 중인데 갈아탈 가치가 충분한가요?**
> 네, 강력히 추천합니다. Alfred Powerpack이 제공하는 스니펫, 클립보드, 커스텀 워크플로우 기능의 대부분을 Raycast는 기본 무료로 제공합니다. 특히 UI가 훨씬 현대적이며, 커뮤니티 개발자들이 오픈소스로 제공하는 익스텐션 스토어의 확장성은 Alfred를 아득히 뛰어넘습니다.

**Q2. Raycast를 상시 켜두면 배터리 소모나 시스템 리소스(RAM)를 많이 차지하지 않나요?**
> 전혀 걱정하지 않으셔도 됩니다. Raycast는 일렉트론(Electron) 기반의 무거운 앱과 달리, Rust와 Swift 네이티브 코드로 구축되었습니다. 배경에서 작동할 때 RAM 점유율은 불과 60～80MB 수준에 불과하며 CPU 점유율도 사실상 0%에 가깝습니다.

---

## 마무리하며

생산성 향상의 핵심은 대단한 이론을 익히는 것이 아니라, 매일 반복되는 미세한 낭비 시간을 지워나가는 데 있습니다. 마우스를 쥐기 위해 손을 옮기는 1초, 창 크기를 조절하려 모서리를 잡는 2초, 이메일 주소를 일일이 입력하는 5초의 시간이 모여 여러분의 작업 몰입도를 깨뜨리고 있었습니다.

오늘 안내해 드린 3단계 세팅만 완료해도 매일 최소 20분 이상의 시간을 절약할 수 있습니다. 지금 바로 기본 Spotlight를 끄고 Raycast를 통해 Mac을 가장 강력한 업무 자동화 머신으로 변신시켜 보시기 바랍니다.
