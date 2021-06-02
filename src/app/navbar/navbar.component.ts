import { Component, OnInit } from "@angular/core"
import { NotificationsService } from "@shared/services/notifications.service"
import { AuthenticationService } from "@shared/services/authentication.service"
import { UserService } from "@shared/services/user.service"
import * as M from "materialize-css"

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
	public notifications: any = { data: [{ read_at: "" }] }
	public show: boolean
	public clickOutCounter:number = 0
	public loggedUserName: string = ""

	constructor(
		private notificationsService: NotificationsService,
		private authService: AuthenticationService,
		private service: UserService
	) {}

	ngOnInit(): void {
		this.getNotifications()
		this.service.find(this.authService.currentUserValue?.id)
			.subscribe((data) => this.loggedUserName = data.name)
	}

	showNotifications = () => (this.show = true)

	hideNotifications = () => {
		if (this.clickOutCounter === 0) {
			this.sumClickOut()
		} else {
			this.show = false
			this.clickOutCounter = 0
		}
	}

	sumClickOut = () => this.clickOutCounter++

	markAllAsRead = () => {
		this.notificationsService
			.marAsRead(this.authService.currentUserValue.id)
			.subscribe(
				() => this.getNotifications(),
				(error) => {
					console.error(error)
					M.toast({ 
						html: "Erro ao buscar notificações", 
						classes: "fail" 
					})
				}
			)
	}

	getNotifications = () => {
		this.notificationsService.get(this.authService?.currentUserValue?.id)
			.subscribe(
				(data) => {
					this.notifications = data
					this.show = false
				},
				(error) => {
					console.error(error)
					M.toast({ 
						html: "Erro ao buscar notificações", 
						classes: "fail" 
					})
				}
			)
	}
}
