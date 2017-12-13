export interface Contact {
	nom, prenom, adresse, telephone, email:string;
}

/**
 * Created by nureynisow on 17/09/2017.
 * for DPTracker
 */
export interface Colis {
	dateEnlevement: Date;
	lieuEnlevement: string;
	dimension: string;
	destination: string;
	guid: string;
	typeColis: 'BARIL' | 'CARTON' | 'PALETTE';
	detail: string;
	createdBy: string;
	poids: number;
	destinataire : Contact | any;
	expediteur: Contact | any;
}

export interface Chargement {
	guid: string;
	description: string;
	createdBy: string;
	leavingDate: Date;
	arrivalDate: Date;
	statutChargement: 'CREATED' | 'OPEN' | 'CLOSED' | 'UNDER_WAY' | 'ARRIVED' | 'ARCHIVED';
	colis: Colis[];
}