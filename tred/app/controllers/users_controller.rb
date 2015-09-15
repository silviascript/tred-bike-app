class UsersController < ApplicationController

  def index
    @users = User.all
    render layout: 'application', text: ''
  end

  def show
    @user = User.find(params[:id])
    render status: 200, json: @user.to_json
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user.to_json, status: 200
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user.to_json, status: 200
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      render json: @user.to_json, status: 200
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name)
  end

end
