class RidesController < ApplicationController

  def index
    @rides = Ride.all
    # .order(:distance) to be used once i figure out how I want to sort rides
    render status: 200, json: @rides.to_json
  end

  def show
    @ride = Ride.find(params[:id])
    render status: 200, json: @ride.to_json
  end

  def create
    @ride = Ride.new(ride_params)
    if @ride.save
      render json: @ride.to_json, status: 200
    end
  end

  def update
    @ride = Ride.find(params[:id])
    if @ride.update(ride_params)
      render json: @ride.to_json, status: 200
    end
  end

  def destroy
    @ride = Ride.find(params[:id])
    if @ride.destroy
      render json: @ride.to_json, status: 200
    end
  end

  def usercreate
    @user = User.from_auth(request.env["omniauth.auth"])
    session[:user_id]=@user.id
    redirect_to "/"
  end

  def userdestroy
      session[:user_id] = nil
      redirect_to root_path
  end

  private
  def ride_params
    params.require(:ride).permit(:start, :end, :distance, :time, :title)
  end

end
