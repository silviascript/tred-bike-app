class UsersController < ApplicationController

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
