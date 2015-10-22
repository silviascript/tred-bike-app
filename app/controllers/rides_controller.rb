class RidesController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @rides = @user.rides
    render status: 200, json: @rides.to_json
  end

  def show
    @user = User.find(params[:id])
    @rides = @user.rides
    # @ride = Ride.find(params[:id])
    render status: 200, json: @ride.to_json
  end

  def create
    @user = User.find(params[:user_id])
     @ride = Ride.create!(ride_params_merge(user: @user))
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

  private
  def ride_params
    params.require(:ride).permit(:start, :end, :distance, :time, :title, :user_id)
  end

end
