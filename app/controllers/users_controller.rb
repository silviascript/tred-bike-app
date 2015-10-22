class UsersController < ApplicationController

  def index
    @current_user = session[:user_id]
    render status: 200, json: @current_user.to_json
  end
  
  def create
    @user = User.from_auth(request.env["omniauth.auth"])
    session[:user_id]=@user.id
    redirect_to "/"
  end

  def destroy
      session[:user_id] = nil
      redirect_to root_path
  end

  private
    def user
      params.require(:ride).permit(:start, :end, :distance, :time, :title)
    end

end
