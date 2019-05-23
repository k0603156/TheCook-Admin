const scadule = [
  {
    'id': 1,
    'title': '정성김밥',
    'author': '박지훈',
    'content': '배송완료 1,900,000원 온누리상품권결제 남교동이동',
    'product': '',
    'cost': '1,400,000',
    'address': '전라남도 순천시 조곡동 158-3',
    'tel': '061-245-2924',
    'time': '1시간전',
    'priority': '배송'
  },
  {
    'id': 2,
    'title': '용궁횟집(대반동)',
    'author': '이현신',
    'content': '홀다리 교체완료 복귀합니다',
    'product': '',
    'cost': '1,900,000',
    'address': '전라남도 목포시 죽교동 465-26',
    'tel': '',
    'time': '7시간전',
    'priority': '배송'
  },
  {
    'id': 3,
    'title': '우정식육',
    'author': '이기철',
    'content': '미송분 배송완료1 미스집이동',
    'product': '',
    'cost': '1,900,000',
    'address': '전라남도 목포시 상동 873-6',
    'tel': '061-281-4646',
    'time': '4시간전',
    'priority': '배송'
  },
  {
    'id': 4,
    'title': '남도밥상',
    'author': '이기철',
    'content': '뚝배기 배송완료2 기결제 우정식육이동',
    'product': '',
    'cost': '1,900,000',
    'address': '전라남도 목포시 상동 951-11',
    'tel': '061-285-3677',
    'time': '5시간전',
    'priority': '배송'
  },
  {
    'id': 5,
    'title': '한국병원',
    'author': '서성철',
    'content': '배송완료 복귀합니다',
    'product': '',
    'cost': '1,900,000',
    'address': '전라남도 목포시 상동 149-2',
    'tel': '061-270-5500',
    'time': '2시간전',
    'priority': '배송'
  },
  {
    'id': 6,
    'title': '효경의료재단',
    'author': '서성철',
    'content': '배송완료 한국병원 이동 1',
    'product': '',
    'cost': '1,900,000',
    'address': '상동 195번지 목포시 전라남도 KR',
    'tel': '',
    'time': '1시간전',
    'priority': '배송'
  },
  {
    'id': 7,
    'title': '포미아구찜(용해동)',
    'author': '이현신',
    'content': '냉장고 배송 설치완료 재포장 완료 복귀 합니다',
    'product': '',
    'cost': '1,900,000',
    'address': '포미아구찜',
    'tel': '061-274-9494',
    'time': '9시간전',
    'priority': '배송'
  },
  {
    'id': 8,
    'title': '1965원조제일돌곱창',
    'author': '박지훈',
    'content': '배송완료 계좌이체 하신다함 정성김밥 이동',
    'product': '',
    'cost': '1,700,000',
    'address': '전라남도 목포시 만호동 해안로173번길 28',
    'tel': '061-281-3515',
    'time': '7시간전',
    'priority': '배송'
  },
  {
    'id': 9,
    'title': '1965원조제일돌곱창',
    'author': '박지훈',
    'content': '배송완료 계좌이체 하신다함 정성김밥 이동',
    'product': '',
    'cost': '1,700,000',
    'address': '전라남도 목포시 만호동 해안로173번길 28',
    'tel': '061-281-3515',
    'time': '5시간전',
    'priority': '배송'
  }
]

const getScadule = () => {
  let data = [
    scadule[Math.floor(Math.random() * 3)],
    scadule[Math.floor(Math.random() * 3)],
    scadule[Math.floor(Math.random() * 5)],
    scadule[Math.floor(Math.random() * 7)],
    scadule[Math.floor(Math.random() * 3)],
    scadule[Math.floor(Math.random() * 3)]
  ]// .filter((value, index, self) => self.indexOf(value) === index)
  return Array.from(new Set(data))
}

// /**
//  * Scadule Create Function
//  * @param
//  */
// const createScadule = async function () {
//   const data = await this.$axios.$get('scadule/create')
//   return { data }
// }
// /**
//  * Scadule ListGet Function
//  * @param
//  */
// // const getScadule = async function () {
// //   const data = await this.$axios.$get('scadule/list')
// //   return { data }
// // }
// /**
//  * Scadule Update Function
//  * @param
//  */
// const updateScadule = async function () {
//   const data = await this.$axios.$get('scadule/update')
//   return { data }
// }
// /**
//  * Scadule Delete Function
//  * @param
//  */
// const deleteScadule = async function () {
//   const data = await this.$axios.$get('scadule/delete')
//   return { data }
// }
// /**
//  * Scadule DetailGet Function
//  * @param
//  */
// const detailScadule = async function () {
//   const data = await this.$axios.$get('scadule/detail')
//   return { data }
// }

export {
  // scadule,
  // createScadule,
  getScadule
  // updateScadule,
  // deleteScadule,
  // detailScadule
}
