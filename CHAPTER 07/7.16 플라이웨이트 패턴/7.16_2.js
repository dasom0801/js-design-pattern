// 플라이웨이트 패턴을 사용해 최적하기 전
// 생성자는 책과 관련된 모든 속성을 받아서 할당한다.
// 책이 조금만 있을 때는 잘 작동하지만, 도서관이 확장되며 책이 추가되면 시스템이 느려진다.
// 수천 개의 책 객체를 다루는 건 메모리에 부담이 된다.
class Book1 {
	constructor(
		id,
		title,
		author,
		genre,
		pageCount,
		publisherID,
		ISBN,
		checkoutDate,
		checkoutMember,
		dueReturnDate,
		availability
	) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.pageCount = pageCount;
		this.publisherID = publisherID;
		this.ISBN = ISBN;
		this.checkoutDate = checkoutDate;
		this.checkoutMember = checkoutMember;
		this.dueReturnDate = dueReturnDate;
		this.availability = availability;
	}

	getTitle() {
		return this.title;
	}

	getAuthor() {
		return this.author;
	}

	getISBN() {
		return this.ISBN;
	}

	updateCheckoutStatus(
		bookID,
		newStatus,
		checkoutDate,
		checkoutMember,
		newReturnDate
	) {
		this.id = bookID;
		this.availability = newStatus;
		this.checkoutDate = checkoutDate;
		this.checkoutMember = checkoutMember;
		this.dueReturnDate = newReturnDate;
	}

	extendCheckoutPeriod(bookID, newReturnDate) {
		this.id = bookID;
		this.dueReturnDate = newReturnDate;
	}

	isPastDue(bookID) {
		const currentDate = new Date();
		return currentDate.getTime() > Date.parse(this.dueReturnDate);
	}
}

// 플라이웨이트 패턴으로 최적화
// 내부 상태: 책에 관련된 데이터
class Book {
	constructor({ title, author, genre, pageCount, publisherID, ISBN }) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.pageCount = pageCount;
		this.publisherID = publisherID;
		this.ISBN = ISBN;
	}
}

// BOOK 팩토리의 싱글톤
const existingBooks = {};

class BookFactory {
	createBook(bookData) {
		// 주어진 메타데이터 조합과 일치하는 책이 이미 존재하는지 확인
		const existingBook = existingBooks[bookData.ISBN];
		if (!!existingBook) {
			return existingBook;
		} else {
			// 존재하지 않는 경우, 새로운 책 인스턴스 생성 후 저장
			const book = new Book(bookData);
			existingBook[bookData.ISBN] = book; // 생성된 책 저장
			return book; // 생성된 책 반환
		}
	}
}

// Book 레코드 관리자 싱글톤
const bookRecordDatabase = {};
// 플라이웨이트 패턴을 통해 Book 클래스를 최적화하는 과정에서 제거한 대출 관련 로직(=외부 상태)을 포함한다.
class BookRecordManager {
	// 도서관 시스템에 새로운 도서 추가
	addBookRecord({
		id,
		title,
		author,
		genre,
		pageCount,
		publisherID,
		ISBN,
		checkoutDate,
		checkoutMember,
		dueReturnDate,
		availability,
	}) {
		const bookFactory = new BookFactory();
		const book = bookFactory.createBook({
			title,
			author,
			genre,
			pageCount,
			publisherID,
			ISBN,
		});
		bookRecordDatabase[id] = {
			checkoutMember,
			checkoutDate,
			dueReturnDate,
			availability,
			book,
		};
	}

	updateCheckoutStatus({
		bookID,
		newStatus,
		checkoutDate,
		checkoutMember,
		newReturnDate,
	}) {
		const record = bookRecordDatabase[bookID];
		record.availability = newStatus;
		record.checkoutDate = checkoutDate;
		record.checkoutMember = checkoutMember;
		record.dueReturnDate = newReturnDate;
	}

	extendCheckoutPeriod(bookID, newReturnDate) {
		bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
	}

	isPastDue(bookId) {
		const currentDate = new Date();
		return (
			currentDate.getTime() >
			Date.parse(bookRecordDatabase[bookId].dueReturnDate)
		);
	}
}
