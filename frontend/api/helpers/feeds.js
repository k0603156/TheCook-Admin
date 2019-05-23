const Feeds = [
  {
    'id': 1,
    'title': '정성김밥',
    'author': '박지훈',
    'content': '배송완료 1,900,000원 온누리상품권결제 남교동이동',
    'product': '',
    'cost': '1,400,000',
    'address': '전라남도 순천시 조곡동 158-3',
    'tel': '061-245-2924',
    'time': '2019년 4월 11일 오후 6:32',
    'status': '긴급'
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
    'time': '17시간전',
    'status': '중요'
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
    'time': '17시간전',
    'status': '보통'
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
    'time': '17시간전',
    'status': '보통'
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
    'time': '17시간전',
    'status': '보통'
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
    'time': '18시간전',
    'status': '보통'
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
    'time': '18시간전',
    'status': '보통'
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
    'time': '18시간전',
    'status': '보통'
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
    'time': '19시간전',
    'status': '보통'
  }
]

/**
 * Feeds Create Function
 * @param
 */
const createFeeds = async function () {
  const data = await this.$axios.$get('feeds/create')
  return { data }
}
/**
 * Feeds GetList Function
 * @param
 */
const getFeeds = (limit) => {
  return (limit) ? Feeds.slice(0, limit) : Feeds
}
/**
 * Feeds Update Function
 * @param
 */
const updateFeeds = async function () {
  const data = await this.$axios.$get('feeds/update')
  return { data }
}
/**
 * Feeds Delete Function
 * @param
 */
const deleteFeeds = async function () {
  const data = await this.$axios.$get('feeds/delete')
  return { data }
}
/**
 * Feeds ReadDetail Function
 * @param
 */
const detailFeeds = async function () {
  const data = await this.$axios.$get('feeds/detail')
  return { data }
}
export {
  Feeds,
  createFeeds,
  getFeeds,
  updateFeeds,
  deleteFeeds,
  detailFeeds
}
