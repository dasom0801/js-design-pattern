const buildPhotoView = (photoModel, photoController) => {
  const base = document.createElement('div');
  const photoEl = document.createElement('div');

  base.appendChild(photoEl);

  const render = () => {
    // 사진 항목에 대한 HTML을 생성하기 위해 Lodash의 템플릿 메서드를 사용
    photoEl.innerHTML = _.template('#photoTemplate', {
      src: photoModel.getSrc()
    });
  };

  photoModel.addSubscriber(render);
  photoEl.addEventListener('click', () => {
    photoController.handleEvent('click', photoModel);
  });

  const show = () => {
    photoEl.style.display = '';
  }

  const hide = () => {
    photoEl.style.display = 'none';
  }

  return {
    showView: show,
    hideView: hide
  }
};

// sample data
const photos = [
  {
    caption: 'Sample Photo 1',
    src: 'photo1.jpg',
    metadata: 'Some metadata for photo 1',
  },
  {
    caption: 'Sample Photo 2',
    src: 'photo2.jpg',
    metadata: 'Some metadata for photo 2',
  }
];

// 태그 템플릿 리터럴을 위한 함수
function photoTemplate(strings, caption, src, metadata) {
  return strings[0] + caption + strings[1] + src + strings[2] + metadata + strings[3];
}

// 태그 템플릿 리터럴 문자열로 템플릿 정의
const template = (caption, src, metadata) => photoTemplate`<li class="photo">
    <h2>${caption}</h2>
    <img class="source" src="${src}" />
    <div class="metadata">${metadata}</div>
</li>`;

// 데이터를 돌며 템플릿을 추가
const photoList = document.createElement('ul');
photos.forEach(({ caption, src, metadata}) => {
  const photoItem = template(caption, src, metadata);
  photoList.innerHTML += photoItem;
});

// DOM에 만들어진 템플릿 추가
document.body.appendChild(photoList)

