// src/types/tracking.d.ts

// CJ 대한통운 상세 정보 타입
export interface CjExpressDetails {
    status: string;
    lastLocation: string;
    history: Array<{ time: string; location: string; desc: string }>;
    deliveryDate?: string;
    recipientSignature?: string;
}

// 롯데 택배 상세 정보 타입
export interface LotteExpressDetails {
    deliveryStatus: string;
    receiverName: string;
    trackingEvents: Array<{ eventTime: string; description: string }>;
    pickupLocation?: string;
    deliveryPerson?: string;
}

// 우체국 택배 상세 정보 타입 (예시)
interface PostOfficeDetails {
    currentStatus: string;
    senderInfo: string;
    receiverInfo: string;
    progress: Array<{ step: string; timestamp: string; location: string }>;
}

// 모든 택배사의 details 타입을 포함하는 유니온 타입
export type AllTrackingDetails = CjExpressDetails | LotteExpressDetails | PostOfficeDetails;

// 최종 TrackingResult 인터페이스
export interface TrackingResult { // <-- export 키워드 추가
    status: 'success' | 'fail';
    carrierId: string;
    trackingNumber: string;
    message?: string;
    details?: AllTrackingDetails;
}

// 파일 전체를 모듈로 만들기 위해 빈 export 구문 추가 (가장 중요!)
export {};