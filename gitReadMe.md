# Git 관련 정리

## branch?

* Git을 통해 작업하기 위한 하나의 개념
* master는 master라는 이름의 branch라고 보면 됨.
* 각각의 branch는 독립적인 것으로 다른 branch에 영향을 주지 않음.
* 이번 progect에서 branch의 사용은 **기능을 추가하는데에 있어 master branch의 무결성**을 위해 사용하기로 한다.

## HEAD

* Git에 있는 포인터, 현재 작업 중인 branch를 가리킨다.
* git branch를 실행하면 모든 branch 목록을 볼 수 있다.
  - 출력된 branch 중 '*'가 앞에 있는 branch가 현재 작업 중인 branch 임. 

## branch 관련 명령 (ex: godMinho라는 branch 생성)

* branch 생성 : git branch godMinho
* branch 조회 : git branch
* branch 히스토리 조회 : git log --oneline --decorate --graph --all
* branch 커밋 메세지 조회 : git branch -v
* 이미 merge한 branch 조회 : git branch --merged

## branch merge 순서 (ex: godMinho라는 branch가 있다고 가정)


1. git checkout master -> HEAD가 master를 가리키도록 설정
2. git merge godMinho -> branch를 master로 merge
3. git branch -d godMinho -> branch 삭제
4. git push origin: godMinho -> github의 branch 삭제

* merge 하는 두 브랜치에서 같은 파일의 한 부분을 동시에 수정하고 merge 하면 Git은 해당 부분을 Merge 하지 못한다.

## merge에서 충돌 발생 시

1. git status 실행
2. 출력된 내용에서 충돌이 일어난 파일은 unmerged 상태로 표시
3. 충돌이 일어난 파일 수정
4. git add
5. merge 실행 



